import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from '../atoms';

type Props = {
  pair: {
    label: string;
    value: string;
    symbol: string;
  };
};

const PairCard: React.FC<Props> = ({pair}) => {
  const handleOnPress = () => {
    console.log('pressed!');
  };

  return (
    <TouchableOpacity
      className="border border-yellow-500 rounded-md p-5 m-2 justify-center items-center"
      onPress={handleOnPress}>
      <Text text={pair.symbol} variant="title" />
      <Text text={pair.label} variant="title" />
    </TouchableOpacity>
  );
};

export {PairCard};
