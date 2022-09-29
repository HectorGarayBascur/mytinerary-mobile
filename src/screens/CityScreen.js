import { View, Text, StyleSheet, Image } from 'react-native'
import { useGetCityQuery } from '../features/citiesAPI';
import { useNavigation } from '@react-navigation/native';

import Buttom from '../components/Buttom';

export default function CityScreen({ navigation, route }) {

    const { data: city } = useGetCityQuery(route.params);
    console.log("first")
    console.log(city)
    const date = new Date(city?.response.fundation);
console.log(city)
    return (
        <View>
            <View style={styles.containerMain}>
                <View>
                    <Text style={styles.country}>{city?.response.country}</Text>
                </View>
                <View style={styles.containerTwo}>
                    <View style={styles.card}>
                        <View>
                            <Image source={{ uri: city?.response.photo }} style={styles.cardHeaderImg} />
                        </View>
                        <View style={styles.cardBody}>
                            <Text style={styles.city}>
                                {city?.response.city}
                            </Text>
                            <Text style={styles.description}>
                                {city?.response.description}
                            </Text>
                            <View style={styles.containerEnd}>
                                <View>
                                    <Text>Population</Text>
                                    <Text>{city?.response.population}</Text>
                                </View>
                                <View>
                                    <Buttom
                                        text='Go to cities'
                                        onPress={() => {
                                            navigation.navigate('Cities')
                                        }}
                                    >
                                        <Text>Go to cities</Text>
                                    </Buttom>
                                </View>
                                <View>
                                    <Text>Fundation</Text>
                                    <Text>{date.getFullYear()}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
        minHeight: 350,
        padding: '2%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    country: {
        fontWeight: 'bold',
        fontSize: 20
    },
    containerTwo: {
        minHeight: '70%',
        padding: '2%',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#fff',
        padding: '2%',
        borderRadius: 10,
    },
    cardHeaderImg: {
        minHeight: 80,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    cardBody: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    city: {
        backgroundColor: '#73b1bf',
        width: '100%',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        marginTop: '3%',
    },
    description: {
        marginTop: '3%',
        marginBottom: '3%'
    },
    containerEnd: {
        width: '90%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: '2%',
    }
})