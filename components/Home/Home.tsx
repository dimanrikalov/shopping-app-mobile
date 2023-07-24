import {RootStackParamList} from '../../App';
import {View, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MyText} from '../utils/MyText';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: React.FC<HomeScreenProps> = props => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <MyText>Home Screen</MyText>
            <Pressable
                onPressOut={() => props.navigation.navigate('AddProducts')}>
                <MyText>Go to Add Products</MyText>
            </Pressable>
        </View>
    );
};
