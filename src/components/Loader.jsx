import Spinner from "react-bootstrap/Spinner";

function Loader() {
    return (
        <div className="loader-container">
            <Spinner
                animation="border"
                role="status"
                style={{
                    width: "100px",
                    height: "100px",
                    color: "#2f3c7e",
                    marginTop: "100px",
                }}
            >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loader;