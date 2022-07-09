import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import PaginationControl from "./PaginationControl";
import { NEXT_PAGE } from "../../constant";

function Pagination({ setPage, pageInformation }) {
  const handlePage = (pageType) => {
    return () => {
      if (pageType === NEXT_PAGE) setPage((prevPage) => prevPage + 1);
      else setPage((prevPage) => prevPage - 1);
    };
  };

  const totalPages =
    pageInformation?.totalPages > 99 ? "99+" : pageInformation?.totalPages;

  const pagesStatus =
    pageInformation && pageInformation?.currentPage + "/" + totalPages;

  return (
    <>
      {pageInformation?.totalPages > 1 && (
        <div className="flex justify-evenly items-center">
          <PaginationControl
            disabled={!pageInformation?.hasPreviousPage}
            Icon={ChevronLeftIcon}
            onClick={handlePage()}
          />
          <span>{pagesStatus}</span>
          <PaginationControl
            disabled={!pageInformation?.hasNextPage}
            Icon={ChevronRightIcon}
            onClick={handlePage(NEXT_PAGE)}
          />
        </div>
      )}
    </>
  );
}

export default Pagination;
