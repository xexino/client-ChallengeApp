import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { CheckoutForm } from "./CheckoutForm";


const PUBLIC_KEY =
  "pk_test_51KKUmkEv0QdWABSoRnN6HxoZM9VZ9NIlG8rTmfnskmKc2XCSEK1WO1YIkbatqMeYRJUYoYARqAwyVrwYpW0hUAUH00vDbjuedl";

  const stripeTestPromise = loadStripe(PUBLIC_KEY);
  
  const Stripe = () => {
    return (
      <Elements stripe={stripeTestPromise}>
        <CheckoutForm />
      </Elements>
    );
  };
  
  export default Stripe;
  
  