import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  Button
 } from 'react-native';

import GoalItem from './Components/GoalItem.js'; 
import GoalInput from './Components/GoalInput.js';

export default function App() {
  const [modelVisible, setModelVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const [count, setCount] = useState(0);
  let enteredGoalTextFormat = "";

  function startAddGoalHandler() {
    setModelVisible(true);
  }
  function endAddGoalHandler() {
    setModelVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
  
    
    enteredGoalTextFormat = `. ${enteredGoalText}`;
    setGoals(currentGoals => [...currentGoals, {text: enteredGoalTextFormat, id: Math.random().toString()}]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
     
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }




  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to Goal Tracker</Text>

      <GoalInput visible={modelVisible} onCancel={endAddGoalHandler} addGoal={addGoalHandler}  />
        <Button color={'#5e0acc'} title="Add New Goal" onPress={startAddGoalHandler}   />

      <View style={styles.middleContainer}>
          <FlatList data={goals} renderItem={(itemData) => {
            return(
              
              <GoalItem text={' 😀'+itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />
          );
        }} 
        keyExtractor={(item, index) => item.id}
        alwaysBounceVertical={false} />
   
         
      </View>
        
      <View style={styles.lowerContainer}>
      <Text>@2024 Goal Tracker. Owner: Gyan Bharti</Text>
      </View>
 
      <StatusBar style="auto" />
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#bbb',
   paddingTop: 40,
   paddingHorizontal: 16,
   width: '100%',
   height: '100%',
  },
  
  middleContainer: {
    flex: 5.5/8,
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'top',       // Center horizontally
    justifyContent: 'left',    // Center vertically
    padding: 10,
    backgroundColor: 'white',
   
  },
  lowerContainer: {
    flex: 0.5/8,
    flexDirection: 'row',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerText: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 50, 
    marginBottom: 10,
    color: 'black'
  },
    
 
  listTextHeader:{
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    padding: 0,
    paddingTop: 10,
    fontSize: 20,
  },
  
});
