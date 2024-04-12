import { useState} from 'react';
import React from 'react';
import { AddCategory, GifGrid } from './Components';


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategories = ( newCategory) => {
       
        if ( categories.includes(newCategory) ) return;
        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
        //setCategories( cat => [ ...cat, 'valorant' ]);
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { (value) => onAddCategories(value) }
            />

            { 
                categories.map( ( category )  => ( 
                    <GifGrid 
                        key={ category }
                        category={ category } />
                )) 
            }
                        
        </>

        
  )
}
