 document.getElementById('telefono').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  