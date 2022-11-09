import react from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const NoFav = () => {
  return (
    <SafeAreaView style={styles.imageView}>
      
      <Image
        source={require('../assets/images/noFav.png')}
        style={styles.image}
      />
      <Text style={styles.text}>No Favourites added</Text>
    </SafeAreaView>
  );
};
export default NoFav;

const styles = StyleSheet.create({
  imageView: {
    height: 130,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:30
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
