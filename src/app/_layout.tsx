import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarPosition: 'top', // Move as abas para cima
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 60,
          paddingTop: Platform.OS === 'ios' ? 40 : 0, // Ajuste para o entalhe do iPhone
        },
        tabBarActiveTintColor: '#0055aa',
        tabBarIndicatorStyle: {
          backgroundColor: '#0055aa',
          height: 3,
        },
      }}
    >
      {/* 1. Viagens (Página Inicial) */}
      <Tabs.Screen name="index" options={{ title: 'Viagens' }} />

      {/* 2. Lugares */}
      <Tabs.Screen name="explore" options={{ title: 'Lugares' }} />

      {/* 3. Hotéis */}
     {/* 4. Carrinho (Sempre por último) */} <Tabs.Screen name="carrinho" options={{ title: 'Carrinho' }} />

      {/* 4. Carrinho (Sempre por último) */}
      <Tabs.Screen name="hoteis" options={{ title: 'hoteis' }} />
    </Tabs>
  );
}