import styles from './DetailScreen.module.css'

const DetailBanner = ({ image, title }) => {

    return (
        <div 
            className={styles.banner}
            style={{
                background: `linear-gradient(
                    190deg,
                    rgba(0, 0, 0, 0.8),
                    rgba(0, 0, 0, 0.2)),
                    url(${image})`,
                backgroundPosition: "center center",
                backgroundSize: "cover"
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
                    }}
                >{title}
                </h1>
            </div>
        </div>
    )
}

export default DetailBanner;