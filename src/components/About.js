import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert, Text } from 'react-native';

export function About({setAboutOpen}) {

  return (
      <View style={styles.about}>
          <Text style={styles.text}>
              Это приложение делалось "для себя". Автор: Михаил Пошивалов. 
              Если это приложение слуйчайно к Вам попало и у Вас 
              есть пожелания и замечания, можете написать автору на почту
              zatvornik@inbox.ru или позвоните ему и скажите об этом!
          </Text>
          <View style={styles.button}>
            <Button
                title="Назад"
                onPress={() => {setAboutOpen(false)}}
                />
          </View>
      </View>
  );
}
const styles = StyleSheet.create({
  about: {
    flex: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      paddingVertical: 50,
      paddingHorizontal: 30,
      fontSize: 20,
      justifyContent: 'center',
      textAlign: 'center',
  },
  button: {
      width: '80%',
  }
});
