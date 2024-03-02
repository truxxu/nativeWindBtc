import React, {useState} from 'react';
import {Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../types/navigation';
import {ScreenTemplate} from '../organisms';

type Props = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

const Details: React.FC<Props> = ({route}) => {
  const {id} = route.params;
  const [isLoading, setIsloading] = useState(false);

  return (
    <ScreenTemplate isLoading={isLoading}>
      <Text>Details</Text>
    </ScreenTemplate>
  );
};

export {Details};
