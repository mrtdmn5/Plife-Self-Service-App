import { Text, View, StyleSheet, Dimensions } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.75,
    borderColor: "#a0a0a0",
    height:"10%",
    width:Dimensions.get("window").width 
  },
});
