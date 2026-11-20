(() => {
  const form = document.querySelector('#capacity-form');
  if (!form) return;
  const result = document.querySelector('#capacity-result');
  const {volume, before, after, cost, currency} = form.elements;
  const format = new Intl.NumberFormat(undefined, {maximumFractionDigits: 2});
  const magnitude = value => value > 0 && value < 0.01 ? 'under 0.01' : format.format(value);
  function update() {
    if ([volume, before, after].some(input => !input.value || !input.validity.valid)) {
      result.textContent = 'Enter a whole number of cases and both handling times. Use zero or a positive number.';
      return;
    }
    if (!cost.validity.valid) {
      result.textContent = 'Enter a monthly cost of zero or more, or leave it blank.';
      return;
    }
    const count = volume.valueAsNumber;
    const hours = count * (before.valueAsNumber - after.valueAsNumber) / 60;
    const each = cost.value && count ? cost.valueAsNumber / count : null;
    if (!Number.isFinite(hours) || (each !== null && !Number.isFinite(each))) {
      result.textContent = 'These figures are too large to calculate. Check the figures and try again.';
      return;
    }
    let message = count === 0 ? 'No eligible cases this month.' : hours === 0 ? 'No change in staff hours.' :
      hours > 0 ? magnitude(hours) + ' staff hours released per month.' : magnitude(-hours) + ' additional staff hours needed per month.';
    if (each !== null) message += ' Operating cost per eligible case: ' + currency.value + ' ' + magnitude(each) + '.';
    result.textContent = message;
  }
  form.addEventListener('input', update);
  form.addEventListener('change', update);
  form.addEventListener('submit', event => {event.preventDefault(); update();});
})();
