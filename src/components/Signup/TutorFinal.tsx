import { useEffect, useRef, useState } from "react";
import { Box, Text, Checkbox, Flex } from "@chakra-ui/react";
import CButton from "../Button";
import { ITutorProps } from "../../typings/home";
import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";
import { tutorInit, ITutor } from "../../typings/signup";
import { useNavigate } from "react-router-dom";

import { IResponse, registerTutor, reset } from "../../services/auth/authSlice";
import { AVATAR } from "../../constants/icon";
import useCustomToast from "../../hooks/useCustomToast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  profileImage: Yup.mixed().required("Profile Image is required"),
  agreement_status: Yup.boolean().oneOf(
    [true],
    "Agreement status must be true"
  ),
});

const TutorFinal = ({ onChange, setFormData, data, onClick }: ITutorProps) => {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState(AVATAR);
  const showToast = useCustomToast();
  const { isLoading } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data.profileImage) {
      setImgUrl(URL.createObjectURL(data.profileImage));
    }
  }, [data.profileImage]);

  const handleSubmit = async (values: ITutor) => {
    const formattedValues = {
      ...values,
      country: values.country.split(" ").slice(1).join(" "),
      agreement_status: values.agreement_status ? "agreed" : null,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const resultAction = await dispatch(
      registerTutor({ data: formattedValues })
    );

    if (registerTutor.fulfilled.match(resultAction)) {
      showToast(
        resultAction.payload.message ||
          "Please check your email for more details",
        "success"
      );
      navigate("/");
      onClick("pageone");
      dispatch(reset());
      setFormData(tutorInit);
    } else if (registerTutor.rejected.match(resultAction)) {
      showToast(
        (resultAction.payload as IResponse).message || "Registration failed",
        "error"
      );
    }
  };

  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImgUrl(URL.createObjectURL(file));
      setFieldValue("profileImage", file);
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
                max={1000}
                className="hidden"
                onChange={(e) => handleFileChange(e, setFieldValue)}
                accept="image/png, image/jpg, image/jpeg"
                // value={imgUrl}
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

export default TutorFinal;
