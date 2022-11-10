// import React from 'react';
import * as React from 'react';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Alert
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import background from '../assets/images/background.png';
import NoFav from '../components/NoFav';
import CityList from './CityList';
import Icon from 'react-native-vector-icons/MaterialIcons'
import cities from '../components/data';
import { useDispatch } from 'react-redux';
import { removeAll } from '../redux/OperationSlice';


const Favourite = ({navigation}) => {

  const dispatch=useDispatch()
  const [remove,setRemove] = useState(false);
  const[isEmpty,setEmpty]=useState(false);
  const handlePress = () => {
    navigation.goBack();
  };
  const createTwoButtonAlert = () =>
  Alert.alert(
    "",
    "Are you sure want to remove all the favourites?",
    [
      {
        text: "No",
        onPress: () =>  setEmpty(false),
        
        
         
      },
      { text: "Yes", onPress: () => {
      dispatch(removeAll())
      setEmpty(!isEmpty) }}
    ]
  );
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
              <Text style={styles.toptext}>Favourite</Text>
            </View>
          </View>
          <View>
            <Icon name="search" size={25} style={styles.searchIcon}/>
          </View>
        </View>

        {isEmpty?(<NoFav/>):(
        <>
        <View style={styles.cityView}>
        <Text style={styles.text1}>{cities.length} City added as favourite</Text>
        <View>
        <TouchableOpacity onPress={createTwoButtonAlert}>
        <Text  style={[styles.text1,styles.text2]}>Remove All</Text>
        </TouchableOpacity>
        </View>
       </View>
       <CityList navigation={navigation}/>
        </>
       )}
       

      </ImageBackground>
    </View>
  );
};
export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  topbar: {
    height: 56,
    backgroundColor: 'white',
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
    // color: '#292F33',
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

  cityView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:15,
    // 
    marginTop:65,
    // borderWidth:1
   
},
text1:{
    color:"#FFFFFF",
    height:15,
    fontSize:13,
    letterSpacing:0,
    lineHeight:15,
    // marginTop:20

},
text2:{
    fontWeight:"500"
    
},
});
