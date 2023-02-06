import React,{useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Formcontainer } from '../components/FormCotainer';
import { Submmitbtn } from '../components/Submmitbtn';
import { Textinputcomp } from '../components/Textinputcomp';
import { isValidemail, isValidobjfield, updateError } from '../utils/method';

import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../database/firebase';


export const Registerform = () => {

    const[userinfo,setUserinfo]=useState({
        fullname:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [error,setError]=useState('')
    const{ fullname,email,password,confirmPassword}=userinfo;
    const onHandleText=(value ,fieldName)=>{
    setUserinfo({...userinfo,[fieldName]:value});
    }
    const isValidform=()=>{
    if(!isValidobjfield(userinfo)) return updateError('Required all fields!',setError)
    if(!fullname.trim() || fullname.length < 3) return updateError('fullname should be valid!',setError)
    if(!isValidemail(email)) return updateError('Email is incorrect!',setError)
    if(!password.trim() || password.length < 8) return updateError('Password should be valid!',setError)
    if(password !== confirmPassword) return updateError('confirm should match!',setError)
    return true;
    }
    const handleSignUp = () => {
      createUserWithEmailAndPassword(auth,email,password)
          .then(() => {
            console.log('User account created & signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
        
            console.error(error);
          });
      };
    const Submitform =()=>{
        if(isValidform()){
            handleSignUp()
            console.log(userinfo);

        }
    }
    return (
        <Formcontainer>
            {error ? <Text style={{color:'red',fontSize:18, textAlign:'center'}}>{error}</Text>:null}
            <Textinputcomp value={fullname} onChangeText={(value)=>onHandleText(value,'fullname')} label='Full Name' placeholder='Jhon Doe' />
            <Textinputcomp  autoCapitalize='none'
            onChangeText={value=>onHandleText(value,'email')}
            value={email}
            label='Email' 
            placeholder='example@gmail.com'/>
            <Textinputcomp onChangeText={value=>onHandleText(value,'password')} value={password} label='Password' placeholder='*******' secureTextEntry/>
            <Textinputcomp onChangeText={value=>onHandleText(value,'confirmPassword')} value={confirmPassword} label='Confirm Password' placeholder='*******'  secureTextEntry />
            <Submmitbtn onPress={Submitform} tittle='SignUp' />

        </Formcontainer>



    )
}

const styles = StyleSheet.create({


    Text: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})
