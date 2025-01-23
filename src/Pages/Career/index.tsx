import { motion } from "framer-motion";

import { fadeIn, fadeInDown } from "../../utils/Animations";

import { EducationTimeline } from "../../components/EducationTimeline";
import { ExperiencesTimeline } from "../../components/ExperiencesTimeline";
import { PageTransition } from "../../components/PageTransition";
import { CompaniesCarousel } from "../../components/CompaniesCarousel";

export const Career = () => (
  <>
    <PageTransition />
    <section className="mb-12 mt-6 flex w-full flex-col items-center lg:mt-0">
      <motion.h1
        {...fadeInDown}
        transition={{ ...fadeInDown.transition, delay: 0.5 }}
        className="mb-12 mt-6 font-Wulkan text-5xl lg:text-6xl"
      >
        Minha Carreira:
      </motion.h1>

      <CompaniesCarousel />

      <motion.div
        {...fadeIn}
        transition={{ delay: 0.6 }}
        className="flex mt-12 flex-col gap-16 xl:divide-brown/40 dark:xl:divide-beige/40 xl:divide-x xl:flex-row"
      >
        <ExperiencesTimeline />
        <EducationTimeline />
      </motion.div>
    </section>
  </>
);
