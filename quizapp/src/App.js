import logo from './logo.svg';
import './App.css';

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
  return (
   <div className='App' >
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
         return <div className='item'>
          <div  className='text-small' >{item.title}</div>
          <img src={item.img} />
         </div>
      })}
      </div>
     </div>
     <div className="explore">
     
     {allcat.map((item)=>{
         return <div className='item-2'>
          <div  className='text-small' >{item.title}</div>
          <img src={item.img} />
         </div>
      })}
     </div>
     </div>
  );
}

export default App;
