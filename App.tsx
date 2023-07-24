import {
    AddProductsHeaderRight,
    HomeHeaderRight
} from './components/utils/PressableIcon';
import {store} from './app/store';
import {Provider} from 'react-redux';
import {Home} from './components/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {AddProducts} from './components/AddProducts/AddProducts';
import {CreateProduct} from './components/CreateProduct/CreateProduct';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    AddProducts: undefined;
    CreateProduct: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerRight: HomeHeaderRight,
                            headerTitle: '',
                            headerStyle: {
                                backgroundColor: '#f4f4f4'
                            },
                            headerShadowVisible: false
                        }}
                    />
                    <Stack.Screen
                        name="AddProducts"
                        component={AddProducts}
                        options={{
                            title: '',
                            headerTransparent: true,
                            headerRight: AddProductsHeaderRight
                        }}
                    />
                    <Stack.Screen
                        name="CreateProduct"
                        component={CreateProduct}
                        options={{
                            title: '',
                            headerTransparent: true
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
