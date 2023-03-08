import React, { useState, useEffect } from 'react'

import Dropdown from 'react-bootstrap/Dropdown';

function Select(props) {

    /* ---------------------------------- props --------------------------------- */

    const { getBackResult } = props;

    /* ---------------------------------- state --------------------------------- */

    const [btnTitle, setBtnTitle] = useState({
        host: "تیم میزبان",
        guest: "تیم مهمان",
        whoWins: "برنده",
    });

    const baseList = {
        Team1: 1,
        Team2: 2,
        Team3: 3,
        Team4: 4,
    }
    
    const [list, setList] = useState({
        host: baseList,
        guest: baseList,
        winner: []
    });
    
    const [selected, setSelected] = useState({
        host: "",
        guest: "",
        whoWins: ""
    });

    /* -------------------------------- general functions ------------------------------- */

    const removeFromList = (key , value) => {
        const newList = {...baseList};
        delete newList[`${value}`];
        
        if(key == "host") {
            setList(prev => ({...prev, host: newList}));
        }
        if(key == "guest")  {
            setList(prev => ({...prev, guest: newList}));
        }
    }

    /* --------------------------- onChange functions --------------------------- */

    const changeHost = event => {
        const key = event[0];
        const value = event[1];
        removeFromList("guest", key);
        setBtnTitle(prev => ({...prev, host: key}));
        setBtnTitle(prev => ({...prev, whoWins: "برنده"}));
        setSelected(prev => ({...prev, host: value}));
        setSelected(prev => ({...prev, whoWins: ""}));
        setList(prev => ({...prev, winner: []}))
    }

    const changeGuest = event => {
        const key = event[0];
        const value = event[1];
        removeFromList("host", key);
        setBtnTitle(prev => ({...prev, guest: key}));
        setBtnTitle(prev => ({...prev, whoWins: "برنده"}));
        setSelected(prev => ({...prev, guest: value}));
        setSelected(prev => ({...prev, whoWins: ""}));
        setList(prev => ({...prev, winner: []}))
    }

    const changeWinner = event => {
        setBtnTitle(prev => ({...prev, whoWins: event}));
        setSelected(prev => ({...prev, whoWins: baseList[`${event}`]})); 
    }

    /* --------------------------------- effects -------------------------------- */
    useEffect(() => {
        if(selected.guest && selected.host) {
            setList(prev => ({...prev, winner: [btnTitle.host, btnTitle.guest]}));
        }
        if(selected.whoWins) {
            getBackResult(selected);
        }
    } , [selected])

  return (

    <div className='d-flex justify-content-between'>
        {/* /* ---------------------------------- host ---------------------------------- */}
        <Dropdown>
            <Dropdown.Toggle className={`py-3`}>
            { btnTitle.host }
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {
                Object.entries(list.host).map((item,index) =>
                    <Dropdown.Item key={index} name={item[0]} onClick={()=> changeHost(item)}>
                        {item[0]}
                    </Dropdown.Item>
                )
            }
            </Dropdown.Menu>
        </Dropdown>

        {/* /* ---------------------------------- guest ---------------------------------- */}
        <Dropdown>
            <Dropdown.Toggle className={`py-3`}>
            { btnTitle.guest }
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {
                Object.entries(list.guest).map((item,index) =>
                    <Dropdown.Item key={index} name={item[0]} onClick={()=> changeGuest(item)}>
                        {item[0]}
                    </Dropdown.Item>
                )
            }
            </Dropdown.Menu>
        </Dropdown>

        {/* /* -------------------------------- who wins -------------------------------- */}

        <Dropdown>
            <Dropdown.Toggle className={`py-3`}>
                { btnTitle.whoWins }
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {
                list.winner.length == 2
                ?
                    list.winner.map((item,index) =>
                        <Dropdown.Item key={index} name={item} onClick={()=> changeWinner(item)}>
                            {item}
                        </Dropdown.Item>
                    )
                :
                <Dropdown.Item>
                    موردی برای نمایش نیست
                </Dropdown.Item>
            }
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Select