import React, {useEffect, useState} from 'react';
import s from '../../style/Search.module.css';
import {AiOutlineClear} from "react-icons/ai";

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
                <AiOutlineClear onClick={()=>setSearchValue('')} style={{fontSize:"20px" , color:'darkred' }}/>
                // <button onClick={()=>setSearchValue('')}>x</button>
            )}


        </div>
    );
};

export default SearchInput;
