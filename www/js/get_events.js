var gobAbiertoAPI = "https://gobiernoabierto.cordoba.gob.ar/api";
var gobAbiertoAPI_categories = "/eventos-publicos/"
var gobAbiertoAPI_audiencia = "?audiencia_id=4"
var formatJson = "&format=json";
// https://gobiernoabierto.cordoba.gob.ar/api/eventos-publicos/?audiencia_id=4
$.ajax({
	dataType: "json",
	url: gobAbiertoAPI+gobAbiertoAPI_categories+gobAbiertoAPI_audiencia+formatJson,
	success: handleData
});
function handleData(data) {
	$.each(data.results, function(i, category) {
		var imageToUse = "img/default-event-sq.png";
		if(category.imagen.thumbnail != undefined){
			imageToUse = category.imagen.thumbnail.replace(/^http:\/\//i, 'https://');
		}
		$('#events-menu').append('<div class="row" style="margin-top:5px; margin-left:5px;"><li><a href="filtro.html#evt-'+category.id+'"><div class="col-xs-3"><div class="circle-image-li" style="background-image: url('+imageToUse+');"></div></div><div class="col-xs-9">'+category.nombre+'</div></a></li></div>');

		// $('#events-menu').append('<div class="row" style="margin-top:5px; margin-left:5px;"><li><a href="evento.html#evt-'+category.id+'"><div class="col-xs-3"><div class="circle-image-li" style="background-image: url('+imageToUse+');"></div></div><div class="col-xs-9">'+category.nombre+'</div></a></li></div>');
	});
}
