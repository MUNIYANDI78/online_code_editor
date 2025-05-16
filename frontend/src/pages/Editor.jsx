import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Editor2 from "@monaco-editor/react";
import { useParams } from "react-router-dom";
import { api_base_url } from "../helper";
import { toast } from "react-toastify";
import Chatbot from "../components/chatbot/Chatbot";

const Editor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [fixSuggestion, setFixSuggestion] = useState("");

  const { id } = useParams();
  const editorRef = useRef(null);

  // Load project
  useEffect(() => {
    fetch(`${api_base_url}/getProject`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        projectId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCode(data.project.code);
          setData(data.project);
        } else {
          toast.error(data.msg);
        }
      })
      .catch(() => toast.error("Failed to load project."));
  }, [id]);

  // Save project
  const saveProject = () => {
    fetch(`${api_base_url}/saveProject`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        projectId: id,
        code: code.trim(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) toast.success(data.msg);
        else toast.error(data.msg);
      })
      .catch(() => toast.error("Failed to save the project."));
  };

  // Save shortcut: Ctrl + S
  useEffect(() => {
    const handleSaveShortcut = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        saveProject();
      }
    };
    window.addEventListener("keydown", handleSaveShortcut);
    return () => window.removeEventListener("keydown", handleSaveShortcut);
  }, [code]);

  // Run project
  const runProject = () => {
    if (data?.projLanguage === "html" || data?.projLanguage === "css") return;

    setFixSuggestion(""); // Clear old suggestion

    fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: data.projLanguage,
        version: data.version,
        files: [{ filename: "main", content: code }],
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const combinedOutput = [result.run.output, result.run.stderr]
          .filter(Boolean)
          .join("\n");
        setOutput(combinedOutput);
        setError(result.run.code === 1);

        if (result.run.code === 1 && combinedOutput) {
          fetch(`${api_base_url}/api/ai/fix-error`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userCode: code,
              errorOutput: combinedOutput,
              language: data.projLanguage || "unknown"
            }),
          })
          
            .then((res) => res.json())
            .then((data) => {
              if (data.fix) {
                console.log("✅ AI Suggestion Received:", data.fix);
                setFixSuggestion(data.fix);
              } else {
                setFixSuggestion("No suggestion from AI.");
              }
            })
            .catch((err) => {
              console.error("❌ AI Fetch Error:", err);
              setFixSuggestion("AI suggestion failed.");
            });
        }
      })
      .catch(() => {
        setOutput("Execution failed.");
        setError(true);
      });
  };

  // Chatbot insert helper
  const insertCodeAtPosition = (newCode) => {
    const editor = editorRef.current;
    if (editor) {
      const model = editor.getModel();
      const lastLine = model.getLineCount();
      const range = {
        startLineNumber: lastLine + 1,
        startColumn: 1,
        endLineNumber: lastLine + 1,
        endColumn: 1,
      };
      editor.executeEdits("", [
        {
          range,
          text: `\n${newCode}`,
          forceMoveMarkers: true,
        },
      ]);
    }
  };

  // Default template
  useEffect(() => {
    if (data?.projLanguage === "html") {
      setCode(`<!DOCTYPE html>
<html>
<head><title>My HTML Page</title></head>
<body><h1>Hello HTML!</h1></body>
</html>`);
    } else if (data?.projLanguage === "css") {
      setCode(`body {
  background-color: lightblue;
  font-family: Arial, sans-serif;
}`);
    }
  }, [data?.projLanguage]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between" style={{ height: "calc(100vh - 90px)" }}>
        <div className="left w-[50%] h-full relative">
          <Editor2
            height="100%"
            width="100%"
            theme="vs-dark"
            language={data?.projLanguage || "python"}
            value={code}
            onChange={(newCode) => setCode(newCode || "")}
            onMount={(editor) => {
              editorRef.current = editor;
            }}
          />
          <div className="absolute bottom-2 left-2 z-10">
            <Chatbot onCodeReceived={insertCodeAtPosition} />
          </div>
        </div>
        <div className="right p-[15px] w-[50%] h-full bg-[#27272a]">
          <div className="flex pb-3 border-b border-b-[#1e1e1f] items-center justify-between px-[30px]">
            <p>Output</p>
            <button
              onClick={runProject}
              className="btnNormal !w-fit !px-[20px] bg-blue-500 hover:bg-blue-600"
            >
              Run
            </button>
          </div>

          {(data?.projLanguage === "html" || data?.projLanguage === "css") ? (
            <iframe
              title="Output"
              sandbox="allow-scripts"
              srcDoc={
                data?.projLanguage === "html"
                  ? code
                  : `<style>${code}</style><div>Write HTML above</div>`
              }
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                backgroundColor: "#fff",
              }}
            />
          ) : (
            <div className="overflow-auto text-white">
              <pre className={`text-sm ${error ? "text-red-500" : "text-green-400"}`}>
                {output}
              </pre>

              {fixSuggestion && (
                <div className="mt-4 p-3 bg-[#1e1e1e] text-yellow-300 rounded">
                  <strong>💡 AI Suggestion:</strong>
                  <pre className="mt-2 text-white whitespace-pre-wrap">{fixSuggestion}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Editor;



// import React, { useEffect, useState, useRef } from "react";
// import Navbar from "../components/Navbar";
// import Editor2 from "@monaco-editor/react";
// import { useParams } from "react-router-dom";
// import { api_base_url } from "../helper";
// import { toast } from "react-toastify";
// import Chatbot from "../components/chatbot/Chatbot";

// const Editor = () => {
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");
//   const [error, setError] = useState(false);
//   const [data, setData] = useState(null);
//   const [fixSuggestion, setFixSuggestion] = useState("");

//   const { id } = useParams();
//   const editorRef = useRef(null);

//   useEffect(() => {
//     fetch(`${api_base_url}/getProject`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         token: localStorage.getItem("token"),
//         projectId: id,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setCode(data.project.code);
//           setData(data.project);
//         } else {
//           toast.error(data.msg);
//         }
//       })
//       .catch(() => toast.error("Failed to load project."));
//   }, [id]);

//   const saveProject = () => {
//     fetch(`${api_base_url}/saveProject`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         token: localStorage.getItem("token"),
//         projectId: id,
//         code: code.trim(),
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) toast.success(data.msg);
//         else toast.error(data.msg);
//       })
//       .catch(() => toast.error("Failed to save the project."));
//   };

//   useEffect(() => {
//     const handleSaveShortcut = (e) => {
//       if (e.ctrlKey && e.key === "s") {
//         e.preventDefault();
//         saveProject();
//       }
//     };
//     window.addEventListener("keydown", handleSaveShortcut);
//     return () => window.removeEventListener("keydown", handleSaveShortcut);
//   }, [code]);

//   const applyAISuggestion = (fixText) => {
//     const lineMatch = fixText.match(/Corrected Line:\s*(\d+)/);
//     const codeMatch = fixText.match(/Corrected Code:\n([\s\S]*)/);

//     if (lineMatch && codeMatch) {
//       const lineNumber = parseInt(lineMatch[1], 10);
//       const correctedCode = codeMatch[1].trim();

//       const editor = editorRef.current;
//       if (editor) {
//         const model = editor.getModel();
//         const range = {
//           startLineNumber: lineNumber,
//           startColumn: 1,
//           endLineNumber: lineNumber,
//           endColumn: model.getLineLength(lineNumber) + 1,
//         };

//         editor.executeEdits("", [
//           {
//             range,
//             text: correctedCode,
//             forceMoveMarkers: true,
//           },
//         ]);
//       }
//     }
//   };

//   const runProject = () => {
//     if (data?.projLanguage === "html" || data?.projLanguage === "css") return;

//     setFixSuggestion("");

//     fetch("https://emkc.org/api/v2/piston/execute", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         language: data.projLanguage,
//         version: data.version,
//         files: [{ filename: "main", content: code }],
//       }),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         setOutput(result.run.output);
//         setError(result.run.code === 1);

//         if (
//           result.run.code === 1 &&
//           result.run.output &&
//           data?.projLanguage !== "html" &&
//           data?.projLanguage !== "css"
//         ) {
//           const isSyntaxError = /SyntaxError|Unexpected token|expected|IndentationError|NameError|unexpected/i.test(
//             result.run.output
//           );

//           if (isSyntaxError) {
//             fetch(`${api_base_url}/ai/fix-error`, {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 userCode: code,
//                 errorOutput: result.run.output,
//               }),
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 if (data.fix) {
//                   setFixSuggestion(data.fix);
//                   applyAISuggestion(data.fix); // ✅ auto fix
//                 } else {
//                   setFixSuggestion("No suggestion from AI.");
//                 }
//               })
//               .catch(() => setFixSuggestion("AI suggestion failed."));
//           }
//         }
//       })
//       .catch(() => toast.error("Error executing the code."));
//   };

//   useEffect(() => {
//     if (data?.projLanguage === "html") {
//       setCode(`<!DOCTYPE html>
// <html>
// <head><title>My HTML Page</title></head>
// <body><h1>Hello HTML!</h1></body>
// </html>`);
//     } else if (data?.projLanguage === "css") {
//       setCode(`body {
//   background-color: lightblue;
//   font-family: Arial, sans-serif;
// }`);
//     }
//   }, [data?.projLanguage]);

//   return (
//     <>
//       <Navbar />
//       <div
//         className="flex items-center justify-between"
//         style={{ height: "calc(100vh - 90px)" }}
//       >
//         <div className="left w-[50%] h-full relative">
//           <Editor2
//             height="100%"
//             width="100%"
//             theme="vs-dark"
//             language={data?.projLanguage || "python"}
//             value={code}
//             onChange={(newCode) => setCode(newCode || "")}
//             onMount={(editor) => {
//               editorRef.current = editor;
//             }}
//           />
//           <div className="absolute bottom-2 left-2 z-10">
//             <Chatbot onCodeReceived={(fix) => insertCodeAtPosition(fix)} />
//           </div>
//         </div>

//         <div className="right p-[15px] w-[50%] h-full bg-[#27272a]">
//           <div className="flex pb-3 border-b border-b-[#1e1e1f] items-center justify-between px-[30px]">
//             <p>Output</p>
//             <button
//               onClick={runProject}
//               className="btnNormal !w-fit !px-[20px] bg-blue-500 hover:bg-blue-600"
//             >
//               Run
//             </button>
//           </div>

//           {(data?.projLanguage === "html" || data?.projLanguage === "css") ? (
//             <iframe
//               title="Output"
//               sandbox="allow-scripts"
//               srcDoc={
//                 data?.projLanguage === "html"
//                   ? code
//                   : `<style>${code}</style><div>Write HTML above</div>`
//               }
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 border: "none",
//                 backgroundColor: "#fff",
//               }}
//             />
//           ) : (
//             <div className="overflow-auto text-white">
//               <pre
//                 className={`text-sm ${
//                   error ? "text-red-500" : "text-green-400"
//                 }`}
//               >
//                 {output}
//               </pre>

//               {fixSuggestion && (
//                 <div className="mt-4 p-3 bg-[#1e1e1e] text-yellow-300 rounded">
//                   <strong>💡 AI Suggestion:</strong>
//                   <pre className="mt-2 text-white whitespace-pre-wrap">
//                     {fixSuggestion}
//                   </pre>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Editor;













































// import React, { useEffect, useState, useRef } from "react";
// import Navbar from "../components/Navbar";
// import Editor2 from "@monaco-editor/react";
// import { useParams } from "react-router-dom";
// import { api_base_url } from "../helper";
// import { toast } from "react-toastify";
// import Chatbot from "../components/chatbot/Chatbot";

// const Editor = () => {
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");
//   const [error, setError] = useState(false);
//   const [data, setData] = useState(null);
//   const { id } = useParams();

//   const editorRef = useRef(null);

//   useEffect(() => {
//     fetch(`${api_base_url}/getProject`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         token: localStorage.getItem("token"),
//         projectId: id,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setCode(data.project.code);
//           setData(data.project);
//         } else {
//           toast.error(data.msg);
//         }
//       })
//       .catch(() => toast.error("Failed to load project."));
//   }, [id]);

//   const saveProject = () => {
//     fetch(`${api_base_url}/saveProject`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         token: localStorage.getItem("token"),
//         projectId: id,
//         code: code.trim(),
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) toast.success(data.msg);
//         else toast.error(data.msg);
//       })
//       .catch(() => toast.error("Failed to save the project."));
//   };

//   useEffect(() => {
//     const handleSaveShortcut = (e) => {
//       if (e.ctrlKey && e.key === "s") {
//         e.preventDefault();
//         saveProject();
//       }
//     };
//     window.addEventListener("keydown", handleSaveShortcut);
//     return () => window.removeEventListener("keydown", handleSaveShortcut);
//   }, [code]);

//   const runProject = () => {
//     if (data?.projLanguage === "html" || data?.projLanguage === "css") {
//       // HTML/CSS does not need backend compile
//       return;
//     }

//     fetch("https://emkc.org/api/v2/piston/execute", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         language: data.projLanguage,
//         version: data.version,
//         files: [
//           {
//             filename:
//               data.name +
//               (data.projLanguage === "python"
//                 ? ".py"
//                 : data.projLanguage === "java"
//                 ? ".java"
//                 : data.projLanguage === "javascript"
//                 ? ".js"
//                 : data.projLanguage === "c"
//                 ? ".c"
//                 : data.projLanguage === "cpp"
//                 ? ".cpp"
//                 : data.projLanguage === "bash"
//                 ? ".sh"
//                 : ""),
//             content: code,
//           },
//         ],
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setOutput(data.run.output);
//         setError(data.run.code === 1);
//       });
//   };

//   // AI Generated code insert
//   const insertCodeAtPosition = (newCode) => {
//     const editor = editorRef.current;
//     if (editor) {
//       const model = editor.getModel();
//       const lastLine = model.getLineCount();
//       const range = {
//         startLineNumber: lastLine + 1,
//         startColumn: 1,
//         endLineNumber: lastLine + 1,
//         endColumn: 1,
//       };
//       editor.executeEdits("", [
//         {
//           range,
//           text: `\n${newCode}`,
//           forceMoveMarkers: true,
//         },
//       ]);
//     }
//   };

//   // Default code for HTML/CSS
//   useEffect(() => {
//     if (data?.projLanguage === "html") {
//       setCode(`<!DOCTYPE html>
// <html>
// <head>
//   <title>My HTML Page</title>
// </head>
// <body>
//   <h1>Hello HTML!</h1>
// </body>
// </html>`);
//     } else if (data?.projLanguage === "css") {
//       setCode(`body {
//   background-color: lightblue;
//   font-family: Arial, sans-serif;
// }`);
//     }
//   }, [data?.projLanguage]);

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-between" style={{ height: "calc(100vh - 90px)" }}>
//         <div className="left w-[50%] h-full relative">
//           <Editor2
//             height="100%"
//             width="100%"
//             theme="vs-dark"
//             language={data?.projLanguage || "python"}
//             value={code}
//             onChange={(newCode) => setCode(newCode || "")}
//             onMount={(editor) => {
//               editorRef.current = editor;
//             }}
//           />
//           <div className="absolute bottom-2 left-2 z-10">
//             <Chatbot onCodeReceived={insertCodeAtPosition} />
//           </div>
//         </div>

//         <div className="right p-[15px] w-[50%] h-full bg-[#27272a]">
//           <div className="flex pb-3 border-b border-b-[#1e1e1f] items-center justify-between px-[30px]">
//             <p>Output</p>
//             <button
//               onClick={runProject}
//               className="btnNormal !w-fit !px-[20px] bg-blue-500 hover:bg-blue-600"
//             >
//               run
//             </button>
//           </div>

//           {/* ✅ HTML & CSS Output Preview */}
//           {(data?.projLanguage === "html" || data?.projLanguage === "css") ? (
//             <iframe
//               title="Output"
//               sandbox="allow-scripts"
//               srcDoc={
//                 data?.projLanguage === "html"
//                   ? code
//                   : `<style>${code}</style><div>Write HTML above</div>`
//               }
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 border: "none",
//                 backgroundColor: "#fff",
//               }}
//             />
//           ) : (
//             <pre
//               className={`w-full h-[75vh] overflow-auto ${error ? "text-red-500" : "text-green-400"}`}
//               style={{ textWrap: "nowrap" }}
//             >
//               {output}
//             </pre>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Editor;













