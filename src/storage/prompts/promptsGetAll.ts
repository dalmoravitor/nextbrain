import AsyncStorage from "@react-native-async-storage/async-storage";
import { PROMPT_COLLECTION } from "../storageConfig";

export async function getAllPrompts() {
    try {
        const promptsSalvos = await AsyncStorage.getItem("@nextbrain:prompts");
        return promptsSalvos ? JSON.parse(promptsSalvos) : [];
      } catch (error) {
        console.error("Erro ao recuperar prompts:", error);
        throw new Error("Não foi possível recuperar os prompts.");
      }
}