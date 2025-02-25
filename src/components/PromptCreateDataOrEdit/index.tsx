import { Container, Group, Title, SubTitle, Input, InputDescription, GroupSideBySide, SmallInput, SubContainer, GroupTitleAndInputSideBySide, PromptText, Button, ButtonText  } from "./styles";
import { Plus } from 'phosphor-react-native'

import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string,
    buttonText: string,
}

export function PromptCreateDataOrEdit({title, buttonText}: Props) {

    const navigation = useNavigation();

    function submitButton() {
        navigation.navigate('home')
    }
  return (
    <Container>
        <SubContainer showsVerticalScrollIndicator={false}>
            <GroupSideBySide>
                <Title>{title}</Title>
                <Button onPress={() => {submitButton()}}>
                    <Plus color='#fff' size={18} />
                    <ButtonText>{buttonText}</ButtonText>
                </Button>
            </GroupSideBySide>
            <Group>
                <SubTitle>Nome</SubTitle>
                <Input placeholder="dê um nome ao seu prompt"  placeholderTextColor="#94afaf"/>
            </Group>
            <Group>
                <SubTitle>Descrição</SubTitle>
                <InputDescription placeholder="explique o que o prompt faz"  placeholderTextColor="#94afaf" multiline={true} />
            </Group>
            
            <GroupSideBySide>
                <GroupTitleAndInputSideBySide>
                    <SubTitle>IA usada</SubTitle>
                    <SmallInput placeholder="ex: ChatGPT"  placeholderTextColor="#94afaf" />
                </GroupTitleAndInputSideBySide>
                <GroupTitleAndInputSideBySide>
                    <SubTitle>Data</SubTitle>
                    <SmallInput placeholder="xx/yy/zz"  placeholderTextColor="#94afaf" />
                </GroupTitleAndInputSideBySide>
            </GroupSideBySide>
            <Group>
                <SubTitle>Prompt</SubTitle>
                <PromptText placeholder="cole seu prompt aqui"  placeholderTextColor="#94afaf" multiline={true} />
            </Group>
        </SubContainer>
    </Container>
  );
}