$(document).ready(function() {
  /* =============== CHECK AVAILABILITY FORM VALIDATION =============== */
  $('#check-availability-form').validate({
    // Validation Rules
    rules: {
      arrival: 'required',
      departure: 'required',
      adults: 'required',
      children: 'required'
    },
    // Validation Error Messages
    messages: {
      arrival: false,
      departure: false,
      adults: false,
      children: false
    },
    // Form Submission
    submitHandler: function(form) {
      form.submit();
    }
  });

  /* =============== FOOTER NEWSLETTER FORM VALIDATION =============== */
  $('#newsletter-form').validate({
    // Validation Rules
    rules: {
      newsletterEmail: {
        required: true,
        email: true
      }
    },
    // Validation Error Messages
    messages: {
      newsletterEmail: 'Enter Valid Email'
    },
    // Form Submission
    submitHandler: function(form, e) {
      e.preventDefault();
      form.reset();
      $('#newsletter-btn')
        .attr('disabled', true)
        .removeClass('btn-dark')
        .addClass('btn-success')
        .text('Subscribed!');
      $('#newsletter-email').attr('disabled', true);
    }
  });

  /* =============== CONTACT FORM VALIDATION =============== */
  $('#contact-form').validate({
    // Validation Rules
    rules: {
      contactName: 'required',
      contactEmail: {
        required: true,
        email: true
      },
      contactSubject: 'required',
      contactMessage: 'required'
    },
    // Validation Error Messages
    messages: {
      contactName: 'Enter Name',
      contactEmail: 'Enter Valid Email',
      contactSubject: 'Enter Subject',
      contactMessage: 'Enter Message'
    },
    // Form Submission
    submitHandler: function(form, e) {
      e.preventDefault();
      form.reset();
      $('#contact-success').fadeIn(200);
      setTimeout(function() {
        $('#contact-success').fadeOut(200);
      }, 7000);
    }
  });

  /* =============== IMAGE GALLERY MODAL =============== */
  $('img').on('click', function() {
    const src = $(this).attr('src');
    const title = $(this).attr('alt');
    $('#gallery-modal img').attr('src', src);
    $('#gallery-modal p').html(title);
    $('#gallery-modal').modal('toggle');
  });
});
