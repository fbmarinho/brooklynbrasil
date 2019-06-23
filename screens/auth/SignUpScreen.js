import React from 'react';
import {
    AsyncStorage,
    View,
    Text,
    TextInput,
} from 'react-native';
import AppStyles from '../../styles/AppStyles';
import HSpace from '../../components/HSpace';




class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <Text style={AppStyles.title}>Cadastro</Text>
                <TextInput style={AppStyles.input} placeholder='Nome' autoCompleteType='text' />
                <TextInput style={AppStyles.input} placeholder='Sobrenome' autoCompleteType='text' />
                <HSpace size={20} />
                <TextInput style={AppStyles.input} placeholder='Seu E-mail' autoCompleteType='email' />
                <TextInput style={AppStyles.input} placeholder='Senha' autoCompleteType='password' secureTextEntry={true} />
                <Text style={AppStyles.btnPrimary} onPress={this._signUpAsync} >Cadastrar</Text>
                <HSpace size={60} />
                <Text style={AppStyles.commonText}>Já tem conta ?</Text>
                <Text style={AppStyles.btnSecondary} onPress={() => this.props.navigation.goBack()}>Voltar</Text>
            </View>
        )
    }

    _signUpAsync = async () => {
        //Send data to server
        //createUserWithEmailAndPassword(email, password); //returns Promise containing UserCredential;
    };
}

export default SignUpScreen;