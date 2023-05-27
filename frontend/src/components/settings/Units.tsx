import { Box } from "@chakra-ui/react";
import DropdownFilter from "../DropdownFilter";

import "../../styles/settings/Units.css"

export default function Units() {
    return (
        <Box className="account-container">
            <Box className="unit-container">
                <p className="title"> Weight Unit </p>
                <DropdownFilter options={["lbs", "kg"]}></DropdownFilter>
            </Box>
            <Box className="unit-container">
                <p className="title"> Distance Unit </p>
                <DropdownFilter options={["miles", "kilometers"]}></DropdownFilter>
            </Box>
            <Box className="unit-container">
                <p className="title"> Body Measurement Unit </p>
                <DropdownFilter options={["in", "cm"]}></DropdownFilter>
            </Box>
        </Box>
    );
}