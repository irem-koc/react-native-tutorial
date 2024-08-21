import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },

  formContainer: {
    // flex: 1,
    justifyContent: 'center',
    paddingVertical: 50,
    gap: 24,
  },
  label: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    marginBottom: 8,
  },
}));
export default stylesheet;
