import React from 'react';
import {View} from 'react-native';

import {PairCard} from '../molecules';

const PAIRS = [
  {
    label: 'BTC/USD',
    id: 'usd',
    symbol: '$',
  },
  {
    label: 'BTC/EUR',
    id: 'eur',
    symbol: '€',
  },
  {
    label: 'BTC/GBP',
    id: 'gbp',
    symbol: '£',
  },
  {
    label: 'BTC/CHF',
    id: 'chf',
    symbol: '₣',
  },
];

const Pairs: React.FC = () => {
  return (
    <View className="my-6 flex-row flex-wrap justify-center">
      {PAIRS.map((item, idx) => {
        return <PairCard pair={item} key={idx} />;
      })}
    </View>
  );
};

export {Pairs};
