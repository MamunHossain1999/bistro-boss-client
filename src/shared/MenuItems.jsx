import React from 'react';

const MenuItems = ({item}) => {
    const {name, image, price, recipe, } = item;

    return (
        <div className='flex gap-4 my-3 '>
            <img className='w-20 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl' src={image} alt="" />
            <div>
                <h2 className='uppercase'>{name}----------</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItems;