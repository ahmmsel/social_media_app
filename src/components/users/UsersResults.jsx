import React, { Fragment } from "react";
import { Waypoint } from "react-waypoint";
import { useNavigate } from "react-router-dom";
import Avatar from "../UI/Avatar";

function UsersResults({ data, fetchMore }) {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    return () => navigate(`/profile/${id}`);
  };

  const results = data?.getUserResults?.data;

  return (
    <div className="flex flex-col space-y-6 p-4 max-h-80 overflow-y-auto">
      {results?.length > 0 ? (
        results?.map((result, index) => (
          <Fragment key={result.id}>
            <div
              className="flex space-x-3"
              role="button"
              onClick={handleNavigate(result.id)}>
              <Avatar src={result.picture} alt={result.username} />
              <h1 className="font-medium">{result.username}</h1>
            </div>
            {index === results?.length - 1 && <Waypoint onEnter={fetchMore} />}
          </Fragment>
        ))
      ) : (
        <p className="text-center">no results found</p>
      )}
    </div>
  );
}

export default UsersResults;
