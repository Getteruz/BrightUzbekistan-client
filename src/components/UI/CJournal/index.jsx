import { useRouter } from 'next/router';
import { useState } from 'react';
import { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import BookPopup from '../Popup/BookPopup';
import OrderForm from '../Popup/OrderForm';
import cls from './CJournal.module.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CJournal = forwardRef(({
    setOrder = () => {},
    order = false,
    onFlip,
    src = ''
}, ref) => {
    const [open, setOpen] = useState(false)

    const onClickOutside = () => {
        setOpen(false)
        ref?.current?.pageFlip()?.turnToPrevPage()
    }

    const onClose = () => {
        setOrder(false)
        ref?.current?.pageFlip()?.turnToPrevPage()
    }

    return (
        <div className={cls.wrapper}>
            <HTMLFlipBook 
                showCover
                width={510} 
                height={692} 
                ref={ref}
                onFlip={onFlip}
                onChangeState={(e) => {
                    const pagesInfo = e?.object?.pages
                    const currentPage = pagesInfo?.currentPageIndex
                    const pageSpread = pagesInfo?.currentSpreadIndex
                    const pageCount = ref.current?.pageFlip()?.getPageCount()
                    
                    if(currentPage + 2 === pageCount){
                        setOpen(true)
                    } else {
                        setOpen(false)
                    }
                }}
            >
                {
                    Array(13).fill(null).map((_, index) => (
                        <div key={index}>
                            <Document file={src}>
                                <Page width={500} height={692} renderMode='svg' pageNumber={index + 1} />
                            </Document>
                        </div>
                    ))
                }
            </HTMLFlipBook>
            {open && <BookPopup onClickOutside={onClickOutside} onOk={() => {setOrder(true); setOpen(false)}}  />}
            {order && <OrderForm onClose={onClose} onOk={onClose} />}
        </div>
    );
})

CJournal.displayName = 'CJournal'

export default CJournal;
