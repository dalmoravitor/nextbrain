import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkslategray};
    justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #c8d6d6;
    width: 300px;
    text-align: center;
    height: 100px;
    margin-top: 20px;
`

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.caribbeancurrent};
    width: 200px;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    `

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: bold;
`