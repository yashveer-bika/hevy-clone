import { Box, Button } from "@chakra-ui/react";
import "../styles/ExerciseRow.css"

interface Exercise {
    id: number
    name: string
    imgPath: string
    muscle: string
}

export default function ExerciseRow({exercise, addToRoutine, addable} : any) {

    return (
        <Box className="exercise-row-container" onClick={() => addToRoutine(exercise)}>
            {addable ? <div> <p>+</p> </div> : <div> </div> }
            <img src={exercise.imgPath} alt="img-slot"></img>
            <Box>
                <h1>{exercise.name}</h1>
                <h2>{exercise.muscle}</h2>
            </Box>
        </Box>
    );
}