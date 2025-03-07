import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constant";
import APIClient from "../../services/api-client";

const apiClient = new APIClient<Todo>("todos");

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient(); // Access the queryClient

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // console.log(savedTodo)

      // First Approach: invalidating the cache
      /* queryClient.invalidateQueries({
          queryKey: ['todos']
        }) // doesn't work in JSON placeholder */

      // Second Approach: Updating the data in the cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodos;
