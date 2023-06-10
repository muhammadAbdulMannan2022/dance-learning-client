import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const Chackout = ({ classToPayId }) => {
  const { user, loading } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [prossing, setProssing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (!loading) {
      console.log(user.email);
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          price: 12,
          classToPayId,
          userEmail: user.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setClientSecret(data.clientSecret);
        });
    }
  }, [classToPayId, user, loading]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProssing(true);
    const card = elements.getElement(CardElement);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProssing(false);
      console.log(error.message);
      Swal.fire("error", `${cardError}`, "error");
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          // if you want add detail
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError.message);
      setCardError(confirmError.message);
      Swal.fire("error", `${cardError}`, "error");
      //   console.log(cardError);
      setProssing(false);
    } else {
      try {
        const res = await fetch(`http://localhost:5000/updatepay`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ classToPayId, userEmail: user.email }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }

      console.log(paymentIntent);
      Swal.fire("success", `payment successful`, "success");
      setCardError("");
      setProssing(false);
    }
  };
  return (
    <form className="mx-5 md:mx-10 max-w-[700px]" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="px-4 py-2 mt-5 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
        type="submit"
        disabled={!stripe || !clientSecret || prossing}
      >
        {prossing ? "prossing..." : "Pay"}
      </button>
      {console.log(prossing)}
    </form>
  );
};

export default Chackout;
