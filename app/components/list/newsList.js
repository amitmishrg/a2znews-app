import React, { Component } from 'react';
const { View, Text, StatusBar } = require('react-native');

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// import { getHeadlines } from '../../selector/index';
import { fetchHeadlines } from '../../actions/index';

class NewsList extends Component {

  componentWillMount() {
    this.props.fetchHeadlines();
  }

  render() {
    return (
      <Text>List</Text>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchHeadlines: () => dispatch(fetchHeadlines())
  };
}

export const mapStateToProps = createStructuredSelector({
  //getHeadlines: 'ha'
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
