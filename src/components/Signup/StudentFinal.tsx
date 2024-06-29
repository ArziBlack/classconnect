import { useRef, useState } from "react";
import { Box, Text, Checkbox, Flex } from "@chakra-ui/react";
import CButton from "../Button";
import { IStudentProps } from "../../typings/home";
import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";
import { IStudent, studentInit } from "../../typings/signup";
import { useNavigate } from "react-router-dom";

import { IResponse, register, reset } from "../../services/auth/authSlice";
import { AVATAR } from "../../constants/icon";
import useCustomToast from "../../hooks/useCustomToast";

const StudentFinal = ({
  onChange,
  setFormData,
  data,
  onClick,
}: IStudentProps) => {
  const navigate = useNavigate();
  const { URL: URI } = useAppSelector((store) => store.other);
  const [check, setCheck] = useState(true);
  const [imgUrl, setImgUrl] = useState(AVATAR);
  const showToast = useCustomToast();
  const { isLoading } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  function handleCheckBox() {
    setCheck(!check);
  }

  const validateGuardianData = (data: IStudent): boolean => {
    const fieldNames: { [key: string]: string } = {
      first_name: "First Name",
      last_name: "Last Name",
      student_email: "Student Email",
      sex: "Sex",
      country: "Country",
      state: "State",
      course: "Course",
      dateOfBirth: "Date of Birth",
      classTime_options: "Class Time Options",
      payment_plan: "Payment Plan",
      class_type: "Class Type",
      password: "Password",
      profileImage: "Profile Image",
      student_phoneNum: "Student Phone Number",
    };

    for (const key in fieldNames) {
      if (data[key as keyof IStudent] === null) {
        showToast(`${fieldNames[key]} cannot be null.`, "error");
        return false;
      }
    }

    if (!data.agreement_status) {
      showToast("Agreement status must be true.", "error");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (validateGuardianData(data)) {
      const resultAction = await dispatch(register({URI, data}));

      if (register.fulfilled.match(resultAction)) {
        showToast(
          resultAction.payload.message ||
            "Please check your email for more details",
          "success"
        );
        navigate("/");
        dispatch(reset());
        setFormData(studentInit);
      } else if (register.rejected.match(resultAction)) {
        showToast(
          (resultAction.payload as IResponse).message || "Registration failed",
          "error"
        );
      }
    } else {
      showToast("No Field can be left blank!", "error");
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
    <>
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
            onChange={handleFileChange}
            accept="image/png, image/jpg, image/jpeg"
          />
        </div>
      </div>
      <Box display="flex" mb={6} gap={2} onClick={handleCheckBox}>
        <Checkbox
          defaultChecked
          onChange={onChange}
          name="agreement_status"
        ></Checkbox>
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
          onClick={handleSubmit}
          isDisabled={check ? false : true}
        />
      </Flex>
    </>
  );
};

export default StudentFinal;
