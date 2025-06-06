import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { fadeInDown, fadeInUp, transition } from "../../utils/Animations";

import { PageTransition } from "../../components/PageTransition";
import { homeImages } from "../../constants/MyImages";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

export const Home = () => {
  const [homeImage, setHomeImage] = useState("");
  useEffect(() => {
    const randomPicture = Math.floor(Math.random() * homeImages.length);
    // Providing a random index to get the image and informations about it
    setHomeImage(homeImages[randomPicture].image);
  }, [location.pathname]);

  return (
    <>
      <PageTransition />

      <section className="container relative z-20 mx-auto w-full h-FullScreen overflow-hidden sm:mt-4 flex flex-col items-center justify-center h-full">
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="mx-auto grid items-center gap-4 p-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-14 "
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-center font-Wulkan text-4xl lg:text-5xl font-medium uppercase lg:text-left xl:text-5xl">
              Ux/UI & 
              <br className="hidden lg:block" /> Front-End DEV
            </h1>

            <p className="text-sm xl:text-base">
              Olá, seja bem-vindo(a) ao meu portfólio! <br></br> Aqui você
              encontrará meus projetos que venho feito ultimamente. Logo abaixo
              está algumas das minhas redes, sinta-se à vontade de entrar em
              contato! 🤠
            </p>
            {/* Redes sociais */}
            <div className="flex justify-center gap-10 pb-4 text-3xl sm:justify-start sm:pt-6">
              <a
                href="https://www.linkedin.com/in/nicolas-malachias/"
                className="transition hover:text-primary"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:nicolasmalaquias2015@gmail.com"
                className="transition-colors duration-300 hover:text-primary"
                target="_blank"
              >
                <HiOutlineMail />
              </a>

              <a
                href="https://github.com/bloodstormm"
                className="transition hover:text-primary"
                target="_blank"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="mx-auto w-[90%] shadow-2xl overflow-hidden rounded-full">
            <motion.img
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ ...transition, duration: 1.45, delay: 0.7 }}
              src={homeImage}
              className="mx-auto w-full"
            />
          </div>
          <div className="relative h-2/3 ">
            <h1 className="text-center font-Wulkan text-4xl lg:text-5xl uppercase md:hidden lg:block sm:text-left xl:text-6xl">
              Nícolas Malachias
            </h1>

            <Link
              to="/projects"
              className="absolute group -bottom-4 hover:scale-105 transition duration-300 left-6 hidden h-32 w-32 items-center justify-center rounded-full border border-brown dark:border-beige sm:flex lg:left-14 lg:h-40 lg:w-40 xl:bottom-0"
            >
              <div className="absolute top-2 right-1 h-6 w-6 rounded-full group-hover:animate-pulse transition bg-primary lg:top-1 lg:right-5"></div>
              <p className="w-20">Ver meus Projetos</p>
              <BsArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          {...fadeInDown}
          transition={{ ...fadeInDown.transition, duration: 1.25 }}
          className="flex mx-auto rounded-3xl overflow-x-auto w-full justify-center items-center gap-6 pt-4 pb-10 lg:gap-14 2xl:gap-20 sm:p-6"
        >
          {/* <CompaniesCarousel /> */}
        </motion.div>
      </section>

      {/* Efeitos em volta do site */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="absolute bottom-5 left-20 h-96 w-72 rounded-full bg-gradient-to-br from-primary dark:from-secondary to-transparent p-px sm:bottom-0 sm:rounded-t-full"
      >
        <div className="h-full w-full rounded-t-full bg-background dark:bg-background transition-colors duration-300" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="absolute top-0 right-0 h-64 w-56 rounded-b-full bg-gradient-to-tl
         from-primary to-transparent p-px "
      >
        <div className="h-full w-full rounded-b-full dark:bg-background bg-background transition-colors duration-300" />
      </motion.div>
    </>
  );
};
