import { RootStackParamList } from '../App';
import { View, StyleSheet } from 'react-native';
import { COLLECTIONS } from '../app/productsApi';
import { ListContainer } from './utils/ListContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AddScreenProps = NativeStackScreenProps<RootStackParamList, 'AddProducts'>;

export const AddProducts: React.FC<AddScreenProps> = (props) => {
    return (
        <View style={styles.addProcutsContainer}>
            <ListContainer collectionName={COLLECTIONS.PRODUCTS_TO_BE_ADDED} />
        </View>
    );
};

const styles = StyleSheet.create({
    addProcutsContainer: {},
    homeContainer: {
        display: 'flex',
        gap: 32
    }
});
