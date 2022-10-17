import { Text, View, StyleSheet, Dimensions, SafeAreaView,StatusBar } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Products />
      <Footer />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.75,
    borderColor: "#a0a0a0",
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
