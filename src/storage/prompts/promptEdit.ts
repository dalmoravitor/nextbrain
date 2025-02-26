import AsyncStorage from "@react-native-async-storage/async-storage";

export const editPrompt = async (id: string, novoPrompt: Partial<{
  nome: string;
  descricao: string;
  iaUsada: string;
  data: string;
  promptTexto: string;
}>) => {
  try {
    const promptsSalvos = await AsyncStorage.getItem("@nextbrain:prompts");
    const listaPrompts = promptsSalvos ? JSON.parse(promptsSalvos) : [];

    const novaLista = listaPrompts.map((prompt: { id: string }) =>
      prompt.id === id ? { ...prompt, ...novoPrompt } : prompt
    );

    await AsyncStorage.setItem("@nextbrain:prompts", JSON.stringify(novaLista));
    return novaLista.find((prompt: { id: string }) => prompt.id === id);
  } catch (error) {
    console.error("Erro ao editar prompt:", error);
    throw new Error("Não foi possível editar o prompt.");
  }
};
