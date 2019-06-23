import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import AppStyles from '../styles/AppStyles';
import Theme from '../styles/theme';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      color={props.focused ? Theme.primaryText : Theme.secondaryText}
    />
  );
}
