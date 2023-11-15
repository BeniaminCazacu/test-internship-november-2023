import React from 'react'

const home = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="latitude" className="form-label">
          Latitude
        </label>
        <input
          id="latitude"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="longitude" className="form-label">
          Longitude
        </label>
        <input
          id="longitude"
          type="text"
          className="form-control"
        />
      </div>
    </form>
  )
}

export default home
