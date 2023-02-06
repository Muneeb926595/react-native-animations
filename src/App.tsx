import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigator } from './view/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MagicSheetPortal } from 'react-native-magic-sheet';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <MagicSheetPortal />
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <AppNavigator />
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
