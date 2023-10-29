import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

type Value = {
    key: string;
    symbol: string;
};

const Game = () => {
    const [value, setValue] = useState([
        {
            key: '0',
            symbol: '',
        },
        {
            key: '1',
            symbol: '',
        },
        {
            key: '2',
            symbol: '',
        },
        {
            key: '3',
            symbol: '',
        },
        {
            key: '4',
            symbol: '',
        },
        {
            key: '5',
            symbol: '',
        },
        {
            key: '6',
            symbol: '',
        },
        {
            key: '7',
            symbol: '',
        },
        {
            key: '8',
            symbol: '',
        },
    ]);

    const [currentSymbol, setCurrentSymbol] = useState('O');
    const [winner, setWinner] = useState('');

    const handleOnPress = (item: Value) => {
        setValue(
            value.map(i =>
                i.key === item.key ? {...i, symbol: currentSymbol} : i,
            ),
        );
        setCurrentSymbol(currentSymbol === 'O' ? 'X' : 'O');
    };

    //reload button
    const reloadGame = () => {
        setCurrentSymbol('O');
        setWinner('');
        setValue([
            {
                key: '0',
                symbol: '',
            },
            {
                key: '1',
                symbol: '',
            },
            {
                key: '2',
                symbol: '',
            },
            {
                key: '3',
                symbol: '',
            },
            {
                key: '4',
                symbol: '',
            },
            {
                key: '5',
                symbol: '',
            },
            {
                key: '6',
                symbol: '',
            },
            {
                key: '7',
                symbol: '',
            },
            {
                key: '8',
                symbol: '',
            },
        ]);
    };

    //winning logic
    const checkWinner = () => {
        for (let i = 0; i < 3; i++) {
            let j = i * 3;
            if (
                value[j].symbol !== '' &&
                value[j].symbol === value[j + 1].symbol &&
                value[j + 1].symbol === value[j + 2].symbol
            ) {
                setWinner(currentSymbol);
                console.log('win');
                return;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (
                value[i].symbol !== '' &&
                value[i].symbol === value[i + 3].symbol &&
                value[i + 3].symbol === value[i + 6].symbol
            ) {
                setWinner(currentSymbol);
                console.log('win');
                return;
            }
        }
        if (
            value[0].symbol !== '' &&
            value[0].symbol === value[4].symbol &&
            value[4].symbol === value[8].symbol
        ) {
            setWinner(currentSymbol);
            console.log('win');
            return;
        }
        if (
            value[2].symbol !== '' &&
            value[2].symbol === value[4].symbol &&
            value[4].symbol === value[6].symbol
        ) {
            setWinner(currentSymbol);
            console.log('win');
            return;
        }
    };

    useEffect(() => {
        checkWinner();
    }, [value]);

    return (
        <View style={styles.boxContainer}>
            <View style={styles.subContainer}>
                <Text style={styles.subContainerTxt}>
                    Player {currentSymbol}'s turn
                </Text>
            </View>
            <View
                style={[
                    styles.subContainer,
                    winner === '' && {display: 'none'},
                ]}>
                <Text style={styles.subContainerTxt}>
                    Player {currentSymbol} wins
                </Text>
            </View>
            <View style={styles.gameBoard}>
                <FlatList
                    numColumns={3}
                    data={value}
                    keyExtractor={item => item.key}
                    renderItem={({item}) => (
                        <View>
                            <TouchableOpacity
                                style={styles.box}
                                disabled={item.symbol != '' || winner != ''}
                                onPress={() => handleOnPress(item)}>
                                <Text style={styles.boxTxt}>{item.symbol}</Text>
                            </TouchableOpacity>
                        </View>
                    )}></FlatList>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.subContainer}
                    onPress={reloadGame}>
                    <Text style={styles.subContainerTxt}>Reload game</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boxContainer: {
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#57606f',
        margin: 2,
    },
    boxTxt: {
        color: '#f1f2f6',
    },
    subContainer: {
        width: 312,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa502',
        elevation: 2,
        borderRadius: 5,
        marginVertical: 10,
    },
    subContainerTxt: {
        color: '#f1f2f6',
        fontSize: 20,
        fontWeight: 'bold',
    },
    gameBoard: {
        height: 312,
        backgroundColor: 'red',
    },
});

export default Game;
