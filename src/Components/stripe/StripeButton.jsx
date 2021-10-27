import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./StripeButton.scss";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pk =
    "pk_test_51HyHASFs9fsWgA4Vr1HT3On8xsAc0zyv3e8OCE0bHuY8n9e8PZw7CimvA8vkCoQFzTfoqvJMNG53o8MNDUKuE3pT00nsyvcOSM";
  const onToken = (token) => {
    console.log(token);
    alert("Success");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Inc."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pk}
    />
  );
};

export default StripeButton;
