import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Button, Card, List } from 'react-native-paper';
import { AppBar, IconButton,ListItem } from '@react-native-material/core';






export function LemonChicken({navigation}) {

   
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
          source={{uri :'https://img.delicious.com.au/XOkfl61w/del/2020/12/lemon-chicken-144144-1.jpg',
          width:300,
          height:300,}}
        /></View>
         
         <View style={styles.contentName}>
         <Text style={styles.names}>Lemon chicken</Text>
        </View>
        <Text style={styles.title}>Ingredient</Text>
        <View >

    
    <ListItem secondaryText="1 tsp cornflour"/>
    <ListItem secondaryText="1 tsp dark soy sauce"/>
    <ListItem secondaryText="Finely grated zest & juice 1/2 small lemon"/>
    <ListItem secondaryText="1 skinless chicken breast fillet"/>
    <ListItem secondaryText="1 capsicum, any colour, deseeded and sliced"/>
    <ListItem secondaryText="1 medium carrot (around 80g), trimmed and thinly sliced"/>
    <ListItem secondaryText="100g broccoli, cut into small florets"/>
    <ListItem secondaryText="150ml chicken stock (made with 1/2 Massel Plant Based Chicken Stock cube"/>
    <ListItem secondaryText="1.5cm slices"/>
    <ListItem secondaryText="4 spring onions, trimmed and thickly sliced"/>
    
  </View>
  <Text style={styles.title}>Description</Text>
  <View>
    <ListItem secondaryText="Mix the cornflour with the soy sauce and lemon juice in a small bowl."/>
    <ListItem secondaryText="Heat the oil in a large frying pan or wok over a high heat, add the chicken, capsicum, carrot and broccoli and stir-fry for 2–3 minutes, or until the chicken is lightly browned and the vegetables are beginning to soften."/>
    <ListItem secondaryText="Heat a lightly greased barbecue or chargrill pan over high heat. Grill the steak for 3-4 minutes on each side until cooked to your liking. Remove from the heat and rest, loosely covered with foil, for 10-12 minutes."/>
    <ListItem secondaryText="Sprinkle with grated lemon zest and serve with rice."/>

  </View>
         
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
