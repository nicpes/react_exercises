import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSWR } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser({ name }) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${name}`,
    fetcher
  );

  return {
    data,
    error,
    loading,
  };
}
