import { useState } from 'react';
import { MyText } from './utils/MyText';
import { Button } from './utils/Button';
import { RootStackParamList } from './Router';
import auth from '@react-native-firebase/auth';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { ITypes, Input, InputTypes } from './utils/Input';
import { Pressable, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const RegisterScreen = () => {
    const { navigate } =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [error, setError] = useState<string>();
    const [nameInput, setNameInput] = useState('');

    const submitRegistration = () => {
        auth()
            .signInAnonymously()
            .then(async (data) => {

                console.log('Anonymouse login succesful.');
                await data.user.updateProfile({displayName:"test"})
                console.log("after",data.user);
                navigate('Home');
            })
            .catch((err: any) => {
                setError(err.message);
            });
    };

    return (
        <View style={styles.loginScreenContainer}>
            <MyText style={styles.title}>Sign-up</MyText>

            <View style={styles.inputContainer}>
                {error && <MyText style={styles.error}>{error}</MyText>}
                <Input
                    label={'Enter your name:'}
                    placeholder={'John Doe'}
                    value={nameInput}
                    setInputs={(newValue) => setNameInput(newValue)}
                    elementId={InputTypes.NAME_INPUT}
                    type={ITypes.TEXT}
                />
                <Button
                    btnProps={{ handler: submitRegistration, msg: 'Sign-up' }}
                />
            </View>
            <View style={styles.subscript}>
                <MyText style={styles.subscriptText}>
                    Already have an account?{' '}
                </MyText>
                <Pressable
                    style={styles.linkBtn}
                    onPress={() => navigate('Login')}>
                    <MyText style={[styles.color, styles.subscriptText]}>
                        Sign-in
                    </MyText>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32
    },
    subtitle: {
        fontSize: 21
    },
    loginScreenContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 32
    },
    error: {
        backgroundColor: '#f5bfbf',
        textAlign: 'center',
        padding: 6,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
        color: 'red'
    },
    inputContainer: {
        display: 'flex',
        gap: 32,
        width: '80%'
    },
    color: {
        color: '#4F8EF7'
    },
    linkBtn: {
        display: 'flex'
    },
    subscript: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    subscriptText: {
        fontSize: 16
    }
});
