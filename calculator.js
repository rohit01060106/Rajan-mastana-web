const d=document.getElementById("display");let first=null,op=null,wait=false;
function num(n){if(wait||d.value==="0"||d.value==="Error"){d.value=n;wait=false}else d.value+=n}
function dot(){if(wait||d.value==="Error"){d.value="0.";wait=false}else if(!d.value.includes("."))d.value+="."}
function choose(o){const n=Number(d.value);if(!Number.isFinite(n))return;if(first===null)first=n;else if(op&&!wait){first=operate(first,n,op);d.value=String(first)}op=o;wait=true}
function calc(){if(first===null||!op)return;const r=operate(first,Number(d.value),op);d.value=Number.isFinite(r)?String(Number(r.toFixed(10))):"Error";first=null;op=null;wait=true}
function operate(a,b,o){return o==="+"?a+b:o==="-"?a-b:o==="*"?a*b:o==="/"?(b===0?Infinity:a/b):b}
function clearD(){d.value="0";first=null;op=null;wait=false}function del(){if(!wait&&d.value!=="Error")d.value=d.value.length>1?d.value.slice(0,-1):"0"}function percent(){if(d.value!=="Error")d.value=String(Number(d.value)/100)}function sign(){if(d.value!=="0"&&d.value!=="Error")d.value=String(Number(d.value)*-1)}
document.addEventListener("keydown",e=>{if(/[0-9]/.test(e.key))num(e.key);else if(e.key===".")dot();else if("+-*/".includes(e.key))choose(e.key);else if(e.key==="Enter"||e.key==="=")calc();else if(e.key==="Escape")clearD();else if(e.key==="Backspace")del()});