import steak from '../../assets/steak2.jpg'

const DetailBanner = () => {
    return (
        <div 
            style={{
                background: `linear-gradient(
                    190deg,
                    rgba(0, 0, 0, 0.8),
                    rgba(0, 0, 0, 0.8)),
                    url(${steak})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "300px"
            }}
        >
            <div
                style={{
                    textAlign: "center"
                }}
            >
                <h3
                    style={{
                        color: "orange",
                        fontSize: "42px",
                        margin: "auto",
                        padding: "120px 0px 0px 0px"
                    }}
                >RoseMary Steak
                </h3>
            </div>
        </div>
    )
}

export default DetailBanner;