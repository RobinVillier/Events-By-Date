const buttons = document.querySelectorAll('button[name="action"]');

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    buttons.forEach(b => {
      b.classList.remove('btn-success');
      b.classList.add('btn-primary');
    });

    this.classList.remove('btn-primary');
    this.classList.add('btn-success');
  });
});
