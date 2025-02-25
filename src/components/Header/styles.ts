import styled from "styled-components/native";

export const Container = styled.View`
    height: 140px;
    flex-direction: row;
    width: 100%;
  background-color: ${({ theme }) => theme.colors.caribbeancurrent};
  padding: 20px;
  align-items: center;
  justify-content: space-between;

`;