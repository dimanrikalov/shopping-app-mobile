import { useState } from 'react';
import { MyText } from './MyText';
import { View, TextInput, StyleSheet } from 'react-native';

type InputChangeHandler = (textInput: string) => void;

export enum InputTypes {
    NAME_INPUT = 'name-input',
    PRICE_INPUT = 'price-input',
    QUANTITY_INPUT = 'quantity-input'
}

export enum ITypes {
    TEXT = 'default',
    NUMERIC = 'numeric'
}

interface IInputBody {
    type: ITypes;
    value: string;
    label?: string;
    placeholder: string;
    elementId: InputTypes;
    setInputs: InputChangeHandler;
}

export const Input = ({
    type,
    value,
    label,
    elementId,
    setInputs,
    placeholder
}: IInputBody) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.inputContainer}>
            {label && <MyText style={styles.label}>{label}</MyText>}
            <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                keyboardType={type}
                value={value}
                id={elementId}
                onChangeText={setInputs}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        gap: 12
    },
    label: {
        fontSize: 18
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 9,
        paddingVertical: 6,
        paddingHorizontal: 12,
        fontSize: 18
    },
    inputFocused: {
        borderColor: '#4F8EF7'
    }
});
