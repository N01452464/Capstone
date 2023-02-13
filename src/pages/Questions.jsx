import React from 'react'

const Questions = () => {
    return(
        <div className='questions'>
            <h2 className='text-light'>Sample Question 1</h2>

            <ul>
                <li>
                    <input 
                        type="text"
                        placeholder='Enter your answer'
                        name= "options"
                        id='q1-option'
                    />
                </li>
            </ul>
        </div>
    )
}

export default Questions;