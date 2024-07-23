import React, { InputHTMLAttributes, useState } from "react";
import {
  Text,
  Icon,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { type IconType } from "react-icons";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  error?: string;
  icon?: IconType;
  showPasswordToggle?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  type = "text",
  icon: IconComponent,
  showPasswordToggle = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const bgColor = useColorModeValue("white", "gray.800");

  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div>
      <Text fontWeight="bold" fontSize="15px" mb={2}>
        {label}
      </Text>
      <InputGroup>
        {IconComponent && (
          <InputLeftElement pointerEvents="none">
            <Icon as={IconComponent} color="gray.500" />
          </InputLeftElement>
        )}
        <Input
          {...rest}
          size={"md"}
          bg={bgColor}
          variant="filled"
          borderRadius="md"
          borderWidth={"1px"}
          isInvalid={!!error}
          borderColor={"#DEDDE4"}
          focusBorderColor="purple.500"
          type={showPassword ? "text" : type}
          _placeholder={{ color: "gray.500" }}
        />
        {showPasswordToggle && type === "password" && (
          <InputRightElement width="4.5rem" bg={"transparent"}>
            <Button
              size="sm"
              h="1.75rem"
              bg={"transparent"}
              _hover={{
                bg: "transparent",
              }}
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? (
                <ViewOffIcon color="gray.500" />
              ) : (
                <ViewIcon color="gray.500" />
              )}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>

      {error && (
        <Text color="red.500" mt={1} fontSize={"xs"}>
          {error}
        </Text>
      )}
    </div>
  );
};

export default InputField;
