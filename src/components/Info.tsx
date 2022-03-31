import { Flex } from "@chakra-ui/react";

type InfoProps = {
  text: string;
};

const Info = ({ text }: InfoProps) => {
  return (
    <Flex
      h="200px"
      align="center"
      justify="center"
      fontSize={{ base: "18px", md: "24px" }}
      lineHeight={{ base: "23px", md: "31px" }}
    >
      {text}
    </Flex>
  );
};

export default Info;
