import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { toggle } from '../../../app/editModeSlice';
import { RootStackParamList, VIEWS } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

export const HomeHeaderRight = () => {
    const { navigate } =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useDispatch();
    const toggleEditMode = () => dispatch(toggle());

    return (
        <View style={styles.headerContainer}>
            <Button
                btnProps={{
                    handler: toggleEditMode,
                    icon: <FontAwesome name="edit" size={24} color="#4F8EF7" />
                }}
            />
            <Button
                btnProps={{
                    handler: () => navigate(VIEWS.ADD_PRODUCTS),
                    icon: (
                        <AntDesign
                            name="pluscircle"
                            size={20}
                            color="#4F8EF7"
                        />
                    )
                }}
            />
        </View>
    );
};

export const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16
    },
    addAlignItemsCenter: {
        alignItems: 'center'
    }
});
