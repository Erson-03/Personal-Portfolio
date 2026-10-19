document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form-container');
  const fileInput = document.querySelector('input[type="file"]');
  const fileName = document.getElementById('fileName');
  const formMessage = document.getElementById('formMessage');

  if (fileInput && fileName) {
    fileInput.addEventListener('change', function () {
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
      if (formMessage) formMessage.textContent = 'Registration submitted successfully.';
    });

    form.addEventListener('reset', function () {
      setTimeout(function () {
        if (formMessage) formMessage.textContent = '';
        if (fileName) fileName.textContent = '';
      }, 0);
    });
  }
});
