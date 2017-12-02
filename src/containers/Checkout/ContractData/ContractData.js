import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContractData.css'
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input'

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
            price: this.props.price,
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
            <Input inputtype={"input"} type={"text"} name={"name"} placeholder={"Your name"}/>
            <Input inputtype={"input"} type={"email"} name={"email"} placeholder={"Your Email"}/>
            <Input inputtype={"input"} type={"text"} name={"street"} placeholder={"Street"}/>
            <Input inputtype={"input"} type={"text"} name={"postal"} placeholder={"Postal Code"}/>
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
