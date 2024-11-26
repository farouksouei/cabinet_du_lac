import { Flex } from '@chakra-ui/react';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


const HomePage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      w="full"
    >
      <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
    </Flex>
  );
};

export default HomePage;
