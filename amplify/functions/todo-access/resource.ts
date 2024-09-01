import { defineFunction } from '@aws-amplify/backend';

export const todoAccess = defineFunction({
  name: 'todo-access',
  entry: './handler.ts'
});