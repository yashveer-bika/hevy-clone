import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

const SearchBar = ({ onSearch } : any) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event : any) => {
    setSearchQuery(event.target.value);
    onSearch(searchQuery);
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
