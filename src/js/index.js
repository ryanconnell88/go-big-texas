// 3rd party packages
import '@babel/polyfill';

// local packages
import { elements } from './base';
import Animate from './Animate';

//state for app
let state = {};

//add animator and modal classes to state for later use
state.animator = new Animate();

//activates the fold animation when quote is clicked
elements.quoteWrap.addEventListener('click', () => {
  state.animator.foldAnimation();
});

