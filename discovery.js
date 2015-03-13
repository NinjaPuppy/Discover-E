$(document).ready(function() {

	//CLICKING BUTTONS AND HIDING BOOKS
		
	//when a button is clicked, mark it pressed or unpressed
	$('div.button').click(function(){
		$(this).toggleClass('pressed');
	
	//collect the IDs of all the buttons that are pressed
	var $allIDs = [];	
	$('div.pressed').each(function(){
		$allIDs.push(this.id);
	});
	
	//unhide all the books
	$('div.book').removeClass('hidden');

	//hide any books with the wrong classes
	//if a book doesn't have that ID, add the hidden class
	$.each($allIDs, function(index,value){
		$('div.book:not(.'+value+')').addClass('hidden');		
	});
	
	});
	
	
	//SHOWING DETAIL ON CLICK
	
	//when book is clicked, expand it
	$('div.book').click(function(){
		$(".popup", this).addClass('visible');
	});
	
	//clicking outside a popup closes it
	$(document).mouseup(function (e)
	{
    var container = $('div.popup');

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.removeClass('visible');
    }
	});
	
	//when mouse leaves book, shrink it again 
	//I don't think we need this anymore
	//$('div.book').mouseleave(function(){
	//	$(".popup", this).removeClass('visible');
    //});
	
	//clicking [x] also closes popup
	//DOESN'T WORK, though it is identifying the parent div correctly
	//$('div.close').click(function(){
	//	$(this).css('border', '1px solid blue');
	//	$(this).parent().removeClass('visible');
	//	});	

	
});
