import { createStackNavigator, createAppContainer  } from 'react-navigation'
import Home from '../Components/Page/Home'
import ProductDetail from '../Components/Page/ProductDetail'

const SearchStackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'BileMo',
            headerTintColor: 'red',
            headerBackTitle: 'A much too long text for back button from B to A',
            headerTruncatedBackTitle: `to A`
        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.data.model,
        }),
    }
});

export default createAppContainer(SearchStackNavigator)