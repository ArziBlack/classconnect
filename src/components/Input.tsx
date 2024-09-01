import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useRef,
  useState,
} from "react";
import {
  Text,
  Icon,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { type IconType } from "react-icons";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaFileUpload } from "react-icons/fa";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  error?: string;
  info?: string;
  file?: File;
  icon?: IconType;
  showPasswordToggle?: boolean;
  isFileInput?: boolean;
  fileChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  file,
  info,
  type = "text",
  icon: IconComponent,
  fileChange,
  showPasswordToggle = false,
  isFileInput = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fileName, setFileName] = useState<string | null>(file?.name);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bgColor = useColorModeValue("white", "gray.800");

  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleFileClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);

      // Ensure fileChange prop is called after setting local state
      if (fileChange) {
        fileChange(event);
      }
    }
  };

  return (
    <div>
      <Text fontWeight="bold" fontSize="15px" mb={!info && 2}>
        {label}
      </Text>
      {info && (
        <Text color="yellow.500" mt={1} fontSize={"xs"}>
          {info}
        </Text>
      )}
      <InputGroup>
        {IconComponent && (
          <InputLeftElement pointerEvents="none">
            <Icon as={IconComponent} color="gray.500" />
          </InputLeftElement>
        )}
        {isFileInput ? (
          <>
            <Input
              ref={inputRef}
              type="file"
              hidden
              onChange={(e) => {
                handleFileChange(e);
              }}
              accept="application/pdf"
            />
            <Button
              onClick={handleFileClick}
              bg={bgColor}
              variant="filled"
              borderRadius="md"
              borderWidth={"1px"}
              borderColor={"#DEDDE4"}
              _hover={{ bg: bgColor }}
              color={"black"}
              leftIcon={<FaFileUpload />}
            >
              Upload File
            </Button>
            {fileName && (
              <Box ml={3} mt={2} color="gray.500" fontSize="sm">
                {fileName}
              </Box>
            )}
          </>
        ) : (
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
        )}
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
