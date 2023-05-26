import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../styles/ExerciseRow.css"

interface Exercise {
    id: number
    name: string
    imgPath: string
    muscle: string
}

export default function ExerciseRow({exercise, addToRoutine, addable, moveToExercisePage} : any) {
    const navigate = useNavigate();

    
    function reroute() {
        if (moveToExercisePage) {
            navigate(`/exercises/${exercise.id}`)
        } else {

        }
    }

    return (
        <Box className="exercise-row-container" onClick={ () => { addToRoutine(exercise); reroute(); } } >
                {addable ? <div> <p>+</p> </div> : <div> </div> }
                <img src={exercise.imgPath} alt="img-slot"></img>
                <Box>
                    <h1>{exercise.name}</h1>
                    <h2>{exercise.muscle}</h2>
                </Box>
        
        </Box>
    );
}