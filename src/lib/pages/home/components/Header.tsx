"use client"; // This ensures the component is treated as a Client Component

import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { ColorModeButton } from '@/components/ui/color-mode';

const Header = () => {
    return (
        <Flex
            as="nav"
            padding="1.5rem"
            bg="blue.600"
            color="white"
            w="full"  // Ensures full width
            justify="space-between"  // Spaces the content evenly
            align="center"  // Centers the content vertically
        >
            <Flex align="center">
                <Text fontSize="lg" fontWeight="bold">
                    Cabinet du Lac
                </Text>
            </Flex>
            <Box maxWidth="100%">
                <Link href="#services" mr="4" _hover={{ textDecoration: "none" }}>
                    Services
                </Link>
                <Link href="#about" mr="4" _hover={{ textDecoration: "none" }}>
                    À Propos
                </Link>
                <Link href="#contact" _hover={{ textDecoration: "none" }}>
                    Contact
                </Link>
                <ColorModeButton />
            </Box>
        </Flex>
    );
};

export default Header;
