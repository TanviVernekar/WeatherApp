import react from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const NoRecent = () => {
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.imageView}>

      <Image
        source={require('../assets/images/noFav.png')}
        style={styles.image}
      />
      <Text style={styles.text}>No Favourites added</Text>
      </View>
    </SafeAreaView>
  );
};
export default NoRecent;

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginVertical:40,
    // height:60
  },
  imageView: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1

   
  },
  image: {
    height: 84,
    width: 159,
  },
  text: {
    height: 21,
    width: 166,
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 20,
  },
});
