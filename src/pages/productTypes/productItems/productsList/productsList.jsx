import React, {useState} from 'react';
import './ProductsList.scss';
import { FaCheck } from "react-icons/fa6";

function ProductsList() {
    const [checked, setChecked] = useState(true);

    return (
        <div className='ProductsListContainer'>
            <div className="ProductsList">
                    <table className="table">
                        <thead className="tableHead">
                        <tr className="tableHeadRow">
                            <th className="checkboxTH"><button onClick={()=>{
                                setChecked(!checked);
                            }} className={`checkbox ${checked && "checked"}`}>
                                <FaCheck className="icon"/>
                            </button></th>
                            <th>#id</th>
                            <th>#Article</th>
                            <th>#Name</th>
                            <th>#Price</th>
                            <th>#Bar-Code</th>
                        </tr>
                        </thead>
                        <tbody className="tableBody">

                        </tbody>
                    </table>


            </div>

            <div className="pagination">
                Pagination
            </div>
        </div>
    );
}

export default ProductsList;