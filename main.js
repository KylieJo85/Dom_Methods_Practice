const bodyElement=document.querySelector('body')

const mainElement=document.createElement('main')
mainElement.append ('')
bodyElement.append(mainElement)

const newButtonElement=document.createElement('button')
newButtonElement.append('REMOVE')
bodyElement.append(newButtonElement)

const imageElement=document.createElement('img')
imageElement.src='https://www.loumalnatis.com/filebin/reskin/hero_text.png'
imageElement.append('image class="image of broadway sign of Chicago Deep dish pizza"')
mainElement.append(imageElement)


const anchorElement=document.createElement('a')
anchorElement.href='https://www.loumalnatis.com/'
anchorElement.append('link to loumalnatis')
mainElement.append(anchorElement)

newButtonElement.addEventListener("click", function (){
mainElement.remove ()
})










