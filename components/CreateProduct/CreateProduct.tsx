import {Form} from '../utils/Form';
import {MyText} from '../utils/MyText';
import {RootStackParamList} from '../../App';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type CreateProductProps = NativeStackScreenProps<
    RootStackParamList,
    'CreateProduct'
>;

export const CreateProduct: React.FC<CreateProductProps> = props => {
    return (
        <View style={style.createProductContainer}>
            <MyText>Add Product</MyText>
            <Form />
        </View>
    );
};

const style = StyleSheet.create({
    createProductContainer: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        gap: 32
    }
});
