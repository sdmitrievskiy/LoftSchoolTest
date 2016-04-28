// import svg4everybody from 'svg4everybody';
 import $ from 'jquery';


$(document).ready(function () {

	let courseCount = 6;
	// курсов у нас много, поэтому нужно дополнительно реализовать
	// поведение label
	// реализуем поведение только в одну строну, ТЗ не требует обратного

	$('.course__checkbox-label').click(function () {
		const course = $(this).parent('.form').parent('.course');

		course.addClass('course_checked');

		setTimeout(function () {
			course.fadeOut();
			courseCount -= 1;
			console.log(courseCount);
			if ( courseCount === 0 ) {

				const section = course.closest('.section');

				section.children('.section__headline').remove();
				section.closest('.section').children('.section__subtext').remove();

				section.addClass('section_complete');
				section.height( section.offset().top );
				$('.courses').html('<p class=\'complete\'>Задание выполнено</p>');
				$('.complete').fadeIn('slow');

				console.log( section.offset() );

			}

		}, 1000);


	});


});
