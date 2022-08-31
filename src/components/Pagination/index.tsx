import React from "react";
import { PaginationProps } from "../../types/@types";
import "./pagination.css";

const Pagination = (props: PaginationProps) => {
  const { page } = props;
  return (
    <div className="pagination-container">
      <div className={page >= 1 ? "pagination-active" : "pagination"}>1</div>
      <div className={page >= 1 ? "line-active" : "line"} />
      <div className={page >= 2 ? "line-active" : "line"} />
      <div className={page >= 2 ? "pagination-active" : "pagination"}>2</div>
      <div className={page >= 2 ? "line-active" : "line"} />
      <div className={page >= 3 ? "line-active" : "line"} />
      <div className={page >= 3 ? "pagination-active" : "pagination"}>3</div>
      <div className={page >= 3 ? "line-active" : "line"} />
      <div className={page >= 4 ? "line-active" : "line"} />
      <div className={page >= 4 ? "pagination-active" : "pagination"}>4</div>
    </div>
  );
};

export default Pagination;
