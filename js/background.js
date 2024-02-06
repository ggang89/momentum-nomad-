const images = ["01.jpg", "02.jpg", "03.jpg"];
//img폴더에 이름과 똑같이 만들어준다

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//append 뒤에 추가함
//prepend 앞에 추가함
