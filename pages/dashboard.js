import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Heading,
  Text,
  Container,
  Box,
  SimpleGrid,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";

export default function Dashboard() {
  const { isLoading, error, data } = useQuery(["blog-api"], async () => {
    const res = await axios.get("http://localhost:8001/tasks");
    return res;
  });

  isLoading && <Text>Loading...</Text>;

  error && <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={4} spacing={4} minChildWidth="250px">
      {data?.data?.map((task) => (
        <Card key={task.id} borderTop="4px" borderColor="purple.400" bg="white">
          <CardHeader borderBottom="2px" borderColor="pink.100">
            <Flex>
              <Box w="50px" h="50px">
                <Text>AV</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm">
                  {task.title}
                </Heading>
                <Text>by {task.author} </Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody>
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor="gray.200" />

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>
                Watch
              </Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>
                Comment
              </Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}
