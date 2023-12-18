import { useState } from 'react';
import './JokesComp.scss';

export const JokesComp = () => {
    const [myJoke, setMyJoke] = useState("Click the button to get jokes");
    const getMyJokes = async() => {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept" : "application/json" 
            }
        });
        const data = await res.json();
        console.log(data);
        setMyJoke(data.joke)
    }
    return (
        <>
        <section>
            <div className="jokes-component">
                <div className='jokes-div'>
                    <p>{myJoke}</p>
                </div>
                <button onClick={getMyJokes}>Say a joke</button>
            </div>
        </section>
        </>
    );
}