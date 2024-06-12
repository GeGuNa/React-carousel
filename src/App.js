import React, { useState, useRef, useEffect } from 'react'
import './App.css';




export function ShowStory(props) {

	return (<>
         
   <div className=""> 
   
         <img src="/cGbkaoE2WQM.jpg" /> 
         
         <div className="mang_storiespoabs">
            {props.name}
         </div>
         
   </div>

</>)
   
}



export default function App() {
   
   
  
//How many objects are there
const [ShowToScroll, setShowToScroll] = useState(0)
 
//scrolled how many times  to the left side
const [scrollL, setscrollL] = useState(0)

//scrolled how many times  to the right side
const [scrollR, setscrollR] = useState(0)

const [hwmNAyTimsScroll,sethwmNAyTimsScroll] = useState(0)




const [sizeofaDiv,setsizeofaDiv] = useState(0)
const [sizeofaCurrent,setsizeofaCurrent] = useState(0)


const sSize1 = useRef(0);

var s = 0;
var sZ = 0

React.useEffect(()=> {

 
     setTimeout(() => {
            

         var ss_hm = sSize1.current.scrollWidth   //scrolling size  including overflow size
         var ss_hm2 = sSize1.current.offsetWidth   //where it is right now 
         
         //var ss_hm = ss_hm/150


         setShowToScroll(1)
         var crnqchild = sSize1.current.children.length  //how many children does element have

if (crnqchild>0) {
   

var sz = crnqchild*150
var sz3 = parseInt(ss_hm2/150)

if (sz>ss_hm2) {
   
   
           if (sz>ss_hm2+150) { 
              
            var hwmtimes =  (parseInt(parseInt(ss_hm-ss_hm2)/150))
            
            
            console.log(`hwmnay1 = ${hwmtimes}`)
            sethwmNAyTimsScroll(hwmtimes+1)
            
            
         } else {
            var hwmtimes =  1
            console.log(`hwmnay2 = ${hwmtimes}`)
            sethwmNAyTimsScroll(hwmtimes)
         }
   
   
} else {
   
   var hwmtimes =  0
    console.log(`hwmnay3 = ${hwmtimes}`)  
   sethwmNAyTimsScroll(0)
   
}


} else {
   var hwmanytimes = 0
    console.log(`hwmnay4 = ${hwmtimes}`)
   sethwmNAyTimsScroll(0)
}

         console.log(crnqchild)
         
         console.log(` offset  ${sSize1.current.offsetWidth}`)
         console.log(` width  ${sSize1.current.scrollWidth}`)

         var AvailableScrollings = parseInt(Math.abs(sSize1.current.scrollWidth/150));

            
      }, 1);

 


},[])


function setScrl1(){
   

      sSize1.current.scrollLeft +=150
            

   setscrollL(scrollL+1)
   
   
 if (scrollR>0)   
   setscrollR(scrollR-1)



}
   
 function setScrl12(){
   sSize1.current.scrollLeft -=150
   setscrollR(scrollR+1) 
   
    if (scrollL>0)  
         setscrollL(scrollL-1)
         
         
 }
      
      
      
      
  



   
   
/*  
s21zs.onscroll = (event) => {

      console.log(event.scrollY)
};
  */ 
  
  
     
 const a = new Array(130).fill(1)  
   
  


   
   
  return ( <>
  
  
  
<div class="mang_stories" ref={sSize1}>
         
 {a.map((k,v) => <ShowStory index={k} name={`zura ${v}`} />)}        
   


</div>
  
  
  
  
  
 
   <br/>


{(ShowToScroll == 1 && hwmNAyTimsScroll>0) && (<>

{/*
   
  

const [scrollL, setscrollL] = useState(0)
const [scrollR, setscrollR] = useState(0)
   
   */}

{hwmNAyTimsScroll > 0 && scrollL!=hwmNAyTimsScroll && (<>
  <button onClick={setScrl1}>Change +</button> 
</>)}
  
  
 {hwmNAyTimsScroll > 0 && scrollL > 0  && scrollR!=hwmNAyTimsScroll && (<>
    <br/>  <button onClick={setScrl12}>Change -</button>
</>)}
    
   
   

</>)}
    
  
  
  
  
  
  </>);
}


