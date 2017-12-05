import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        purchaseBurgerStart();
        axios.post('/orders.json', orderData)//send order summary as json to my server
            .then(response => {
                console.log(response);
                dispatch(purchaseBurgerSuccess(response.data, orderData));
            })
            .catch(error => {
                console.log(error);
                dispatch(purchaseBurgerFail(error));
            });
    };
};