import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import UploadScreen from './screens/UploadScreen';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import {Ionicons, AntDesign, MaterialIcons} from '@expo/vector-icons';

export function App() {
  return (
    <View>
      <HomeScreen />
      <SearchScreen />
      <ProfileScreen />
      <UploadScreen />
    </View>
  )
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon:({focused})=> (
        <Ionicons name="md-home" size={25} />
      )
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon:({focused})=> (
        <Ionicons name="ios-search" size={25} />
      )
    }
  },
  Upload: {
    screen: UploadScreen,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon:({focused})=> (
        <AntDesign name="upload" size={25} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon:({focused})=> (
        <MaterialIcons name="account-circle" size={25} />
      )
    }
  }
}, {
  initialRouteName: 'Profile'
})

export default createAppContainer(TabNavigator);