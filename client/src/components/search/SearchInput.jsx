import React, {useEffect, useState} from 'react';
import s from '../../style/Search.module.css';

// https://www.youtube.com/watch?v=VHQxz5Cdrc8&ab_channel=ArchakovBlog
const SearchInput = ({searchValue, setSearchValue}) => {


    return (
        <div className={s.wrap}>
            {/*<div className={s.search_box}>*/}
                <input type="text"
                       value={searchValue}
                       autoFocus
                       autoComplete={'off'}
                       placeholder={'Search OEM car'}
                       // onKeyDown={handlerEnterSearch}
                       onChange={(e) =>setSearchValue(e.target.value)}
                       className={s.input_search}
                       style={{width:"200px"}}
                />
            {searchValue &&(
                <button onClick={()=>setSearchValue('')}>x</button>
            )}


        </div>
    );
};

export default SearchInput;
