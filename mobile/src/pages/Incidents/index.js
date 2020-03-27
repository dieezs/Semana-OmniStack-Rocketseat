import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'

import styles from './style'
import LogoImg from '../../assets/logo.png'

const Incidents = () => {

    const navigation = useNavigation();
    const [incident, setIncident] = useState([])
    const [casos, setCasos] = useState(0)
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    async function loadIncidents() {
        if(loading){
            return;
        }
        if(casos>0 && incidents.length == casos){
            return;
        }
        setLoading(true);


        const response = await api.get('incidents', {
            params: {page}
        });
        setIncident([...incidents, ...response.data.incidents]);
        setCasos(response.headers['x-total-count'])
        setPage(page + 1);
        setLoading(false);
    }
    
    useEffect(() => {
        loadIncidents()
    }, [])

    function navigateToDetail(incident) {
        navigation.navigate("Detail", {incident});
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image source={LogoImg} />
                <Text style={styles.text} >
                    Total de <Text style={styles.strong} > {casos} casos </Text>
                </Text>
            </View>
            <Text style={styles.title} >Bem Vindo!</Text>
            <Text style={styles.description} >Escolha um dos casos abaixo e salve o dia!</Text>


            <FlatList style={styles.incidentsList}
                data={incident}
                showsVerticalScrollIndicator={false}
                keyExtractor={incident => String(incident.id)}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty} >ONG: </Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty} >Caso: </Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty} >VALOR: </Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => {navigateToDetail(incident)}} >
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