import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser({ name }) {
  const { data, error, loading } = useSWR(
    () => (name ? `https://api.github.com/users/${name}` : null),
    fetcher
  );

  function handleRefresh(){
    mutate()
  }

  return {
    handleRefresh,
    data,
    error,
    loading,
  };
}
