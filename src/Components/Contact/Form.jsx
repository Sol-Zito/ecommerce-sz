import { Button, TextField } from "@mui/material";
import React from "react";

const Form = ({ handleSubmit, handleChange, error }) => {
  return (
    <div className="div-contact">
      <h1>Want to know more?</h1>
      <h3>Send us your questions...</h3>
      <form onSubmit={handleSubmit}>
        <p>Complete the form:</p>
        {error.isActive && (
          <span className="error-message">{error.errorMessage}</span>
        )}
        <TextField
          variant="filled"
          label="Full name"
          placeholder="full name"
          name="userName"
          onChange={handleChange}
          required
          color="warning"
          fullWidth
        />
        <TextField
          label="Email"
          placeholder="name@gmail.com"
          name="email"
          onChange={handleChange}
          required
          color="warning"
          variant="filled"
          fullWidth
        />
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
