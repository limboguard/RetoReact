import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap/";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Textfield from "./Components/Textfield";

function App() {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [helperText, setHelperText] = useState("");
  const [validation, setValidation] = useState({});
  const [form, setForm] = useState([]);

  function addInput(ev) {
    ev.preventDefault();
    setForm((f) => {
      const ans = [...f];
      ans.push({
        label,
        type,
        placeholder,
        helperText,
        validation,
      });
      return ans;
    });
  }

  return (
    <Container fluid="lg">
      <h1 class="text-center">Form Creator</h1>
      <hr />
      <h3 class="text-center">Add an input</h3>
      <Form onSubmit={(ev) => addInput(ev)}>
        <Textfield
          label="Set the Label of the Input"
          type="text"
          placeholder="Label"
          value={label}
          onChange={(ev) => setLabel(ev.target.value)}
          validations={{ required: true }}
        />
        <Textfield
          label="Set the Type of the Input"
          type="text"
          placeholder="text, number, email, password, tel..."
          value={type}
          helperText="You can find more info at: https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types"
          onChange={(ev) => setType(ev.target.value.trim())}
          validations={{ required: true }}
        />
        <Textfield
          label="Set the Placeholder of the Input"
          type="text"
          placeholder=""
          value={placeholder}
          helperText="What will be in the input while nothing has been written"
          onChange={(ev) => setPlaceholder(ev.target.value)}
        />
        <Textfield
          label="Set the Helper Text of the Input"
          type="text"
          placeholder=""
          value={helperText}
          helperText="This is helper text"
          onChange={(ev) => setHelperText(ev.target.value)}
        />
        <h6>Input Validation</h6>
        <Form.Check
          type="checkbox"
          label="Required"
          value={validation.required}
          onChange={(ev) =>
            setValidation((va) => ({ ...va, required: ev.target.checked }))
          }
        />
        {["text", "tel", "email", "url", "password", "search"].includes(
          type
        ) && (
          <>
            <Textfield
              label="Pattern"
              type="text"
              value={validation.pattern}
              helperText="A Regex pattern for the input data"
              onChange={(ev) =>
                setValidation((va) => ({ ...va, pattern: ev.target.value }))
              }
            />
            <Form.Row>
              <Col>
                <Textfield
                  label="Min Length"
                  type="number"
                  value={validation.minLength}
                  onChange={(ev) =>
                    setValidation((va) => ({
                      ...va,
                      minLength: ev.target.value,
                    }))
                  }
                />
              </Col>
              <Col>
                <Textfield
                  label="Max Length"
                  type="number"
                  value={validation.maxLength}
                  onChange={(ev) =>
                    setValidation((va) => ({
                      ...va,
                      maxLength: ev.target.value,
                    }))
                  }
                />
              </Col>
            </Form.Row>
          </>
        )}
        {type === "number" && (
          <Form.Row>
            <Col>
              <Textfield
                label="Min Value"
                type="number"
                value={validation.min}
                onChange={(ev) =>
                  setValidation((va) => ({ ...va, min: ev.target.value }))
                }
              />
            </Col>
            <Col>
              <Textfield
                label="Max Value"
                type="number"
                value={validation.max}
                onChange={(ev) =>
                  setValidation((va) => ({ ...va, max: ev.target.value }))
                }
              />
            </Col>
          </Form.Row>
        )}
        {}

        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
      <hr />
      <h3 class="text-center">Currently built form</h3>
      <Form
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log("Validando");
        }}
      >
        {form.map((f) => (
          <Textfield
            key={f.label}
            label={f.label}
            type={f.type}
            placeholder={f.placeholder}
            helperText={f.helperText}
            validations={f.validation}
          />
        ))}
        <Button variant="primary" type="submit">
          Validar
        </Button>
      </Form>
    </Container>
  );
}

export default App;
