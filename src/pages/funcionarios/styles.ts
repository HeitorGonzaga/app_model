import styled from 'styled-components/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
export const Container = styled.View`
    flex:1;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    
`;

export const ContainerFiltro = styled.View`
    flex:1;
    height: 50px;
    padding:4px;
    width: 100%;
    max-height: 50px;
    min-height: 50px;
    background: #004369;
`;

export const ContainerMenu = styled.View`
    flex:1;
    padding-top: 5px;
    width: ${wp('105%')}px;
    min-width: ${wp('105')}px;
    align-items: flex-start;
    padding-right: 20px;
    padding-left: 20px;
`;

export const CardClienteItem = styled.View`
    flex-direction: row; 
    max-width: ${wp('95%')}px;
    justify-content: space-between; 
    align-items: center;
    margin-bottom: 5px;
`;

export const CardCliente = styled.View`
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: #F1F1FB;
    padding: 5px;
`;

export const CardDetalhe = styled.View`
    max-width: ${wp('45.5%')}px;
    width: ${wp('45.5%')}px;
    background: gainsboro;
    padding: 2px;
    border-radius: 2px;
`;


export const InfoCliente = styled.View`
    height:20px;
    width:20px;
    background-color:#59981A;
    border-radius:20px;
`;

export const IconItem = styled(Ionicons)`
`;
