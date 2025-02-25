import { KeyboardAvoidingView, ScrollView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkslategray};

`;

export const SubContainer = styled(ScrollView)`
    width: 100%;
    height: 100%;
    margin-bottom: 14px;
`