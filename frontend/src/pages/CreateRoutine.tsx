import { Box, Button, Divider, Input } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateRoutine.css"
import testImage from "../logo192.png"
import RoutineTable from "../components/RoutineTable";
import FilterableSearchableExerciseTable from "../components/FilterableSearchableExerciseTable";

interface Exercise {
    index: number
    name: string
    imgPath: string
}

// mode : "edit", "log", "create", "view"
export default function CreateRoutine({editMode, id, mode} : any) {
    // TODO: setup something to get my routine id
    //       - edit mode logic for updating the routine

    const navigate = useNavigate();

    const [routineTitle, setRoutineTitle] = useState("");

    const [activeExercises, setActiveExercises] = useState<Exercise[]>([
        {
            index: 1,
            name: "21s bicep curls", 
            imgPath: testImage
        }, 
        {
            index: 2,
            name: "Cable Pressdowns", 
            imgPath: testImage
        }
    ]);
    // setActiveExercises(
    //     activeExercises => [...activeExercises, 
    //         {
    //             name: "21s bicep curls", 
    //             img: testImage
    //         }
    //     ]

        
    // );

    const handleSaveRoutine = () => {
        // TODO: 
        // create a routine object

        // connect routine to API

        // redirect back to /routines page
        navigate("/routines");
    }



    const [activeExerciseRows, setActiveExerciseRows] = useState<Exercise[]>(activeExercises);

    function addToActiveExerciseRows(e : Exercise) {
        setActiveExerciseRows([...activeExerciseRows, e]);

    }

    const updateRowIndices = useCallback(() => {
        setActiveExerciseRows((prevRows) =>
          prevRows.map((row, index) => ({
            ...row,
            set: index + 1,
          }))
        );
      }, []);



    const headerText = (() => {
        if (mode == "edit") {
            return "Edit Routine"
    
        } else if (mode == "log") {
            return "Logging Workout"
    
        } else if (mode == "create") {
            return "Create Routine"
    
        } else {
            // view case
            return "Viewing Routine"
        }
    })()
    


    return (
        <Box className="screen-container">
            <Box className="screen-left-container">
                <Box className="header">
                    {/* <p> {editMode ? "Edit Routine" : "Create Routine"} </p> */}
                    <p>{headerText}</p>
                    <Button onClick={handleSaveRoutine} colorScheme='blue' width={"30%"} > {editMode ? "Update Routine" : "Save Routine"}</Button>
                </Box>

                <Box className="routine-table-w-title-container">
                    <Box className="routine-table-w-title">
                        
                        {
                            (mode=="log" || mode=="view") 
                            ? 
                            <p className="routine-title-text">Routine Title</p>
                            :
                            <>
                                <Input
                                    value={routineTitle}
                                    onChange={event => setRoutineTitle(event.target.value)}
                                    placeholder="Routine Title"
                                    fontSize={"3xl"}
                                    variant='unstyled'
                                />

                                <Divider border={"1px solid"} color="gray.400"></Divider>
                            </>
                            
                        }
                        
                        


                        {/* TODO: allow exercises to be added to here */}
                        <RoutineTable 
                            addRoutineToTable={() => {}} 
                            rows={activeExerciseRows} 
                            updateRowIndices={updateRowIndices} 
                            setRows={setActiveExerciseRows} >

                            </RoutineTable>
                    
                    </Box>
                </Box>

            </Box>

            <Box className="create-routine-screen-right-container">
                {
                    (mode=="log" || mode=="view") 
                        ? <div></div>
                        : <FilterableSearchableExerciseTable addToRoutineRows={addToActiveExerciseRows} addable={true} ></FilterableSearchableExerciseTable>
                }
                

            </Box>


            
        </Box>
    );
}