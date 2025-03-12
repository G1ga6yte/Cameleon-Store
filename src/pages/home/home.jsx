import React, {useEffect} from 'react';
import './Home.scss';
import {useCartContext} from "../../CartContext.jsx";
import HomeBox1 from "./homeBox1/homeBox1.jsx";
import HomeBox2 from "./homeBox2/homeBox2.jsx";
import HomeBox3 from "./homeBox3/homeBox3.jsx";

function Home() {
    const {setActiveNav} = useCartContext()
    useEffect(() => {
        setActiveNav("home")
    }, []);

    return (
        <div className='HomeContainer'>
            <div className="headLine ">
                <HomeBox1/>
                <HomeBox2/>
            </div>

            <HomeBox3/>

        </div>
    );
}

export default Home;