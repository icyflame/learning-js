/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function writeCookie()
{
    var nameU = document.getElementById('nameUser').value;
    
    //alert(nameU);
    
    //alert(document.cookie);
    
    //if(!document.cookie)
        {
            var expiryDate = new Date();
            
            var cname = escape(nameU);
            
            //alert('escaped name:' + cname);
            
            expiryDate.setTime(expiryDate.getTime() + 600*1000);
            
            document.cookie += "cookie=" + cname + ';' + "expires=" + expiryDate.toGMTString() + ';';
            
            alert('cookie written to local system!')
                     
            
        }
        
       /*else
           {
               alert('a cookie is already stored.');
           }  */ 
    
}