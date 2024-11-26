// components/AboutSection.js
"use server"
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const AboutSection = () => {
    return (
        <div>
        <Box id="about" py="10" px="5">
            <Heading textAlign="center" mb="10">
                À Propos de Nous
            </Heading>
            <Flex direction={["column", "column", "row"]} align="center">
                <Box maxW="600px">
                    <Text fontSize="lg" mb="4">
                        Cabinet Dentaire du lac  est un cabinet engagé à offrir des soins dentaires de haute qualité en s’appuyant sur des technologies de pointe telles que les radiographies numériques et les scans 3D. Ces outils permettent de garantir des diagnostics précis et des traitements sur mesure adaptés aux besoins de chaque patient.
                        La mission du cabinet est de combiner innovation technologique et expertise médicale pour améliorer l’expérience de soin et renforcer la satisfaction des patients.
                    </Text>
                    <Text fontSize="lg">
                        Langues parlées : Anglais et Français.
                    </Text>
                </Box>
            </Flex>
        </Box>
        </div>
    );
};

export default AboutSection;
