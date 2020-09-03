      import React, { useState } from 'react';
      import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

      export function Editor(props) {
        const [value, setValue] = useState(props.value || null);
        const valueHandler = (text) => setValue(text);

        return (
            <View style={styles.editor}>
              <TextInput style = {styles.input}
                //underlineColorAndroid = "transparent"
                multiline={true}
                placeholder = "Введите текст"
                placeholderTextColor = "#9a73ef"
                //autoCapitalize = "none"
                value={value}
                onChangeText = {valueHandler}/>
              <View style={styles.buttons}>
                <View style={styles.button}>
                <Button
                    title="Назад"
                    onPress={() => {
                      props.setEditorOpen(false);
                      props.setSelected(null);
                    }}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Сохранить"
                    onPress={() => {
                      if (!value) {Alert.alert(
                          "Ошибка",
                          "Запись не должна быть пустой",
                          [
                            {
                              text: "Хорошо",
                              style: "cancel"
                            },
                          ],
                          { cancelable: false }
                        )}
                      else {
                        props.value ? props.editTask(value) : props.addTask(value);
                        props.setEditorOpen(false);
                        props.setSelected(null);
                      }
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
