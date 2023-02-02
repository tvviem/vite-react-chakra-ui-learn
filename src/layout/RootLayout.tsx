import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const RootLayout = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, md: 2, xl: 1 }}
        bg="brand.600"
        minHeight={{ sm: '30vh', md: '80vh', lg: '100vh' }}
        p={{ base: '20px', md: '30px' }}
      >
        <Sidebar></Sidebar>
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, md: 4, xl: 5 }} padding="10px">
        <Navbar />

        <Outlet />
      </GridItem>
    </Grid>
  );
};
export default RootLayout;
