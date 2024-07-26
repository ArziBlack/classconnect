import CButton from "../Button";
import { useRef, useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AVATAR } from "../../constants/icon";
import { guardianInit, IGuardian } from "../../typings/signup";
import { IGuardianProps } from "../../typings/home";
import { IResponse, register, reset } from "../../services/auth/authSlice";
import { Box, Checkbox, Text, Flex } from "@chakra-ui/react";
import useCustomToast from "../../hooks/useCustomToast";

import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  salutation: Yup.string().oneOf(
    ["Mr", "Mrs", "Ms", "Dr"],
    "Salutation is Required!"
  ),
  parent_name: Yup.string().required("Guardian Full Name is Required!"),
  parent_phoneNum: Yup.string()
    .matches(
      /^\+\d{1,3}\d{1,3}\d{3}\d{3,4}$/,
      "Guardian Phone number is not valid"
    )
    .required("Guardian Phone number is required"),
  parent_email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .required("Guardian Email is required"),
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  student_email: Yup.string()
    .email("Invalid email")
    .required("Student Email is required"),
  sex: Yup.string().required("Sex is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  course: Yup.string().required("Course is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  classTime_options: Yup.array().min(
    1,
    "At least one Class Time Option is required"
  ),
  payment_plan: Yup.string().required("Payment Plan is required"),
  class_type: Yup.string().required("Class Type is required"),
  password: Yup.string().required("Password is required"),
  student_phoneNum: Yup.string().required("Student Phone Number is required"),
  agreement_status: Yup.boolean().oneOf(
    [true],
    "Agreement status must be true"
  ),
});

const GuardianG = ({
  setGuardianData,
  onChange,
  onClick,
  data,
}: IGuardianProps) => {
  const navigate = useNavigate();
  const { URL: URI } = useAppSelector((store) => store.other);
  const { isLoading } = useAppSelector((state) => state.auth);
  const showToast = useCustomToast();
  const dispatch = useAppDispatch();
  const [imgUrl, setImgUrl] = useState(AVATAR);

  useEffect(() => {
    if (data?.profileImage) {
      setImgUrl(URL.createObjectURL(data?.profileImage));
    }
  }, [data?.profileImage]);

  const handleSubmit = async (values: IGuardian) => {
    const resultAction = await dispatch(register({ URI, data: values }));

    if (register.fulfilled.match(resultAction)) {
      showToast(
        resultAction.payload.message ||
          "Please check your email for more details",
        "success"
      );
      navigate("/");
      onClick("pageone");
      dispatch(reset());
      setGuardianData(guardianInit);
    } else if (register.rejected.match(resultAction)) {
      showToast(
        (resultAction.payload as IResponse).message || "Registration failed",
        "error"
      );
    }
  };

  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImgUrl(URL.createObjectURL(file));
      setGuardianData((prevState) => ({
        ...prevState,
        profileImage: file,
      }));
    }
  };

  const openFile = () => {
    imgRef?.current?.click();
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isValid }) => (
        <Form>
          <div className="flex flex-col items-center mb-8">
            <div
              onClick={openFile}
              className="relative rounded-full overflow-hidden cursor-pointer opacity-65 hover:opacity-80"
            >
              <div className="text-xs bottom-0 h-[25%] w-full absolute bg-[#979292] opacity-60 text-center text-[#000000] font-bold pt-1">
                Image
              </div>
              <img
                alt="profile image"
                className="rounded-full w-[100px] h-[100px] object-cover"
                src={imgUrl}
              />
              <input
                type="file"
                ref={imgRef}
                max={1000}
                className="hidden"
                onChange={(e) => handleFileChange(e)}
                accept="image/png, image/jpg, image/jpeg"
              />
            </div>
            <ErrorMessage
              name="profileImage"
              component="div"
              className="!text-[#e53e3e] !text-xs mt-1"
            />
          </div>
          <Box display="flex" mb={6} gap={2}>
            <Field name="agreement_status">
              {({ field }) => (
                <Checkbox
                  {...field}
                  onChange={(e) => {
                    onChange(e);
                    setFieldValue("agreement_status", e.target.checked);
                  }}
                  name="agreement_status"
                />
              )}
            </Field>
            <Text fontSize="12px">
              By creating an account, you agree to our{" "}
              <Text
                display="inline"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                  textDecorationColor: "brand.action",
                }}
              >
                Terms & Conditions and Privacy Policy
              </Text>
            </Text>
          </Box>
          <ErrorMessage
            name="agreement_status"
            component="div"
            className="!text-[#e53e3e] !text-xs mt-1"
          />
          <Flex gap={5}>
            <CButton
              my={3}
              w={"full"}
              text="Back"
              onClick={() => onClick("pagesix")}
            />
            <CButton
              my={3}
              text="Submit"
              width="full"
              isLoading={isLoading}
              type="submit"
              isDisabled={!isValid}
            />
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default GuardianG;
