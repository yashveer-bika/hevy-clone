import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutineCell from "../components/RoutineCell";

import "../styles/LogPage.css"

export default function LogPage() {
    const navigate = useNavigate();

    // TODO:
    function handleStartEmptyWorkout() {
        navigate("/logging/new-routine");
    }
    // TODO:
    function handleCreateNewFolder() {

    }
    // TODO: 
    function handleNewRoutine() {

    }
    // TODO: 
    function handleExplore() {

    }

    // TODO: change the routineLink to my routine page
    const [routines, setRoutines] = useState([
        { id: 1, name: "My Routines" },
        { id: 2, name: "Routine 1", routineLink: "https://www.youtube.com/watch?v=IOl42YpK_Es" },
        { id: 3, name: "Routine 2", routineLink: "https://www.youtube.com/watch?v=HE45jVN7XKM"  },
        { id: 4, name: "Routine 3", routineLink: "https://www.youtube.com/watch?v=X6H4l9R3DnY" }
      ]);
      const [routineCounter, setRoutineCounter] = useState(routines.length);

      // TODO: change the routineLink to my routine page
    const [folders, setFolders] = useState([
        { id: 1, name: "Hersovyac Beginner" },
        { id: 2, name: "Stronglifts 5x5", },
        { id: 3, name: "Home Workouts", },
      ]);

    
    // TODO: create a super simple view.
    // 

    function handleDuplicate() {

    }

    function handleDelete() {
        
    }

    return (
        <Box className="log-screen-container">
            <Box className="log-inner-screen-container">

                <Box className="log-header-container">
                    <p>Quick Start</p>
                </Box>

                <Button onClick={handleStartEmptyWorkout}>Start Empty Workout</Button>
                
                <Box className="log-header-container">
                    <p>Routines</p>
                    <Button onClick={handleCreateNewFolder}>Create New Folder</Button>
                </Box>

                <Box>
                    <Button onClick={handleNewRoutine}>New Routine</Button>
                    <Button onClick={handleExplore}>Explore</Button>
                </Box>

                {/* TODO: routines */}

                <Box className="routines-overview-screen-right-container" borderRadius='lg' border="1px" w="60%" borderColor='gray.300' >
                
                    {/* <Box>
                        {
                            folders.map((folder) => (
                                <Folder 
                                    key={folder.id}
                                    id={folder.id}
                                    name={folder.name}
                                    onAddRoutine={() => {}} 
                                    onDeleteFolder={() => {}}>
                                </Folder>
                            ))
                        }
                    </Box> */}
                    
                    

                    {/* TODO: add a start button to each routine cell */}
                    {/* TODO: show a preview for each routine cell */}
                    <Box className="my-routines">
                        <h1>My Routines ({routines.length})</h1>
                        
                        <div className="my-routines-container">
                            {routines.map((box) => (
                                <RoutineCell
                                    key={box.id}
                                    index={box.id}
                                    name={box.name}
                                    routineLink={box.routineLink}
                                    onDelete={handleDelete}
                                    onDuplicate={handleDuplicate}
                                    inLogView={true}
                                />
                            ))}
                        </div>
                    </Box>
                    
                </Box>


            </Box>
        </Box>
    );
}