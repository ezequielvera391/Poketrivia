import { useState } from "react"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import pokeContext from "../../context/pokeContext";
import { useTranslation } from 'react-i18next'
import './Pause.css'

export const Pause = () => {
    const { t } = useTranslation(['pause']);
    const [ open, setOpen ] = useState(false)
    const { setScore, setDefeat, setRounds, setCurrentRound } = useContext(pokeContext)

    const handleClick = () => {
        setRounds(0)
        setCurrentRound(1)
        setScore(0)
        setDefeat(false)
        sessionStorage.clear();
    }


    return (
        <div className="pause_container">
            <button className="pause_button" onClick={() => setOpen(true)}>
                <img className="pause_img" src="./media/img/pause.svg" alt="pause" />
            </button>
            {
                open && 
                <div className="pause_menu">
                    <div className="pause_box">
                        <button className="button_style" onClick={() => setOpen(false)}>
                            {t('pause.resume')}
                        </button>
                        <button className="button_style" onClick={handleClick}>
                            <Link to="/">{t('pause.menu')}</Link>
                        </button>
                    </div>
                </div>
                
            }
        </div>
    )
}