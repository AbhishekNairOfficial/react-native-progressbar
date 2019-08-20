import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = props => {
  const { percentage, primary, secondary, style } = props;
  const styles = StyleSheet.create({
    container: {
      height: 10,
      backgroundColor: secondary,
      width: '100%',
      borderRadius: 6
    },
    progress: {
      backgroundColor: primary,
      width: `${percentage}%`,
    }
  });
  return (
    <View style={{...styles.container,...style}}>
      <View style={{...styles.progress,...styles.progress}} />
    </View>
  );
};

export default ProgressBar;
