const express = require('express');
const cors = require('cors');
const app = express();
const pdf = require('html-pdf');
const path = require('path');
const uuid = require('uuid');


app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))
app.listen(5000, () => {
    console.log('server work');
})
app.use(express.static('./public'));


app.post('/generate-pdf', (req, res) => {

    const data = req.body.dataHtml;
    const margins = req.body.margins;
    const format = req.body.format;
    console.log(req.body);

    const options = {
        format: format,
        orientation: "portrait",
        border: {
            left: `${margins.left}cm`,
            right: `${margins.right}cm`,
            top: `${margins.top}cm`,
            bottom: `${margins.bottom}cm`
        }
    };

    const style = `<link rel="stylesheet" type="text/css" id="mce-u0" crossorigin="anonymous" referrerpolicy="origin" href="https://cdn.tiny.cloud/1/no-api-key/tinymce/6.0.3-5/skins/ui/oxide/content.min.css"> <link rel="stylesheet" type="text/css" id="mce-u1" crossorigin="anonymous" referrerpolicy="origin" href="https://cdn.tiny.cloud/1/no-api-key/tinymce/6.0.3-5/skins/content/default/content.min.css"> <style>@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'); body { font-size:14px; margin: 10px } p {margin: 0}</style>`

    const string = data;
    const ress = `${style} <div class="wrapper">${string}</div>`
    let fileName = uuid.v4() + ".pdf";
    pdf.create(ress, options).toFile(`./public/${fileName}`, function (err, result) {
        if (err) return console.log(err);
        console.log(result); // { filename: '/app/businesscard.pdf' }
        res.send(fileName);
    });

});
