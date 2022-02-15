import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, Image, StatusBar } from 'react-native';
import { Container, ContainerLogo, ContainerMenu, Icon } from './styles';
import logo from '../../assets/logo.jpg';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {
    useToast
} from "native-base";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import api from '../../services/api';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IFuncionarios from '../../interfaces/IFuncionarios';
import { AxiosError } from 'axios';


const Menu: React.FC = () => {
    const toast = useToast()
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [totalFuncionarios, setTotalFuncionarios] = useState<number>(0);

    useFocusEffect(useCallback(() => {
        _handleGetFuncionarios();
    }, [totalFuncionarios]));

    useEffect(() => {

    }, []);

    const _handleFuncionarios = () => {
        navigation.navigate('ListaFuncionarios' as never, {} as never);
    }

    const _handleGetFuncionarios = async () => {
        try {
            const sResult = await api.get<IFuncionarios[]>('/funcionarios');
            setTotalFuncionarios(() => sResult.data.length);
        } catch (err) {
            const sErro: AxiosError = err as AxiosError;
        }
    }

    return (
        <>
            <StatusBar backgroundColor={'white'} />
            <Container>
                <ContainerLogo>
                    <Image source={logo} style={{ resizeMode: 'stretch', width: wp(50), height: hp(15) }} />
                    <Text style={{ color: 'black', fontSize: wp(6), fontWeight: 'bold' }}>Bem Vindo!</Text>
                    <Text style={{ color: '#A0A0A0', fontSize: wp(3.5) }}>Por favor selecione uma das opções abaixo.</Text>
                </ContainerLogo>
                <ContainerMenu>
                    <View style={{ flex: 1, flexDirection: 'row', width: wp('95%'), padding: 5, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <TouchableOpacity style={{ backgroundColor: '#DB1F48', width: wp(76.5), height: hp(13), borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginRight: wp(2), marginBottom: hp(1) }}>
                            <Text style={{ color: 'white', fontSize: wp(10), fontWeight: 'bold' }}>{totalFuncionarios}</Text>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Funcionários Registrados.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#DB1F48', width: wp(37.5), height: hp(13), borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginRight: wp(2), marginBottom: hp(1) }} onPress={() => _handleFuncionarios()}>
                            <Icon name='people-outline' size={32} color='white' />
                            <Text style={{ color: 'white' }}>Funcionários</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#007f5f', width: wp(37.5), height: hp(13), borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginRight: wp(2), marginBottom: hp(1) }} onPress={() => _handleFuncionarios()}>
                            <Icon name='lock-closed-outline' size={32} color='white' />
                            <Text style={{ color: 'white' }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>{ }</Text>
                        <Text style={{ color: '#A0A0A0', fontSize: 12 }}>Todos os Direitos Reservados.</Text>
                    </View>
                </ContainerMenu>
            </Container>
        </>
    )
}


export default Menu;