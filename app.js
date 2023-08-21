const inputs = document.querySelectorAll('.controls input');
const body = document.body; // Change this to the element you want to change the background of

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  const propertyName = `--${this.name}`;
  const propertyValue = this.value + suffix;

  document.documentElement.style.setProperty(propertyName, propertyValue);
  body.style.background = `var(${propertyName})`; // Update the background color
}

 inputs.forEach(input => input.addEventListener('change', handleUpdate));

