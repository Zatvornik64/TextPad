import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export function EmptyList({}) {

  return (
    <View style={styles.emptylist}>
      <Image
          resizeMode='center'
          source={require('../../assets/emptylist.jpg')}
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  emptylist: {
    flex: 10,
    //height: '83%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //borderStyle: 'solid',
    //borderTopWidth: 2,
    //borderTopColor: '#333',
  },
  
});
