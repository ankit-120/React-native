import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';

import {currencyByRupee} from './constants';
import Button from './components/Button';

const App = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [touchedCurrency, setTouchedCurrency] = useState('');

    const buttonPressed = (item: Currency) => {
        if (!input) {
            return Snackbar.show({
                text: 'Enter a value to convert',
                backgroundColor: '#2f3542',
                textColor: '#f1f2f6',
            });
        }

        const inputAmount = parseFloat(input);
        if (isNaN(inputAmount)) {
            return Snackbar.show({
                text: 'Enter a valid input',
                backgroundColor: '#2f3542',
                textColor: '#f1f2f6',
            });
        } else {
            const convertedValue = item.value * inputAmount;
            setResult(`${item.symbol} ${convertedValue.toFixed(2)}`);
            setTouchedCurrency(item.name);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.symbol}>₹</Text>
                <TextInput
                    style={styles.input}
                    value={input}
                    placeholder="Enter value in Rupees"
                    onChangeText={setInput}
                    keyboardType="number-pad"
                    maxLength={14}
                />
            </View>
            <View>
                {result && (
                    <View>
                        <Text>{result}</Text>
                    </View>
                )}
            </View>
            <View style={styles.bottomContainer}>
                <FlatList
                    numColumns={3}
                    data={currencyByRupee}
                    keyExtractor={item => item.name}
                    renderItem={({item}) => (
                        <Pressable
                            style={[
                                styles.button,
                                touchedCurrency === item.name &&
                                    styles.selected,
                            ]}
                            onPress={() => buttonPressed(item)}>
                            <Button {...item} />
                        </Pressable>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    symbol: {
        marginRight: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#2f3542',
        borderRadius: 10,
        padding: 10,
        width: 300,
    },
    bottomContainer: {},
    button: {
        height: 60,
        margin: 12,
        width: 110,
        borderRadius: 10,
        backgroundColor: '#1e90ff',
        color: '#ffffff',
    },
    selected: {
        backgroundColor: '#5352ed',
    },
});

export default App;
