import { useState } from 'react';
import { MyText } from './utils/MyText';
import { Button } from './utils/Button';
import { auth } from '../firebase/firebase';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import { ITypes, Input, InputTypes } from './utils/Input';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Pressable, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const LoginScreen = () => {
    const { navigate } =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [error, setError] = useState<string>();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const submitLogin = async () => {
        setError('');

        if (!inputs.email || !inputs.password) {
            setError('Both fields are requried!');
            return;
        }
        console.log(inputs);
        try {
            const { user } = await signInWithEmailAndPassword(
                auth,
                inputs.email,
                inputs.password
            );

            return;
            if (!user) {
                throw new Error('Login failed!');
            }
            navigate('Home');
        } catch (err: any) {
            console.log(err);
            setError(err.message);
        }
    };

    return (
        <View style={styles.loginScreenContainer}>
            <MyText style={styles.title}>Sign-in</MyText>

            <View style={styles.inputContainer}>
                {error && <MyText style={styles.error}>{error}</MyText>}
                <Input
                    label={'Email'}
                    placeholder={'john.doe@gmail.com'}
                    value={inputs.email}
                    setInputs={(newValue) =>
                        setInputs((prev) => ({ ...prev, email: newValue }))
                    }
                    elementId={InputTypes.EMAIL_INPUT}
                    type={ITypes.TEXT}
                />
                <Input
                    label={'Password'}
                    placeholder={'*********'}
                    value={inputs.password}
                    setInputs={(newValue) =>
                        setInputs((prev) => ({ ...prev, password: newValue }))
                    }
                    elementId={InputTypes.PASSWORD_INPUT}
                    type={ITypes.TEXT}
                />
                <Button btnProps={{ handler: submitLogin, msg: 'Sign-in' }} />
            </View>
            <View style={styles.subscript}>
                <MyText style={styles.subscriptText}>
                    Don't have an account yet?{' '}
                </MyText>
                <Pressable
                    style={styles.linkBtn}
                    onPress={() => navigate('Register')}>
                    <MyText style={[styles.color, styles.subscriptText]}>
                        Sign-up
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
