jQuery( document ).ready( function() {
	// Accordion
	$( '.accordion-toggle:not(.open)' ).next( '.accordion-content' ).hide();
	$( '.accordion-toggle' ).click( function() {
		// Hide
		$( '.accordion-toggle.open' ).next( '.accordion-content' ).animate( { width: 'toggle' }, 800 );
		$( '.accordion-toggle.open' ).removeClass( 'open' );

		// Show
		$( this ).addClass( 'open' );
		$( this ).next( '.accordion-content' ).animate( { width: 'toggle' }, 800 );
	});

	// Staff
	$( '.staff-icons img' ).click( function() {
		$( '.staff-icons img' ).removeClass( 'open' );
		$( this ).addClass( 'open' );

		$( '.staff-infos div' ).fadeOut( 'fast' );
		$( '.staff-infos #' + $( this ).data( 'id' ) ).fadeIn();
	});
});