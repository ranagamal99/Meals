import React from 'react'
import { Text, View , TouchableOpacity, StatusBar ,ScrollView ,Image ,StyleSheet} from 'react-native';
import { Surface, Stack , } from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Card, } from 'react-native-paper';


export function Meals({navigation}) {
    return (
     <View>
     <StatusBar backgroundColor='black' style="light" />
     
      <ScrollView>
      <Text style={styles.title}>Our Meals</Text>
        {/* start first meal */}
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
         
         
         <TouchableOpacity
         style={styles.btn}
          onPress={() => {
            navigation.push("LemonChicken");
         }}>
         <Text style={{color:'#fff',}}> Show More </Text>
         </TouchableOpacity>
        </Card.Content>
       </Card>
          
        {/* start second meal */}
       <Card style={styles.card}>
        <Card.Content>
        <View style={{alignItems:'center',}}>
        <Image
          style={{borderRadius:15,}}
          source={{uri :'https://img.delicious.com.au/EEJ2ozkv/del/2020/10/green-tea-noodles-with-sticky-sweet-chilli-salmon-140868-2.jpg',
          width:300,
          height:300,}}
        /></View>
               <View style={styles.contentName}>
         <Text style={styles.names}>Green tea noodles</Text>
         {/* <Text style={styles.price}>Price: 35$</Text> */}
        </View>
         
         <TouchableOpacity
         style={styles.btn}
          onPress={() => {
            navigation.push("GreenNoodles");
         }}>
         <Text style={{color:'#fff'}}> Show More </Text>
         </TouchableOpacity>
        </Card.Content>
       </Card>
          
        {/* start thrid meal */}
       <Card style={styles.card}>
        <Card.Content>
        <View style={{alignItems:'center',}}>
        <Image
          style={{borderRadius:15,}}

          source={{uri :'https://img.delicious.com.au/Bwlx7yoN/del/2017/06/asian-eggs-47827-2.jpg',
          width:300,
          height:300,
        }}
        /></View>
                <View style={styles.contentName}>
         <Text style={styles.names}>Asian eggs</Text>
         {/* <Text style={styles.price}>Price: 35$</Text> */}
        </View>
         
         <TouchableOpacity
         style={styles.btn}
          onPress={() => {
            navigation.push("AsianEggs");
         }}>
         <Text style={{color:'#fff'}}> Show More </Text>
         </TouchableOpacity>
        </Card.Content>
       </Card>
          
        {/* start fourth meal */}
       <Card style={styles.card}>
        <Card.Content>
        <View style={{alignItems:'center'}}>
        <Image
          style={{borderRadius:15,}}
          source={{uri :'https://img.delicious.com.au/Zg3Ofy7x/del/2021/09/sesame-beef-with-gochujang-udon-noodles-157974-2.jpg',
          width:300,
          height:300,}}
        /></View>
                <View style={styles.contentName}>
         <Text style={styles.names}>Sesame beef</Text>
         {/* <Text style={styles.price}>Price: 35$</Text> */}
        </View>
         
         <TouchableOpacity
         style={styles.btn}
          onPress={() => {
            navigation.push("SesameBeef ");
         }}>
         <Text style={{color:'#fff'}}> Show More </Text>
         </TouchableOpacity>
        </Card.Content>
       </Card>
          
        {/* start last meal */}
       <Card style={styles.card}>
        <Card.Content>
        <View style={{alignItems:'center',}}>
        <Image
          style={{borderRadius:15,}}
          source={{uri :'https://img.delicious.com.au/FhRD4JI0/del/2020/12/iceberg-with-dried-oregano-dressing-and-creamy-sheeps-milk-cheese-143662-2.jpg',
          width:300,
          height:300,}}
        
         
        />
        </View>
        <View style={styles.contentName}>
         <Text style={styles.names}>Lemon Iceberg</Text>
        </View>
         
         <TouchableOpacity
         style={styles.btn}
          onPress={() => {
            navigation.push("Iceberg");
         }}>
         <Text style={{color:'#fff'}}> Show More </Text>
         </TouchableOpacity>
        </Card.Content>
       </Card>
          
     
        
                
        </ScrollView>
        </View>
    );
}
//style for page


const styles = StyleSheet.create({
  title:{
    color:'#333' , 
    fontSize:30 , 
    fontWeight:'bold' , 
    textAlign:'center',
    borderRadius:5,
    marginTop:10,
  
  },
  card:{
    margin:20,
    backgroundColor:'#fff',
  
  },
 
  names:{
    textAlign:'center',
     fontSize:20,
    
      margin:10,
      
      fontWeight:'bold' , 
      
    },
  btn:{
    textAlign:'center',
    backgroundColor: "#78A206",
    padding: 15,
    marginHorizontal:100,
    margin:10,
    width: 110,
    borderRadius: 4,
    color: '#fff',
    fontSize:18,
    
   },


});