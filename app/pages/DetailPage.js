import React, { Component } from 'react';
import { View } from 'react-native';
import { getDetail } from '../api/index';

export default class Home extends Component {
  componentDidMount() {
    const commentId = this.props.navigation.getParam('id');

    getDetail(commentId)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return <View />;
  }
}
