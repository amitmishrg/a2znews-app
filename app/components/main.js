import React, { Component } from 'react';
const { View, WebView, Text, StatusBar } = require('react-native');
import { connect } from 'react-redux';

import NewsList from './list/newsList';

class Main extends Component {
  render() {
    return (
      <View>
        <NewsList />
      </View>
    )
  }
}


export default Main;
