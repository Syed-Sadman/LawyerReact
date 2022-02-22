import React, { useState, useEffect } from "react";
import {
  TestimonialContainer,
  SliderContainer,
  AvatarContainer,
  IntroContainer,
  IconContainer,
  ArrowBox,
} from "../components/Styles/Carousel.styles";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import { dataSet } from "../Data";
function Carousel() {
  const [active, setActive] = useState({ lActive: false, rActive: false });
  const [current, setCurrent] = useState(0);

  const length = dataSet.length;

  useEffect(() => {
    if (active.lActive) {
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if (active.rActive) {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }
  }, [active]);

  const prev = () => {
    setActive({ lActive: true, rActive: false });
  };
  const next = () => {
    setActive({ rActive: true, lActive: false });
  };
  console.log(current);
  console.log(length);

  return (
    <>
      <TestimonialContainer>
        {dataSet.map((item, index) => {
          return (
            <SliderContainer
              key={`${item}_${index}`}
              isCurrent={index === current ? true : false}
            >
              {index === current && (
                <>
                  <h3>{item.description}</h3>

                  <AvatarContainer>
                    <div>
                      <img
                        src={
                          dataSet[`${current === 0 ? length - 1 : current - 1}`]
                            .src
                        }
                      ></img>
                    </div>
                    <div>
                      <img src={item.src}></img>
                    </div>
                    <div>
                      <img
                        src={
                          dataSet[`${current === length - 1 ? 0 : current + 1}`]
                            .src
                        }
                      ></img>
                    </div>
                  </AvatarContainer>
                  <IntroContainer>
                    <h4>{item.title}</h4>
                    <p>{item.subTitle}</p>
                  </IntroContainer>
                </>
              )}
            </SliderContainer>
          );
        })}

        <IconContainer>
          <ArrowBox isActive={active.lActive}>
            <BsArrowLeft color={active.lActive && "white"} onClick={prev} />
          </ArrowBox>
          <ArrowBox isActive={active.rActive}>
            <BsArrowRight color={active.rActive && "white"} onClick={next} />
          </ArrowBox>
        </IconContainer>
      </TestimonialContainer>
    </>
  );
}

export default Carousel;
