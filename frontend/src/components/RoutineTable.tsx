import { Box } from "@chakra-ui/react";
import CreateRoutineRow from "./CreateRoutineRow";


interface Exercise {
    name: string
    imgPath: string
}

export default function RoutineTable({exercises} : any) {
    // const rows = exercises.map(( (exercise : Exercise) => <CreateRoutineRow exercise={exercise} ></CreateRoutineRow>  ) ) ;

    return (
        <Box className="routine-table">
            {
                exercises.map(( (exercise : Exercise) => <CreateRoutineRow exercise={exercise} ></CreateRoutineRow>  ) )
            }
        </Box>
    );
}