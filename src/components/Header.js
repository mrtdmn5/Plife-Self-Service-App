import { Dimensions, Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

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
