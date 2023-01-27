import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={1}
        bg="purple.400"
        minHeight="100vh"
        padding="30px"
      >
        <span>SIDE-BAR</span>
      </GridItem>
      <GridItem as="main" colSpan={5} padding="10px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};
export default RootLayout;
