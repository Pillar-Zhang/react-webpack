$(document).ready(function() {
	// $('.bold').leanModal();
	$('.mdimg').click(function() {

		$('#modal1').find('#toufang').attr("imgName", this.src)
		$('#modal1').openModal();
	})

	$('.mdvideo').click(function() {

		var videos = this.attributes.videosrc.value.toString();

		$('#modal2').find('#toufangvideo').attr("videoName", videos);
		$('#modal2').openModal();

	})



});

$(".side-nav a").click(function() {
	$('a').toggleClass('active');
});