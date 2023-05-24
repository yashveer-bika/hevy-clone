import { Box } from "@chakra-ui/react";
import Plot from "./Plot";
import "../styles/ExercisePage.css"

interface Exercise {
    name: string
    equipment: string
    imgPath: string
    primaryMuscle: string
    secondaryMuscles?: string
}

const exercise1 = {
    name : "Front Squat",
    equipment : "Barbell",
    imgPath : "",
    primaryMuscle: "Quads",
    secondaryMuscles: "Glutes"
}

export default function ExerciseInfo({exercise}: any) {
    return (
        <Box className="exercise-info-container">
            <p> {exercise1.name} </p>
            <Box>
                <img className="main-exercise-photo" src={exercise1.imgPath} alt="exercise-photo"></img>
                <Box className="mini-exercise-info-container">
                    <p> Info </p>
                    <p> Equipment: {exercise1.equipment} </p>
                    <p> Primary: {exercise1.primaryMuscle} </p>
                    { exercise1.secondaryMuscles === undefined ? <div></div> : <div> <p> Primary: {exercise1.primaryMuscle} </p> </div> }
                </Box>
            </Box>

            <Box>
                <p>Statistics</p>
                {/* Dropdown for Last 12 weeks, Year, All Time */}
                <p>Heaviest Weight</p>
                {/* TODO: use API data to get heaviest weight?? */}
                <p>80 lbs</p>
                <Plot data={{}}></Plot>

                <p>One Rep Max</p>
                {/* TODO: use API data to get heaviest weight?? */}
                <p>112.7 lbs</p>
                <Plot data={{}}></Plot>

                <p>Best Set Volume</p>
                {/* TODO: use API data to get heaviest weight?? */}
                <p>960 lbs</p>
                <Plot data={{}}></Plot>
            </Box>
        </Box>
    );
}