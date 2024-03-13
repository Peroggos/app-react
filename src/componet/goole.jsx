 import { useState , useEffect} from "react";
 import React from "react";
 import ideaList from "./ideaList";
import data_test from './data.json';
     
// const data = data_test

// const [searchTerm, setSearchTerm] = useState;
// const [ setIdeaList] = useState;


 function google() {

  // const fifer =  ideaList.filter(ideaList => {
  //   return ideaList.id.toLowerCase().includes(setSearchTerm.toLowerCase())
  // })

  

  //     useEffect(() => {
  //     const Debounce = setTimeout(() => {
  //      const filteredidea = filteredidea(searchTerm, data);
  //     setIdeaList(filteredidea);
  //     }, 300);

  //    return () => clearTimeout(Debounce);
  //  }, [searchTerm]);/onChange={(e) => setIdeaList(e.target.value)}value={searchTerm}
                  
      return( 
         <div> 
              <header className="heaer" >
                творчиские люди
              </header>
               <div> 
                
        
                 <input className="clec"
               
                 />
              <ideaList ideaList={ideaList}/>
                </div>  
        </div>   
        )
  }    
export default google;