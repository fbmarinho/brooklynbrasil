import React from 'react';
import { ScrollView, Platform, View, Text } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import AppStyles from '../styles/AppStyles';
import theme from '../styles/theme';

class Horarios extends React.Component {
  static navigationOptions = {
    tabBarLabel: ({ focused }) => (
      <TabBarLabel focused={focused} name='Horários' size={12} />
    ),
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <ScrollView >

        </ScrollView>
      </View>
    );
  }

}


export default Horarios;