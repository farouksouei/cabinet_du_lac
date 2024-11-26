// components/ServicesSection.js
"use server"
import { Box, Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";

const services = [
    {
        title: "Alignement dentaire invisible",
        description:
          "Obtenez un sourire parfait avec nos solutions d'alignement invisibles.",
    },
    {
        title: "Blanchiment des dents",
        description: "Des dents plus blanches pour un sourire éclatant.",
    },
    {
        title: "Couronne dentaire",
        description: "Restaurez vos dents abîmées avec des couronnes durables et esthétiques.",
    },
    {
        title: "Implant dentaire",
        description: "Remplacez vos dents manquantes avec des implants durables.",
    },
    {
        title: "Implantologie dentaire",
        description: "Des solutions avancées pour les implants dentaires, adaptées à vos besoins.",
    },
    {
        title: "Prothèse dentaire fixe ou amovible",
        description: "Retrouvez une fonction dentaire complète avec des prothèses fixes ou amovibles.",
    },
    {
        title: "Prothèse sur implant",
        description: "Fixez vos prothèses dentaires sur des implants pour une solution durable et stable.",
    },
];

const ServicesSection = () => {
    return (
        <div>
        <Box id="services" py="10" px="5">
            <Heading textAlign="center" mb="10">
                Nos Services
            </Heading>
            <SimpleGrid columns={[1, 2, 3]}>
                {services.map((service, index) => (
                    <VStack
                        key={index}
                        p="5"
                        shadow="md"
                        borderRadius="md"
                        align="center"
                        m="2"
                    >
                        <Text fontWeight="bold" fontSize="lg" mt="4">
                            {service.title}
                        </Text>
                        <Text textAlign="center">{service.description}</Text>
                    </VStack>
                ))}
            </SimpleGrid>
        </Box>
        </div>
    );
};

export default ServicesSection;
