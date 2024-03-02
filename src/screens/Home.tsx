import React from 'react';
import {Button} from 'react-native';

import {RootStackNavigationProp} from '../types/navigation';
import {ScreenTemplate} from '../organisms';
import {Text} from '../atoms';

type Props = {
  navigation: RootStackNavigationProp<'Home'>;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <ScreenTemplate>
      <Text text="Welcome" variant="title" />
      <Text text="Select a pair to see more details" />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </ScreenTemplate>
  );
};

export {Home};
