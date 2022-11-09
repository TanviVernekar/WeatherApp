import React from 'react';
import {View, StyleSheet, Image, Text, ImageBackground,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import background from '../assets/images/background.png';
import NoFav from '../components/NoFav';
import CityList from './CityList';
const Recent_Search = ({navigation}) => {
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.topbar}>
          <View style={styles.topbar2}>
            <View style={styles.topbar3}>
            <View>

<TouchableOpacity onPress={handlePress}>
  <Image
    source={require('../assets/images/backIcon.png')}
    style={styles.backIcon}
  />
</TouchableOpacity>
</View>
              <Text style={styles.toptext}>Recent Search</Text>
            </View>
            </View>
            <View>
              <Image
                source={require('../assets/images/backIcon.png')}
                style={styles.searchIcon}
              />
            </View>
          
        </View>

        {/* <NoFav/> */}
       
       <CityList name="Clear All"/>
      </ImageBackground>
    </View>
  );
};
export default Recent_Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  topbar: {
    height: 56,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //  marginTop:50,
    top: 50,
    
  },
  topbar2: {
    flexDirection: 'row',
  },
  topbar3: {
    flexDirection: 'row',
    
  },
  backIcon: {
    width: 24,
    height: 24,
    marginLeft:20
  },
  toptext: {
    height: 24,
    width: 204,
    color: '#292F33',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 24,
    marginLeft: 50,
  },
  searchIcon: {
    // margin:15,
    height: 24,
    width: 24,
    marginRight:25
  },
  cityView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
});
