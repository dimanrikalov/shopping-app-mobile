import { MyText } from './MyText';
import { PressHandler } from './Item/ItemCard';
import { Pressable, StyleSheet } from 'react-native';

enum IButtonKeys {
    MSG = 'msg',
    ICON = 'icon'
}

interface IButton {
    handler: PressHandler;
}

interface IIconButton extends IButton {
    icon: React.ReactNode;
}

interface IMessageButton extends IButton {
    msg: string;
}

type BtnProps = IIconButton | IMessageButton;

export const Button = ({ btnProps }: { btnProps: BtnProps }) => {
    if (IButtonKeys.ICON in btnProps) {
        return (
            <Pressable onPress={btnProps.handler} style={styles.iconButton}>
                {btnProps.icon}
            </Pressable>
        );
    }
    return (
        <Pressable onPress={btnProps.handler} style={styles.button}>
            <MyText style={styles.buttonText}>{btnProps.msg}</MyText>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4F8EF7',
        borderRadius: 9,
        padding: 10
    },
    iconButton: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
});
