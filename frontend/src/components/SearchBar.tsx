import React, { useEffect, useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

const SearchBar = ({ onSearch } : any) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Trigger search logic whenever searchQuery changes
    onSearch(searchQuery);
  }, [searchQuery]);

  const handleChange = (event : any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Flex alignItems="center">
      <Input
        placeholder="Enter your search query"
        value={searchQuery}
        onChange={handleChange}
      />
    </Flex>
  );
};

export default SearchBar;
