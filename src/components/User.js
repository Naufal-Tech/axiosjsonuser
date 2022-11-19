import React, { useState } from 'react'

function User({ id, name, username, email, show, phone, street, city, cname, web }) {
    const [tampilkan, setTampilkan] = useState(show)

    return (
        <div key={id}>
            <span className='idcontent'>{id} </span>
            <span className='namecontent'>{name} </span>
            <span className='usernamecontent' >{username} </span>
            <span className='emailcontent'>{email}</span>
            <span className='phonecontent'>{phone}</span>
            <span className='show' onClick={() => {
                setTampilkan(!tampilkan);
                console.log(!show, id)
            }}> Show </span>
            <div key={id} > {tampilkan ? <> <p>street : {street} </p> <p>City : {city} </p> <p>Company : {cname} </p>  <p>Website : {web} </p>  </> : null} </div>
        </div>
    )
}

export default User
