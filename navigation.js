import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, People, Meet } from './screens';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                            color = focused ? '#634A7E' : '#d9bbf9'
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline'
                            color = focused ? '#634A7E' : '#d9bbf9'
                        } else if (route.name === 'People') {
                            iconName = focused ? 'people' : 'people-outline'
                            color = focused ? '#634A7E' : '#d9bbf9'
                        } else if (route.name === 'Meet') {
                            iconName = focused ? 'trending-up' : 'trending-up-outline'
                            color = focused ? '#634A7E' : '#d9bbf9'
                        }
                        return (<Ionicons name={iconName} size={28} color={color} />);
                    },

                    tabBarShowLabel:  false, 



                })}
            >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Meet" component={Meet} options={{ headerShown: false }}/>
                <Tab.Screen name="People" component={People} options={{ headerShown: false }}/>
                <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
