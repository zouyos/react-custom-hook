import { ImageListItem } from "../ImageListItem/ImageListItem";
import "./ImageList.css";

export function ImageList({ imageList }) {
  return (
    <div className="card_container">
      {imageList.map((image) => {
        return (
          <div key={image.id} className="card_item">
            <ImageListItem image={image} />
          </div>
        );
      })}
    </div>
  );
}
