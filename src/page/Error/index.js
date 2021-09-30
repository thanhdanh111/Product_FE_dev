import React, { useEffect } from 'react'
import {useHistory } from 'react-router'

export default function Error() {
    const history = useHistory();
    useEffect(() =>{
        history.push('/login')
    },[])
    return (
        <div>
            <i class="fas fa-user">  ADASDSA</i> 
        </div>
    )
}
