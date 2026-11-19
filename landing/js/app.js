const decodeRoot = document.querySelector('[data-decode]');

if (decodeRoot) {
  const letters = decodeRoot.querySelectorAll('.decode__letter');
  const placeholder = decodeRoot.querySelector('[data-decode-placeholder]');
  const result = decodeRoot.querySelector('[data-decode-result]');
  const fields = {
    letter: decodeRoot.querySelector('[data-decode-letter]'),
    en: decodeRoot.querySelector('[data-decode-en]'),
    ru: decodeRoot.querySelector('[data-decode-ru]'),
    desc: decodeRoot.querySelector('[data-decode-desc]'),
  };

  decodeRoot.addEventListener('click', (event) => {
    const button = event.target.closest('.decode__letter');
    if (!button) {
      return;
    }

    const wasActive = button.getAttribute('aria-pressed') === 'true';
    letters.forEach((item) => item.setAttribute('aria-pressed', 'false'));

    if (wasActive) {
      placeholder.hidden = false;
      result.hidden = true;
      return;
    }

    button.setAttribute('aria-pressed', 'true');
    fields.letter.textContent = button.dataset.letter;
    fields.en.textContent = button.dataset.en;
    fields.ru.textContent = button.dataset.ru;
    fields.desc.textContent = button.dataset.desc;
    placeholder.hidden = true;
    result.hidden = false;
  });
}
