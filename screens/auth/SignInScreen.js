import React from 'react';
import {
    AsyncStorage,
    View,
    Text,
    TextInput, TouchableOpacity
} from 'react-native';
import AppStyles from '../../styles/AppStyles';
import HSpace from '../../components/HSpace';

import * as firebase from 'firebase';

class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyAB41pGf_zuKMrB5LZdwvvdYtnMTPyCzZc",
            authDomain: "brooklynbrasil2019.firebaseapp.com",
            databaseURL: "https://brooklynbrasil2019.firebaseio.com",
            projectId: "brooklynbrasil2019",
            storageBucket: "",
            messagingSenderId: "741110960280",
            appId: "1:741110960280:web:134826940f629cba"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }


    render() {
        return (
            <View style={AppStyles.container}>
                <Text style={AppStyles.title}>Bem-vindo !</Text>
                <Text style={AppStyles.title}>{this.state.error}</Text>
                <TextInput style={AppStyles.input} placeholder='Seu E-mail' autoCompleteType='email' onChangeText={this._handleEmailChange} />
                <TextInput style={AppStyles.input} placeholder='Senha' autoCompleteType='password' onChangeText={this._handlePasswordChange} secureTextEntry={true} />
                <Text style={AppStyles.btnPrimary} onPress={this._signInAsync}>Entrar</Text>
                <Text style={AppStyles.commonText}>Esqueci minha senha</Text>
                <HSpace size={60} />
                <Text style={AppStyles.commonText}>Ainda não tem conta ?</Text>
                <Text style={AppStyles.btnSecondary} onPress={() => this.props.navigation.navigate('SignUp')}>Cadastre-se !</Text>
            </View>
        );
    }


    _handleEmailChange = (email) => {
        this.setState({ email });
    }

    _handlePasswordChange = (password) => {
        this.setState({ password });
    }

    _signInAsync = async () => {
        console.log('email:' + this.state.email + ' senha:' + this.state.password);

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                console.log(res);
                AsyncStorage.setItem('userToken', res.user.uid);
                this.props.navigation.navigate('App');
            }).catch((e) => {
                console.log(e);
                this.setState({ error: e.code });
            });
    };
}

export default SignInScreen;