const RegEventModel = require("../Models/RegisterModel");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.Payment = async (req, res) => {
  try {
    const { temp } = req.body;
    const data = await RegEventModel.findOne({ regid: temp });

    const product = await stripe.products.create({
      name: "data.EventName",
    });
    const customer = await stripe.customers.create({
      name: "John Doe",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
      email: "jennyrosen@example.com",
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: data.total * 100, // 100 INR
      currency: "inr",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      customer: customer.id,
      mode: "payment",
      success_url: `http://localhost:5173/myorder/${data.buyerId}`,
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
