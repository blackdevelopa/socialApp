import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../Styles';
import {Ionicons} from '@expo/vector-icons';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Top Followers</Text>
          <Ionicons name="ios-search" size={25}/>
        </View>
        <View style={styles.hero}>
          <Text style={styles.heroTextHeavy}>Weekly</Text>
          <Text style={styles.heroTextFaint}>Monthly</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.touch}>
            <Text style={styles.touchText}>01</Text>
            <Image style={styles.touchImg} source={{uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}}/>
            <View>
              <Text style={styles.touchName}>Seymour Wright</Text>
              <Text>Aspiring Alpinist</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.touch1}>
            <Text style={styles.touchText}>01</Text>
            <Image style={styles.touchImg} source={{uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}}/>
            <View>
              <Text style={styles.touchName}>Seymour Wright</Text>
              <Text>Aspiring Alpinist</Text>
            </View>
          </View>
          <View style={styles.touch1}>
            <Text style={styles.touchText}>01</Text>
            <Image style={styles.touchImg} source={{uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}}/>
            <View>
              <Text style={styles.touchName}>Seymour Wright</Text>
              <Text>Aspiring Alpinist</Text>
            </View>
          </View>
          <View style={styles.touch1}>
            <Text style={styles.touchText}>01</Text>
            <Image style={styles.touchImg} source={{uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}}/>
            <View>
              <Text style={styles.touchName}>Seymour Wright</Text>
              <Text>Aspiring Alpinist</Text>
            </View>
          </View>
          <View style={styles.touch1}>
            <Text style={styles.touchText}>04</Text>
            <Image style={styles.touchImg} source={{uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}}/>
            <View>
              <Text style={styles.touchName}>Seymour Wright</Text>
              <Text>Aspiring Alpinist</Text>
            </View>
          </View>
      </View>
    )
  }
}