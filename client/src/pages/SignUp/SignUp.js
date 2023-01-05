import { useState } from "react";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import HeaderPage from "../Header/Header";
import {
  ButtonContainer,
  Container,
  ContainerPage,
  Form,
  Label,
  Modal,
  Title,
} from "./styled";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => goToHomePage(navigate),
  });
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    doRequest();
  };

  return (
    <div>
      <HeaderPage />

      <ContainerPage>
        <Modal className="container-md">
          <Form onSubmit={onSubmit}>
            <Title>Sign Up</Title>
            <Container className="form-group">
              <Label htmlFor="email">Email address</Label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </Container>
            <Container className="form-group">
              <Label htmlFor="password">Password</Label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </Container>
            {errors}
            <ButtonContainer>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </ButtonContainer>
          </Form>
        </Modal>
      </ContainerPage>
    </div>
  );
};

export default SignUp;
