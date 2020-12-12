import React from 'react'

const Player = () => {
  return (
    <section>
      <h2 className='text-light text-center'>Listen to our latest episode</h2>
      <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <iframe
          src='https://open.spotify.com/embed-podcast/show/4lZEthKR8DttLhOCeFO73r'
          width='100%'
          height='232'
          frameBorder='0'
          allowTransparency='true'
          allow='encrypted-media'></iframe>
      </div>
    </section>
  )
}

export default Player
