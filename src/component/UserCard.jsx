import React from 'react'

export default function UserCard({user}) {
    console.log("dd",user)
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={user.PhotoUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.firstName+" "+ user.lastName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
