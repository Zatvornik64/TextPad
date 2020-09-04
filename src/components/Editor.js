      import React, { useState } from 'react';
      import { StyleSheet, TextInput, View, Button, Alert, Text } from 'react-native';

      export function Editor(props) {
        const [title, setTitle] = useState(props.title || null);
        const [text, setText] = useState(props.text || null);
        const titleHandler = (text) => setTitle(text);
        const textHandler = (text) => setText(text);

        return (
            <View style={styles.editor}>

              <Text style={styles.text}>Заголовок</Text>
              <TextInput style = {styles.input}
                //underlineColorAndroid = "transparent"
                multiline={false}
                placeholder = "Введите заголовок"
                placeholderTextColor = "#9a73ef"
                //autoCapitalize = "none"
                value={title}
                onChangeText = {titleHandler}/>

              <Text style={styles.text}>Текст записи</Text>
              <TextInput style = {styles.input}
                //underlineColorAndroid = "transparent"
                multiline={true}
                placeholder = "Введите текст"
                placeholderTextColor = "#9a73ef"
                //autoCapitalize = "none"
                value={text}
                onChangeText = {textHandler}/>
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
                      if (!title) {Alert.alert(
                          "Ошибка",
                          "Заголовок не должен быть пустой",
                          [
                            {
                              text: "Хорошо",
                              style: "cancel"
                            },
                          ],
                          { cancelable: false }
                        )}
                      else {
                        props.title ? props.editTask(title, text) : props.addTask(title, text);
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
          alignItems: 'center',
        },
        buttons: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        button: {
          width: '35%',
          marginHorizontal: 30,
        },
        input: {
          margin: 15,
          padding: 10,
          width: '90%',
          borderColor: '#eee',
          borderWidth: 1
       },
       text: {
         marginTop: 20,
       }
      });
