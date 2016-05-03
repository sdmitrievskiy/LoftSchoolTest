import $ from 'jquery';

// Немножко JS и jQuery
$(document).ready(function () {

	let courseCount = 6;

	// Так как чекбоксы стилизованы через label, то ловим нажатие на label
	$('.course__checkbox-label').click(function () {
		const course = $(this).parent('.form').parent('.course');

		course.addClass('course_checked');

		// Через секунду после нажатия на чекбос скрываем его
		// Если курсов больше не осталось, появляется надпись
		setTimeout(function () {

			course.fadeOut();
			courseCount -= 1;

			if ( courseCount === 0 ) {

				const section = course.closest('.section');

				section.children('.section__headline').remove();
				section.closest('.section').children('.section__subtext').remove();

				section.addClass('section_complete');
				section.height( section.offset().top);
				$('.courses').html('<p class=\'complete\'>Задание выполнено</p>');
				$('.complete').fadeIn('slow');

			}

		}, 1000);

	});

});
