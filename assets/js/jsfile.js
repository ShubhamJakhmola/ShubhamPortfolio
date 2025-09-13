// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
  });

// portfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

// Contact form enhancement
$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        if (name && email && message) {
            // Create mailto link with form data
            var subject = 'Portfolio Contact from ' + name;
            var body = 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message;
            var mailtoLink = 'mailto:shubhamjakhmola008@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your default email client will open.');
            
            // Reset form
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});