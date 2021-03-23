import React from "react";
import { Form } from "react-bootstrap/";

function Textfield(props) {
  return (
    <Form.Group controlId={props.label.replace(/\s/g, "-")} hasValidation>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        {...props.validations}
      />
      <Form.Text className="text-muted">{props.helperText}</Form.Text>
    </Form.Group>
  );
}

export default Textfield;
