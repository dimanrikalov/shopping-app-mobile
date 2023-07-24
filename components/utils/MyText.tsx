import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

export const MyText = ({children}: {children: string}) => {
    return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Nunito SemiBold',
        fontSize: 18,
        color: 'black'
    }
});
