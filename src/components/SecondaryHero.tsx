import React from "react";
import { Box, css, Flex, Heading, Image, Link } from "@chakra-ui/react";

interface SecondaryHeroProps {
  title: string;
  imageUrl: string;
  links: { label: string; href: string }[];
}

const SecondaryHero: React.FC<SecondaryHeroProps> = ({
  title,
  links,
  imageUrl,
}) => {
  return (
    <Flex
      py={2}
      px={3}
      minH={"270px"}
      // maxW={"1240px"}
      bg={"#efebf5"}
      margin={"0 auto"}
      color={"brand.dark"}
      borderRadius={"20px"}
      alignItems={"center"}
      position={"relative"}
      fontFamily={"Metropolis"}
    >
      <Flex gap={3} alignItems={"center"} position={"absolute"} ml={5} top={6}>
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            _hover={{ textDecor: "none" }}
            color={i === links.length - 1 ? "#9C4DF4" : "#938eab"}
            css={css({
              fontWeight: "700",
              lineHeight: "16px",
              paddingRight: "10px",
              fontFamily: `Metropolis !important`,
              borderRight: `${
                i === links.length - 1 ? "none" : "2px solid #938eab"
              }`,
            })}
          >
            {link.label}
          </Link>
        ))}
      </Flex>
      <Flex
        px={{ md: 40 }}
        h={"100%"}
        wrap="wrap"
        alignItems="center"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Box maxW={{ md: "50%" }} textAlign={{ base: "center", md: "left" }}>
          <Heading
            as="h1"
            mb={4}
            size="lg"
            maxW={"290px"}
            fontWeight={600}
            fontFamily={"Metropolis"}
          >
            {title}
          </Heading>
        </Box>
        <Flex
          flex="1"
          ml={{ md: 8 }}
          w={"fit-content"}
          textAlign="center"
          maxW={{ md: "50%" }}
          mt={{ base: 4, md: 0 }}
          justifyContent={"center"}
        >
          <Image alt={title} src={imageUrl} objectFit="cover" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SecondaryHero;
