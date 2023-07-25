import { Button } from '../Button';
import { StyleSheet, View } from 'react-native';
import { Input, InputTypes, ITypes } from '../Input';
import { IProductData, PRODUCT_DATA_KEYS } from './ItemCard';
import { COLLECTIONS, useEditProductMutation } from '../../../app/productsApi';

interface IEditItemBody {
    id: string;
    inputValues: IProductData;
    collectionName: COLLECTIONS;
    setIsInEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    setInputValues: React.Dispatch<React.SetStateAction<IProductData>>;
}

export const EditItemCard = ({
    id,
    inputValues,
    collectionName,
    setInputValues,
    setIsInEditMode
}: IEditItemBody) => {
    const [editProduct] = useEditProductMutation();

    const onEditHandler = () => {
        editProduct({
            collectionName,
            id,
            data: {
                name: inputValues.name,
                price: Number(inputValues.price),
                quantity: Number(inputValues.quantity)
            }
        }).then(() => setIsInEditMode(false));
    };

    const setInput = (textValue: string, key: PRODUCT_DATA_KEYS) => {
        setInputValues((prev) => ({
            ...prev,
            [key]: textValue
        }));
    };

    return (
        <View style={styles.cardBackground}>
            <View style={styles.editContainer}>
                <Input
                    type={ITypes.TEXT}
                    placeholder="Watermelon"
                    value={inputValues.name}
                    elementId={InputTypes.NAME_INPUT}
                    setInputs={(textValue) =>
                        setInput(textValue, PRODUCT_DATA_KEYS.NAME)
                    }
                />
                <Input
                    type={ITypes.NUMERIC}
                    placeholder="Quantity"
                    value={inputValues.quantity}
                    elementId={InputTypes.QUANTITY_INPUT}
                    setInputs={(textValue) =>
                        setInput(textValue, PRODUCT_DATA_KEYS.QUANTITY)
                    }
                />
                <Input
                    type={ITypes.NUMERIC}
                    placeholder="Price"
                    value={inputValues.price}
                    elementId={InputTypes.PRICE_INPUT}
                    setInputs={(textValue) =>
                        setInput(textValue, PRODUCT_DATA_KEYS.PRICE)
                    }
                />
                <Button btnProps={{ handler: onEditHandler, msg: 'Edit' }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardBackground: {
        borderWidth: 1,
        borderColor: 'darkgrey',
        padding: 12,
        borderRadius: 12
    },
    editContainer: {
        display: 'flex',
        gap: 12
    }
});
