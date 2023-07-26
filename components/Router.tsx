import { Home } from './Home';
import { Welcome } from './Welcome';
import { LoginScreen } from './LoginScreen';
import { AddProducts } from './AddProducts';
import { CreateProduct } from './CreateProduct';
import { RegisterScreen } from './RegisterScreen';
import auth from '@react-native-firebase/auth';
import { HomeHeaderRight } from './utils/Headers/HomeHeader';
import { NavigationContainer } from '@react-navigation/native';
import { AddProductsHeaderRight } from './utils/Headers/AddProductsHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export enum VIEWS {
    HOME = 'Home',
    LOGIN = 'Login',
    WELCOME = 'Welcome',
    REGISTER = 'Register',
    ADD_PRODUCTS = 'AddProducts',
    CREATE_PRODUCT = 'CreateProduct'
}

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Welcome: undefined;
    Register: undefined;
    AddProducts: undefined;
    CreateProduct: undefined;
};

type HeaderRight = (props: HeaderButtonProps) => React.ReactNode;

interface IOptions {
    headerRight?: HeaderRight;
    headerTitle: string;
    headerTintColor: string;
    headerStyle: {
        backgroundColor: string;
    };
    headerShadowVisible: boolean;
}

const generateOptionsBody = (headerRight?: HeaderRight) => {
    const result: IOptions = {
        headerTitle: '',
        headerTintColor: '#4F8EF7',
        headerStyle: {
            backgroundColor: '#f4f4f4'
        },
        headerShadowVisible: false
    };

    if (headerRight) {
        result.headerRight = headerRight;
    }

    return result;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Welcome'}>
                <Stack.Screen
                    name={'Welcome'}
                    component={Welcome}
                    options={generateOptionsBody()}
                />
                <Stack.Screen
                    name={'Login'}
                    component={LoginScreen}
                    options={generateOptionsBody()}
                />
                <Stack.Screen
                    name={'Register'}
                    component={RegisterScreen}
                    options={generateOptionsBody()}
                />
                <Stack.Screen
                    name={'Home'}
                    component={Home}
                    options={generateOptionsBody(HomeHeaderRight)}
                />
                <Stack.Screen
                    name={'AddProducts'}
                    component={AddProducts}
                    options={generateOptionsBody(AddProductsHeaderRight)}
                />
                <Stack.Screen
                    name={'CreateProduct'}
                    component={CreateProduct}
                    options={generateOptionsBody()}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
