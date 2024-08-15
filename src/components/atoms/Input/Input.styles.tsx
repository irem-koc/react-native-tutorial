import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  mainContainer: {
    // flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 8,
  },
  input: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
}));
export default stylesheet;
