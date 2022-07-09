import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { merge } from "lodash";
import Spinner from "../UI/Spinner";
import Connection from "./Connection";
import { DEFAULT_PAGE, LIMIT } from "../../constant";
import Pagination from "../UI/Pagination";

function ConnectionList({ GQL, id, getData }) {
  const [page, setPage] = useState(DEFAULT_PAGE);

  const { data, loading } = useQuery(
    GQL,
    merge({
      variables: {
        limit: LIMIT,
        page,
        id: id,
      },
    })
  );

  const connections = data?.[getData]?.data;

  const pageInformation = data?.[getData]?.pageInformation;

  return (
    <>
      <Spinner show={loading} centerd={true} />
      <div className="space-y-12">
        <div className="flex flex-col space-y-8">
          {connections?.map((item) => (
            <Connection key={item.id} data={item} refetchedQuery={GQL} />
          ))}
        </div>
        <Pagination setPage={setPage} pageInformation={pageInformation} />
      </div>
    </>
  );
}

export default ConnectionList;
