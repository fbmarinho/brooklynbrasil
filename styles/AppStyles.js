import Theme from './theme';
import { StyleSheet, Dimensions } from 'react-native';
import theme from './theme';

var { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    stickyBotton: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    avatar: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 4,
        borderColor: Theme.secondaryText
    },
    title: {
        color: Theme.primaryText,
        fontSize: 18,
        padding: 10,
        textAlign: 'center'
    },
    drawerButton: {
        color: Theme.primaryText,
        padding: 10,
        textAlign: 'center'
    },
    header: {
        backgroundColor: Theme.lighterSecondaryColor,
    },
    headerTitle: {
        color: Theme.primaryText
    },
    tabBar: {
        backgroundColor: Theme.lighterSecondaryColor,
        padding: 10,
        height: 60
    }

});