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
  h = "40px",
  px = "20px",
  py = "25px",
  border = "none",
  color = "white",
  outlined = false,
  isLoading = false,
  w = "fit-content",
  bg = "brand.action",
  iconPosition = "left",
  ...props
}) => {
  const buttonBg = useColorModeValue(
    outlined ? "white" : bg,
    outlined ? "gray.800" : bg
  );

  const textColor = useColorModeValue(
    outlined ? "#9C4DF4" : color,
    outlined ? "#9C4DF4" : color
  );

  const borderColor = outlined ? "#9C4DF4" : "transparent";

  return (
    <Button
      w={w}
      h={h}
      bg={buttonBg}
      outline="none"
      border={border}
      fontWeight="400"
      p={`${py} ${px}`}
      color={textColor}
      borderRadius="10px"
      borderWidth={"1px"}
      borderStyle={"solid"}
      borderColor={borderColor}
      _hover={{
        borderWidth: "1px",
        bg: outlined ? bg : "white",
        color: outlined ? color : "#9C4DF4",
        borderColor: outlined ? "transparent" : "#9C4DF4",
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
