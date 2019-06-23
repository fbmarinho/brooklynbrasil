import React from 'react';
import {
  View,
  ScrollView,
  Platform
} from 'react-native';
import AppStyles from '../styles/AppStyles';
import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';

class Avisos extends React.Component {
  static navigationOptions = {
    tabBarLabel: ({ focused }) => (
      <TabBarLabel focused={focused} name='Avisos' size={12} />
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
    )
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


export default Avisos;



