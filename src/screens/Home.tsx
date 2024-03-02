import React from 'react';
import {View, Text, Button} from 'react-native';

import {RootStackNavigationProp} from '../types/navigation';

type Props = {
  navigation: RootStackNavigationProp<'Home'>;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export {Home};
