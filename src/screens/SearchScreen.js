// import react, {useState} from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
  Image,
  Pressable
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchApi } from '../services/SearchApi';
import { useDispatch,useSelector } from 'react-redux';
import { getPosts } from '../redux/WeatherSlice';
import { setFavourite } from '../redux/OperationSlice';

import cities from '../components/data';
import { FlatList } from 'react-native-gesture-handler';
import { recentCity } from '../redux/OperationSlice';

const SearchScreen = ({setClicked,clicked}) => {
  const dispatch=useDispatch()
  const list = useSelector(state => state.favourite.list);
  const [celsius, setCelsius] = useState(list.current?.temp_c);
  const handleBack = () => {
    // navigation.goBack();
    setClicked(!clicked)
  };
  
  const [text, setText] = useState(null);
  const [icon, setIcon] = useState();

  const [data,setData] = useState();
  // const handleBack=()=>{
  //   setSearch(!search);
  // }



  const handleChange = async (value) => {
    setText(value);
    setIcon(require('../assets/images/clearIcon.png'));
    const Data = await SearchApi(value)
    setData(Data)
    console.log("i am data", Data);
  };

  const handleClear = () => {
    setText();
  };


  const obj = {
    id: list.location?.name,
    city: list.location?.name,
    region:list.location?.region,
    source: {uri: `https:${list.current?.condition.icon}`},
    temperature: celsius,
    description: list.current?.condition.text,
  };

  const handleSearch = (item) =>{
    setText(item.name)
    dispatch(setFavourite(false))
    // setSearch(!search)
    setClicked(!clicked)
    dispatch(recentCity(obj))
    dispatch(getPosts(item.name))
  }


  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#673AB7"
      />
      
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Icon
              name="arrow-back"
              size={27}
              color={'black'}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Search for City"
            style={styles.inputText}
            value={text}
            onChangeText={value => handleChange(value)}
            placeholderTextColor="grey"
          />
          <View style={{marginLeft: 10}}>
            {text ? (
              <TouchableOpacity onPress={handleClear}>
                <Image source={icon} style={styles.clearIcon} />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </View>
      
      <View style={styles.line} />
      <View >
          <FlatList
        data={data}
        renderItem={({item})=>(
          (
            <Pressable onPress={()=>handleSearch(item)}>
           <View style={styles.header}>
            <Text>{item.name}</Text>
            </View>
            </Pressable>
          )
        )}
          />
        </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  header: {
    height: 56,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    borderBottomColor: 'rgba(105,105,105,0.2)',
    borderBottomWidth: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 34,
  },

  inputText: {
    height: 39,
    width: '70%',
    opacity: 4,
    color: '#000000',
    fontSize: 15,
    letterSpacing: 0,

  },
  line: {
    height: 0.1,
    width: '100%',
    opacity: 0.2,
    borderWidth: 0.3,
    borderBottomColor: '#000000',
  },
  clearIcon: {
    height: 14,
    width: 14,

    marginLeft: 5,
  },
});
