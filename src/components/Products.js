import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";

const Product = () => {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.75,
    borderColor: "#a0a0a0",
    height:"80%",
    width:Dimensions.get("window").width 
  },
});
