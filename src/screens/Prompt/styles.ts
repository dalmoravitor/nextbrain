import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkslategray};

`;

export const ContainerData = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkslategray};
  margin-top: -20px;
  border-radius: 30px;
    padding: 20px;

`;

export const GroupTitleAndDescription = styled.View`
    flex-direction: column;
    margin-top: 20px;
`

export const Title = styled.Text`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.lightgray};
    width: 300px;
    margin-bottom: 10px;
    font-weight: bold;
`

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.lightgray};
    width: 300px;
    margin-bottom: 10px;
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


export const GroupSideBySide = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;`


export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.lightgray};

    `

  export const CopyButton = styled(TouchableOpacity)`
    gap: 5px;
    justify-content: center;
  `

export const PromptView = styled(ScrollView)`
  height: 50%;
  width: 98%;
  /* border: 1px solid ${({ theme }) => theme.colors.lightgray}; */
  padding: 12px;
  align-self: center;
  border-radius: 10px;
`

export const PromptText = styled.Text`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.lightgray};
    width: 100%;
    margin-bottom: 10px;
    line-height: 22px;
`
export const GroupButtons = styled.View`
margin-top: -35px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  align-self: center;
`

export const Button = styled(TouchableOpacity)`
  height: 70px;
  width:70px;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.bluemunsell};
  align-items: center;
  justify-content: center;
`