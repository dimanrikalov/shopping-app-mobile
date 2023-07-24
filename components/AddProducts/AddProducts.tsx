import {RootStackParamList} from '../../App';
import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MyText} from '../utils/MyText';
import {COLLECTIONS, useGetAllProductsQuery} from '../../app/productsApi';
import {Item} from '../utils/Item/Item';

type AddScreenProps = NativeStackScreenProps<RootStackParamList, 'AddProducts'>;

export const AddProducts: React.FC<AddScreenProps> = props => {
    const {data: productsToAdd, isLoading} = useGetAllProductsQuery(
        COLLECTIONS.PRODUCTS_TO_BE_ADDED
    );

    return (
        <View style={styles.addProcutsContainer}>
            <View style={styles.categoryContainer}>
                <MyText style={styles.categoryTitle}>Add to cart:</MyText>
                <ScrollView style={styles.listContainer}>
                    {isLoading ? (
                        <MyText>Fetching data...</MyText>
                    ) : (
                        <View style={styles.list}>
                            {productsToAdd?.map((x, i) => (
                                <Item
                                    collectionName={
                                        COLLECTIONS.PRODUCTS_TO_BE_ADDED
                                    }
                                    id={x.id}
                                    name={x.name}
                                    price={x.price}
                                    quantity={x.quantity}
                                    key={i}
                                />
                            ))}
                        </View>
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    addProcutsContainer: {},
    homeContainer: {
        display: 'flex',
        gap: 32
    },
    categoryContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
        width: '100%',
        paddingHorizontal: 24
    },
    categoryTitle: {
        alignSelf: 'flex-start',
        fontSize: 24
    },
    listContainer: {
        display: 'flex',
        gap: 8,
        width: '100%',
        height: '88%'
    },
    list: {
        display: 'flex',
        gap: 16
    }
});
