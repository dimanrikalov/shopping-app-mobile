import {
    TextInput,
    StyleSheet,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    View
} from 'react-native';
import {MyText} from './MyText';
import {useState} from 'react';

type InputChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
) => void;

export enum InputTypes {
    NAME_INPUT = 'name-input',
    PRICE_INPUT = 'price-input',
    QUANTITY_INPUT = 'quantity-input'
}

export enum Type {
    TEXT = 'default',
    NUMERIC = 'numeric'
}

interface IInputBody {
    type: Type;
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
                style={[styles.input, isFocused && styles.inputContainer]}
                keyboardType={type}
                value={value}
                id={elementId}
                onChange={setInputs}
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
        fontSize: 14
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
