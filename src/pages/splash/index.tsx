import React, { useEffect } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Container, ContainerLogo, ContainerFooter } from './styles';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

import * as ClientesDB from '../../database/ClientesDB';
import logo from '../../assets/logo.jpg';


//Tela Inicial do App onde são criadas as tabelas e executadas rotinas de verificações
//iniciais.
const Splash: React.FC = () => {
    const navigation = useNavigation();
    useEffect(() => {
        async function prepare() {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                _criarTabelas();
            }
        }
        prepare();
    }, []);


    const _criarTabelas = async () => {
        await ClientesDB.createTable();
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'Menu' }]
        }));
    }


    return (
        <Container>
            <ContainerLogo>
                <Image source={logo} style={{ resizeMode: 'stretch', width:wp(50), height:hp(15)}} />
                <Text style={{ color: 'black', fontSize: wp(6), fontWeight: 'bold' }}>Aguarde...</Text>
                <Text style={{ color: '#A0A0A0', fontSize: wp(3.5) }}>Por favor aguarde enquanto preparamos tudo para você. </Text>
            </ContainerLogo>
            <ContainerFooter>
                <View>
                    <ActivityIndicator color={'#EE0F37'} size={wp(10)} />
                </View>
                <View>
                    <Text style={{ color: '#A0A0A0', fontSize: wp(3) }}>LkJ Frigoríficos Ltda - Todos os Direitos Reservados.</Text>
                </View>
            </ContainerFooter>
        </Container>
    )
}


export default Splash;