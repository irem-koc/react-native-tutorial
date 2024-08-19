import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  mainContainer: {
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  firstPlaceholder: {
    fontSize: 25,
    color: 'white',
    fontWeight: '700',
    marginBottom: 8,
  },
  secondPlaceholder: {
    fontSize: 14,
    color: 'white',
  },
  leftSection: {
    width: '70%',
    justifyContent: 'center',
    padding: 0,
  },
  rightSection: {
    // flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
export default stylesheet;
