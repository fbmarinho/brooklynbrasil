import React, { Component } from 'react';
import { Text, Image, View, ScrollView, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation';
import AppStyles from '../styles/AppStyles';


class MenuLateral extends Component {
    constructor(props) {
        super(props);
    }

    _navigateToScreen = (route) => {
        this.props.navigation.navigate(route);
    }

    _signOutAsync = async () => {
        console.log(this.props);
        await AsyncStorage.clear();
        this.props.navigation.closeDrawer();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={AppStyles.container}>
                <ScrollView>
                    <Image source={require('../assets/images/user.jpg')} style={AppStyles.avatar} />
                    <Text style={AppStyles.title}>Nome do perfil</Text>
                    <Text style={AppStyles.drawerButton} onPress={() => this._navigateToScreen('Horarios')} >Editar perfil</Text>
                </ScrollView >
                <View>
                    <Text style={AppStyles.drawerButton} onPress={() => this._signOutAsync()} >Sair</Text>
                </View>
            </View >
        )
    };
}


export default MenuLateral;