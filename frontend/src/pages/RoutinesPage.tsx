import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Folder from "../components/Folder";
import RoutineCell from "../components/RoutineCell";
import "../RoutinesPage.css"

// TODO: fill out the RoutinesPage
export default function RoutinesPage() {

    // TODO: change the routineLink to my routine page
    const [routines, setRoutines] = useState([
        { id: 1, name: "My Routines" },
        { id: 2, name: "Routine 1", routineLink: "https://www.youtube.com/watch?v=IOl42YpK_Es" },
        { id: 3, name: "Routine 2", routineLink: "https://www.youtube.com/watch?v=HE45jVN7XKM"  },
        { id: 4, name: "Routine 3", routineLink: "https://www.youtube.com/watch?v=X6H4l9R3DnY" }
      ]);
      const [routineCounter, setRoutineCounter] = useState(routines.length);

      // TODO: change the routineLink to my routine page
    const [folders, setFolders] = useState([
        { id: 1, name: "Hersovyac Beginner" },
        { id: 2, name: "Stronglifts 5x5", },
        { id: 3, name: "Home Workouts", },
      ]);
      const [folderCounter, setFolderCounter] = useState(folders.length);
    

      // routine handlers

      const handleDelete = (id : number) => {
        setRoutines((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
      };
    
      const handleDuplicate = (id : number) => {
        const boxToDuplicate = routines.find((box) => box.id === id);
    
        if (!boxToDuplicate) {
          return; // Box with the provided id not found
        }
    
        const duplicatedName = `${boxToDuplicate.name} (Copy)`;

        const duplicatedBox = { id: routineCounter + 1, name: duplicatedName, routineLink: boxToDuplicate.routineLink };
    
        setRoutines((prevBoxes) => [...prevBoxes, duplicatedBox]);
        setRoutineCounter((prevCounter) => prevCounter + 1);
      };
    
      const handleNameChange = (id : number, newName : string) => {
        setRoutines((prevBoxes) => {
          return prevBoxes.map((box) => {
            if (box.id === id) {
              return { ...box, name: newName };
            }
            return box;
          });
        });
      };

      // TODO: set up handler functions correctly
      // folder handlers
      const handleAddRoutineToFolder = (folderId : number) => {
        // Go to Create Routine page

        // If I click the "Save Routine" button on the "Create Routine" page,
        // add a RoutineCell that links to the newly created routine under the folder
        // with my given id
        
      }

    //   const handleRenameFolder = (id : number, newName : string) => {
    //     setFolders((prevBoxes) => {
    //         return prevBoxes.map((box) => {
    //           if (box.id === id) {
    //             return { ...box, name: newName };
    //           }
    //           return box;
    //         });
    //       });
    //   }

    const handleDeleteFolder = (folderId : number) => {
        // console.log("BEFORE RESETTING FOLDERS");
        // console.log(`folders: ${folders.map((folder) => (folder.id))}`);
        // console.log(`folders.id ${folderId}`);

        setFolders(folders => folders.filter(folder => folder.id !== folderId));
        // console.log(`folders: ${folders}`);
        // console.log("AFTER RESETTING FOLDERS");
      };

    
    // new folder pieces

  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const handleAddFolderClick = () => {
    setIsAddFolderModalOpen(true);
  };

  const handleAddFolderCancel = () => {
    setIsAddFolderModalOpen(false);
    setNewFolderName('');
  };

  const handleAddFolderSubmit = () => {
    // Validate if the new folder name is not empty
    if (newFolderName.trim() !== '') {
      // Generate a unique ID for the new folder
      const newFolderId = Date.now();

      // Create a new folder object
      const newFolder = {
        id: newFolderId,
        name: newFolderName
      };

      // Update the folders state with the new folder
      setFolders(folders => [...folders, newFolder]);
      // console.log(folders.map( (folder)=>folder.name ));

      // Reset the new folder name and close the modal
      setNewFolderName('');
      setIsAddFolderModalOpen(false);
    }
  };

  const navigate = useNavigate();

  const handleNewRoutine = () => {
    // redirect to the create-routine page
    navigate("/create-routine");
    
  }
    
      return (

        
        <Box className="routines-screen-container">

          <Box className="box-container" width={"60vw"}>


            <Box className="routines-overview-screen-left-container">
              <p className="section-header">My Routines</p>
              <Button fontWeight={"semiBold"} onClick={handleNewRoutine} > New Routine </Button>
              <Button fontWeight={"semiBold"} onClick={handleAddFolderClick} > New Folder </Button>

              <Modal isOpen={isAddFolderModalOpen} onClose={handleAddFolderCancel}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add Folder</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Input
                      value={newFolderName}
                      onChange={event => setNewFolderName(event.target.value)}
                      placeholder="Enter folder name"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleAddFolderSubmit}>Save</Button>
                    <Button onClick={handleAddFolderCancel}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

            </Box>

            <Box className="routines-overview-screen-right-container" borderRadius='lg' border="1px" w="60%" borderColor='gray.300' >
                
                <Box>
                    {
                        folders.map((folder) => (
                            <Folder 
                                key={folder.id}
                                id={folder.id}
                                name={folder.name}
                                onAddRoutine={handleAddRoutineToFolder} 
                                onDeleteFolder={handleDeleteFolder}>
                            </Folder>
                        ))
                    }
                </Box>
                
                

                <Box className="my-routines">
                    <h1>My Routines ({routines.length})</h1>
                    
                    <div className="my-routines-container">
                        {routines.map((box) => (
                            <RoutineCell
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
                
            </Box>

          </Box>

        
        </Box>

      );
}