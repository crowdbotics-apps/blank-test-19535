import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps94042Navigator from '../features/Maps94042/navigator';
import Add-Item94041Navigator from '../features/Add-Item94041/navigator';
import Maps94037Navigator from '../features/Maps94037/navigator';
import UserProfile94033Navigator from '../features/UserProfile94033/navigator';
import BlankScreen191135Navigator from '../features/BlankScreen191135/navigator';
import BlankScreen090152Navigator from '../features/BlankScreen090152/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps94042: { screen: Maps94042Navigator },
Add-Item94041: { screen: Add-Item94041Navigator },
Maps94037: { screen: Maps94037Navigator },
UserProfile94033: { screen: UserProfile94033Navigator },
BlankScreen191135: { screen: BlankScreen191135Navigator },
BlankScreen090152: { screen: BlankScreen090152Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
