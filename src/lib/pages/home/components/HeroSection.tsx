"use client"; // Ensure the component is treated as a Client Component

import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";

const HeroSection = () => {
    return (
        <div>
            <Box
                position="relative"
                height="80vh" // Set the height of the section (you can adjust this value)
                width="100vw" // Set the width to 100% of the viewport width
                overflow="hidden" // Ensure content doesn't overflow
            >
                {/* Video background */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100vw" // Ensure the video takes up the full width of the viewport
                    height="100%" // Ensure the video takes up the full height of the container
                    zIndex="0" // Position the video behind the content
                    overflow="hidden"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            width: "100vw", // Ensure video is full width of the viewport
                            height: "100%", // Ensure video takes full height of the container
                            objectFit: "cover", // Make sure the video covers the entire area
                        }}
                    >
                        <source src="/dentist.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>

                {/* Content on top of the video */}
                <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    height="100%" // Ensure content fills the section height
                    position="relative" // Ensure content stays above the video
                    zIndex="1" // Ensure content is above the video
                    textAlign="center"
                    color="white"
                >
                    <Heading as="h1" size="2xl" mb="4">
                        Bienvenue au Cabinet du Dr. Maha Ammar
                    </Heading>
                    <Text fontSize="xl" mb="8">
                        Votre sourire, notre priorité.
                    </Text>
                    <Button
                        as="a"
                        size="lg"
                        bg="blue.500"
                        color="white"
                        _hover={{ bg: "blue.400" }}
                    >
                        Prenez Rendez-vous
                    </Button>
                </Flex>
            </Box>
        </div>
    );
};

export default HeroSection;
