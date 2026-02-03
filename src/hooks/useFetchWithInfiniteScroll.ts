import { useState, useEffect, useCallback } from "react";
import type { ApiResponse } from "../types/api";
import { useInfiniteScroll } from "./useInfiniteScroll";

interface UseFetchWithInfiniteScrollOptions {
  url: string;
  errorMessage: string;
}

export const useFetchWithInfiniteScroll = <T>({
  url,
  errorMessage,
}: UseFetchWithInfiniteScrollOptions) => {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (pageNum: number) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${url}?page=${pageNum}`);
        if (!response.ok) {
          setHasMore(false);
          throw new Error(errorMessage);
        }
        const result: ApiResponse<T> = await response.json();

        setData((prev) => [...prev, ...result.results]);
        setHasMore(result.info.next !== null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [url, errorMessage],
  );

  useEffect(() => {
    fetchData(page);
  }, [page, fetchData]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [loading, hasMore]);

  const observerTarget = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: loadMore,
  });

  return {
    data,
    loading,
    error,
    hasMore,
    observerTarget,
  };
};
