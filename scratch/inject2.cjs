const fs = require('fs');

let content = fs.readFileSync('src/pages/Adsp.tsx', 'utf8');
const s1_p2 = fs.readFileSync('scratch/subject1_p2.tsx', 'utf8');
const s2_p2 = fs.readFileSync('scratch/subject2_p2.tsx', 'utf8');

content = content.replace('{activeSubject === 1 && (\r\n      <div className="adsp-page">', '{activeSubject === 1 && (\r\n      <>\r\n      <div className="adsp-page">');
content = content.replace('{activeSubject === 1 && (\n      <div className="adsp-page">', '{activeSubject === 1 && (\n      <>\n      <div className="adsp-page">');

content = content.replace('{activeSubject === 2 && (\r\n      <div className="adsp-page">', '{activeSubject === 2 && (\r\n      <>\r\n      <div className="adsp-page">');
content = content.replace('{activeSubject === 2 && (\n      <div className="adsp-page">', '{activeSubject === 2 && (\n      <>\n      <div className="adsp-page">');

const target1_rn = '          </div>\r\n        </div>\r\n      </div>\r\n      )}';
const target1_n = '          </div>\n        </div>\n      </div>\n      )}';

let parts = content.split(target1_rn);
if (parts.length === 1) {
  parts = content.split(target1_n);
}

if (parts.length >= 3) {
  const newContent = 
    parts[0] + 
    '          </div>\n        </div>\n      </div>\n' + s1_p2 + '\n      </>\n      )}' +
    parts[1] +
    '          </div>\n        </div>\n      </div>\n' + s2_p2 + '\n      </>\n      )}' +
    parts.slice(2).join(target1_n);
    
  fs.writeFileSync('src/pages/Adsp.tsx', newContent);
  console.log('Success - Splice done');
} else {
  console.log('Split failed, parts length: ' + parts.length);
}
