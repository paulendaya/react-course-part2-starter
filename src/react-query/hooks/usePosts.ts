import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number | undefined;
  }

  interface PostQuery {
    pageSize: number
  }

const usePosts = (query: PostQuery) => {
    const fetchPosts = (pageParam: number) =>
        axios
          .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _start: (pageParam - 1) * query.pageSize,
                _limit: query.pageSize
            },
          })
          .then((res) => res.data);

    return useInfiniteQuery<Post[], Error>({
        // users/userId/posts
        queryKey: ["posts", query],
        queryFn: ({pageParam = 1}) => fetchPosts(pageParam),
        staleTime: 10_000,
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
          
          //allPages contains array of the total pages 
            //0: {Post[]}, {Post[]}... 
            //1: {Post[]}, {Post[]}...
          //lastPage contains the lastPage in allPages
            //1: {Post[]}, {Post[]}...
          return lastPage.length > 0 ? allPages.length + 1 : undefined;
        }
      });
}

export default usePosts;
