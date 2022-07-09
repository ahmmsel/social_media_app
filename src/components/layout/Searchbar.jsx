import React, { useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import { debounce, uniqBy } from "lodash";
import { SearchIcon } from "@heroicons/react/solid";
import { USERS_RESULTS } from "../../graphql/userGQL";
import { LIMIT, DEFAULT_CURSOR } from "../../constant";
import UsersResults from "../users/UsersResults";

function Searchbar() {
  const [searchFor, { data, fetchMore }] = useLazyQuery(USERS_RESULTS, {
    variables: {
      limit: LIMIT,
      cursor: DEFAULT_CURSOR,
    },
  });

  const debouncedSearch = useCallback(debounce(searchFor, 500), []);

  const handleSearchChange = (e) =>
    debouncedSearch({ variables: { query: e.target.value } });

  const handleSearchRest = () => debouncedSearch({ variables: { query: "" } });

  return (
    <div className="sticky top-0 z-50 container py-2">
      <div className="rounded-xl bg-neutral-700">
        <label className="flex items-center py-1 px-4 space-x-4">
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Search for users..."
            onChange={handleSearchChange}
            onBlur={handleSearchRest}
          />
          <SearchIcon className="primary-icon" />
        </label>
        {data?.getUserResults?.data && (
          <UsersResults
            data={data}
            fetchMore={() =>
              fetchMore({
                variables: {
                  limit: LIMIT,
                  cursor: data?.getUserResults?.data?.length - 1,
                },
                updateQuery(prevResults, { fetchMoreResult }) {
                  if (!fetchMoreResult) return prevResults;
                  return {
                    ...prevResults,
                    getUserResults: {
                      ...prevResults.getUserResults,
                      data: uniqBy(
                        [
                          ...prevResults.getUserResults.data,
                          ...fetchMoreResult.getUserResults.data,
                        ],
                        "id"
                      ),
                      hasMore: fetchMoreResult?.getUserResults?.hasMore,
                      __typename: "UserResults",
                    },
                  };
                },
              })
            }
          />
        )}
      </div>
    </div>
  );
}

export default Searchbar;
