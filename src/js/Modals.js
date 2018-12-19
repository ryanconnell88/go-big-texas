import { timeline, easing, styler } from 'popmotion';
import { elementStrings } from './base';

//Class for modals
export default class Modals {
  //set specifiers as empty strings
  constructor() {
    this.modalShade = '';
    this.modalContainer = '';
    this.modal = '';
    this.modalSections = '';
    this.sectionLabels = '';
  }

  //method for setting a particular modal to view based on which fold was clicked
  setElements(side) {
    this.modalShade = styler(
      document.querySelector(side + elementStrings.modalShade)
    );
    this.modalContainer = styler(
      document.querySelector(side + elementStrings.modalContainer)
    );
    this.modal = styler(document.querySelector(side + elementStrings.modal));
    this.modalSections = Array.from(
      document.querySelector(side + elementStrings.modal).children
    ).map(styler);
    this.sectionLabels = Array.from(
      document.querySelector(side + elementStrings.modal).children
    )
      .map(styler)
      .map((s, i) => elementStrings.section + i);
  }

  //method for setting proper animation for the particular fold that was clicked
  tweenUp(track, side) {
    console.log(side);
    switch (side) {
      case elementStrings.left:
        return {
          track,
          duration: 700,
          from: { x: -100, y: 55, width: 10, height: 10 },
          to: { x: 0, y: 0, width: 400, height: 500 },
          ease: {
            x: easing.easeIn,
            y: easing.easeIn,
            width: easing.linear,
            height: easing.linear,
            opacity: easing.linear
          }
        };
      case elementStrings.right:
        return {
          track,
          duration: 700,
          from: { x: 130, y: 90, width: 10, height: 10 },
          to: { x: 0, y: 0, width: 300, height: 500 },
          ease: {
            x: easing.easeIn,
            y: easing.easeIn,
            width: easing.linear,
            height: easing.linear,
            opacity: easing.linear
          }
        };
      case elementStrings.farLeft:
        return {
          track,
          duration: 700,
          from: { x: -220, y: 50, width: 10, height: 10 },
          to: { x: 0, y: 0, width: 500, height: 500 },
          ease: {
            x: easing.easeIn,
            y: easing.easeIn,
            width: easing.linear,
            height: easing.linear,
            opacity: easing.linear
          }
        };
      case elementStrings.topLeft:
        return {
          track,
          duration: 700,
          from: { x: -110, y: -140, width: 0, height: 10 },
          to: { x: 0, y: 0, width: 200, height: 500 },
          ease: {
            x: easing.easeIn,
            y: easing.easeIn,
            width: easing.linear,
            height: easing.linear,
            opacity: easing.linear
          }
        };
      case elementStrings.topRight:
        return {
          track,
          duration: 700,
          from: { x: 120, y: -50, width: 10, height: 10 },
          to: { x: 0, y: -100, width: 600, height: 300 },
          ease: {
            x: easing.easeIn,
            y: easing.easeIn,
            width: easing.linear,
            height: easing.linear,
            opacity: easing.linear
          }
        };
      case elementStrings.center:
        return {
          track,
          duration: 700,
          from: { x: 0, y: 50, width: 50, height: 50 },
          to: { x: 0, y: 0, width: 200, height: 200 },
          ease: {
            x: easing.easeIn,
            y: easing.easeIn,
            width: easing.linear,
            height: easing.linear,
            opacity: easing.linear
          }
        };
      case elementStrings.bottom:
        return {
          track,
          duration: 700,
          from: { x: 0, y: 140, width: 10, height: 10 },
          to: { x: 0, y: 0, width: 300, height: 350 },
          ease: {
            x: easing.easeIn,
            y: easing.easeIn,
            width: easing.linear,
            opacity: easing.linear
          }
        };
      case elementStrings.top:
        return {
          track,
          duration: 700,
          from: { x: 0, y: -100, width: 10, height: 10 },
          to: { x: 0, y: 0, width: 300, height: 300 },
          ease: {
            x: easing.easeIn,
            y: easing.easeIn,
            width: easing.linear,
            height: easing.linear,
            opacity: easing.linear
          }
        };

      default:
        return {};
    }
  }

  //method for moving content of modal into position after modal animation is finished
  textTween(track) {
    return {
      track,
      duration: 600,
      from: { fontSize: 0 },
      to: { fontSize: 12 },
      ease: {
        x: easing.easeIn,
        y: easing.easeIn,
        width: easing.linear,
        opacity: easing.linear
      }
    };
  }

  //method for splitting content of modal into sections that can be animated by textTween
  setStylers(v) {
    if (v.shade !== undefined) this.modalShade.set('opacity', v.shade);
    if (v.modal !== undefined) this.modal.set(v.modal);
    this.sectionLabels.forEach((label, i) => {
      if (v[label] !== undefined) this.modalSections[i].set(v[label]);
    });
  }

  //method for showing the shade and container of a modal
  showContainers() {
    this.modalShade.set('display', 'block');
    this.modalContainer.set('display', 'flex');
  }

  //method for hiding the shade and container of a modal
  hideContainers() {
    this.modalShade.set('display', 'none');
    this.modalContainer.set('display', 'none');
  }

  //method for opening modal
  openModal(side) {
    this.setElements(side);
    this.showContainers();
    timeline([
      { track: 'shade', from: 0, to: 1, ease: easing.linear },
      '-100',
      this.tweenUp(elementStrings.modal, side),
      '-200',
      [
        ...this.modalSections.map((s, i) =>
          this.textTween(this.sectionLabels[i], 300, 50)
        ),
        50
      ]
    ]).start(this.setStylers.bind(this));
  }

  //method for closing modal
  cancelModal() {
    timeline([
      {
        track: 'modal',
        duration: 200,
        from: { y: 0, opacity: 1 },
        to: { y: 100, opacity: 0 },
        ease: { y: easing.easeIn, opacity: easing.linear }
      },
      '-100',
      { track: 'shade', from: 1, to: 0, ease: easing.linear, duration: 200 }
    ]).start({
      update: this.setStylers.bind(this),
      complete: this.hideContainers.bind(this)
    });
  }
}
