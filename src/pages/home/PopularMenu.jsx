import React, { useEffect, useState } from 'react';
import SectionTitle from '../../component/sectionTitle/SectionTitle';
import MenuItems from '../../shared/MenuItems';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
    },[])
    return (
       <section>
        <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
        ></SectionTitle>
        <div className='grid md:grid-cols-2 '>
            {menu.map(item =><MenuItems key={item._id} item={item}></MenuItems>)}
        </div>
       </section>
    );
};

export default PopularMenu;