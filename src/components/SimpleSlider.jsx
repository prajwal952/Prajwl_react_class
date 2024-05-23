
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {

    src:"https://img.freepik.com/premium-psd/paper-bags-with-sale-text-yellow-background_23-2148321120.jpg?size=626&ext=jpg&ga=GA1.1.715710299.1709811201&semt=ais",
    // src: 'data:image/jpeg;base64,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',
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    key: 1,
  },
  {
    // src: 'https://picsum.photos/id/456/1200/400',

    src:'https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg',
    
    // altText: 'Slide 2',
    // caption: 'Slide 2',
    key: 2,
  },
  {
    
    src: 'https://img.freepik.com/free-vector/e-commerce-illustration_1168-341.jpg?size=626&ext=jpg&ga=GA1.1.715710299.1709811201&semt=ais',
    // altText: 'Slide 3',
    // caption: 'Slide 3',
    key: 3,
  },
];

function SimpleSlider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
        
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
         src={item.src}
          alt={item.altText} 
          style={{ width: '100%', height: '475px' }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
<div className='container'>

    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
           className="custom-tag" 
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
            className="custom-tag" 
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
            className="custom-tag" 
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>


    </div>
  );
}

export default SimpleSlider;




