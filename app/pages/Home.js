import React, { Component } from 'react';

import { View, TextInput, Text, StyleSheet, Picker } from 'react-native';

export default class Home extends Component {
  state = {
    language: ''
  };

  render() {
    return (
      <View style={styles.block}>
        <View style={styles.flexContainer}>
          <Text>请选择事故等级</Text>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => this.setState({ language: itemValue })}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={styles.flexContainer}>
          <Text>请选择事故等级</Text>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => this.setState({ language: itemValue })}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ marginRight: 5 }}>发现人</Text>
          <TextInput placeholder="请输入发现人" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ marginRight: 5 }}>发现部位</Text>
          <TextInput placeholder="请输入发现部位" />
        </View>
      </View>
    );
  }
}

const paddingCommon = {
  paddingHorizontal: 8,
  paddingVertical: 16
};
const borderCommon = {
  borderRadius: 4,
  borderWidth: 1,
  borderColor: '#f1f4f6'
};

const betweenContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  padding: 5,
  marginBottom: 10
};

const styles = StyleSheet.create({
  container: {
    ...paddingCommon
  },
  block: {
    ...paddingCommon,
    marginBottom: 10,
    backgroundColor: '#f1f4f6',
    ...borderCommon
  },
  float: {
    position: 'absolute',
    bottom: 24,
    right: 24
  },
  flexContainer: {
    ...betweenContainer,
    justifyContent: 'space-between'
  },
  inputContainer: {
    ...betweenContainer
  }
});
