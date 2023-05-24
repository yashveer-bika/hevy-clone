import { Box } from "@chakra-ui/react";
import ExerciseInfo from "../components/ExerciseInfo";
import FilterableSearchableExerciseTable from "../components/FilterableSearchableExerciseTable";
import "../styles/ExercisePage.css"

export default function ExercisePage() {
    return (
        <Box className="exercise-page-screen-container">
            <FilterableSearchableExerciseTable className="exercise-page-left-side" addToRoutineRows={() => {}} addable={false} ></FilterableSearchableExerciseTable>

            <Box className="exercise-page-right-side">
                <ExerciseInfo></ExerciseInfo>
            </Box>

        </Box>
    );
}