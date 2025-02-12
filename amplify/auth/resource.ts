import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from "./post-confirmation/resource"


/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  // senders: {
  //   email: {
  //     // configure using the email registered and verified in Amazon SES
  //     fromEmail: "info.luah@gmail.co.il",
  //     fromName: "Luah",
  //     replyTo: "info.luah@gmail.co.il"
  //   },
  // },
  groups: ['Admins', 'Users'],
  triggers: {
    postConfirmation,
  },
  access: (allow) => [
    allow.resource(postConfirmation).to(["addUserToGroup"]),
  ],
});
