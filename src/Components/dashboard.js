import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Switch,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import './dashboard.css'

const DashBoard = ({ userName }) => {
  const [online, setOnline] = useState(false);
  const [volume, setVolume] = useState(20); // Initialize volume state
  const [quality, setQuality] = useState(2); // Initialize quality state
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const newNotifications = [];

    if (online) {
      newNotifications.push(
        "Your application is offline. You won't be able to share or stream music to other devices."
      );
    }

    if (volume > 80) {
      newNotifications.push(
        "Listening to music at a high volume could cause long-term hearing loss."
      );
    }

    if (quality === 1) {
      newNotifications.push(
        "Music quality is degraded. Increase quality if your connection allows it."
      );
    }

    setNotifications(newNotifications);
  }, [online, volume, quality]);

  const handleToggle = () => {
    setOnline((prevOnline) => !prevOnline);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleQualityChange = (event) => {
    setQuality(event.target.value);
  };
  return (
    <div>
      <div>
        <Typography variant="h6">Welcome, {userName}!</Typography>
        {/* Add more components for logged-in users here*/}
      </div>

      <div>
        <Box className="dashboard-container">
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Card 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of the first card.
              </Typography>
              <Switch
                checked={online}
                onChange={handleToggle}
                name="onlineStatus"
                color="primary"
              />
              <Typography variant="body2" color="text.secondary">
                {online ? "Online" : "Offline"}
              </Typography>

              <Slider
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="volume-slider"
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
              />
              <Typography variant="body2" color="text.secondary">
                Volume: {volume}
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="quality-select-label">Quality</InputLabel>
                <Select
                  labelId="quality-select-label"
                  id="quality-select"
                  value={quality}
                  label="Quality"
                  onChange={handleQualityChange}
                >
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body2" color="text.secondary">
                Quality:{" "}
                {quality === 1 ? "Low" : quality === 2 ? "Normal" : "High"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Action 1</Button>
            </CardActions>
          </Card>

          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Card 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of the second card.
              </Typography>
              <Switch
                checked={online}
                onChange={handleToggle}
                name="onlineStatus"
                color="primary"
              />
              <Typography variant="body2" color="text.secondary">
                {online ? "Online" : "Offline"}
              </Typography>

              <Slider
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="volume-slider"
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
              />
              <Typography variant="body2" color="text.secondary">
                Volume: {volume}
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="quality-select-label">Quality</InputLabel>
                <Select
                  labelId="quality-select-label"
                  id="quality-select"
                  value={quality}
                  label="Quality"
                  onChange={handleQualityChange}
                >
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body2" color="text.secondary">
                Quality:{" "}
                {quality === 1 ? "Low" : quality === 2 ? "Normal" : "High"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Action 2</Button>
            </CardActions>
          </Card>

          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Card 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the content of the third card.
              </Typography>
              <Switch
                checked={online}
                onChange={handleToggle}
                name="onlineStatus"
                color="primary"
              />
              <Typography variant="body2" color="text.secondary">
                {online ? "Online" : "Offline"}
              </Typography>
              <Slider
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="volume-slider"
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
              />
              <Typography variant="body2" color="text.secondary">
                Volume: {volume}
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="quality-select-label">Quality</InputLabel>
                <Select
                  labelId="quality-select-label"
                  id="quality-select"
                  value={quality}
                  label="Quality"
                  onChange={handleQualityChange}
                >
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body2" color="text.secondary">
                Quality:{" "}
                {quality === 1 ? "Low" : quality === 2 ? "Normal" : "High"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Action 3</Button>
            </CardActions>
          </Card>
        </Box>
      </div>
      <div>
        <Typography variant="h6">System Notifications</Typography>
        {notifications.map((notification, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {notification}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
