import {useState} from 'react';
import {Alert} from 'react-native';
import {ItemCard} from './ItemCard';
import {EditItemCard} from './EditItemCard';
import {COLLECTIONS, useDeleteProductMutation} from '../../../app/productsApi';

export interface ItemInterface {
    id: string;
    name: string;
    price: number;
    quantity: number;
    collectionName: COLLECTIONS;
}

export const Item = ({
    id,
    name,
    price,
    quantity,
    collectionName
}: ItemInterface) => {
    const [deleteProduct] = useDeleteProductMutation();
    const [isInEditMode, setIsInEditMode] = useState(false);
    const [inputValues, setInputValues] = useState({
        name: '',
        price: '',
        quantity: ''
    });

    const onDeleteHandler = () => {
        Alert.alert(
            'Are you sure?',
            `Are you sure you want to delete "${name}" from the "To buy list"?`,
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        deleteProduct({collectionName, id});
                    }
                },
                {
                    text: 'Cancel',
                    onPress: () => {}
                }
            ]
        );
    };

    const changeMode = () => {
        setInputValues({
            name: name,
            price: price.toString(),
            quantity: quantity.toString()
        });
        setIsInEditMode(true);
    };

    return isInEditMode ? (
        <EditItemCard
            id={id}
            inputValues={inputValues}
            collectionName={collectionName}
            setInputValues={setInputValues}
            setIsInEditMode={setIsInEditMode}
        />
    ) : (
        <ItemCard
            id={id}
            productData={{
                name,
                price: price.toString(),
                quantity: quantity.toString()
            }}
            changeMode={changeMode}
            collectionName={collectionName}
            onDeleteHandler={onDeleteHandler}
        />
    );
};
