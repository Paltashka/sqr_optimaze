import React, { useState } from 'react';
import ScrollSpy from "../../Helpers/scrollSpy";
import { scroller } from "react-scroll";
import DropdownArrowIcon from '../../images/dropdown-arrow.svg';

const scrollTo = el => {
    scroller.scrollTo(el, {
        duration: 1500,
        delay: 100,
        //smooth: true,
        smooth: "easeInOutQuint",
        spy: true,
        hashSpy: true,
        offset: -10, // Scrolls to element + 50 pixels down the page
    })
}
const MenuNavigator = props => {
    const { name, prev, next } = props;
    // const [currItem, setCurrItem] = useState(82);
    // const categoriesID = categories.map(({ id }) => id);
    // const ss = categories.map(m => `cat_${m.id}`);

    return (
        <section className="navigation" style={{ position: 'relative' }}>

            <div className="navigation-fix">
                <div className="container">
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <div className="category-wrapper">
                                <span className="subcategory-name">{prev}</span>
                                <span className="category-name">{name}</span>
                                <span className="subcategory-name">{next}</span>
                            </div>
                            {/* <div className="dropdown menu" id="scroll-nav">
                                <a className="clt-link dropdown-toggle d-flex" data-default-text="Catalog" href="#"
                                    role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <ScrollSpy
                                        items={ss}
                                        currentClassName="is-current"
                                        offset={-100}
                                        onUpdate={(d) => {
                                            if (d && d.id) {
                                                const [cat, item_id] = d.id.split('_');
                                                if (item_id) {
                                                    setCurrItem(parseInt(item_id));
                                                }
                                            }
                                               
                                        }}
                                    >
                                        {categories.map(({ id, name }) => <li key={id}><a href={`cat_${id}`}>{name[lang] || name['en']}</a></li>)}
                                    </ScrollSpy>
                                    <img className="ml-4" src={DropdownArrowIcon} aria-labelledby="dropdownMenuLink" />
                                </a>
                                <div className="dropdown-menu" id="menu-list"
                                    aria-labelledby="dropdownMenuLink">
                                    {
                                        categories.map(({ id, name }) => {
                                            return (
                                                <button
                                                    key={id}
                                                    onClick={() => scrollTo(`cat_${id}`)}
                                                    className={`dropdown-item scroll-to ${currItem === id ? 'active' : ''}`}>
                                                    {name[lang] || name['en']}
                                                </button>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="tile-veiw">
                                <button
                                    onClick={async() => {
                                        handleAnimation()
                                        const res = await tileSwitcher(true)
                                        if (res) {
                                            scrollTo(`cat_${currItem}`)
                                        }
                                    }}
                                    className={`tile-switcher p-0 ${tile === true ? 'active' : ''}`}
                                    data-type="main">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M2 0C0.895431 0 0 0.89543 0 2V6V12V16C0 17.1046 0.89543 18 2 18H6H12H16C17.1046 18 18 17.1046 18 16V12V2C18 0.895431 17.1046 0 16 0H6H2Z"
                                            fill="currentColor" />
                                    </svg>
                                </button>
                                <button
                                    onClick={async() => {
                                        handleAnimation()
                                        const res = await tileSwitcher(false);
                                        if (res) {
                                            const index = categoriesID.indexOf(currItem) + 1
                                            setCurrItem(categoriesID[index])
                                            scrollTo(`cat_${categoriesID[index + 1]}`)
                                        }
                                    }}
                                    className={`tile-switcher p-0 ${tile !== true ? 'active' : ''}`}
                                    style={{ marginLeft: '15px' }}
                                    data-type="list">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M2 0C0.895431 0 0 0.895431 0 2V6C0 7.10457 0.89543 8 2 8H16C17.1046 8 18 7.10457 18 6V2C18 0.895431 17.1046 0 16 0H2ZM2 10C0.895431 10 0 10.8954 0 12V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V12C18 10.8954 17.1046 10 16 10H2Z"
                                            fill="currentColor" />
                                    </svg>
                                </button>
                            </div> */}
                        </div>
                        {/* <div className={`col text-right ${info.call_a_waiter !== true ? 'd-none' : ''}`}>
                            <button onClick={e => callWaitress()} className="clt-btn s-m c-orange call-btn">call waitress</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MenuNavigator;
