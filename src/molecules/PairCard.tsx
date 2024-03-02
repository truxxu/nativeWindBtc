import React from 'react';
import {TouchableOpacity} from 'react-native';

import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';
import {Text} from '../atoms';

type Props = {
  pair: {
    label: string;
    id: string;
    symbol: string;
  };
};

const PairCard: React.FC<Props> = ({pair}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      className="border border-yellow-500 rounded-md p-5 m-2 justify-center items-center"
      onPress={() =>
        navigation.navigate('Details', {id: pair.id, label: pair.label})
      }>
      <Text text={pair.symbol} variant="title" />
      <Text text={pair.label} variant="title" />
    </TouchableOpacity>
  );
};

export {PairCard};
