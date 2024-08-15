import React from 'react';
import {View as NativeView, ViewProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import stylesheet from './Container.styles';

const Container = (props: ViewProps) => {
  const {style, ...rest} = props;
  let propsStyle: any = {};
  const {styles} = useStyles(stylesheet);

  if (Array.isArray(style)) {
    propsStyle = style.reduce((accumulator, item) => {
      return {...(accumulator as object), ...(item as object)};
    }, {});
  } else {
    propsStyle = style || {};
  }

  return <NativeView {...rest} style={[styles.default, propsStyle]} />;
};

export default Container;
