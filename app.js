const pages = document.getElementsByClassName('img')
for(let i = 0; i <pages.length - 1;i ++) {
     if(i%2 ===0 ){
          pages[i].style.zIndex = pages.length - i
     }
     console.log(pages[i].style.zIndex + i)
}
document.addEventListener('DOMContentLoaded', function() {
     for(let i = 0; i < pages.length -1;  i++) {
          
          pages[i].pageNum = i + 1
          pages[i].onclick = function(){
               
               if(this.pageNum % 2 === 0) {
                    this.classList.remove('flipped')
                    this.previousElementSibling.classList.remove('flipped')
               } else {
                   

                    // console.log( pages[this.pageNum].style.zIndex)
                    this.classList.add('flipped')
                    this.nextElementSibling.classList.add('flipped')
               }
          } 
     }
})