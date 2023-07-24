import {
    COLLECTIONS,
    useDeleteAllMutation,
    useMoveAllMutation
} from '../../app/productsApi';
import {toggle} from '../../app/editModeSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Alert, Pressable, StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HomeHeaderRight = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const toggleEditMode = () => dispatch(toggle());

    return (
        <View style={styles.headerContainer}>
            <Pressable onPress={toggleEditMode}>
                <FontAwesome name="edit" size={24} color="#4F8EF7" />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('AddProducts')}>
                <FontAwesome6 name="circle-plus" size={20} color="#4F8EF7" />
            </Pressable>
        </View>
    );
};

export const AddProductsHeaderRight = () => {
    const navigation = useNavigation();

    const [moveAll] = useMoveAllMutation();
    const [deleteAll] = useDeleteAllMutation();

    const addToBuyList = () => {
        moveAll({
            srcCollection: COLLECTIONS.PRODUCTS_TO_BE_ADDED,
            destCollection: COLLECTIONS.PRODUCTS_TO_BUY
        }).then(() => {
            navigation.navigate('Home');
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
        <View style={styles.headerContainer}>
            <Pressable onPress={addToBuyList}>
                <FontAwesome6 name="circle-plus" size={20} color="#4F8EF7" />
            </Pressable>
            <Pressable onPress={discardItems}>
                <MaterialCommunityIcons
                    name="delete"
                    size={24}
                    color="#4F8EF7"
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('CreateProduct')}>
                <IonIcons name="create" size={24} color="#4F8EF7" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    }
});
