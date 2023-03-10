import { useState } from 'react';
import { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import BookPopup from '../Popup/BookPopup';
import cls from './CJournal.module.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CJournal = forwardRef(({ onFlip }, ref) => {
    const [open, setOpen] = useState(false)

    const onClickOutside = () => {
        setOpen(false)
        ref?.current?.pageFlip()?.turnToPrevPage()
    }

    return (
        <div className={cls.wrapper}>
            <Document file="/file.pdf">
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

                        if (currentPage + 2 === pageCount) {
                            setOpen(true)
                        } else {
                            setOpen(false)
                        }
                    }}
                >
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={1} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={2} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={3} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={4} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={5} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={6} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={7} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={8} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={11} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={12} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={9} />
                    </div>
                    <div>
                        <Page width={500} height={692} renderMode='svg' pageNumber={10} />
                    </div>
                </HTMLFlipBook>
            </Document>
            {open && <BookPopup onClickOutside={onClickOutside} />}
        </div >
    );
})

CJournal.displayName = 'CJournal'

export default CJournal;
