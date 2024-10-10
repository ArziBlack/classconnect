import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { submitAccountDetails } from "../../../services/tutor/tutorThunk";
import { IAccountDetails } from "../../../typings/tutor";
import useCustomToast from "../../../hooks/useCustomToast";

const TutorAccountForm = () => {
  const dispatch = useAppDispatch();
  const showToast = useCustomToast();
  const { isLoading } = useAppSelector((state) => state.tutor);

  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("");
  const [errors, setErrors] = useState({
    accountName: false,
    accountNumber: false,
    bank: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ accountName: false, accountNumber: false, bank: false });

    // Simple validation
    if (!accountName) {
      setErrors((prev) => ({ ...prev, accountName: true }));
    }
    if (!accountNumber) {
      setErrors((prev) => ({ ...prev, accountNumber: true }));
    }
    if (!bank) {
      setErrors((prev) => ({ ...prev, bank: true }));
    }

    if (accountName && accountNumber && bank) {
      const accountDetails: IAccountDetails = {
        account_name: accountName,
        account_number: accountNumber,
        bank_name: bank,
      };
      // Handle form submission
      const result = await dispatch(submitAccountDetails({ accountDetails }));
      if (result.meta.requestStatus === "fulfilled") {
        showToast("Account details submitted successfully", "success");
      } else if (result.meta.requestStatus === "rejected") {
        showToast("An error occurred", "error");
      }
      console.log({
        accountName,
        accountNumber,
        bank,
      });
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      maxWidth="400px"
      margin="0 auto"
      p={10}
      boxShadow="md"
      bg={"white"}
      borderRadius="md"
    >
      <Text fontSize="lg" mb={6}>
        We would like to collect your account details at this point. Please
        register your account details for payment.
      </Text>

      <FormControl isInvalid={errors.accountName} mb={4}>
        <FormLabel>Account Name</FormLabel>
        <Input
          placeholder="Enter your account name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
        {errors.accountName && (
          <FormErrorMessage>Account name is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={errors.accountNumber} mb={4}>
        <FormLabel>Account Number</FormLabel>
        <Input
          placeholder="Enter your account number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        {errors.accountNumber && (
          <FormErrorMessage>Account number is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={errors.bank} mb={4}>
        <FormLabel>Bank</FormLabel>
        <Input
          placeholder="Enter your bank name"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
        {errors.bank && <FormErrorMessage>Bank is required.</FormErrorMessage>}
      </FormControl>

      <Button
        colorScheme="teal"
        type="submit"
        width="full"
        isLoading={isLoading}
      >
        Submit
      </Button>
    </Box>
  );
};

export default TutorAccountForm;
