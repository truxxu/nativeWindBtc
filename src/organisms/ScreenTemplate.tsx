import React, {ReactNode} from 'react';
import {View} from 'react-native';

type Props = {
  children: ReactNode;
};

const ScreenTemplate: React.FC<Props> = ({children}) => {
  return <View className="flex-1 bg-gray-900 p-4">{children}</View>;
};

export {ScreenTemplate};
