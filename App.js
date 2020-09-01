import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";
import List from "./src/components/List";
import AddButton from "./src/components/AddButton";
import Editor from "./src/components/Editor";

export default function App() {
  const [editorOpen, setEditorOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { id: new Date("2020-08-07T13:42:17.975Z").toString(),
      title: "Проверка 1",
    },
    { id: new Date("2020-08-09T13:42:17.975Z").toString(),
      title: "Проверка 2",
    },
    { id: new Date("2020-08-12T13:42:17.975Z").toString(),
      title: "Проверка 3",
    },
  ]);
  const addTask = (text) => {
    const newTask = [{
      id: new Date().toString(),
      title: text,
    }]
    setTasks([...tasks, ...newTask])
  }

  return (
    <View style={styles.container} >
      
    {!editorOpen &&
    <>
            <Header />
            <List tasks={tasks}/>
            <AddButton setEditorOpen={setEditorOpen}/>
    </> }
    {editorOpen &&
    <>
            <Header />
            <Editor setEditorOpen={setEditorOpen} addTask={addTask}/>
    </> }
      <StatusBar style="auto" />
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
