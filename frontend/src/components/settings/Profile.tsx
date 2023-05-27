import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import "../../styles/settings/Profile.css"

function NamedInputBlock({name} : any) {
    const [text, setText] = useState("");

    return (
        <Box className="named-input-block-container">
            <p className="named-input-name">{name}</p>
            <Input
                variant="unstyled"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder=''
            />
        </Box>
        
    );
}

export default function Profile() {
    // TODO: r/w name from API
    // const [name, setName] = useState("");
    // const [bio, setBio] = useState("");

    return (
        <Box>
            <Box className="profile-pic-container">
                <img src="" alt="profile-pic"/>
                <Button variant="outline">Change Picture</Button>
            </Box>

            <NamedInputBlock name="Name"></NamedInputBlock>
            <NamedInputBlock name="Bio"></NamedInputBlock>

        </Box>
    );
}