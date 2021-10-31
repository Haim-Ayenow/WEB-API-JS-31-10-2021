url = "https://api.jikan.moe/v3/search/anime?q=";
search = document.getElementById("search");
btn = document.getElementById("btn");
container = document.getElementById("container");

async function getApi(api) {
    try{
        return await fetch(api)
        .then(response=>response.json())
        .then(json=>json.results)    
    }
    catch(err){
        return err
    }
}

btn.onclick = ()=>{
    
    showGif()
 setTimeout(()=>{
    getApi(url + search.value)
    .then(res=>printAllObjects(res,container))
    .finally(hideGif())
   },2000)
}

function printAllObjects(arrayOfObj,container) {
    
    for (const iterator of arrayOfObj) {
    
        myDiv.innerHTML += 
            `<div class="card"><h3> ${iterator.title}</h3>
            <img src="${iterator.image_url}"><p>${iterator.synopsis}</p>
            <p>score : ${iterator.score}</p>
            <p><a href="${iterator.url}" target="blank">link</p>
            </div>`

    }
}

function showGif(){
    document.getElementById("loadingGif").style.display ="block"
}

function hideGif(){
    document.getElementById("loadingGif").style.display ="none"
}



























// // let url="https://api.jikan.moe/v3/search/anime?q="
// // async function getApi(api){
// //     try{
// //         return await fetch(api)
// //         .then(response=>response.json())
// //     }
// //     catch(error){
// //         return error
// //     }
// // }
// // search_btn.onclick=()=>{
// //     getApi(url+search_input.value).then(res=>console.log(res.results))
// // }

// let basicApi="https://api.jikan.moe/v3/"
// async function getApi(api){
//     try{
//         return await fetch(api)
//         .then(response=>response.json())
//     }
//     catch(error){
//         return error
//     }
// }
// search_btn.onclick=()=>{
//     getApi(`${basicApi}search/anime?q=${search_input.value}`)
//     .then(res=>showResult(res.results))
// }


// function showResult(result){
//     result.forEach(element=>{
//        myDiv.innerHtml+=`<div class="card" id="resDiv_${element.title}"></div>
//        <div class="card">
//        <img src="${element.image_url}" alt="avatar" style="width:100%>
//        <div class="container">
//        <h4><b>${element.title}<b><h4>
//        <p>${element.synopsis}<p>
//        </div>
//        </div>`

//     })
// }







// function printToScreen(someArray,someDiv){
//     for(let item of someArray){
//       myDiv.innerHTML+=`<img height=100px; Width=100px; src="${item}">`
//     }
// }

// search_btn.onclick=()=>{
//     getApi(`${basicApi+search_input.value}/images`).then(res=>printToScreen(res.message,myDiv))
// };

