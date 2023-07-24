import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HeaderButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useDispatch, useSelector} from 'react-redux';
import {toggle} from '../../app/editModeSlice';

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
    return (
        <View style={styles.headerContainer}>
            <Pressable>
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
        gap: 16
    }
});
