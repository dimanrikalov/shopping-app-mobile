import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

export const MyText = ({
    style,
    children
}: {
    style?: Object;
    children: string | string[] | React.ReactNode;
}) => {
    return <Text style={[styles.text, style && style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Nunito SemiBold',
        fontSize: 18,
        color: 'black'
    }
});
