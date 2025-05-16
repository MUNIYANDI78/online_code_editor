import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const FrontendEditor = () => {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1 { color: red; }");
  const [js, setJs] = useState("console.log('Hello from JS')");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullDoc = `
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>
              try {
                ${js}
              } catch (e) {
                document.body.innerHTML += '<pre style="color:red;">JS Error: ' + e.message + '</pre>';
              }
            </script>
          </body>
        </html>
      `;
      setSrcDoc(fullDoc);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="w-screen h-screen bg-[#0f0e0e] text-white flex flex-col overflow-hidden">
      {/* Editors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-[50%]">
        <div className="flex flex-col">
          <h2 className="text-md mb-1">HTML</h2>
          <div className="flex-1 border border-gray-700 rounded overflow-hidden">
            <Editor height="100%" language="html" value={html} onChange={setHtml} theme="vs-dark" />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-md mb-1">CSS</h2>
          <div className="flex-1 border border-gray-700 rounded overflow-hidden">
            <Editor height="100%" language="css" value={css} onChange={setCss} theme="vs-dark" />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-md mb-1">JavaScript</h2>
          <div className="flex-1 border border-gray-700 rounded overflow-hidden">
            <Editor height="100%" language="javascript" value={js} onChange={setJs} theme="vs-dark" />
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div className="h-[50%] p-4">
        <div className="bg-white rounded-lg overflow-hidden w-full h-full">
          <h2 className="text-md text-black font-semibold px-4 pt-2">Live Preview</h2>
          <iframe
  srcDoc={srcDoc}
  title="Live Preview"
  sandbox="allow-forms allow-scripts allow-modals"
  frameBorder="0"
  width="100%"
  height="100%"
/>

        </div>
      </div>
    </div>
  );
};

export default FrontendEditor;

