import React from 'react';

import {RootStackNavigationProp} from '../types/navigation';
import {ScreenTemplate, Pairs} from '../organisms';
import {Text} from '../atoms';

type Props = {
  navigation: RootStackNavigationProp<'Home'>;
};

const Home: React.FC<Props> = () => {
  return (
    <ScreenTemplate>
      <Text text="Welcome" variant="title" />
      <Text text="Select a pair to see more details" />
      <Pairs />
    </ScreenTemplate>
  );
};

export {Home};
