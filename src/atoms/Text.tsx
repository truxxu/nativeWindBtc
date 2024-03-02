import React from 'react';
import {Text as RText} from 'react-native';

type Props = {
  text: string | null;
  variant?: 'primary' | 'title';
  align?: string;
  weight?: string | null;
};

const VARIANTS = {
  primary: {
    color: 'text-yellow-500',
    size: 'text-base',
    weight: '',
  },
  title: {
    color: 'text-yellow-500',
    size: 'text-xl',
    weight: 'font-bold',
  },
};

const Text: React.FC<Props> = ({
  text = '',
  variant = 'primary',
  align = 'left',
}) => {
  const textStyle = `text-${align} ${VARIANTS[variant].color} ${VARIANTS[variant].size} ${VARIANTS[variant].weight}`;

  return <RText className={textStyle}>{text}</RText>;
};

export {Text};
