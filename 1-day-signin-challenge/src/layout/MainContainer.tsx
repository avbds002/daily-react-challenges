type Props = {
  children?: React.ReactNode;
};
export const MainContainer = ({ children }: Props) => {
  return (
    <div className="flex justify-center p-6 bg-container-bg font-inter">
      {children}
    </div>
  );
};
