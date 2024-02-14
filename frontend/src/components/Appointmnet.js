import React from 'react'
import Card from './Card';
const Appointmnet =() => {
  return (
    <div>
     <h2>Appointment Page</h2>
      <Card
        title="Your Appointment Title"
        content="Details about your appointment go here."
      />
      <Card
        title="Mern Project"
        content="About my mern project"
      />
      {/* Add more Card components or additional content as needed */}
  </div>
  )
}

export default Appointmnet