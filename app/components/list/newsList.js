import React, { Component } from 'react';
const { View, Text, Image, ListView, StyleSheet, ActivityIndicator } = require('react-native');

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { getHeadlines } from '../../selector/index';
import { fetchHeadlines } from '../../actions/index';

class NewsList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    };
  }

  componentWillMount() {
    this.props.fetchHeadlines();
  }

  renderRow(article, sectionID, rowID) {
      return (
          <View style={styles.row}>
            <Image
              style={{height: 150}}
              source={{uri: article.urlToImage || ''}}
            />
              <Text style={styles.title}>
                  {article.title}
              </Text>
              <Text style={styles.description}>
                  {article.description}
              </Text>
          </View>
      )
  }

  render() {
    const headlines = this.props.getHeadlines;
    const articles = headlines.articles || [];
    if (headlines.loader) {
      return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    } else {
      return (
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource.cloneWithRows(articles)}
          renderRow={this.renderRow.bind(this)}
        />
      )
    }

  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 30,
      marginTop: 100
    },
    row:{
        borderBottomWidth: 1,
        borderColor: "#ddd",
        margin: 15,
        padding: 15,
        backgroundColor:"#f4f4f4"
    },

    title:{
        fontSize: 15,
        fontWeight: "600",
        marginTop: 10,
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchHeadlines: () => dispatch(fetchHeadlines())
  };
}

export const mapStateToProps = createStructuredSelector({
  getHeadlines: getHeadlines()
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
