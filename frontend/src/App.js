// From React
import React from 'react';
import { useState, useCallback } from 'react';

// From Shopify-Polaris
import {
  Page,
  Tabs,
} from '@shopify/polaris';

// Components from Files
import * as componentOffers from './offers'
import * as componentHelp from './help'
import * as componentSettings from './settings'



function App() {

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const mainTab = [
    {
      id: 'offers-1',
      content: 'Offers',
      children: componentOffers.default(),
      // accessibilityLabel: 'offers-1',
      // panelID: 'all-customers-content-1',
    },
    {
      id: 'settings-1',
      content: 'Settings',
      children: componentSettings.default(),
      // panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'help-1',
      content: 'Help',
      children: componentHelp.default(),
      // panelID: 'repeat-customers-content-1',
    },

  ];



  return (
    <Page fullWidth primaryAction={{
      content: 'Add Offer', disabled: false, tone: 'success', size: 'large',
      url: '/addoffer'
    }}>
      <Tabs tabs={mainTab} selected={selected} onSelect={handleTabChange}>
        {mainTab[selected].children}
      </Tabs>
    </Page>
  );
}

export default App;
