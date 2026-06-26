import { Form } from "./components/Form";
import { FormButton } from "./components/FormButton";
import { FormInput } from "./components/FormInput";
import { Subtitle } from "./components/Subtitle";
import { MainContainer } from "./layout/MainContainer";

export default function App() {
  return (
    <>
      <MainContainer>
        <Form>
          <FormInput type="text" placeholder="Name" id="name" />
          <FormInput type="email" placeholder="Email" id="email" />
          <FormInput type="password" placeholder="Password" id="password" />
          <FormButton />
          <Subtitle />
        </Form>
      </MainContainer>
    </>
  );
}
