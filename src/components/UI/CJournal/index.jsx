import { useState } from 'react';
import { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import BookPopup from '../Popup/BookPopup';
import cls from './CJournal.module.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CJournal = forwardRef(({onFlip}, ref) => {
    const [open, setOpen] = useState(false)

    const onClickOutside = () => {
        setOpen(false)
        ref?.current?.pageFlip()?.turnToPrevPage()
    }

    return (
        <div className={cls.wrapper}>
            <HTMLFlipBook 
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
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={1} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={2} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={3} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={4} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={5} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={6} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={7} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={8} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={9} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={10} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={9} />
                    </Document>
                </div>
                <div>
                    <Document file="/file.pdf">
                        <Page width={500} height={692} renderMode='svg' pageNumber={10} />
                    </Document>
                </div>
            </HTMLFlipBook>
            {open && <BookPopup onClickOutside={onClickOutside} />}
        </div>
    );
})

export default CJournal;
