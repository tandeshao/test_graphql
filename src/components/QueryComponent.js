import { useQuery } from "@apollo/client";
import { GET_ALL_SHOPS } from "../GraphQL/Queries";
import { useEffect } from "react";

export default function QueryComponent() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_SHOPS);
  

  useEffect(() => {
    if (!loading && !error && data) {
      console.log("query component", data);
    }
  }, [data, error, loading])

  return (
    <div>
      <button onClick={() => refetch()}> Get Query </button>
    </div>
  );
}
