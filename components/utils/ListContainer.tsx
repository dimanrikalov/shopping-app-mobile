import { MyText } from './MyText';
import { Item } from './Item/Item';
import { ScrollView, StyleSheet, View } from 'react-native';
import { COLLECTIONS, useGetAllProductsQuery } from '../../app/productsApi';

const setListTitle = (collectioName: COLLECTIONS) => {
    switch (collectioName) {
        case COLLECTIONS.PRODUCTS_TO_BE_ADDED:
            return 'Add to cart:';
        case COLLECTIONS.PRODUCTS_TO_BUY:
            return 'To buy:';
        case COLLECTIONS.BOUGHT_PRODUCTS:
            return 'Already bought:';
    }
};

export const ListContainer = ({
    collectionName
}: {
    collectionName: COLLECTIONS;
}) => {
    const { data: collection, isLoading } =
        useGetAllProductsQuery(collectionName);

    return (
        <View style={styles.categoryContainer}>
            <MyText style={styles.categoryTitle}>
                {setListTitle(collectionName)}
            </MyText>
            <ScrollView
                style={[
                    styles.listContainer,
                    collectionName === COLLECTIONS.PRODUCTS_TO_BE_ADDED &&
                        styles.tallList
                ]}>
                {isLoading ? (
                    <MyText>Fetching data...</MyText>
                ) : (
                    <View style={styles.list}>
                        {collection?.map((x, i) => (
                            <Item
                                collectionName={collectionName}
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
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 24,
        gap: 24
    },
    categoryTitle: {
        alignSelf: 'flex-start',
        fontSize: 24
    },
    listContainer: {
        display: 'flex',
        gap: 8,
        height: '38%',
        width: '100%'
    },
    tallList: {
        height: '85%'
    },
    list: { display: 'flex', gap: 16 }
});
