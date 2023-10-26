import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'; 
import ChaptersScreen from './Chapter';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  component={Home} />
        <Stack.Screen name="Chapters" component={ChaptersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
