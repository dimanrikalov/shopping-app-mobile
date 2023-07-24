import {RootStackParamList} from '../../App';
import {View, Text, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type AddScreenProps = NativeStackScreenProps<RootStackParamList, 'AddProducts'>;

export const AddProducts: React.FC<AddScreenProps> = props => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Add Products</Text>
            <Pressable
                onPressOut={() => props.navigation.push('CreateProduct')}>
                <Text>Create</Text>
            </Pressable>
            <Pressable onPressOut={() => props.navigation.navigate('Home')}>
                <Text>Go Home</Text>
            </Pressable>
        </View>
    );
};
