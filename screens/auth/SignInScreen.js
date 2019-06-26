import React from "react";
import { AsyncStorage, View, Text, TextInput } from "react-native";
import AppStyles from "../../styles/AppStyles";
import HSpace from "../../components/HSpace";

import fb from "../../services/Firebase";

class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={AppStyles.container}>
        <Text style={AppStyles.title}>Bem-vindo !</Text>
        <Text style={AppStyles.title}>{this.state.error}</Text>
        <TextInput
          style={AppStyles.input}
          placeholder="Seu E-mail"
          autoCompleteType="email"
          onChangeText={this._handleEmailChange}
        />
        <TextInput
          style={AppStyles.input}
          placeholder="Senha"
          autoCompleteType="password"
          onChangeText={this._handlePasswordChange}
          secureTextEntry={true}
        />
        <Text style={AppStyles.btnPrimary} onPress={this._signInAsync}>
          Entrar
        </Text>
        <Text style={AppStyles.commonText}>Esqueci minha senha</Text>
        <HSpace size={60} />
        <Text style={AppStyles.commonText}>Ainda não tem conta ?</Text>
        <Text
          style={AppStyles.btnSecondary}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          Cadastre-se !
        </Text>
      </View>
    );
  }

  _handleEmailChange = email => {
    this.setState({ email });
  };

  _handlePasswordChange = password => {
    this.setState({ password });
  };

  _signInAsync = async () => {
    console.log("email:" + this.state.email + " senha:" + this.state.password);

    fb.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log(res);
        AsyncStorage.setItem("userToken", res.user.uid);
        this.props.navigation.navigate("App");
      })
      .catch(e => {
        console.log(e);
        this.setState({ error: e.code });
      });
  };
}

export default SignInScreen;
