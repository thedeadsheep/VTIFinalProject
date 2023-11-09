import { useEffect, useState } from "react"
import styles from "./loading.module.css"

export default function LoadingComponent() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 20000)
    }, [])

    if (loading === false) {
        return (
            <></>
        )
    }


    return (
        <div className={styles.backgroud} >
            <div className={styles.ldsEllipsis} >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}