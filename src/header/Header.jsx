import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

const linksArray = ["Home", "Diaries", "Auth"];

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar sx={{ bgcolor: "transparent" }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "black" }} />
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ml: "auto", textDecoration: "none"}}
        >
          {
            linksArray.map((link, index) => (
              <Tab key={index} label={link} value={index} sx={{
                ml: "auto",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "18px",
                }
              }}/>
            ))
          }
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;