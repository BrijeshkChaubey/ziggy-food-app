

import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  Dimensions,
  Animated,
  View,
  Image,
} from 'react-native';
import { Headercomponent } from '../components/headerComponent';
import { FormSelectorBtn } from '../components/Formselector';
import { Loginform } from './Login';
import { Registerform } from './Register';
import { COLOURS } from '../database/items';
import { useSelector } from 'react-redux';




const { width } = Dimensions.get('window');

export const Authpage = () => {



  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef()
  const Righheaderopacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0]
  })
  const LeftheaderTranslatex = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40]
  })
  const RighheaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20]
  })
  const Logincolorinterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: [COLOURS.accent, 'rgba(27,27,51,0.4)']
  })
  const Signupcolorinterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', COLOURS.accent]
  })
  return (
    <View style={{ flex: 1, paddingTop: 80 }}>
      <View style={{display:'flex',flexDirection:'row' ,justifyContent:'center',paddingBottom:15,}}>
        <Image source={require('../database/images/pizza/pepperonipizza.png')} style={{height:100,width:100}}/>
      <Text style={styles.headertext}>Ziggy</Text>

      </View>

      <View style={{ height: 80 }}>

        <Headercomponent leftheading='Welcome ' rightheading='Foddie'
          bottomheading='welcome to world of tasty food'
          Righheaderopacity={Righheaderopacity}
          LeftheaderTranslatex={LeftheaderTranslatex}
          RighheaderTranslateY={RighheaderTranslateY} />

      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20 }}>
        <FormSelectorBtn backgroundColor={Logincolorinterpolate} title='Login'
         onPress={()=>scrollView.current.scrollTo({x:0})} />
        <FormSelectorBtn backgroundColor={Signupcolorinterpolate} title='SignUp' onPress={()=>scrollView.current.scrollTo({x:width})} />
      </View>
      <ScrollView
       ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: animation } } }], {
          useNativeDriver: false
        })}>
        <Loginform />
        <ScrollView>
          <Registerform />
        </ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  borderRight: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  headertext: {
    color:'#8B0000',
    
    alignSelf:'center',
    fontSize: 30,
    fontWeight: 'bold',
    
},
});