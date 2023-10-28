import {View, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
    return (
        <View>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    );
};

const styles = StyleSheet.create({
    diceImage: {
        width: 200,
        height: 200,
    },
});

export default Dice;
