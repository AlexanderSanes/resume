// if(window.ResizeObserver) {
	// const h1Elem = document.querySelector('h3');
	// const pElem = document.querySelector('p');
	// const divElem = document.querySelector('body > div');
	// const slider = document.querySelector('input[type="range"]');
	// const checkbox = document.querySelector('input[type="checkbox"]');

	// divElem.style.width = '600px';

	// slider.addEventListener('input', () => {
	//   divElem.style.width = slider.value + 'px';
	// })

	// const resizeObserver = new ResizeObserver(entries => {
	//   for (let entry of entries) {
	// 	if(entry.contentBoxSize) {
	// 	  // The standard makes contentBoxSize an array...
	// 	  if (entry.contentBoxSize[0]) {
	// 		h1Elem.style.fontSize = Math.max(1.5, entry.contentBoxSize[0].inlineSize/200) + 'rem';
	// 		pElem.style.fontSize = Math.max(1, entry.contentBoxSize[0].inlineSize/600) + 'rem';
	// 	  } else {
	// 		// ...but old versions of Firefox treat it as a single item
	// 		h1Elem.style.fontSize = Math.max(1.5, entry.contentBoxSize.inlineSize/200) + 'rem';
	// 		pElem.style.fontSize = Math.max(1, entry.contentBoxSize.inlineSize/600) + 'rem';
	// 	  }

	// 	} else {
	// 	  h1Elem.style.fontSize = Math.max(1.5, entry.contentRect.width/200) + 'rem';
	// 	  pElem.style.fontSize = Math.max(1, entry.contentRect.width/600) + 'rem';
	// 	}
	//   }
	//   console.log('Size changed');
	// });

	// resizeObserver.observe(divElem);

	// checkbox.addEventListener('change', () => {
	//   if(checkbox.checked) {
	// 	resizeObserver.observe(divElem);
	//   } else {
	// 	resizeObserver.unobserve(divElem);
	//   }
	// });
//   } else {
// 	console.log('Resize observer not supported!');
//   }