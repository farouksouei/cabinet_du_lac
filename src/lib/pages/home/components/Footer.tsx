"use client"; // This ensures the component is treated as a Client Component

import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bg="blue.600" color="white" py="4" mt="10" textAlign="center" w="full">
            <Text>
                © {new Date().getFullYear()} Cabinet du Dr. Maha Ammar. Tous droits
                réservés.
            </Text>
            <Text>Numéro RPPS: 10101844859</Text>
        </Box>
    );
};

export default Footer;
