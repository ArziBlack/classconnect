import {
  Box,
  Button,
  Input,
  Image,
  FormControl,
  FormLabel,
  useToast,
  Progress,
} from "@chakra-ui/react";
import useFireStore from "../hooks/useFireStore";
import { FC, useEffect } from "react";
import { IImageUpload } from "../typings/files";

export const ImageUpload: FC<IImageUpload> = ({
  setFormData,
  setGuardianData,
  isGuardian,
}) => {
  const toast = useToast();
  const {
    handleImageChange,
    url,
    preview,
    firebaseError,
    uploadProgress,
    image,
    message,
    fileSizeLimit,
    fileSize,
    uploadImage,
  } = useFireStore();

  useEffect(() => {
    if (url) {
      console.log(url);
      !isGuardian
        ? setFormData((prevState) => ({ ...prevState, profileImage: url }))
        : setGuardianData((prevState) => ({
            ...prevState,
            profileImage: url,
          }));
      toast({
        title: "Image uploaded",
        description: "Your image has been successfully uploaded.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, setFormData, setGuardianData, isGuardian, toast]);

  const handleUpload = async () => {
    if (!image) {
      toast({
        title: "No image selected",
        description: "Please select an image to upload.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (firebaseError) {
      toast({
        title: "Error uploading Image",
        description: firebaseError?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    if (fileSize > fileSizeLimit) {
      toast({
        title: "File exceeds limit",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    await uploadImage();
  };
  console.log(image);
  return (
    <Box p={5} maxW="md" borderWidth={1} borderRadius="lg" overflow="hidden">
      <FormControl>
        <FormLabel>Upload Image</FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          mb={3}
        />
      </FormControl>
      {url
        ? null
        : preview && (
            <Box mb={3}>
              <Image
                src={preview}
                alt="Selected Image"
                objectFit="cover"
                borderRadius="md"
                maxH="100px"
              />
            </Box>
          )}
      {uploadProgress && <Progress value={uploadProgress} size="sm" mb={3} />}
      <Button onClick={handleUpload} colorScheme="blue">
        Upload
      </Button>
    </Box>
  );
};
