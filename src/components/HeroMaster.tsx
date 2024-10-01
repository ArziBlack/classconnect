import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import CButton from "./Button";
import {
  COLLABORATION,
  EXCEL,
  GRADUATE,
  REMOTE,
} from "../constants/illustrations";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Hero2 = () => {
  const navigate = useNavigate();
  const staticPart = "Unlock Your";
  const changingWords = ["Potential:", "Skills:", "Career:", "Goals:"];
  const endPart = "Learn Anytime, Anywhere";

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % changingWords.length);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="font-[Metropolis] bg-[#002333] relative overflow-hidden min-h-[70dvh]">
      <svg
        className="fade-in-image"
        width="1983"
        height="382"
        viewBox="0 0 1983 382"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          left: "-10%",
          top: "50%",
          opacity: 0.5,
          bottom: "30px",
          position: "absolute",
          transform: "translateY(-40%)",
        }}
      >
        <path
          d="M1983 190.359C1898.6 123.677 1262.51 -58.6132 1265.98 27.8067C1270.3 135.832 1290.86 418.411 1145.87 358.398C1000.88 298.384 799.621 80.3332 803.949 190.359C808.277 300.384 1114.49 509.918 0 255.86"
          stroke="#00FF84"
          strokeWidth="10"
        ></path>
      </svg>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center pt-[100px]">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-white tracking-tight leading-none md:text-5xl xl:text-6xl font-[500]">
            <p style={{ display: "inline" }}>{staticPart} </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: "inline-block" }}
                className="text-primary-action"
              >
                {changingWords[currentIndex]}
              </motion.div>
            </AnimatePresence>
            <br />
            <div style={{ display: "inline" }}>{endPart}</div>
          </h1>
          <p className="max-w-2xl mb-6 font-[400] text-primary-50 lg:mb-8 md:text-lg lg:text-lg ">
            Empower Your Learning Journey with Personalized Courses and Expert
            Guidance
          </p>
          <Flex gap={4} align={"center"}>
            <CButton
              text="Enroll now"
              // icon={GoArrowUpRight}
              // iconPosition="right"
              outlined
              onClick={() => {
                navigate("/register");
              }}
            />
            <CButton
              text="Start free trial"
              icon={GoArrowUpRight}
              iconPosition="right"
              onClick={() => {
                navigate("/register");
              }}
            />
          </Flex>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <img src={EXCEL} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={COLLABORATION} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={GRADUATE} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={REMOTE} alt="mockup" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
