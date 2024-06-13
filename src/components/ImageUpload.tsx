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

export const ImageUpload = () => {
  const toast = useToast();
  const {
    handleImageChange,
    url,
    preview,
    firebaseError,
    uploadProgress,
    image,
    uploadImage,
  } = useFireStore();

  const handleUpload = () => {
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
        description: "Please select an image to re-upload.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    // Handle the image upload logic here
    // For now, we'll just show a toast message
    uploadImage();
    if (url) {
      toast({
        title: "Image uploaded",
        description: "Your image has been successfully uploaded.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
      {preview && (
        <Box mb={3}>
          <Image
            src={preview}
            alt="Selected Image"
            objectFit="cover"
            borderRadius="md"
            maxH="140px"
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
