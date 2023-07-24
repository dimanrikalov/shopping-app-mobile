import {useState} from 'react';
import {MyText} from './MyText';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import {COLLECTIONS, useCreateProductMutation} from '../../app/productsApi';
import {CreateProductBody} from '../../app/productsApi';
import {useNavigation} from '@react-navigation/native';
interface IInputsFocusStates {
    name: boolean;
    price: boolean;
    quantity: boolean;
}

export const Form = () => {
    const navigation = useNavigation();
    const [createProduct] = useCreateProductMutation();
    const [error, setError] = useState();
    const [inputsFocusStatuses, setInputsFocusStatuses] =
        useState<IInputsFocusStates>({
            name: false,
            price: false,
            quantity: false
        });

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
            <View style={styles.inputContainer}>
                {error && <MyText style={styles.errorMessage}>{error}</MyText>}
                <MyText>Enter product name:</MyText>
                <TextInput
                    style={[
                        styles.input,
                        inputsFocusStatuses.name && styles.inputFocused
                    ]}
                    placeholder="Apple"
                    onFocus={() =>
                        setInputsFocusStatuses(prev => ({
                            ...prev,
                            name: true
                        }))
                    }
                    onBlur={() =>
                        setInputsFocusStatuses(prev => ({
                            ...prev,
                            name: false
                        }))
                    }
                    value={inputValues.name}
                    onChangeText={newText =>
                        setInputValues(prev => ({...prev, name: newText}))
                    }
                />
            </View>
            <View style={styles.inputContainer}>
                <MyText>Enter product price($) (per 1):</MyText>
                <TextInput
                    style={[
                        styles.input,
                        inputsFocusStatuses.price && styles.inputFocused
                    ]}
                    placeholder="3.5 ($)"
                    onFocus={() =>
                        setInputsFocusStatuses(prev => ({
                            ...prev,
                            price: true
                        }))
                    }
                    onBlur={() =>
                        setInputsFocusStatuses(prev => ({
                            ...prev,
                            price: false
                        }))
                    }
                    value={inputValues.price}
                    onChangeText={newText =>
                        setInputValues(prev => ({...prev, price: newText}))
                    }
                />
            </View>
            <View style={styles.inputContainer}>
                <MyText>Enter quantity (count / kg):</MyText>
                <TextInput
                    style={[
                        styles.input,
                        inputsFocusStatuses.quantity && styles.inputFocused
                    ]}
                    placeholder="1.5"
                    onFocus={() =>
                        setInputsFocusStatuses(prev => ({
                            ...prev,
                            quantity: true
                        }))
                    }
                    onBlur={() =>
                        setInputsFocusStatuses(prev => ({
                            ...prev,
                            quantity: false
                        }))
                    }
                    value={inputValues.quantity}
                    onChangeText={newText =>
                        setInputValues(prev => ({...prev, quantity: newText}))
                    }
                />
            </View>
            <Pressable onPress={createHandler} style={styles.button}>
                <MyText style={styles.buttonText}>Add to "Add to cart"</MyText>
            </Pressable>
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
        backgroundColor: '#fa9d9d',
        borderWidth: 1,
        borderColor: 'red'
    },
    inputContainer: {
        display: 'flex',
        gap: 9
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        fontSize: 18
    },
    inputFocused: {
        borderColor: '#4F8EF7'
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
