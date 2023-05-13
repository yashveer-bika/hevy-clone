import { Box } from "@chakra-ui/react";
import { useState } from "react";
import RoutineCellGeneric from "../components/RoutineCellGeneric";
import RoutineCell from "../components/RoutineCellGeneric";

// TODO: fill out the RoutinesPage
export default function RoutinesPage() {

    // TODO: change the routineLink to my routine page
    const [boxes, setBoxes] = useState([
        { id: 1, name: "My Routines" },
        { id: 2, name: "Routine 1", routineLink: "https://www.youtube.com/watch?v=IOl42YpK_Es" },
        { id: 3, name: "Routine 2", routineLink: "https://www.youtube.com/watch?v=HE45jVN7XKM"  },
        { id: 4, name: "Routine 3", routineLink: "https://www.youtube.com/watch?v=X6H4l9R3DnY" }
      ]);
      const [counter, setCounter] = useState(boxes.length);
    
      const handleDelete = (id : number) => {
        setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
      };
    
      const handleDuplicate = (id : number) => {
        const boxToDuplicate = boxes.find((box) => box.id === id);
    
        if (!boxToDuplicate) {
          return; // Box with the provided id not found
        }
    
        const duplicatedName = `${boxToDuplicate.name} (Copy)`;

        const duplicatedBox = { id: counter + 1, name: duplicatedName, routineLink: boxToDuplicate.routineLink };
    
        setBoxes((prevBoxes) => [...prevBoxes, duplicatedBox]);
        setCounter((prevCounter) => prevCounter + 1);
      };
    
      const handleNameChange = (id : number, newName : string) => {
        setBoxes((prevBoxes) => {
          return prevBoxes.map((box) => {
            if (box.id === id) {
              return { ...box, name: newName };
            }
            return box;
          });
        });
      };
    
      return (
        <Box borderRadius='lg' border="1px" w="60%" borderColor='gray.300' >
            
            <h1>My Routines ({boxes.length})</h1>
            
            <div className="my-routines-container">
                {boxes.map((box) => (
                    <RoutineCellGeneric
                        key={box.id}
                        index={box.id}
                        name={box.name}
                        routineLink={box.routineLink}
                        onDelete={handleDelete}
                        onDuplicate={handleDuplicate}
                        onNameChange={handleNameChange}
                    />
                ))}
            </div>
        </Box>
        
      );
}