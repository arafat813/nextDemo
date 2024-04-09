/** @type {import('next').NextConfig} */
import path from 'path'
// require('dotenv').config();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const nextConfig = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'src', 'styles')],
    },
    // env:{
    //   'MYSQL_HOST':'localhost',
    //   'MYSQL_PORT':'3306',
    //   'MYSQL_DATABASE':'blog',
    //   'MYSQL_USER':'root',
    //   'MYSQL_PASSWORD':'813321'
    // }

};


export default nextConfig;
