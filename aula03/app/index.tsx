import React from "react";
import {View, StyleSheet} from 'react-native';
import BotaoProps from '../components/BotaoProps';

const App = () => {
  const handlePress = () => {
    console.log('Botão pressionado!');
};

return(
  <View style={styles.container}>
    <BotaoProps label="clique aqui" corFundo="green"
    onPress={handlePress}/>
    <BotaoProps label="clique agora" corFundo="pink"
    onPress={handlePress}/>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
});

export default App;
