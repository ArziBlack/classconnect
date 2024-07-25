import React from "react";
import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Box,
} from "@chakra-ui/react";
import Button from "../../../components/Button";
import jsPDF from "jspdf";
import { getCurriculum } from "../../../services/tutor/tutorThunk";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { convertStringsToArray } from "../../../utils/utility";
import Loading from "../../../utils/Loading";

const links = [{ to: "", label: "My curriculum" }];

export const Curriculum = () => {
  const dispatch = useAppDispatch();
  const { curriculumResponse, isLoading } = useAppSelector(state => state.tutor);

  React.useEffect(()=> {
    !curriculumResponse && dispatch(getCurriculum());
  },[]);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("HEP curriculum", 10, 10);

    doc.setFontSize(12);
    doc.text(
      "View your enrolled curriculum. Track your progress, access curriculum materials, and stay updated with upcoming lessons and assignments.",
      10,
      20,
      { maxWidth: 180 }
    );

    curriculumResponse?.data?.curriculum?.forEach((item, index) => {
      doc.setFontSize(14);
      doc.text(item?.topic, 10, 30 + index * 30);
      doc.setFontSize(12);
      doc.text(item?.content, 10, 40 + index * 30, { maxWidth: 180 });
    });

    doc.save("curriculum.pdf");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ViewHeader
        title="Curriculum"
        subtext="View and manage your enrolled curriculum. Track your progress, access curriculum materials, and stay updated with upcoming lessons and assignments."
      />
      <BreadCrumb links={links} />

      <Flex color="white" justify={"space-between"}>
        <Accordion
          allowMultiple
          width="700px"
          display="flex"
          flexDir="column"
          gap={4}
        >
          {curriculumResponse?.data?.curriculum.map((item, index) => (
            <AccordionItem key={index} border="none">
              <h2>
                <AccordionButton
                  h="50px"
                  borderRadius="8px"
                  _hover={{ bg: "#37474f" }}
                  bg="#37474F"
                >
                  <Box as="span" flex="1" textAlign="left">
                    {item?.topic?.replace(":", "")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              {convertStringsToArray(item?.content).map((it, id) => (<AccordionPanel pb={2} textTransform={"capitalize"} key={id}>• {it}</AccordionPanel>))}
            </AccordionItem>
          ))}
        </Accordion>
        <Button text="Download Curriculum" onClick={generatePDF} />
      </Flex>
    </>
  );
};

export default Curriculum;
