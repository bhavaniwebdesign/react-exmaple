import React from "react";
import { useInput } from "../../custom/hooks/useInput";
/*
Creating controlled components with useState */
const UserForm = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000");

  const onFormSubmit = (e) => {
    e.preventDefault();
    alert(
      ` This is my sample Email : ${titleProps.value} wow this is noce color ${colorProps.value}`
    );
    resetTitle("");
    resetColor("");
  };

  return (
    <form
      onSubmit={(e) => onFormSubmit(e)}
      style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
    >
      <input type="color" {...colorProps} />
      <input type="text" {...titleProps} />
      <button>Add</button>
    </form>
  );
};

export default UserForm;
