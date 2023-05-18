import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';

const TimerDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(5);

  const handleValueChange = (event : any) => {
    setSelectedValue(parseInt(event.target.value));
  };

  const options = Array.from({ length: 60 }).map((_, index) => {
    const seconds = (index + 1) * 5;
    return {
      label: `${seconds}s`,
      value: seconds,
    };
  });

  return (
    <Select value={selectedValue} onChange={handleValueChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default TimerDropdown;
