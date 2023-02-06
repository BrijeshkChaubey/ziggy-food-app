import {useNavigation} from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {Formcontainer} from '../components/FormCotainer';
import {Submmitbtn} from '../components/Submmitbtn';
import {Textinputcomp} from '../components/Textinputcomp';
import { auth } from '../database/firebase';
import { IsuserloginAction } from '../redux/action/action';
import {isValidemail, isValidobjfield, updateError} from '../utils/method';

export const Loginform = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const {email, password} = userinfo;

  
  const siginIn = () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch(IsuserloginAction({islogin:true}))
        })
        .catch(error => {
          console.log(error);
          Alert.alert('Email not matched');
        });
    } catch (error) {
      Alert.alert(error);
    }
  };
  
 
  const onHandleText = (value, fieldName) => {
    setUserinfo({...userinfo, [fieldName]: value});
  };

  const isValidform = () => {
    if (!isValidobjfield(userinfo))
      return updateError('Required all fields!', setError);

    if (!isValidemail(email))
      return updateError('Email is incorrect!', setError);
    if (!password.trim() || password.length < 8)
      return updateError('Password should be valid!', setError);

    return true;
  };
  const Submitform = () => {
    if (isValidform()) {
        siginIn()
      
      //    navigation.navigate("home")
    }
  };
  return (
    <Formcontainer>
      {error ? (
        <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
          {error}
        </Text>
      ) : null}
      <Textinputcomp
        autoCapitalize="none"
        onChangeText={value => onHandleText(value, 'email')}
        value={email}
        label="Email"
        placeholder="example@gmail.com"
      />
      <Textinputcomp
        onChangeText={value => onHandleText(value, 'password')}
        value={password}
        label="Password"
        placeholder="*******"
        secureTextEntry
      />
      <Submmitbtn onPress={Submitform} tittle="Login" />
    </Formcontainer>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 50,

    fontWeight: 'bold',
  },
});
