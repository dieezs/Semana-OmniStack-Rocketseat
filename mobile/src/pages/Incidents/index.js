import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style'
import LogoImg from '../../assets/logo.png'

const Incidents = () => {

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate("Detail");
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image source={LogoImg} />
                <Text style={styles.text} > 
                    Total de <Text style={styles.strong} > 0 casos </Text>
                </Text>
            </View>
            <Text style={styles.title} >Bem Vindao!</Text>
            <Text style={styles.description} >Escolha um dos casos abaixo e salve o dia!</Text>


            <FlatList style={styles.incidentsList}
                data={[1, 2, 3, 4]}
                showsVerticalScrollIndicator={false}
                keyExtractor={incident => String(incident)}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty} >ONG: </Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentProperty} >Caso: </Text>
                        <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

                        <Text style={styles.incidentProperty} >VALOR: </Text>
                        <Text style={styles.incidentValue}>R$250</Text>

                        <TouchableOpacity
                            style={styles.detailsButton} 
                            onPress={navigateToDetail} >
                            <Text styles={styles.detailsButtonText} >Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" ></Feather>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}

export default Incidents