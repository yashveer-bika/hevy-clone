import { Box, Heading } from "@chakra-ui/react";

function NotFoundPage() {
  return (
    <Box textAlign="center">
      <Heading as="h1" size="xl">
        404: Page not found
      </Heading>
    </Box>
  );
}

export default NotFoundPage;
