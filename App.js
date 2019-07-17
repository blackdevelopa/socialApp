import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Foundation, AntDesign} from '@expo/vector-icons';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.header}>
          <View>
            <Text>Top Followers</Text>
          </View>
        </View>
        <View>
          <AntDesign name="search1"/>
        </View>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class PictureScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home:{
  screen: HomeScreen,
    navigationOptions:{ 
      tabBarOptions:{
        showLabel : false,
        }, 
      tabBarIcon:({focused})=>(
        <View>
          <Foundation name="home" color={'black'} size={30}/>
        </View> 
      )  
  }  },
  Search: {
    screen: SearchScreen,
      navigationOptions:{ 
        tabBarOptions:{
          style: {
            backgroundColor: 'red'
          },
          showLabel : false,
          },
        tabBarIcon:({focused})=>(
          <View>
            <AntDesign name="search1" color={'black'} size={30}/>
          </View> 
        ),  
    },  
  },
  Picture: {
    screen: PictureScreen,
      navigationOptions:{ 
        tabBarOptions:{
          showLabel : false,
          },
        tabBarIcon:({focused})=>(
          <View>
            <AntDesign name="picture" color={'black'} size={30}/>
          </View> 
        ),  
    },  
  },
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
