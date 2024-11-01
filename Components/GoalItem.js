import { useState } from 'react';
import { StyleSheet,View, Text, Pressable} from 'react-native';

function GoalItem(props) {
    return (
        <Pressable android_ripple={{color: '#210644'}} onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.listText} >
                <Text style={styles.listText}>{props.text}</Text>
            </View>

        </Pressable>
        
    );
}
export default GoalItem;

const styles = StyleSheet.create({
    listText: {
        flexDirection: 'column',
        width: '100%',
        height: 40,
        fontSize: 20,
        marginTop: 10,
        borderRadius: 8,
        color: 'white',
        backgroundColor: '#5e0acc',
        alignItems: 'left',
        justifyContent: 'center',
    }
})

 