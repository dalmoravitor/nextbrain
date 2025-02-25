import { Container } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import logo from "../../assets/logo.jpeg";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Header() {

  const navigation = useNavigation();

  function backToHome() {
    navigation.navigate('home')
  }
  return (
  <Container>
    <TouchableOpacity onPress={() => {backToHome()}}>
      <ArrowLeft size={32} color="#fff" />
    </TouchableOpacity>
    <Image style={{height: 50, width: 50, borderRadius: 25}} source={logo} />


  </Container>

  )
}

