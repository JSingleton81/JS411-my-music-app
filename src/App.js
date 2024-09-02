import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./App.css";
import NavBar from "./Components/navbar.js";
import DashBoard from "./Components/dashboard.js";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      loggedIn: false,
      error: "", 
    };
  }

  handleInputChange = (e) => {
    // console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    // console.log("Logging in...");
    const { userName, password } = this.state;
    if (userName === "admin" && password === "password") { // Simple validation
      this.setState({ loggedIn: true, error: "" });
    } else {
      this.setState({ error: "Invalid username or password" });
    }
  };

  render() {
    return (
      <div>

        <NavBar /> {/* Always show the NavBar */}

        {this.state.loggedIn ? (
          <DashBoard userName={this.state.userName} /> // Pass userName as a prop
        ) : (

          // Your login form code here
          <form onSubmit={this.handleLogin}>
            <Typography variant="h6" component="h2">
              Please Log In
            </Typography>
            <TextField
              label="Username"
              name="userName"
              type="text"
              value={this.state.userName}
              onChange={this.handleInputChange}
              required
              autoComplete="username"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
              autoComplete="current-password"
            />
            {this.state.error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {this.state.error}
              </Typography>
            )}
            <Button type="submit" variant="contained">Login</Button>
          </form>
        )}
      </div>
    );
  }
}

export default Login;
