// components/ContactSection.tsx
"use client"; // This ensures the component is treated as a Client Component

import {
    Heading,
    Text,
    VStack,
    HStack,
    Button,
} from "@chakra-ui/react";

const ContactSection = () => {
    return (
        <div>
            <Heading textAlign="center" mb="10">
                Contactez-nous
            </Heading>
            <VStack>
                <HStack>
                    <Text fontSize="lg">
                        19 Avenue Winston Churchill, 31100 Toulouse
                    </Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg">09 54 80 07 63</Text>
                </HStack>
                <HStack>
                    <Text fontSize="lg">
                        Horaires: 09h00 - 12h30, 14h00 - 18h00 (Lundi - Vendredi)
                    </Text>
                </HStack>
                <Button
                    as="a"
                    size="lg"
                    href="https://rdvdentiste.net/toulouse/maha-ammar.html#praticiensHREF"
                    bg="blue.500"
                    color="white"
                    _hover={{ bg: "blue.400" }}
                >
                    Obtenir l&apos;itinéraire
                </Button>
            </VStack>
        </div>
    );
};

export default ContactSection;
