import { useState } from "react";
import styled from "styled-components";
import { createTask } from "../API/API";
import { useNavigate } from "react-router-dom";

export const AddTask = () => {
  const [task, setTask] = useState("");
  const [urgency, setUrgency] = useState("yellow");
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Main>
          <Input
            placeholder="Enter your choice of task here"
            onChange={(e: any) => {
              setTask(e.target.value);
            }}
            value={task}
          />
          <Select
            value={urgency}
            onChange={(e: any) => {
              setUrgency(e.target.value);
            }}
          >
            <Option value={"rgba(330, 444, 300, 0.3)"}>Important</Option>
            <Option value={"rgba(110, 115, 300, 0.3)"}>Casual</Option>
            <Option value={"rgba(0, 0, 300, 0.3)"}> Fail</Option>
          </Select>
          <Button
            onClick={() => {
              const data = {
                id: Math.floor(Math.random() * new Date().getTime()),
                time: new Date().getTime(),
                task,
                urgency,
              };
              createTask(data).then(() => {
                navigate("/");
              });
            }}
          >
            {" "}
            Add Task
          </Button>
        </Main>
      </Container>
    </div>
  );
};

const Button = styled.div`
  width: 95%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid silver;
  font-weight: 600;
  font-size: 15px;
  outline: none;
  font-family: Poppins;
  margin-top: 30px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Option = styled.option``;

const Select = styled.select`
  width: 95%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid silver;
  font-weight: 600;
  font-size: 15px;
  outline: none;
  font-family: Poppins;
`;

const Input = styled.textarea`
  margin: 10px;
  outline: none;
  border-radius: 10px;
  height: 200px;
  width: 92%;
  resize: none;
  padding: 10px;

  &::placeholder {
    font-family: Poppins;
  }
`;

const Main = styled.div`
  width: 70%;
  min-height: 500px;
  border-radius: 10px;
  border: 1px solid silver;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
