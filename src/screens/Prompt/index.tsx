import {Container, GroupButtons, Button, ContainerData, GroupTitleAndDescription, GroupSideBySide, Title, Description, GroupTags, Tag, TagText, CopyButton, SubTitle, PromptView, PromptText} from './styles'
import { Header } from '../../components/Header'
import { Calendar, Copy, PencilLine, Robot, Trash } from 'phosphor-react-native'
import { Group } from '../../components/PromptCreateDataOrEdit/styles'
import { useNavigation } from '@react-navigation/native';

export function Prompt() {

    const navigation = useNavigation();
    
      function goToEditPrompt() {
        navigation.navigate('editPrompt');

      }

      function deletePrompt() {
        //delete logic
        navigation.navigate('home');

      }




    return (
        <Container>
            <Header />
            <ContainerData>
                <GroupTitleAndDescription>
                    <Title>Prompt Title</Title>
                    <Description>This text right here is the prompt description</Description>
                    <GroupTags>
                        <Tag>
                            <Robot size={20} color='#42d9c7' />
                            <TagText>ChatGPT</TagText>
                        </Tag>
                        <Tag>
                            <Calendar size={20} color='#42d9c7' />
                            <TagText>12/12/2021</TagText>
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
                        This is a dedicaded space for the prompt 
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