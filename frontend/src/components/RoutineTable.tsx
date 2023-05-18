import { Box } from "@chakra-ui/react";
import { useState } from "react";
import CreateRoutineRow from "./CreateRoutineRow";


interface Exercise {
    name: string
    imgPath: string
}

export default function RoutineTable({exercises} : any) {
    // const rows = exercises.map(( (exercise : Exercise) => <CreateRoutineRow exercise={exercise} ></CreateRoutineRow>  ) ) ;

    const [rows, setRows] = useState<Exercise[]>([]);

    

    return (
        <Box className="routine-table">
            {
                exercises.map(( (exercise : Exercise, index : number) => <CreateRoutineRow key={index} exercise={exercise} ></CreateRoutineRow>  ) )
            }
        </Box>
    );
}