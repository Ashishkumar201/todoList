import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskwrapper}>
        <Text styles={styles.sectiontitle}>Today's Tasks</Text>
        <View style={styles.items}>
        
          <Task text="Task1"/>
          <Task  text="Task2"/>
        </View>
      </View>
    

    <KeyboardAvoidingView
    behavior={platform.OS==='android'? "padding":"height"} style={styles.writetaskwrapper}>

      <TextInput style={input} placeholder='write a task'></TextInput>

      <TouchableOpacity>
        <View style={styles.addwrapper}>
          <Text style={styles.
            addText}>+</Text>
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

  },
  
  sectiontitle: {
    fontSize:24, 
    fontWeight:'bold',
    
  },
  
  items: 
  {marginTop:30 },
});

