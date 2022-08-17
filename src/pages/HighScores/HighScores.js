import { useContext, useEffect } from "react"
import pokeContext from "../../context/pokeContext"

import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from "../../components/Footer/Footer"
import './HighScores.css'
import { getScores } from "../../utils/queryScores"


export const HighScores = () => {

    const { scoreList, setScoreList } = useContext(pokeContext)

    useEffect(() => {
        setScoreList([])
        getScores().then(response => {
            setScoreList(response)
        })
    
    }, [])
    

    return (
        <>
            <NavBar mode={"none"}/>
            <div className="list_container">
                <ul className="highScore_list">
                    <li className="highScore_item highScore_itemStrong">
                        <span><strong>NAME</strong></span>
                        <span><strong>SCORE</strong></span>
                    </li>
                    {
                        scoreList.map((player, index) => {
                            scoreList.sort(function(a, b){return b.score - a.score});
                            return( 
                                index < 10 &&
                                <li className="highScore_item player_data" key={index}>
                                    <span>{player.name}</span>
                                    <span>{player.score}</span>
                                </li>
                                )

                        })
                    }
                </ul>
            </div>
            <Footer/>
        </>
    )
}