const pages = document.getElementsByClassName('img')

document.addEventListener('DOMContentLoaded', function() {
     for(var i = 0; i < pages.length -1;  i++) {
          if(i%2 === 0 ) {
               pages[i].style.zIndex = (pages.length - i)
          }
          pages[i].pageNum = i + 1
          pages[i].onclick = function(){
               if(this.pageNum % 2 === 0) {
                    this.classList.remove('flipped')
                    this.previousElementSibling.classList.remove('flipped')
               } else {
                    pages[i].style.zIndex
                    this.classList.add('flipped')
                    this.nextElementSibling.classList.add('flipped')

               }
          } 
     }
})