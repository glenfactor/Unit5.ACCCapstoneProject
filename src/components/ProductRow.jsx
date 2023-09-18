import React, { useState } from 'react';

export default function ProductRow({product, setSelectedProductId}) {
    const handleClick = () => {
        setSelectedProductId(product.id);
        };
    return (
        <tr onClick={handleClick}> 
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
        </tr>
    );
}