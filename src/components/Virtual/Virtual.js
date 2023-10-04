import React from 'react'
import css from "./Virtual.module.css"
import shade from '../../asseta/shade.jpg'
import Before from '../../asseta/Before.jpg'
import After from '../../asseta/After.jpg'
import ReactCompareImage from 'react-compare-image'
function Virtual() {

  return (
    <div className={css.Virtual}>
        <div className={css.left}>
            <span>Virtual Try-on </span>
            <span> Never Buy the Wrong Shade Again !</span>
            <span>Try Now</span>
         <img src={shade}/>
        </div>

      <div className={css.right}>
       
        <div className={css.wrapper}>

        <ReactCompareImage leftImage={Before} rightImage={After}/>
        </div>
      </div>

    </div>
  )
}

export default Virtual