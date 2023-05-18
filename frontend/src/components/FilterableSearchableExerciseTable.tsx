import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import ExerciseRow from "./ExerciseRow";
import SearchBar from "./SearchBar";
import "../styles/FilterableSearchableExerciseTable.css"

interface Exercise {
    id: number
    name: string
    imgPath: string
    muscle: string
    equipment: string
}

export default function FilterableSearchableExerciseTable() {

    // const [exercises, setExercises] = useState<Exercise[]>([]);
    const exercises = [
        {
            id: 1,
            name: "21s Biceps Curls",
            imgPath: "",
            muscle: "Biceps",
            equipment: "Dumbbell"
        },
        {
            id: 2,
            name: "Cable Pressdown",
            imgPath: "",
            muscle: "Triceps",
            equipment: "Cable"
        },
        {
            id: 3,
            name: "21s Biceps Curls",
            imgPath: "",
            muscle: "Biceps",
            equipment: "Dumbbell"
        },
        {
            id: 4,
            name: "Cable Pressdown",
            imgPath: "",
            muscle: "Triceps",
            equipment: "Cable"
        },
        {
            id: 5,
            name: "21s Biceps Curls",
            imgPath: "",
            muscle: "Biceps",
            equipment: "Dumbbell"
        },
        {
            id: 6,
            name: "Cable Pressdown",
            imgPath: "",
            muscle: "Triceps",
            equipment: "Cable"
        },
        {
            id: 7,
            name: "21s Biceps Curls",
            imgPath: "",
            muscle: "Biceps",
            equipment: "Dumbbell"
        },
        {
            id: 8,
            name: "Cable Pressdown",
            imgPath: "",
            muscle: "Triceps",
            equipment: "Cable"
        },
        {
            id: 9,
            name: "21s Biceps Curls",
            imgPath: "",
            muscle: "Biceps",
            equipment: "Dumbbell"
        },
        {
            id: 10,
            name: "Cable Pressdown",
            imgPath: "",
            muscle: "Triceps",
            equipment: "Cable"
        },
        {
            id: 11,
            name: "21s Biceps Curls",
            imgPath: "",
            muscle: "Biceps",
            equipment: "Dumbbell"
        },
        {
            id: 12,
            name: "Cable Pressdown",
            imgPath: "",
            muscle: "Triceps",
            equipment: "Cable"
        },
        {
            id: 13,
            name: "21s Biceps Curls",
            imgPath: "",
            muscle: "Biceps",
            equipment: "Dumbbell"
        },
        {
            id: 14,
            name: "Cable Pressdown",
            imgPath: "",
            muscle: "Triceps",
            equipment: "Cable"
        },
        {
            id: 15,
            name: "21s Biceps Curls",
            imgPath: "",
            muscle: "Biceps",
            equipment: "Dumbbell"
        },
        {
            id: 16,
            name: "Cable Pressdown",
            imgPath: "",
            muscle: "Triceps",
            equipment: "Cable"
        },
    ]

    function handleSearch() {
        // TODO: dynamically filter the exercise blocks that can render
    }

    return (
        <Box className="filterable-searchable-exercise-table-container">
            <Box className="filterable-searchable-exercise-table-inner-container">

                <Box> <p>Filters</p> </Box> 
                <Box> <p>Equipment Filter</p> </Box> 
                <Box> <p>Muscle Filter</p> </Box> 
                <Box className="header-container"> <p>Library</p> <Button>+ Create Exercise</Button> </Box> 
                <Box> 
                        <SearchBar onSearch={handleSearch}></SearchBar> 
                    </Box>
                <Box className="exercise-table-container">
                    {exercises.map(
                        (exercise, index) => 
                        <ExerciseRow key={index} exercise={exercise} >  </ExerciseRow>
                        )
                    }
                </Box>

            </Box>
           
        </Box>
    );
}