import { store } from './app/store';
import { Provider } from 'react-redux';
import { Router } from './components/Router';

const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
