import {Input, InputTypes, Type} from '../Input';
import {Pressable, StyleSheet, View} from 'react-native';
import {IProductData, PRODUCT_DATA_KEYS} from './ItemCard';
import {COLLECTIONS, useEditProductMutation} from '../../../app/productsApi';
import {MyText} from '../MyText';

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
        setInputValues(prev => ({
            ...prev,
            [key]: textValue
        }));
    };

    return (
        <View style={styles.cardBackground}>
            <View style={styles.editContainer}>
                <Input
                    type={Type.TEXT}
                    placeholder="Watermelon"
                    value={inputValues.name}
                    elementId={InputTypes.NAME_INPUT}
                    setInputs={textValue =>
                        setInput(textValue, PRODUCT_DATA_KEYS.NAME)
                    }
                />
                <Input
                    type={Type.TEXT}
                    placeholder="Quantity"
                    value={inputValues.quantity}
                    elementId={InputTypes.QUANTITY_INPUT}
                    setInputs={textValue =>
                        setInput(textValue, PRODUCT_DATA_KEYS.QUANTITY)
                    }
                />
                <Input
                    type={Type.TEXT}
                    placeholder="Price"
                    value={inputValues.price}
                    elementId={InputTypes.PRICE_INPUT}
                    setInputs={textValue =>
                        setInput(textValue, PRODUCT_DATA_KEYS.PRICE)
                    }
                />
                <Pressable style={styles.button} onPress={onEditHandler}>
                    <MyText style={styles.buttonText}>Edit</MyText>
                </Pressable>
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
    },
    button: {
        backgroundColor: '#4F8EF7',
        borderRadius: 6,
        padding: 9
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
});
