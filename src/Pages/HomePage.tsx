import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import moment from "moment";
import { deleteTask, getTask } from "../API/API";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [state, setState] = useState<Array<any>>([]);

  useEffect(() => {
    getTask()?.then((res) => {
      setState(res);
    });
  }, []);

  const [show, setShow] = useState<boolean>();

  useEffect(() => {
    console.log(state);
    console.log(state.length);

    if (state.length === 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [state]);

  return (
    <div>
      {show ? (
        <Big>
          No Task Added Yet
          <Button to="/addtask">Add to task</Button>
        </Big>
      ) : (
        <Container>
          <Main>
            {state?.map((props: any) => (
              <Card
                key={props.id}
                bcc={
                  props.urgency === "Important"
                    ? "rgba(0, 0, 300, 0.3)"
                    : props.urgency === "Casual"
                    ? "rgba(110, 115, 300, 0.3)"
                    : props.urgency === "Fail"
                    ? "rgba(200, 10, 300, 0.3)"
                    : "white"
                }
              >
                <Right>
                  <Text>{props.task}</Text>

                  <Both>
                    <View>{props.urgency}</View>
                    <Time>{moment(props.time).fromNow()}</Time>
                  </Both>
                </Right>

                <Left>
                  <Close>
                    <Div
                      onClick={() => {
                        deleteTask(props.id)?.then(() => {
                          setState((state) =>
                            state.filter((el) => el.id !== props.id)
                          );
                        });
                      }}
                    >
                      <AiOutlineClose />
                    </Div>
                  </Close>
                  <Edit>Edit</Edit>
                </Left>
              </Card>
            ))}
          </Main>
        </Container>
      )}
    </div>
  );
};

export default HomePage;

const Button = styled(Link)`
  padding: 10px 12px;
  font-size: 20px;
  border-radius: 20px;
  border: 1px solid orange;
  transition: all 350ms;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: darkorange;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Big = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Div = styled.div``;
const Edit = styled.div`
  background-color: black;
  color: white;
  padding: 5px 18px;
  font-size: 15px;
  border-radius: 30px;
`;

const Close = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  &:hover {
    ${Div} {
      transform: rotate(90);
    }
    cursor: pointer;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  /* width: 50px; */
`;

const Time = styled.div`
  margin-right: 20px;
`;

const View = styled.div`
  flex: 1;
`;

const Both = styled.div`
  display: flex;
  font-size: 12px;
`;

const Text = styled.div`
  font-size: 12px;
  flex: 1;
`;

const Right = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Card = styled.div<{ bcc: string }>`
  width: 300px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid silver;
  padding: 5px;
  display: flex;
  margin: 10px;
  background-color: ${({ bcc }) => bcc};
`;

const Main = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
`;
