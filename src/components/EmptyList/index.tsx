import { useNavigation } from '@react-navigation/native'
import { Container, Title, Button, TextButton } from './styles'
import { PencilLine } from 'phosphor-react-native'


export function EmptyList() {
    const navigation = useNavigation()

    function goToCreatePrompt() {
        navigation.navigate('createPrompt')
    }
    return (
        <Container>
            <PencilLine color='#c8d6d6' size={28}  />
            <Title>Você ainda não possui prompts. Adicione-os no botão abaixo!</Title>
            
        </Container>
    )
}