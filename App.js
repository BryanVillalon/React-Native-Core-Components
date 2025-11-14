import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ActIndi from './ActivityIndicator';
import Bt from './Button';
import DisplayImg from './Image';
import ImgBackground from './ImageBackground';
import KeyboardAV from './KeyboardAvoidingView';
import Md from './Modal';
import Press from './Pressable';
import Rc from './RefreshControl';
import Sv from './ScrollView';
import Sl from './SectionList';
import Sb from './StatusBar';
import NestedTxt from './Text';
import InputTxt from './TextInput';
import TouchH from './TouchableHighlight';
import TouchOpa from './TouchOpacity';
import Touchwithout from './TouchableWithoutFeedback';
import ViewBoxes from './View';
import Virtual from './VirtualizedList';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          <Text style={styles.title}>ActivityIndicator Component</Text>
          <ActIndi />

          <Text style={styles.title}>Button Component</Text>
          <Bt />

          <Text style={styles.title}>Image Component</Text>
          <DisplayImg />

          <Text style={styles.title}>Image Background Component</Text>
          <ImgBackground />

          <Text style={styles.title}>Keyboard Avoiding View Component</Text>
          <KeyboardAV />

          <Text style={styles.title}>Modal Component</Text>
          <Md />

          <Text style={styles.title}>Pressable Component</Text>
          <Press />

          <Text style={styles.title}>Refresh Control Component</Text>
          <View style={styles.innerScrollWrapper}>
            <Rc />
          </View>

          <Text style={styles.title}>Scroll View Component</Text>
          <View style={styles.innerScrollWrapper}>
            <Sv />
          </View>

          <Text style={styles.title}>Section List Component</Text>
          <View style={styles.innerScrollWrapper}>
            <Sl />
          </View>

          <Text style={styles.title}>Status Bar Component</Text>
          <Sb />

          <Text style={styles.title}>Text Component</Text>
          <NestedTxt />

          <Text style={styles.title}>Text Input Component</Text>
          <InputTxt />

          <Text style={styles.title}>Touchable Highlight Component</Text>
          <TouchH />

          <Text style={styles.title}>Touch Opacity Component</Text>
          <TouchOpa />

          <Text style={styles.title}>Touchable Without Feedback Component</Text>
          <Touchwithout />

          <Text style={styles.title}>View Component</Text>
          <ViewBoxes />

          <Text style={styles.title}>Virtualized List Component</Text>
          <View style={styles.innerScrollWrapper}>
            <Virtual />
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  innerScrollWrapper: {
    height: 200, 
    width: '100%',
    marginBottom: 20,
  },
});
