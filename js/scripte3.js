class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        }

    this.color1 = document.getElementById("color1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color1");
    });

    this.color2 = document.getElementById("color2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color2");
    });

    this.color3 = document.getElementById("color3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color3");
    });

    this.color4 = document.getElementById("color4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color4");
    });

    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.header = document.getElementById("header");
        if(color == "color1"){
            this.header.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
            document.body.style.background = "rgb(118, 206, 227)";
        }
        else if(color == "color2"){
            this.header.style.background = "linear-gradient(to right, #ff6f6f, #810000)";
            document.body.style.background ="#ff5353";
        }

        else if(color == "color3"){
            this.header.style.background = "linear-gradient(to right, #01c7b5, #006057)";
            document.body.style.background ="#009688";
        }

        else if(color == "color4"){
            this.header.style.background = "linear-gradient(to right,#d0eb76, #7da009)";
            document.body.style.background ="#b1d43c";
        }
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();