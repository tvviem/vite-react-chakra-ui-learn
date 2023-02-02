import { UnlockIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
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
        <Avatar src="/img/mario.png" name="Mario">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
