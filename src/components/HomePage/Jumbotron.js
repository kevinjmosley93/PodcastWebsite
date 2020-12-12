import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const CallToAct = () => {
  return (
    <div>
      <Jumbotron style={{ marginTop: '2rem' }} className='jumboBg w-100'>
        <h3 style={{ marginBottom: '2rem' }}>Zay Something Podcast by Zay Moore  & Juma</h3>
        <small className='text-light'>
          Welcome to the Zay Something Podcast where we discuss pop culture, relationships, self-improvement, and just about everything else. The purpose of this podcast is to promote objective thinking, personal growth, and character defining in the millennial generation. Tune in every week with your favorite hosts, Zay Moore and Juma, as we ask those deep, uncomfortable questions and share our unpopular opinions with the intent of promoting growth through converzaytion! Enjoy!

        </small>
        <p>
          <Button style={{ marginTop: '2rem' }}variant='outline-light'>Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default CallToAct
