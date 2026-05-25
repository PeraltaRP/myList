import React from 'react';

import {
  Text,
  View,
  Image
} from 'react-native';
import {styles} from './styles';
export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Text>Top</Text>
      </View>
      <View>
        <Text>Middle</Text>styles
      </View>
      <View>
        <Text>Bottom</Text>
      </View>
    </View>

  );
}