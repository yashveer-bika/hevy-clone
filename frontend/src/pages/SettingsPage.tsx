import { Box } from "@chakra-ui/react";
import Profile from "../components/settings/Profile";
import SettingButton from "../components/settings/SettingButton";

import "../styles/SettingsPage.css"

export default function SettingsPage() {
  return (
    <Box className="screen-container">
      <Box className="settings-container">
          <Box className="left-side-container">
              <p className="settings-header-text">Account</p>
              {/* <Box className="setting-button"> <img src="" alt="icon"></img> <p>Profile</p> <img src="" alt="arrow-icon"></img> </Box> */}
              <SettingButton imgPath="" text="Profile"></SettingButton>
              <SettingButton imgPath="" text="Account"></SettingButton>
              <SettingButton imgPath="" text="Manage Subscription"></SettingButton>
              <p className="settings-header-text">Preferences</p>
              <SettingButton imgPath="" text="Units"></SettingButton>
              <SettingButton imgPath="" text="Theme"></SettingButton>
              <SettingButton imgPath="" text="Export Data"></SettingButton>
          </Box>
          <Box className="right-side-container">
              <Profile></Profile>
          </Box>
      </Box>
    </Box>
  );
}

