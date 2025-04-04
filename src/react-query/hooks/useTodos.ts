import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constant";
import todoService, { Todo } from "../../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 10_000,
  });
};

export default useTodos;
