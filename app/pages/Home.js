import React, { Component } from 'react';

import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import { createCheck } from '../api/index';

export default class Home extends Component {
  state = {
    level: '',
    place: '',
    loss: '',
    text: '',
    author: '',
    programmingCode: ''
  };

  handlePersonInput = ({ nativeEvent: { text } }) => {
    this.setState({ author: text });
  };

  handlePlaceInput = ({ nativeEvent: { text } }) => {
    this.setState({ place: text });
  };

  handleLossInput = ({ nativeEvent: { text } }) => {
    this.setState({ loss: text });
  };

  handleIntroInput = ({ nativeEvent: { text } }) => {
    this.setState({ text });
  };

  hanldeSubmit = () => {
    const { level, programmingCode, place, loss, text, author } = this.state;
    createCheck(text, programmingCode, loss, author, level, place)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <View style={styles.block}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior="position"
            enabled
            // contentContainerStyle={styles.container}
          >
            <View style={styles.flexContainer}>
              <Text>请选择事故等级</Text>
              <Picker
                selectedValue={this.state.language}
                style={{ height: 50, width: 100 }}
                onValueChange={itemValue => this.setState({ level: itemValue })}
              >
                <Picker.Item label="一般" value="一般" />
                <Picker.Item label="紧急" value="紧急" />
                <Picker.Item label="加急" value="加急" />
              </Picker>
            </View>
            <View style={styles.flexContainer}>
              <Text>请选择事故类型</Text>
              <Picker
                selectedValue={this.state.language}
                style={{ height: 50, width: 100 }}
                onValueChange={itemValue =>
                  this.setState({ programmingCode: itemValue })
                }
              >
                <Picker.Item label="前端抛错" value="前端抛错" />
                <Picker.Item label="后端数据库" value="后端数据库" />
                <Picker.Item label="nginx代理" value="nginx代理" />
              </Picker>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ marginRight: 5 }}>发现人</Text>
              <TextInput
                placeholder="请输入发现人"
                onChange={this.handlePersonInput}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ marginRight: 5 }}>发现部位</Text>
              <TextInput
                placeholder="请输入发现部位"
                onChange={this.handlePlaceInput}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text>事故描述</Text>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  marginTop: 5,
                  height: 100
                }}
              >
                <TextInput
                  placeholder="请输入描述内容"
                  onChange={this.handleIntroInput}
                />
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text>损失情况</Text>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  marginTop: 5,
                  height: 100
                }}
              >
                <TextInput
                  placeholder="请输入损失情况"
                  onChange={this.handleLossInput}
                />
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Button
                title="上报"
                color="#5fbdaa"
                onPress={this.hanldeSubmit}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
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
