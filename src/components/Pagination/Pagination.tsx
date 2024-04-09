'use client'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import style from './style.module.scss'
import { useEffect, useState } from 'react';

type changePageNumType = 'PREV' | 'NEXT' | number
export default function Pagination() {
    const PageLength = 10;
    const [PageNum, setPageName] = useState(1)
    const [PaginationList, setPaginationList] = useState<any[]>([])
    useEffect(() => {
        changePaginationList(1)
    }, [])

    const changePageNum = (name: changePageNumType) => {
        if (name == 'PREV' && PageNum > 1) {
            setPageName(PageNum - 1)
            changePaginationList(PageNum - 1)
        } else if (name == 'NEXT' && PageNum < PageLength) {
            setPageName(PageNum + 1)
            changePaginationList(PageNum + 1)
        } else {
            setPageName(name as number)
            changePaginationList(name as number)
        }
    }

    const changePaginationList = (val: number) => {
        if (PageLength < 6) {
            setPaginationList([1, 2, 3, 4, 5]);
        } else {
            if (val < 3) {
                setPaginationList([1, 2, 3, '...', PageLength]);
            } else if (val >= 3 && val <= PageLength - 3) {
                setPaginationList([1, '...', val - 1, val, val + 1, '...', PageLength]);
            } else {
                setPaginationList([1, '...', PageLength - 2, PageLength - 1, PageLength]);
            }
        }
    }
    return (
        <div className={style.Pagination}>
            {PageNum <= 1 ? <div></div> : <div className={style.PrevPage} onClick={() => changePageNum('PREV')}>
                <div className={style.icon}><LeftOutlined /></div>
                <div className={style.name}>上页</div>
            </div>}
            <div className={style.PaginationList}>
                {PaginationList.map((item, index) =>
                    <div onClick={() => {
                        if (item == '...') return
                        changePageNum(item)
                    }} className={item == PageNum ? `${style.item} ${style.active}` : style.item} key={index}>{item}</div>
                )}
            </div>
            {PageNum >= PageLength ? <div></div> : <div className={style.NextPage} style={{ opacity: PageNum == PageLength ? 0 : 1 }} onClick={() => changePageNum('NEXT')}>
                <div className={style.name}>下页</div>
                <div className={style.icon}><RightOutlined /></div>
            </div>}

        </div>
    )
}