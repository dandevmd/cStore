import {useState} from 'react';
import {useSelector} from 'react-redux';
import { PaymentButton } from './paymentForm.styles';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {selectCartItemsTotal} from '../../redux/selectors/cartSelector';
import {selectCurrentUser} from '../../redux/selectors/userSelector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { PaymentFormContainer, FormContainer } from './paymentForm.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartItemsTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        setIsProcessingPayment(true)

        const response = await fetch('/.netlify/functions/CreatePaymentIntent', {
            method: 'post',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: amount * 100
            })
        }).then(res => res.json())

        setIsProcessingPayment(false)

        // console.log(response)
        const { paymentIntent: { client_secret } } = response;
        // console.log(client_secret)

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_name: {
                    name: currentUser ? currentUser.displayName : 'guest',
                }
            }
        })

        setIsProcessingPayment(false)

        if (paymentResult.error) {
            alert(paymentResult.error.message)
        } else if (paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment Successful')
        }


    }


    return (
        <PaymentFormContainer>
            <FormContainer >
                <h2> Credit Card Payment </h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} onClick={paymentHandler} buttonType={BUTTON_TYPE_CLASSES.inverted}>
                    Pay Now
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm