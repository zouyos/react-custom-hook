import { saveAs } from "file-saver";
import "./ImageListItem.css";
import { Person } from "react-bootstrap-icons";

export function ImageListItem({ image }) {
  async function downloadImage() {
    const res = await fetch(image.download_url);
    const blob = await res.blob();
    saveAs(blob, `${image.author}_${image.id}`);
  }

  return (
    <div className="card">
      <a href={image.url}>
        <img
          src={image.download_url}
          className="img"
          alt={`Author :  ${image.author}`}
        />
      </a>
      <div className="card_banner">
        <Person className="card_thumb" />
        <div className="card_text">
          <h3 className="card_title">{image.author}</h3>
          <div className="card_status">
            Original size: {image.width} x {image.height}
          </div>
          <button className="btn btn-secondary mt-2" onClick={downloadImage}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
