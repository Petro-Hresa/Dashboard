// React modules
import React, { useState } from 'react';

// componnets
import Header from './components/Header/_header';
import Customers from './customers';
import Logo from './assets/images/logo.png'
import Burger from './components/Burger/_burger';
//styles
import './assets/styles/style.scss';

function App() {

    const [isOpenMob, setIsOpenMob] = useState(false)
    const [isOpenMobFull, setIsOpenMobFull] = useState(false)

    return (
        <div className="body__inner">

            <Header isOpenMob={isOpenMob} isOpenMobFull={isOpenMobFull} />

            <div className="main__wrap">
                <div className="mob-head">
                    <div >
                        <div className={`burger-mob__wrap`} onClick={() => setIsOpenMob(!isOpenMob)} onDoubleClick={() => setIsOpenMobFull(!isOpenMobFull)}>
                            <Burger />
                        </div>

                        <div className="greeting">Hello Evano &#128075;, </div>
                    </div>
                    <div className={`logo`}>
                        <img src={Logo} alt="logo" />
                    </div>
                </div>

                <main>
                    <Customers />
                </main>
            </div>
        </div>
    )
}

export default App;

export function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}