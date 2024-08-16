const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "30px";


div.style.borderRadius = "10px";
div.style.position = 'fixed';
div.style.top = '20%';
div.style.right = '10px';
div.style.zIndex = '1000';
div.style.display = 'flex';

document.body.appendChild(div);



const input = document.createElement('input');
input.setAttribute("type", "text");
input.style.width = '100%';
input.style.textAlign = 'center';
input.style.outline = 'none';



div.append(input);






const cursorUrl1 = chrome.runtime.getURL('images/cursor_1.png');
const cursorUrl2 = chrome.runtime.getURL('images/cursor_2.png');
const cursorUrl3 = chrome.runtime.getURL('images/cursor_3.png');
const cursorUrl4 = chrome.runtime.getURL('images/cursor_4.png');
const cursorUrl5 = chrome.runtime.getURL('images/cursor_5.png');
const cursorUrl6 = chrome.runtime.getURL('images/cursor_6.png');
const cursorUrl7 = chrome.runtime.getURL('images/cursor_7.png');




input.addEventListener('change', (e) => {

        var change = e.target.value;

        

        switch (change.toLowerCase().trim()){
            case "c_1":
                   document.body.style.cursor = `url(${cursorUrl1}), pointer`;
                   
                   break;

            case "c_2":
                  document.body.style.cursor = `url(${cursorUrl2}), pointer`;

                    break;
                    
            case "c_3":
                   document.body.style.cursor = `url(${cursorUrl3}), pointer`;

                    break;
                        
            case "c_4":
                   document.body.style.cursor = `url(${cursorUrl4}), pointer`;

                    break;
                            
            case "c_5":
                   document.body.style.cursor = `url(${cursorUrl5}), pointer`;

                    break;
                                
            case "c_6":
                   document.body.style.cursor = `url(${cursorUrl6}), pointer`;

                    break;
                                    
            case "c_7":
                   document.body.style.cursor = `url(${cursorUrl7}), pointer`;

                    break;
            default :
              alert("Enter no. befor c_7")
                                                                  
        }
      
});
