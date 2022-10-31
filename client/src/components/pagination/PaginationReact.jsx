import React from 'react';
import ReactPaginate from "react-paginate";
import s from '../../style/PaginationReact.module.css'
// https://abcinblog.blogspot.com/2019/02/react-ii.html
// https://youtu.be/VHQxz5Cdrc8
// https://russianblogs.com/article/5976993373/

const PaginationReact = ({onChangedPage, totalCount, pageSize, currentPage}) => {
    console.log('selected btn', onChangedPage)
    const pageCounts = totalCount ? Math.ceil(totalCount / pageSize) : currentPage;
    const step = pageCounts > 200 ? 50 : 10;
    return (
        <div className={s.nav}>
            <ReactPaginate
                className={s.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={e=>onChangedPage(e.selected+1)}
                pageRangeDisplayed={pageSize}
                pageCount={pageCounts}
                previousLabel="<"
                forcePage={currentPage - 1}
            />
        </div>
    );
};

export default PaginationReact;
