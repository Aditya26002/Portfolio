import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* Enable wrapping */
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap; /* Enable wrapping for responsive layout */
  justify-content: center; /* Center content horizontally */
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToogleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.button`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active }) =>
    active &&
    `
    background-color: ${({ theme }) => theme.primary + 20};  
    `}

  &:hover {
    background-color: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of the projects I have worked on.</Desc>

        <ToogleGroup>
          <ToggleButton>Web</ToggleButton>
          <Divider />
        </ToogleGroup>
      </Wrapper>
    </Container>
  );
};

export default Projects;
