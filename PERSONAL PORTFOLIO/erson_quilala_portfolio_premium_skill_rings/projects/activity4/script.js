document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('activity4Form');
  const file = document.getElementById('act4File');
  const fileName = document.getElementById('act4FileName');
  const message = document.getElementById('act4Message');

  if (file && fileName) {
    file.addEventListener('change', function () {
      fileName.textContent = this.files && this.files[0] ? this.files[0].name : '';
    });
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      message.textContent = 'Registration submitted successfully.';
    });

    form.addEventListener('reset', function () {
      setTimeout(function () {
        message.textContent = '';
        if (fileName) fileName.textContent = '';
      }, 0);
    });
  }
});
