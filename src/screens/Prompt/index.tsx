import {Container, GroupButtons, Button, ContainerData, GroupTitleAndDescription, GroupSideBySide, Title, Description, GroupTags, Tag, TagText, CopyButton, SubTitle, PromptView, PromptText} from './styles'
import { Header } from '../../components/Header'
import { Calendar, Copy, PencilLine, Robot, Trash } from 'phosphor-react-native'
import { Group } from '../../components/PromptCreateDataOrEdit/styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getAllPrompts } from '../../storage/prompts/promptsGetAll';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect , useState} from 'react';
import { Alert } from 'react-native';
import { promptDelete } from '../../storage/prompts/promptDelete';

interface Prompt {
    id: string;
    nome: string;
    iaUsada: string;
    data: string;
    promptTexto: string;
  }

export function Prompt({route}: any ) {
    const  {id}  = route.params;
    const [prompt, setPrompt] = useState<any>(null);



    

    const navigation = useNavigation();

    async function getPromptById(id: string) {
        const promptsString = await AsyncStorage.getItem('@nextbrain:prompts')
        const prompts = JSON.parse(promptsString);
        const prompt = prompts.find((item: { id: string }) => item.id === id);
        
        return prompt || null
    }



    
    
      function goToEditPrompt( ) {
        navigation.navigate('editPrompt', prompt);

      }

      async function deletePrompt() {
        try {
          await promptDelete(prompt.id); 
          Alert.alert("Sucesso", "Prompt excluído com sucesso.");
          navigation.navigate('home'); 
        } catch (error) {
          Alert.alert("Erro", "Não foi possível excluir o prompt.");
        }
      }
      useEffect(() => {
        const fetchPrompt = async () => {
          const fetchedPrompt = await getPromptById(id);
          if (fetchedPrompt) {
            setPrompt(fetchedPrompt);
          } else {
            Alert.alert("Erro", "Prompt não encontrado.");
          }
        };
      
        fetchPrompt();
      }, [id]);

      if (!prompt) {
        return (
          <Container>
            <Title>Carregando...</Title>
          </Container>
        );
      }


    return (
        <Container>
            <Header />
            <ContainerData>
                <GroupTitleAndDescription>
                    <Title>{prompt.nome}</Title>
                    <Description>{prompt.descricao}</Description>
                    <GroupTags>
                        <Tag>
                            <Robot size={20} color='#42d9c7' />
                            <TagText>{prompt.iaUsada}</TagText>
                        </Tag>
                        <Tag>
                            <Calendar size={20} color='#42d9c7' />
                            <TagText>{prompt.data}</TagText>
                        </Tag>
                    </GroupTags>
                </GroupTitleAndDescription>

                <GroupSideBySide>
                    <SubTitle>Prompt:</SubTitle>
                        <CopyButton onPress={() => {}}>
                    <Copy size={36} color='#fff' />
                </CopyButton>
                </GroupSideBySide>

                <PromptView>
                    <PromptText>
                        {prompt.promptTexto}
                    </PromptText>
                </PromptView>

                <GroupButtons>
                    <Button onPress={() => deletePrompt()}>
                        <Trash size={26} color='#fff'/>
                    </Button>

                    <Button onPress={() => goToEditPrompt()}>
                        <PencilLine size={26} color='#fff'/>
                    </Button>
                </GroupButtons>
                
            </ContainerData>
        </Container>
    )
}