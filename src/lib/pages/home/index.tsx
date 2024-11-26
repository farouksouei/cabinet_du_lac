import { Flex } from '@chakra-ui/react';
import HomePage from "./page";



export const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <HomePage />
    </Flex>
  );
};
