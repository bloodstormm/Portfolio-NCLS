import { BsInstagram, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import picture from "../../assets/pic.jpg";
import { motion } from "framer-motion";
import { jnj, opt, villarta } from "../../assets/companies";

export const Home = () => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

  return (
    <>
      <section className="relative z-20 w-full overflow-hidden">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ ...transition, duration: 1, delay: 1 }}
          className="mx-auto grid grid-cols-3 items-center gap-4 p-8 xl:gap-14 "
        >
          <div className="flex flex-col gap-6">
            <h1 className="mt-2 font-Wulkan text-5xl font-medium uppercase text-zinc-700">
              Dev <br /> Front-End | UI/UX
            </h1>

            <p>
              Olá, me chamo Nícolas, seja bem-vindo(a) ao meu Portfólio de 2023.
              Logo abaixo você encontra algumas das minhas redes, sinta se a
              vontade de entrar em contato! 😅
            </p>
            {/* Redes sociais */}
            <div className="flex gap-10 pt-6 text-3xl">
              <a
                href="https://www.instagram.com/_nicolasantoss/"
                className="transition hover:text-[#c5995d]"
                target="_blank"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/nicolas-malachias/"
                className="transition hover:text-[#c5995d]"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/bloodstormm"
                className="transition hover:text-[#c5995d]"
                target="_blank"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <div className="w-[90%] overflow-hidden rounded-full">
            <motion.img
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ ...transition, duration: 1.45, delay: 1.45 }}
              src={picture}
              className="mx-auto w-full "
            />
          </div>
          <div className="relative h-2/3 ">
            <h1 className="font-Wulkan text-6xl uppercase">
              Nícolas Malachias
            </h1>
            <div className="absolute -bottom-4 left-14 flex h-40 w-40 items-center justify-center rounded-full border border-[#3d3731] xl:bottom-0">
              <div className="absolute top-1 right-5 h-6 w-6 rounded-full bg-[#c5995d]"></div>
              <p className="w-20">Entrar em contato</p>
              <BsArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ ...transition, duration: 1.25, delay: 1.25 }}
          className="mt-6 flex w-full justify-center gap-20  p-8"
        >
          <img src={jnj} alt="jnj" className="h-16 grayscale" />
          <img src={opt} alt="opt" className="h-16 grayscale" />
          <img src={villarta} alt="villarta" className="h-16 grayscale" />
        </motion.div>
      </section>
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: [window.innerWidth, 0],
        }}
        transition={{ ...transition, duration: 2.45 }}
        className="absolute top-0 right-0 z-20 h-screen w-screen bg-[#e6c291]"
      ></motion.div>

      {/* Efeitos em volta do site */}
      <div className="absolute bottom-0 left-20 h-96 w-72 rounded-t-full bg-gradient-to-br from-[#c5995d]  to-transparent p-px ">
        <div className="h-full w-full rounded-t-full bg-background"></div>
      </div>
      <div className="absolute top-0 -right-0 h-64 w-56 rounded-b-full bg-gradient-to-tl from-[#c5995d]  to-transparent p-px ">
        <div className="h-full w-full rounded-b-full bg-background"></div>
      </div>
    </>
  );
};