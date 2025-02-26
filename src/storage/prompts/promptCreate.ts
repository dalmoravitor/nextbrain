import AsyncStorage from "@react-native-async-storage/async-storage";

export const createPrompt = async (prompt: {
  nome: string;
  descricao: string;
  iaUsada: string;
  data: string;
  promptTexto: string;
}) => {
  try {
    const promptsSalvos = await AsyncStorage.getItem("@nextbrain:prompts");
    const listaPrompts = promptsSalvos ? JSON.parse(promptsSalvos) : [];

    const novoPrompt = { id: Date.now().toString(), ...prompt };
    const novaLista = [...listaPrompts, novoPrompt];

    await AsyncStorage.setItem("@nextbrain:prompts", JSON.stringify(novaLista));
    return novoPrompt;
  } catch (error) {
    console.error("Erro ao criar prompt:", error);
    throw new Error("Não foi possível salvar o prompt.");
  }
};