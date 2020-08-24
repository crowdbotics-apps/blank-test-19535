import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile94033Navigator from '../features/UserProfile94033/navigator';
import BlankScreen191135Navigator from '../features/BlankScreen191135/navigator';
import BlankScreen090152Navigator from '../features/BlankScreen090152/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
