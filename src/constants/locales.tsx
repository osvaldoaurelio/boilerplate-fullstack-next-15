import Image from "next/image";

export const COOKIE_LOCALE = 'bfn.next.i18n.locale';

export const FLAG = {
  'en-US': <Image src='/assets/flags/us.svg' alt="US" width={20} height={16} />,
  'es-MX': <Image src='/assets/flags/mx.svg' alt="MX" width={20} height={16} />,
  'pt-BR': <Image src='/assets/flags/br.svg' alt="BR" width={20} height={16} />,
};
