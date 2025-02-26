import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkslategray};

  align-items: center;
`;

export const HeaderHome = styled.View`
    height: 225px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.caribbeancurrent};
    align-items: center;
    justify-content: center;
`

export const HeaderTitle = styled.Text`
    font-size: 32px;
    width: 70%;
    margin-top: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 1px;
    font-weight: bold;
    

`

export const AddButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.caribbeancurrent};
    width: 80px;
    height: 80px;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;`

export const ListAndButton = styled.View`
    flex: 1;
    padding: 20px;
    height: 100%;
    align-items: center;
`
export const SearchInput = styled(TextInput)`
    width: 90%;
    background-color: white;
    height: 60px;
    font-size: 16px;
    margin-top: -30px;
    border-radius: 20px;
    padding: 8px 8px 8px 16px;

   
`