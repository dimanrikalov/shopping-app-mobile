import {View, Text, Pressable} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

export const AddProducts = ({
    navigation
}: {
    navigation: NavigationProp<any>;
}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Add Products</Text>
            <Pressable onPressOut={() => navigation.navigate('Home')}>
                <Text>Go Home</Text>
            </Pressable>
        </View>
    );
};
