import React, {useState} from 'react';
import {Box, Pressable, Text, Button} from 'native-base';
import Avatar2 from '../../components/Avatar2';
import colors from '../../styles/colors.json';
import DatePicker from 'react-native-date-picker';

const Contract = ({route}) => {
  const [open, setOpen] = useState(false);
  const [dateService, setDateService] = useState(new Date());
  const [dateString, setDateString] = useState('Selecione data');

  /**
   * Para formatar o valor de com R$ e decimais
   * @param {*} value
   */
  const nubFormat = value => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  /**
   * formata a data no padrao DD de MES de ANO
   */
  const dateServiceFormat = date => {
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
  };

  return (
    <Box height="120" backgroundColor={colors.colors.blue}>
      <Text
        color="#ffff"
        fontSize={32}
        fontFamily="WorkSans-Medium"
        textAlign="center">
        Clean Serviços
      </Text>
      <Box marginTop="6">
        <Avatar2
          size="24"
          alt="Contratar"
          urlAvatar="https://wallpaperaccess.com/full/317501.jpg"
        />
      </Box>

      <Box
        backgroundColor={colors.colors.white1}
        borderRadius="24"
        margin="4"
        shadow="3">
        <Box margin="3">
          <Text fontSize="16" fontFamily="WorkSans-ExtraLight">
            Contratado
          </Text>
          <Text fontFamily="WorkSans-Regular">{route.params.name}</Text>
        </Box>
        <Box margin="3">
          <Text fontSize="16" fontFamily="WorkSans-ExtraLight">
            Iniciar em:
          </Text>

          <Box>
            <Pressable
              onPress={() => {
                setOpen(true);
              }}>
              <Text fontFamily="WorkSans-Regular">{dateString}</Text>
            </Pressable>
          </Box>

          <DatePicker
            locale="pt-br"
            modal
            mode="date"
            title="Selecione uma data"
            open={open}
            date={dateService}
            onConfirm={date => {
              setOpen(false);
              setDateString(dateServiceFormat(date)); // data formatada
              setDateService(date); // data que sera salva na base
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </Box>

        <Box margin="4">
          <Text fontFamily="WorkSans-ExtraLight">Trabalho contratado</Text>
          <Text fontFamily="WorkSans-SemiBold" fontSize={18}>
            {route.params.descricao}
          </Text>
          <Text fontFamily="WorkSans-Bold" fontSize={28}>
            {nubFormat(route.params.custo)}
          </Text>
        </Box>
      </Box>
      <Box marginX={8}>
        <Button
          onPress={() => {
            alert('Msg', 'Mensagem de teste');
          }}
          alignItems="center"
          borderRadius="md">
          Confirmar
        </Button>
      </Box>
    </Box>
  );
};

export default Contract;
