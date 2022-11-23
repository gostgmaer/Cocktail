import React from 'react'
import { useGlobalContext } from '../../Context/Context'

const CockTailSearchForm = () => {
    const {setkeyword} = useGlobalContext()
  return (
    <div className='col-12 mt-2 mb-5'><div className="card m-auto text-center col-5">
    <div className="card-body col-12 rounded-5"  >
      <div className="mb-3">
        <label htmlFor="cocktailinput" className="form-label">Search Your Favorite Cocktail</label>
        <input type="text"
          className="form-control" name="cocktailinput" id="cocktailinput" onChange={(e)=>setkeyword(e.target.value)} aria-describedby="helpId" placeholder="Srarch Cocktail....."/>
        {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
      </div>
    </div>
  </div></div>
  )
}

export default CockTailSearchForm