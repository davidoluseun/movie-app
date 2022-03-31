import { Box, Flex, Heading } from "@chakra-ui/react";
import HeroImgMd from "../images/hero-img-md.jpg";
import HeroImgBase from "../images/hero-img-base.jpg";

const Hero = () => {
  return (
    <Flex
      as="section"
      pl={{ xl: "77px" }}
      align="center"
      justify={{ base: "center", xl: "flex-start" }}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundImage={{ base: `url(${HeroImgBase})`, md: `url(${HeroImgMd})` }}
      h={{ base: "257px", md: "550px" }}
    >
      <Heading
        as="h1"
        w={{ base: "273px", md: "490px" }}
        h={{ base: "72px", md: "282px" }}
        fontSize={{ base: "28px", md: "72px" }}
        lineHeight={{ base: "36px", md: "94px" }}
        fontStyle="normal"
        fontWeight="700"
        letterSpacing="-0.05em"
        textAlign={{ base: "center", xl: "left" }}
        color="#fff"
      >
        Watch{" "}
        <Box as="span" display={{ md: "block" }}>
          something
        </Box>{" "}
        incredible.
      </Heading>
    </Flex>
  );
};

export default Hero;
