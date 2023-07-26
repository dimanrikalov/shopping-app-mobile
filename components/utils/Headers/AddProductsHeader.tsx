import {
    COLLECTIONS,
    useMoveAllMutation,
    useDeleteAllMutation
} from '../../../app/productsApi';
import { Button } from '../Button';
import { styles } from './HomeHeader';
import { Alert, View } from 'react-native';
import { RootStackParamList, VIEWS } from '../../Router';
import { useNavigation } from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

export const AddProductsHeaderRight = () => {
    const { navigate } =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [moveAll] = useMoveAllMutation();
    const [deleteAll] = useDeleteAllMutation();

    const addToBuyList = () => {
        moveAll({
            srcCollection: COLLECTIONS.PRODUCTS_TO_BE_ADDED,
            destCollection: COLLECTIONS.PRODUCTS_TO_BUY
        }).then(() => {
            navigate(VIEWS.HOME);
        });
    };

    const discardItems = () => {
        Alert.alert(
            'Are you sure?',
            'Are you sure you want to discard all items?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => deleteAll(COLLECTIONS.PRODUCTS_TO_BE_ADDED)
                }
            ]
        );
    };

    return (
        <View style={[styles.headerContainer, styles.addAlignItemsCenter]}>
            <Button
                btnProps={{
                    handler: addToBuyList,
                    icon: (
                        <AntDesign
                            name="pluscircle"
                            size={20}
                            color="#4F8EF7"
                        />
                    )
                }}
            />
            <Button
                btnProps={{
                    handler: discardItems,
                    icon: (
                        <MaterialCommunityIcons
                            name="delete"
                            size={25}
                            color="#4F8EF7"
                        />
                    )
                }}
            />

            <Button
                btnProps={{
                    handler: () => navigate(VIEWS.CREATE_PRODUCT),
                    icon: <IonIcons name="create" size={25} color="#4F8EF7" />
                }}
            />
        </View>
    );
};
