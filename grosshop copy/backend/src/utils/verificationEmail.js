import { sendEmail } from "./sendEmail.js";

export async function sendVerificationEmail(user) {
  return sendEmail({
    to: user.email,
    subject: "Please verify your account",
    text: `Hello ${user.name},
  welcome to SuperSleep, your favorite bead and breakfast host.
  Please verify your account by entering this 6 digit code:
  ${user.sixDigitCode}
  Yours,
  SuperSleep Team`,
  });
}
