import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <SimpleGrid padding="10px" spacing="10px" minChildWidth="180px">
      <Box bg="white" h="200px" border="1px solid">
        <Text color={{ base: 'pink', md: 'blue', lg: 'green' }}>Hello</Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid>
  );
};

export default Dashboard;
