import { Box, Button, Divider } from "@chakra-ui/react";
import DropdownFilter from "../DropdownFilter";


export default function Export() {

    function handleExportData() {

    }

    return (
        <Box className="account-right-side-container">
            <p> Export Workout Data </p>
            <p> Export your entire workout history to a CSV file. Exported workouts data can not be imported back into Hevy </p>
            <Divider></Divider>
            <Button onClick={handleExportData}>Export Workout Data</Button>
            
        </Box>
    );
}