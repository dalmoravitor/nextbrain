import {Container, SubContainer } from './styles'
import { Header } from '../../components/Header'
import { PromptCreateDataOrEdit } from '../../components/PromptCreateDataOrEdit'
import { Prompt } from '../Prompt'

export function CreatePrompt() {
    return (
        <Container>
            <SubContainer>
                <Header />
                <PromptCreateDataOrEdit buttonText="Adicionar" title="Adicionar prompt" />
            </SubContainer>
        </Container>
    )
}