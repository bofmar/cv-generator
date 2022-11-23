

# CV Generator

A website that takes the user's input and turns them into a downloadable cv using a pre-configured theme. Made with React. See it live [here](https://bofmar.github.io/cv-generator/).

## Demo
![demo](./src/images/demo.png)]

Check [here](./pdf-example.pdf) for an example of a pdf output from the site/

## Stack
CV Generator is made using react and demonstrates the use of props and state.
Unique ids are generated using [nanoid](https://www.npmjs.com/package/nanoid). 
SVGs are taken from [fontawesome](https://fontawesome.com/).
The pdf is created and saved by combining [html2canvas](https://html2canvas.hertzen.com/) with [jsPDF](https://www.npmjs.com/package/jspdf).
The fake picture seen in the demo was taken from [This Person Does Not Exist](https://thispersondoesnotexist.com/).