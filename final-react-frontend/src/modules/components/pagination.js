import { useEffect } from "react"

const Pagination = props => {

    const {
        currentPage,
        pageChange,
        numberOfItems,
        showNumbers
    } = props

    const totalPage = Math.ceil(numberOfItems / showNumbers)
    const pagesList = (totalPage) => {
        let content = []
        for (let i = 0; i < totalPage; i++)
            content.push(<button key={i} className="pagination" onClick={(e) => onClickHandler(e, i)}>{i + 1}</button>)
        return content
    }
    useEffect(() => {

    }, [currentPage])
    function onClickHandler(event, page) {
        pageChange(page)
        console.log(event.target)
    }
    if (numberOfItems <= showNumbers) {
        return <></>
    }
    return (
        <div>
            <button onClick={() => console.log(totalPage - 1, currentPage)} hidden>
                test
            </button>
            <div className="pagin-wrap">
                <button onClick={() => pageChange(currentPage - 1)} disabled={currentPage <= 0} className="pagination">
                    Prev
                </button>
                {pagesList(totalPage)}
                <button onClick={() => pageChange(currentPage + 1)} disabled={currentPage >= totalPage - 1} className="pagination">
                    Next
                </button>
            </div>

        </div>
    )
}

export default Pagination 