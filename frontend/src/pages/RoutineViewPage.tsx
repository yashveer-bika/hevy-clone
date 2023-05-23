import { Box, Button } from "@chakra-ui/react";
import RoutineViewTable from "../components/RoutineViewTable";
import "../styles/RoutineViewPage.css"

export default function RoutineViewPage() {

    const username = "INSERT USERNAME HERE"

    function editRoutine() {

    }
    function copyLink() {

    }

    return (
        <Box className="routine-view-screen-container">
            <Box className="routine-view-left-container">
                <p className="routine-title"> TITLE </p>
                
                <Box className="routine-user-info-container"> 
                    <img alt="profile-photo"></img> 
                    <p>Created by {username}</p> 
                </Box>

                <RoutineViewTable></RoutineViewTable>
            </Box>

            <Box className="routine-view-right-container">
                <Button onClick={editRoutine}>Edit Routine</Button>
                <Button onClick={copyLink}>Copy Link</Button>
            </Box>
        </Box>
    );
}