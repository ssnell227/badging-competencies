import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

const Examples = (props) => {
    const [back, setBack] = useState(false)
    useEffect(() => {
        return setBack(false)
    }, [setBack])
    return (
    <div>
        <button onClick={() => setBack(true)}>Back to Landing</button>
        {back && <Redirect to='/'/>}
        <div>
            <h2>match.params example</h2>
            <p>{props.match.params.param}</p>
        </div>
        <div className='css-selectors-examples'>
            <h2>CSS selectors</h2>
            <p id='id-example'>ID example</p>
            <p className='class-example'>Class example</p>
            <div className='decendant-example'>
                <p>Decendant example</p>
                <p id='child-example'>Child example</p>
            </div>
            <p>Adjacent sibling example</p>
        </div>
        <div>
            <h2>CSS positioning</h2>
            <div className='relative'>
                100px down relative
                <p className='absolute'>100px from left absolute</p>
            </div>
            <p className='fixed'>fixed 100px from top</p>
        </div>
    </div>
    )
}

export default Examples