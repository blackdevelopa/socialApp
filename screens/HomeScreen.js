import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    )
  }
}