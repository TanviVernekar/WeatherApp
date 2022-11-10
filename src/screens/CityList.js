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
import {deleteCity, setFavourite} from '../redux/OperationSlice';
import cities from '../components/data';
import { getPosts } from '../redux/WeatherSlice';
import HomeScreen from '../screens/HomeScreen';

const CityList = ({navigation}) => {
  const dispatch = useDispatch();
  // const cities= useSelector(state=>state.favourite.value)
  const cities = useSelector(state => state.operationdata.value);
  // console.log('citttttttttyyyyyy', cities);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        keyExtractor={item => item.city}
        renderItem={({item}) => (
          <Pressable onPress={()=>{
            console.log(item.id)
            dispatch(getPosts(item.id))
            navigation.navigate('HomeScreen')
          }}>
         
       
            <View style={styles.view}>
              <View>
                <View>
                  <Text style={styles.cityname}>
                    {item.city},{item.region}
                  </Text>
                </View>
                <View style={styles.imageview}>
                  <Image source={item.source} style={styles.image} />
                  <Text style={styles.imagetext1}> {item.temperature}</Text>
                  <Text style={styles.imagetext2}> </Text>
                  <Text style={styles.imagetext3}> {item.description}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity onPress={()=>{dispatch(deleteCity({id:item.city})),dispatch(setFavourite(false))}}>

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
export default CityList;

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
    // width:116,
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
    width: 24,
    height: 20,
  },
  imageview: {
    height: 23,
    width: 167,
    flexDirection: 'row',
    marginLeft: 15,
  },
  imagetext1: {
    height: 21,
    // width: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 21,
    marginStart: 5,
  },
  imagetext2: {
    height: 21,
    // width:13,
    color: '#FFFFFF',
    marginTop: 3,
  },
  imagetext3: {
    height: 16,
    //   width: 84,
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

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   Pressable,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import { useSelector } from 'react-redux';
// // import Toast from 'react-native-simple-toast'
  
// import { useDispatch } from 'react-redux';
// import cities from '../components/data';
// import { deleteCity, deleteFav } from '../redux/OperationSlice';
//   const CityList=()=>{
//     const dispatch=useDispatch();
//     const cities=useSelector(state =>state.operationdata.value)
//     return(
//       <View>
//         <FlatList
//             data={cities}
//             keyExtractor={item => item.city}
//            renderItem={({item})=>(
//             <Pressable  onLongPress={() => {
//               dispatch(deleteCity({id: item.city}));
//             //   Toast.show(`Deleted ${item.city} Successfully`);
              
//             }}>
           
//             <View style={styles.listItem}>
//               <View>
//                 <Text style={styles.location}>{item.city}</Text>
//                 <View style={styles.tempDetails}>
//                   <Image
//                     source={item.source}
//                     style={styles.weather}
//                   />
//                   <Text style={styles.actualTemp}>{item.temperature}</Text>
//                   <Text style={styles.unit}>°C</Text>
//                   <View>
//                   <Text style={styles.description}>{item.description}</Text>
//                   </View>
//                 </View>
//               </View>
//               <View>
//                 <TouchableOpacity>
//                 <Image
//                   source={require('../assets/images/favactive.png')}
//                   style={styles.favIcon}
//                 />
//                 </TouchableOpacity>
//               </View>
//             </View>
//             </Pressable>
//            )}
//            />
//           </View>


         
//     )
//   }

//   export default CityList;

//   const styles=StyleSheet.create({
//     content: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingHorizontal: 16,
//         paddingVertical: 15,
       
//       },
//       addedText: {
//         height: 15,
//         color: '#FFFFFF',
//         fontSize: 13,
//         letterSpacing: 0,
//         lineHeight: 15,
//       },
//       removeAll: {
//         height: 15,
//         color: '#FFFFFF',
//         fontSize: 13,
//         fontWeight: '500',
//         letterSpacing: 0,
//         lineHeight: 15,
//       },
//       listItem: {
//         height: 80,
//         marginHorizontal: 16,
//         backgroundColor: 'rgba(255, 255, 255,0.1)',
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom:0.9,
//       },
//       favIcon: {
//         height: 17,
//         width: 18,
//         marginEnd: 20,
//       },
//       location: {
//         height: 18,
//         color: '#FFE539',
//         fontSize: 15,
//         fontWeight: '500',
//         letterSpacing: 0,
//         lineHeight: 18,
//         marginLeft: 15,
//         marginTop: 15,
//       },
//       tempDetails: {
//         flexDirection: 'row',
//       },
//       weather: {
//         height: 23,
//         width: 23,
//         marginLeft: 15,
//         marginTop: 10,
//         marginBottom: 16,
//         marginRight: 1,
//       },
//       style3: {
//         height: 14,
//         width: 22,
//         marginLeft: 9,
//         marginTop: 10,
//         marginBottom: 16,
//         marginRight: 1,
//       },
//     style4: {
//         height: 16,
//         width: 21.52,
//         marginLeft: 9,
//         marginTop: 10,
//         marginBottom: 16,
//         marginRight: 1,
//       },
//     style6: {
//         height: 21,
//         width: 20,
//         marginLeft: 9,
//         marginTop: 10,
//         marginBottom: 16,
//         marginRight: 1,
//       },
//     //   height: 21,
//     //   width: 22,
//       actualTemp: {
//         height: 21,
//         color: '#FFFFFF',
//         fontSize: 18,
//         fontWeight: '500',
//         letterSpacing: 0,
//         lineHeight: 21,
//         marginLeft: 9,
//         marginTop: 11,
//         marginBottom: 16,
//         marginRight: 1,
//       },
//       unit: {
//         height: 15,
//         color: '#FFFFFF',
//         fontSize: 13,
//         letterSpacing: 0,
//         lineHeight: 15,
//         marginTop: 15,
//         marginLeft: 1,
//       },
//       description: {
//         height: 16,
//         color: '#FFFFFF',
//         fontSize: 14,
//         letterSpacing: 0,
//         lineHeight: 16,
//         marginTop: 14,
//         marginLeft: 17,
//       },
//     });