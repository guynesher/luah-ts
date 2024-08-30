import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'Luah-ts',
  access: (allow) => ({
    'global/*': [
      allow.guest.to(['read']) // additional actions such as "write" and "delete" can be specified depending on your use case
    ],
    'public/media/*': [
      allow.groups(['Users']).to(['read']) // additional actions such as "write" and "delete" can be specified depending on your use case
    ]
  })
});
