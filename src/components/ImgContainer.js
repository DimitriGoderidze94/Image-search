const ImgContainer = (props) => {
    const downloadImage = (src) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = src;
        img.onload = () => {
            // create Canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const a = document.createElement('a');
            a.download = props.searchText;
            a.href = canvas.toDataURL('image/png');
            a.click();
            a.remove();
        };
    }

    return (
        <div className="container">
            {props.imgLinks.map((img, index) => (
                index % 2 === 0 &&
                <div className='card' key={img}>
                    <a href={img} target="blank">
                        <img src={img} alt="" />
                    </a>
                    <br />
                    <button class="fa fa-download" id="downloadButton" onClick={() => downloadImage(img)}>download</button>
                </div>
            ))}
        </div>
    );
};

export default ImgContainer;