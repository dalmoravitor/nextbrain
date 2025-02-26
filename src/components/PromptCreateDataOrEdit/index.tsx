import { Container, Group, Title, SubTitle, Input, InputDescription, GroupSideBySide, SmallInput, SubContainer, GroupTitleAndInputSideBySide, PromptText, Button, ButtonText  } from "./styles";
import { Plus } from 'phosphor-react-native'
import { Alert } from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createPrompt } from "../../storage/prompts/promptCreate";

type Props = {
    title: string,
    buttonText: string,
}

export function PromptCreateDataOrEdit({title, buttonText}: Props) {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [iaUsada, setIaUsada] = useState("");
    const [promptTexto, setPromptTexto] = useState("");
    const [data, setData] = useState("");

    const [prompts, setPrompts] = useState([]);
     const navigation = useNavigation();





     


     async function handleAddPrompt() {
        if (!nome || !descricao || !iaUsada || !data || !promptTexto) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
          }

          const prompt = {
            id: new Date().toISOString(), 
            nome,
            descricao,
            iaUsada,
            data,
            promptTexto,
          };

          try {
            await createPrompt(prompt); // Função que salva o prompt no AsyncStorage
            Alert.alert("Sucesso", "Prompt salvo com sucesso!");
            navigation.goBack(); // Volta para a tela anterior
          } catch (error) {
            console.error("Erro ao salvar prompt:", error);
            Alert.alert("Erro", "Ocorreu um erro ao salvar o prompt.");
          }
     }

   
  return (
    <Container>
        <SubContainer showsVerticalScrollIndicator={false}>
            <GroupSideBySide>
                <Title>{title}</Title>
                <Button onPress={() => {handleAddPrompt()}}>
                    <Plus color='#fff' size={18} />
                    <ButtonText>{buttonText}</ButtonText>
                </Button>
            </GroupSideBySide>
            <Group>
                <SubTitle>Nome</SubTitle>
                <Input value={nome} onChangeText={setNome} placeholder="dê um nome ao seu prompt"  placeholderTextColor="#94afaf"/>
            </Group>
            <Group>
                <SubTitle>Descrição</SubTitle>
                <InputDescription value={descricao} onChangeText={setDescricao} placeholder="explique o que o prompt faz"  placeholderTextColor="#94afaf" multiline={true} />
            </Group>
            
            <GroupSideBySide>
                <GroupTitleAndInputSideBySide>
                    <SubTitle>IA usada</SubTitle>
                    <SmallInput value={iaUsada} onChangeText={setIaUsada} placeholder="ex: ChatGPT"  placeholderTextColor="#94afaf" />
                </GroupTitleAndInputSideBySide>
                <GroupTitleAndInputSideBySide>
                    <SubTitle>Data</SubTitle>
                    <SmallInput value={data} onChangeText={setData} placeholder="xx/yy/zz"  placeholderTextColor="#94afaf" />
                </GroupTitleAndInputSideBySide>
            </GroupSideBySide>
            <Group>
                <SubTitle>Prompt</SubTitle>
                <PromptText value={promptTexto} onChangeText={setPromptTexto} placeholder="cole seu prompt aqui"  placeholderTextColor="#94afaf" multiline={true} />
            </Group>
        </SubContainer>
    </Container>
  );
}