import { Box, Divider } from "@chakra-ui/react";
import ExerciseRoutineView from "./ExerciseRoutineView";

interface Exercise {
    id: number
    supersetId?: number
    name: string,
    sets: number,
    rest?: number, // in seconds
    notes?: string
}

export default function RoutineViewTable() {

    // TODO: call the API to get a routine
    const exercises = [
        {
            id: 1,
            name: "Back Squat", 
            sets: 5,
            rest: 120,
        },
        {
            id: 2,
            name: "Bench Press", 
            sets: 5,
            rest: 120,
        },
        {
            id: 3,
            name: "Bent Over Row", 
            sets: 5,
            rest: 120,
        },
        {
            id: 4,
            supersetId: 1,
            name: "DB Hammer Curl", 
            sets: 3,
            rest: 30,
        },
        {
            id: 5,
            supersetId: 1,
            name: "Triceps Extension", 
            sets: 3,
            rest: 30,
        },
    ]

    return (
        <Box className="routine-view-table-container">
            {
                exercises.map(
                    e => 
                        <Box>
                            <ExerciseRoutineView exercise={e}> </ExerciseRoutineView>
                            <Divider></Divider>
                        </Box>
                )
            }
        </Box>
    );
}