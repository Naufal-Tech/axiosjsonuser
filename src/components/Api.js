import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User';


function Api({ userlist }) {
    const [userslist, setUserslist] = useState(userlist);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => { setUserslist(res.data) })
            .catch(err => { console.log(err) })

    }, []);

    let uplist = userslist.map(item => Object.assign(item, { show: false }))

    console.log(uplist)
    return (
        <div className="ListItems">
            <div className='judul d-flex justify-content-center'>
                <span className="id title" >ID</span>
                <span className="name title">Name</span>
                <span className="username title">Username</span>
                <span className="email title">Email</span>
                <span className="phone title">Phone</span>
                <span className="details title">Details</span>
            </div>

            <div>
                {uplist.map(item => {
                    return (
                        <User
                            id={item.id}
                            name={item.name}
                            username={item.username}
                            email={item.email}
                            phone={item.phone}
                            show={item.show}
                            street={item.address.street}
                            city={item.address.city}
                            cname={item.company.name}
                            web={item.website}
                        />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Api