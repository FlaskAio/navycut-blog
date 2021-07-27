// You just need to write the content and heading in the allnews.json then the news are added automatically

let allnews=new XMLHttpRequest();

allnews.open('GET','allnews.json',true);

allnews.onload=function(){
    if(this.status===200)
    {
        let allnews=document.querySelector('.news');
        let  news=JSON.parse(this.responseText);
        str="";
        for(content in news)
        {
            str+=`<div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h3 class="mb-0">${news[content].heading}</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">${news[content].content}</p>
              </div>
             
            </div>
          </div>`
        }
        allnews.innerHTML=str;
    }
}

allnews.send();

// And if you need the updatenews part lesser or smaller than 12 you just goto the allnews.json and add or delete the object and only keep how many news you need