import { Form } from './utils/Form';
import { MyText } from './utils/MyText';
import { RootStackParamList } from '../App';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CreateProductProps = NativeStackScreenProps<
    RootStackParamList,
    'CreateProduct'
>;

export const CreateProduct: React.FC<CreateProductProps> = (props) => {
    return (
        <View style={styles.createProductContainer}>
            <MyText style={styles.title}>Add product</MyText>
            <Form />
        </View>
    );
};

const styles = StyleSheet.create({
    createProductContainer: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        gap: 32
    },
    title: {
        fontSize: 28
    }
});
