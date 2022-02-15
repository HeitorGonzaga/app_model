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
    justify-content: center;
    height: ${hp(2.5)}px;
    min-height: ${hp(2.5)}px;
    max-height: ${hp(2.5)}px;
    width: ${wp('100%')}px;
    padding:${wp(1)}px;

    align-items: center;
    background: #004369;
`;
export const ContainerMenu = styled.View`
    flex:1;
    padding-top: ${hp(0.25)}px;
    width: ${wp('105%')}px;
    min-width: ${wp('105%')}px;
    align-items: center;
    justify-content: space-between;
    
`;

export const CardClienteItem = styled.View`
    flex-direction: row; 
    max-width: ${wp('95%')}px;
    justify-content: space-between; 
    align-items: center;
`;

export const CardCliente = styled.View`
    margin-bottom: ${hp(0.25)}px;
    margin-top: ${hp(0.25)}px;
    border-radius: 5px;
    background-color: #F1F1FB;
    padding: ${hp(0.5)}px;
    
`;

export const CardDetalhe = styled.View`
    max-width: ${wp('22.5%')}px;
    width: ${wp('22.5%')}px;
    background: gainsboro;
    padding: 2px;
    border-radius: 2px;
`;



export const InfoPedido = styled.View`
    height:${hp(2.0)}px;
    width:${wp(4)}px;
    background-color: ${props=> props.sincronizado==='Sim'?'#59981A':'darkred'};
    border-radius:20px;
`;

export const IconItem = styled(Ionicons)`
`;
