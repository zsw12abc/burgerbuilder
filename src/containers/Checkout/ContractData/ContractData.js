import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContractData.css'
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

class ContractData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Shaowei',
                address: {
                    street: 'Box Hill',
                    zipCode: '3128',
                    country: 'Australia'
                },
                email: 'zswkiller@gmail.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)//send order summary as json to my server
            .then(response => {
                console.log(response);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });
    };

    render() {
        let form = (<form>
            <input className={classes.Input} type={"text"} name={"name"} placeholder={"Your name"}/>
            <input className={classes.Input} type={"email"} name={"email"} placeholder={"Your Email"}/>
            <input className={classes.Input} type={"text"} name={"street"} placeholder={"Street"}/>
            <input className={classes.Input} type={"text"} name={"postal"} placeholder={"Postal Code"}/>
            <Button btnType={"Success"} clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContractData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContractData;
