import React from 'react'

const Card = ({user}) => {
  return (
    <div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1760340769739-653d00200baf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="" />
        <h1>{user}</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet dolorem atque illo quidem .</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
