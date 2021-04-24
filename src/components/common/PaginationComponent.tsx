import React from 'react'

import Button from 'react-bootstrap/Button';

interface PaginationComponentProps {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
    currentPage,
    totalPages,
    onPageChange
}) => {
    const getRange = (from: number, to: number) => {
        let i = from;
        const range = [];
        while (i <= to) {
          range.push(i);
          i += 1;
        }
        return range;
    }

    const getPageList = (): JSX.Element[] => {
        let list = [];
        if(totalPages <= 5) {
            list = getRange(1, totalPages);
        } else {
            let currentPageRange = [currentPage];
            //Avoid 0 and negatives
            if (currentPage >= 3) currentPageRange = [currentPage-2,currentPage-1, ...currentPageRange];
            //Avoid pages over total pages
            if (currentPage <= totalPages-2) currentPageRange = [...currentPageRange, currentPage+1, currentPage+2];
            list = [1, 2, 3, ...currentPageRange,totalPages-2, totalPages-1, totalPages];
        }
        const pages = [...new Set(list)].map((p: number, i: number)=>{
            return  (
                    <span key={i}>
                        {p === currentPage-2 && p !== 1 && p !== 2 && p !== 3 && p!== 4 ? '...' : null}
                        <Button variant="outline-secondary" size="sm" className="ml-2" onClick={() => onPageChange(p)} disabled={currentPage===p}>
                            {p}
                        </Button>
                        {p === currentPage+2  && p!== totalPages-3 && p !== totalPages-2 && p!== totalPages-1 && p!== totalPages ? '...' : null}
                    </span>
                    )
        })
        return pages;
    }

    return (
        <div>
            <Button variant="outline-secondary" size="sm" className="ml-2" onClick={() => onPageChange(currentPage-1)} disabled={currentPage===1}>Previous</Button>
            {getPageList()}
            <Button variant="outline-secondary" size="sm" className="ml-2" onClick={() => onPageChange(currentPage+1)} disabled={currentPage===totalPages}>Next</Button>
        </div>
    );
}

export default PaginationComponent;