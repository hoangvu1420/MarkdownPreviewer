import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

const defaultMarkdown = `# Heading 1
## Heading 2
### Heading 3

**Bold Text**

*Italic Text*

[Link](https://www.example.com)

- List Item 1
- List Item 2
- List Item 3

1. Numbered Item 1
2. Numbered Item 2
3. Numbered Item 3

Multi-level list:
- List Item 1
  - Nested List Item 1
    - Nested List Item 2
      - Nested List Item 3

> Blockquote

\`Inline Code\`

\`\`\`
// Code Block
function helloWorld() {
  console.log('Hello, World!');
}
\`\`\`

Image:

![Some Logo w/ Text](https://th.bing.com/th/id/OIP.ggOZaxNl8Ro5et4G6JB_TgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)

That's a basic markdown previewer. Feel free to edit the markdown text on the left side and see the preview on the right side.`;


function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div className="container">
        <h1 className='title'>Markdown Previewer</h1>
        <div className="boxes-container">
          <div className="box">
            <h3>Editor</h3>
            <textarea
              id='editor'
              name='editor'
              value={markdownText}
              onChange={(e) => setMarkdownText(e.target.value)}
            ></textarea>
          </div>
          <div className="box">
            <h3>Preview</h3>
            <div id="preview">
              <ReactMarkdown>{markdownText}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
