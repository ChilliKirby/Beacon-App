import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textInfo}>ghjhj</Text>
      <Text style={styles.textInfo}>ghjhj</Text>
      <Text style={styles.textInfo}>ghjhj</Text>
      <Text style={styles.textInfo}>ghjg</Text>
      {/* <MapView style={styles.mapContainer} provider={PROVIDER_GOOGLE}/> */}
      <MapView
      style={{width:400,height:200}}
      provider={PROVIDER_GOOGLE}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
