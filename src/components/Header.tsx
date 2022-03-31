import { Flex } from "@chakra-ui/react";
import LogoImgBase from "../images/logo-base.png";
import LogoImgMd from "../images/logo-md.png";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      bg="#292929"
      pl={{ xl: "77px" }}
      h={{ base: "67px", md: "140px" }}
      justify={{ base: "center", xl: "flex-start" }}
    >
      <Flex
        align="center"
        justify="center"
        w={{ base: "108px", md: "193px" }}
        h={{ base: "33.58px", md: "60px" }}
        backgroundImage={{
          base: `url(${LogoImgBase})`,
          md: `url(${LogoImgMd})`,
        }}
      ></Flex>
    </Flex>
  );
};

export default Header;
