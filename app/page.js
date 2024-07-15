"use client";

import { useEffect, useState } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch("/api/products", {
      method: "GET",
    });
    const data = await response.json();
    setData(data);
    console.log(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>{isLoading ? <h1>Loading...</h1> : <div>{data.message}</div>}</div>
  );
};

export default HomePage;
