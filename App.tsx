import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import ElevatedCards from './components/elevatedCards';
import FancyCard from './components/fancyCard';
import FlatCards from './components/FlatCards';




const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard name={'HAWA MEHAL'} image={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/e3/4b/img-20180921-184349-largejpg.jpg?w=1200&h=1200&s=1'} />
          <FancyCard name={'STONE FACES'} image={'https://i.insider.com/5beddc3848eb120a0a2dbf62?width=750&format=jpeg&auto=webp'} />
          <ContactList />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App