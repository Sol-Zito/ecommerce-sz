import { Button, TextField } from "@mui/material";
import React from "react";

const Form = ({ handleSubmit, handleChange, error }) => {
  return (
    <div className="div-contact">
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <p>Complete the form:</p>
      <form onSubmit={handleSubmit}>
        {error.isActive && (
          <span
            style={{
              color: "crimson",
              fontSize: "1rem",
              fontWeight: "500",
              margin: "8px",
            }}
          >
            {error.errorMessage}
          </span>
        )}
        <TextField
          variant="outlined"
          label="Nombre completo"
          placeholder="Nombre completo"
          name="userName"
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Email"
          placeholder="nombre@gmail.com"
          name="email"
          onChange={handleChange}
          required
          fullWidth
        />
        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Form;
