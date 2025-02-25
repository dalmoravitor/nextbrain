import { AddButton, Container, HeaderHome, HeaderTitle } from './styles';
import { SearchInput } from '../../components/SearchInput';
import { EmptyList } from '../../components/EmptyList';
import { FlatList, TouchableOpacity } from 'react-native';
import { PromptCard } from '../../components/PromptCard';
import {Plus} from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation()
    const prompts = [];

    function goToPrompt() {
        navigation.navigate('prompt')
    }

    function goToCreatePrompt() {
        navigation.navigate('createPrompt');
    }

    

    return (
        <Container>
            <HeaderHome>
                <HeaderTitle>Welcome to NextBrain.</HeaderTitle>
            </HeaderHome>
            <SearchInput />
            {prompts.length === 0 ? <EmptyList /> : 
            
            
                <FlatList style={{width: '90%', marginTop: 50}}
                data={prompts}
                keyExtractor={item => item.toString()}
                renderItem={ ({ item }) => <TouchableOpacity onPress={() => goToPrompt()}><PromptCard prompt={item} tag1="ChatGPT" tag2='24/02/2025'/></TouchableOpacity> }
                
                />
            }
            <AddButton onPress={() => {(goToCreatePrompt())}}>
                <Plus color='#326771ff' size={28} />
            </AddButton>
        </Container>
    )
}