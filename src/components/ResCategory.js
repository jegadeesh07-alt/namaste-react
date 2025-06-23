import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

const ResCategory = ({data, showItems, setShowIndex}) => {


    const handleShow = () => {
        setShowIndex()
    }
 
    return(
        <div >
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 rounded-xl">
            <div className="flex justify-between font-bold cursor-pointer   " onClick={handleShow}>
           <span>{data.title} ({data.itemCards.length})</span>
           <span> {showItems ? <KeyboardArrowUpIcon />  :<KeyboardArrowDownIcon /> }
            
           </span>
           </div>
           
           {showItems && <ItemList items={data.itemCards}/>}
           </div>

           

        </div>
    ) 
}
export default ResCategory