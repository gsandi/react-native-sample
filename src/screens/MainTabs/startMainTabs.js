import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("home", 30),
        Icon.getImageSource("sign-out", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'react-native-sample.HomeScreen',
                    label: 'Home',
                    title: 'Home',
                    icon: sources[0]
                },
                {
                    screen: 'react-native-sample.LogoutScreen',
                    label: 'Logout',
                    title: 'Logout',
                    icon: sources[1]
                }
            ]
        });
    });
};

export default startTabs;