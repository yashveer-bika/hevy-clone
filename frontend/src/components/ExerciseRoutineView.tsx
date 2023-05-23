import { Box } from "@chakra-ui/react";


interface Exercise {
    id: number
    supersetId?: number
    name: string,
    sets: number,
    rest?: number, // in seconds
    notes?: string
}

export default function ExerciseRoutineView({exercise} : any) {
    return (
        <Box className="exercise-in-routine-view-container">
            
            <Box className="exercise-image-container">
                <img alt="exercise-photo"></img>
            </Box>
            
            <Box>
                <p className="routine-view-exercise-name"> {exercise.name} </p>
                
                <Box className="set-rep-rest-container">
                    <Box className="exercise-sets-container"> {exercise.sets} sets </Box>
                    {exercise.rest === undefined ? <Box></Box> : <Box className="exercise-rest-container"> Rest {exercise.rest}s </Box> }
                </Box>
                
                <p> {exercise.notes} </p>

            </Box>

        </Box>
    );
}