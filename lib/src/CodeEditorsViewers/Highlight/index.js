import React, { useState, useEffect } from 'react';
import { Icon, Hover } from 'e-ui-react';
import { renderToStaticMarkup } from 'react-dom/server';
import HtmlToReactParser from 'html-to-react';
import htmlToFormattedText from 'html-to-formatted-text';
import hljs from 'highlight.js';
import './dracula.css';
import './index.css';

const SplitConfiguration = (content, lines) => {
 let returnData = [];
 const range = (min, max) =>
  [...Array(max - min + 1).keys()].map((i) => i + min);
 let contents = content.split('\n');
 // console.log( contents );
 lines.forEach((line) => {
  if (line.includes('T')) {
   let lineSplitter = line.split('T');
   range(parseInt(lineSplitter[0]), parseInt(lineSplitter[1])).forEach((l) => {
    returnData?.push(contents[l]);
   });
  } else {
   returnData?.push(contents[line]?.trim());
  }
 });
 return returnData;
};

export const RequireCode = (code, lines) => {
 if (lines !== undefined) {
  code = SplitConfiguration(code, lines).join('\n');
 }
 return code;
};

export const HtmlStringToReactJSXConverter = (html) => {
 const htmlToReactParser = new HtmlToReactParser.Parser();
 return htmlToReactParser.parse(html);
};

export const ReactJSXToHtmlStringConverter = (component) => {
 return renderToStaticMarkup(component);
};

export const ReactJSXToOutputViewer = (component) => {
 return htmlToFormattedText(renderToStaticMarkup(component));
};

export const Highlight = (props) => {
 // props.withBlink
 //  lines={['1','3', '5T8']}
 // (props.content, props.lang, props.lines)
 const displayCode = RequireCode(props.content, props.lines);
 const highlightCode = hljs.highlight(displayCode, {
  language: props.lang !== undefined ? props.lang : 'html',
 }).value;
 const [highlightContent, setHighlightContent] = useState(highlightCode);
 // Blinking Stuff
 const [blinkIndex, setBlinkIndex] = useState(0);
 const [currentBlinkWord, setCurrentBlinkWord] = useState();

 const addBlinkFeature = () => {
  console.log('highlightContent', highlightContent);
  const blinkWord = highlightContent.split(' ');
  if (blinkIndex <= blinkWord.length) {
   let word = blinkWord.slice(0, blinkIndex).join(' ') + '|';
   setCurrentBlinkWord(word);
   setBlinkIndex(blinkIndex + 1);
  } else {
   setCurrentBlinkWord(
    currentBlinkWord.substring(0, currentBlinkWord.length - 1)
   );
  }
 };

 useEffect(() => {
  if (props.withBlink) {
   setTimeout(() => addBlinkFeature(), 100);
  }
 }, [blinkIndex]);

 useEffect(
  () => console.log('currentBlinkWord', currentBlinkWord),
  [currentBlinkWord]
 );

 useEffect(() => {
  hljs.configure({
   languages: ['html', 'javascript'],
   ignoreUnescapedHTML: true,
  });
  hljs.highlightAll();
 }, []);

 let hglHtmlContent =
  props?.withBlink === true
   ? HtmlStringToReactJSXConverter(currentBlinkWord)
   : HtmlStringToReactJSXConverter(highlightContent);

 const initialHoverContent = { icon: 'fa-clone', title: 'Copy' };
 const [hoverContent, setHoverContent] = useState(initialHoverContent);

 const CopyClip = ({ icon, title }) => {
  const handleClick = () => {
   setHoverContent({ icon: 'fa-check', title: 'Copied' });
   setTimeout(() => {
    setHoverContent(initialHoverContent);
   }, 2000);
   navigator.clipboard.writeText(displayCode);
  };
  return (
   <div style={{ position: 'relative' }}>
    <div
     align="right"
     className="bs-hglCopy-icon-div"
     onClick={() => handleClick()}
    >
     <span className="bs-hglCopy-icon" style={{ fontSize:'12px' }}>
      <Icon type="FontAwesome" name={icon} size={12} /> {title}
     </span>
    </div>
   </div>
  );
 };

 return (
  <>
   <CopyClip icon={hoverContent?.icon} title={hoverContent?.title} />
   <pre>
    <code className={'pre-code-hgl ' + 'lang-' + props.lang} {...props}>
     {hglHtmlContent}
    </code>
   </pre>
  </>
 );
};
