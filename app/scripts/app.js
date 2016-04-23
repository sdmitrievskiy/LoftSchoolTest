// import svg4everybody from 'svg4everybody';
 import $ from 'jquery';

console.log(3);
$(document).ready(function () {
	console.log(1);
	//курсов у нас много, поэтому нужно дополнительно реализовать
	//поведение label
	//реализуем поведение только в одну строну, ТЗ не требует обратного
	$('.course__checkbox-label').click(function () {
		$(this).siblings('.course__checkbox').attr('checked', 'checked');
	});

});
