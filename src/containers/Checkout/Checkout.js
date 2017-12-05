import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContractData from './ContractData/ContractData';

//show the summary of Checkout
class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('./checkout/contract-data');
    };

    render() {
        let summary = <Redirect to={'/'}/>;
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to={'/'}/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}/>);
                    <Route path={this.props.match.path + '/contract-data'}
                           component={ContractData}/>;
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};


export default connect(mapStateToProps)(Checkout);
