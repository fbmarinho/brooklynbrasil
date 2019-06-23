import React from 'react';
import { View } from 'react-native';

import AppStyles from '../styles/AppStyles';
import Theme from '../styles/theme';

export default function HSpace(props) {
  return (
    <View style={{ height: props.size }}></View>
  );
}
