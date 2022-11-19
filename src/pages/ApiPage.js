import React from 'react'
import Api from '../components/Api'
import { useSelector } from 'react-redux';


function ApiPage() {
    const userslist = useSelector(state => state.UsersList)
    return (
        <>

            <Api userlist={userslist} />

        </>
    )
}

export default ApiPage;
