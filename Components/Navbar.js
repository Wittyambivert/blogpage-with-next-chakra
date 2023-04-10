import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="50px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@nentninja.dev</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
}
