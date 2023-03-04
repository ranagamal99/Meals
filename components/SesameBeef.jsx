import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Button, Card, List } from 'react-native-paper';
import { AppBar, IconButton,ListItem } from '@react-native-material/core';






export function SesameBeef({navigation}) {

   
//   const [Meals, setMeals] = useState([])
  

// async function getData(setMeals) {
// 		let {data} = await axios.get("http://192.168.1.14:5000/meals")
// 		// console.log(res)
// 		setMeals(data )
	
// 	}
//   useEffect(() => {
      
//     getData(setMeals )
//     },[])
// console.log(Meals)

 
//let data = Meals[1]
//console.log(data)

  return (
    <View >
      <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <View style={{alignItems:'center',}}>
        <Image
          style={{borderRadius:15,}}
          source={{uri :'https://img.delicious.com.au/FhRD4JI0/del/2020/12/iceberg-with-dried-oregano-dressing-and-creamy-sheeps-milk-cheese-143662-2.jpg',
          width:300,
          height:300,}}
        /></View>
         
         <View style={styles.contentName}>
         <Text style={styles.names}>Sesame beef</Text>
        </View>
        <Text style={styles.title}>Ingredient</Text>
        <View >

    
    
    
  </View>
  <Text style={styles.title}>Description</Text>
 
         
        </Card.Content>
       </Card>
    
       </ScrollView>
    </View>
  )

      }
const styles = StyleSheet.create({

  card:{
    marginTop: 15,
    marginBottom:15,
    padding: 10,
    backgroundColor:"white"
  },
  names:{
    textAlign:'center',
     fontSize:20,
    
      margin:10,
      
      fontWeight:'bold' , 
      
    },
    title:{
        textAlign:'center',
         fontSize:20,
         color:'#78A206',
          margin:10,
          
          fontWeight:'bold' , 
          
        },
})
