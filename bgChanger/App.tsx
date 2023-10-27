import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
    const [bgColor, setBgColor] = useState('#1B9CFC');
    //fn to change background
    const changeBg = (): void => {
        console.log('first');
        const colorChar = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += colorChar.charAt(Math.floor(Math.random() * 16));
        }
        setBgColor(color);
    };

    return (
        <>
            <StatusBar backgroundColor={bgColor} />
            <View style={[styles.container, {backgroundColor: bgColor}]}>
                <TouchableOpacity onPress={changeBg}>
                    <View style={styles.actionBtn}>
                        <Text style={styles.actionBtnTxt}>Click me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtn: {
        borderRadius: 10,
        backgroundColor: '#FD7272',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    actionBtnTxt: {
        textTransform: 'uppercase',
        color: '#F8EFBA',
    },
});

export default App;
