import React, { useState } from 'react'

function Form({ ...restProps }) {
    const [message, changeMessage] = useState('')
    const handleChangeMessage = (e) => {
        const {
            currentTarget: {
                value: message
            }
        } = e
        changeMessage(message)
    }
    const sendMessage = () => {
        const { ws } = restProps
        ws.send(message)
    }
    return (
        <>
            <input
                onChange={handleChangeMessage}
                type={'text'}
                placeholder={'enter message'}
            />
            <button
                onClick={sendMessage}
            >
                send
            </button>
        </>
    )
}

export default Form