// src/types/navigation.ts

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Define the params for each screen
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

// Define the navigation prop type for the stack
export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

// Define the route prop type for the stack
export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
