
var num; 
var tableEl;

$('#reservationForm').hide()

$(".tables").on('click', function(){ 
	$("form").on('submit', function(event){
		event.preventDefault();
	});
	 
	num = $(this).text();
	$(".table-number-text").text(num);
	$("#reservationForm").fadeIn();
	tableEl = $(this);
});


$("#save").on('click', function(){
	$('#reservationForm').fadeOut();
	var formText = $(".table-number-text").text();
	console.log(formText);
	$(".tables:contains(" + formText +")").removeClass("available").addClass("reserved");

	addHoverData(); 
	$("form")[0].reset();
})

function addHoverData(){
	var name = $("#name").val();
	var partySize= $("#party").val(); 
	tableEl.append('<div id="reservationInfo"><div>Name: ' + name + '</div><div>Party Size: ' + partySize + '</div></div>')
}

$("#close").on('click', function(){
	$("#reservationForm").fadeOut();
});




