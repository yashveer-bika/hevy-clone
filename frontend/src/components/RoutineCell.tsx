import { useState } from 'react';
import { Box, Button, IconButton, Input, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { CloseIcon, CopyIcon, EditIcon, CheckIcon, HamburgerIcon } from '@chakra-ui/icons';
import "../styles/RoutineCell.css"
import { useNavigate } from 'react-router-dom';


const RoutineCell = ({ routineLink, index, name, onDelete, onDuplicate, inLogView } : any) => {
  const navigate = useNavigate();

  // const [isEditing, setIsEditing] = useState(false);
  // const [editedName, setEditedName] = useState(name);

  const handleDelete = () => {
    onDelete(index);
  };

  const handleDuplicate = () => {
    onDuplicate(index);
  };

  // const handleNameChange = (event : any) => {
  //   setEditedName(event.target.value);
  // };

  // const handleNameBlur = () => {
  //   onNameChange(index, editedName);
  //   setIsEditing(false);
  // };

  // const handleEditClick = () => {
  //   setIsEditing(true);
  // };

  const handleMenuToggle = () => {
    // TODO:
  }

  function handleEditRoutine() {
    /* TODO: redirect to a page of "/edit-routine/:id", and when I 
             press "Save Routine" on the edit-routine page, update API
             and redirect back the the original page (could be /routines or /log)
    */
  }

  // function handleDeleteRoutine() {
  //   // TODO:
  // }

  /*
    TODO: copy link to clipboard, make a popup(?) to that says 
    "Copied Link Routine" and show share on Twitter/Instagram
  */
  function handleShareRoutine() {
    
  }

  // TODO: 
  function handleStartRoutine() {
    // redirect to logging/{routine-id}/{:id}
    navigate(`/logging/routine-id/id`)


  }

  // TODO: fetch exercise text
  const exerciseText = "Back Squat, BB Row, Bench Press, Overhead Extension, BB Curl, Hanging Leg Raises, Back Extensions"

  return (
    <Box
      className="routine-cell-container"
      // w="80%"
      // h="75px"
      // bg="gray.200"
      // borderRadius="md"
      // display="flex"
      // justifyContent="space-between"
      // alignItems="center"
      // px={4}
      // my={2}
    >
      <Box>
        <Box>
          <Link href={routineLink}> 
            {/* TODO: make the name bigger */}
            <p className="routine-name-text">{name}</p>
          </Link>
          {/* TODO: add list of exercises in routine as preview */}
          {/* TODO: make the text smaller, grey, and be scrollable left-right */}
          <Box className='routine-preview-container'>
            <p className='routine-preview-text'>{exerciseText}</p>
          </Box>
        </Box>
      </Box>
      <Box>
        {inLogView ? 
          <Button
              as={IconButton}
              icon={<CheckIcon />}
              aria-label="Options"
              variant="ghost"
              onClick={handleStartRoutine}
          />
          : <div></div>}
      </Box>

      <Box>
              <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<HamburgerIcon />}
                        aria-label="Options"
                        variant="ghost"
                        onClick={handleMenuToggle}
                    />
                    <MenuList>
                    <MenuItem onClick={handleShareRoutine}>Share Routine</MenuItem>
                    <MenuItem onClick={handleEditRoutine}>Edit Routine</MenuItem>
                    <MenuItem onClick={handleDuplicate}>Duplicate</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete Routine</MenuItem>

                    </MenuList>
                </Menu>
      </Box>
    </Box>
  );
};

export default RoutineCell;
