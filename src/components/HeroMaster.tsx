import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import CButton from "./Button";
import {
  COLLABRATION,
  EXCEL,
  GRADUATE,
  REMOTE,
} from "../constants/illustrations";
import { GoArrowUpRight } from "react-icons/go";

const Hero2 = () => {
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
    <section className="bg-white font-[Metropolis]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-primary-dark tracking-tight leading-none md:text-5xl xl:text-6xl font-[500]">
            <div style={{ display: "inline" }}>{staticPart} </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: "100%", opacity: 0 }} // Start from bottom
                animate={{ y: 0, opacity: 1 }} // Move to center
                exit={{ y: "-100%", opacity: 0 }} // Move to top
                transition={{ duration: 0.5 }}
                style={{ display: "inline-block" }}
              >
                {changingWords[currentIndex]}
              </motion.div>
            </AnimatePresence>
            <div style={{ display: "inline" }}>{endPart}</div>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-primary-offwhite lg:mb-8 md:text-lg lg:text-lg">
            Empower Your Learning Journey with Personalized Courses and Expert
            Guidance
          </p>
          <CButton
            text="Get started"
            icon={GoArrowUpRight}
            iconPosition="right"
          />
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src={EXCEL} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={COLLABRATION} alt="mockup" />
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
