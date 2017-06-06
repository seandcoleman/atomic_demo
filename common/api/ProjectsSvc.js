 import {get} from './utils'
/* jshint expr: true */

 export async function getProjectsAPI () {
   return get(
     'http://jsonstub.com/atomic/demo/projects', {
       headers: {
         'Content-Type': 'application/json',
         'JsonStub-User-Key': '027ceef6-9229-45cb-9ed4-6b8b88c16801',
         'JsonStub-Project-Key': 'e584d5d9-1bd7-471d-b0c6-db1a17ab6449'
       }})
 }
