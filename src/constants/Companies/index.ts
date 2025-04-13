import exp from "constants";
import * as companies from "../../assets/companies";

const COMPANIES_DATA = [
    {
      name: 'jnj',
      url: 'https://www.jnj.com/',
      logo: companies.jnj,
      className: 'h-9 dark:brightness-200'
    },
    {
      name: 'opt',
      url: 'https://www.opt.com.br/',
      logo: companies.opt,
      className: 'h-7 sm:h-12 lg:h-14 2xl:h-16'
    },
    {
      name: 'villarta',
      url: 'https://www.villarta.com.br/',
      logo: companies.villarta,
      className: 'h-7 sm:h-12 lg:h-14 2xl:h-16'
    },
    {
      name: 'cit',
      url: 'https://ciandt.com/br/pt-br',
      logo: companies.cit,
      className: 'h-7 sm:h-14 lg:h-14 2xl:h-20'
    }
  ];

export default COMPANIES_DATA;