import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Form = () => {
  const { inputValue, handleInputChange, handleSubmit } =
    useContext(GlobalContext);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        placeholder="Search for any IP address or domain"
        type="text"
        name="input"
        id="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
        </svg>
      </Button>
    </form>
  );
};

export default Form;
