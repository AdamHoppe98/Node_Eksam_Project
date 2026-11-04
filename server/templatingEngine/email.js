import fs from 'fs';
import { sanitizeXSS } from '../util/escapeHTML.js';
import path from 'path'

export function constructEmail(context = {}){
    const email = fs.readFileSync(path.resolve('templatingEngine/email.html'),'utf-8');
    return email
    .replace('{{EMAIL_TEXT}}', sanitizeXSS(context.text) || "" )
    .replace('{{EMAIL_SUBJECT}}', sanitizeXSS(context.subject) || "")
    .replace('{{EMAIL_FROM}}', sanitizeXSS(context.from) || "");
}


