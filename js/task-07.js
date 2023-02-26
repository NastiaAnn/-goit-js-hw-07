const fontSizeControlSlider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControlSlider.addEventListener('input', handleFontSizeSliderChanges);

function handleFontSizeSliderChanges(event) {
  text.style.fontSize = event.target.value + `px`;
}
