
function bold(){
     var F=document.getElementById('para').style.fontWeight
     if (F == 'normal') {
        document.getElementById("para").style.fontWeight='bold' ;
    }
    else  { 
        document.getElementById("para").style.fontWeight='normal';
          }
    
    
}
function italic(){
    var I=document.getElementById('para').style.fontStyle
    if (I == 'normal') {
       document.getElementById("para").style.fontStyle='italic' ;
   }
   else  { 
       document.getElementById("para").style.fontStyle='normal';
         }
   
   
}
function under(){
    var U=document.getElementById("para").style.textDecorationLine
    if ( U == 'none') {
       document.getElementById("para").style.textDecorationLine='underline' ;
   }
   else 
       {document.getElementById("para").style.textDecorationLine='none';
        
   
}
}
function select()
{ switch (aa.value) {
    case ("20px"):
        document.getElementById("para").style.fontSize='20px'
      break;
    case ("30px"):
        document.getElementById("para").style.fontSize='30px'   
      break;
    case ("40px") :
        document.getElementById("para").style.fontSize='40px'
      break;
    default:
}} 

        function select()
        { switch (bb.value) {
            case ("arial"):
                document.getElementById("para").style.fontFamily='a'
              break;
            case (""):
                document.getElementById("para").=''   
              break;
            case ("") :
                document.getElementById("para").=''
              break;
            default:
              
          }}
    
   

