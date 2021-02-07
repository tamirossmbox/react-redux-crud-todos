import "./styles.css";
import styled from "styled-components";

const Form = styled.form`
  display: inline-flex;
  padding: 24px;
  border: 1px solid grey;
`;

const Input = styled.input``;

const SubmitButton = styled.button`
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  border: 2px solid #5aabed;
  border-radius: 8px;
  background: #1679ca;
  transition: 0.3s;
  &:focus {
    outline: none;
  }
  :hover {
    background: #3f9eea;
    transition: 0.3s;
  }
  &:active {
    background: #1679ca;
  }
`;

export default function App() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="App">
      <h1>Hello React-Redux TODOS</h1>
      <h2>CRUD with React & React-Redux</h2>
      <hr />

      <Form onSubmit={handleSubmit}>
        <Input />
        <SubmitButton>Send</SubmitButton>
      </Form>
    </div>
  );
}
