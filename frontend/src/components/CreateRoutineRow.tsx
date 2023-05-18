import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import "../styles/CreateRoutineRow.css"
import SetRepTable from "./SetRepTable";
import TimerDropdown from "./TimerDropdown";


interface Exercise {
    name: string
    imgPath: string
}

export default function CreateRoutineRow({exercise} : any) {

    const [notes, setNotes] = useState("");


    function handleMenuToggle() {

    }

    function handleAddToSuperset() {

    }

    function handleRemoveExercise() {

    }


    return (
        <Box className="container">
            <Box className="header-container">
                <Box className="image-title-container">
                    <div> 
                        <img src={exercise.imgPath} alt="exercise image" width={"50px"} /> 
                    </div>
                    <p> {exercise.name} </p>
                </Box>

                <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<HamburgerIcon />}
                        aria-label="Options"
                        variant="ghost"
                        onClick={handleMenuToggle}
                    />
                    <MenuList>
                    <MenuItem onClick={handleAddToSuperset}>Add to Superset</MenuItem>
                    <MenuItem onClick={handleRemoveExercise}>Remove Exercise</MenuItem>
                    </MenuList>
                </Menu>

            </Box>

            <Textarea
                value={notes}
                onChange={event => setNotes(event.target.value)}
                placeholder="Notes..."
                // fontSize={"xl"}
                variant='unstyled'
            />

            <Box className="timer-container">
                <Box className="timer-text-container">
                    <p>Rest Timer:</p>
                </Box>

                <Box className="timer-dropdown">
                    <TimerDropdown/>
                </Box>
            </Box>

            <SetRepTable></SetRepTable>


        </Box>
    );
}