import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Avatar from '../assets/avatar.png';
import { getHistory } from '../api/index';

class CardItem extends Component {
  state = {
    discussionList: []
  };

  componentDidMount() {
    getHistory()
      .then(res => res.json())
      .then(res => {
        this.setState({
          discussionList: res.history
        });
      });
  }

  render() {
    const { discussionList } = this.state;
    const { navigation } = this.props;
    const createDiscussionItem = ({ author, text, id }, index) => (
      <TouchableHighlight
        key={index}
        onPress={() => {
          navigation.navigate('DetailPage', { id });
        }}
      >
        <View style={styles.surroundingItem} key={index}>
          <Image
            source={Avatar}
            style={{
              width: 45,
              height: 45
            }}
          />
          <View
            style={{
              marginLeft: 20,
              marginRight: 24,
              flex: 3
            }}
          >
            <Text style={styles.text}>{author}</Text>
            <Text style={styles.infoDetail}>{text || 'N/A'}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
    return (
      <View>
        {discussionList.map((item, index) => createDiscussionItem(item, index))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  surroundingItem: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingVertical: 28,
    paddingLeft: 20,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4
  },
  text: {
    color: '#5fbdaa',
    fontSize: 20,
    borderRadius: 4,
    overflow: 'hidden'
  },
  infoDetail: {
    fontSize: 12,
    color: '#98a6ad',
    lineHeight: 18
  }
});

export default withNavigation(CardItem);
