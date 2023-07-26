import { StyleSheet, View } from 'react-native';
import { MyText } from './utils/MyText';
import { Button } from './utils/Button';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './Router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';

export const Welcome = () => {
    const { navigate } =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [error, setError] = useState();

    return (
        <View style={styles.welcomeContainer}>
            <MyText style={styles.title}>Welcome</MyText>
            <View style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    <Button
                        btnProps={{
                            handler: () => navigate('Login'),
                            msg: 'Sign-in with credentials'
                        }}
                    />
                    <Button
                        btnProps={{
                            handler: () => navigate('Register'),
                            msg: 'Sign-in anonymously'
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 36
    },
    welcomeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%'
    },
    contentContainer: {
        display: 'flex',
        width: '80%'
    },
    buttonContainer: {
        display: 'flex',
        gap: 32
    }
});
