import {useEffect} from 'react';
import {MyText} from '../utils/MyText';
import {RootStackParamList} from '../../App';
import {View, StyleSheet, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {COLLECTIONS, useGetAllProductsQuery} from '../../app/productsApi';
import {Item} from '../utils/Item/Item';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {toggle} from '../../app/editModeSlice';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: React.FC<HomeScreenProps> = props => {
    const {data: productsToBuy, isLoading: isLoadingProductsToBuy} =
        useGetAllProductsQuery(COLLECTIONS.PRODUCTS_TO_BUY);
    const {data: boughtProducts, isLoading: isLoadingBoughtProducts} =
        useGetAllProductsQuery(COLLECTIONS.BOUGHT_PRODUCTS);

    return (
        <SafeAreaView style={styles.homeContainer}>
            <View style={styles.categoryContainer}>
                <MyText style={styles.categoryTitle}>To buy:</MyText>
                <ScrollView style={styles.listContainer}>
                    {isLoadingProductsToBuy ? (
                        <MyText>Fetching data...</MyText>
                    ) : (
                        <View style={styles.list}>
                            {productsToBuy?.map((x, i) => (
                                <Item
                                    collectionName={COLLECTIONS.PRODUCTS_TO_BUY}
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
            <View style={styles.categoryContainer}>
                <MyText style={styles.categoryTitle}>Already bought:</MyText>
                <ScrollView style={styles.listContainer}>
                    {isLoadingBoughtProducts ? (
                        <MyText>Fetching data...</MyText>
                    ) : (
                        <View style={styles.list}>
                            {boughtProducts?.map((x, i) => (
                                <Item
                                    collectionName={COLLECTIONS.BOUGHT_PRODUCTS}
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
        height: 270,
        width: '100%'
    },
    list: {
        display: 'flex',
        gap: 16
    }
});
