import { useState } from "react"
import '../components/url.css'

export const URL=()=>{
    const[orignalurl,setOrignalurl]=useState('');
    const[shorturl,setShorturl]=useState('');

    function genrateurl(){
         const code = Math.random().toString(36).substring(2, 8);
        setShorturl(`https://short.ly/${code}`);
    }

   function handlesubmit(e){
     e.preventDefault();
    if (orignalurl.trim() !== '') {
      genrateurl();
    }
   }
   function handleCopy(){
    navigator.clipboard.writeText(shortUrl);
    alert('Short URL copied!');
   }
    return(
       <div className="main">
        <h1 className="heading">
            URL SHORTNER :-
        </h1>
        <form className="formm" onSubmit={handlesubmit}>
            <input  type="url" value={orignalurl} onChange={(e)=>setOrignalurl(e.target.value)} className="inputt"/>
            <button type="submit" className="submitbutton">Submit</button>
        </form>
          <div className="shorturl">
             {shorturl && (
        <div  >
          <p>
            Short URL:{" "}
            <a href={orignalurl} target="_blank" rel="noopener noreferrer">
              {shorturl}
            </a>
          </p>
          <button onClick={handleCopy}>Copy</button>
        </div>
      )}
    
          </div>
              



       </div>
    )
}