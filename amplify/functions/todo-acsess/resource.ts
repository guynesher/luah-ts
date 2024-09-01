import { defineFunction } from '@aws-amplify/backend';

export const todoAccess = defineFunction({
  name: 'todo-Access',
  entry: './handler.ts'
});