import {Text, View, Pressable} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

export const Home = ({navigation}: {navigation: NavigationProp<any>}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Pressable onPressOut={() => navigation.navigate('AddProducts')}>
                <Text>Go Home</Text>
            </Pressable>
        </View>
    );
};
