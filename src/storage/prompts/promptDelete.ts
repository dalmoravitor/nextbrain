import AsyncStorage from "@react-native-async-storage/async-storage";

export const promptDelete = async (id: string) => {
  try {
    const promptsSalvos = await AsyncStorage.getItem("@nextbrain:prompts");
    const listaPrompts = promptsSalvos ? JSON.parse(promptsSalvos) : [];

    const novaLista = listaPrompts.filter((prompt: { id: string }) => prompt.id !== id);

    await AsyncStorage.setItem("@nextbrain:prompts", JSON.stringify(novaLista));
    return novaLista;
  } catch (error) {
    console.error("Erro ao deletar prompt:", error);
    throw new Error("Não foi possível deletar o prompt.");
  }
};
