import mongoose from "mongoose";
import { User, Order } from "../../models/index.js";

export const createOrderAndClearCart = async (userId, orderDetails) => {
  // Beginne eine Transaktion
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    // Erstelle die neue Order
    const order = await Order.create([orderDetails], { session });

    // Aktualisiere den User: Füge die Order zur Order-History hinzu und leere den Cart
    await User.findByIdAndUpdate(
      userId,
      {
        $push: { orderHistory: order[0]._id },
        $set: { cart: [] },
      },
      { session }
    );

    // Commit die Transaktion
    await session.commitTransaction();
    session.endSession();

    return order[0]; // Rückgabe der erstellten Order
  } catch (error) {
    // Bei einem Fehler, mache die Transaktion rückgängig
    await session.abortTransaction();
    session.endSession();
    throw error; // Weiterleiten des Fehlers
  }
};
