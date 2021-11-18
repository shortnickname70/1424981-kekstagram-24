
(() => {
  const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  const uploadInput = document.querySelector('.img-upload__start input[type=file]'),
    previewImage = document.querySelector('.img-upload__preview img');

  const pictureUpload = () => {
    const file = uploadInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        previewImage.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  uploadInput.addEventListener('change', pictureUpload);

})();
