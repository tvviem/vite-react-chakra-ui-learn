import { Box, Container, Heading, Text } from '@chakra-ui/react';

const Dashboard = () => {
  const boxStyles = {
    p: '10px',
    bg: 'purple.400',
    color: 'white',
    m: '10px',
    textAlign: 'center',
    filter: 'blur(1px)',
    ':hover': {
      color: 'black',
      bg: 'blue.200'
    }
  };
  return (
    <Container as="section" maxWidth="4xl">
      <Heading my="30px" p="10px">
        ChakraUI - Heading component
      </Heading>
      <Text marginLeft={30}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        tempora.
      </Text>
      <Text ml={30} color="blue.300" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        tempora.
      </Text>

      <Box my={30} p="20px" bg="orange.400" borderRadius="xl">
        <Text color="white">
          This is a Box. Box is the most abstract component on top of which all
          other Chakra UI components are built. By default, it renders a `div`
          element
        </Text>
      </Box>

      <Box sx={boxStyles}>Hello, Ninjas!</Box>
    </Container>
  );
};

export default Dashboard;
