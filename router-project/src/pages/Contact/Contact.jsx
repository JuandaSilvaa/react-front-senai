import { useNavigate } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import { useState } from "react";

export const Contact = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    navigate("/", {state: formValues});
  };

  return (
    <>
      <h1>Contato</h1>
      <div>
        <Navbar />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" onChange={handleChange} />
          <br />
          <label htmlFor="message">Messagem</label>
          <input type="text" name="message" onChange={handleChange} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};
