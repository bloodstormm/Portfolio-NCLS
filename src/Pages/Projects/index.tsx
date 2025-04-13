import { motion } from "framer-motion";

import { StaggerContainer } from "../../utils/Animations";
import { useFetchProjects } from "../../hooks/useFetchProjects";

import { PageTransition } from "../../components/PageTransition";
import { ProjectCard } from "../../components/ProjectCard";

export const Projects = () => {
  const { projects, error, loading } = useFetchProjects();

  return (
    <>
      <PageTransition />
      <motion.section className="flex w-full flex-col items-center">
        <h1 className="mb-16 font-Wulkan text-4xl sm:text-5xl">
          Últimos Projetos
        </h1>

        {loading ? (
          <p className="w-full text-center text-2xl">Carregando...</p>
        ) : error?.message === "TypeError: Failed to fetch" ? (
          <div className="flex flex-col items-center text-center">
            <img 
              src="/src/assets/illustrations/server_down.svg" 
              alt="Server Down Illustration" 
              className="w-96 mb-8"
            />
            <h1 className="mb-4 font-Wulkan text-4xl">
              Servidor Temporariamente Indisponível
            </h1>
            <p className="mb-6 text-lg max-w-2xl">
              O servidor está atualmente em modo de espera para economizar recursos. 
              Para ver os projetos, por favor entre em contato comigo e ficarei feliz em ativá-lo.
            </p>
            <a 
              href="mailto:nicolasmalaquias2015@gmail.com"
              className="px-6 py-3 bg-primary dark:bg-secondary text-white rounded-full
                hover:brightness-110 transition-all duration-300"
            >
              Entrar em Contato
            </a>
          </div>
        ) : error ? (
          <>
            <h1 className="mb-6 font-Wulkan text-4xl">
              Ocorreu um erro, por favor tente mais tarde. =(
            </h1>
            {console.log("Erro do servidor: ", error.message)}
          </>
        ) : (
          <motion.div
            variants={StaggerContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid gap-x-28 md:gap-x-0 lg:gap-x-28 md:grid-cols-2 xl:gap-x-48 2xl:gap-x-36"
          >
            {projects?.map((project, index) => (
              <ProjectCard key={index} project={project} position={index} />
            ))}
          </motion.div>
        )}
      </motion.section>
    </>
  );
};
