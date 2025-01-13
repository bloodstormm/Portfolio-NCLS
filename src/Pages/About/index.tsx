import { motion } from "framer-motion";
import { aboutImages } from "../../constants/MyImages";

import { fadeInDown, fadeInLeft, transition } from "../../utils/Animations";
import { StaggerContainer, itemAnimation } from "../../utils/Animations";
import moment from "moment";

import { PageTransition } from "../../components/PageTransition";

import { HiOutlineCodeBracket, HiOutlineScale } from "react-icons/hi2";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";

export const About = () => {
  const [aboutImage, setAboutImage] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  const hoje = moment();
  const tempoDeExperiencia = hoje.diff("2022-01-01", "years");

  useEffect(() => {
    const randomPicture = Math.floor(Math.random() * aboutImages.length);
    setAboutImage(aboutImages[randomPicture].image);
    setImageDescription(aboutImages[randomPicture].description);
  }, [location.pathname]);

  return (
    <>
      <PageTransition />

      <section className="container mx-auto flex min-h-[80vh] w-full flex-col gap-12 p-4 sm:p-6 lg:flex-row">
        <motion.div>
          <motion.div
            {...fadeInDown}
            transition={{ ...fadeInDown.transition, duration: 1.8, delay: 0.6 }}
            className="mt-8"
          >
            <h1 className="text-center font-Wulkan text-5xl font-medium uppercase sm:text-left sm:text-7xl">
              Sobre Mim
            </h1>

            <p className="max-w-sm pt-8 pb-2 text-sm sm:max-w-2xl sm:text-base">
            Oi, sou Nícolas Malachias, de Taubaté, SP. Graduado em Análise e Desenvolvimento de Sistemas, sou especializado em desenvolvimento front-end, com experiência em <b className="text-primary">React, Next.js, Angular e Supabase.</b>  
            </p>

            <p className="max-w-sm pb-2 text-sm sm:max-w-2xl sm:text-base">
            Também sou apaixonado por UX/UI, com vivência em UX Research, prototipação e pesquisa com usuários. Tenho experiência em análise de problemas, levantamento de requisitos e metodologias ágeis como SCRUM.
            </p>
            <p className="max-w-sm pb-2 text-sm sm:max-w-2xl sm:text-base">
            Falo inglês avançado e valorizo a comunicação e colaboração, sempre buscando melhorar com feedbacks e contribuir para projetos de sucesso.
            </p>

            <div className="mx-auto w-[90%] border border-brown/10 dark:border-beige/10"></div>

            <div className="my-4 flex w-full flex-col gap-4 rounded-xl bg-primary/20 dark:bg-secondary/20 py-4 px-3 text-center font-Wulkan text-xl font-semibold sm:m-6 sm:mx-auto sm:w-fit sm:flex-row sm:gap-8 sm:p-6 sm:text-3xl sm:font-normal">
              <h2>
                <span className="mr-2 text-2xl font-semibold text-primary">
                  7+
                </span>
                Projetos feitos
              </h2>
              <h2>
                <span className="mr-2 text-2xl font-semibold text-primary">
                  {tempoDeExperiencia}
                </span>
                Anos de experiência
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={StaggerContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="my-6 grid w-full md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4"
          >
            <motion.div
              variants={itemAnimation}
              className="rounded-xl w-full bg-offWhite/60 dark:bg-background border border-brown/20 p-4 text-center transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-secondary/30 xl:max-w-[17rem]"
            >
              <HiOutlineCodeBracket className="mx-auto mb-2 text-4xl text-primary" />
              <h3 className="font-semibold lg:text-lg ">Front-end</h3>
              <p className="pt-4">
                Crio interfaces funcionais e bonitas, com foco na experiência do usuário
              </p>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="rounded-xl bg-offWhite/60 dark:bg-background border border-brown/20 p-4 text-center transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-secondary/30 xl:max-w-[17rem]"
            >
              <AiOutlineEye className="mx-auto mb-2 text-4xl text-primary" />
              <h3 className="text-base font-semibold lg:text-lg ">
                Visual & Design
              </h3>
              <p className="pt-4">
                Olho para o lado visual das coisas. Eu gosto de criar belas
                ilustrações e animações!
              </p>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="rounded-xl bg-offWhite/60 dark:bg-background border border-brown/20 p-4 text-center transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-secondary/30 xl:max-w-[17rem]"
            >
              <HiOutlineScale className="mx-auto mb-2 text-4xl text-primary" />
              <h3 className="text-base font-semibold lg:text-lg ">
                Princípios
              </h3>
              <p className="pt-4">
                Sou uma pessoa de valores e prezo por tudo que faço e para quem
                eu faço
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          {...fadeInLeft}
          transition={{ ...fadeInLeft.transition, duration: 1.45, delay: 0.5 }}
          className="mx-auto w-4/5 overflow-hidden rounded-2xl sm:relative xl:w-[35%]"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ ...transition, duration: 1.45 }}
            src={aboutImage}
            className="inset-0 h-full w-full rounded-2xl object-cover object-center lg:absolute"
            alt="A Picture about myself"
          />

          <div className="hidden bg-gradient-to-t from-brown/70 dark:from-background/70 w-full to-transparent lg:absolute lg:bottom-0 lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Esse sou eu! 🥂
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              {imageDescription}
            </p>
          </div>
        </motion.div>

        <div className="dotsGrid absolute left-0 top-0 z-10 hidden h-12 w-12 lg:block 2xl:h-24 2xl:w-32"></div>
        <div className="dotsGrid absolute bottom-0 z-20 hidden h-16 w-48 2xl:block 2xl:w-64"></div>
        <div className="dotsGrid absolute right-0 top-0 z-20 hidden h-16 w-24 lg:block 2xl:w-44"></div>
      </section>
    </>
  );
};
