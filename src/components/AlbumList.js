import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return new Error('Problem getting data from url');
      })
      .then(data => {
        this.setState({ albums: data });
      })
      .catch(error => {
        console.log(`There has been a problem with your fetch operation: ${error.message}`);
      });
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
