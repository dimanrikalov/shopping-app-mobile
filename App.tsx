import {store} from './app/store';
import {Provider} from 'react-redux';
import {Home} from './components/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {AddProducts} from './components/AddProducts/AddProducts';
import {CreateProduct} from './components/CreateProduct/CreateProduct';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PressableIcon} from './components/utils/PressableIcon';

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
                            title: '',
                            headerTransparent: true,
                            headerRight: PressableIcon
                        }}
                    />
                    <Stack.Screen name="AddProducts" component={AddProducts} />
                    <Stack.Screen
                        name="CreateProduct"
                        component={CreateProduct}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;