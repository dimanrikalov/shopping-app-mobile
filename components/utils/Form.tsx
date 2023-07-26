import { useState } from 'react';
import { MyText } from './MyText';
import { Button } from './Button';
import { View, StyleSheet } from 'react-native';
import { ITypes, Input, InputTypes } from './Input';
import { useNavigation } from '@react-navigation/native';
import { COLLECTIONS, useCreateProductMutation } from '../../app/productsApi';

export const Form = () => {
    const navigation = useNavigation();
    const [error, setError] = useState();
    const [createProduct] = useCreateProductMutation();
    const [inputValues, setInputValues] = useState({
        name: '',
        price: '',
        quantity: ''
    });

    const createHandler = async () => {
        createProduct({
            name: inputValues.name,
            price: Number(inputValues.price),
            quantity: Number(inputValues.quantity),
            collectionToModify: COLLECTIONS.PRODUCTS_TO_BE_ADDED
        })
            .then(() => navigation.goBack())
            .catch((err: any) => {
                setError(err.message);
            });
    };

    return (
        <View style={styles.formContainer}>
            {error && <MyText style={styles.errorMessage}>{error}</MyText>}
            <Input
                label={'Enter product name:'}
                placeholder={'Apple'}
                type={ITypes.TEXT}
                elementId={InputTypes.NAME_INPUT}
                value={inputValues.name}
                setInputs={(newNameValue) =>
                    setInputValues((prev) => ({
                        ...prev,
                        name: newNameValue
                    }))
                }
            />
            <Input
                label={'Enter product price($) (per 1):'}
                placeholder={'$3.5'}
                type={ITypes.NUMERIC}
                elementId={InputTypes.PRICE_INPUT}
                value={inputValues.price}
                setInputs={(newPriceValue) =>
                    setInputValues((prev) => ({
                        ...prev,
                        price: newPriceValue
                    }))
                }
            />

            <Input
                label={'Enter quantity (count / kg):'}
                placeholder={'2.5kg / 3 (count)'}
                type={ITypes.NUMERIC}
                elementId={InputTypes.QUANTITY_INPUT}
                value={inputValues.quantity}
                setInputs={(newQuantityValue) =>
                    setInputValues((prev) => ({
                        ...prev,
                        quantity: newQuantityValue
                    }))
                }
            />

            <Button
                btnProps={{
                    handler: createHandler,
                    msg: 'Add to "Add to cart"'
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        width: '65%',
        display: 'flex',
        gap: 24
    },
    errorMessage: {
        backgroundColor: '#f5bfbf',
        textAlign: 'center',
        padding: 6,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
        color: 'red'
    }
});
