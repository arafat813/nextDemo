import NavBar from "@/components/navBar/navBar"
import style from './page.module.scss'
import RightBox from "@/components/RightBox/RightBox";
import Image from 'next/image';
import Pagination from "@/components/Pagination/Pagination";
import {getUser} from '@/lib/users/user'
import Link from "next/link";
import Footer from "@/components/footer/footer";


export default async function Home() {
  const revenue = await getUser();
  // console.log(revenue)
  return (
    <>
      <NavBar></NavBar>
      <main className={style.main}>
        <div style={{ height: '100%', width: '100%', flex: 1 }}>
          <Article></Article>
          <Pagination></Pagination>
        </div>
        <RightBox isPosts={false} ></RightBox>
      </main>
      <Footer></Footer>
    </>
  );
}

const Articles = [
  {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  }, {
    name: '标题1',
    url: '/posts/Title1'
  },
]
// 文章显示和分页处理
function Article() {
  return (
    <div className={style.Article}>
      {Articles.map((item, index) =>
        <Link href={item.url} key={index} className={style.ArticleItem}>
          <div className={style.ArticleImage}>
            <Image
              className={style.ArticleImageItem}
              height={200}
              width={600}
              src="/2.png"
              alt="图片"
            ></Image>
            <div className={style.ArticleImageMask}></div>
          </div>
          <div className={style.ArticleTitle}>
            <p style={{ fontSize: '14px' }}>分类</p>
            <p className={style.ArticleTitleBiaoti} style={{ fontSize: '20px', fontWeight: '700', }}>标题</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>标签</p>
              <p>时间</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}


