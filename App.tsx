import { store } from './app/store';
import { Provider } from 'react-redux';
import { Home } from './components/Home';
import { AddProducts } from './components/AddProducts';
import { CreateProduct } from './components/CreateProduct';
import { NavigationContainer } from '@react-navigation/native';
import { HomeHeaderRight } from './components/utils/Headers/HomeHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddProductsHeaderRight } from './components/utils/Headers/AddProductsHeader';
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

export enum VIEWS {
    HOME = 'Home',
    ADD_PRODUCTS = 'AddProducts',
    CREATE_PRODUCT = 'CreateProduct'
}

export type RootStackParamList = {
    Home: undefined;
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

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Home'}>
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
        </Provider>
    );
};

export default App;
