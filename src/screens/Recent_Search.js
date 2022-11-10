import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import background from '../assets/images/background.png';
import NoFav from '../components/NoFav';
import CityList from './CityList';
import RecentList from '../components/RecentList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {clearAll} from '../redux/OperationSlice';
import {useDispatch} from 'react-redux';

const Recent_Search = ({navigation}) => {
  const dispatch = useDispatch();
  const [isEmpty, setEmpty] = useState(false);
  const handlePress = () => {
    navigation.goBack();
  };

  const createTwoButtonAlert = () =>
    Alert.alert('', 'Are you sure want to remove all the Recent Searches?', [
      {
        text: 'No',
        onPress: () => console.log('No'),
        //   style:"No",
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(clearAll()), setEmpty(!isEmpty);
        },
      },
    ]);
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
            {/* <Image
                source={require('../assets/images/backIcon.png')}
                style={styles.searchIcon}
              /> */}
            <Icon name="search" size={25} style={styles.searchIcon} />
          </View>
        </View>
        {isEmpty ? (
          <NoFav/>
        ) : (
          <>
            <View style={styles.cityView}>
              <Text style={styles.text1}>You recently searched for</Text>
              <View>
                <TouchableOpacity onPress={createTwoButtonAlert}>
                  <Text style={[styles.text1, styles.text2]}>Clear All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}

      <RecentList navigation={navigation} />
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
    marginLeft: 20,
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
    marginRight: 25,
  },

  cityView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    //
    marginTop: 65,
    // borderWidth:1
  },
  text1: {
    color: '#FFFFFF',
    height: 15,
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 15,
    // marginTop:20
    fontWeight: '500',
  },
  text2: {
    fontWeight: '500',
  },
});
