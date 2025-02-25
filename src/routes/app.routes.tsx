import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CreatePrompt } from '../screens/CreatePrompt';
import { EditPrompt } from '../screens/EditPrompt';
import { Prompt } from '../screens/Prompt';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			id={undefined}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen
				name='home'
				component={Home}
			/>

            <Screen
				name='prompt'
				component={Prompt}
			/>

			<Screen
				name='editPrompt'
				component={EditPrompt}
			/>

			<Screen
				name='createPrompt'
				component={CreatePrompt}
			/>
		</Navigator>
	);
}