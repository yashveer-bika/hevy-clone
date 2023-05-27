import { Box } from "@chakra-ui/react";
import DropdownFilter from "../DropdownFilter";


export default function Account() {
    return (
        <Box className="account-container">
            <Box className="unit-container">
                <p className="title"> Weight Unit </p>
                <DropdownFilter options={["lbs", "kg"]}></DropdownFilter>
            </Box>
        </Box>
    );
}