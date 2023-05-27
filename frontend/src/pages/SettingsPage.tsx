import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/settings/Account";
import Profile from "../components/settings/Profile";
import SettingButton from "../components/settings/SettingButton";

import "../styles/SettingsPage.css"
import Subscription from "../components/settings/Subscription";
import Units from "../components/settings/Units";
import Theme from "../components/settings/Theme";
import Export from "../components/settings/Export";

interface settingView {
  path : string
  text : string
  view : JSX.Element
  imgPath? : string 
}

const settingViews : settingView[]  = [
  {
    path : "profile",
    text : "Profile",
    view : <Profile></Profile>,
    imgPath : ""
  },
  {
    path : "accounts",
    text : "Account",
    view : <Account></Account>,
    imgPath : ""
  },{
    path : "subscription",
    text : "Manage Subscription",
    view : <Subscription></Subscription>,
    imgPath : ""
  },{
    path : "units",
    text : "Units",
    view : <Units></Units>,
    imgPath : ""
  },{
    path : "theme",
    text : "Theme",
    view : <Theme></Theme>,
    imgPath : ""
  },{
    path : "export",
    text : "Export Data",
    view : <Export></Export>,
    imgPath : ""
  },
]

export default function SettingsPage() {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState("");

  // const activeView = settingViews.filter(sv => sv.path === activePath)[0].view

  return (
    <Box className="screen-container">
      <Box className="settings-container">
          <Box className="left-side-container">
              {/* <p className="settings-header-text">Account</p> */}
              {/* <Box className="setting-button"> <img src="" alt="icon"></img> <p>Profile</p> <img src="" alt="arrow-icon"></img> </Box> */}
              {/* <SettingButton imgPath="" text="Profile" onClick={() => navigate("?profile") } ></SettingButton>
              <SettingButton imgPath="" text="Account" onClick={() => navigate("?accounts") } ></SettingButton>
              <SettingButton imgPath="" text="Manage Subscription" onClick={() => navigate("?subscription") } ></SettingButton> */}
              {/* <p className="settings-header-text">Preferences</p> */}
              {/* <SettingButton imgPath="" text="Units" onClick={() => navigate("?units") } ></SettingButton>
              <SettingButton imgPath="" text="Theme" onClick={() => navigate("?theme") } ></SettingButton>
              <SettingButton imgPath="" text="Export Data" onClick={() => navigate("?export") } ></SettingButton> */}

              {
                settingViews.map(
                  (sv : settingView) => 
                    <SettingButton key={sv.path} imgPath={sv.imgPath} text={sv.text} onClick={() => { navigate(`?${sv.path}`) ; setActivePath(sv.path) } } ></SettingButton>
                )
              }
          </Box>
          <Box className="right-side-container">
              {
                activePath === "profile" ? <Profile></Profile> : (
                  activePath === "accounts" ? <Account></Account> : (
                    activePath === "subscription" ? <Subscription></Subscription> : (
                      activePath === "units" ? <Units></Units> : (
                        activePath === "theme" ? <Theme></Theme> : (
                          activePath === "export" ? <Export></Export> : 
                            <div></div>
                        )
                      )
                    )
                  )
                )
              }
          </Box>
      </Box>
    </Box>
  );
}

