import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number | undefined;
  }

  interface PostQuery {
    page: number,
    pageSize: number
  }

const usePosts = (query: PostQuery) => {
    const fetchPosts = (query: PostQuery) =>
        axios
          .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _start: (query.page - 1) * query.pageSize,
                _limit: query.pageSize
            },
          })
          .then((res) => res.data);

    return useQuery<Post[], Error>({
        // users/userId/posts
        queryKey: ["posts", query],
        queryFn: () => fetchPosts(query),
        staleTime: 10_000,
      });
}

export default usePosts;
