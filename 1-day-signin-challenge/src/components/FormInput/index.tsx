type Props = {
  type: string;
  id: string;
  placeholder?: string;
};
export const FormInput = ({ type, placeholder, id }: Props) => {
  return (
    <div>
      <input
        className="border-2
         border-amber-300 
         rounded 
         p-2
         w-80"
        type={type}
        placeholder={placeholder}
        id={id}
        required
      />
      <br />
      <br />
    </div>
  );
};
