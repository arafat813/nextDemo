import style from './RightBox.module.scss'
import Image from 'next/image';
export default function RightBox({ isPosts }: { isPosts: boolean }) {
    return (
        <div className={style.RightBox}>
            <div className={style.sitikyBox} style={{ marginTop: isPosts ? '340px' : '0px' }}>
                <Me></Me>
                {/* <WebsiteInformation></WebsiteInformation> */}
            </div>
        </div>
    )
}

/** 显示头像与信息 */
function Me() {
    return (
        <div className={style.Me}>
            <div className={style.top}>
                <div>分享与热心帮助</div>
            </div>
            <div className={style.ImgBox}>
                <Image
                    className={style.Img}
                    height={150}
                    width={150}
                    src="/2.png"
                    alt="图片"
                ></Image>
                <div className={style.title}>
                    <p>这有关于产品、设计、开发相关的问题和看法，还有文章翻译和分享。</p>
                    <br></br>
                    <p>相信你可以在这里找到对你有用的知识和教程。</p>
                </div>
            </div>
            <div className={style.bottom}>
                <p>XIXI</p>
                <p>xixixixixixxi</p>
            </div>
        </div>
    )
}

/** 网站资讯  保存网站信息 */
function WebsiteInformation() {
    return (
        <div className={style.WebsiteInformation}>11</div>
    )
}