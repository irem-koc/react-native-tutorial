import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 24, // Ekranın yanlarından boşluk bırakır.
  },
  formContainer: {
    // flex: 1,
    justifyContent: 'center', // Formu ekranın ortasına hizalar.
    paddingVertical: 50, // Form elemanları arasında dikey boşluk bırakır.
    gap: 24, // Form elemanları arasındaki boşluğu artırır.
  },
  label: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    marginBottom: 8, // Label ve input arasında boşluk bırakır.
  },
}));
export default stylesheet;
