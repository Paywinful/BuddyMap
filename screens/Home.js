import { View, Text,  StyleSheet, Image, Dimensions, StatusBar} from 'react-native';
import React from 'react'
import Ionicicons  from 'react-native-vector-icons/Ionicons';

const Height =  Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Home = () => {
  return (
    <View style={styles.container}>
        <StatusBar />
      <View style={styles.top}>
        <View><Text style={styles.text}>Good Morning,{'\n'}John 🖐🏼</Text></View>
        <View style={styles.right}>
        <View style={styles.icon}><Ionicicons name="notifications-outline" size={25} color="#634a7e"/></View>
        <View>
            <Image style={styles.profile} source={require('../assets/profile.jpg')} />
        </View>
        </View>
      </View>
    <Image style={styles.back} source={require('../assets/back1.jpg')} />
    <Text style={styles.intext}>Find Friends and Family with ease</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    top: {
        marginTop: Height *  0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Width * 0.9,
    },
    profile: {
        width: Width * 0.1,
        height: Width * 0.1,
        borderRadius: 20
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d9bbf9',
        borderRadius: 20,
        width: Width * 0.1,
        height: Width * 0.1,
    },
    right: {
        flexDirection: 'row',
        justifyContent:  'space-between',
        width: Width *  0.23
    },
    text: {
        fontSize: 34,
        fontWeight: '500'
    },
    back: {
        width: Width  * 0.9,
        position: 'absolute',
        height: Height * 0.14,
        borderRadius: 10,
        marginVertical: Height * 0.02,
        zIndex: 0,
        top:  Height * 0.15

    },
    intext: {
        color: '#fff',
        zIndex: 1,
        marginTop: Height  * 0.13,
        fontSize: 16,
        width: Width * 0.7,
        marginLeft: Width * -0.1

    }
})

export default Home