import styled from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";



export const Container = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
    
  }))`
    width: 90%;
    background-color: white;
    height: 60px;
    font-size: 16px;
    margin-top: -30px;
    border-radius: 20px;
    padding: 8px 8px 8px 16px;

   
`