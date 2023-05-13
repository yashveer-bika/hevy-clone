import { Input, Button, Flex, FormControl, FormLabel, InputGroup, InputRightElement } from "@chakra-ui/react";

const UserSearchBar = ({ onSearch } : any) => {
  const handleSearch = (event : any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchQuery = formData.get("searchQuery");
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch}>
      <Flex align="center" justify="center" mb={4}>
        <FormControl>
          <FormLabel htmlFor="searchQuery">Search Users</FormLabel>
          <InputGroup>
            <Input id="searchQuery" name="searchQuery" placeholder="Enter a username" />
            <InputRightElement>
              <Button type="submit" colorScheme="blue">
                
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>
    </form>
  );
};

export default UserSearchBar;
