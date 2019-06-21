import React from 'react';
import {
  Button,
  AsyncStorage,
  ScrollView,
  StyleSheet, a
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (

      <ScrollView style={styles.container}>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </ScrollView>

    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}


export default HomeScreen;



