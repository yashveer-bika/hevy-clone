import { Box } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import CreateRoutineRow from "./CreateRoutineRow";


interface Exercise {
    index: number
    name: string
    imgPath: string
}

export default function RoutineTable({rows, setRows, updateRowIndices, addRoutineToTable} : any) {
    // const rows = exercises.map(( (exercise : Exercise) => <CreateRoutineRow exercise={exercise} ></CreateRoutineRow>  ) ) ;

    // const [rows, setRows] = useState<Exercise[]>(exercises);

    // const updateRowIndices = useCallback(() => {
    //     setRows((prevRows) =>
    //       prevRows.map((row, index) => ({
    //         ...row,
    //         set: index + 1,
    //       }))
    //     );
    //   }, []);


    const handleAddRow = () => {
        const newRow = {
            index: rows.length + 1,
            name: '',
            imgPath: '',
        };
        setRows([...rows, newRow]);
    };

  const handleDeleteRow = (index : number) => {
    const updatedRows = [...rows];
    // console.log(rows);
    updatedRows.splice(index, 1);
    setRows(updatedRows);
    // console.log(rows);
    updateRowIndices();
    
};

    return (
        <Box className="routine-table">
            {
                rows.map(
                     (exercise : Exercise, index : number) => 
                        <CreateRoutineRow key={index} exercise={exercise} onDeleteRow={() => handleDeleteRow(index) }></CreateRoutineRow>  
                )
            }
        </Box>
    );
}