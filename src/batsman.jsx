import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFour = fours + 1;
        setRuns(updatedRuns);
        setFours(updatedFour);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSix = sixes + 1;
        setRuns(updatedRuns);
        setSixes(updatedSix);
    }

    return (

        <div style={{
            border: '2px solid salmon',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
            <h4>Player: Bangla Batsman</h4>
            {
               runs >= 50 && <p style={{
                color: 'green'
               }}>Congratulations, your score is {runs}</p>
            }
            <h3>Score: {runs}</h3>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
            }}>
                <span><h5>Total Four: {fours}</h5></span>
                <span><h5>Total Six: {sixes}</h5></span>
            </div>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}