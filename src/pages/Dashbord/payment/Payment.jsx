import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import Chackout from "./Chackout";
// TODO: provide pk
console.log(import.meta.env.VITE_Stripe);
const stripePromise = loadStripe(import.meta.env.VITE_Stripe);
const Payment = () => {
  const [classToPay, setClassToPay] = useState("");
  const handleChangeId = (e) => {
    setClassToPay(e.target.value);
  };
  return (
    <div className="w-3/4 mx-auto max-w-[700px]">
      <SectionTitle title={"pay now"}></SectionTitle>
      <div>
        <input
          onChange={(e) => handleChangeId(e)}
          className="border mx-auto w-full  py-3 px-4 mb-3"
          type="text"
          name="class id"
          placeholder="class id you got in selected class"
        />
      </div>
      <Elements stripe={stripePromise}>
        <Chackout classToPayId={classToPay}></Chackout>
      </Elements>
    </div>
  );
};

export default Payment;
