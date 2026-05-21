import React, { useState } from 'react';
import {
 View,
 Text,
 TextInput,
 StyleSheet,
 ImageBackground,
 TouchableOpacity,
 ScrollView,
} from 'react-native';

export default function Carossel() {

 const [nome, setNome] = useState('');
 const [telefone, setTelefone] = useState('');
 const [cpf, setCpf] = useState('');
 const [dataViagem, setDataViagem] = useState('');

 const enviar = () => {
   console.log({
     nome,
     telefone,
     cpf,
     dataViagem
   });
 };

 return (

  <ImageBackground
   source={{
    uri:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05'
   }}
   style={styles.background}
  >

   <View style={styles.overlay}>

    <ScrollView
     contentContainerStyle={styles.container}
    >

     <Text style={styles.titulo}>
      Viaje Pelo Mundo ✈️
     </Text>

     <Text style={styles.subtitulo}>
      Planeje sua próxima aventura
     </Text>

     <View style={styles.formulario}>

      <TextInput
       placeholder="Nome"
       style={styles.input}
       value={nome}
       onChangeText={setNome}
      />

      <TextInput
       placeholder="Telefone"
       style={styles.input}
       keyboardType="phone-pad"
       value={telefone}
       onChangeText={setTelefone}
      />

      <TextInput
       placeholder="CPF"
       style={styles.input}
       keyboardType="numeric"
       value={cpf}
       onChangeText={setCpf}
      />

      <TextInput
       placeholder="Data da viagem"
       style={styles.input}
       value={dataViagem}
       onChangeText={setDataViagem}
      />

      <TouchableOpacity
       style={styles.botao}
       onPress={enviar}
      >

       <Text style={styles.textoBotao}>
        Fazer Login
       </Text>

      </TouchableOpacity>

     </View>

    </ScrollView>

   </View>

  </ImageBackground>

 );
}

const styles = StyleSheet.create({

 background:{
  flex:1
 },

 overlay:{
  flex:1,
  backgroundColor:'rgba(0,0,0,0.45)'
 },

 container:{
  flexGrow:1,
  justifyContent:'center',
  padding:25
 },

 titulo:{
  color:'#FFF',
  fontSize:34,
  fontWeight:'bold',
  textAlign:'center'
 },

 subtitulo:{
  color:'#FFF',
  textAlign:'center',
  marginTop:10,
  marginBottom:30,
  fontSize:16
 },

 formulario:{
  backgroundColor:'#FFF',
  borderRadius:20,
  padding:20
 },

 input:{
  borderWidth:1,
  borderColor:'#DDD',
  borderRadius:10,
  padding:14,
  marginBottom:15
 },

 botao:{
  backgroundColor:'#0A84FF',
  padding:15,
  borderRadius:10
 },

 textoBotao:{
  color:'#FFF',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:16
 }

});