import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

import background from '../assets/images/background.png';
import {getPosts} from '../redux/WeatherSlice';

import moment from 'moment';
import NoFav from '../components/NoFav';
import SearchScreen from '../screens/SearchScreen';
import {addCity, deleteCity} from '../redux/OperationSlice';
import uuid from 'react-native-uuid';
import { setFavourite } from '../redux/OperationSlice';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const list = useSelector(state => state.favourite.list);

  
  const source = {uri: `https:${list.current?.condition.icon}`};
  const favourite = useSelector(state=>state.operationdata.favourite)
  const [favActive,setFavActive]=useState(favourite)
  // console.log('i am list', list);


  const handlepress = () => {
    navigation.openDrawer();
  };

  const [date, setDate] = useState('');
  const currentDateTime = () => {
    const dateTimeMoment = moment()
      .utcOffset('+05:30')
      .format('ddd, DD MMM YYYY     hh:mm a')
      .toUpperCase();
    setDate(dateTimeMoment);
  };

  useEffect(() => {
    // dispatch(getPosts());
    currentDateTime();
    setCelsius(list.current?.temp_c);
  }, []);
  

  const [celsius, setCelsius] = useState(list.current?.temp_c);
  const handleCelsius = () => {
    setCelsius(list.current?.temp_c);
  };
  const handleFahrenheit = () => {
    setCelsius(list.current?.temp_f);
  };

  const [clicked, setClicked] = useState(false);
 

  const obj = {
    id: list.location?.name,
    city: list.location?.name,
    region:list.location?.region,
    source: {uri: `https:${list.current?.condition.icon}`},
    temperature: celsius,
    description: list.current?.condition.text,
  };
  // console.log('heyyyy', obj);
  const handleClick = () => {
 
    if (!favourite) {
      dispatch(setFavourite(true));
      dispatch(addCity(obj));
    } else {
      dispatch(setFavourite(false));
      dispatch(deleteCity(obj));
    }
  };
  return (
    <>
      {!clicked ? (
        <View style={styles.container}>
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.background}>
            <SafeAreaView style={{flex: 1}}>
              <ScrollView>
                <View style={styles.mainview}>
                  <View style={styles.topview}>
                    <Pressable onPress={handlepress}>
                      <Image
                        source={require('../assets/images/menuIcon.png')}
                        style={styles.image}
                      />
                    </Pressable>
                    <Image
                      source={require('../assets/images/logo2.png')}
                      style={styles.logo}
                    />
                  </View>
                  <TouchableOpacity onPress={() => setClicked(!clicked)}>
                    <View>
                      <Image
                        source={require('../assets/images/searchIcon.png')}
                        style={styles.search}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.middleview}>
                  <Text style={styles.datetime}>{date}</Text>
                  <Text style={styles.place}>
                    {list.location?.name}, {list.location?.region}
                  </Text>
                  <View style={styles.favIconview}>
                    {favourite?
                    (
                    <>
                      <TouchableOpacity onPress={() => handleClick()}>
                      <Image
                        source={require('../assets/images/favactive.png')}
                        style={styles.favouriteIcon}
                      />
                    </TouchableOpacity>
                    </>)
                    :(
                    <>

                      <TouchableOpacity onPress={() => handleClick()}>
                      <Image
                        source={require('../assets/images/favouriteIcon.png')}
                        style={styles.favouriteIcon}
                      />
                    </TouchableOpacity>
                    </>)}
                   
                    <Text style={styles.addtofav}>  Add to favourite</Text>
                  </View>
                  <View style={styles.sunview}>
                    <Image
                      // source={require('../assets/images/sunIcon.png')}
                      source={{uri: `https:${list.current?.condition.icon}`}}
                      style={styles.sunIcon}
                    />
                    <View style={styles.degree}>
                      <Text style={styles.digit}>{celsius}</Text>
                      <View style={styles.unit}>
                        {celsius == list.current?.temp_c ? (
                          <>
                            <TouchableOpacity onPress={handleCelsius}>
                              <Text style={styles.unitc}>°C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleFahrenheit}>
                              <Text style={styles.unitf}>°F</Text>
                            </TouchableOpacity>
                            {/* </View> */}
                          </>
                        ) : (
                          <>
                            {/* <Text style={styles.digit}>{celsius}</Text>
                  <View style={styles.unit}> */}
                            <TouchableOpacity onPress={handleCelsius}>
                              <Text style={styles.unitf}>°C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleFahrenheit}>
                              <Text style={styles.unitc}>°F</Text>
                            </TouchableOpacity>
                            {/* </View> */}
                          </>
                        )}
                      </View>
                    </View>
                    <Text style={styles.text}>
                     {list.current?.condition.text}
                    </Text>
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
                        <Text style={styles.celsius}>22°-{celsius}°</Text>
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
                        <Text style={styles.percentage}>{list.current?.humidity}%</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </View>
      ) : (
        <SearchScreen setClicked={setClicked} clicked={clicked} />
      )}
    </>
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
    fontFamily:"Roboto"
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
    fontFamily:"Roboto"
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
    height: 75,
    width: 70,
  },
  sunview: {
    height: 175,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 95,
  },
  digit: {
    height: 61,
    width: 60,
    fontSize: 52,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 61,
    color: '#FFFFFF',
    fontFamily:"Roboto"
  },
  unit: {
    height: 29,
    width: 55,
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 2,
    borderWidth:1,
    borderColor:"#FFFFFF",
    //    alignItems:"center",
    justifyContent: 'center',
    marginLeft: 10,
  },
  unitc: {
    // height: 28,
    // width: 28,
    backgroundColor: '#FFFFFF',
    // borderColor: '#FFFFFF',
    borderRadius: 2,
    // borderWidth: 1,
    color: '#E32843',
    alignSelf: 'center',
    padding: 5,
    fontFamily:"Roboto"
    
  },
  unitf: {
    height: 30,
    width: 28,
    // borderColor: '#FFFFFF',
    borderRadius: 2,
    // borderWidth: 1,
    color: '#FFFFFF',
    padding: 5,
    fontFamily:"Roboto"
  },
  text: {
    height: 21,
    fontFamily:"Roboto",
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'center',
  },
  degree: {
    flexDirection: 'row',
    height: 61,
    width: 119,
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
    marginLeft: 5,
  },
  tempone: {
    flexDirection: 'row',
    height: 41,
    width: 94,
    margin: 18,
    marginVertical: 25,
  },
  temptwo: {
    flexDirection: 'row',
    height: 41,
    width: 113,
    margin: 18,
    marginVertical: 25,
  },
  tempthree: {
    flexDirection: 'row',
    height: 40,
    width: 83,
    margin: 18,
    marginVertical: 25,
  },
  minmaxview: {
    marginLeft: 15,
  },
  minmax: {
    height: 15,
    color: 'white',
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0,
    marginBottom: 3,
    fontFamily:"Roboto"
  },
  celsius: {
    height: 21,
    //   width: 56,
    color: '#FFFFFF',
    fontsize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  precipitationIcon: {
    height: 22,
    width: 24,
    color: '#FFFFFF',
    marginTop: 2,
    marginLeft: 5,
  },
  precipitation: {
    height: 15,
    marginBottom: 5,
    color: 'white',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    fontFamily:"Roboto"
  },
  percentage: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
  },
  humidityIcon: {
    height: 20,
    width: 15,
    marginLeft: 10,
    marginTop: 2,
  },
  humidity: {
    height: 15,
    fontFamily:"Roboto",
    color: '#FFFFFF',
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    marginBottom: 5,
  },
});
