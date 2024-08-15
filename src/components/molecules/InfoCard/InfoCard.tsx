import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './InfoCard.styles';
type InfoCardProps = {
  firstPlaceholder: string;
  secondPlaceholder: string;
  icon?: string;
};
const InfoCard: FunctionComponent<InfoCardProps> = props => {
  const {firstPlaceholder, secondPlaceholder, icon} = props;
  const {styles} = useStyles(stylesheet);
  return (
    <LinearGradient
      colors={['orange', 'red']}
      style={styles.mainContainer}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.leftSection}>
        <Text style={styles.firstPlaceholder}>{firstPlaceholder}</Text>
        <Text style={styles.secondPlaceholder}>{secondPlaceholder}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text>{icon}</Text>
      </View>
    </LinearGradient>
  );
};

export default InfoCard;
