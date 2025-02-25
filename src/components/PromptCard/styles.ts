import styled from "styled-components/native";
import { theme } from "../../theme";
import { TouchableOpacity, View } from "react-native";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.caribbeancurrent};
  height: 120px;
  margin-bottom: 12px;
border-radius: 10px;
  align-items: center;
    justify-content: center;
  padding: 10px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.lightgray};
    width: 300px;
`

export const GroupTags = styled.View`
    flex-direction: row;
    width: 90%;
    gap: 10px;
    margin-top: 10px;
`

export const Tag = styled.View`
    flex-direction: row;
    border: 1px solid #42d9c790;
    padding: 5px 10px;
    justify-content: center;
    border-radius: 20px;
    align-items: center;
    height: 30px;
    gap: 5px;
    width: 110px;
`

export const TagText = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    text-align: center;
`