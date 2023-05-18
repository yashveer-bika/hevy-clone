import { useState } from 'react';
import { Select, VStack, Text } from '@chakra-ui/react';

const DropdownFilter = ({ options, onFilter } : any) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event : any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onFilter(selectedValue);
  };

  return (
    <VStack align="start" spacing={2}>
      <Select
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map( (option : any) => 
          <option key={option} value={option}>
            {option}
          </option>
        )}
      </Select>
    </VStack>
  );
};

export default DropdownFilter;
