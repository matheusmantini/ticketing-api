import { useContext, useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import HeaderPage from "../Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  ButtonContainer,
  Container,
  ContainerPage,
  Form,
  Label,
  Modal,
  Title,
} from "./styled";

const SignIn = () => {
  const { email, password, setEmail, setPassword } =
    useContext(GlobalStateContext);
  const navigate = useNavigate();
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => {
      goToHomePage(navigate);
    },
  });

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
            <Title>Sign In</Title>
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
                Sign In
              </button>
            </ButtonContainer>
          </Form>
        </Modal>
      </ContainerPage>
    </div>
  );
};

export default SignIn;
