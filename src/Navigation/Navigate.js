import { createStackNavigator, createAppContainer  } from 'react-navigation'
import Home from '../Components/Page/Home'
import ProductDetail from '../Components/Page/ProductDetail'
import {COLOR_PRIMARY, COLOR_SECONDARY} from "../Styles/Colors";


const SearchStackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'BileMo',
            headerTintColor: COLOR_PRIMARY,
        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.data.model,
            headerTintColor: COLOR_SECONDARY,
        }),
    }
});

export default createAppContainer(SearchStackNavigator)