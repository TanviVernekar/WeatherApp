import react, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

const SearchScreen = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const [text, setText] = useState(null);
  const [icon, setIcon] = useState();
  const handleChange = value => {
    setText(value);
    setIcon(require('../assets/images/clearIcon.png'));
  };

  const handleClear = () => {
    setText();
  };

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
    
  },
  backIcon: {
    // width: 24,
    // height: 24,
    marginRight: 34,
  },

  inputText: {
    height: 39,
    width: '70%',
    opacity: 4,
    color: '#000000',
    // font-family: Roboto,
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
