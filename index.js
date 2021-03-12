import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = props => {
  const { percentage, primary, secondary, style, primaryStyles } = props;
  const styles = StyleSheet.create({
    container: {
      height: 10,
      backgroundColor: secondary,
      width: '100%',
      borderRadius: 6,
      height: 10
    },
    progress: {
        backgroundColor: primary,
        width: `${percentage}%`,
        height: 10
    }
  });
  return (
    <View style={{...styles.container,...style}}>
      <View style={{...styles.progress,...primaryStyles}} />
    </View>
  );
};

export default ProgressBar;
