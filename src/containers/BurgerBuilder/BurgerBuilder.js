import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';
import BurgerControls from "../../components/Burger/BuildControls/BuildControls"

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    state = {
        ingredients: {
            salad: 2,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls/>
            </Aux>
        );
    }
}


export default BurgerBuilder;
