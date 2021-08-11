import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const onToken=(token)=>{
console.log(token);
alert('Payment Successful')
}

const StripeCheckoutButton = ({ price }) => {
    //stripe price will be in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JMzsqSAzXhsCq3SkYcxmW5fL1C6L2H9zaDRyg2YfQFjg1SVssLoQpUO4PFJ4imctRXFwfe5eFVKpeaazSQZnmip00rew3b698'
    return (
        <div>
<StripeCheckout label='Pay Now' name='Store Shop ltd.' billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg' description={`Your total is $ ${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey}/>
        </div>

    );
}

export default StripeCheckoutButton;
