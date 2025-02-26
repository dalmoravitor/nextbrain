import { Header } from "../../components/Header";

import { 
  Container, 
  Group, 
  Title, 
  SubTitle, 
  Input, 
  InputDescription, 
  GroupSideBySide, 
  SmallInput, 
  SubContainer, 
  GroupTitleAndInputSideBySide, 
  PromptText, 
  Button, 
  ButtonText 
} from "./styles";
import { Plus } from "phosphor-react-native";
import { Alert } from "react-native";
import { useNavigation, useRoute, RouteProp, useIsFocused, useFocusEffect } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { editPrompt } from "../../storage/prompts/promptEdit";

type Props = {
  title: string;
  buttonText: string;
};

type RouteParams = {
    params: {
        prompt: {
            id: string;
            nome: string;
            descricao: string;
            iaUsada: string;
            data: string;
            promptTexto: string;
        };
    };
};

export function EditPrompt({route}: any) {
    const prompt = route.params
    const navigation = useNavigation();


  const [nome, setNome] = useState(prompt.nome);
  const [descricao, setDescricao] = useState(prompt.descricao);
  const [iaUsada, setIaUsada] = useState(prompt.iaUsada);
  const [promptTexto, setPromptTexto] = useState(prompt.promptTexto);
  const [data, setData] = useState(prompt.data);

  useEffect(() => {
    // Preenche os valores iniciais se estiver editando
    console.log(prompt);
    
  }, [prompt]);

  

  async function handleEditPrompt() {
    if (!nome || !descricao || !iaUsada || !data || !promptTexto) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const updatedPrompt = {
      id: prompt.id, // Mantém o ID se estiver editando
      nome,
      descricao,
      iaUsada,
      data,
      promptTexto,
    };

    try {
      await editPrompt(prompt.id, updatedPrompt); // Salva as alterações no storage
      Alert.alert("Sucesso", "Prompt salvo com sucesso!");
      navigation.navigate('prompt', { id: prompt.id });
    } catch (error) {
      console.error("Erro ao salvar prompt:", error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o prompt.");
    }
  }

  return (
    <Container>
      <Header />
      <SubContainer showsVerticalScrollIndicator={false}>
        <GroupSideBySide>
          <Title>Editar Prompt</Title>
          <Button onPress={handleEditPrompt}>
            <Plus color="#fff" size={18} />
            <ButtonText>Salvar</ButtonText>
          </Button>
        </GroupSideBySide>
        <Group>
          <SubTitle>Nome</SubTitle>
          <Input 
            value={nome} 
            onChangeText={setNome} 
            placeholder="Dê um nome ao seu prompt" 
            placeholderTextColor="#94afaf" 
          />
        </Group>
        <Group>
          <SubTitle>Descrição</SubTitle>
          <InputDescription 
            value={descricao} 
            onChangeText={setDescricao} 
            placeholder="Explique o que o prompt faz" 
            placeholderTextColor="#94afaf" 
            multiline={true} 
          />
        </Group>
        <GroupSideBySide>
          <GroupTitleAndInputSideBySide>
            <SubTitle>IA usada</SubTitle>
            <SmallInput 
              value={iaUsada} 
              onChangeText={setIaUsada} 
              placeholder="Ex: ChatGPT" 
              placeholderTextColor="#94afaf" 
            />
          </GroupTitleAndInputSideBySide>
          <GroupTitleAndInputSideBySide>
            <SubTitle>Data</SubTitle>
            <SmallInput 
              value={data} 
              onChangeText={setData} 
              placeholder="xx/yy/zz" 
              placeholderTextColor="#94afaf" 
            />
          </GroupTitleAndInputSideBySide>
        </GroupSideBySide>
        <Group>
          <SubTitle>Prompt</SubTitle>
          <PromptText 
            value={promptTexto} 
            onChangeText={setPromptTexto} 
            placeholder="Cole seu prompt aqui" 
            placeholderTextColor="#94afaf" 
            multiline={true} 
          />
        </Group>
      </SubContainer>
    </Container>
  );
}
