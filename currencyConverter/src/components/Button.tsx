import {View, Text, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

type currencyProp = PropsWithChildren<{
    name: string;
    value: number;
    flag: string;
    symbol: string;
}>;

const Button = (currency: currencyProp): JSX.Element => {
    return (
        <View style={styles.btnContainer}>
            <View>
                <Text style={styles.btnTxt}>{currency.flag}</Text>
            </View>
            <View>
                <Text style={styles.btnTxt}>{currency.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    btnTxt: {
        color: '#ffffff',
    },
});

export default Button;
