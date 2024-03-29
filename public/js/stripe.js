/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51LWnaMDBQHqwyqRvyc3Lnjsk0k7R4NB5zJBf3O3bOZvdRobmWwHwROaHxH8Ckxot5dHNpkSmJ1A3jn9Aw9nUHRP0001qHxHd2l'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
