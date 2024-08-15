document.addEventListener('DOMContentLoaded', function() {
   let colorEle = document.querySelectorAll('.colour-value span');
   let sizeEle = document.querySelectorAll(".size-value span")
   for(let el of colorEle) {
        el.addEventListener('click', function() {
            for(let el of colorEle) {
                el.classList.remove('active')
            }
            this.classList.add('active')
            let getColor = this.dataset.color
            let getImage = this.dataset.img
            document.body.style.background = getColor;
            document.querySelector(".wrapper .price").style.color = getColor;
            document.querySelectorAll(".size-value span.color").forEach(colorE => {
                colorE.style.color = getColor;
            })
            document.querySelector(".size-value span.active").style.background = getColor;
            document.querySelector(".image img").setAttribute('src', getImage)
            document.querySelectorAll(".btns button").forEach(btn => {
                btn.style.background = getColor
                btn.style.borderColor = getColor
            })
       })
   }
   for(let colorE of sizeEle) {
    colorE.addEventListener('click', function() {
        let bgColor = document.querySelector('.colour-value span.active').dataset.color
        for(let el of sizeEle) {
            el.classList.remove('active')
            el.classList.add('color')
            el.style.background = '#fff'
            el.style.color = bgColor
        }
        this.style.background = bgColor
        this.style.color = '#fff'
        this.classList.add('active')
        this.classList.remove('color')
    })
   }
})