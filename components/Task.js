import React from "react";
import { Text,View, StyleSheet, TouchableOpacity } from "react-native";

const Task =(props) =>
{
    return (
        <View style={styles.item }>
            <View style={styles.itemleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
            </View>
            
                
            <Text style={styles.itemText}>{props.text}</Text>

            <View>
                <TouchableOpacity style={styles.circular}></TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        item:{
            backgroundColor: '#FFF' ,
            padding:15,
            borderRadius:10, 
            flexDirection:'row',
            alignItems:"center",
            justifyContent:"space-between",
            marginBottom:20  
        },
        itemleft:{
            flexDirection:'row',
            alignItems:"center",
            flexWrap:"wrap"
            
        },

        square:{
            width:24,
            height:24,
            backgroundColor: '#55BCF6',
            opacity: 0.4,
            borderRadius:5,
            marginRight:15,
        },
        itemText:{
            maxWidth:'80%',
            
        },
        circular:{
            width:13,
            height:13,
            borderColor:'#55BCF6', 
            borderWidth:2,
            borderRadius:5,
        },
        
    }
);


export default Task;