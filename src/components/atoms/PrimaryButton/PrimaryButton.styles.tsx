import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  mainContainer: {
    // width: '50%',
    backgroundColor: 'orange',
    color: 'red',
    padding: 10,
    borderRadius: 10,
  },
  placeholder: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
}));
export default stylesheet;
