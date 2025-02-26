import { AddButton, Container, HeaderHome, HeaderTitle, SearchInput } from './styles';
import { EmptyList } from '../../components/EmptyList';
import { FlatList, TouchableOpacity } from 'react-native';
import { PromptCard } from '../../components/PromptCard';
import {Plus} from 'phosphor-react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { getAllPrompts } from '../../storage/prompts/promptsGetAll';

interface Prompt {
    id: string;
    nome: string;
    iaUsada: string;
    data: string;
    promptTexto: string;
  }




export function Home() {
    const [search, setSearch] = useState('')
    const navigation = useNavigation()
    const [prompts, setPrompts] = useState<Prompt[]>([]);
    const [filteredPrompts, setFilteredPrompts] = useState<Prompt[]>([]);


    function handleSearch(text: string) {
        setSearch(text);
    
        const filtered = prompts.filter((prompt) =>
        prompt.nome.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredPrompts(filtered);
    }



    async function loadPrompts() {
        const data = await getAllPrompts();
        setPrompts(data)
        setFilteredPrompts(data);
    }

    function goToPrompt(id: string) {
        navigation.navigate('prompt', {id})
    }

    function goToCreatePrompt() {
        navigation.navigate('createPrompt');
    }

    
    useEffect(() => {
        const results = prompts.filter((prompt) =>
            prompt.nome.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredPrompts(results);
      }, [search, prompts]);
    
      useFocusEffect(
        useCallback(() => {
          loadPrompts();
        }, [])
      );
    function renderItem({ item }: {item: Prompt}) {
        return (
            <TouchableOpacity onPress={() => goToPrompt(item.id)}>
                <PromptCard prompt={item.nome} tag1={item.iaUsada} tag2={item.data}/>
            </TouchableOpacity>
        );
    }

    

    return (
        <Container>
            <HeaderHome>
                <HeaderTitle>Welcome to NextBrain.</HeaderTitle>
            </HeaderHome>
            <SearchInput  placeholder="Search your prompt" value={search} onChangeText={handleSearch}/>
            {prompts.length === 0 ? <EmptyList /> : 
            
            
                <FlatList style={{width: '90%', marginTop: 50}}
                data={filteredPrompts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                
                />
            }
            <AddButton onPress={() => {(goToCreatePrompt())}}>
                <Plus color='#326771ff' size={28} />
            </AddButton>
        </Container>
    )
}