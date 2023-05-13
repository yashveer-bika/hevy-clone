import { css } from "@emotion/react";
import { Box, Flex, Text, Button, chakra } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const navbarStyles = css`
  background-color: gray.800;
  width: 100%;
  padding: 4px;
  color: black;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const buttonStyles = css`
  margin-right: 2px;
  background-color: transparent;
  color: black;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: white;
    color: gray.800;
  }
`;

export const Navbar = (props: any) => (
  <Box bg="gray.100" minH="5vh" maxH="10vh">
    <Flex css={navbarStyles} {...props} />
  </Box>
);

export const NavbarText = Text;

const ChakraNavLink = chakra(NavLink, {
    baseStyle: {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: 'gray.500',
      _hover: {
        color: 'gray.700',
      },
      _activeLink: {
        color: 'blue.500',
      },
    },
  });

// doesn't distinguish if active
export const NavbarButton = (props: any) => (
  <ChakraNavLink to={props.to}>
      <Button css={buttonStyles} {...props} />
  </ChakraNavLink>
);