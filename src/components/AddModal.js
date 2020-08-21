      import React from 'react';
      import { StyleSheet, Text, View, Modal, Button } from 'react-native';

      export default function List(props) {
        return (
          <View style = {styles.container}>
                  <Modal animationType = {"slide"} transparent = {false}
                      visible = {props.addModalOpen}
                      onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
                      {/*All views of Modal*/}
                      {/*Animation can be slide, slide, none*/}
                      <View style = {styles.modal}>

                        <Text style = {styles.text}>Modal is open!</Text>
                        
                        <Button title="Сохранить" onPress = {() => {
                            props.setAddModalOpen(false)
                          }}/>
                      </View>
                  </Modal>

                </View>
        );
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
          marginTop:30
        },
        modal: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#00ff00',
          padding: 100
        },
        text: {
          color: '#3f2949',
          marginTop: 10
        }
      });
