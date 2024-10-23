import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  Platform,
  FlatList
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicicons from "react-native-vector-icons/Ionicons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

let top;
if (Platform.OS === "ios") {
  top = Height * 0.06;
} else {
  top = 0;
}

const Home = () => {
  let text;
  const time = new Date().getHours();
  if (time < 12) {
    text = "Good Morning,";
  } else if (time >= 12 && time < 17) {
    text = "Good Afternoon,";
  } else {
    text = "Good Evening,";
  }

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync();
    // console.log(currentLocation);
    setLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.007,
      longitudeDelta: 0.007,
    });
  };

  useEffect(() => {
    userLocation();
  }, []);

  const data = [
    {
        id: 1,
        name: "Daniel",
        img: require("../assets/profile.jpg")
    },
    {
        id: 2,
        name: "Liz",
        img: require("../assets/profile2.jpg")
    },
    {
        id: 3,
        name: "Emily",
        img: require("../assets/profile3.jpg")
    },
    {
        id: 4,
        name: "Chris",
        img: require("../assets/profile4.jpg")
    },
  ]

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.top}>
        <View>
          <Text style={styles.text}>
            {text}
            {"\n"}John 🖐🏼
          </Text>
        </View>
        <View style={styles.right}>
          <View style={styles.icon}>
            <Ionicicons
              name="notifications-outline"
              size={25}
              color="#634a7e"
            />
          </View>
          <View>
            <Image
              style={styles.profile}
              source={require("../assets/profile.jpg")}
            />
          </View>
        </View>
      </View>
      <Image style={styles.back} source={require("../assets/back1.jpg")} />
      <Text style={styles.intext}>Find Friends and Family with ease</Text>
      <MapView
        style={styles.map}
        region={location}
        // showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker coordinate={location}>
          <View style={styles.customMarkerContainer}>
            <View style={styles.customMarker}>
              <Text style={styles.markerText}>🧑🏽‍🦱</Text>
            </View>
            <Text style={styles.markerLabel}>Me</Text>
          </View>
        </Marker>
      </MapView>

      <View style={styles.list}>
        <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <View style={styles.card}>
            <Image
              style={styles.locate}
              source={item.img}
            />
            <Text style={styles.locatetext}>{item.name}</Text>
            </View>
        )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  top: {
    marginTop: top,
    flexDirection: "row",
    justifyContent: "space-between",
    width: Width * 0.9,
    alignSelf: "center",
  },
  profile: {
    width: Width * 0.1,
    height: Width * 0.1,
    borderRadius: 20,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#444054",
    borderRadius: 20,
    width: Width * 0.1,
    height: Width * 0.1,
  },
  right: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Width * 0.23,
  },
  text: {
    fontSize: 34,
    fontWeight: "500",
  },
  back: {
    width: Width * 0.9,
    position: "absolute",
    height: Height * 0.14,
    borderRadius: 10,
    marginVertical: Height * 0.02,
    zIndex: 0,
    top: Height * 0.15,
    alignSelf: "center",
  },
  intext: {
    color: "#fff",
    zIndex: 1,
    marginTop: Height * 0.13,
    fontSize: 16,
    width: Width * 0.7,
    marginLeft: Width * -0.1,
    alignSelf: "center",
  },
  map: {
    width: Width * 0.9,
    height: Height * 0.55,
    marginTop: Height * 0.03,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    alignSelf: "center",
  },
  customMarkerContainer: {
    alignItems: 'center',
},
customMarker: {
    backgroundColor: '#73a580',  
    padding: 8,                  
    borderRadius: 20,            
    borderColor: 'white',        
    borderWidth: 2,              
},
markerText: {
    fontSize: 24,                
},
markerLabel: {
    color: '#634A7E',              
    fontSize: 15,                
    fontWeight: '500'               
},
card: {
    width: Width * 0.3,
    backgroundColor: '#e8dff1',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: Height * 0.076,
    borderRadius:  10,
    borderColor: 'white',        
    borderWidth: 1,
    marginHorizontal: 10
},
locate: {
    width:  Width * 0.12,
    height: Width * 0.12 ,
    borderRadius: 10
},
list: {
    left: Width* 0.08, 
    flexDirection:"row",
    marginTop:  Height * -0.09,
    width: Width * 0.8
},
locatetext: {
    // color: '#fff',
    fontSize: 12
}
});

export default Home;
