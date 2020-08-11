
const myFunc=(function() {
    

    var form              = document.getElementById('form');
    var name              = document.getElementById('name');
    var email             = document.getElementById('email');
    var phone             = document.getElementById('phone');
    var organization      = document.getElementById('organization');
    var message           = document.getElementById('message');
    var head              = document.getElementById('head');
   

   


            var elem           = document.createElement('div');
            elem.id            = 'notify';
            elem.style.display = 'none';

            form.insertBefore(elem,head);

    //NAME
    name.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            name.className    = 'invalid animated shake';
            elem.textContent   = 'Name should only contain alphabets';
            elem.className     = 'error';
            elem.style.display = 'block';
        }
    });

    name.addEventListener('name', function(event){
        if ( 'block' === elem.style.display ) {
            name.className = '';
            elem.style.display = 'none';
        }
    });




      //E-MAIL
      email.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            email.className    = 'invalid animated shake';
            elem.textContent   = 'Invalid E-Mail Format';
            elem.className     = 'error';
            elem.style.display = 'block';
        }
    });

    email.addEventListener('email', function(event){
        if ( 'block' === elem.style.display ) {
            email.className = '';
            elem.style.display = 'none';
        }
    });

    //Phone Number
      phone.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            phone.className    = 'invalid animated shake';
            elem.textContent   = 'Invalid Phone Number';
            elem.className     = 'error';
            elem.style.display = 'block';
        }
    });

    phone.addEventListener('phone', function(event){
        if ( 'block' === elem.style.display ) {
            phone.className = '';
            elem.style.display = 'none';
        }
    });

     //organization
      organization.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            organization.className    = 'invalid animated shake';
            elem.textContent   = 'Invalid Organization';
            elem.className     = 'error';
            elem.style.display = 'block';
        }
    });

    organization.addEventListener('organization', function(event){
        if ( 'block' === elem.style.display ) {
            organization.className = '';
            elem.style.display = 'none';
        }
    });
     //message
      message.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            message.className  = 'invalid animated shake';
            elem.textContent   = 'Please fill all the details!';
            elem.className     = 'error';
            elem.style.display = 'block';
        }
    });

    message.addEventListener('message', function(event){
        if ( 'block' === elem.style.display ) {
            message.className = '';
            elem.style.display = 'none';
        }
    });


})();


