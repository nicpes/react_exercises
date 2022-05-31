import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser({ name }) {
  const { data, error, loading } = useSWR(
    () => (name ? `https://api.github.com/users/${name}` : null),
    fetcher
  );

  return {
    data,
    error,
    loading,
  };
}
