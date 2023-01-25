import React from 'react'

const Oicon = ({color, size}) => {
  return (
    <div className={`icon ${color ? 'icon-' + color : 'icon-yellow'} ${size && 'icon-' +size}`}>
        <svg width="800px" height="800px" viewBox="0 0 8 8" id="meteor-icon-kit__regular-circle-xxs"  ><path d="M4 8C1.79086 8 0 6.2091 0 4C0 1.79086 1.79086 0 4 0C6.2091 0 8 1.79086 8 4C8 6.2091 6.2091 8 4 8zM4 6C5.1046 6 6 5.1046 6 4C6 2.8954 5.1046 2 4 2C2.8954 2 2 2.8954 2 4C2 5.1046 2.8954 6 4 6z" /></svg>
    </div>
  )
}

export default Oicon