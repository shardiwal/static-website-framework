$(document).ready(function() {
	$(document).attr('title', site.title);
	$(document).find('#site_name').html( site.name );
	if ( site.logo ) {
		$(document).find('#site_logo').attr( 'src', site.logo );
	}
	if ( site.meta.title ) {
		$(document).find('meta[name=title]').attr( 'content', site.meta.title );
	}
	if ( site.meta.keywords ) {
		$(document).find('meta[name=keywords]').attr( 'content', site.meta.keywords );
	}
	if ( site.meta.description ) {
		$(document).find('meta[name=description]').attr( 'content', site.meta.description );
	}	
	
	var menus = $('<ul/>');
	$.each ( site.primary_navingation, function(i,el) {
		var list = $('<li/>',{ 'class' : el.css_class, 'title' : el.title } ).html(
			$('<a/>', { 'href' : el.link, 'title' : el.title } ).html( el.title )
		);
		menus.append( list );
	});
	$('#primary_navingation').html( menus );
	
	var menus = $('<ul/>', { 'id' : 'left-ul'} );
	$.each ( site.secondary_navingation, function(i,el) {
		var link = $('<a/>', { 'href' : el.link, 'title' : el.title } ).html(
			$('<img/>',{ 'src' : 'images/'+ el.img })
		);
		link.append( el.title );
		var list = $('<li/>', { 'class': el.css_class, 'title' : el.title } ).html( link );
		menus.append( list );
	});
	$('#secondary_navingation').html( menus );

	$('.developer_info').html(
		$('<a/>', { 'href' : developer_info.url, 'title' : developer_info.name } ).text( developer_info.name )
	);
	
});

var urlParams = {};
(function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();
