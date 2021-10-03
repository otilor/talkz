function DisplaySpecificNews(location) {
    alert(location.state)
    return (
        <div className="news-container">
            {/* <h1>{location.state.fromFeed}</h1> */}
            {/* <script>alert(location.state)</script> */}
        </div>
    );
}


export default DisplaySpecificNews;