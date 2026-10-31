// Local preview only. Never authenticates browser-supplied identity headers.
import{mkdir,readFile,writeFile,rename,readdir,unlink}from'node:fs/promises';
import{resolve}from'node:path';
import{createHash}from'node:crypto';
export class PreviewBucket{
 constructor(root){this.root=root;this.queue=Promise.resolve();}
 path(key){if(!/^[a-zA-Z0-9/._-]+$/.test(key)||key.includes('..'))throw Error('Bad key');return resolve(this.root,key);}
 async get(key){try{const raw=await readFile(this.path(key),'utf8'),v=JSON.parse(raw);return{key,etag:v.etag,customMetadata:v.customMetadata,json:async()=>JSON.parse(v.value),text:async()=>v.value};}catch(e){if(e.code==='ENOENT')return null;throw e;}}
 async put(key,value,options={}){const action=this.queue.then(async()=>{const old=await this.get(key);if(options.onlyIf?.etagDoesNotMatch==='*'&&old)return null;if(options.onlyIf?.etagMatches&&old?.etag!==options.onlyIf.etagMatches)return null;const p=this.path(key);await mkdir(resolve(p,'..'),{recursive:true});const v={value:String(value),customMetadata:options.customMetadata,etag:createHash('sha256').update(String(value)).digest('hex')};await writeFile(p+'.tmp',JSON.stringify(v));await rename(p+'.tmp',p);return{etag:v.etag};});this.queue=action.catch(()=>{});return action;}
 async delete(keys){for(const key of Array.isArray(keys)?keys:[keys])await unlink(this.path(key)).catch(e=>{if(e.code!=='ENOENT')throw e;});}
 async list({prefix='',limit=100,cursor}={}){await mkdir(this.root,{recursive:true});const files=await readdir(this.root,{recursive:true});const keys=files.filter(k=>k.startsWith(prefix)&&!k.endsWith('.tmp')).sort();const objects=[];for(const key of keys){if(cursor&&key<=cursor)continue;try{const o=await this.get(key);if(o)objects.push({key,customMetadata:o.customMetadata});}catch(e){if(e.code!=='EISDIR')throw e;}}const page=objects.slice(0,limit);return{objects:page,truncated:objects.length>limit,cursor:page.at(-1)?.key};}
}
