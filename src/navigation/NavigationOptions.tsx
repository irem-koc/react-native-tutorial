/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {HeaderBackButton} from '@react-navigation/elements';
import {StackNavigationOptions} from '@react-navigation/stack';
import {StyleSheet, Text} from 'react-native';
import RootNavigation from '../providers/RootNavigation';
export const headerOptions: StackNavigationOptions = {
  headerTitle: navigation => {
    return <Text style={{fontWeight: 'bold'}}>{navigation.children}</Text>;
  },
  headerTitleAlign: 'center',
};
export const pageHeaderOptions: StackNavigationOptions = {
  ...headerOptions,
  headerLeft: () => {
    return (
      <HeaderBackButton
        tintColor={'black'}
        onPress={() => RootNavigation.goBack()}
        label="        "
        style={styles.backButton}
      />
    );
  },
};
const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: 16,
  },
  button: {
    height: '70%',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
