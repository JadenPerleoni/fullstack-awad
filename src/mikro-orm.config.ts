import { _prod_ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';
import { User } from "./entities/User";

const pass = 'swaggoat12'

console.log('dirname:', __dirname);
export default {
  entities: [Post,User],
  dbName: "lireddit",
  type: "postgresql",
  user: 'postgres',
  password: pass,
  debug: !_prod_,
  allowGlobalContext: true,
  migrations: {
    path: path.join(__dirname,'./migrations'),
    glob: '!(*.d).{js,ts}', 

  }
} as Parameters<typeof MikroORM.init>[0];
