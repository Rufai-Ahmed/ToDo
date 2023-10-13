import styled from "styled-components";
import pic from "../Assets/CodeLab Best Logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Link to="/">
            <Logo src={pic} />
          </Link>
          <Button to="/addtask">Add Task</Button>
        </Main>
      </Container>
    </div>
  );
};

const Button = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 10px 30px;
  border-radius: 30px;
  transition: all 350ms;

  &: {
    transform: scale;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
`;
