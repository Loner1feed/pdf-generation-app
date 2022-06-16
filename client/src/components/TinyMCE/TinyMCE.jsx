import React, { useState, useEffect, useRef } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import { useSelector } from 'react-redux';
import { cmToPx } from '../../helpers/cmToPx';
import { Box } from '@mui/material';
import { style } from './style/style';

export const TinyMCE = ({data, setData}) => {

  const {margins, format} = useSelector(state => state.editor)

  const [styles] = useState("@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'); body { font-family: 'Roboto', sans-serif; font-size:14px; margin: 10px } p {margin: 0}")
  const ref = useRef()

  // set width depends on picked format
  let widthStyle;
  switch (format) {
    case 'A3':
      widthStyle = 1123;
      break;

    case 'A4':
      widthStyle = 794;
      break;

    case 'A5':
      widthStyle = 559;
      break;
  
    default:
      widthStyle = 0;
      break;
  }
  
  // set margins in editor depends on picked margins
  useEffect(() => {
    if(window.tinymce) {
      window.tinymce.activeEditor.contentWindow.document.body.style.paddingLeft = `${cmToPx(margins.left)}px`;
      window.tinymce.activeEditor.contentWindow.document.body.style.paddingRight = `${cmToPx(margins.right)}px`;
      window.tinymce.activeEditor.contentWindow.document.body.style.paddingTop = `${cmToPx(margins.top)}px`;
      window.tinymce.activeEditor.contentWindow.document.body.style.paddingBottom = `${cmToPx(margins.bottom)}px`;
    }
  }, [margins]);
  

  return (
    <Box sx={style.container} width={`${widthStyle + 26}px`}>
      <Editor
        ref={ref}
        onEditorChange={(e) => {
          setData(e);
        }}
        value={data}
        init={{
          menubar: true,
          plugins: "table code advtable lists fullscreen hr autoresize image",
          toolbar:
            "image | bold italic hr  forecolor backcolor| " +
            "alignleft aligncenter alignright alignjustify | indent outdent | " +
            "table tableinsertdialog tablecellprops tableprops advtablerownumbering ",
          image_title: true,
          automatic_uploads: true,
          file_picker_types: 'image',
          /* and here's our custom image picker*/
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            /*
              Note: In modern browsers input[type="file"] is functional without
              even adding it to the DOM, but that might not be the case in some older
              or quirky browsers like IE, so you might want to add it to the DOM
              just in case, and visually hide it. And do not forget do remove it
              once you do not need it anymore.
            */

            input.onchange = function () {
              var file = this.files[0];

              var reader = new FileReader();
              reader.onload = function () {
                /*
                  Note: Now we need to register the blob in TinyMCEs image blob
                  registry. In the next release this part hopefully won't be
                  necessary, as we are looking to handle it internally.
                */
                var id = 'blobid' + (new Date()).getTime();
                var blobCache =  window.tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };

            input.click();
          },
          content_style: styles
        }}
      />
    </Box>
  )
}
