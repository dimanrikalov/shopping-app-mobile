import {Pressable} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {HeaderButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';

export const PressableIcon = (props: HeaderButtonProps) => {
    return (
        <Pressable>
            <FontAwesome6 name="circle-plus" size={20} color="#4F8EF7" />
        </Pressable>
    );
};
