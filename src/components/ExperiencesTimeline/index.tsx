import { motion } from "framer-motion";

import { experiences } from "../../constants/Experiences";
import { StaggerContainer, itemAnimation } from "../../utils/Animations";

export const ExperiencesTimeline = () => (
  <div>
    <h2 className="mb-6 px-6 text-lg lg:px-0">Minhas Experiências: </h2>
    {/*Solucao encontrada no discord */}
    <motion.ul
      variants={StaggerContainer}
      initial="hidden"
      animate="show"
      exit="exit"
      className="[&>*:last-child_div:first-child]:before:w-0"
    >
      {experiences.map(
        ({ company, initialDate, finalDate, role, description, stack }) => (
          <motion.li
            variants={itemAnimation}
            key={company}
            className="relative mx-auto flex items-baseline gap-6 pl-4 pb-5 sm:max-w-none"
          >
            <div
              className="right-0 h-3 w-3 rounded-full bg-tertiary dark:bg-highlight before:absolute before:left-[22px] before:h-full
               before:w-[1px] before:bg-tertiary dark:before:bg-highlight "
            ></div>

            <div
              className="flex w-4/5 flex-col justify-center rounded-xl
               bg-primary/20 dark:bg-secondary/20 p-4 text-base transition duration-300 hover:brightness-110 sm:w-[29rem]"
            >
              <p className="mb-1 text-xs text-tertiary dark:text-highlight font-semibold">
                {initialDate} - {finalDate}
              </p>
              <h2 className=" font-semibold">{company}</h2>
              <h4 className="text-sm font-medium text-tertiary dark:text-highlight">{role}</h4>

              <p className="my-4 whitespace-pre-wrap">
                {description
                  ? description
                  : "Não há descrição das atividades exercidas"}
              </p>

              <div>
                <h4 className="font-medium">Ferramentas / Softwares:</h4>
                <div className="mt-2 flex items-center gap-4">
                  {stack.map((Item, index) => (
                    <p
                      key={index}
                      className="text-xl transition hover:text-primary"
                    >
                      {<Item />}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.li>
        )
      )}
    </motion.ul>
  </div>
);
