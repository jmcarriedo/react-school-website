import React from "react";
import Masonry from 'react-masonry-component';
import "./assets/css/Photos.css"
import { Container } from "./LandingElements";

const photos = [
  {
    imageUrl:
      "https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3980609/pexels-photo-3980609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8612914/pexels-photo-8612914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8613324/pexels-photo-8613324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/6941442/pexels-photo-6941442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3913426/pexels-photo-3913426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3933033/pexels-photo-3933033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3661387/pexels-photo-3661387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3661264/pexels-photo-3661264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8612988/pexels-photo-8612988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  
  {
    imageUrl:
      "https://images.pexels.com/photos/8613174/pexels-photo-8613174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];


const masonryOptions = {
  fitWidth: true,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};

const Photos= () => {
  return (
    <div>
      <Container>
        <Masonry
          className={"photo-list"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          className="d-flex justify-content-center align-items-center m-auto"
          style={{marginLeft:'100px'}}
        >
          {photos.map((photo) => (
            <li className={`photo-item`}>
              <span className="heartbeat"><img src={photo.imageUrl} alt="" /> </span>
            </li>
          ))}
        </Masonry>
      </Container>
    </div>
  );
};

export default Photos;