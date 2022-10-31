import React from 'react';
import s from '../style/Pagination.module.css'

const Pagination = ({devicePerPage, totalDevice, paginate}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalDevice / devicePerPage); i++){
        pageNumbers.push(i)
    }

        return (
            <div className={s.nav}>
                <ul className={s.paginationBttns}>
                    {pageNumbers.map(number =>(
                        <li className={s.paginationBttns} key={number}>
                            <a href={'#'}  onClick={()=>paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        );
};

export default Pagination;
