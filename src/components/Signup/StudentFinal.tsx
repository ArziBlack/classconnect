import { useEffect, useRef, useState } from "react";
import { Box, Text, Checkbox, Flex } from "@chakra-ui/react";
import CButton from "../Button";
import { IStudentProps } from "../../typings/home";
import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";
import { IStudent, studentInit } from "../../typings/signup";
import { useNavigate } from "react-router-dom";
import { IResponse, register, reset } from "../../services/auth/authSlice";
import { AVATAR } from "../../constants/icon";
import useCustomToast from "../../hooks/useCustomToast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  agreement_status: Yup.boolean().oneOf(
    [true],
    "Agreement status must be true"
  ),
});

const StudentFinal = ({
  onChange,
  setFormData,
  data,
  onClick,
}: IStudentProps) => {
  const navigate = useNavigate();
  const { URL: URI } = useAppSelector((store) => store.other);
  const [imgUrl, setImgUrl] = useState(AVATAR);
  const showToast = useCustomToast();
  const { isLoading } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data.profileImage) {
      setImgUrl(URL.createObjectURL(data.profileImage));
    }
  }, [data.profileImage]);

  const handleSubmit = async (values: IStudent) => {
    const formattedValues = {
      ...values,
      country: values.country.split(" ").slice(1).join(" "),
      agreement_status: values.agreement_status ? "agreed" : null,
    };

    const resultAction = await dispatch(
      register({ URI, data: formattedValues })
    );

    if (register.fulfilled.match(resultAction)) {
      showToast(
        resultAction.payload.message ||
          "Please check your email for more details",
        "success"
      );
      onClick("pageone");
      dispatch(reset());
      setFormData(studentInit);
      setTimeout(() => {
        navigate("/verify");
      }, 3000);
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
      setFormData((prevState) => ({
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
                className="hidden"
                onChange={(e) => handleFileChange(e)}
                accept="image/png, image/jpg, image/jpeg"
              />
            </div>
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
            <Text fontSize="14px">
              By creating an account, you agree to our{" "}
              <Text
                display={"inline-block"}
                cursor={"pointer"}
                _hover={{ color: "brand.action" }}
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

export default StudentFinal;
