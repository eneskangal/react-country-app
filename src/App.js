import React, { Component } from 'react';
import "./app.css"
class App extends Component {
    render() {     
        let variable=()=>{
            fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => fonksiyon(data))  
        }
        let i=0;
        function fonksiyon(data){
            console.log(data.length)            
            for(i=0; i<data.length; i++){                         
                let col=document.createElement("div")
                col.classList.add("content")
                document.querySelector(".row").appendChild(col)
                let card=document.createElement("div")
                card.classList.add("card")
                card.style.width="25%"
                card.style.margin="10px 0"
                document.querySelector(".content").appendChild(card)
                let img=document.createElement("img")
                img.classList.add("img-fluid")
                img.classList.add("card-img-top")
                img.src=data[i].flags.png
                document.querySelectorAll(".card")[i].appendChild(img)
                let cardBody=document.createElement("div")
                cardBody.classList.add("card-body")
                document.querySelectorAll(".card")[i].appendChild(cardBody)
                let title=document.createElement("h5")
                title.classList.add("card-title")
                title.innerHTML=data[i].name.common
                document.querySelectorAll(".card-body")[i].appendChild(title)
                let para=document.createElement("p")
                para.classList.add("card-text")
                para.innerHTML=data[i].capital
                document.querySelectorAll(".card-body")[i].appendChild(para)                                             
            }        
        }
        function fonksiyon2(){             
            let cardTitles=document.querySelectorAll(".card-title")            
            for(i=0; i<document.querySelectorAll(".card").length; i++){
                let search=cardTitles[i].innerHTML.search(document.getElementById("ayar").value)                
                if(search>-1){
                    document.querySelectorAll(".card")[i].style.display="block"
                }
                else{
                    document.querySelectorAll(".card")[i].style.display="none"
                }           
            }
        }
        variable()     
        return (
            <div className="container">
                <input type="search" id="ayar" placeholder="ulke yazin" onChange={fonksiyon2}/>
                <div className="row">                                       
                </div>                         
            </div>
        );
    }
}
export default App;