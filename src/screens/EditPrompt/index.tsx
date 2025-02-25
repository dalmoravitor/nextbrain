import {Container } from './styles'
import { Header } from '../../components/Header'
import { PromptCreateDataOrEdit } from '../../components/PromptCreateDataOrEdit'
import { Prompt } from '../Prompt'

export function EditPrompt() {
    return (
        <Container>
            <Header />
            <PromptCreateDataOrEdit buttonText="Salvar" title="Editar prompt"/>
        </Container>
    )
}