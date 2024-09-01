import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { todoAccess } from './functions/todo-acsess/resource';

const backend = defineBackend({
  auth,
  data,
  storage,
  todoAccess,
});



