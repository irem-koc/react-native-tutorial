import {Formik} from 'formik';
import React from 'react';
import {Text, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import Input from '../../../components/atoms/Input/Input';
import PrimaryButton from '../../../components/atoms/PrimaryButton/PrimaryButton';
import Container from '../../../components/molecules/Container/Container';
import InfoCard from '../../../components/molecules/InfoCard/InfoCard';
import {LocalStorage} from '../../../providers';
import Signup from '../Signup/Signup';
import stylesheet from './Login.styles';

const Login = () => {
  const {styles} = useStyles(stylesheet);

  return LocalStorage.getItem('accessToken') ? (
    <Container style={styles.mainContainer}>
      <InfoCard
        firstPlaceholder="Merhaba,"
        secondPlaceholder="ShopNow'a giriş yap ayrıcalıklı dünyayı kaçırma!"
        icon="login"
      />

      <Formik
        initialValues={{nationalIdentityNo: '', phoneNumber: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.label}>T.C. Kimlik Numarası</Text>
              <Input
                maxLength={11}
                type="nationalIdentityNo"
                placeholder="T.C. Kimlik Numarası"
                onChange={handleChange('nationalIdentityNo')}
                onBlur={handleBlur('nationalIdentityNo')}
                value={values.nationalIdentityNo}
              />
            </View>

            <View>
              <Text style={styles.label}>Telefon Numarası</Text>
              <Input
                maxLength={11}
                type="phone"
                placeholder="Telefon Numarası"
                onChange={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
              />
            </View>

            <PrimaryButton
              onClick={handleSubmit}
              placeholder="Giriş Yap"
              disabled={false}
            />
          </View>
        )}
      </Formik>
    </Container>
  ) : (
    <Signup />
  );
};

export default Login;
