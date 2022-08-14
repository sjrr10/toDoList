const new_task=document.getElementById("task-input"),form=document.querySelector("form"),upload_btn=document.querySelector(".icon-upload"),tasks=document.querySelector("#container");form.addEventListener("submit",a=>{if(a.preventDefault(),""!==new_task.value){let b=`
                <div class="task">
                    <span class="icon-star-full icon"></span> 
                    <p lang="ar" class="task-text">${new_task.value}</p>
                <div>
                    <span class="icon-trash icon"></span>
                    <span class="icon-sad2 icon"></span>
                </div>
                </div>
            `;tasks.innerHTML+=b}new_task.value=""}),tasks.addEventListener("click",a=>{switch(a.target.className){case"icon-trash icon":a.target.parentElement.parentElement.remove();break;case"icon-sad2 icon":a.target.classList.add("dn"),a.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");let b='<span class="icon-heart icon"></span>';a.target.parentElement.innerHTML+=b;break;case"icon-heart icon":a.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish"),a.target.classList.add("dn");let c='<span class="icon-sad2 icon"></span>';a.target.parentElement.innerHTML+=c;break;case"icon-star-full icon":a.target.classList.add("star-orange"),tasks.prepend(a.target.parentElement);break;case"icon-star-full icon star-orange":a.target.classList.remove("star-orange")}})