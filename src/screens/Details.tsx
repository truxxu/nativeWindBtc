import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../types/navigation';
import {ScreenTemplate} from '../organisms';
import useData from '../hooks/useData';
import {Text} from '../atoms';
import {View} from 'react-native';

type Props = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

type DataState = {
  price: number;
  change: number;
  vol: number;
  mCap: number;
};

const Details: React.FC<Props> = ({route}) => {
  const {id} = route.params;
  const [data, setData] = useState<DataState>();
  const {fetchData, isLoading, error, clearError} = useData();

  useEffect(() => {
    fetchBtcPriceData();
  }, []);

  const fetchBtcPriceData = async () => {
    try {
      const response = await fetchData(id);
      console.log(response);
      const priceData = response?.bitcoin;
      setData({
        price: priceData[id],
        change: priceData[`${id}_24h_change`],
        vol: priceData[`${id}_24h_vol`],
        mCap: priceData[`${id}_market_cap`],
      });
    } catch (err) {
      console.log('fetchBtcPriceData', err);
    }
  };

  return (
    <ScreenTemplate isLoading={isLoading} error={error}>
      <View className="items-center justify-around flex-1">
        <View className="items-center">
          <Text variant="title" text="Current Price" />
          <Text variant="title" text={data?.price.toString()} />
        </View>
        <View className="items-center">
          <Text variant="title" text="Market Cap" />
          <Text variant="title" text={data?.mCap.toString()} />
        </View>
        <View className="items-center">
          <Text variant="title" text="Vol. Change" />
          <Text variant="title" text={data?.vol.toString()} />
        </View>
        <View className="items-center">
          <Text variant="title" text="24h Change" />
          <Text variant="title" text={data?.change.toString()} />
        </View>
      </View>
    </ScreenTemplate>
  );
};

export {Details};
