import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Balance = ( { balance, expense } ) => {
  return (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{balance}</Text>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expenses}>{expense}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -28,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle: {
        fontSize: 20,
        color: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    currencySymbol: {
        color: '#DADADA',
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }
})

export default Balance;