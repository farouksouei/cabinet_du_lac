// components/AboutSection.js
"use server"
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

const AboutSection = () => {
    return (
        <div>
        <Box id="about" py="10" px="5">
            <Heading textAlign="center" mb="10">
                À Propos de Nous
            </Heading>
            <Flex direction={["column", "column", "row"]} align="center">
                <Image
                    src="/ammar.webp"
                    alt="Dr. Maha Ammar"
                    boxSize="300px"
                    borderRadius="full"
                    mr={[0, 0, "10"]}
                    mb={["5", "5", "0"]}
                />
                <Box maxW="600px">
                    <Text fontSize="lg" mb="4">
                        Le Dr. Maha Ammar est une chirurgienne-dentiste diplômée de la
                        Faculté de médecine Toulouse Purpan. Elle est spécialisée en
                        implantologie et endodontie, offrant des soins de haute qualité pour
                        tous vos besoins bucco-dentaires.
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
