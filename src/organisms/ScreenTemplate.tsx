import React, {ReactNode} from 'react';
import {View, ActivityIndicator} from 'react-native';

type Props = {
  children: ReactNode;
  isLoading?: boolean;
};

const ScreenTemplate: React.FC<Props> = ({children, isLoading = false}) => {
  return (
    <View className="flex-1 bg-gray-900 p-4">
      {isLoading ? (
        <View className="justify-center flex-1">
          <ActivityIndicator size="large" color="#F59E0B" />
        </View>
      ) : (
        children
      )}
    </View>
  );
};

export {ScreenTemplate};
