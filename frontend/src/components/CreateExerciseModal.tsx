import { useState } from 'react';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
} from '@chakra-ui/react';

const CreateExerciseModal = ({ isOpen, onClose } : any) => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [equipment, setEquipment] = useState('');
  const [primaryMuscleGroup, setPrimaryMuscleGroup] = useState('');
  const [otherMuscles, setOtherMuscles] = useState<(string|number)[]>([]);

  function modalCloseLogic() {
      // reset all my states
      setExerciseName('');
      setExerciseType('');
      setEquipment('');
      setPrimaryMuscleGroup('');
      setOtherMuscles([]);

      onClose();
  }

  const handleCreateExercise = () => {
    // Handle exercise creation logic
    // You can access the entered values from the state variables
    
    // TODO: somehow add exercise to the filterableSearchableExerciseTable (parent component)
    console.log('Exercise Name:', exerciseName);
    console.log('Exercise Type:', exerciseType);
    console.log('Equipment:', equipment);
    console.log('Primary Muscle Group:', primaryMuscleGroup);
    console.log('Other Muscles:', otherMuscles);

    modalCloseLogic();
  };

  return (
    <Modal isOpen={isOpen} onClose={modalCloseLogic}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Exercise</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Exercise Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter exercise name"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Exercise Type</FormLabel>
              <Select
                placeholder="Select exercise type"
                value={exerciseType}
                onChange={(e) => setExerciseType(e.target.value)}
              >
                <option value="strength">Strength</option>
                <option value="cardio">Cardio</option>
                <option value="flexibility">Flexibility</option>
                {/* Add more exercise type options as needed */}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Equipment</FormLabel>
              <Select
                placeholder="Select equipment"
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
              >
                <option value="dumbbells">Dumbbells</option>
                <option value="barbell">Barbell</option>
                <option value="bodyweight">Bodyweight</option>
                {/* Add more equipment options as needed */}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Primary Muscle Group</FormLabel>
              <Select
                placeholder="Select primary muscle group"
                value={primaryMuscleGroup}
                onChange={(e) => setPrimaryMuscleGroup(e.target.value)}
              >
                <option value="chest">Chest</option>
                <option value="back">Back</option>
                <option value="legs">Legs</option>
                {/* Add more primary muscle group options as needed */}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Other Muscles</FormLabel>
              <CheckboxGroup value={otherMuscles} onChange={(vs) => setOtherMuscles(vs)}>
                <Stack spacing={2}>
                <Checkbox value="shoulders">Shoulders</Checkbox>
                  <Checkbox value="biceps">Biceps</Checkbox>
                  <Checkbox value="triceps">Triceps</Checkbox>
                  <Checkbox value="abs">Abs</Checkbox>
                  {/* Add more checkbox options for other muscles as needed */}
                </Stack>
              </CheckboxGroup>
            </FormControl>

          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleCreateExercise}>
            Create
          </Button>
          <Button variant="ghost" onClick={modalCloseLogic}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateExerciseModal;
