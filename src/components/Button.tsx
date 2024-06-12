import React from "react";
import { IconType } from "react-icons";
import {
  Text,
  Button,
  Spinner,
  ButtonProps,
  useColorModeValue,
} from "@chakra-ui/react";

interface CButtonProps extends ButtonProps {
  bg?: string;
  text: string;
  color?: string;
  border?: string;
  icon?: IconType;
  outlined?: boolean;
  isLoading?: boolean;
  w?: string | number;
  h?: string | number;
  borderColor?: string;
  py?: string | number;
  px?: string | number;
  iconPosition?: "left" | "right";
}

const CButton: React.FC<CButtonProps> = ({
  text,
  icon: Icon,
  h = "20px",
  px = "20px",
  py = "20px",
  border = "none",
  outlined = false,
  isLoading = false,
  w = "fit-content",
  bg = "brand.action",
  iconPosition = "left",
  color = "rgba(0, 0, 0, 0.87)",
  ...props
}) => {
  const buttonBg = useColorModeValue(
    outlined ? "white" : bg,
    outlined ? "gray.800" : bg
  );

  const borderColor = outlined ? "brand.action" : "transparent";

  return (
    <Button
      w={w}
      h={h}
      bg={buttonBg}
      outline="none"
      border={border}
      fontWeight="500"
      p={`${py} ${px}`}
      color={color}
      borderRadius="30px"
      borderWidth={"1px"}
      borderStyle={"solid"}
      borderColor={borderColor}
      _hover={{
        borderWidth: "1px",
        bg: outlined ? bg : "white",
        // borderColor: outlined ? "transparent" : "brand.action",
      }}
      {...props}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon
              size={"18px"}
              fontWeight={600}
              style={{ marginRight: "5px" }}
            />
          )}
          <Text> {text} </Text>
          {Icon && iconPosition === "right" && (
            <Icon style={{ marginLeft: "5px" }} fontWeight={600} />
          )}
        </>
      )}
    </Button>
  );
};

export default CButton;
