//elements from DOM
export const elements = {
  centerFold: document.getElementById('center-fold'),
  leftFold: document.getElementById('left-fold'),
  rightFold: document.getElementById('right-fold'),
  topFold: document.getElementById('top-fold'),
  topRightFold: document.getElementById('top-right-fold'),
  topLeftFold: document.getElementById('top-left-fold'),
  bottomFold: document.getElementById('bottom-fold'),
  farLeftFold: document.getElementById('far-left-fold'),
  quoteWrap: document.getElementById('quote-wrap'),
  texasWrap: document.getElementById('texas-wrap'),
  socialLinks: document.getElementById('social-links'),
  sideNav: document.getElementById('side-nav'),
  govStamp: document.getElementById('gov-stamp'),
  govSig: document.getElementById('gov-sig'),
  copyrights: document.getElementById('copyrights'),
  modals: document.getElementById('modals'),
  openModalButton: document.querySelector('.open-modal'),
  cancelModalButton: document.querySelector('.modal-cancel')
};

//strings of class names and id's (and concatenation of ids)
export const elementStrings = {
  active: 'active',
  inactive: 'inactive',
  hover: 'hover-modal',
  reverse: 'reverse',
  left: '#left-',
  right: '#right-',
  center: '#center-',
  top: '#top-',
  bottom: '#bottom-',
  topRight: '#top-right-',
  topLeft: '#top-left-',
  farLeft: '#far-left-',
  activeModal: 'open-modal active hover-modal',
  cancel: 'modal-cancel',
  modal: 'modal',
  modalShade: 'modal-shade',
  modalContainer: 'modal-container',
  section: 'section'
};
