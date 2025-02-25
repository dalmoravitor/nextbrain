import { KeyboardAvoidingView, ScrollView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkslategray};
  margin-top: -20px;
  border-radius: 30px;
    padding: 20px;

`;

export const SubContainer = styled(ScrollView).attrs(() => ({
    
  }))`
    width: 100%;
    height: 100%;
`

export const Title = styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    padding: 8px 16px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.caribbeancurrent};
    border-radius: 10px;
    margin-bottom: 20px;
`

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    margin-left: 10px;
    font-weight: bold;
`

export const Group = styled.View`
    width: 100%;
    margin-bottom: 20px;
`

export const SubTitle = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 5px;
`


export const InputDescription = styled.TextInput`
    width: 100%;
    text-align-vertical: top;
    height: 120px;
    background-color: ${({ theme }) => theme.colors.caribbeancurrent};
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
`

export const Input = styled.TextInput`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.caribbeancurrent};
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    
    ::placeholder {
        
    }
`

export const GroupSideBySide = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    `

export const SmallInput = styled.TextInput`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.caribbeancurrent};
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
`

export const PromptText = styled.TextInput`
    width: 100%;
    text-align-vertical: top;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.caribbeancurrent};
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
`



export const GroupTitleAndInputSideBySide = styled.View`
width: 48%;`



