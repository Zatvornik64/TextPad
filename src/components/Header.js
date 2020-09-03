import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>ПРОСТОЙ СПИСОК ДЕЛ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  text: {
    fontSize: 20,
  }
});
