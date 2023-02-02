import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import { useLoaderData } from 'react-router-dom';

type Task = {
  id: number;
  title: string;
  description: string;
  author: string;
  img: string;
};

export default function Dashboard() {
  const data = useLoaderData() as Task[];

  return (
    <SimpleGrid spacing="15px" minChildWidth="300px" px="20px">
      {data &&
        data.map((task) => {
          return (
            <Card
              key={task.id}
              borderTop="8px"
              borderColor="purple.400"
              bg="white"
            >
              <CardHeader>
                <Flex gap={3}>
                  <Avatar src={task.img} />
                  <Box>
                    <Heading as="h3" size="sm">
                      {task.title}
                    </Heading>
                    <Text>by {task.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody color="gray.500">
                <Text>{task.description}</Text>
              </CardBody>
              <Divider color="gray.300" />
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
          );
        })}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks');
  return res.json();
};
