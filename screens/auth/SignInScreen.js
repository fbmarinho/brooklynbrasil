import React from "react";
import { AsyncStorage, View, Text, TextInput, Image } from "react-native";
import AppStyles from "../../styles/AppStyles";
import HSpace from "../../components/HSpace";

import fb from "../../services/Firebase";
import ActivityOverlay from "../../components/ActivityOverlay";
class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: {
          value: "",
          valid: null
        },
        password: {
          value: "",
          valid: null
        },
        submit: {
          enabled: false
        },
        message: "",
        validating: false
      }
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={AppStyles.container}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ height: 150 }}
          resizeMode="contain"
        />
        <Text style={AppStyles.title}>Bem-vindo !</Text>
        <HSpace size={30} />
        <TextInput
          style={[AppStyles.input]}
          placeholder="Seu E-mail"
          autoCompleteType="email"
          onChangeText={value => this._handleChange("email", value)}
        />
        <TextInput
          style={[AppStyles.input]}
          placeholder="Senha"
          autoCompleteType="password"
          onChangeText={value => this._handleChange("password", value)}
          secureTextEntry={true}
        />
        <Text
          style={
            this.state.form.submit.enabled
              ? AppStyles.btnPrimary
              : AppStyles.btnDisabled
          }
          onPress={this.state.form.submit.enabled ? this._signInAsync : null}
        >
          Entrar
        </Text>
        <Text
          style={AppStyles.commonText}
          onPress={() => this.props.navigation.navigate("Forgot")}
        >
          Esqueci minha senha
        </Text>
        <Text style={AppStyles.title}>{this.state.form.message}</Text>
        <HSpace size={30} />
        <Text style={AppStyles.commonText}>Ainda não tem conta ?</Text>
        <Text
          style={AppStyles.btnSecondary}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          Cadastre-se !
        </Text>

        <ActivityOverlay show={this.state.form.validating} />
      </View>
    );
  }

  _msg = code => {
    switch (code) {
      case "auth/invalid-email":
        return "E-mail inválido !";
      case "auth/user-not-found":
        return "E-mail não cadastrado !";
      case "auth/wrong-password":
        return "Senha inválida !";
      default:
        return "";
    }
  };

  _setSubmitEnabled = state => {
    const form = { ...this.state.form };
    form.submit.enabled = state;
    this.setState({ form });
  };

  _setValidating = state => {
    const form = { ...this.state.form };
    form.validating = state;
    this.setState({ form });
  };

  _handleError = code => {
    const form = { ...this.state.form };
    form.message = this._msg(code);
    this.setState({ form });
  };

  _handleChange = (field, value) => {
    const form = { ...this.state.form };
    form[field].value = value;
    this.setState({ form });
    this._Validate();
  };

  _Validate = () => {
    const form = { ...this.state.form };
    const submitEnabled = form.email.value != "" && form.password.value != "";
    form.submit.enabled = submitEnabled;

    this.setState({ form });
  };

  _signInAsync = async () => {
    this._setSubmitEnabled(false);
    this._setValidating(true);
    const form = this.state.form;
    const email = form.email.value;
    const password = form.password.value;
    console.log("email:" + email + " senha:" + password);
    fb.auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        AsyncStorage.setItem("userToken", res.user.uid);
        this._setValidating(false);
        this.props.navigation.navigate("App");
      })
      .catch(e => {
        console.log(e);
        this._handleError(e.code);
        this._setSubmitEnabled(true);
        this._setValidating(false);
      });
  };
}

export default SignInScreen;
