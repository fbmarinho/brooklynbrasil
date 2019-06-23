import React from 'react';
import { Text } from 'react-native';

import AppStyles from '../styles/AppStyles';
import Theme from '../styles/theme';

export default function TabBarLabel(props) {
  return (
    <Text style={{
      color: props.focused ? Theme.primaryText : Theme.secondaryText,
      fontSize: props.size,
      textAlign: 'center'
    }}>{props.name}</Text>
  );
}
