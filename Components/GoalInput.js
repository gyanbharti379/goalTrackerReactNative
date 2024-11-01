import {View,Text,TextInput,Button,StyleSheet,Modal,Image} from 'react-native'
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    goalInputHandler(enteredGoalText);
    props.addGoal(enteredGoalText);
    // setEnteredGoalText('');

  }

  return (
    <Modal visible={props.visible} animationType="slide">

      <View style={styles.upperContainer}>
          <View>
              <Image style={styles.img} source={require('../assets/goal.jpg')} />
          </View>
          <View>
              <TextInput style={styles.textInput} type="text" placeholder="Enter your goal" onChangeText={goalInputHandler} />
          </View>
          <View style={styles.buttonContainer}>
              <Button style= {styles.btnAdd} title="Add Goal" onPress={addGoalHandler} />
              <Button style={styles.btnCancel} title="Cancel" onPress={props.onCancel} />
          </View>
      
      </View>

    </Modal>
  );
}

export default GoalInput

const styles = StyleSheet.create({
    upperContainer: {
        flex: 2/8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'top',
        width: '50',
        height: '50',
        backgroundColor: '#FA1257',
      },
      buttonContainer: {
        flexDirection: 'row',
        width: 100,  
        justifyContent: 'center',
      },
      btnAdd:{
        flexDirection: 'row',
        width: 100,
      
 
      },
      btnCancel:{
        flexDirection: 'row',
        width: 100,
      
        
      },
    
    textInput: {
        flexDirection: 'row',
        marginTop: 5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        paddingBottom: 5,
        fontSize: 20,
    
      },
       
      img:{
        width: 200,
        height: 200, 
        marginTop: 100,
      },
      

});
