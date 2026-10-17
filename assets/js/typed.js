// Typed-line effect for the hero section.
// Cycles through a set of lines, typing and deleting each one,
// to mimic someone typing live at a terminal.

(function () {
  const target = document.getElementById('typed');
  if (!target) return;

  const lines = [
    'Software Engineer.',
    'I build with AI, end to end.',
    'Founder of FlowsGrow Automation.',
    'Founder of FOETS.TECH.'
  ];

  const TYPE_SPEED = 70;
  const DELETE_SPEED = 40;
  const PAUSE_AFTER_TYPE = 1400;
  const PAUSE_AFTER_DELETE = 400;

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = lines[lineIndex];

    if (!deleting) {
      charIndex++;
      target.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
      return;
    }

    charIndex--;
    target.textContent = current.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      setTimeout(tick, PAUSE_AFTER_DELETE);
      return;
    }
    setTimeout(tick, DELETE_SPEED);
  }

  tick();
})();
