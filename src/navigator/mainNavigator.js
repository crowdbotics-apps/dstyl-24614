import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile207501Navigator from '../features/UserProfile207501/navigator';
import Tutorial207500Navigator from '../features/Tutorial207500/navigator';
import NotificationList207472Navigator from '../features/NotificationList207472/navigator';
import Settings207471Navigator from '../features/Settings207471/navigator';
import Settings207463Navigator from '../features/Settings207463/navigator';
import UserProfile207461Navigator from '../features/UserProfile207461/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile207501: { screen: UserProfile207501Navigator },
Tutorial207500: { screen: Tutorial207500Navigator },
NotificationList207472: { screen: NotificationList207472Navigator },
Settings207471: { screen: Settings207471Navigator },
Settings207463: { screen: Settings207463Navigator },
UserProfile207461: { screen: UserProfile207461Navigator },

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
