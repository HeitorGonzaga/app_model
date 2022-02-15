import React, { useCallback, useEffect, useState } from 'react'
import { Text, StatusBar, ScrollView } from 'react-native';
import { Container, ContainerFiltro} from './styles';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {
    Button,
    useToast,
    Icon
} from "native-base";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { useNavigation } from '@react-navigation/native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { toDate } from 'date-fns-tz';
import { format, parseISO } from 'date-fns';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import IFuncionarios from '../../interfaces/IFuncionarios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../../services/api';

const Funcionarios: React.FC = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [funcionario, setFuncionario] = useState<IFuncionarios | null>(null);
    const [funcionarioID, setFuncionarioID] = useState<string>('');
    const [dataNascimento, setDataNascimento] = useState<Date>(toDate(new Date()));
    const [nome, setNome] = useState<string>('');
    const [salario, setSalario] = useState<string>('');
    const [exibirDataNascimento, setExibirDataNascimento] = useState<boolean>(false);
    const toast = useToast();

 


    useEffect(() => {

    }, []);


    const _handleSelecionarDataNascimento = useCallback(
        () => {
            setExibirDataNascimento(() => exibirDataNascimento === false ? true : false);
        },
        [exibirDataNascimento]);

    

    const _handleVoltar = useCallback(() => {
        navigation.goBack();
    }, []);


    const _handleLimparCampos = ()=>{
        setNome(()=>'');
        setSalario(()=>'');
        setDataNascimento(()=>toDate(new Date()));
    }


    const _handleSalvar = async () => {
        try{
            if (dataNascimento != null && nome.length>0 && salario.length>0) {
                setLoading(()=>true);
                const sResult = await api.post(`/funcionarios`,{
                    "nome": nome,
                    "data_nascimento": format(parseISO(dataNascimento.toISOString()), 'yyyy/MM/dd'),
                    "salario": salario,
                    "empresa": 1
                });
                toast.show({
                    title: "Frigo-Data",
                    status: "success",
                    placement: "bottom",
                    description: "Funcionário adicionado com sucesso!",
                });
                _handleLimparCampos();
                
            } else {
                toast.show({
                    title: "Frigo-Data",
                    status: "error",
                    placement: "bottom",
                    description: "Por favor preencha todos os campos.",
                })
            }
        }catch(err){
            toast.show({
                title: "Frigo-Data",
                status: "error",
                placement: "bottom",
                description: "Ops tivemos um erro ao processar sua solicitação!",
            })
        }
        setLoading(()=>false);
    };







    return (
        <>
            <StatusBar backgroundColor={'#004369'} />
            <BackButton textColor='white' text='Voltar' evento={_handleVoltar} background={'#004369'} />
            <Container>
                <ContainerFiltro>

                </ContainerFiltro>
                <ScrollView style={{ flex: 1, width: wp('95%') }}>
                    <Text style={{ marginTop: 10 }}>Nome</Text>
                    <Input
                        multiline={true}
                        placeholder='Nome do Funcionário'
                        value={nome}
                        icon='document-text-outline'
                        editable={true}
                        onChangeText={(value) => { setNome(() => value) }}
                        isLoading={false}

                    />

                    <Text style={{ marginTop: 10 }}>Data de Nascimento</Text>
                    {exibirDataNascimento === true ? <RNDateTimePicker
                        value={dataNascimento}
                        mode={'date'}
                        is24Hour={false}
                        display="default"                        
                        onChange={(e, date) => {
                            if (date) {

                                const znDate = toDate(date);
                                setDataNascimento(() => znDate);
                            }
                            setExibirDataNascimento(() => false);
                        }}
                    /> : null}
                    <Input
                        placeholder='Data de Saída'
                        icon='calendar-outline'
                        value={format(dataNascimento, 'dd/MM/yyyy')}
                        onChangeText={(value) => { }}
                        isLoading={false}
                        possuiEvento={true}
                        iconEvento={'chevron-down-outline'}
                        editable={false}
                        evento={() => _handleSelecionarDataNascimento()}
                    />

                    <Text style={{ marginTop: 10 }}>Salário</Text>
                    <Input
                        multiline={true}
                        placeholder='Salário do Funcionário'
                        value={salario}
                        icon='document-text-outline'
                        editable={true}
                        keyboardType={'numeric'}
                        onChangeText={(value) => { setSalario(() => value) }}
                        isLoading={false}

                    />
                    <Button mt={5} isLoading={isLoading} height={'50px'} leftIcon={<Icon as={Ionicons} name="save-outline" size="sm" /> } onPress={()=>_handleSalvar()}>Salvar</Button>
 
                </ScrollView>

            </Container>
        </>
    )
}


export default Funcionarios;