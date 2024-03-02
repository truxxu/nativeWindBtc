import React, {ReactNode} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {Text} from '../atoms';

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  error?: string | null;
};

const ScreenTemplate: React.FC<Props> = ({
  children,
  isLoading = false,
  error = null,
}) => {
  if (error) {
    return (
      <View className="flex-1 bg-gray-900 p-4 justify-center flex-1 items-center">
        <Text text={error} variant="error" />
      </View>
    );
  }

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
