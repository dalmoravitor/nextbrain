import { useNavigation } from '@react-navigation/native';
import { Container, Title, GroupTags, Tag, TagText } from './styles';
import { Robot } from 'phosphor-react-native'

type Props = {
    prompt: string;
    tag1: string;
    tag2: string;
    
}

export function PromptCard({prompt, tag1, tag2}: Props) {


   


    return (
        <Container>
            <Title>{prompt}</Title>
            <GroupTags>
                <Tag>
                    <Robot color='#42d9c7' size={20} />
                    <TagText>{tag1}</TagText>
                </Tag>
                <Tag>
                    <TagText>{tag2}</TagText>
                </Tag>
            </GroupTags>
        </Container>
    )
}