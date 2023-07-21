import {RootStackParamList} from '../../App';
import {Pressable, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MyText} from '../utils/MyText';

type CreateProductProps = NativeStackScreenProps<
    RootStackParamList,
    'CreateProduct'
>;

export const CreateProduct: React.FC<CreateProductProps> = props => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <MyText>Add Products</MyText>
            <Pressable onPressOut={() => props.navigation.navigate('Home')}>
                <MyText>Go Home</MyText>
            </Pressable>
        </View>
    );
};
