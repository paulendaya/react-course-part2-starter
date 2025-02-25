import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number | undefined;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = (userId: number | undefined) => {
    const fetchPosts = (userId: number | undefined) =>
        axios
          .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
            params: {
                userId,
            },
          })
          .then((res) => res.data);

    return useQuery<Post[], Error>({
        queryKey: ["posts", userId],
        queryFn: () => fetchPosts(userId),
        staleTime: 10_000,
      });
}

export default usePosts;
