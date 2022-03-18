import React, { useCallback, useState } from 'react'
import { View, Text, StatusBar } from 'react-native';
import { Container, ContainerFiltro, ContainerMenu, CardCliente, CardClienteItem, CardDetalhe, InfoPedido, IconItem } from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {
    FlatList,
    useToast,
    AlertDialog,
    Button,
    Icon
} from "native-base";

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { format } from 'date-fns';
import BackButton from '../../components/BackButton';
import LoadingComponent from '../../components/LoadingComponent';
import { FloatingAction } from "react-native-floating-action";
import IFuncionarios from '../../interfaces/IFuncionarios';
import api from '../../services/api';
import { parseISO } from 'date-fns/esm';
import { AxiosError } from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MeusPedidos: React.FC = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [lista, setLista] = useState<IFuncionarios[]>([]);
    const [isOpen, setIsOpen] = React.useState(false)
    const [funcionario, setFuncionario] = useState<IFuncionarios | null>(null);
    const toast = useToast();
    const _onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);

    const actionSalvar = [
        {
            text: "Registrar Novo Funcionário",
            icon: <IconItem name={'document-text-outline'} color='white' size={22} />,
            name: "btn_novo",
            position: 1
        }
    ];


    useFocusEffect(useCallback(() => {
        _handleListarFuncionarios();
    }, []));

    const _handleListarFuncionarios = async () => {
        setLoading(() => true);
        try {
            const sResult = await api.get<IFuncionarios[]>('/funcionarios');
            setLista(() => sResult.data);
            setLoading(() => false);
        } catch (err) {
            setLista(() => []);
            setLoading(() => false);
        }
        setLoading(() => false);
    }

    const _handleExcluirFuncionario = async () => {
        _onClose();
        try {
            await api.delete(`/funcionarios/${funcionario?.id}`)
            _handleListarFuncionarios();
        } catch (err) {
            const sErro: AxiosError = err as AxiosError;
            toast.show({
                title: "Frigo-Data",
                status: "error",
                placement: "bottom-left",
                description: `Ops, tivemos um erro ao tentar processar sua solicitação, ${sErro.response?.status}`,
            })
        }
    }

    const _handleEditar = async(item: IFuncionarios)=>{
        navigation.navigate('Funcionarios' as never, {funcionario: item} as never);
    }

    const _handleAdicionarFuncionario = async () => {
        navigation.navigate('Funcionarios' as never, {} as never)
    }

    const _handleVoltar = useCallback(() => {
        navigation.goBack();
    }, [])

    return (
        <>
            <StatusBar backgroundColor={'#004369'} />
            <BackButton textColor='white' text='Voltar' evento={_handleVoltar} background={'#004369'} />
            <Container>
                <ContainerFiltro>
                    {
                        /*caso necessário adicionar campo de pesquisa aqui */
                    }
                </ContainerFiltro>
                <ContainerMenu>
                    {lista.length !== 0 ? <FlatList style={{ flex: 1, width: wp('95%') }}
                        data={lista}
                        maxToRenderPerBatch={10}
                        renderItem={({ item }) => <CardCliente>
                            <CardClienteItem>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{item.nome}</Text>
                            </CardClienteItem>
                            <CardClienteItem>
                                <CardDetalhe titulo={true}>
                                    <View><Text style={{ color: '#495057' }}>Salário</Text></View>
                                </CardDetalhe>
                                <CardDetalhe>
                                    <Text style={{ color: '#495057' }}>{new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(item.salario)}</Text>
                                </CardDetalhe>
                                <CardDetalhe>
                                    <Text style={{ color: '#495057' }}>Nascimento</Text>
                                </CardDetalhe>
                                <CardDetalhe>
                                    <Text style={{ color: '#495057' }}>{format(parseISO(item.data_nascimento), 'dd/MM/yyyy')}</Text>
                                </CardDetalhe>
                            </CardClienteItem>
                            <CardClienteItem style={{flexDirection:'column'}}>
                                <Button style={{ backgroundColor: "#023e8a", }} width={'100%'} mt={2} leftIcon={<Icon as={Ionicons} name="create-outline" size="sm" />} onPress={() => {
                                    _handleEditar(item)
                                }}>Editar Funcionário</Button>
                                <Button style={{ backgroundColor: "#9d0208", }} width={'100%'} mt={1} mb={1} leftIcon={<Icon as={Ionicons} name="trash" size="sm" />} onPress={() => {
                                    setFuncionario(() => item);
                                    setIsOpen(() => !isOpen);
                                }}>Excluir Funcionário</Button>
                            </CardClienteItem>

                        </CardCliente>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    /> : isLoading === true ? <LoadingComponent tipo='Loading' /> : <LoadingComponent tipo='Vazio' />}

                </ContainerMenu>
            </Container>
            <AlertDialog
                leastDestructiveRef={cancelRef}
                isOpen={isOpen}
                onClose={_onClose}
            >
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Excluir Funcionário</AlertDialog.Header>
                    <AlertDialog.Body>
                        Confirma exclusão dos dados do Funcionário?
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="unstyled"
                                colorScheme="coolGray"
                                onPress={_onClose}
                                ref={cancelRef}
                            >
                                Não
                            </Button>
                            <Button colorScheme="danger" onPress={() => _handleExcluirFuncionario()}>
                                Sim, Excluir Funcionário
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
            <FloatingAction
                showBackground={false}
                actions={actionSalvar}
                onPressItem={name => {
                    if (name === 'btn_novo') {
                        _handleAdicionarFuncionario()
                    }
                }}
            />
        </>
    )
}


export default MeusPedidos;