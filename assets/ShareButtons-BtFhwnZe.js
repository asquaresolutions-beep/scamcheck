import{j as e}from"./index-vOlvCRQf.js";import{r as p}from"./vendor-react-CPrnAzYj.js";import{r as l,F as h,T as d,s as b,t as m,z as x}from"./vendor-ui-BY8VAiqL.js";function j({text:t,url:a}){const[s,r]=p.useState(!1),o=encodeURIComponent(t),n=encodeURIComponent(a),i=`🚨 *स्कैम अलर्ट!* 🚨

${t}

🛡️ ScamCheck पर मुफ़्त चेक करें:
${a}`;function c(){navigator.clipboard.writeText(`${t}

${a}`).then(()=>{r(!0),x.success("Copied to clipboard!"),setTimeout(()=>r(!1),2e3)})}return e.jsxs("div",{className:"share-buttons",children:[e.jsxs("a",{href:`https://wa.me/?text=${encodeURIComponent(i)}`,target:"_blank",rel:"noopener noreferrer",className:"share-btn whatsapp","aria-label":"Share on WhatsApp",children:[e.jsx(l,{size:18}),"WhatsApp"]}),e.jsxs("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${n}&quote=${o}`,target:"_blank",rel:"noopener noreferrer",className:"share-btn facebook","aria-label":"Share on Facebook",children:[e.jsx(h,{size:18}),"Facebook"]}),e.jsxs("a",{href:`https://twitter.com/intent/tweet?text=${o}&url=${n}`,target:"_blank",rel:"noopener noreferrer",className:"share-btn twitter","aria-label":"Share on Twitter",children:[e.jsx(d,{size:18}),"Twitter"]}),e.jsxs("button",{onClick:c,className:"share-btn copy","aria-label":"Copy link",children:[s?e.jsx(b,{size:18}):e.jsx(m,{size:18}),s?"Copied!":"Copy"]})]})}export{j as S};
