$(document).ready(function(){

	//fancybox.js init
	$('.fancybox').fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',

		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});



	//wow.js init
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 100
		}
	);
	wow.init();

	// using turn.js for the menu.html
	$("#menu_book").turn({
			width: 800,
			height: 1000,
			autoCenter: true
		});
		

	
});
					
//submit
function sendEmail() {
	const emailContent = {
		to: 'barathgovindharaj@gmail.com',
		subject: 'Form Submission',
		message: 'This is the form submission content.',
	};

	fetch('send-email.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(emailContent),
	})
	.then(response => response.json())
	.then(data => alert('Email Sent!'))
	.catch(error => console.error('Error:', error));
}