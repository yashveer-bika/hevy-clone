import { useState } from 'react';
import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const defaultName = "New Folder"

const Folder = ({ id, onAddRoutine, onDeleteFolder } : any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [tempFolderName, setTempFolderName] = useState(defaultName);
  const [currentName, setCurrentName] = useState(defaultName);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRenameClick = () => {
    setTempFolderName(currentName);
    setIsRenameModalOpen(true);
  };

  const handleRenameCancel = () => {
    setIsRenameModalOpen(false);
  };

  const handleRenameSubmit = () => {
    setCurrentName(tempFolderName);
    setIsRenameModalOpen(false);
  };

  const handleAddRoutine = () => {
    onAddRoutine(currentName);
    setIsMenuOpen(false);
  };

  const handleDeleteFolder = () => {
    onDeleteFolder(id);
    setIsMenuOpen(false);
    console.log("attempted to delete folder");
  };

  const handleTempNameChange = (event : any) => {
    setTempFolderName(event.target.value);
  };

  return (
    <Box
      w="100%"
      h="80px"
      bg="gray.200"
      borderRadius="md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      my={2}
    >
      <Box>{currentName}</Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          aria-label="Options"
          variant="ghost"
          onClick={handleMenuToggle}
        />
        <MenuList>
          <MenuItem onClick={handleAddRoutine}>Add New Routine</MenuItem>
          <MenuItem onClick={handleRenameClick}>Rename Folder</MenuItem>
          <MenuItem onClick={handleDeleteFolder}>Delete Folder</MenuItem>
        </MenuList>
      </Menu>
      
      {/* RENAMING FOLDER MODAL */}
      <Modal isOpen={isRenameModalOpen} onClose={handleRenameCancel}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rename Folder</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={tempFolderName}
              onChange={handleTempNameChange}
              placeholder="New folder name"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleRenameSubmit}>
              Save
            </Button>
            <Button onClick={handleRenameCancel}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  );
};

export default Folder;
