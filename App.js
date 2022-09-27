import React, {useState, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native';
import { ResizeMode, Video } from 'expo-av'


import BottomField from './components/BottomField';
import Comment from './components/Comment'
import Top from './components/Top'

import {USERS} from './data/data';


export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback 
        onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
      >
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          isPlaying={false}
          useNativeControls={false}
          resizeMode='cover'
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>
      <BottomField/>
      <View style={styles.list}>
      <FlatList
        data={USERS}
        keyExtractor={item => item.userid}
        renderItem={({ item }) => (
          <Comment name={item.name} url={item.url} text={item.text} />
        )}
        showsVerticalScrollIndicator ={false}
        initialNumToRender={2}
        maxToRenderPerBatch={1}
      />
      </View>
      <Top/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  list: {
    width: '70%',
    height: 300,
    position: 'absolute',
    bottom: 105,
  }
});
