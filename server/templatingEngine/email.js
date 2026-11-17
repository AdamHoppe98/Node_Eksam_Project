import fs from 'fs';
import { sanitizeXSS } from '../util/escapeHTMLUtil.js';
import path from 'path'

export function constructEmail(context = {}){
    const email = fs.readFileSync(path.resolve('templatingEngine/email.html'),'utf-8');
    return email
    .replaceAll('{{USER_NAME}}', sanitizeXSS(context.username) || "" )
    .replaceAll('{{EMAIL_FROM}}', sanitizeXSS(context.from) || "");
}


