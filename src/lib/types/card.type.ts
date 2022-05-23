export type Card = {
  icon?:
    | {
        src: string;
        alt?: string;
      }
    | any;
  transform?: string;
  title: string;
  text: string;
  link?: {
    href: string;
    text: string;
  };
  modal?: {
    btnText: string;
    modalContentComponent: any;
  };
};
