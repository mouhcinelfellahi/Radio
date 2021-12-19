class Player{
    constructor(){
        
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        
        if(screen.width<620){
             
               heightMain.style.width = screen.width + "px";
           }
        
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-250 + "px";
        
    }
}

onload = new Player();

// class btns

class Audio_Player{
    
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_audio");
        this.play_pause_btn = document.getElementById("play_pause");
        this.isPlayed = true;
        this.play_pause_btn.addEventListener("click", ()=>{
            
            this.play_pause();
            
        });
        
        
        this.source_audio =[];
        this.source_audio[0] = "http://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3";
        this.source_audio[1] = "http://broadcast.ice.infomaniak.ch/aswat-high.mp3";
        this.source_audio[2] = "http://medradio-maroc.ice.infomaniak.ch/medradio-maroc-64.mp3";
        this.source_audio[3] = "http://radiomars.ice.infomaniak.ch/radiomars-128.mp3";
        this.source_audio[4] = "http://broadcast.infomaniak.ch/chadafm-high.mp3";
        this.source_audio[5] = "https://mfm.ice.infomaniak.ch/mfm-128.mp3#W";   
    
        this.names_radio = [];
        this.names_radio[0] = "HIT RADIO";
        this.names_radio[1] = "RADIO ASWAT";
        this.names_radio[2] = "MED RADIO";
        this.names_radio[3] = "RADIO MARS";
        this.names_radio[4] = "CHADA FM";
        this.names_radio[5] = "RADIO MFM"; 
        
        this.server = 0;
            
        this.setSource();
        
        
        document.getElementById("next").addEventListener("click", ()=>{
            if(this.server < this.source_audio.length-1){
                 ++this.server;
               }else{this.server = 0;}
            this.setSource();
            this.play_pause_btn.src = "./img/pause.png";
            this.isPlayed = false;
        });
        
        document.getElementById("back").addEventListener("click", ()=>{
            if(this.server > 0){
                 --this.server;
               }else{this.server = 5;}
            this.setSource();
            this.play_pause_btn.src = "./img/pause.png";
            this.isPlayed = false;
        });
        
    }
    
    setSource(){
        
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];
        this.audio_file.play();
        
    }
    
    play_pause(){
        
        if (this.isPlayed == true)
            {
                this.play_pause_btn.src = "./img/pause.png";
                this.audio_file.play();
                this.isPlayed = false;
            
            }else {this.play_pause_btn.src = "./img/play.png";
                   this.audio_file.pause();
                   this.isPlayed = true;}
    }
}

onload = new Audio_Player();
