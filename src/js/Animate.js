//3rd party packages
import { styler, keyframes, tween } from 'popmotion';

//local packages
import { elements, elementStrings } from './base';

//Class for folding animation
export default class Animate {
  //method for segment of animation that hides the beginning quote
  hideQuote() {
    const divStyler = styler(elements.quoteWrap);
    elements.quoteWrap.style.pointerEvents = 'none';
    tween({
      from: {
        z: 0,
        opacity: 1
      },
      to: {
        z: 100,
        opacity: 0
      },
      duration: 800
    }).start(divStyler.set);
  }

  //method for segment of animation that reveals the center of texas
  showCenter() {
    return new Promise(resolve => {
      setTimeout(function() {
        elements.texasWrap.classList.remove(elementStrings.inactive);
        elements.centerFold.classList.add(elementStrings.active);
        const divStyler = styler(elements.centerFold);

        keyframes({
          values: [
            {
              x: 0,
              y: 0,
              opacity: 0.1
            },
            {
              x: 0,
              y: 0,
              opacity: 1
            }
          ],
          duration: 1000
        }).start(divStyler.set);
        resolve();
      }, 1000);
    });
  }

  //method for segment of animation that moves the center of texas down and to the right
  moveCenter() {
    return new Promise(resolve => {
      setTimeout(function() {
        const divStyler = styler(elements.texasWrap);

        keyframes({
          values: [
            {
              x: 0,
              y: 0
            },
            {
              x: 0,
              y: 40
            },
            {
              x: 30,
              y: 40
            }
          ],
          duration: 1200
        }).start(divStyler.set);
        resolve();
      }, 1000);
    });
  }

  // the next 5 methods are segments of the animation
  // that reveal and fold out the rest of the parts of texas
  leftFolder() {
    return new Promise(resolve => {
      setTimeout(function() {
        elements.leftFold.classList.add(elementStrings.active);

        const divStyler = styler(elements.leftFold);

        keyframes({
          values: [
            {
              x: 0,
              y: 0,
              rotateY: -180,
              rotateX: 0,
              originY: 0,
              originX: 100,
              opacity: 0
            },

            {
              x: 0,
              y: 0,
              rotateY: 0,
              rotateX: 0,
              originY: 100,
              originX: 100,
              opacity: 1
            }
          ],
          duration: 3000
        }).start(divStyler.set);
        resolve();
      }, 500);
    });
  }

  rightFolder() {
    return new Promise(resolve => {
      setTimeout(function() {
        elements.rightFold.classList.add(elementStrings.active);
        const divStyler = styler(elements.rightFold);

        keyframes({
          values: [
            {
              x: 0,
              y: 0,
              rotateY: 180,
              rotateX: 0,
              originY: '100%',
              originX: '0%',
              opacity: 0.1
            },
            {
              x: 0,
              y: 0,
              rotateY: 0,
              rotateX: 0,
              originY: '0%',
              originX: '0%',
              opacity: 1
            }
          ],
          duration: 1000
        }).start(divStyler.set);
        resolve();
      }, 300);
    });
  }

  bottomFolder() {
    return new Promise(resolve => {
      setTimeout(function() {
        elements.bottomFold.classList.add(elementStrings.active);
        const divStyler = styler(elements.bottomFold);

        keyframes({
          values: [
            {
              x: 0,
              y: 0,
              rotateY: 0,
              rotateX: 180,
              originY: '0%',
              originX: '-100%',
              opacity: 0.1
            },
            {
              x: 0,
              y: 0,
              rotateY: 0,
              rotateX: 0,
              originY: '0%',
              originX: '0%',
              opacity: 1
            }
          ],
          duration: 1000
        }).start(divStyler.set);
        resolve();
      }, 900);
    });
  }

  farLeftFold() {
    return new Promise(resolve => {
      setTimeout(function() {
        elements.farLeftFold.classList.add(elementStrings.active);
        const divStyler = styler(elements.farLeftFold);

        keyframes({
          values: [
            {
              x: 0,
              y: 0,
              rotateY: -180,
              rotateX: 0,
              originY: 0,
              originX: 100,
              opacity: 0
            },

            {
              x: 0,
              y: 0,
              rotateY: 0,
              rotateX: 0,
              originY: 100,
              originX: 100,
              opacity: 1
            }
          ],
          duration: 1000
        }).start(divStyler.set);
        resolve();
      }, 700);
    });
  }

  topFolder() {
    return new Promise(resolve => {
      setTimeout(function() {
        elements.topFold.classList.add(elementStrings.active);
        elements.topRightFold.classList.add(elementStrings.active);
        elements.topLeftFold.classList.add(elementStrings.active);

        const divStylers = [
          styler(elements.topFold),
          styler(elements.topRightFold),
          styler(elements.topLeftFold)
        ];

        divStylers.forEach(divStyler => {
          keyframes({
            values: [
              {
                x: 0,
                y: 0,
                rotateY: 0,
                rotateX: -180,
                originY: 100,
                originX: 0,
                opacity: 0
              },
              {
                x: 0,
                y: 0,
                rotateY: 0,
                rotateX: 0,
                originY: 100,
                originX: 100,
                opacity: 1
              }
            ],
            duration: 1000
          }).start(divStyler.set);
        });
        resolve();
      }, 1100);
    });
  }

  //method for segment of animation that reveals navigation and social links
  showNav() {
    return new Promise(resolve => {
      setTimeout(function() {
        elements.sideNav.classList.remove(elementStrings.inactive);
        elements.socialLinks.classList.remove(elementStrings.inactive);
        elements.govSig.classList.remove(elementStrings.inactive);
        elements.govStamp.classList.remove(elementStrings.inactive);
        elements.copyrights.classList.remove(elementStrings.inactive);
        const divStylers = [
          styler(elements.sideNav),
          styler(elements.socialLinks),
          styler(elements.govSig),
          styler(elements.govStamp),
          styler(elements.copyrights)
        ];
        divStylers.forEach(divStyler => {
          keyframes({
            values: [
              {
                opacity: 0.1
              },
              {
                opacity: 1
              }
            ],
            duration: 1500
          }).start(divStyler.set);
        });
        resolve();
      }, 1000);
    });
  }

  //method that allows folds to be hovered over and clicked after animation is complete
  hoverFold() {
    return new Promise(resolve => {
      setTimeout(function() {
        elements.centerFold.classList.add(elementStrings.hover);
        elements.leftFold.classList.add(elementStrings.hover);
        elements.rightFold.classList.add(elementStrings.hover);
        elements.topFold.classList.add(elementStrings.hover);
        elements.topLeftFold.classList.add(elementStrings.hover);
        elements.topRightFold.classList.add(elementStrings.hover);
        elements.farLeftFold.classList.add(elementStrings.hover);
        elements.topFold.classList.add(elementStrings.hover);
        elements.bottomFold.classList.add(elementStrings.hover);
        resolve();
      }, 10);
    });
  }

  //method that merges all of the segments of the animation asynchronously
  async foldAnimation() {
    this.hideQuote();
    await this.showCenter();
    await this.moveCenter();
    await this.leftFolder();
    await this.rightFolder();
    await this.bottomFolder();
    await this.farLeftFold();
    await this.topFolder();
    await this.showNav();
    await this.hoverFold();
  }
}
