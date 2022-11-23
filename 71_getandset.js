//get attributs and setattributes

const ele=document.querySelector('a');
console.log(ele.getAttribute("href"));

//now analyse what we have wrote above
// attribute: properties which is applied to html ele
//            ex: href,style,alt etc.
// value: which contains in the attribute
// so getAttribute("[attribute]") will give what value is that attribute is contain

ele.setAttribute("href","https://google.com");
console.log(ele.getAttribute("href"));

//setAttribute is used to change the value of attribute

//IMP note:
//  untill now we have seen that all methods of DOM is returning either object or nodelist
// so we have to acess them by . 

// but getAttribute and setAttribute is returning string
// so we can treat them like array