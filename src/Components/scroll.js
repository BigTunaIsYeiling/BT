import gsap, { Power4 } from "gsap";
import React from "react";

export default class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight,
  };

  ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      this.setState({
        height: crx.height,
      });
    }
  });

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.ro.observe(this.viewport);
  }

  onScroll = () => {
    gsap.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: Power4.easeOut,
    });
  };
  render() {
    return (
      <>
        <div
          className="viewport"
          ref={(ref) => (this.viewport = ref)}
          style={{ right: 0, left: 0 }}
        >
          {this.props.children}
        </div>
        <div
          ref={(ref) => (this.fake = ref)}
          style={{
            height: this.state.height,
          }}
        />
      </>
    );
  }
}
