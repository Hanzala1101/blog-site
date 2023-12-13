import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App({setdesc}) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
        setdesc(editorRef.current.getContent())
    //   console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        t apiKey='fgzfr678tx67ay3ccu8yu17c17fi6a3bpz4s7mzqezjh4zwr'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue='<p>This is the initial content of the editor.</p>'
        onChange={log}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic underline forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}