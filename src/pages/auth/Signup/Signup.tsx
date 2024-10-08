import {Formik} from 'formik';
import React from 'react';
import {Text, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import Input from '../../../components/atoms/Input/Input';
import PrimaryButton from '../../../components/atoms/PrimaryButton/PrimaryButton';
import Container from '../../../components/molecules/Container/Container';
import InfoCard from '../../../components/molecules/InfoCard/InfoCard';
import stylesheet from './Signup.styles';

const Signup = () => {
  const {styles} = useStyles(stylesheet);

  return (
    <Container style={styles.mainContainer}>
      <InfoCard
        firstPlaceholder="Merhaba,"
        secondPlaceholder="Sen de ShopNow'a üye ol ayrıcalıklı dünyayı kaçırma!"
        icon="user"
      />

      <Formik
        initialValues={{nationalIdentityNo: '', phoneNumber: '', password: ''}}
        onSubmit={values => console.log(values, ' total signup values')}>
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
            <View>
              <Text style={styles.label}>Şifre</Text>
              <Input
                maxLength={11}
                type="password"
                placeholder="Şifre"
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
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
  );
};

export default Signup;
