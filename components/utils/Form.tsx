import {useState} from 'react';
import {MyText} from './MyText';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';

interface IInputsFocusStates {
    name: boolean;
    price: boolean;
    quantity: boolean;
}

export const Form = () => {
    const [inputsFocusStatuses, setInputsFocusStatuses] =
        useState<IInputsFocusStates>({
            name: false,
            price: false,
            quantity: false
        });

    const createHandler = () => {};

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
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
                />
            </View>
            <View style={styles.inputContainer}>
                <MyText>Enter quantity (kg):</MyText>
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
                />
            </View>
            <Pressable onPress={createHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        width: '65%',
        display: 'flex',
        gap: 24
    },
    inputContainer: {
        display: 'flex',
        gap: 9
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 12,
        paddingVertical: 6,
        paddingHorizontal: 12,
        fontSize: 18
    },
    inputFocused: {
        borderColor: '#4F8EF7'
    }
});
