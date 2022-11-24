import React from 'react'

const Text = (props) => {
    const ime = props.ime;
    return (
        <div>
            <h2>Zdravo {ime}!</h2>
        </div>
    )
}

export default Text