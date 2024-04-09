'use client'
import style from './navbar.module.scss'
import { useImmer } from 'use-immer'
import Tooltip from 'antd/es/tooltip'
import { useEffect, useRef, useState } from 'react'
import Drawer from 'antd/es/drawer'
import Link from 'next/link';
import { HomeOutlined } from '@ant-design/icons'
export default function NavBar() {
    const Header = useRef<any>(null);
    useEffect(() => {
        const handleIntersect = ([entry]: [any]) => {
            try {
                if (entry.intersectionRatio < 1) {
                    Header.current.classList.add(style.isPinned);
                } else {
                    Header.current.classList.remove(style.isPinned);
                }
            } catch { }
        };

        const observer = new IntersectionObserver(handleIntersect as any, {
            threshold: [1]
        });

        observer.observe(Header.current as unknown as Element);

        return () => {
            try {
                observer.unobserve(Header.current as unknown as Element);
            } catch { }
        };

    }, []);

    return (
        <header ref={Header} className={style.navBar}>
            <div className={style.navBox}>
                <Link href={'/'} className={style.navLeft}>
                    <div className={style.navLeftBox}>
                        <div>
                            xixi
                        </div>
                        <div>
                            <HomeOutlined />
                        </div>
                    </div>
                </Link>
                <div className={style.navMid}>
                    <Bars></Bars>
                </div>
                <div className={style.navRight}>
                    <Rights></Rights>
                </div>
            </div>
        </header>
    )
}

// const myBars = ['分类', '标签', '留言板', '关于我']
const myBars = [
    {
        name: '分类',
        url: '/category',
        icon: '',
    },
    // {
    //     name: '标签',
    //     url: '/tags',
    //     icon: '',
    // }, 
    {
        name: '关于我',
        url: '/about',
        icon: '',
    }
]
function Bars() {
    const [BarsBc, setBarsBc] = useImmer({
        width: `calc((90px * ${myBars.length}) + 0px)`,
        left: '0px'
    })

    const onMouseEnter = (index: number) => {
        setBarsBc(prev => {
            prev.left = `${index * 95}px`
            prev.width = `90px`
        })
    }

    const onMouseLeave = (index: number) => {
        setBarsBc(prev => {
            prev.left = '0px'
            prev.width = `calc((90px * ${myBars.length}) + 10px)`
        })
    }

    return (
        <div className={style.Bars} >
            <div style={BarsBc} className={style.BarsBc}></div>
            {myBars.map((item, index) =>
                <Link href={item.url} key={index} className={style.BarsItem} onMouseEnter={() => onMouseEnter(index)} onMouseLeave={() => onMouseLeave(index)}>{item.name}</Link>
                // <div key={index} className={style.BarsItem} onMouseEnter={() => onMouseEnter(index)} onMouseLeave={() => onMouseLeave(index)}>{item.name}</div>
            )}
        </div>
    )
}


function Rights() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Tooltip title="搜索">
                <div >
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4344" >
                        <path d="M688.565345 653.900847c0 0-11.672854 15.440667-27.297716 30.575366l179.917696 176.300308 29.860075-27.91784L688.565345 653.900847 688.565345 653.900847zM752.457514 462.786135c0 175.017082-134.816498 306.400389-301.919331 306.400389C276.296767 766.655887 149.950174 629.448946 149.950174 463.021495c0-160.758334 135.995347-296.318776 300.588009-296.318776C617.641015 166.70272 752.457514 304.025295 752.457514 462.786135L752.457514 462.786135zM449.439152 206.867488c-143.231145 0-259.32421 116.181069-259.32421 261.075087 0 144.898111 116.093065 261.882476 259.32421 261.882476 143.250588 0 262.8495-116.984365 262.8495-261.882476C712.288652 323.048557 592.68974 206.867488 449.439152 206.867488L449.439152 206.867488zM449.439152 206.867488" fill="#2c2c2c" p-id="4345"></path>
                    </svg>
                </div>
            </Tooltip>
            <Tooltip title="随机前往一个文章">
                <div >
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13958" >
                        <path d="M500.6 599.8c19.7 24.5 41.5 47.7 67.1 67.9 56.4 44.5 122.9 67.1 203.1 69.1L744 763.5c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5s18.4-3.5 25.5-10.5l84-84c7.4-7.4 10.9-17.2 10.5-26.9 2.9-11.8-0.3-24.8-9.5-34l-84-84c-14.1-14.1-36.9-14.1-50.9 0s-14.1 36.9 0 50.9l28.4 28.4c-117.4-2.6-177.1-56.5-230-127.1-7.2 10.2-14.4 20.8-21.9 31.6-6.9 10.2-13.9 20.3-21 30.5zM382.8 339.6C323.4 292.8 252.6 270 166.5 270c-19.9 0-36 16.1-36 36s16.1 36 36 36c145.4 0 205.2 75 267.8 165.5 14.2-20.7 28.7-41.8 44.3-62.2-27.2-38.1-57.2-75.3-95.8-105.7z" p-id="13959" fill="#2c2c2c"></path><path d="M891.5 338.4c0.4-9.7-3.1-19.5-10.5-26.9l-84-84c-14.1-14.1-36.9-14.1-50.9 0-14.1 14.1-14.1 36.9 0 50.9l26.7 26.7c-80.2 2-146.7 24.7-203.1 69.1-51.1 40.3-87.1 92.7-121.8 143.4C380.7 615.5 322.8 700 168.5 700c-19.9 0-36 16.1-36 36s16.1 36 36 36c86.1 0 156.9-22.8 216.3-69.6 51.4-40.5 87.5-93.1 122.4-144 65.5-95.4 122.2-178.1 268.2-181.3L747 405.5c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5s18.4-3.5 25.5-10.5l84-84c9.2-9.2 12.4-22.2 9.5-34z" p-id="13960" fill="#2c2c2c"></path>
                    </svg>
                </div>
            </Tooltip>
            <div className={style.Mulu} onClick={showDrawer}>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18767">
                    <path d="M63.304665 213.895127c0-27.534045 11.950146-32.459208 39.292833-32.459207h818.801934c27.35292 0 39.29181 4.732782 39.29181 32.459207 0 27.534045-11.950146 32.459208-39.29181 32.459208H102.598521c-27.35292 0-39.293856-4.732782-39.293856-32.459208m0 299.130224c0-27.534045 9.903538-31.435904 37.246224-31.435904h820.848543c27.35292 0 39.29181 3.708454 39.29181 31.435904 0 27.534045-11.950146 31.43488-39.29181 31.43488H100.551913c-27.35292-0.001023-37.247248-3.709478-37.247248-31.43488m0 299.1292c0-27.534045 9.903538-31.436927 37.246224-31.436927h820.848543c27.35292 0 39.29181 3.709478 39.29181 31.436927 0 27.533022-11.950146 30.412599-39.29181 30.412599H100.551913c-27.35292-0.001023-37.247248-2.687197-37.247248-30.412599" fill="#2c2c2c" p-id="18768"></path>
                </svg>
            </div>
            <Drawer open={open} width={300} closable={false} onClose={onClose}>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}