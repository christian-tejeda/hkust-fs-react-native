import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail },
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
})

class Main extends Component {

    render() {
 
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MenuNavigator/>
                <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </View>
        );
    }
}
  
export default Main;