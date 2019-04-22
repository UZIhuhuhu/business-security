import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getDetail } from '../api/index';

export default class Home extends Component {
  state = {
    detail: {}
  };

  componentDidMount() {
    const commentId = this.props.navigation.getParam('id');

    getDetail(commentId)
      .then(res => res.json())
      .then(res => {
        this.setState({ detail: res.detail });
      });
  }

  render() {
    const {
      place,
      loss,
      text,
      author,
      programmingCode,
      level
    } = this.state.detail;

    return (
      <View style={styles.block}>
        <ScrollView>
          <View style={styles.flexContainer}>
            <Text>请选择事故等级</Text>
            <Text style={{ color: '#5fbdaa' }}>{level}</Text>
          </View>
          <View style={styles.flexContainer}>
            <Text>请选择事故类型</Text>
            <Text style={{ color: '#5fbdaa' }}>{programmingCode}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ marginRight: 5 }}>发现人</Text>
            <Text style={{ color: '#5fbdaa' }}>{author}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ marginRight: 5 }}>发现部位</Text>
            <Text style={{ color: '#5fbdaa' }}>{place}</Text>
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
              <Text style={{ color: '#000000', height: 100, padding: 10 }}>
                {text}
              </Text>
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
              <Text style={{ color: '#000000', height: 100, padding: 10 }}>
                {loss}
              </Text>
            </View>
          </View>
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
    justifyContent: 'space-between',
    padding: 10
  },
  inputContainer: {
    ...betweenContainer,
    padding: 10
  }
});
