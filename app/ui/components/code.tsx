import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';


function Code(props: any) {
  const LinkIcon = ClipboardDocumentListIcon;
  return (
    <div className="grid grid-cols-code-copy-grid text-l m-0">
      <SyntaxHighlighter
        language={props.language}
      >
        {props.text}
      </SyntaxHighlighter>
      <div className="flex items-center m-2">
        <CopyToClipboard text={props.text}>
          <button><LinkIcon className="copy w-5 text-xl" title="Copy to clipboard"/></button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default Code;
