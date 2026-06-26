import { Title } from "../Title";

type Props = {
  children?: React.ReactNode;
};
export const Form = ({ children }: Props) => {
  return (
    <div
      className="flex 
    flex-col 
    text-center 
    rounded-2xl 
    border-0 
    shadow-2xl 
    w-sm 
    h-screen 
    p-7 
    bg-white
    "
    >
      <Title />
      <form action="#">{children}</form>
    </div>
  );
};
