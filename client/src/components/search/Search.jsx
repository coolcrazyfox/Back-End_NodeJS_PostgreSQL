import React, {useEffect, useState} from 'react';
import s from '../../style/Search.module.css';



// import MOCK_DATA from './../../MOCK_DATA.json';
import OEM_DATA from './../../OEM_DATA.json';
import Carlist from "../components/Carlist";
import EbayListPage from "../../pages/ebay/EbayListPage";
import SuperButton from "../../common/SuperButton/SupperButton";
import Modal from "../modal/Modal";

// const data = MOCK_DATA;
const data = OEM_DATA;




const filterCars=(searchText, listOfCars)=>{
    if(!searchText){
        return listOfCars
    }
    // return listOfCars.filter(({car_model})=>
    //     car_model.toLowerCase().includes(searchText.toLowerCase())
    // )
    return listOfCars.filter(({car_OEM})=>
        car_OEM.toLowerCase().includes(searchText.toLowerCase())
    )

}
const Search = () => {
    const [modalActive, setModalActive] = useState(false)
    // const [itemCarPag,setItemCarPag]= useState(data.slice(0,50))
    const [carList, setCarList]= useState(data)
    const [searchTerm, setSearchTerm]= useState('')
    // const handlerEnterSearch =(event)=>{
    //     if (event.key ==="Enter" || event.onClick){
    //         console.log(searchTerm)
    //         alert(searchTerm)
    //     }
    // }
    useEffect(()=>{
        const Debounce =setTimeout(()=> {
            const filteredCars = filterCars(searchTerm, data)
            setCarList(filteredCars)
        },1000)
        return ()=>clearTimeout(Debounce)

    },[searchTerm])

    return (
        <div className={s.wrap}>
            {/*<div className={s.search_box}>*/}
                <input type="text"
                       value={searchTerm}
                       autoFocus
                       autoComplete={'off'}
                       placeholder={'Search OEM car'}
                       // onKeyDown={handlerEnterSearch}
                       onChange={(e) =>setSearchTerm(e.target.value)}
                       className={s.input_search}
                       style={{width:"200px"}}
                />
            {/*<SuperButton onClick={handlerEnterSearch}*/}
            {/*             onChange={(e) =>setSearchTerm(e.currentTarget.value)}>*/}
            {/*    Enter*/}
            {/*</SuperButton>*/}

            <button
                onClick={() => setModalActive(true)}
                // onClick={handlerEnterSearch}
                // onChange={(e) =>setSearchTerm(e.target.value)}
                className={s.btnSearch}
                // style={{backgroundImage:"url(./Icon)"}}
            ></button>
            <Modal active={modalActive} setActive={setModalActive} oemList={carList}>
                {/*{children}*/}
            </Modal>

                {/*<EbayListPage oemList={carList}/>*/}
                {/*<Carlist carList={carList}/>*/}
                {/*<ul className={s.tab_search}>*/}
                {/*    {carList.map((car, index)=>{*/}
                {/*        return <li key={index} className={s.search_item}>{car.car_module}</li>*/}
                {/*    })}*/}
                {/*</ul>*/}
            {/*</div>*/}

        </div>
    );
};

export default Search;
