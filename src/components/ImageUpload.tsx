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
import { useState } from "react";

export const ImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const toast = useToast();
  const {
    handleImageChange,
    // url,
    preview,
    firebaseError,
    uploadProgress,
    image,
    setProgress,
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
    toast({
      title: "Image uploaded",
      description: "Your image has been successfully uploaded.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setUploading(true);
    setProgress(0);

    // Simulate an upload process
    const simulateUpload = () => {
      if (uploadProgress < 100) {
        setTimeout(() => {
          setProgress((prev) => prev + 10);
        }, 300);
      } else {
        setUploading(false);
        toast({
          title: "Image uploaded",
          description: "Your image has been successfully uploaded.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    const interval = setInterval(() => {
      simulateUpload();
      if (uploadProgress >= 100) {
        clearInterval(interval);
      }
    }, 300);
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
            maxH="200px"
          />
        </Box>
      )}
      {uploading && <Progress value={uploadProgress} size="sm" mb={3} />}
      <Button onClick={handleUpload} colorScheme="blue">
        Upload
      </Button>
    </Box>
  );
};
