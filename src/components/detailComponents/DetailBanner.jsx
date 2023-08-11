import styles from './DetailScreen.module.css'

const DetailBanner = ({ image, title }) => {
    return (
        <div 
            className={styles.banner}
            style={{
                background: `linear-gradient(
                    190deg,
                    rgba(0, 0, 0, 0.8),
                    rgba(0, 0, 0, 0.8)),
                    url(${image})`,
                backgroundPosition: "center center"
            }}
        >
            <div
                style={{
                    textAlign: "center"
                }}
            >
                <h1
                    style={{
                        color: "orange",
                        fontSize: "42px",
                        margin: "auto",
                        padding: "120px 0px 0px 0px"
                    }}
                >{title}
                </h1>
            </div>
        </div>
    )
}

export default DetailBanner;