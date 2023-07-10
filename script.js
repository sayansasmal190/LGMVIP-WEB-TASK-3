
    const form = document.getElementById('admissionForm');
    const formData = document.getElementById('formData');
    const firstNameSpan = document.getElementById('firstName');
    const lastNameSpan = document.getElementById('lastName');
    const emailSpan = document.getElementById('email');
    const phoneNumberSpan = document.getElementById('phoneNumber');
    const programSpan = document.getElementById('program');
    const addressSpan = document.getElementById('address');
    const profilePhotoDiv = document.getElementById('profilePhoto');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const firstName = form.firstName.value;
      const lastName = form.lastName.value;
      const email = form.email.value;
      const phoneNumber = form.phoneNumber.value;
      const program = form.program.value;
      const address = form.address.value;
      const profilePhoto = form.profilePhoto.files[0];

      firstNameSpan.textContent = firstName;
      lastNameSpan.textContent = lastName;
      emailSpan.textContent = email;
      phoneNumberSpan.textContent = phoneNumber;
      programSpan.textContent = program;
      addressSpan.textContent = address;

      if (profilePhoto) {
        const reader = new FileReader();
        reader.onload = function() {
          const image = document.createElement('img');
          image.src = reader.result;
          profilePhotoDiv.innerHTML = '';
          profilePhotoDiv.appendChild(image);
        };
        reader.readAsDataURL(profilePhoto);
      }

      form.reset();
      formData.style.display = 'block';
    });