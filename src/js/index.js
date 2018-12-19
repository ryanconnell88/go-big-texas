// 3rd party packages
import '@babel/polyfill';

// local packages
import { elements, elementStrings } from './base';
import Animate from './Animate';
import Modals from './Modals';

//state for app
let state = {};

//add animator and modal classes to state for later use
state.animator = new Animate();
state.modals = new Modals();

//activates the fold animation when quote is clicked
elements.quoteWrap.addEventListener('click', () => {
  state.animator.foldAnimation();
});

//activates a modal that corresponds to a particular par of the "go big texas" map
elements.texasWrap.addEventListener('click', () => {
  if (event.target.className === elementStrings.activeModal)
    state.modals.openModal(event.target.dataset.side);
});

//cancels activated modals
elements.modals.addEventListener('click', () => {
  if (event.target.className === elementStrings.cancel)
    state.modals.cancelModal();
});
