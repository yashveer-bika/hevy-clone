import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../styles/ExerciseRow.css"

interface Exercise {
    id: number
    name: string
    imgPath: string
    muscle: string
}

export default function ExerciseRow({exercise, addToRoutine, addable, moveToExercisePage, active, activate} : any) {
    const navigate = useNavigate();

    
    function reroute() {
        if (moveToExercisePage) {
            navigate(`/exercises/${exercise.id}`)
        } else {

        }
    }

    const containerClass = active ? "active-exercise-row-container" : "exercise-row-container"

    return (
        <Box className={containerClass} onClick={ () => { addToRoutine(exercise); reroute(); activate();} } >
                {addable ? <div> <p>+</p> </div> : <div> </div> }
                <img src={exercise.imgPath} alt="img-slot"></img>
                <Box>
                    <h1>{exercise.name}</h1>
                    <h2>{exercise.muscle}</h2>
                </Box>
        
        </Box>
    );
}