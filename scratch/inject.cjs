const fs = require('fs');

let content = fs.readFileSync('src/pages/Adsp.tsx', 'utf8');
const s1_p2 = fs.readFileSync('scratch/subject1_p2.tsx', 'utf8');
const s2_p2 = fs.readFileSync('scratch/subject2_p2.tsx', 'utf8');

// Use simple string replacements.
content = content.replace('{activeSubject === 1 && (\r\n      <div className="adsp-page">', '{activeSubject === 1 && (\r\n      <>\r\n      <div className="adsp-page">');
content = content.replace('{activeSubject === 1 && (\n      <div className="adsp-page">', '{activeSubject === 1 && (\n      <>\n      <div className="adsp-page">');

content = content.replace('{activeSubject === 2 && (\r\n      <div className="adsp-page">', '{activeSubject === 2 && (\r\n      <>\r\n      <div className="adsp-page">');
content = content.replace('{activeSubject === 2 && (\n      <div className="adsp-page">', '{activeSubject === 2 && (\n      <>\n      <div className="adsp-page">');

// We need to replace the exact closing tags. Let's look for the comment PAGE 2
const page2Index = content.indexOf('PAGE 2');
// The closing tags for activeSubject === 1 should be just before PAGE 2
// Replace the last instance of `</div>\r\n      )}` or `</div>\n      )}` before page2Index
let sub1 = content.substring(0, page2Index);
let rest1 = content.substring(page2Index);
sub1 = sub1.replace(/<\/div>\s*\}\)/, '</div>\n' + s1_p2 + '\n      </>\n      )}');

content = sub1 + rest1;

const page3Index = content.indexOf('PAGE 3');
let sub2 = content.substring(0, page3Index);
let rest2 = content.substring(page3Index);
// Replace the LAST match before PAGE 3
const lastMatchRegex = /<\/div>\s*\}\)(?![\s\S]*<\/div>\s*\}\))/;
sub2 = sub2.replace(lastMatchRegex, '</div>\n' + s2_p2 + '\n      </>\n      )}');

content = sub2 + rest2;

fs.writeFileSync('src/pages/Adsp.tsx', content);
console.log('Success');
