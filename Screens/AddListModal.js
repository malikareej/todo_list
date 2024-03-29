import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import color from '../Color'
import { useState } from "react";

export default function AddListModal(props) {
   const backgroundColors = ["#5CD859", "#24A6D9", "#595BD9", "#8022D9", "#D159DB", "#D85963", "#D88559"];

  const [changeState, setChangeState] = useState({
    name: "",
    color: backgroundColors[0]
  });

  const createTodo = () => {
    const {name, color} = changeState

    // const list = {name, color};
    // props.addList(list);
    tempData.push({
      name,
      color,
      todo: []
    })
    setChangeState({name: ""})
    props.closeModal()
    console.log(tempData)
  }


  return (
    <KeyboardAvoidingView style={styles.container} behavior= "padding">
      <TouchableOpacity style={{position: "absolute", top: 25, right: 32}} onPress={() => props.closeModal()}>
          <AntDesign name="close" size={24} color={color.black}/>
      </TouchableOpacity>
      
      <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
          <Text style={styles.title}>Create Todo List</Text>

          <TextInput style={styles.input} placeholder="Add List Name"
          onChangeText={(text) => setChangeState(text)}/>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 13}}>
          {backgroundColors.map(color => (
            <TouchableOpacity key={color} style={[styles.colorSelect, { backgroundColor: color }]}
              onPress={() => setChangeState(color)}
            />
          )
          )}
          </View>
          <TouchableOpacity style={[styles.create, {backgroundColor: changeState}]} onPress={() => createTodo()}>
              <Text style={{color: color.black, fontWeight: "700"}}>Create List</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      title: {
        fontSize: 24,
        fontWeight: "800",
        color: color.black,
        alignSelf: 'center',
        marginBottom: 16
      },

      input: {
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: color.blue,
          borderRadius: 6,
          height: 50,
          marginTop: 8,
          paddingHorizontal: 16,
          fontSize: 18
      },

      create: {
          marginTop: 15,
          height: 50,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center'
      },

      colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
      }
})