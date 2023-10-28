import {
    View,
    Text,
    StyleSheet,
    ImageSourcePropType,
    TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import DiceOne from '../assets/one.png';
import DiceTwo from '../assets/two.png';
import DiceThree from '../assets/three.png';
import DiceFour from '../assets/four.png';
import DiceFive from '../assets/five.png';
import DiceSix from '../assets/six.png';
import Dice from './components/Dice';

const App = (): JSX.Element => {
    const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

    const rollTheDice = (): void => {
        const random = Math.ceil(Math.random() * 6);
        switch (random) {
            case 1:
                setDiceImage(DiceOne);
                break;
            case 2:
                setDiceImage(DiceTwo);
                break;
            case 3:
                setDiceImage(DiceThree);
                break;
            case 4:
                setDiceImage(DiceFour);
                break;
            case 5:
                setDiceImage(DiceFive);
                break;
            case 6:
                setDiceImage(DiceSix);
                break;
            default:
                setDiceImage(DiceOne);
                break;
        }
    };

    return (
        <View style={styles.container}>
            <Dice imageUrl={diceImage} />
            <TouchableOpacity style={styles.button} onPress={rollTheDice}>
                <Text style={styles.btnTxt}>Roll the dice</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f3542',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    btnTxt: {
        color: '#2f3542',
        textTransform: 'uppercase',
        fontSize: 20,
    },
});

export default App;
