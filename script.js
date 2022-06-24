console.log('welcome to news app');
var xhr = new XMLHttpRequest();
var url ;
function getCategory(ct) {
    url =  `https://newsapi.org/v2/top-headlines?country=us&apiKey=cfa0fdf82dd14c858ff97cc844dce0f0&category=${ct}`;
    xhr.open('GET', url , true);
xhr.onload = function () {
    var data = JSON.parse(this.responseText).articles;
    console.log(data)
    var box = document.getElementById('box')
        box.innerHTML = ""
    data.forEach(i => {
        
         box.innerHTML += `<div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="${i.urlToImage==null?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEMbFWnCg1Z7GxYgkvk60mlDCP_5Pni53Kg&usqp=CAU':i.urlToImage}" alt="content">
       
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">${i.author==null?"source not found":i.author}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
          ${i.title}</h2>
          <p class="leading-relaxed text-base text-xs">
          ${i.content==null?'':i.content}
          .</p>
        </div>
      </div>`
    });
};
xhr.send();
}
getCategory('')