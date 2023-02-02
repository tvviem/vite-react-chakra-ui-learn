import { UnlockIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useToast
} from '@chakra-ui/react';

const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 3000,
      isClosable: true,
      status: 'success',
      position: 'bottom-right',
      icon: <UnlockIcon />
    });
  };

  return (
    <Flex as="nav" p="10px" mb="20px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
