import { Box } from "@chakra-ui/react";


interface Exercise {
    id: number
    supersetId?: number
    name: string,
    sets: number,
    minReps: number,
    maxReps: number,
    rest?: number, // in seconds
    notes?: string
}

export default function ExerciseRoutineView({exercise} : any) {

    let outerContainerName = `exercise-in-routine-view-container-${exercise.supersetId % 2}`
    // console.log(outerContainerName);

    return (
        <Box className={outerContainerName}>
            
            <Box className="exercise-image-container">
                <img alt="exercise-photo"></img>
            </Box>
            
            <Box className="routine-view-exercise-info-container">
                <p className="routine-view-exercise-name"> {exercise.name} </p>
                
                <Box className="set-rep-rest-container">
                    <Box className="exercise-sets-container"> {exercise.sets} sets </Box>
                    {exercise.rest === undefined ? <Box></Box> : <Box className="exercise-rest-container"> Rest {exercise.rest}s </Box> }
                    <Box className="exercise-rep-range-container"> {exercise.minReps}-{exercise.maxReps} reps </Box>
                </Box>
                
                <p className="routine-view-exercise-notes"> {exercise.notes} </p>

            </Box>

        </Box>
    );
}