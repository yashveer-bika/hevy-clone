import { useState } from 'react';
import { Box, IconButton, Input, Link } from '@chakra-ui/react';
import { CloseIcon, CopyIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';

const RoutineCell = ({ routineLink, index, name, onDelete, onDuplicate, onNameChange } : any) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleDelete = () => {
    onDelete(index);
  };

  const handleDuplicate = () => {
    onDuplicate(index);
  };

  const handleNameChange = (event : any) => {
    setEditedName(event.target.value);
  };

  const handleNameBlur = () => {
    onNameChange(index, editedName);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <Box
      w="80%"
      h="75px"
      bg="gray.200"
      borderRadius="md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      my={2}
    >
      <Box>
        {isEditing ? (
          <Input
            value={editedName}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            size="sm"
            variant="unstyled"
            _focus={{ outline: 'none' }}
            autoFocus
          />
        ) : (
          <Box>
            <Link href={routineLink}> 
              <p>{name}</p>
            </Link>
          </Box>
        )}
      </Box>
      <Box>
        {isEditing ? (
          <IconButton
            icon={<CheckIcon />}
            aria-label="Save"
            onClick={handleNameBlur}
            mr={2}
          />
        ) : (
          <>
            <IconButton
              icon={<EditIcon />}
              aria-label="Edit"
              onClick={handleEditClick}
              mr={2}
            />
            <IconButton
              icon={<CopyIcon />}
              aria-label="Duplicate"
              onClick={handleDuplicate}
              mr={2}
            />
            <IconButton
              icon={<CloseIcon />}
              aria-label="Delete"
              onClick={handleDelete}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default RoutineCell;
