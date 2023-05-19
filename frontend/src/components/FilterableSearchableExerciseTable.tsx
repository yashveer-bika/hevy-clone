import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import ExerciseRow from "./ExerciseRow";
import SearchBar from "./SearchBar";
import "../styles/FilterableSearchableExerciseTable.css"
import DropdownFilter from "./DropdownFilter";

interface Exercise {
    id: number
    name: string
    imgPath: string
    muscle: string
    equipment: string
}

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
        name: "Machine Pressdown",
        imgPath: "",
        muscle: "Triceps",
        equipment: "Machine"
    },
    {
        id: 3,
        name: "Incline Biceps Curls",
        imgPath: "",
        muscle: "Biceps",
        equipment: "Dumbbell"
    },
    {
        id: 4,
        name: "Triceps Kickbacks",
        imgPath: "",
        muscle: "Triceps",
        equipment: "Dumbbell"
    },
    // {
    //     id: 5,
    //     name: "21s Biceps Curls",
    //     imgPath: "",
    //     muscle: "Biceps",
    //     equipment: "Dumbbell"
    // },
    // {
    //     id: 6,
    //     name: "Machine Pressdown",
    //     imgPath: "",
    //     muscle: "Triceps",
    //     equipment: "Machine"
    // },
    // {
    //     id: 7,
    //     name: "21s Biceps Curls",
    //     imgPath: "",
    //     muscle: "Biceps",
    //     equipment: "Dumbbell"
    // },
    // {
    //     id: 8,
    //     name: "Machine Pressdown",
    //     imgPath: "",
    //     muscle: "Triceps",
    //     equipment: "Machine"
    // },
    // {
    //     id: 9,
    //     name: "21s Biceps Curls",
    //     imgPath: "",
    //     muscle: "Biceps",
    //     equipment: "Dumbbell"
    // },
    // {
    //     id: 10,
    //     name: "Machine Pressdown",
    //     imgPath: "",
    //     muscle: "Triceps",
    //     equipment: "Machine"
    // },
    // {
    //     id: 11,
    //     name: "21s Biceps Curls",
    //     imgPath: "",
    //     muscle: "Biceps",
    //     equipment: "Dumbbell"
    // },
    // {
    //     id: 12,
    //     name: "Machine Pressdown",
    //     imgPath: "",
    //     muscle: "Triceps",
    //     equipment: "Machine"
    // },
    // {
    //     id: 13,
    //     name: "21s Biceps Curls",
    //     imgPath: "",
    //     muscle: "Biceps",
    //     equipment: "Dumbbell"
    // },
    // {
    //     id: 14,
    //     name: "Machine Pressdown",
    //     imgPath: "",
    //     muscle: "Triceps",
    //     equipment: "Machine"
    // },
    // {
    //     id: 15,
    //     name: "21s Biceps Curls",
    //     imgPath: "",
    //     muscle: "Biceps",
    //     equipment: "Dumbbell"
    // },
    // {
    //     id: 16,
    //     name: "Machine Pressdown",
    //     imgPath: "",
    //     muscle: "Triceps",
    //     equipment: "Machine"
    // },
]

export default function FilterableSearchableExerciseTable( {addToRoutineRows} : any ) {

    // const [activeExercises, setActiveExercises] = useState<Exercise[]>(exercises);
    
    const muscleOptions = ["All Muscles","Abdominal", "Abductors", "Adductors", "Biceps", "Lower Back", "Upper Back", "Cardio", "Chest", "Calves", "Forearms", "Glutes", "Hamstrings", "Lats", "Olmypic", "Quadriceps", "Shoulders", "Triceps", "Traps", "Full Body", "Other"];
    const [muscleFilterState, setMuscleFilterState] = useState(muscleOptions[0]);

    const equipmentOptions = ["All Equipment","None", "Barbell", "Dumbbell", "Kettlebell", "Machine", "Plate", "Resistance Band", "Suspension", "Other"];
    const [equipmentFilterState, setEquipmentFilterState] = useState(equipmentOptions[0]);

    const [searchQuery, setSearchQuery] = useState("");

    // function searchPredicate(exercise : Exercise) {
    //     return exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    //         exercise.muscle.toLowerCase().includes(searchQuery.toLowerCase()) || 
    //         exercise.equipment.toLowerCase().includes(searchQuery.toLowerCase());
    // }

    const filteredItems = exercises.filter((item) => {
        const matchMuscle =
            muscleFilterState === muscleOptions[0] || item.muscle.toLowerCase() === muscleFilterState.toLowerCase();
        const matchEquipment =
            equipmentFilterState === equipmentOptions[0] || item.equipment.toLowerCase() === equipmentFilterState.toLowerCase();
        const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.muscle.toLowerCase().includes(searchQuery.toLowerCase()) || item.equipment.toLowerCase().includes(searchQuery.toLowerCase()) ;
    
        return matchMuscle && matchEquipment && matchSearch;
      });

    
    function handleEquipmentFilter(e : any) {
        setEquipmentFilterState(e);
    }

    function handleMuscleFilter(e : any) {
        setMuscleFilterState(e);
    }

    function handleSearch(e : any) {
        setSearchQuery(e);
    }

    return (
        <Box className="filterable-searchable-exercise-table-container">
            <Box className="filterable-searchable-exercise-table-inner-container">

                <Box> <p>Filters</p> </Box> 
                
                <Box> <DropdownFilter options={equipmentOptions} onFilter={handleEquipmentFilter}> </DropdownFilter> </Box> 

                <Box> <DropdownFilter options={muscleOptions} onFilter={handleMuscleFilter}> </DropdownFilter> </Box> 
                
                <Box className="header-container"> <p>Library</p> <Button>+ Create Exercise</Button> </Box> 
                
                <Box>  <SearchBar onSearch={handleSearch}></SearchBar> </Box>

                <Box className="exercise-table-container">
                    {filteredItems.map(
                        (exercise, index) => 
                        <ExerciseRow key={index} exercise={exercise} addToRoutine={(e : Exercise) => addToRoutineRows(e) } >  </ExerciseRow>
                        )
                    }
                </Box>

            </Box>
           
        </Box>
    );
}