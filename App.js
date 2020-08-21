import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";
import List from "./src/components/List";
import AddText from "./src/components/AddText";
import AddModal from "./src/components/AddModal";

export default function App() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <View style={styles.container} >
    {!addModalOpen &&
    <>
            <Header />
            <List />
            <AddText setAddModalOpen={setAddModalOpen}/>
            <StatusBar style="auto" />
    </> }
    {addModalOpen &&
    <>
            <AddModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen}/>
    </> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
