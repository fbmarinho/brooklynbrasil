import React from "react";
import { AsyncStorage, View, Text, TextInput } from "react-native";
import AppStyles from "../../styles/AppStyles";
import HSpace from "../../components/HSpace";

class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <Text style={AppStyles.title}>Esqueceu a senha ?</Text>
        <TextInput
          style={AppStyles.input}
          placeholder="Seu E-mail"
          autoCompleteType="email"
        />
        <Text style={AppStyles.btnPrimary} onPress={this._signUpAsync}>
          Resgatar senha
        </Text>
        <HSpace size={60} />
        <Text style={AppStyles.commonText}>Lembrou ?</Text>
        <Text
          style={AppStyles.btnSecondary}
          onPress={() => this.props.navigation.goBack()}
        >
          Logar
        </Text>
      </View>
    );
  }

  _signUpAsync = async () => {
    //Send data to server
    //createUserWithEmailAndPassword(email, password); //returns Promise containing UserCredential;
  };
}

export default SignUpScreen;
