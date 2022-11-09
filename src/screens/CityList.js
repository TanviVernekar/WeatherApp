import react from "react";
import { FlatList ,StyleSheet,View,Text,Image, Pressable, TouchableOpacity,Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";


// const cities=[
//     {
//         id:1,
//         city:'Udupi,Karnataka',
//         image:'/Volumes/Development/WeatherApp/src/assets/images/sunIcon.png',
//         temperature:"31 °C",
//         description:"Mostly Sunny"
//     },
//     {
//         id:2,
//         city:'Bengaluru,Karnataka',
//         image:'/Volumes/Development/WeatherApp/src/assets/images/rain.png',
//         temperature:"29 °C",
//         description:"Rain"
//     },
//     {
//         id:3,
//         city:'Mumbai,Maharashtra',
//         image:'/Volumes/Development/WeatherApp/src/assets/images/cloudy.png',
//         temperature:"32 °C",
//         description:"Mostly Cloudy"
//     },
//     {
//         id:4,
//         city:'Kolkatta,West Bengal',
//         image:'/Volumes/Development/WeatherApp/src/assets/images/partlycloudyIcon.png',
//         temperature:"30 °C",
//         description:"Partly Cloudy"
//     },
//     {
//         id:5,
//         city:'Panaji,Goa',
//         image:'/Volumes/Development/WeatherApp/src/assets/images/thunderstormIcon.png',
//         temperature:"31 °C",
//         description:"Thunderstorm"
//     },
//     {
//         id:6,
//         city:'Newyork,United States',
//         image:'/Volumes/Development/WeatherApp/src/assets/images/nightIcon.png',
//         temperature:"24 °C",
//         description:"Mostly Sunny"
//     },

// ]
const CityList=()=>{

    // const cities= useSelector(state=>state.favourite.value)
    const cities=useSelector(state=>state.favourite.list)
    return(
        <View style={styles.container}>
            <FlatList
            data={cities}
           renderItem={({item})=>(
                <View style={styles.view}>
                    <View>

                    <View>

                    <Text style={styles.cityname}>{item.city}</Text>
                    </View>
                    <View style={styles.imageview}>
                    <Image source={{uri:item.image}} style={styles.image}/>
                    <Text style={styles.imagetext1}> 31</Text>
                    <Text style={styles.imagetext2}> °C</Text>
                    <Text style={styles.imagetext3}>      Mostly sunny</Text>
                    </View>
                    </View>
                    <View>
                        <Image source={require('../assets/images/favactive.png')} style={styles.favIcon}/>
                    </View>
                </View>
            )}
            />
        </View>
    )
}
export default CityList

const styles=StyleSheet.create({
    container:{
        flex:1,
        // borderWidth:1,
        marginTop:10
    },
    // cityView:{
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     margin:15,
    //     marginBottom:23
       
    // },
    // text1:{
    //     color:"#FFFFFF",
    //     height:15,
     
    //     fontSize:13,
    //     letterSpacing:0,
    //     lineHeight:15,

    // },
    // text2:{
    //     fontWeight:"500"
        
    // },
    view:{
        height:80,
        // width:330,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginHorizontal:10,
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:1,
        marginHorizontal:14
        
        
    },
    cityname:{
        height:18,
        width:116,
        color:"#FFE539",
        fontSize:15,
        fontWeight:"500",
        letterSpacing:0,
        lineHeight:18,
        margin:10,
        marginLeft:15,
        marginTop:12
    },
    image:{
        width:24,
    height: 20,
    
    },
    imageview:{
        height:23,
        width:167,
        flexDirection:"row",
        marginLeft:15

    },
    imagetext1:{
        height: 21,
        // width: 21,
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight:'500',
        letterSpacing: 0,
        lineHeight: 21,
        marginStart:5

    },
    imagetext2:{
        height:21,
        // width:13,
        color: '#FFFFFF',
        marginTop:3
    },
    imagetext3:{
        height: 16,
//   width: 84,
  color: '#FFFFFF',
  fontSize: 14,
  letterSpacing: 0,
  lineHeight: 16,
  marginTop:3
    },
    favIcon:{
        height:17,
        width:18,
        marginRight:18,
        marginTop:30
    }
})