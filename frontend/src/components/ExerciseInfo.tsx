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

export default function ExerciseInfo({exercise, id}: any) {

    // TODO: read exercise from API using id???

    const defaultBox =
        <Box className="exercise-info-container">

        </Box>

    const exerciseBox = 
        <Box className="exercise-info-container">
            <p className="exercise-name-container"> {exercise1.name} </p>
            <Box className="img-info-container">
                <img className="main-exercise-photo" src={exercise1.imgPath} alt="exercise-photo"></img>
                <Box className="mini-exercise-info-container">
                    <p className="info-text"> Info </p>
                    <p> Equipment: {exercise1.equipment} </p>
                    <p> Primary: {exercise1.primaryMuscle} </p>
                    { exercise1.secondaryMuscles === undefined ? <div></div> : <div> <p> Secondary: {exercise1.secondaryMuscles} </p> </div> }
                </Box>
            </Box>

            <Box>
                <p className="header-text">Statistics</p>
                {/* Don't implement the Dropdown for Last 12 weeks, Year, All Time */}
                {/* Put all the data */}
                <p>Heaviest Weight</p>
                {/* TODO: use API data to get heaviest weight?? */}
                <p className="header-text">80 lbs</p>
                <Plot data={{}}></Plot>

                <p>One Rep Max</p>
                {/* TODO: use API data to get heaviest weight?? */}
                <p className="header-text">112.7 lbs</p>
                <Plot data={{}}></Plot>

                <p>Best Set Volume</p>
                {/* TODO: use API data to get heaviest weight?? */}
                <p className="header-text">960 lbs</p>
                <Plot data={{}}></Plot>
            </Box>
        </Box>

    return (
        (id === undefined) ? defaultBox : exerciseBox
    );
}