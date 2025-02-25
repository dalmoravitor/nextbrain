import { Container } from './styles';

export function SearchInput() {
    return (
        <Container 
            placeholder="Search your prompt"
            onChangeText={() => {console.log('searching')}}
            />
    )
}