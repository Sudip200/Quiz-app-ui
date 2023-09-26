import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
const cat=[
  {title:"Space",img:"./Frame.png"},
  {title:"History",img:"./Frame (1).png"},
  {title:"Sports",img:"./Frame (2).png"}
]
const allcat=[
  {title:"Space",img:"./Frame.png"},
  {title:"History",img:"./Frame (1).png"},
  {title:"Sports",img:"./Frame (2).png"},
  {title:"Space",img:"./Frame.png"},
  {title:"History",img:"./Frame (1).png"},
  {title:"Sports",img:"./Frame (2).png"},
  {title:"Space",img:"./Frame.png"},
  {title:"History",img:"./Frame (1).png"},
  {title:"Sports",img:"./Frame (2).png"}
]
function App() {
  const [route,setRoute]=useState('home');
  const [cats,setCats]=useState('')
  return (
   route==='home' ?<div className='App' >
     <div className="rec-y"> 
      <div className="title">
        <div className='text'>Hello Kirat</div>
        <img   style={{width:'40px',height:'40px',borderRadius:'50%'}} src="https://s3-alpha-sig.figma.com/img/89b4/446a/30abe92a0690905e1906270ebf9f799a?Expires=1696809600&Signature=PVsoX1F4NAhm8sdUTADUa18SEsusfpKR9XRZ7D-cRmMHZVrtYVZTlacRewowDNgI-hmFOWsmPMbOJsreK9fVeYdsuE0PaJnzisPdHZBwRKpdfS3FXM3rzPqTWBKCvMAu3Iz9aLGmrCA1xYtJPQnw77L~RewvqOZjyI12xDXcrG-tbfPaBCw8XQgyV5HCcXLI-QP~z5j8da4J-HAK3VoPASe5KlkAW0V1o1pGzDt9AUG0RFuBvxbp0UlbZo3PmnUvf5FSPjZFRrwvumtc60FMw5rYHszLHC8Cpotmbeo0qRuh5NzXfmDtvk3fRCeE4iEOTP8Bt6hxjM3uKltV6CAgKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
      </div>
      <div className='text' style={{marginLeft:'20px',padding:'10px'}}>
        Popular
      </div>
      <div className='grid'>
      {cat.map((item)=>{
         return <div className='item'  style={{cursor:'pointer'}} onClick={()=>{setRoute('quiz');setCats(item.title)}} >
          <div  className='text-small' >{item.title}</div>
          <img src={item.img} />
         </div>
      })}
      </div>
     </div>
     <div className="explore">
     
     {allcat.map((item)=>{
         return <div className='item-2' style={{cursor:'pointer'}} onClick={()=>{setRoute('quiz')}}>
          <div  className='text-small' >{item.title}</div>
          <img src={item.img} />
         </div>
      })}
     </div>
     </div>:<Quiz cat={cats}/>
  );
}
function Quiz({ cat }) {
  const [data, setData] = useState({});
  const [API, setAPI] = useState("");
  const [no, setNo] = useState(0);
  const [border,setBorder]=useState("")
  const [myStyle, setMyStyle] = useState({});
  const getCat = (cat) => {
    if (cat === "Sports") {
      setAPI("https://opentdb.com/api.php?amount=10&category=21");
    } else if (cat === "Space") {
      setAPI("https://opentdb.com/api.php?amount=10&category=17");
    } else {
      setAPI("https://opentdb.com/api.php?amount=10&category=23");
    }
  };
  const handleClick = (id) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [id]: !prevState[id],
    }));
  
    setTimeout(() => {
      let num = no;
      num++;
      setNo(num);
    }, 3000); // Wait for 3 seconds (3000 milliseconds) before incrementing the number
  };
  
  useEffect(() => {
    getCat(cat);
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [API, cat]);

  return (
    <div className="App">
      <div className="rec-y">
        <div className="ques-div">
        <div
              className="score"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                position:'absolute',
               top:'40%',
               zIndex:1,
                
                background: "white",
              }}
            >
              {no}/20
            </div>
          <div className="ques">
           
            
            <div className="title-ques" style={{width:'100%',display:'flex',justifyContent:'center'}}>
              {data.results && data.results[no] ? data.results[no].question + " ?" : ""}
            </div>
            
            
            
            
          </div>
          
        </div>
      </div>
      <div className="options">
              {data.results && data.results[no]
                ? data.results[no].incorrect_answers.map((item,index) => {
                    return <div className="option" id='option' key={index} style={{
                      borderColor: myStyle[`${index}`] 
                        ? "red" 
                        : "#FFB504"
                    }} onClick={() => handleClick(index)}
                    >{item}</div>;
                  })
                : ""}
                 <div  className="option" id="cr-option" onClick={()=>{
                       document.getElementById("cr-option").style.borderColor="green";
                       document.getElementById("cr-option").style.borderWidth="5px";

                       setTimeout(() => {
                        let num = no;
                        num++;
                        setNo(num);
                      }, 3000);
                    }}>{data.results && data.results[no] ? data.results[no].correct_answer : ""}</div> 
            </div>
    </div>
  );
}


export default App;
