import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import background from '../assets/images/background.png';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <View style={styles.mainview}>
              <View style={styles.topview}>
                <Image
                  source={require('../assets/images/menuIcon.png')}
                  style={styles.image}
                />
                <Image
                  source={require('../assets/images/logo2.png')}
                  style={styles.logo}
                />
              </View>
              <View>
                <Image
                  source={require('../assets/images/searchIcon.png')}
                  style={styles.search}
                />
              </View>
            </View>
            <View style={styles.middleview}>
              <Text style={styles.datetime}>WED, 28 NOV 2018 11:35 AM</Text>
              <Text style={styles.place}>Udupi, Karnataka</Text>
              <View style={styles.favIconview}>
                <Image
                  source={require('../assets/images/favouriteIcon.png')}
                  style={styles.favouriteIcon}
                />
                <Text style={styles.addtofav}> Add to favourite</Text>
              </View>
              <View style={styles.sunview}>

              <Image
                source={require('../assets/images/sunIcon.png')}
                style={styles.sunIcon}
              />
              <View style={styles.degree}>
                <Text style={styles.digit}>31</Text>
                <View style={styles.unit}>
                <Text style={styles.unitc}>°C</Text>
                <Text style={styles.unitf}>°F</Text>
              </View>
                </View>
              <Text style={styles.text}>Mostly Sunny</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.bottomview}>
            <View style={styles.bottomline} />
            <ScrollView horizontal>
              <View style={styles.bottom}>
              <View style={styles.tempone}>
                <Image
                  source={require('../assets/images/temperatureIcon.png')}
                  style={styles.temperature}
                />
                <View style={styles.minmaxview}>
                  <Text style={styles.minmax}>Min - Max</Text>
                  <Text style={styles.celsius}>22°-34°</Text>
                </View>
              </View>

              <View style={styles.temptwo}>
                <Image
                  source={require('../assets/images/precipitationIcon.png')}
                  style={styles.precipitationIcon}
                />
                <View style={styles.minmaxview}>
                  <Text style={styles.precipitation}>Precipitation</Text>
                  <Text style={styles.percentage}>0%</Text>
                </View>
              </View>

              <View style={styles.tempone}>
                <Image
                  source={require('../assets/images/humidityIcon.png')}
                  style={styles.humidityIcon}
                />
                <View style={styles.minmaxview}>
                  <Text style={styles.humidity}>Humidity</Text>
                  <Text style={styles.percentage}>47%</Text>
                </View>
              </View>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  mainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topview: {
    marginTop: 15,
    flexDirection: 'row',
  },
  image: {
    height: 12,
    width: 18,
    marginLeft: 20,
    marginTop: 7,
  },
  logo: {
    height: 24,
    width: 113,
    marginLeft: 35,
  },
  search: {
    height: 24,
    width: 24,
    marginTop: 15,
    marginRight: 20,
  },
  datetime: {
    height: 15,
    // width: 221,
    opacity: 0.6,
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: 'center',
    margin: 15,
  },
  place: {
    height: 21,
    // width: 140,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 25,
  },
  favIconview: {
    flexDirection: 'row',
  },
  favouriteIcon: {
    height: 17,
    width: 18,
  },
  middleview: {
    alignItems: 'center',
    margin: 50,
  },
  addtofav: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 15,
    textAlign: 'center',
  },
  sunIcon: {
    height: 67,
    width: 64,
  },
  sunview:{
    height:175,
    width:119,
    // borderWidth:1,
    alignItems:"center",
    justifyContent:"space-evenly",
    marginTop:95
  },
  digit:{
    height:61,
    width:60,
    fontSize:52,
    fontWeight:'500',
    letterSpacing:0,
    lineHeight:61,
    color:"#FFFFFF"
  },
  unit:{
    height:30,
    width:55,
    flexDirection:"row",
    marginTop:20,
    borderRadius:5,
//    alignItems:"center",
   justifyContent:"center",
   
  },
  unitc:{
    height:30,
    width:28,
    backgroundColor:"#FFFFFF",
    borderColor:"#FFFFFF",
    borderRadius:2,
    borderWidth:1,
    color:'#E32843',
    alignSelf:"center",
    padding:5
  
  },
  unitf:{
    height:30,
    width:28,
    borderColor:"#FFFFFF",
    borderRadius:2,
    borderWidth:1,
    color:'#FFFFFF',
    padding:5,
  
  },
  text:{
    height:21,
    width:108,
    color:"#FFFFFF",
    fontSize:18,
    letterSpacing:0,
    lineHeight:21,
    textAlign:"center"
  },
  degree: {
    flexDirection: 'row',
    height:61,
    width:119
  },
  bottomline: {
    height: 1,
    borderWidth: 1,
    opacity: 0.3,
    borderColor: 'white',
  },
  bottomview: {
    height: 100,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: '100%',
    position: 'absolute',
    // borderTopWidth:1,
    bottom: 0,
    // marginLeft:40
    borderColor: 'white',
  },
 
  temperature: {
    height: 26,
    width: 13,
    marginLeft:5
  },
  tempone: {
    flexDirection: 'row',
    height: 41,
    width: 94,
    margin:18,
    marginVertical:25
  },
  temptwo: {
    flexDirection: 'row',
    height: 41,
    width: 113,
    margin:18,
    marginVertical:25
  },
  tempthree: {
    flexDirection: 'row',
    height: 40,
    width: 83,
    margin:18,
    marginVertical:25
  },
  minmaxview:{
    marginLeft:15,
  },
  minmax:{
    height:15,
    color:"white",
    fontSize:13,
    lineHeight:15,
    letterSpacing:0,
    marginBottom:3
  },
  celsius:{
    height: 21,
//   width: 56,
  color: '#FFFFFF',
  fontsize: 18,
  fontWeight: '500',
  letterSpacing: 0,
  lineHeight: 21,
  },
  bottom:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  precipitationIcon:{
    height:22,
    width:24,
    color:"#FFFFFF",
    marginTop:2,
    marginLeft:5,
  },
  precipitation:{
    height:15,
    marginBottom:5,
    color:"white",
    fontSize:13,
    letterSpacing:0,
    lineHeight:15
  },
  percentage:{
    height:21,
    color:"#FFFFFF",
    fontSize:18,
    fontWeight:"500",
    letterSpacing:0,
    lineHeight:21
  },
  humidityIcon:{
    height:20,
    width:15,
    marginLeft:10,
    marginTop:2
  },
  humidity:{
    height:15,
   
    color:"#FFFFFF",
    fontSize:13,
    letterSpacing:0,
    lineHeight:15,
    marginBottom:5

  }
});
