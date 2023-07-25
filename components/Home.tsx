import { StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';
import { COLLECTIONS } from '../app/productsApi';
import { ListContainer } from './utils/ListContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: React.FC<HomeScreenProps> = (props) => {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <ListContainer collectionName={COLLECTIONS.PRODUCTS_TO_BUY} />
            <ListContainer collectionName={COLLECTIONS.BOUGHT_PRODUCTS} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        gap: 32
    }
});
