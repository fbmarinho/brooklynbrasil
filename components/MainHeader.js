import React from 'react';
import { View, Text } from 'react-native';
import AppStyles from '../styles/AppStyles';
import { SafeAreaView } from 'react-navigation';

export default class MainHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (

            <View style={AppStyles.header}>
                <Text>Teste</Text>
            </View>

        )
    }
}