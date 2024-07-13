import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const [resultado, setResultado] = useState('');
  const [description, setDescription] = useState('');

  const calculate = () => {
    if (peso && altura) {
      const weight = parseFloat(peso);
      const height = parseFloat(altura) / 100;

      const imc = weight / (height * height);

      if (imc < 18.5) {
        setResultado('Baixo peso');
        const description =
          'É recomendado procurar um médico para avaliação criteriosa do resultado. Pode indicar um estado de consumo do organismo, com poucas reservas e riscos associados.';

        setDescription(description);
      } else if (imc > 18.5 && imc <= 24.9) {
        setResultado('Peso adequado');
        const description =
          'Tudo indica que está tudo bem, mas é importante avaliar outros parâmetros da composição corporal, para compreender se estão dentro do recomendado. Algumas pessoas apresentam IMC dentro da normalidade, mas têm circunferência abdominal maior que a recomendada e/ou quantidade de massa gorda acima do ideal.';

        setDescription(description);
      } else if (imc >= 25 && imc <= 29.9) {
        setResultado('Sobrepeso');

        const description =
          'O sobrepeso está associado ao risco de doenças como diabetes e hipertensão. Então, atenção! Consulte um médico e reveja hábitos para reverter o quadro. Também é importante avaliar outros parâmetros, como a circunferência abdominal.';

        setDescription(description);
      } else if (imc > 30 && imc <= 34.9) {
        setResultado('Obesidade grau I');

        const description =
          'É importante buscar orientação médica e nutricional para entender melhor o seu caso, mesmo que os exames (colesterol e glicemia, por exemplo) estejam normais.';

        setDescription(description);
      } else if (imc > 35 && imc <= 39.9) {
        setResultado('Obesidade grau II');

        const description =
          'Indica um quadro de obesidade mais evoluído em relação à classificação anterior e, mesmo com exames laboratoriais dentro da normalidade, não se deve atrasar a busca por orientação médica e nutricional.';

        setDescription(description);
      } else {
        setResultado('Obesidade grau III');

        const description =
          'Nesse ponto, a chance de já estarmos diante de outras doenças associadas é mais elevada. É fundamental buscar orientação médica.';

        setDescription(description);
      }
      setAltura('');
      setPeso('');
    } else {
      Alert.alert('Digitar um peso e uma altura válida');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Calculadora IMC</Text>

        <View style={styles.containerInput}>
          <TextInput
            value={altura}
            style={styles.input}
            keyboardType="numeric"
            placeholder="Altura sem vírgula"
            onChangeText={value => setAltura(value)}
          />
          <Text style={styles.text}>cm</Text>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            value={peso}
            style={styles.input}
            keyboardType="numeric"
            placeholder="Seu peso em quilos"
            onChangeText={value => setPeso(value)}
          />
          <Text style={styles.text}>kg</Text>
        </View>
        <View style={styles.viewBnt}>
          <Button title="Calcular" onPress={calculate} color="steelblue" />
        </View>
        <View style={styles.resultado}>
          <Text style={styles.text}>Resultado: {resultado}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },

  header: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    color: 'steelblue',
    fontWeight: 'bold',
  },

  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    backgroundColor: '#D2D2D2',
    width: '90%',
    borderRadius: 5,
    marginTop: 15,
    height: 40,
  },

  text: {
    textAlignVertical: 'bottom',
    color: 'steelblue',
    fontWeight: 'bold',
  },

  viewBnt: {
    marginTop: 30,
    marginBottom: 20,
  },

  resultado: {},
  description: {
    marginTop: 5,
    textAlign: 'justify',
  },
});

export default App;
