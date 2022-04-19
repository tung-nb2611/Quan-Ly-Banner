import './Section.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Section(props) {
    let {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);
    id = props.id;

    useEffect(() => {
        fetch("http://localhost:8080/api/SapoFnB/sections/" + id)
        .then(res => res.json())
        .then(
            (section) => {
            setIsLoaded(true);
            setItem(section);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])

    const mystyle = {
        height: item.height +'px',
        width: item.width + 'px',
        border: '1px solid black',
        display: item.display
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div className='section_container' style={mystyle}>
                Hello
            </div>
        ) 
    }       
}

export default Section;