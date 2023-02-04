import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../Components/Header";
import Balance from "../../Components/Balance";
import Momvements from "../../Components/Momvements";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "01/12/2022",
    type: 0, // despesas
  },
  {
    id: 2,
    label: "Salário",
    value: "4.500,00",
    date: "02/12/2022",
    type: 1, // receita
  },
  {
    id: 3,
    label: "Boleto conta Àgua",
    value: "240,00",
    date: "10/12/2022",
    type: 0,
  },
  {
    id: 4,
    label: "Boleto conta Internet",
    value: "130,00",
    date: "15/12/2022",
    type: 0,
  },
  { 
    id: 5, 
    label: "Freelas", 
    value: "1.500,00", 
    date: "22/12/2022", 
    type: 1 
   },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Patrick Anjos" />
      <Balance balance="9.250,90" expense="-500,00" />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        // Por padrão a ky deve ser uma string.. convertendo o id - String(item.id)
        keyExtractor={(item) => String(item.id)} 
        // Srcoll desnecessário
        showsVerticalScrollIndicator={false}
        // Render all items
        renderItem={({ item }) => <Momvements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
