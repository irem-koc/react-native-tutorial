import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './PrimaryButton.styles';
type PrimaryButtonProps = {
  placeholder: string;
  onClick: () => void;
  disabled: boolean;
};
const PrimaryButton: FunctionComponent<PrimaryButtonProps> = props => {
  const {styles} = useStyles(stylesheet);
  const {placeholder, onClick, disabled} = props;
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      disabled={disabled}
      onPress={onClick}>
      <Text style={styles.placeholder}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
