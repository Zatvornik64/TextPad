import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export function Header({ setAboutOpen }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>ПРОСТОЙ БЛОКНОТ</Text>
      <TouchableOpacity 
        style={styles.icon}
        onPress={() => {
          setAboutOpen(true);
        }}
      >
        <FontAwesome5 name="question-circle" size={22} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  text: {
    fontSize: 20,
    paddingVertical: 10,
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 25,
  }
});
