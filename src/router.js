import React from 'react';
import { SearchHeader, Image, Text } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Readme from './Readme';
import Subreadme from './Subreadme';
import userslist from './userslist';
import Userfollwings from './Userfollwings';
import Userfollwers from './Userfollwers';
const router = StackNavigator({  
    Readme:{screen:Readme,navigationOptions:{header:null}},
    Userfollwings:{screen:Userfollwings,navigationOptions:{header:null}},
    Userfollwers:{screen:Userfollwers,navigationOptions:{header:null}},
    
    Subreadme:{screen:Subreadme,navigationOptions:{header:null}},
    userslist:{screen:userslist,navigationOptions:{header:null}},
},{ initialRouteName: 'Readme' });
const styles = {
  tabImg: { width: 16, height: 14, resizeMode: 'contain' },
  tabLabel: { fontSize: 11,fontFamily:'NeueKabel-Light' }
};

export default router;
