import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Details} from './src/screens';
import {RootStackParamList} from './src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const STACK_OPTIONS = {
  headerStyle: {
    backgroundColor: '#111827',
  },
  headerShadowVisible: false,
  headerTintColor: '#F59E0B',
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{...STACK_OPTIONS}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({route}) => ({title: route.params.label})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
