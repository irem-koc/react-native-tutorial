import React, {FunctionComponent} from 'react';
import {TextInput, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './Input.styles';
type InputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: (e: any) => void;
  type: string;
  maxLength?: number;
};
const Input: FunctionComponent<InputProps> = props => {
  const {styles} = useStyles(stylesheet);
  const {placeholder, value, onChange, onBlur, type, maxLength} = props;
  return (
    <View style={styles.mainContainer}>
      {type === 'text' ? (
        <TextInput
          onBlur={onBlur}
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
        />
      ) : (
        <TextInput
          maxLength={maxLength}
          keyboardType="numeric"
          onBlur={onBlur}
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
        />
      )}
    </View>
  );
};

export default Input;
