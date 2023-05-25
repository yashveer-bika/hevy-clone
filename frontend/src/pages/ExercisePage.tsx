import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExerciseInfo from "../components/ExerciseInfo";
import FilterableSearchableExerciseTable from "../components/FilterableSearchableExerciseTable";
import "../styles/ExercisePage.css"

export default function ExercisePage() {

    // const { id } = props.match.params;
    // get the id from the URL "exercises/:id"
    const { id } = useParams();
    console.log(`exercise page id: ${id}`);

    return (
        <Box className="exercise-page-screen-container">
            <FilterableSearchableExerciseTable className="exercise-page-left-side" addToRoutineRows={() => {}} addable={false} moveToExercisePage={true} ></FilterableSearchableExerciseTable>

            <Box className="exercise-page-right-side">
                <ExerciseInfo id={id}></ExerciseInfo>
            </Box>

        </Box>
    );
}