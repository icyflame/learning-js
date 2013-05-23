/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function cookieRead()
{
    if(document.cookie)
    {
        //alert(unescape(document.cookie));
        
        var cookie = unescape(document.cookie);
        
        //alert('cookie is:\n' + cookie)
        
        //cookie = cookie.toString();
        
        var a = cookie.split('=');
        
        var display = '';
        
        for(var i=0;i<a.length;i++)
        {
            display += a[i] + ';';
        }
        
        alert(display);
        
    }
    
    else
        alert('no cookie stored');
        
            
        
}

