import { createAction } from 'redux-actions';

export namespace TasksActions {
  export enum Type {
    LOAD_TASKS = 'LOAD_TASKS',
  }

  export const loadTasks = createAction(Type.LOAD_TASKS);
}

export type TasksActions = Omit<typeof TasksActions, 'Type'>;