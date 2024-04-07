import React from 'react';



const getPngURL = (img) => {
  return new URL(`./images/${img}.png`, import.meta.url).href;
};

const getVideoURL = (video) => {
  return new URL(`./videos/${video}.mp4`, import.meta.url).href;
};

export { getPngURL, getVideoURL };









