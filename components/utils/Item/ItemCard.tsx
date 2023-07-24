import {MyText} from '../MyText';
import {useSelector} from 'react-redux';
import {RootState} from '../../../app/store';
import {COLLECTIONS} from '../../../app/productsApi';
import {useMoveProductMutation} from '../../../app/productsApi';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GestureResponderEvent, Pressable, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from '../Input';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';

export type PressHandler = (event: GestureResponderEvent) => void;

export interface IProductData {
    name: string;
    price: string;
    quantity: string;
}

export enum PRODUCT_DATA_KEYS {
    NAME = 'name',
    PRICE = 'price',
    QUANTITY = 'quantity'
}

interface IItemCardBody {
    id: string;
    changeMode: PressHandler;
    productData: IProductData;
    collectionName: COLLECTIONS;
    onDeleteHandler: PressHandler;
}

export const ItemCard = ({
    id,
    changeMode,
    productData,
    collectionName,
    onDeleteHandler
}: IItemCardBody) => {
    const [moveProduct] = useMoveProductMutation();
    const [checkValue, setCheckValue] = useState(
        collectionName === COLLECTIONS.BOUGHT_PRODUCTS
    );

    const shouldEdit = useSelector(
        (state: RootState) => state.editModeReducer.value
    );

    const checkboxHandler = async (newValue: boolean) => {
        await moveProduct({collectionName, id});
    };

    return (
        <View style={styles.cardBackground}>
            {collectionName === COLLECTIONS.BOUGHT_PRODUCTS && (
                <View style={styles.crossLine}></View>
            )}
            <View
                style={[
                    styles.leftSide,
                    collectionName === COLLECTIONS.PRODUCTS_TO_BE_ADDED &&
                        styles.addToCardStyle
                ]}>
                {collectionName !== COLLECTIONS.PRODUCTS_TO_BE_ADDED && (
                    <CheckBox
                        tintColors={{true: '#4F8EF7', false: 'fff'}}
                        value={checkValue}
                        onValueChange={checkboxHandler}
                        id={`${productData.name}-${productData.quantity}-${productData.price}-${id}`}
                    />
                )}
                <MyText
                    style={[
                        styles.textStyle,
                        shouldEdit && styles.shouldEditStyle
                    ]}>
                    {productData.name}
                </MyText>
                <MyText
                    style={[
                        styles.textStyle,
                        shouldEdit && styles.shouldEditStyle
                    ]}>
                    Qty: {productData.quantity}
                </MyText>
                <MyText
                    style={[
                        styles.textStyle,
                        shouldEdit && styles.shouldEditStyle
                    ]}>
                    ${productData.price}
                </MyText>
            </View>
            {shouldEdit &&
                collectionName !== COLLECTIONS.PRODUCTS_TO_BE_ADDED && (
                    <View style={styles.rightSide}>
                        <Pressable onPress={changeMode}>
                            <FontAwesome
                                name="edit"
                                size={24}
                                color="#4F8EF7"
                            />
                        </Pressable>
                        <Pressable onPress={onDeleteHandler}>
                            <MaterialCommunityIcons
                                name="delete"
                                size={24}
                                color="#4F8EF7"
                            />
                        </Pressable>
                    </View>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    cardBackground: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0px 0px 8px 2px rgba(109, 109, 109, 0.36)',
        paddingVertical: 9,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        width: '100%'
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center'
    },
    shouldEditStyle: {
        maxWidth: 90
    },
    addToCardStyle: {
        width: '100%',
        justifyContent: 'space-evenly'
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    crossLine: {
        position: 'absolute',
        left: '5%',
        height: 2,
        width: '95%',
        backgroundColor: 'darkgrey'
    }
});
