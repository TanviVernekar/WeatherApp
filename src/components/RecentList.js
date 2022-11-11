import react from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import NoFav from '../components/NoFav';

import { deleteRecentCity } from '../redux/OperationSlice';
import cities from '../components/data';
import { getPosts } from '../redux/WeatherSlice';


const RecentList = ({navigation}) => {
  const dispatch = useDispatch();
  
  // const cities= useSelector(state=>state.favourite.value)
  const data = useSelector(state => state.operationdata.recent);
  // console.log('citttttttttyyyyyy', cities);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.city}
        renderItem={({item}) => (
          <Pressable
            onLongPress={()=>{dispatch(deleteRecentCity({id:item.city}))}}
            onPress={()=>{
                console.log(item.id)
                dispatch(getPosts(item.id))
                navigation.navigate('HomeScreen')}}
           >
            <View style={styles.view}>
              <View>
                <View>
                  <Text style={styles.cityname}>
                    {item.city}, {item.region}
                  </Text>
                </View>
                <View style={styles.imageview}>
                  <Image source={item.source} style={styles.image} />
                  <Text style={styles.imagetext1}> {item.temperature}</Text>
                  <Text style={styles.imagetext2}>°C</Text>
                  <Text style={styles.imagetext3}>      {item.description}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>

                <Image
                  source={require('../assets/images/favactive.png')}
                  style={styles.favIcon}
                />
                </TouchableOpacity>
              </View>
            </View>
           </Pressable>
        )}
      />
    </View>
  );
};
export default RecentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth:1,
    marginTop: 10,
  },
 
  view: {
    height: 80,
    // width:330,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    marginHorizontal: 14,
  },
  cityname: {
    height: 18,
    fontFamily:"Roboto",
    color: '#FFE539',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 18,
    margin: 10,
    marginLeft: 15,
    marginTop: 12,
  },
  image: {
    width: 34,
    height: 20,
  },
  imageview: {
    height: 23,
    width: 167,
    flexDirection: 'row',
    marginLeft: 8,
  },
  imagetext1: {
    height: 21,
    fontFamily:"Roboto",
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
    marginStart: 2,
  },
  imagetext2: {
    height: 21,
    fontFamily:"Roboto",
    color: '#FFFFFF',
    marginTop: 3,
  },
  imagetext3: {
    height: 16,
    fontFamily:"Roboto",
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 16,
    marginTop: 3,
  },
  favIcon: {
    height: 17,
    width: 18,
    marginRight: 18,
    marginTop: 30,
  },
});

