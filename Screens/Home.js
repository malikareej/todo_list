import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import color from '../Color';
import TodoLists from './TodoLists'
import tempData from '../tempData'
import React, { useState } from "react";
import AddListModal from './AddListModal';


export default function Home() {
  const [todo, setTodo] = useState(false);

  const toggleAddTodoModal = () => {
    setTodo(true);
  };

  const closeModal = () => {
    setTodo(false);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" 
      visible={todo}
      onRequestClose={() => toggleAddTodoModal()}>
        <AddListModal closeModal={() => closeModal()}/>
      </Modal>
      <View style={{flexDirection: "row"}}>
      <View style={styles.divider}/>
      <Text style={styles.title}>Todo Lists
      </Text>
      <View style={styles.divider}/>
      </View>
      <View style={{marginVertical: 48}}>
        <TouchableOpacity style={styles.addlist} onPress={() => toggleAddTodoModal()}>
          <AntDesign name="plus" size={36} color={color.blue}/>
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>
      <View style={{height: 245, paddingLeft: 32}}>
        <FlatList data={tempData}
          keyExtractor={item => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TodoLists list={item}/>
          )}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    divider: {
      backgroundColor: color.lightblue,
      height: 1,
      flex: 1,
      alignSelf: "center"
    },
    
    title: {
      fontSize: 35,
      fontWeight: "800",
      color: color.black,
      paddingHorizontal: 24
    },

    addlist: {
      borderWidth: 2,
      borderColor: color.lightblue,
      borderRadius: 4,
      padding: 10,
      alignItems: "center",
      justifyContent: "center"
    },

    add: {
      color: color.blue,
      fontWeight: "600",
      fontSize: 14,
      marginTop: 8,
      marginLeft: 4
    }
  });