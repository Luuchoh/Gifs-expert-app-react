import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Hunter X Hunter'] );
    //     setCategories( cat => [...cat, 'Hunter X Hunter'] );
    // }

  return (
    <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={ setCategories }/>
        <hr />
        
        {/* <button onClick={ handleAdd }> Add </button> */}

        <ol>
            {
                categories.map(c => (
                    <GifGrid 
                        category={ c } 
                        key= { c }
                    />
                    ))
               
            }
        </ol>
    </>
  )
}

export default GifExpertApp