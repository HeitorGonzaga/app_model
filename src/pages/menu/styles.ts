import styled from 'styled-components/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
export const Container = styled.View`
    flex:1;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background: white;
`;

export const ContainerLogo = styled.View`
    flex:1;
    justify-content: center;
    height: 100px;
    max-height: 250px;
    align-items: center;
`;

export const ContainerMenu = styled.View`
    flex:1;
    padding: 5px;
    width: ${wp('100%')}px;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled(Ionicons)`
`;
