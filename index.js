countEl=document.getElementById("count-el")
let count=0
function increment()
{
count=count+1
countEl.innerText=count

}
 let saveEl=document.getElementById("save-el")

function save()
{
  savestr= count+" - "
  saveEl.textContent+=savestr
  count=0
  countEl.innerText=count
}
