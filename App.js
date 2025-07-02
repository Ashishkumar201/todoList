import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Task from './components/Task'
import { useState } from 'react';

export default function App() {
  const [task,setTask]=useState();
  const [taskitems,settaskitems]=useState([]);
  
  const handleAddTask=() =>{

    // console.log('test');
    settaskitems([...taskitems,task])
    setTask(null);
  }
  const completetask=(index)=>
  {
    let itemsCopy=[...taskitems];
    itemsCopy.splice(index,1);
  }
  

  
  return (
    <View style={styles.container}>
      <View style={styles.taskwrapper}>
        <Text styles={styles.sectiontitle}>Today's Tasks</Text>
        <ScrollView style={styles.items}>
          {
            taskitems.map((item, index)=>{
              return (<Task key={index} text={item}/>);

            })

          }
          
          
        </ScrollView>
      </View>
      <KeyboardAvoidingView 
      behavior='padding'
      style={styles.writeTaskwrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)} />

        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View  style={styles.addwrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#E8EAED'

    
  },
  taskwrapper: {
    paddingTop:80,
    paddingHorizontal:20,
    marginBottom: 30,

  },
  
  sectiontitle: {
    fontSize:24, 
    fontWeight:'bold',
    
  },
  
  items: 
  {
    marginTop:30,
    height:'80%', 
  },

  writeTaskwrapper:
  {
    
    position:'absolute',
    bottom: 40,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },

  input:
  {
    paddingVertical:'15',
    width:'250',
    paddingHorizontal:'15',
    backgroundColor:'white',
    borderRadius:60,
    borderColor:'#c0c0c0'
  },

  addwrapper:
  {
    width:50,
    height:50,
    backgroundColor:'#FFF',
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:60,
    borderColor:'#c0c0c0'

  },
  addText:{
    
  },
});

