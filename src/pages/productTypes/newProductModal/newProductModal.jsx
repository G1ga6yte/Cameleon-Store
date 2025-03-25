import React from 'react';
import './NewProductModal.scss';
import {useProductTypesContext} from "../productTypesContext.jsx";



function NewProductModal() {
    const {setNewProductModal} = useProductTypesContext()

    return (
        <div className='NewProductModalContainer'>
            <div onClick={()=>setNewProductModal(false)} className="backgroundBlock"></div>
        </div>
    );
}

export default NewProductModal;