import { useState, useRef } from "react";
import { Button, useClipboard, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, AlertDialogCloseButton } from "@chakra-ui/react";

// TODO: write type
const CopyLinkButton = ({ workoutLink } : any) => {
  const { hasCopied, onCopy } = useClipboard(workoutLink);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const leastDestructiveRef = useRef(null);

  const handleButtonClick = () => {
    onCopy();
    onOpen();
  };

  return (
    <>
      <Button mx={2} colorScheme="blue" variant="outline" onClick={handleButtonClick}>Copy Link</Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={leastDestructiveRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Success!</AlertDialogHeader>
            <AlertDialogCloseButton ref={leastDestructiveRef} />
            <AlertDialogBody>
              {hasCopied ? "Copied Link" : "Unable to copy link"}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onClose}>Close</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CopyLinkButton;
