import { Box, Button, Divider, Input } from "@chakra-ui/react";
import { useState } from "react";
import DropdownFilter from "../DropdownFilter";

import "../../styles/settings/Account.css"

export default function Account() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    function handleUpdatePassword() {

    }

    return (
        <Box className="account-right-side-container">
            <Box className="private-box">
                <p> Private Profile </p>
                <DropdownFilter options={["On", "Off"]}></DropdownFilter> 
            </Box>
            <p> Having a private profile means other users need to 
                request to follow you. Only if you accept their follow
                request, will they be able to see your workouts. </p>
            <Divider></Divider>
            <Box className="password-update-block">
                <p>Current Password</p>
                <Input
                    variant="filled"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder=''
                />
                <p>New Password</p>
                <Input
                    variant="filled"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder=''
                />
                <Button className="update-password-button" onClick={handleUpdatePassword}>Update Password</Button>

            </Box>
            
        </Box>
    );
}