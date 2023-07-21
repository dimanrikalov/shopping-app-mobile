import {store} from './app/store';
import {Provider} from 'react-redux';
import {Home} from './components/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {AddProducts} from './components/AddProducts/AddProducts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen name="AddProducts" component={AddProducts} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
