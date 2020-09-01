      import React, { useState } from 'react';
      import { StyleSheet, TextInput, View, Button } from 'react-native';

      export default function Editor(props) {
        const [value, setValue] = useState(props.value || '');
        const valueHandler = (text) => setValue(text);

        return (
            <View style={styles.editor}>
              <TextInput style = {styles.input}
                //underlineColorAndroid = "transparent"
                multiline={true}
                placeholder = "Введите текст"
                placeholderTextColor = "#9a73ef"
                //autoCapitalize = "none"
                onChangeText = {valueHandler}/>
              <View style={styles.buttons}>
                <View style={styles.button}>
                  <Button
                    title="Сохранить"
                    onPress={() => {
                      props.addTask(value);
                      props.setEditorOpen(false);
                    }}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Назад"
                    onPress={() => {
                      props.setEditorOpen(false);
                    }}
                  />
                  </View>
              </View>
            </View>
        );
      }
      const styles = StyleSheet.create({
        editor: {
          flex: 7,
        },
        buttons: {
          flexDirection: 'row',
          justifyContent: 'space-around',
        },
        button: {
          width: '35%',
        },
        input: {
          margin: 15,
          padding: 10,
          borderColor: '#eee',
          borderWidth: 1
       },
      });
