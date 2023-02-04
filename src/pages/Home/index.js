import { StyleSheet, Text, View } from 'react-native';
import Header from '../../Components/Header';
import Balance from '../../Components/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Patrick Anjos"/>
        <Balance balance="9.250,90" expense="-500,00"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
