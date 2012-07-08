var baseurl;

steal(
        'jquery',
        'jquery/view/ejs',
        './lib/jQueryMobile/Overrides.css', // application CSS file
        './lib/jQueryMobile/jquery.mobile.structure-1.0.css',
        './lib/jQueryMobile/jquery.mobile-1.0.min.css', //steal jquery mobile css
        function () { // configure your application

            ;

            //getting base url
            baseurl = window.location.href.replace(/\/$|\/index\.html/i, '');

            configureJqueryMobile();
        }
    ).then( //steal jquery mobile js
        './lib/jQueryMobile/jquery.mobile-1.0.js',
        './models/websqlmodel.js'
    ).then(
        './lib/WebSQL/db.js',
        './lib/jQueryValidation/validation.css',
        './models/models.js', // steals all your models
        './controllers/controllers.js', // steals all controllers
        './lib/jQueryValidation/jquery.validate.js',
         function () {
             localStorageDB.init();
         }
    );  

    function configureJqueryMobile() {

        $(document).bind("mobileinit", function () {
            //apply overrides here
            $.mobile.defaultPageTransition = "none";
            $.mobile.defaultDialogTransition = "none";
        });
        
        $(document).bind('pagebeforecreate', function (e) {

        });

        $(document).bind('pagebeforecreate', function(e) {
            if ($(e.target).filter('#indexPage').length > 0) {
                $('#indexPage').risk_index();
                return;
            }

            if ($(e.target).filter('#AddTaskPage').length > 0) {
                $('#NewTaskForm').risk_task();
                return;
            }

            if ($(e.target).filter('#EmailReportPage').length > 0) {
                $('#EmailReportForm').risk_email_report();
                return;
            }

            if ($(e.target).filter('#NewHazardPage').length > 0) {
                $('#NewHazardForm').risk_hazard();
                return;
            } 
        });

        $(document).bind('pageshow', function (e) {

            if ($(e.target).filter('#MyAssessmentsPage').length > 0) {
                $('#MyAssessmentsPage').risk_my_assessments();
                return;
            }

            if ($(e.target).filter('#ControlsPage').length > 0) {
                $('#ControlsPage').risk_controls();
                return;
            }
            
            if ($(e.target).filter('#WhosPage').length > 0) {
                $('#WhosPage').risk_whos();
                return;
            }
            
            if ($(e.target).filter('#DetailsPage').length > 0) {
                $('#DetailsPage').risk_details();
                return;
            }
        });

        $(document).bind('pagecreate', function (e) {

            if ($(e.target).filter('#InProgressPage').length > 0) {
                $('#InProgressPage').risk_in_progress();
                return;
            }
            
            if ($(e.target).filter('#HazardsPage').length > 0) {
                $('#HazardsPage').risk_hazards();
                return;
            }

            if ($(e.target).filter('#DeleteConfirmPage').length > 0) {
                $('#DeleteConfirmPage').risk_delete();
                return;
            }

            if ($(e.target).filter('#DeleteTaskConfirmPage').length > 0) {
                $('#DeleteTaskConfirmPage').risk_delete_task();
                return;
            }

            if ($(e.target).filter('#DeleteHazardConfirmPage').length > 0) {
                $('#DeleteHazardConfirmPage').risk_delete_hazard();
                return;
            }     
        });

        $(document).bind('pagehide', function (e, args) {


        });
    }

;
steal.loaded('risk/risk.js');
/*!
 * jQuery JavaScript Library v1.6.4
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Sep 12 18:54:48 2011 -0400
 */
(function( window, undefined ) {

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
var jQuery = (function() {

// Define a local copy of jQuery
var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// A simple way to check for HTML strings or ID strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,

	// Used for trimming whitespace
	trimLeft = /^\s+/,
	trimRight = /\s+$/,

	// Check for digits
	rdigit = /\d/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

	// Useragent RegExp
	rwebkit = /(webkit)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

	// Matches dashed string for camelizing
	rdashAlpha = /-([a-z]|[0-9])/ig,
	rmsPrefix = /^-ms-/,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return ( letter + "" ).toUpperCase();
	},

	// Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

	// For matching the engine and version of the browser
	browserMatch,

	// The deferred used on DOM ready
	readyList,

	// The ready event handler
	DOMContentLoaded,

	// Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	trim = String.prototype.trim,
	indexOf = Array.prototype.indexOf,

	// [[Class]] -> type pairs
	class2type = {};

jQuery.fn = jQuery.prototype = {
	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}

		// The body element only exists once, optimize finding it
		if ( selector === "body" && !context && document.body ) {
			this.context = document;
			this[0] = document.body;
			this.selector = selector;
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = quickExpr.exec( selector );
			}

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;
					doc = (context ? context.ownerDocument || context : document);

					// If a single string is passed in and it's a single tag
					// just do a createElement and skip the rest
					ret = rsingleTag.exec( selector );

					if ( ret ) {
						if ( jQuery.isPlainObject( context ) ) {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );

						} else {
							selector = [ doc.createElement( ret[1] ) ];
						}

					} else {
						ret = jQuery.buildFragment( [ match[1] ], [ doc ] );
						selector = (ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment).childNodes;
					}

					return jQuery.merge( this, selector );

				// HANDLE: $("#id")
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return (context || rootjQuery).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if (selector.selector !== undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.6.4",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return slice.call( this, 0 );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = this.constructor();

		if ( jQuery.isArray( elems ) ) {
			push.apply( ret, elems );

		} else {
			jQuery.merge( ret, elems );
		}

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" ) {
			ret.selector = this.selector + (this.selector ? " " : "") + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Attach the listeners
		jQuery.bindReady();

		// Add the callback
		readyList.done( fn );

		return this;
	},

	eq: function( i ) {
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, +i + 1 );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ),
			"slice", slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {
		// Either a released hold or an DOMready/load event and not yet ready
		if ( (wait === true && !--jQuery.readyWait) || (wait !== true && !jQuery.isReady) ) {
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready, 1 );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger( "ready" ).unbind( "ready" );
			}
		}
	},

	bindReady: function() {
		if ( readyList ) {
			return;
		}

		readyList = jQuery._Deferred();

		// Catch cases where $(document).ready() is called after the
		// browser event has already occurred.
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			return setTimeout( jQuery.ready, 1 );
		}

		// Mozilla, Opera and webkit nightlies currently support this event
		if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", jQuery.ready, false );

		// If IE event model is used
		} else if ( document.attachEvent ) {
			// ensure firing before onload,
			// maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", DOMContentLoaded );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", jQuery.ready );

			// If IE and not a frame
			// continually check to see if the document is ready
			var toplevel = false;

			try {
				toplevel = window.frameElement == null;
			} catch(e) {}

			if ( document.documentElement.doScroll && toplevel ) {
				doScrollCheck();
			}
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	// A crude way of determining if an object is a window
	isWindow: function( obj ) {
		return obj && typeof obj === "object" && "setInterval" in obj;
	},

	isNaN: function( obj ) {
		return obj == null || !rdigit.test( obj ) || isNaN( obj );
	},

	type: function( obj ) {
		return obj == null ?
			String( obj ) :
			class2type[ toString.call(obj) ] || "object";
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		for ( var name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw msg;
	},

	parseJSON: function( data ) {
		if ( typeof data !== "string" || !data ) {
			return null;
		}

		// Make sure leading/trailing whitespace is removed (IE can't handle it)
		data = jQuery.trim( data );

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		// Make sure the incoming data is actual JSON
		// Logic borrowed from http://json.org/json2.js
		if ( rvalidchars.test( data.replace( rvalidescape, "@" )
			.replace( rvalidtokens, "]" )
			.replace( rvalidbraces, "")) ) {

			return (new Function( "return " + data ))();

		}
		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && rnotwhite.test( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction( object );

		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}

		return object;
	},

	// Use native String.trim function wherever possible
	trim: trim ?
		function( text ) {
			return text == null ?
				"" :
				trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
		},

	// results is for internal usage only
	makeArray: function( array, results ) {
		var ret = results || [];

		if ( array != null ) {
			// The window, strings (and functions) also have 'length'
			// The extra typeof function check is to prevent crashes
			// in Safari 2 (See: #3039)
			// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
			var type = jQuery.type( array );

			if ( array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( array ) ) {
				push.call( ret, array );
			} else {
				jQuery.merge( ret, array );
			}
		}

		return ret;
	},

	inArray: function( elem, array ) {
		if ( !array ) {
			return -1;
		}

		if ( indexOf ) {
			return indexOf.call( array, elem );
		}

		for ( var i = 0, length = array.length; i < length; i++ ) {
			if ( array[ i ] === elem ) {
				return i;
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var i = first.length,
			j = 0;

		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}

		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var ret = [], retVal;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value, key, ret = [],
			i = 0,
			length = elems.length,
			// jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( key in elems ) {
				value = callback( elems[ key ], key, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return ret.concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		if ( typeof context === "string" ) {
			var tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		var args = slice.call( arguments, 2 ),
			proxy = function() {
				return fn.apply( context, args.concat( slice.call( arguments ) ) );
			};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;

		return proxy;
	},

	// Mutifunctional method to get and set values to a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, key, value, exec, fn, pass ) {
		var length = elems.length;

		// Setting many attributes
		if ( typeof key === "object" ) {
			for ( var k in key ) {
				jQuery.access( elems, k, key[k], exec, fn, value );
			}
			return elems;
		}

		// Setting one attribute
		if ( value !== undefined ) {
			// Optionally, function values get executed if exec is true
			exec = !pass && exec && jQuery.isFunction(value);

			for ( var i = 0; i < length; i++ ) {
				fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
			}

			return elems;
		}

		// Getting an attribute
		return length ? fn( elems[0], key ) : undefined;
	},

	now: function() {
		return (new Date()).getTime();
	},

	// Use of jQuery.browser is frowned upon.
	// More details: http://docs.jquery.com/Utilities/jQuery.browser
	uaMatch: function( ua ) {
		ua = ua.toLowerCase();

		var match = rwebkit.exec( ua ) ||
			ropera.exec( ua ) ||
			rmsie.exec( ua ) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
			[];

		return { browser: match[1] || "", version: match[2] || "0" };
	},

	sub: function() {
		function jQuerySub( selector, context ) {
			return new jQuerySub.fn.init( selector, context );
		}
		jQuery.extend( true, jQuerySub, this );
		jQuerySub.superclass = this;
		jQuerySub.fn = jQuerySub.prototype = this();
		jQuerySub.fn.constructor = jQuerySub;
		jQuerySub.sub = this.sub;
		jQuerySub.fn.init = function init( selector, context ) {
			if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
				context = jQuerySub( context );
			}

			return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
		};
		jQuerySub.fn.init.prototype = jQuerySub.fn;
		var rootjQuerySub = jQuerySub(document);
		return jQuerySub;
	},

	browser: {}
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

browserMatch = jQuery.uaMatch( userAgent );
if ( browserMatch.browser ) {
	jQuery.browser[ browserMatch.browser ] = true;
	jQuery.browser.version = browserMatch.version;
}

// Deprecated, use jQuery.browser.webkit instead
if ( jQuery.browser.webkit ) {
	jQuery.browser.safari = true;
}

// IE doesn't match non-breaking spaces with \s
if ( rnotwhite.test( "\xA0" ) ) {
	trimLeft = /^[\s\xA0]+/;
	trimRight = /[\s\xA0]+$/;
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);

// Cleanup functions for the document ready method
if ( document.addEventListener ) {
	DOMContentLoaded = function() {
		document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
		jQuery.ready();
	};

} else if ( document.attachEvent ) {
	DOMContentLoaded = function() {
		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( document.readyState === "complete" ) {
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	};
}

// The DOM ready check for Internet Explorer
function doScrollCheck() {
	if ( jQuery.isReady ) {
		return;
	}

	try {
		// If IE is used, use the trick by Diego Perini
		// http://javascript.nwbox.com/IEContentLoaded/
		document.documentElement.doScroll("left");
	} catch(e) {
		setTimeout( doScrollCheck, 1 );
		return;
	}

	// and execute any waiting functions
	jQuery.ready();
}

return jQuery;

})();


var // Promise methods
	promiseMethods = "done fail isResolved isRejected promise then always pipe".split( " " ),
	// Static reference to slice
	sliceDeferred = [].slice;

jQuery.extend({
	// Create a simple deferred (one callbacks list)
	_Deferred: function() {
		var // callbacks list
			callbacks = [],
			// stored [ context , args ]
			fired,
			// to avoid firing when already doing so
			firing,
			// flag to know if the deferred has been cancelled
			cancelled,
			// the deferred itself
			deferred  = {

				// done( f1, f2, ...)
				done: function() {
					if ( !cancelled ) {
						var args = arguments,
							i,
							length,
							elem,
							type,
							_fired;
						if ( fired ) {
							_fired = fired;
							fired = 0;
						}
						for ( i = 0, length = args.length; i < length; i++ ) {
							elem = args[ i ];
							type = jQuery.type( elem );
							if ( type === "array" ) {
								deferred.done.apply( deferred, elem );
							} else if ( type === "function" ) {
								callbacks.push( elem );
							}
						}
						if ( _fired ) {
							deferred.resolveWith( _fired[ 0 ], _fired[ 1 ] );
						}
					}
					return this;
				},

				// resolve with given context and args
				resolveWith: function( context, args ) {
					if ( !cancelled && !fired && !firing ) {
						// make sure args are available (#8421)
						args = args || [];
						firing = 1;
						try {
							while( callbacks[ 0 ] ) {
								callbacks.shift().apply( context, args );
							}
						}
						finally {
							fired = [ context, args ];
							firing = 0;
						}
					}
					return this;
				},

				// resolve with this as context and given arguments
				resolve: function() {
					deferred.resolveWith( this, arguments );
					return this;
				},

				// Has this deferred been resolved?
				isResolved: function() {
					return !!( firing || fired );
				},

				// Cancel
				cancel: function() {
					cancelled = 1;
					callbacks = [];
					return this;
				}
			};

		return deferred;
	},

	// Full fledged deferred (two callbacks list)
	Deferred: function( func ) {
		var deferred = jQuery._Deferred(),
			failDeferred = jQuery._Deferred(),
			promise;
		// Add errorDeferred methods, then and promise
		jQuery.extend( deferred, {
			then: function( doneCallbacks, failCallbacks ) {
				deferred.done( doneCallbacks ).fail( failCallbacks );
				return this;
			},
			always: function() {
				return deferred.done.apply( deferred, arguments ).fail.apply( this, arguments );
			},
			fail: failDeferred.done,
			rejectWith: failDeferred.resolveWith,
			reject: failDeferred.resolve,
			isRejected: failDeferred.isResolved,
			pipe: function( fnDone, fnFail ) {
				return jQuery.Deferred(function( newDefer ) {
					jQuery.each( {
						done: [ fnDone, "resolve" ],
						fail: [ fnFail, "reject" ]
					}, function( handler, data ) {
						var fn = data[ 0 ],
							action = data[ 1 ],
							returned;
						if ( jQuery.isFunction( fn ) ) {
							deferred[ handler ](function() {
								returned = fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise().then( newDefer.resolve, newDefer.reject );
								} else {
									newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
								}
							});
						} else {
							deferred[ handler ]( newDefer[ action ] );
						}
					});
				}).promise();
			},
			// Get a promise for this deferred
			// If obj is provided, the promise aspect is added to the object
			promise: function( obj ) {
				if ( obj == null ) {
					if ( promise ) {
						return promise;
					}
					promise = obj = {};
				}
				var i = promiseMethods.length;
				while( i-- ) {
					obj[ promiseMethods[i] ] = deferred[ promiseMethods[i] ];
				}
				return obj;
			}
		});
		// Make sure only one callback list will be used
		deferred.done( failDeferred.cancel ).fail( deferred.cancel );
		// Unexpose cancel
		delete deferred.cancel;
		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}
		return deferred;
	},

	// Deferred helper
	when: function( firstParam ) {
		var args = arguments,
			i = 0,
			length = args.length,
			count = length,
			deferred = length <= 1 && firstParam && jQuery.isFunction( firstParam.promise ) ?
				firstParam :
				jQuery.Deferred();
		function resolveFunc( i ) {
			return function( value ) {
				args[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				if ( !( --count ) ) {
					// Strange bug in FF4:
					// Values changed onto the arguments object sometimes end up as undefined values
					// outside the $.when method. Cloning the object into a fresh array solves the issue
					deferred.resolveWith( deferred, sliceDeferred.call( args, 0 ) );
				}
			};
		}
		if ( length > 1 ) {
			for( ; i < length; i++ ) {
				if ( args[ i ] && jQuery.isFunction( args[ i ].promise ) ) {
					args[ i ].promise().then( resolveFunc(i), deferred.reject );
				} else {
					--count;
				}
			}
			if ( !count ) {
				deferred.resolveWith( deferred, args );
			}
		} else if ( deferred !== firstParam ) {
			deferred.resolveWith( deferred, length ? [ firstParam ] : [] );
		}
		return deferred.promise();
	}
});



jQuery.support = (function() {

	var div = document.createElement( "div" ),
		documentElement = document.documentElement,
		all,
		a,
		select,
		opt,
		input,
		marginDiv,
		support,
		fragment,
		body,
		testElementParent,
		testElement,
		testElementStyle,
		tds,
		events,
		eventName,
		i,
		isSupported;

	// Preliminary tests
	div.setAttribute("className", "t");
	div.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";


	all = div.getElementsByTagName( "*" );
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return {};
	}

	// First batch of supports tests
	select = document.createElement( "select" );
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName( "input" )[ 0 ];

	support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: ( div.firstChild.nodeType === 3 ),

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName( "tbody" ).length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName( "link" ).length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: ( a.getAttribute( "href" ) === "/a" ),

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.55$/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Make sure that if no value is specified for a checkbox
		// that it defaults to "on".
		// (WebKit defaults to "" instead)
		checkOn: ( input.value === "on" ),

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// Will be defined later
		submitBubbles: true,
		changeBubbles: true,
		focusinBubbles: false,
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Test to see if it's possible to delete an expando from an element
	// Fails in Internet Explorer
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
		div.attachEvent( "onclick", function() {
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			support.noCloneEvent = false;
		});
		div.cloneNode( true ).fireEvent( "onclick" );
	}

	// Check if a radio maintains it's value
	// after being appended to the DOM
	input = document.createElement("input");
	input.value = "t";
	input.setAttribute("type", "radio");
	support.radioValue = input.value === "t";

	input.setAttribute("checked", "checked");
	div.appendChild( input );
	fragment = document.createDocumentFragment();
	fragment.appendChild( div.firstChild );

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	div.innerHTML = "";

	// Figure out if the W3C box model works as expected
	div.style.width = div.style.paddingLeft = "1px";

	body = document.getElementsByTagName( "body" )[ 0 ];
	// We use our own, invisible, body unless the body is already present
	// in which case we use a div (#9239)
	testElement = document.createElement( body ? "div" : "body" );
	testElementStyle = {
		visibility: "hidden",
		width: 0,
		height: 0,
		border: 0,
		margin: 0,
		background: "none"
	};
	if ( body ) {
		jQuery.extend( testElementStyle, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
	}
	for ( i in testElementStyle ) {
		testElement.style[ i ] = testElementStyle[ i ];
	}
	testElement.appendChild( div );
	testElementParent = body || documentElement;
	testElementParent.insertBefore( testElement, testElementParent.firstChild );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	support.boxModel = div.offsetWidth === 2;

	if ( "zoom" in div.style ) {
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		// (IE < 8 does this)
		div.style.display = "inline";
		div.style.zoom = 1;
		support.inlineBlockNeedsLayout = ( div.offsetWidth === 2 );

		// Check if elements with layout shrink-wrap their children
		// (IE 6 does this)
		div.style.display = "";
		div.innerHTML = "<div style='width:4px;'></div>";
		support.shrinkWrapBlocks = ( div.offsetWidth !== 2 );
	}

	div.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
	tds = div.getElementsByTagName( "td" );

	// Check if table cells still have offsetWidth/Height when they are set
	// to display:none and there are still other visible table cells in a
	// table row; if so, offsetWidth/Height are not reliable for use when
	// determining if an element has been hidden directly using
	// display:none (it is still safe to use offsets if a parent element is
	// hidden; don safety goggles and see bug #4512 for more information).
	// (only IE 8 fails this test)
	isSupported = ( tds[ 0 ].offsetHeight === 0 );

	tds[ 0 ].style.display = "";
	tds[ 1 ].style.display = "none";

	// Check if empty table cells still have offsetWidth/Height
	// (IE < 8 fail this test)
	support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );
	div.innerHTML = "";

	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. For more
	// info see bug #3333
	// Fails in WebKit before Feb 2011 nightlies
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	if ( document.defaultView && document.defaultView.getComputedStyle ) {
		marginDiv = document.createElement( "div" );
		marginDiv.style.width = "0";
		marginDiv.style.marginRight = "0";
		div.appendChild( marginDiv );
		support.reliableMarginRight =
			( parseInt( ( document.defaultView.getComputedStyle( marginDiv, null ) || { marginRight: 0 } ).marginRight, 10 ) || 0 ) === 0;
	}

	// Remove the body element we added
	testElement.innerHTML = "";
	testElementParent.removeChild( testElement );

	// Technique from Juriy Zaytsev
	// http://thinkweb2.com/projects/prototype/detecting-event-support-without-browser-sniffing/
	// We only care about the case where non-standard event systems
	// are used, namely in IE. Short-circuiting here helps us to
	// avoid an eval call (in setAttribute) which can cause CSP
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
	if ( div.attachEvent ) {
		for( i in {
			submit: 1,
			change: 1,
			focusin: 1
		} ) {
			eventName = "on" + i;
			isSupported = ( eventName in div );
			if ( !isSupported ) {
				div.setAttribute( eventName, "return;" );
				isSupported = ( typeof div[ eventName ] === "function" );
			}
			support[ i + "Bubbles" ] = isSupported;
		}
	}

	// Null connected elements to avoid leaks in IE
	testElement = fragment = select = opt = body = marginDiv = div = input = null;

	return support;
})();

// Keep track of boxModel
jQuery.boxModel = jQuery.support.boxModel;




var rbrace = /^(?:\{.*\}|\[.*\])$/,
	rmultiDash = /([A-Z])/g;

jQuery.extend({
	cache: {},

	// Please use with caution
	uuid: 0,

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];

		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, ret,
			internalKey = jQuery.expando,
			getByName = typeof name === "string",

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ jQuery.expando ] : elem[ jQuery.expando ] && jQuery.expando;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || (pvt && id && (cache[ id ] && !cache[ id ][ internalKey ]))) && getByName && data === undefined ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				elem[ jQuery.expando ] = id = ++jQuery.uuid;
			} else {
				id = jQuery.expando;
			}
		}

		if ( !cache[ id ] ) {
			cache[ id ] = {};

			// TODO: This is a hack for 1.5 ONLY. Avoids exposing jQuery
			// metadata on plain JS objects when the object is serialized using
			// JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ][ internalKey ] = jQuery.extend(cache[ id ][ internalKey ], name);
			} else {
				cache[ id ] = jQuery.extend(cache[ id ], name);
			}
		}

		thisCache = cache[ id ];

		// Internal jQuery data is stored in a separate object inside the object's data
		// cache in order to avoid key collisions between internal data and user-defined
		// data
		if ( pvt ) {
			if ( !thisCache[ internalKey ] ) {
				thisCache[ internalKey ] = {};
			}

			thisCache = thisCache[ internalKey ];
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// TODO: This is a hack for 1.5 ONLY. It will be removed in 1.6. Users should
		// not attempt to inspect the internal events object using jQuery.data, as this
		// internal data object is undocumented and subject to change.
		if ( name === "events" && !thisCache[name] ) {
			return thisCache[ internalKey ] && thisCache[ internalKey ].events;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( getByName ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	},

	removeData: function( elem, name, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache,

			// Reference to internal data cache key
			internalKey = jQuery.expando,

			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,

			// See jQuery.data for more information
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ][ internalKey ] : cache[ id ];

			if ( thisCache ) {

				// Support interoperable removal of hyphenated or camelcased keys
				if ( !thisCache[ name ] ) {
					name = jQuery.camelCase( name );
				}

				delete thisCache[ name ];

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( !isEmptyDataObject(thisCache) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( pvt ) {
			delete cache[ id ][ internalKey ];

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject(cache[ id ]) ) {
				return;
			}
		}

		var internalCache = cache[ id ][ internalKey ];

		// Browsers that fail expando deletion also refuse to delete expandos on
		// the window, but it will allow it on all other JS objects; other browsers
		// don't care
		// Ensure that `cache` is not a window object #10080
		if ( jQuery.support.deleteExpando || !cache.setInterval ) {
			delete cache[ id ];
		} else {
			cache[ id ] = null;
		}

		// We destroyed the entire user cache at once because it's faster than
		// iterating through each key, but we need to continue to persist internal
		// data if it existed
		if ( internalCache ) {
			cache[ id ] = {};
			// TODO: This is a hack for 1.5 ONLY. Avoids exposing jQuery
			// metadata on plain JS objects when the object is serialized using
			// JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}

			cache[ id ][ internalKey ] = internalCache;

		// Otherwise, we need to eliminate the expando on the node to avoid
		// false lookups in the cache for entries that no longer exist
		} else if ( isNode ) {
			// IE does not allow us to delete expando properties from nodes,
			// nor does it have a removeAttribute function on Document nodes;
			// we must handle all of these cases
			if ( jQuery.support.deleteExpando ) {
				delete elem[ jQuery.expando ];
			} else if ( elem.removeAttribute ) {
				elem.removeAttribute( jQuery.expando );
			} else {
				elem[ jQuery.expando ] = null;
			}
		}
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return jQuery.data( elem, name, data, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		if ( elem.nodeName ) {
			var match = jQuery.noData[ elem.nodeName.toLowerCase() ];

			if ( match ) {
				return !(match === true || elem.getAttribute("classid") !== match);
			}
		}

		return true;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var data = null;

		if ( typeof key === "undefined" ) {
			if ( this.length ) {
				data = jQuery.data( this[0] );

				if ( this[0].nodeType === 1 ) {
			    var attr = this[0].attributes, name;
					for ( var i = 0, l = attr.length; i < l; i++ ) {
						name = attr[i].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.substring(5) );

							dataAttr( this[0], name, data[ name ] );
						}
					}
				}
			}

			return data;

		} else if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		var parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			// Try to fetch any internally stored data first
			if ( data === undefined && this.length ) {
				data = jQuery.data( this[0], key );
				data = dataAttr( this[0], key, data );
			}

			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;

		} else {
			return this.each(function() {
				var $this = jQuery( this ),
					args = [ parts[0], value ];

				$this.triggerHandler( "setData" + parts[1] + "!", args );
				jQuery.data( this, key, value );
				$this.triggerHandler( "changeData" + parts[1] + "!", args );
			});
		}
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				!jQuery.isNaN( data ) ? parseFloat( data ) :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// TODO: This is a hack for 1.5 ONLY to allow objects with a single toJSON
// property to be considered empty objects; this property always exists in
// order to make sure JSON.stringify does not expose internal metadata
function isEmptyDataObject( obj ) {
	for ( var name in obj ) {
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}




function handleQueueMarkDefer( elem, type, src ) {
	var deferDataKey = type + "defer",
		queueDataKey = type + "queue",
		markDataKey = type + "mark",
		defer = jQuery.data( elem, deferDataKey, undefined, true );
	if ( defer &&
		( src === "queue" || !jQuery.data( elem, queueDataKey, undefined, true ) ) &&
		( src === "mark" || !jQuery.data( elem, markDataKey, undefined, true ) ) ) {
		// Give room for hard-coded callbacks to fire first
		// and eventually mark/queue something else on the element
		setTimeout( function() {
			if ( !jQuery.data( elem, queueDataKey, undefined, true ) &&
				!jQuery.data( elem, markDataKey, undefined, true ) ) {
				jQuery.removeData( elem, deferDataKey, true );
				defer.resolve();
			}
		}, 0 );
	}
}

jQuery.extend({

	_mark: function( elem, type ) {
		if ( elem ) {
			type = (type || "fx") + "mark";
			jQuery.data( elem, type, (jQuery.data(elem,type,undefined,true) || 0) + 1, true );
		}
	},

	_unmark: function( force, elem, type ) {
		if ( force !== true ) {
			type = elem;
			elem = force;
			force = false;
		}
		if ( elem ) {
			type = type || "fx";
			var key = type + "mark",
				count = force ? 0 : ( (jQuery.data( elem, key, undefined, true) || 1 ) - 1 );
			if ( count ) {
				jQuery.data( elem, key, count, true );
			} else {
				jQuery.removeData( elem, key, true );
				handleQueueMarkDefer( elem, type, "mark" );
			}
		}
	},

	queue: function( elem, type, data ) {
		if ( elem ) {
			type = (type || "fx") + "queue";
			var q = jQuery.data( elem, type, undefined, true );
			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !q || jQuery.isArray(data) ) {
					q = jQuery.data( elem, type, jQuery.makeArray(data), true );
				} else {
					q.push( data );
				}
			}
			return q || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			fn = queue.shift(),
			defer;

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
		}

		if ( fn ) {
			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift("inprogress");
			}

			fn.call(elem, function() {
				jQuery.dequeue(elem, type);
			});
		}

		if ( !queue.length ) {
			jQuery.removeData( elem, type + "queue", true );
			handleQueueMarkDefer( elem, type, "queue" );
		}
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined ) {
			return jQuery.queue( this[0], type );
		}
		return this.each(function() {
			var queue = jQuery.queue( this, type, data );

			if ( type === "fx" && queue[0] !== "inprogress" ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue( type, function() {
			var elem = this;
			setTimeout(function() {
				jQuery.dequeue( elem, type );
			}, time );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, object ) {
		if ( typeof type !== "string" ) {
			object = type;
			type = undefined;
		}
		type = type || "fx";
		var defer = jQuery.Deferred(),
			elements = this,
			i = elements.length,
			count = 1,
			deferDataKey = type + "defer",
			queueDataKey = type + "queue",
			markDataKey = type + "mark",
			tmp;
		function resolve() {
			if ( !( --count ) ) {
				defer.resolveWith( elements, [ elements ] );
			}
		}
		while( i-- ) {
			if (( tmp = jQuery.data( elements[ i ], deferDataKey, undefined, true ) ||
					( jQuery.data( elements[ i ], queueDataKey, undefined, true ) ||
						jQuery.data( elements[ i ], markDataKey, undefined, true ) ) &&
					jQuery.data( elements[ i ], deferDataKey, jQuery._Deferred(), true ) )) {
				count++;
				tmp.done( resolve );
			}
		}
		resolve();
		return defer.promise();
	}
});




var rclass = /[\n\t\r]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea)?$/i,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	nodeHook, boolHook;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.attr );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},
	
	prop: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.prop );
	},
	
	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classNames, i, l, elem,
			setClass, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call(this, j, this.className) );
			});
		}

		if ( value && typeof value === "string" ) {
			classNames = value.split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 ) {
					if ( !elem.className && classNames.length === 1 ) {
						elem.className = value;

					} else {
						setClass = " " + elem.className + " ";

						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( !~setClass.indexOf( " " + classNames[ c ] + " " ) ) {
								setClass += classNames[ c ] + " ";
							}
						}
						elem.className = jQuery.trim( setClass );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, i, l, elem, className, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call(this, j, this.className) );
			});
		}

		if ( (value && typeof value === "string") || value === undefined ) {
			classNames = (value || "").split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 && elem.className ) {
					if ( value ) {
						className = (" " + elem.className + " ").replace( rclass, " " );
						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							className = className.replace(" " + classNames[ c ] + " ", " ");
						}
						elem.className = jQuery.trim( className );

					} else {
						elem.className = "";
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.split( rspace );

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space seperated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// toggle whole className
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ";
		for ( var i = 0, l = this.length; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret,
			elem = this[0];
		
		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.nodeName.toLowerCase() ] || jQuery.valHooks[ elem.type ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ? 
					// handle most common string cases
					ret.replace(rreturn, "") : 
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return undefined;
		}

		var isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var self = jQuery(this), val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.nodeName.toLowerCase() ] || jQuery.valHooks[ this.type ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value,
					index = elem.selectedIndex,
					values = [],
					options = elem.options,
					one = elem.type === "select-one";

				// Nothing was selected
				if ( index < 0 ) {
					return null;
				}

				// Loop through all the selected options
				for ( var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++ ) {
					var option = options[ i ];

					// Don't return options that are disabled or in a disabled optgroup
					if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
				if ( one && !values.length && options.length ) {
					return jQuery( options[ index ] ).val();
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attrFn: {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true
	},
	
	attrFix: {
		// Always normalize to ensure hook usage
		tabindex: "tabIndex"
	},
	
	attr: function( elem, name, value, pass ) {
		var nType = elem.nodeType;
		
		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return undefined;
		}

		if ( pass && name in jQuery.attrFn ) {
			return jQuery( elem )[ name ]( value );
		}

		// Fallback to prop when attributes are not supported
		if ( !("getAttribute" in elem) ) {
			return jQuery.prop( elem, name, value );
		}

		var ret, hooks,
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// Normalize the name if needed
		if ( notxml ) {
			name = jQuery.attrFix[ name ] || name;

			hooks = jQuery.attrHooks[ name ];

			if ( !hooks ) {
				// Use boolHook for boolean attributes
				if ( rboolean.test( name ) ) {
					hooks = boolHook;

				// Use nodeHook if available( IE6/7 )
				} else if ( nodeHook ) {
					hooks = nodeHook;
				}
			}
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return undefined;

			} else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, "" + value );
				return value;
			}

		} else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			ret = elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return ret === null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, name ) {
		var propName;
		if ( elem.nodeType === 1 ) {
			name = jQuery.attrFix[ name ] || name;

			jQuery.attr( elem, name, "" );
			elem.removeAttribute( name );

			// Set corresponding property to false for boolean attributes
			if ( rboolean.test( name ) && (propName = jQuery.propFix[ name ] || name) in elem ) {
				elem[ propName ] = false;
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				// We can't allow the type property to be changed (since it causes problems in IE)
				if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
					jQuery.error( "type property can't be changed" );
				} else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to it's default in case type is set after value
					// This is for element creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		},
		// Use the value property for back compat
		// Use the nodeHook for button elements in IE6/7 (#1954)
		value: {
			get: function( elem, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.get( elem, name );
				}
				return name in elem ?
					elem.value :
					null;
			},
			set: function( elem, value, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.set( elem, value, name );
				}
				// Does not return so that setAttribute is also used
				elem.value = value;
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},
	
	prop: function( elem, name, value ) {
		var nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return undefined;
		}

		var ret, hooks,
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return (elem[ name ] = value);
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},
	
	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Add the tabindex propHook to attrHooks for back-compat
jQuery.attrHooks.tabIndex = jQuery.propHooks.tabIndex;

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		// Align boolean attributes with corresponding properties
		// Fall back to attribute presence where some booleans are not supported
		var attrNode;
		return jQuery.prop( elem, name ) === true || ( attrNode = elem.getAttributeNode( name ) ) && attrNode.nodeValue !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		var propName;
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			// value is true since we know at this point it's type boolean and not false
			// Set boolean attributes to the same name and set the DOM property
			propName = jQuery.propFix[ name ] || name;
			if ( propName in elem ) {
				// Only set the IDL specifically if it already exists on the element
				elem[ propName ] = true;
			}

			elem.setAttribute( name, name.toLowerCase() );
		}
		return name;
	}
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !jQuery.support.getSetAttribute ) {
	
	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret;
			ret = elem.getAttributeNode( name );
			// Return undefined if nodeValue is empty string
			return ret && ret.nodeValue !== "" ?
				ret.nodeValue :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				ret = document.createAttribute( name );
				elem.setAttributeNode( ret );
			}
			return (ret.nodeValue = value + "");
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret === null ? undefined : ret;
			}
		});
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Normalize to lowercase since IE uppercases css property names
			return elem.style.cssText.toLowerCase() || undefined;
		},
		set: function( elem, value ) {
			return (elem.style.cssText = "" + value);
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return (elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0);
			}
		}
	});
});




var rnamespaces = /\.(.*)$/,
	rformElems = /^(?:textarea|input|select)$/i,
	rperiod = /\./g,
	rspaces = / /g,
	rescape = /[^\w\s.|`]/g,
	fcleanup = function( nm ) {
		return nm.replace(rescape, "\\$&");
	};

/*
 * A number of helper functions used for managing events.
 * Many of the ideas behind this code originated from
 * Dean Edwards' addEvent library.
 */
jQuery.event = {

	// Bind an event to an element
	// Original by Dean Edwards
	add: function( elem, types, handler, data ) {
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		if ( handler === false ) {
			handler = returnFalse;
		} else if ( !handler ) {
			// Fixes bug #7229. Fix recommended by jdalton
			return;
		}

		var handleObjIn, handleObj;

		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
		}

		// Make sure that the function being executed has a unique ID
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure
		var elemData = jQuery._data( elem );

		// If no elemData is found then we must be trying to bind to one of the
		// banned noData elements
		if ( !elemData ) {
			return;
		}

		var events = elemData.events,
			eventHandle = elemData.handle;

		if ( !events ) {
			elemData.events = events = {};
		}

		if ( !eventHandle ) {
			elemData.handle = eventHandle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.handle.apply( eventHandle.elem, arguments ) :
					undefined;
			};
		}

		// Add elem as a property of the handle function
		// This is to prevent a memory leak with non-native events in IE.
		eventHandle.elem = elem;

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = types.split(" ");

		var type, i = 0, namespaces;

		while ( (type = types[ i++ ]) ) {
			handleObj = handleObjIn ?
				jQuery.extend({}, handleObjIn) :
				{ handler: handler, data: data };

			// Namespaced event handlers
			if ( type.indexOf(".") > -1 ) {
				namespaces = type.split(".");
				type = namespaces.shift();
				handleObj.namespace = namespaces.slice(0).sort().join(".");

			} else {
				namespaces = [];
				handleObj.namespace = "";
			}

			handleObj.type = type;
			if ( !handleObj.guid ) {
				handleObj.guid = handler.guid;
			}

			// Get the current list of functions bound to this event
			var handlers = events[ type ],
				special = jQuery.event.special[ type ] || {};

			// Init the event handler queue
			if ( !handlers ) {
				handlers = events[ type ] = [];

				// Check for a special event handler
				// Only use addEventListener/attachEvent if the special
				// events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add the function to the element's handler list
			handlers.push( handleObj );

			// Keep track of which events have been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	global: {},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, pos ) {
		// don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		if ( handler === false ) {
			handler = returnFalse;
		}

		var ret, type, fn, j, i = 0, all, namespaces, namespace, special, eventType, handleObj, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem ),
			events = elemData && elemData.events;

		if ( !elemData || !events ) {
			return;
		}

		// types is actually an event object here
		if ( types && types.type ) {
			handler = types.handler;
			types = types.type;
		}

		// Unbind all events for the element
		if ( !types || typeof types === "string" && types.charAt(0) === "." ) {
			types = types || "";

			for ( type in events ) {
				jQuery.event.remove( elem, type + types );
			}

			return;
		}

		// Handle multiple events separated by a space
		// jQuery(...).unbind("mouseover mouseout", fn);
		types = types.split(" ");

		while ( (type = types[ i++ ]) ) {
			origType = type;
			handleObj = null;
			all = type.indexOf(".") < 0;
			namespaces = [];

			if ( !all ) {
				// Namespaced event handlers
				namespaces = type.split(".");
				type = namespaces.shift();

				namespace = new RegExp("(^|\\.)" +
					jQuery.map( namespaces.slice(0).sort(), fcleanup ).join("\\.(?:.*\\.)?") + "(\\.|$)");
			}

			eventType = events[ type ];

			if ( !eventType ) {
				continue;
			}

			if ( !handler ) {
				for ( j = 0; j < eventType.length; j++ ) {
					handleObj = eventType[ j ];

					if ( all || namespace.test( handleObj.namespace ) ) {
						jQuery.event.remove( elem, origType, handleObj.handler, j );
						eventType.splice( j--, 1 );
					}
				}

				continue;
			}

			special = jQuery.event.special[ type ] || {};

			for ( j = pos || 0; j < eventType.length; j++ ) {
				handleObj = eventType[ j ];

				if ( handler.guid === handleObj.guid ) {
					// remove the given handler for the given type
					if ( all || namespace.test( handleObj.namespace ) ) {
						if ( pos == null ) {
							eventType.splice( j--, 1 );
						}

						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}

					if ( pos != null ) {
						break;
					}
				}
			}

			// remove generic event handler if no more handlers exist
			if ( eventType.length === 0 || pos != null && eventType.length === 1 ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				ret = null;
				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			var handle = elemData.handle;
			if ( handle ) {
				handle.elem = null;
			}

			delete elemData.events;
			delete elemData.handle;

			if ( jQuery.isEmptyObject( elemData ) ) {
				jQuery.removeData( elem, undefined, true );
			}
		}
	},
	
	// Events that are safe to short-circuit if no handlers are attached.
	// Native DOM events should not be added, they may have inline handlers.
	customEvent: {
		"getData": true,
		"setData": true,
		"changeData": true
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		// Event object or event type
		var type = event.type || event,
			namespaces = [],
			exclusive;

		if ( type.indexOf("!") >= 0 ) {
			// Exclusive events trigger only for the exact event (no namespaces)
			type = type.slice(0, -1);
			exclusive = true;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}

		if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
			// No jQuery handlers for this event type, and it can't have inline handlers
			return;
		}

		// Caller can pass in an Event, Object, or just an event type string
		event = typeof event === "object" ?
			// jQuery.Event object
			event[ jQuery.expando ] ? event :
			// Object literal
			new jQuery.Event( type, event ) :
			// Just the event type (string)
			new jQuery.Event( type );

		event.type = type;
		event.exclusive = exclusive;
		event.namespace = namespaces.join(".");
		event.namespace_re = new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.)?") + "(\\.|$)");
		
		// triggerHandler() and global events don't bubble or run the default action
		if ( onlyHandlers || !elem ) {
			event.preventDefault();
			event.stopPropagation();
		}

		// Handle a global trigger
		if ( !elem ) {
			// TODO: Stop taunting the data cache; remove global events and always attach to document
			jQuery.each( jQuery.cache, function() {
				// internalKey variable is just used to make it easier to find
				// and potentially change this stuff later; currently it just
				// points to jQuery.expando
				var internalKey = jQuery.expando,
					internalCache = this[ internalKey ];
				if ( internalCache && internalCache.events && internalCache.events[ type ] ) {
					jQuery.event.trigger( event, data, internalCache.handle.elem );
				}
			});
			return;
		}

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// Clean up the event in case it is being reused
		event.result = undefined;
		event.target = elem;

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data != null ? jQuery.makeArray( data ) : [];
		data.unshift( event );

		var cur = elem,
			// IE doesn't like method names with a colon (#3533, #8272)
			ontype = type.indexOf(":") < 0 ? "on" + type : "";

		// Fire event on the current element, then bubble up the DOM tree
		do {
			var handle = jQuery._data( cur, "handle" );

			event.currentTarget = cur;
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Trigger an inline bound script
			if ( ontype && jQuery.acceptData( cur ) && cur[ ontype ] && cur[ ontype ].apply( cur, data ) === false ) {
				event.result = false;
				event.preventDefault();
			}

			// Bubble up to document, then to window
			cur = cur.parentNode || cur.ownerDocument || cur === event.target.ownerDocument && window;
		} while ( cur && !event.isPropagationStopped() );

		// If nobody prevented the default action, do it now
		if ( !event.isDefaultPrevented() ) {
			var old,
				special = jQuery.event.special[ type ] || {};

			if ( (!special._default || special._default.call( elem.ownerDocument, event ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction)() check here because IE6/7 fails that test.
				// IE<9 dies on focus to hidden element (#1486), may want to revisit a try/catch.
				try {
					if ( ontype && elem[ type ] ) {
						// Don't re-trigger an onFOO event when we call its FOO() method
						old = elem[ ontype ];

						if ( old ) {
							elem[ ontype ] = null;
						}

						jQuery.event.triggered = type;
						elem[ type ]();
					}
				} catch ( ieError ) {}

				if ( old ) {
					elem[ ontype ] = old;
				}

				jQuery.event.triggered = undefined;
			}
		}
		
		return event.result;
	},

	handle: function( event ) {
		event = jQuery.event.fix( event || window.event );
		// Snapshot the handlers list since a called handler may add/remove events.
		var handlers = ((jQuery._data( this, "events" ) || {})[ event.type ] || []).slice(0),
			run_all = !event.exclusive && !event.namespace,
			args = Array.prototype.slice.call( arguments, 0 );

		// Use the fix-ed Event rather than the (read-only) native event
		args[0] = event;
		event.currentTarget = this;

		for ( var j = 0, l = handlers.length; j < l; j++ ) {
			var handleObj = handlers[ j ];

			// Triggered event must 1) be non-exclusive and have no namespace, or
			// 2) have namespace(s) a subset or equal to those in the bound event.
			if ( run_all || event.namespace_re.test( handleObj.namespace ) ) {
				// Pass in a reference to the handler function itself
				// So that we can later remove it
				event.handler = handleObj.handler;
				event.data = handleObj.data;
				event.handleObj = handleObj;

				var ret = handleObj.handler.apply( this, args );

				if ( ret !== undefined ) {
					event.result = ret;
					if ( ret === false ) {
						event.preventDefault();
						event.stopPropagation();
					}
				}

				if ( event.isImmediatePropagationStopped() ) {
					break;
				}
			}
		}
		return event.result;
	},

	props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// store a copy of the original event object
		// and "clone" to set read-only properties
		var originalEvent = event;
		event = jQuery.Event( originalEvent );

		for ( var i = this.props.length, prop; i; ) {
			prop = this.props[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary
		if ( !event.target ) {
			// Fixes #1925 where srcElement might not be defined either
			event.target = event.srcElement || document;
		}

		// check if target is a textnode (safari)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Add relatedTarget, if necessary
		if ( !event.relatedTarget && event.fromElement ) {
			event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
		}

		// Calculate pageX/Y if missing and clientX/Y available
		if ( event.pageX == null && event.clientX != null ) {
			var eventDocument = event.target.ownerDocument || document,
				doc = eventDocument.documentElement,
				body = eventDocument.body;

			event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
			event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
		}

		// Add which for key events
		if ( event.which == null && (event.charCode != null || event.keyCode != null) ) {
			event.which = event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
		if ( !event.metaKey && event.ctrlKey ) {
			event.metaKey = event.ctrlKey;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		// Note: button is not normalized, so don't use it
		if ( !event.which && event.button !== undefined ) {
			event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
		}

		return event;
	},

	// Deprecated, use jQuery.guid instead
	guid: 1E8,

	// Deprecated, use jQuery.proxy instead
	proxy: jQuery.proxy,

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: jQuery.bindReady,
			teardown: jQuery.noop
		},

		live: {
			add: function( handleObj ) {
				jQuery.event.add( this,
					liveConvert( handleObj.origType, handleObj.selector ),
					jQuery.extend({}, handleObj, {handler: liveHandler, guid: handleObj.handler.guid}) );
			},

			remove: function( handleObj ) {
				jQuery.event.remove( this, liveConvert( handleObj.origType, handleObj.selector ), handleObj );
			}
		},

		beforeunload: {
			setup: function( data, namespaces, eventHandle ) {
				// We only want to do this special case on windows
				if ( jQuery.isWindow( this ) ) {
					this.onbeforeunload = eventHandle;
				}
			},

			teardown: function( namespaces, eventHandle ) {
				if ( this.onbeforeunload === eventHandle ) {
					this.onbeforeunload = null;
				}
			}
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		if ( elem.detachEvent ) {
			elem.detachEvent( "on" + type, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !this.preventDefault ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// timeStamp is buggy for some events on Firefox(#3843)
	// So we won't rely on the native value
	this.timeStamp = jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

function returnFalse() {
	return false;
}
function returnTrue() {
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}

		// if preventDefault exists run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// otherwise set the returnValue property of the original event to false (IE)
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		// if stopPropagation exists run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};

// Checks if an event happened on an element within another element
// Used in jQuery.event.special.mouseenter and mouseleave handlers
var withinElement = function( event ) {

	// Check if mouse(over|out) are still within the same parent element
	var related = event.relatedTarget,
		inside = false,
		eventType = event.type;

	event.type = event.data;

	if ( related !== this ) {

		if ( related ) {
			inside = jQuery.contains( this, related );
		}

		if ( !inside ) {

			jQuery.event.handle.apply( this, arguments );

			event.type = eventType;
		}
	}
},

// In case of event delegation, we only need to rename the event.type,
// liveHandler will take care of the rest.
delegate = function( event ) {
	event.type = event.data;
	jQuery.event.handle.apply( this, arguments );
};

// Create mouseenter and mouseleave events
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		setup: function( data ) {
			jQuery.event.add( this, fix, data && data.selector ? delegate : withinElement, orig );
		},
		teardown: function( data ) {
			jQuery.event.remove( this, fix, data && data.selector ? delegate : withinElement );
		}
	};
});

// submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function( data, namespaces ) {
			if ( !jQuery.nodeName( this, "form" ) ) {
				jQuery.event.add(this, "click.specialSubmit", function( e ) {
					// Avoid triggering error on non-existent type attribute in IE VML (#7071)
					var elem = e.target,
						type = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.type : "";

					if ( (type === "submit" || type === "image") && jQuery( elem ).closest("form").length ) {
						trigger( "submit", this, arguments );
					}
				});

				jQuery.event.add(this, "keypress.specialSubmit", function( e ) {
					var elem = e.target,
						type = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.type : "";

					if ( (type === "text" || type === "password") && jQuery( elem ).closest("form").length && e.keyCode === 13 ) {
						trigger( "submit", this, arguments );
					}
				});

			} else {
				return false;
			}
		},

		teardown: function( namespaces ) {
			jQuery.event.remove( this, ".specialSubmit" );
		}
	};

}

// change delegation, happens here so we have bind.
if ( !jQuery.support.changeBubbles ) {

	var changeFilters,

	getVal = function( elem ) {
		var type = jQuery.nodeName( elem, "input" ) ? elem.type : "",
			val = elem.value;

		if ( type === "radio" || type === "checkbox" ) {
			val = elem.checked;

		} else if ( type === "select-multiple" ) {
			val = elem.selectedIndex > -1 ?
				jQuery.map( elem.options, function( elem ) {
					return elem.selected;
				}).join("-") :
				"";

		} else if ( jQuery.nodeName( elem, "select" ) ) {
			val = elem.selectedIndex;
		}

		return val;
	},

	testChange = function testChange( e ) {
		var elem = e.target, data, val;

		if ( !rformElems.test( elem.nodeName ) || elem.readOnly ) {
			return;
		}

		data = jQuery._data( elem, "_change_data" );
		val = getVal(elem);

		// the current data will be also retrieved by beforeactivate
		if ( e.type !== "focusout" || elem.type !== "radio" ) {
			jQuery._data( elem, "_change_data", val );
		}

		if ( data === undefined || val === data ) {
			return;
		}

		if ( data != null || val ) {
			e.type = "change";
			e.liveFired = undefined;
			jQuery.event.trigger( e, arguments[1], elem );
		}
	};

	jQuery.event.special.change = {
		filters: {
			focusout: testChange,

			beforedeactivate: testChange,

			click: function( e ) {
				var elem = e.target, type = jQuery.nodeName( elem, "input" ) ? elem.type : "";

				if ( type === "radio" || type === "checkbox" || jQuery.nodeName( elem, "select" ) ) {
					testChange.call( this, e );
				}
			},

			// Change has to be called before submit
			// Keydown will be called before keypress, which is used in submit-event delegation
			keydown: function( e ) {
				var elem = e.target, type = jQuery.nodeName( elem, "input" ) ? elem.type : "";

				if ( (e.keyCode === 13 && !jQuery.nodeName( elem, "textarea" ) ) ||
					(e.keyCode === 32 && (type === "checkbox" || type === "radio")) ||
					type === "select-multiple" ) {
					testChange.call( this, e );
				}
			},

			// Beforeactivate happens also before the previous element is blurred
			// with this event you can't trigger a change event, but you can store
			// information
			beforeactivate: function( e ) {
				var elem = e.target;
				jQuery._data( elem, "_change_data", getVal(elem) );
			}
		},

		setup: function( data, namespaces ) {
			if ( this.type === "file" ) {
				return false;
			}

			for ( var type in changeFilters ) {
				jQuery.event.add( this, type + ".specialChange", changeFilters[type] );
			}

			return rformElems.test( this.nodeName );
		},

		teardown: function( namespaces ) {
			jQuery.event.remove( this, ".specialChange" );

			return rformElems.test( this.nodeName );
		}
	};

	changeFilters = jQuery.event.special.change.filters;

	// Handle when the input is .focus()'d
	changeFilters.focus = changeFilters.beforeactivate;
}

function trigger( type, elem, args ) {
	// Piggyback on a donor event to simulate a different one.
	// Fake originalEvent to avoid donor's stopPropagation, but if the
	// simulated event prevents default then we do the same on the donor.
	// Don't pass args or remember liveFired; they apply to the donor event.
	var event = jQuery.extend( {}, args[ 0 ] );
	event.type = type;
	event.originalEvent = {};
	event.liveFired = undefined;
	jQuery.event.handle.call( elem, event );
	if ( event.isDefaultPrevented() ) {
		args[ 0 ].preventDefault();
	}
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0;

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};

		function handler( donor ) {
			// Donor event is always a native one; fix it and switch its type.
			// Let focusin/out handler cancel the donor focus/blur event.
			var e = jQuery.event.fix( donor );
			e.type = fix;
			e.originalEvent = {};
			jQuery.event.trigger( e, null, e.target );
			if ( e.isDefaultPrevented() ) {
				donor.preventDefault();
			}
		}
	});
}

jQuery.each(["bind", "one"], function( i, name ) {
	jQuery.fn[ name ] = function( type, data, fn ) {
		var handler;

		// Handle object literals
		if ( typeof type === "object" ) {
			for ( var key in type ) {
				this[ name ](key, data, type[key], fn);
			}
			return this;
		}

		if ( arguments.length === 2 || data === false ) {
			fn = data;
			data = undefined;
		}

		if ( name === "one" ) {
			handler = function( event ) {
				jQuery( this ).unbind( event, handler );
				return fn.apply( this, arguments );
			};
			handler.guid = fn.guid || jQuery.guid++;
		} else {
			handler = fn;
		}

		if ( type === "unload" && name !== "one" ) {
			this.one( type, data, fn );

		} else {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				jQuery.event.add( this[i], type, handler, data );
			}
		}

		return this;
	};
});

jQuery.fn.extend({
	unbind: function( type, fn ) {
		// Handle object literals
		if ( typeof type === "object" && !type.preventDefault ) {
			for ( var key in type ) {
				this.unbind(key, type[key]);
			}

		} else {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				jQuery.event.remove( this[i], type, fn );
			}
		}

		return this;
	},

	delegate: function( selector, types, data, fn ) {
		return this.live( types, data, fn, selector );
	},

	undelegate: function( selector, types, fn ) {
		if ( arguments.length === 0 ) {
			return this.unbind( "live" );

		} else {
			return this.die( types, null, fn, selector );
		}
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},

	triggerHandler: function( type, data ) {
		if ( this[0] ) {
			return jQuery.event.trigger( type, data, this[0], true );
		}
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments,
			guid = fn.guid || jQuery.guid++,
			i = 0,
			toggler = function( event ) {
				// Figure out which function to execute
				var lastToggle = ( jQuery.data( this, "lastToggle" + fn.guid ) || 0 ) % i;
				jQuery.data( this, "lastToggle" + fn.guid, lastToggle + 1 );

				// Make sure that clicks stop
				event.preventDefault();

				// and execute the function
				return args[ lastToggle ].apply( this, arguments ) || false;
			};

		// link all the functions, so any of them can unbind this click handler
		toggler.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}

		return this.click( toggler );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});

var liveMap = {
	focus: "focusin",
	blur: "focusout",
	mouseenter: "mouseover",
	mouseleave: "mouseout"
};

jQuery.each(["live", "die"], function( i, name ) {
	jQuery.fn[ name ] = function( types, data, fn, origSelector /* Internal Use Only */ ) {
		var type, i = 0, match, namespaces, preType,
			selector = origSelector || this.selector,
			context = origSelector ? this : jQuery( this.context );

		if ( typeof types === "object" && !types.preventDefault ) {
			for ( var key in types ) {
				context[ name ]( key, data, types[key], selector );
			}

			return this;
		}

		if ( name === "die" && !types &&
					origSelector && origSelector.charAt(0) === "." ) {

			context.unbind( origSelector );

			return this;
		}

		if ( data === false || jQuery.isFunction( data ) ) {
			fn = data || returnFalse;
			data = undefined;
		}

		types = (types || "").split(" ");

		while ( (type = types[ i++ ]) != null ) {
			match = rnamespaces.exec( type );
			namespaces = "";

			if ( match )  {
				namespaces = match[0];
				type = type.replace( rnamespaces, "" );
			}

			if ( type === "hover" ) {
				types.push( "mouseenter" + namespaces, "mouseleave" + namespaces );
				continue;
			}

			preType = type;

			if ( liveMap[ type ] ) {
				types.push( liveMap[ type ] + namespaces );
				type = type + namespaces;

			} else {
				type = (liveMap[ type ] || type) + namespaces;
			}

			if ( name === "live" ) {
				// bind live handler
				for ( var j = 0, l = context.length; j < l; j++ ) {
					jQuery.event.add( context[j], "live." + liveConvert( type, selector ),
						{ data: data, selector: selector, handler: fn, origType: type, origHandler: fn, preType: preType } );
				}

			} else {
				// unbind live handler
				context.unbind( "live." + liveConvert( type, selector ), fn );
			}
		}

		return this;
	};
});

function liveHandler( event ) {
	var stop, maxLevel, related, match, handleObj, elem, j, i, l, data, close, namespace, ret,
		elems = [],
		selectors = [],
		events = jQuery._data( this, "events" );

	// Make sure we avoid non-left-click bubbling in Firefox (#3861) and disabled elements in IE (#6911)
	if ( event.liveFired === this || !events || !events.live || event.target.disabled || event.button && event.type === "click" ) {
		return;
	}

	if ( event.namespace ) {
		namespace = new RegExp("(^|\\.)" + event.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)");
	}

	event.liveFired = this;

	var live = events.live.slice(0);

	for ( j = 0; j < live.length; j++ ) {
		handleObj = live[j];

		if ( handleObj.origType.replace( rnamespaces, "" ) === event.type ) {
			selectors.push( handleObj.selector );

		} else {
			live.splice( j--, 1 );
		}
	}

	match = jQuery( event.target ).closest( selectors, event.currentTarget );

	for ( i = 0, l = match.length; i < l; i++ ) {
		close = match[i];

		for ( j = 0; j < live.length; j++ ) {
			handleObj = live[j];

			if ( close.selector === handleObj.selector && (!namespace || namespace.test( handleObj.namespace )) && !close.elem.disabled ) {
				elem = close.elem;
				related = null;

				// Those two events require additional checking
				if ( handleObj.preType === "mouseenter" || handleObj.preType === "mouseleave" ) {
					event.type = handleObj.preType;
					related = jQuery( event.relatedTarget ).closest( handleObj.selector )[0];

					// Make sure not to accidentally match a child element with the same selector
					if ( related && jQuery.contains( elem, related ) ) {
						related = elem;
					}
				}

				if ( !related || related !== elem ) {
					elems.push({ elem: elem, handleObj: handleObj, level: close.level });
				}
			}
		}
	}

	for ( i = 0, l = elems.length; i < l; i++ ) {
		match = elems[i];

		if ( maxLevel && match.level > maxLevel ) {
			break;
		}

		event.currentTarget = match.elem;
		event.data = match.handleObj.data;
		event.handleObj = match.handleObj;

		ret = match.handleObj.origHandler.apply( match.elem, arguments );

		if ( ret === false || event.isPropagationStopped() ) {
			maxLevel = match.level;

			if ( ret === false ) {
				stop = false;
			}
			if ( event.isImmediatePropagationStopped() ) {
				break;
			}
		}
	}

	return stop;
}

function liveConvert( type, selector ) {
	return (type && type !== "*" ? type + "." : "") + selector.replace(rperiod, "`").replace(rspaces, "&");
}

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		if ( fn == null ) {
			fn = data;
			data = null;
		}

		return arguments.length > 0 ?
			this.bind( name, data, fn ) :
			this.trigger( name );
	};

	if ( jQuery.attrFn ) {
		jQuery.attrFn[ name ] = true;
	}
});



/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;
	
	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];
		
			parts.push( m[1] );
		
			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}
				
				set = posProcess( selector, set );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var match,
			type = Expr.order[i];
		
		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				var found, item,
					filter = Expr.filter[ type ],
					left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw "Syntax error, unrecognized expression: " + msg;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},
	
	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},
		
		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}
			
			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc) 
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" && "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
		},

		file: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
		},

		password: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
		},

		submit: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "submit" === elem.type;
		},

		image: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
		},

		reset: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "reset" === elem.type;
		},

		button: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && "button" === elem.type || name === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		},

		focus: function( elem ) {
			return elem === elem.ownerDocument.activeElement;
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || Sizzle.getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}

					if ( type === "first" ) { 
						return true; 
					}

					node = elem;

				case "last":
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}

					return true;

				case "nth":
					var first = match[2],
						last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}
					
					var doneName = match[0],
						parent = elem.parentNode;
	
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						} 

						parent.sizcache = doneName;
					}
					
					var diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
		},
		
		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Fallback to using sourceIndex (in IE) if it's available on both nodes
		} else if ( a.sourceIndex && b.sourceIndex ) {
			return a.sourceIndex - b.sourceIndex;
		}

		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// If the nodes are siblings (or identical) we can do a quick check
		if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;
		}

		var cur = a.nextSibling;

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Utility function for retreiving the text value of an array of DOM nodes
Sizzle.getText = function( elems ) {
	var ret = "", elem;

	for ( var i = 0; elems[i]; i++ ) {
		elem = elems[i];

		// Get the text from text nodes and CDATA nodes
		if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
			ret += elem.nodeValue;

		// Traverse everything else, except comment nodes
		} else if ( elem.nodeType !== 8 ) {
			ret += Sizzle.getText( elem.childNodes );
		}
	}

	return ret;
};

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}
	
		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );
				
				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );
					
					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}
				
				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );
						
					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}
							
						} else {
							return makeArray( [], extra );
						}
					}
					
					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}
		
			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );
	
		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try { 
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}
	
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;
			
			elem = elem[dir];

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833) 
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})();


var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
	// Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector = /,/,
	isSimple = /^.[^:#\[\.,]*$/,
	slice = Array.prototype.slice,
	POS = jQuery.expr.match.POS,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var self = this,
			i, l;

		if ( typeof selector !== "string" ) {
			return jQuery( selector ).filter(function() {
				for ( i = 0, l = self.length; i < l; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			});
		}

		var ret = this.pushStack( "", "find", selector ),
			length, n, r;

		for ( i = 0, l = this.length; i < l; i++ ) {
			length = ret.length;
			jQuery.find( selector, this[i], ret );

			if ( i > 0 ) {
				// Make sure that the results are unique
				for ( n = length; n < ret.length; n++ ) {
					for ( r = 0; r < length; r++ ) {
						if ( ret[r] === ret[n] ) {
							ret.splice(n--, 1);
							break;
						}
					}
				}
			}
		}

		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target );
		return this.filter(function() {
			for ( var i = 0, l = targets.length; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false), "not", selector);
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true), "filter", selector );
	},

	is: function( selector ) {
		return !!selector && ( typeof selector === "string" ?
			jQuery.filter( selector, this ).length > 0 :
			this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var ret = [], i, l, cur = this[0];
		
		// Array
		if ( jQuery.isArray( selectors ) ) {
			var match, selector,
				matches = {},
				level = 1;

			if ( cur && selectors.length ) {
				for ( i = 0, l = selectors.length; i < l; i++ ) {
					selector = selectors[i];

					if ( !matches[ selector ] ) {
						matches[ selector ] = POS.test( selector ) ?
							jQuery( selector, context || this.context ) :
							selector;
					}
				}

				while ( cur && cur.ownerDocument && cur !== context ) {
					for ( selector in matches ) {
						match = matches[ selector ];

						if ( match.jquery ? match.index( cur ) > -1 : jQuery( cur ).is( match ) ) {
							ret.push({ selector: selector, elem: cur, level: level });
						}
					}

					cur = cur.parentNode;
					level++;
				}
			}

			return ret;
		}

		// String
		var pos = POS.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( i = 0, l = this.length; i < l; i++ ) {
			cur = this[i];

			while ( cur ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;

				} else {
					cur = cur.parentNode;
					if ( !cur || !cur.ownerDocument || cur === context || cur.nodeType === 11 ) {
						break;
					}
				}
			}
		}

		ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

		return this.pushStack( ret, "closest", selectors );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
			all :
			jQuery.unique( all ) );
	},

	andSelf: function() {
		return this.add( this.prevObject );
	}
});

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
	return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return jQuery.nth( elem, 2, "nextSibling" );
	},
	prev: function( elem ) {
		return jQuery.nth( elem, 2, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( elem.parentNode.firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray( elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until ),
			// The variable 'args' was introduced in
			// https://github.com/jquery/jquery/commit/52a0238
			// to work around a bug in Chrome 10 (Dev) and should be removed when the bug is fixed.
			// http://code.google.com/p/v8/issues/detail?id=1050
			args = slice.call(arguments);

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( (this.length > 1 || rmultiselector.test( selector )) && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret, name, args.join(",") );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	nth: function( cur, result, dir, elem ) {
		result = result || 1;
		var num = 0;

		for ( ; cur; cur = cur[dir] ) {
			if ( cur.nodeType === 1 && ++num === result ) {
				break;
			}
		}

		return cur;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem, i ) {
			return (elem === qualifier) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem, i ) {
		return (jQuery.inArray( elem, qualifier ) >= 0) === keep;
	});
}




var rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnocache = /<(?:script|object|embed|option|style)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /\/(java|ecma)script/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)/,
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area: [ 1, "<map>", "</map>" ],
		_default: [ 0, "", "" ]
	};

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE can't serialize <link> and <script> tags normally
if ( !jQuery.support.htmlSerialize ) {
	wrapMap._default = [ 1, "div<div>", "</div>" ];
}

jQuery.fn.extend({
	text: function( text ) {
		if ( jQuery.isFunction(text) ) {
			return this.each(function(i) {
				var self = jQuery( this );

				self.text( text.call(this, i, self.text()) );
			});
		}

		if ( typeof text !== "object" && text !== undefined ) {
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );
		}

		return jQuery.text( this );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		return this.each(function() {
			jQuery( this ).wrapAll( html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this );
			});
		} else if ( arguments.length ) {
			var set = jQuery(arguments[0]);
			set.push.apply( set, this.toArray() );
			return this.pushStack( set, "before", arguments );
		}
	},

	after: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			});
		} else if ( arguments.length ) {
			var set = this.pushStack( this, "after", arguments );
			set.push.apply( set, jQuery(arguments[0]).toArray() );
			return set;
		}
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( elem.getElementsByTagName("*") );
					jQuery.cleanData( [ elem ] );
				}

				if ( elem.parentNode ) {
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( elem.getElementsByTagName("*") );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		if ( value === undefined ) {
			return this[0] && this[0].nodeType === 1 ?
				this[0].innerHTML.replace(rinlinejQuery, "") :
				null;

		// See if we can take a shortcut and just use innerHTML
		} else if ( typeof value === "string" && !rnocache.test( value ) &&
			(jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value )) &&
			!wrapMap[ (rtagName.exec( value ) || ["", ""])[1].toLowerCase() ] ) {

			value = value.replace(rxhtmlTag, "<$1></$2>");

			try {
				for ( var i = 0, l = this.length; i < l; i++ ) {
					// Remove element nodes and prevent memory leaks
					if ( this[i].nodeType === 1 ) {
						jQuery.cleanData( this[i].getElementsByTagName("*") );
						this[i].innerHTML = value;
					}
				}

			// If using innerHTML throws an exception, use the fallback method
			} catch(e) {
				this.empty().append( value );
			}

		} else if ( jQuery.isFunction( value ) ) {
			this.each(function(i){
				var self = jQuery( this );

				self.html( value.call(this, i, self.html()) );
			});

		} else {
			this.empty().append( value );
		}

		return this;
	},

	replaceWith: function( value ) {
		if ( this[0] && this[0].parentNode ) {
			// Make sure that the elements are removed from the DOM before they are inserted
			// this can help fix replacing a parent with child elements
			if ( jQuery.isFunction( value ) ) {
				return this.each(function(i) {
					var self = jQuery(this), old = self.html();
					self.replaceWith( value.call( this, i, old ) );
				});
			}

			if ( typeof value !== "string" ) {
				value = jQuery( value ).detach();
			}

			return this.each(function() {
				var next = this.nextSibling,
					parent = this.parentNode;

				jQuery( this ).remove();

				if ( next ) {
					jQuery(next).before( value );
				} else {
					jQuery(parent).append( value );
				}
			});
		} else {
			return this.length ?
				this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
				this;
		}
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {
		var results, first, fragment, parent,
			value = args[0],
			scripts = [];

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( !jQuery.support.checkClone && arguments.length === 3 && typeof value === "string" && rchecked.test( value ) ) {
			return this.each(function() {
				jQuery(this).domManip( args, table, callback, true );
			});
		}

		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				args[0] = value.call(this, i, table ? self.html() : undefined);
				self.domManip( args, table, callback );
			});
		}

		if ( this[0] ) {
			parent = value && value.parentNode;

			// If we're in a fragment, just use that instead of building a new one
			if ( jQuery.support.parentNode && parent && parent.nodeType === 11 && parent.childNodes.length === this.length ) {
				results = { fragment: parent };

			} else {
				results = jQuery.buildFragment( args, this, scripts );
			}

			fragment = results.fragment;

			if ( fragment.childNodes.length === 1 ) {
				first = fragment = fragment.firstChild;
			} else {
				first = fragment.firstChild;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );

				for ( var i = 0, l = this.length, lastIndex = l - 1; i < l; i++ ) {
					callback.call(
						table ?
							root(this[i], first) :
							this[i],
						// Make sure that we do not leak memory by inadvertently discarding
						// the original fragment (which might have attached data) instead of
						// using it; in addition, use the original fragment object for the last
						// item instead of first because it can end up being emptied incorrectly
						// in certain situations (Bug #8070).
						// Fragments from the fragment cache must always be cloned and never used
						// in place.
						results.cacheable || (l > 1 && i < lastIndex) ?
							jQuery.clone( fragment, true, true ) :
							fragment
					);
				}
			}

			if ( scripts.length ) {
				jQuery.each( scripts, evalScript );
			}
		}

		return this;
	}
});

function root( elem, cur ) {
	return jQuery.nodeName(elem, "table") ?
		(elem.getElementsByTagName("tbody")[0] ||
		elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
		elem;
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var internalKey = jQuery.expando,
		oldData = jQuery.data( src ),
		curData = jQuery.data( dest, oldData );

	// Switch to use the internal data object, if it exists, for the next
	// stage of data copying
	if ( (oldData = oldData[ internalKey ]) ) {
		var events = oldData.events;
				curData = curData[ internalKey ] = jQuery.extend({}, oldData);

		if ( events ) {
			delete curData.handle;
			curData.events = {};

			for ( var type in events ) {
				for ( var i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type + ( events[ type ][ i ].namespace ? "." : "" ) + events[ type ][ i ].namespace, events[ type ][ i ], events[ type ][ i ].data );
				}
			}
		}
	}
}

function cloneFixAttributes( src, dest ) {
	var nodeName;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	// clearAttributes removes the attributes, which we don't want,
	// but also removes the attachEvent events, which we *do* want
	if ( dest.clearAttributes ) {
		dest.clearAttributes();
	}

	// mergeAttributes, in contrast, only merges back on the
	// original attributes, not the events
	if ( dest.mergeAttributes ) {
		dest.mergeAttributes( src );
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 fail to clone children inside object elements that use
	// the proprietary classid attribute value (rather than the type
	// attribute) to identify the type of content to display
	if ( nodeName === "object" ) {
		dest.outerHTML = src.outerHTML;

	} else if ( nodeName === "input" && (src.type === "checkbox" || src.type === "radio") ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set
		if ( src.checked ) {
			dest.defaultChecked = dest.checked = src.checked;
		}

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}

	// Event data gets referenced instead of copied if the expando
	// gets copied too
	dest.removeAttribute( jQuery.expando );
}

jQuery.buildFragment = function( args, nodes, scripts ) {
	var fragment, cacheable, cacheresults, doc;

  // nodes may contain either an explicit document object,
  // a jQuery collection or context object.
  // If nodes[0] contains a valid object to assign to doc
  if ( nodes && nodes[0] ) {
    doc = nodes[0].ownerDocument || nodes[0];
  }

  // Ensure that an attr object doesn't incorrectly stand in as a document object
	// Chrome and Firefox seem to allow this to occur and will throw exception
	// Fixes #8950
	if ( !doc.createDocumentFragment ) {
		doc = document;
	}

	// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
	// Cloning options loses the selected state, so don't cache them
	// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
	// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
	if ( args.length === 1 && typeof args[0] === "string" && args[0].length < 512 && doc === document &&
		args[0].charAt(0) === "<" && !rnocache.test( args[0] ) && (jQuery.support.checkClone || !rchecked.test( args[0] )) ) {

		cacheable = true;

		cacheresults = jQuery.fragments[ args[0] ];
		if ( cacheresults && cacheresults !== 1 ) {
			fragment = cacheresults;
		}
	}

	if ( !fragment ) {
		fragment = doc.createDocumentFragment();
		jQuery.clean( args, doc, fragment, scripts );
	}

	if ( cacheable ) {
		jQuery.fragments[ args[0] ] = cacheresults ? fragment : 1;
	}

	return { fragment: fragment, cacheable: cacheable };
};

jQuery.fragments = {};

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var ret = [],
			insert = jQuery( selector ),
			parent = this.length === 1 && this[0].parentNode;

		if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
			insert[ original ]( this[0] );
			return this;

		} else {
			for ( var i = 0, l = insert.length; i < l; i++ ) {
				var elems = (i > 0 ? this.clone(true) : this).get();
				jQuery( insert[i] )[ original ]( elems );
				ret = ret.concat( elems );
			}

			return this.pushStack( ret, name, insert.selector );
		}
	};
});

function getAll( elem ) {
	if ( "getElementsByTagName" in elem ) {
		return elem.getElementsByTagName( "*" );

	} else if ( "querySelectorAll" in elem ) {
		return elem.querySelectorAll( "*" );

	} else {
		return [];
	}
}

// Used in clean, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( elem.type === "checkbox" || elem.type === "radio" ) {
		elem.defaultChecked = elem.checked;
	}
}
// Finds all inputs and passes them to fixDefaultChecked
function findInputs( elem ) {
	if ( jQuery.nodeName( elem, "input" ) ) {
		fixDefaultChecked( elem );
	} else if ( "getElementsByTagName" in elem ) {
		jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var clone = elem.cloneNode(true),
				srcElements,
				destElements,
				i;

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
			// IE copies events bound via attachEvent when using cloneNode.
			// Calling detachEvent on the clone will also remove the events
			// from the original. In order to get around this, we use some
			// proprietary methods to clear the events. Thanks to MooTools
			// guys for this hotness.

			cloneFixAttributes( elem, clone );

			// Using Sizzle here is crazy slow, so we use getElementsByTagName
			// instead
			srcElements = getAll( elem );
			destElements = getAll( clone );

			// Weird iteration because IE will replace the length property
			// with an element if you are cloning the body and one of the
			// elements on the page has a name or id of "length"
			for ( i = 0; srcElements[i]; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					cloneFixAttributes( srcElements[i], destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			cloneCopyEvent( elem, clone );

			if ( deepDataAndEvents ) {
				srcElements = getAll( elem );
				destElements = getAll( clone );

				for ( i = 0; srcElements[i]; ++i ) {
					cloneCopyEvent( srcElements[i], destElements[i] );
				}
			}
		}

		srcElements = destElements = null;

		// Return the cloned set
		return clone;
	},

	clean: function( elems, context, fragment, scripts ) {
		var checkScriptType;

		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" ) {
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		}

		var ret = [], j;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( typeof elem === "number" ) {
				elem += "";
			}

			if ( !elem ) {
				continue;
			}

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				if ( !rhtml.test( elem ) ) {
					elem = context.createTextNode( elem );
				} else {
					// Fix "XHTML"-style tags in all browsers
					elem = elem.replace(rxhtmlTag, "<$1></$2>");

					// Trim whitespace, otherwise indexOf won't work as expected
					var tag = (rtagName.exec( elem ) || ["", ""])[1].toLowerCase(),
						wrap = wrapMap[ tag ] || wrapMap._default,
						depth = wrap[0],
						div = context.createElement("div");

					// Go to html and back, then peel off extra wrappers
					div.innerHTML = wrap[1] + elem + wrap[2];

					// Move to the right depth
					while ( depth-- ) {
						div = div.lastChild;
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						var hasBody = rtbody.test(elem),
							tbody = tag === "table" && !hasBody ?
								div.firstChild && div.firstChild.childNodes :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !hasBody ?
									div.childNodes :
									[];

						for ( j = tbody.length - 1; j >= 0 ; --j ) {
							if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
								tbody[ j ].parentNode.removeChild( tbody[ j ] );
							}
						}
					}

					// IE completely kills leading whitespace when innerHTML is used
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
					}

					elem = div.childNodes;
				}
			}

			// Resets defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			var len;
			if ( !jQuery.support.appendChecked ) {
				if ( elem[0] && typeof (len = elem.length) === "number" ) {
					for ( j = 0; j < len; j++ ) {
						findInputs( elem[j] );
					}
				} else {
					findInputs( elem );
				}
			}

			if ( elem.nodeType ) {
				ret.push( elem );
			} else {
				ret = jQuery.merge( ret, elem );
			}
		}

		if ( fragment ) {
			checkScriptType = function( elem ) {
				return !elem.type || rscriptType.test( elem.type );
			};
			for ( i = 0; ret[i]; i++ ) {
				if ( scripts && jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );

				} else {
					if ( ret[i].nodeType === 1 ) {
						var jsTags = jQuery.grep( ret[i].getElementsByTagName( "script" ), checkScriptType );

						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
					}
					fragment.appendChild( ret[i] );
				}
			}
		}

		return ret;
	},

	cleanData: function( elems ) {
		var data, id, cache = jQuery.cache, internalKey = jQuery.expando, special = jQuery.event.special,
			deleteExpando = jQuery.support.deleteExpando;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
				continue;
			}

			id = elem[ jQuery.expando ];

			if ( id ) {
				data = cache[ id ] && cache[ id ][ internalKey ];

				if ( data && data.events ) {
					for ( var type in data.events ) {
						if ( special[ type ] ) {
							jQuery.event.remove( elem, type );

						// This is a shortcut to avoid jQuery.event.remove's overhead
						} else {
							jQuery.removeEvent( elem, type, data.handle );
						}
					}

					// Null the DOM reference to avoid IE6/7/8 leak (#7054)
					if ( data.handle ) {
						data.handle.elem = null;
					}
				}

				if ( deleteExpando ) {
					delete elem[ jQuery.expando ];

				} else if ( elem.removeAttribute ) {
					elem.removeAttribute( jQuery.expando );
				}

				delete cache[ id ];
			}
		}
	}
});

function evalScript( i, elem ) {
	if ( elem.src ) {
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});
	} else {
		jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "/*$0*/" ) );
	}

	if ( elem.parentNode ) {
		elem.parentNode.removeChild( elem );
	}
}




var ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
	// fixed for IE9, see #8346
	rupper = /([A-Z]|^ms)/g,
	rnumpx = /^-?\d+(?:px)?$/i,
	rnum = /^-?\d/,
	rrelNum = /^([\-+])=([\-+.\de]+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssWidth = [ "Left", "Right" ],
	cssHeight = [ "Top", "Bottom" ],
	curCSS,

	getComputedStyle,
	currentStyle;

jQuery.fn.css = function( name, value ) {
	// Setting 'undefined' is a no-op
	if ( arguments.length === 2 && value === undefined ) {
		return this;
	}

	return jQuery.access( this, name, value, true, function( elem, name, value ) {
		return value !== undefined ?
			jQuery.style( elem, name, value ) :
			jQuery.css( elem, name );
	});
};

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity", "opacity" );
					return ret === "" ? "1" : ret;

				} else {
					return elem.style.opacity;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, origName = jQuery.camelCase( name ),
			style = elem.style, hooks = jQuery.cssHooks[ origName ];

		name = jQuery.cssProps[ origName ] || origName;

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( +( ret[1] + 1) * +ret[2] ) + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value )) !== undefined ) {
				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra ) {
		var ret, hooks;

		// Make sure that we're working with the right name
		name = jQuery.camelCase( name );
		hooks = jQuery.cssHooks[ name ];
		name = jQuery.cssProps[ name ] || name;

		// cssFloat needs a special treatment
		if ( name === "cssFloat" ) {
			name = "float";
		}

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks && (ret = hooks.get( elem, true, extra )) !== undefined ) {
			return ret;

		// Otherwise, if a way to get the computed value exists, use that
		} else if ( curCSS ) {
			return curCSS( elem, name );
		}
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {};

		// Remember the old values, and insert the new ones
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	}
});

// DEPRECATED, Use jQuery.css() instead
jQuery.curCSS = jQuery.css;

jQuery.each(["height", "width"], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			var val;

			if ( computed ) {
				if ( elem.offsetWidth !== 0 ) {
					return getWH( elem, name, extra );
				} else {
					jQuery.swap( elem, cssShow, function() {
						val = getWH( elem, name, extra );
					});
				}

				return val;
			}
		},

		set: function( elem, value ) {
			if ( rnumpx.test( value ) ) {
				// ignore negative width and height values #1599
				value = parseFloat( value );

				if ( value >= 0 ) {
					return value + "px";
				}

			} else {
				return value;
			}
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( parseFloat( RegExp.$1 ) / 100 ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNaN( value ) ? "" : "alpha(opacity=" + value * 100 + ")",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there there is no filter style applied in a css rule, we are done
				if ( currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery(function() {
	// This hook cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				var ret;
				jQuery.swap( elem, { "display": "inline-block" }, function() {
					if ( computed ) {
						ret = curCSS( elem, "margin-right", "marginRight" );
					} else {
						ret = elem.style.marginRight;
					}
				});
				return ret;
			}
		};
	}
});

if ( document.defaultView && document.defaultView.getComputedStyle ) {
	getComputedStyle = function( elem, name ) {
		var ret, defaultView, computedStyle;

		name = name.replace( rupper, "-$1" ).toLowerCase();

		if ( !(defaultView = elem.ownerDocument.defaultView) ) {
			return undefined;
		}

		if ( (computedStyle = defaultView.getComputedStyle( elem, null )) ) {
			ret = computedStyle.getPropertyValue( name );
			if ( ret === "" && !jQuery.contains( elem.ownerDocument.documentElement, elem ) ) {
				ret = jQuery.style( elem, name );
			}
		}

		return ret;
	};
}

if ( document.documentElement.currentStyle ) {
	currentStyle = function( elem, name ) {
		var left,
			ret = elem.currentStyle && elem.currentStyle[ name ],
			rsLeft = elem.runtimeStyle && elem.runtimeStyle[ name ],
			style = elem.style;

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		if ( !rnumpx.test( ret ) && rnum.test( ret ) ) {
			// Remember the original values
			left = style.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				elem.runtimeStyle.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : (ret || 0);
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

curCSS = getComputedStyle || currentStyle;

function getWH( elem, name, extra ) {

	// Start with offset property
	var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		which = name === "width" ? cssWidth : cssHeight;

	if ( val > 0 ) {
		if ( extra !== "border" ) {
			jQuery.each( which, function() {
				if ( !extra ) {
					val -= parseFloat( jQuery.css( elem, "padding" + this ) ) || 0;
				}
				if ( extra === "margin" ) {
					val += parseFloat( jQuery.css( elem, extra + this ) ) || 0;
				} else {
					val -= parseFloat( jQuery.css( elem, "border" + this + "Width" ) ) || 0;
				}
			});
		}

		return val + "px";
	}

	// Fall back to computed then uncomputed css if necessary
	val = curCSS( elem, name, name );
	if ( val < 0 || val == null ) {
		val = elem.style[ name ] || 0;
	}
	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Add padding, border, margin
	if ( extra ) {
		jQuery.each( which, function() {
			val += parseFloat( jQuery.css( elem, "padding" + this ) ) || 0;
			if ( extra !== "padding" ) {
				val += parseFloat( jQuery.css( elem, "border" + this + "Width" ) ) || 0;
			}
			if ( extra === "margin" ) {
				val += parseFloat( jQuery.css( elem, extra + this ) ) || 0;
			}
		});
	}

	return val + "px";
}

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		var width = elem.offsetWidth,
			height = elem.offsetHeight;

		return (width === 0 && height === 0) || (!jQuery.support.reliableHiddenOffsets && (elem.style.display || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rhash = /#.*$/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rquery = /\?/,
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	rselectTextarea = /^(?:select|textarea)/i,
	rspacesAjax = /\s+/,
	rts = /([?&])_=[^&]*/,
	rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Document location
	ajaxLocation,

	// Document location segments
	ajaxLocParts,
	
	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		if ( jQuery.isFunction( func ) ) {
			var dataTypes = dataTypeExpression.toLowerCase().split( rspacesAjax ),
				i = 0,
				length = dataTypes.length,
				dataType,
				list,
				placeBefore;

			// For each dataType in the dataTypeExpression
			for(; i < length; i++ ) {
				dataType = dataTypes[ i ];
				// We control if we're asked to add before
				// any existing element
				placeBefore = /^\+/.test( dataType );
				if ( placeBefore ) {
					dataType = dataType.substr( 1 ) || "*";
				}
				list = structure[ dataType ] = structure[ dataType ] || [];
				// then we add to the structure accordingly
				list[ placeBefore ? "unshift" : "push" ]( func );
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
		dataType /* internal */, inspected /* internal */ ) {

	dataType = dataType || options.dataTypes[ 0 ];
	inspected = inspected || {};

	inspected[ dataType ] = true;

	var list = structure[ dataType ],
		i = 0,
		length = list ? list.length : 0,
		executeOnly = ( structure === prefilters ),
		selection;

	for(; i < length && ( executeOnly || !selection ); i++ ) {
		selection = list[ i ]( options, originalOptions, jqXHR );
		// If we got redirected to another dataType
		// we try there if executing only and not done already
		if ( typeof selection === "string" ) {
			if ( !executeOnly || inspected[ selection ] ) {
				selection = undefined;
			} else {
				options.dataTypes.unshift( selection );
				selection = inspectPrefiltersOrTransports(
						structure, options, originalOptions, jqXHR, selection, inspected );
			}
		}
	}
	// If we're only executing or nothing was selected
	// we try the catchall dataType if not done already
	if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
		selection = inspectPrefiltersOrTransports(
				structure, options, originalOptions, jqXHR, "*", inspected );
	}
	// unnecessary when only executing (prefilters)
	// but it'll be ignored by the caller in that case
	return selection;
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};
	for( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}
}

jQuery.fn.extend({
	load: function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );

		// Don't do a request if no elements are being requested
		} else if ( !this.length ) {
			return this;
		}

		var off = url.indexOf( " " );
		if ( off >= 0 ) {
			var selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params ) {
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = undefined;

			// Otherwise, build a param string
			} else if ( typeof params === "object" ) {
				params = jQuery.param( params, jQuery.ajaxSettings.traditional );
				type = "POST";
			}
		}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			// Complete callback (responseText is used internally)
			complete: function( jqXHR, status, responseText ) {
				// Store the response as specified by the jqXHR object
				responseText = jqXHR.responseText;
				// If successful, inject the HTML into all the matched elements
				if ( jqXHR.isResolved() ) {
					// #4825: Get the actual response in case
					// a dataFilter is present in ajaxSettings
					jqXHR.done(function( r ) {
						responseText = r;
					});
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div>")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(responseText.replace(rscript, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						responseText );
				}

				if ( callback ) {
					self.each( callback, [ responseText, status, jqXHR ] );
				}
			}
		});

		return this;
	},

	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},

	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray( this.elements ) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				( this.checked || rselectTextarea.test( this.nodeName ) ||
					rinput.test( this.type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val, i ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
	jQuery.fn[ o ] = function( f ){
		return this.bind( o, f );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			type: method,
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	};
});

jQuery.extend({

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		if ( settings ) {
			// Building a settings object
			ajaxExtend( target, jQuery.ajaxSettings );
		} else {
			// Extending ajaxSettings
			settings = target;
			target = jQuery.ajaxSettings;
		}
		ajaxExtend( target, settings );
		return target;
	},

	ajaxSettings: {
		url: ajaxLocation,
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		traditional: false,
		headers: {},
		*/

		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			text: "text/plain",
			json: "application/json, text/javascript",
			"*": allTypes
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// List of data converters
		// 1) key format is "source_type destination_type" (a single space in-between)
		// 2) the catchall symbol "*" can be used for source_type
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			context: true,
			url: true
		}
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events
			// It's the callbackContext if one was provided in the options
			// and if it's a DOM node or a jQuery collection
			globalEventContext = callbackContext !== s &&
				( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
						jQuery( callbackContext ) : jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery._Deferred(),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// ifModified key
			ifModifiedKey,
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// Response headers
			responseHeadersString,
			responseHeaders,
			// transport
			transport,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// The jqXHR state
			state = 0,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Fake xhr
			jqXHR = {

				readyState: 0,

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( !state ) {
						var lname = name.toLowerCase();
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match === undefined ? null : match;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					statusText = statusText || "abort";
					if ( transport ) {
						transport.abort( statusText );
					}
					done( 0, statusText );
					return this;
				}
			};

		// Callback for when everything is done
		// It is defined here because jslint complains if it is declared
		// at the end of the function (which would be more logical and readable)
		function done( status, nativeStatusText, responses, headers ) {

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			var isSuccess,
				success,
				error,
				statusText = nativeStatusText,
				response = responses ? ajaxHandleResponses( s, jqXHR, responses ) : undefined,
				lastModified,
				etag;

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {

					if ( ( lastModified = jqXHR.getResponseHeader( "Last-Modified" ) ) ) {
						jQuery.lastModified[ ifModifiedKey ] = lastModified;
					}
					if ( ( etag = jqXHR.getResponseHeader( "Etag" ) ) ) {
						jQuery.etag[ ifModifiedKey ] = etag;
					}
				}

				// If not modified
				if ( status === 304 ) {

					statusText = "notmodified";
					isSuccess = true;

				// If we have data
				} else {

					try {
						success = ajaxConvert( s, response );
						statusText = "success";
						isSuccess = true;
					} catch(e) {
						// We have a parsererror
						statusText = "parsererror";
						error = e;
					}
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if( !statusText || status ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = "" + ( nativeStatusText || statusText );

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
						[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.resolveWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		// Attach deferreds
		deferred.promise( jqXHR );
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;
		jqXHR.complete = completeDeferred.done;

		// Status-dependent callbacks
		jqXHR.statusCode = function( map ) {
			if ( map ) {
				var tmp;
				if ( state < 2 ) {
					for( tmp in map ) {
						statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
					}
				} else {
					tmp = map[ jqXHR.status ];
					jqXHR.then( tmp, tmp );
				}
			}
			return this;
		};

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// We also use the url parameter if available
		s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( rspacesAjax );

		// Determine if a cross-domain request is in order
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] != ajaxLocParts[ 1 ] || parts[ 2 ] != ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefiler, stop there
		if ( state === 2 ) {
			return false;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Get ifModifiedKey before adding the anti-cache parameter
			ifModifiedKey = s.url;

			// Add anti-cache in url if needed
			if ( s.cache === false ) {

				var ts = jQuery.now(),
					// try replacing _= if it is there
					ret = s.url.replace( rts, "$1_=" + ts );

				// if nothing was replaced, add timestamp to the end
				s.url = ret + ( (ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			ifModifiedKey = ifModifiedKey || s.url;
			if ( jQuery.lastModified[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
			}
			if ( jQuery.etag[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
			}
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already
				jqXHR.abort();
				return false;

		}

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;
			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout( function(){
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch (e) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					jQuery.error( e );
				}
			}
		}

		return jqXHR;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a, traditional ) {
		var s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : value;
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( var prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	}
});

function buildParams( prefix, obj, traditional, add ) {
	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// If array item is non-scalar (array or object), encode its
				// numeric index to resolve deserialization ambiguity issues.
				// Note that rack (as of 1.0.0) can't currently deserialize
				// nested arrays properly, and attempting to do so may cause
				// a server error. Possible fixes are to modify rack's
				// deserialization algorithm or to provide an option or flag
				// to force array serialization to be shallow.
				buildParams( prefix + "[" + ( typeof v === "object" || jQuery.isArray(v) ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && obj != null && typeof obj === "object" ) {
		// Serialize object item.
		for ( var name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// This is still on the jQuery object... for now
// Want to move this to jQuery.ajax some day
jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {}

});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields,
		ct,
		type,
		finalDataType,
		firstDataType;

	// Fill responseXXX fields
	for( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	var dataTypes = s.dataTypes,
		converters = {},
		i,
		key,
		length = dataTypes.length,
		tmp,
		// Current and previous dataTypes
		current = dataTypes[ 0 ],
		prev,
		// Conversion expression
		conversion,
		// Conversion function
		conv,
		// Conversion functions (transitive conversion)
		conv1,
		conv2;

	// For each dataType in the chain
	for( i = 1; i < length; i++ ) {

		// Create converters map
		// with lowercased keys
		if ( i === 1 ) {
			for( key in s.converters ) {
				if( typeof key === "string" ) {
					converters[ key.toLowerCase() ] = s.converters[ key ];
				}
			}
		}

		// Get the dataTypes
		prev = current;
		current = dataTypes[ i ];

		// If current is auto dataType, update it to prev
		if( current === "*" ) {
			current = prev;
		// If no auto and dataTypes are actually different
		} else if ( prev !== "*" && prev !== current ) {

			// Get the converter
			conversion = prev + " " + current;
			conv = converters[ conversion ] || converters[ "* " + current ];

			// If there is no direct converter, search transitively
			if ( !conv ) {
				conv2 = undefined;
				for( conv1 in converters ) {
					tmp = conv1.split( " " );
					if ( tmp[ 0 ] === prev || tmp[ 0 ] === "*" ) {
						conv2 = converters[ tmp[1] + " " + current ];
						if ( conv2 ) {
							conv1 = converters[ conv1 ];
							if ( conv1 === true ) {
								conv = conv2;
							} else if ( conv2 === true ) {
								conv = conv1;
							}
							break;
						}
					}
				}
			}
			// If we found no converter, dispatch an error
			if ( !( conv || conv2 ) ) {
				jQuery.error( "No conversion from " + conversion.replace(" "," to ") );
			}
			// If found converter is not an equivalence
			if ( conv !== true ) {
				// Convert with 1 or 2 converters accordingly
				response = conv ? conv( response ) : conv2( conv1(response) );
			}
		}
	}
	return response;
}




var jsc = jQuery.now(),
	jsre = /(\=)\?(&|$)|\?\?/i;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		return jQuery.expando + "_" + ( jsc++ );
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var inspectData = s.contentType === "application/x-www-form-urlencoded" &&
		( typeof s.data === "string" );

	if ( s.dataTypes[ 0 ] === "jsonp" ||
		s.jsonp !== false && ( jsre.test( s.url ) ||
				inspectData && jsre.test( s.data ) ) ) {

		var responseContainer,
			jsonpCallback = s.jsonpCallback =
				jQuery.isFunction( s.jsonpCallback ) ? s.jsonpCallback() : s.jsonpCallback,
			previous = window[ jsonpCallback ],
			url = s.url,
			data = s.data,
			replace = "$1" + jsonpCallback + "$2";

		if ( s.jsonp !== false ) {
			url = url.replace( jsre, replace );
			if ( s.url === url ) {
				if ( inspectData ) {
					data = data.replace( jsre, replace );
				}
				if ( s.data === data ) {
					// Add callback manually
					url += (/\?/.test( url ) ? "&" : "?") + s.jsonp + "=" + jsonpCallback;
				}
			}
		}

		s.url = url;
		s.data = data;

		// Install callback
		window[ jsonpCallback ] = function( response ) {
			responseContainer = [ response ];
		};

		// Clean-up function
		jqXHR.always(function() {
			// Set callback back to previous value
			window[ jsonpCallback ] = previous;
			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( previous ) ) {
				window[ jsonpCallback ]( responseContainer[ 0 ] );
			}
		});

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( jsonpCallback + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Delegate to script
		return "script";
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /javascript|ecmascript/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = "async";

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( head && script.parentNode ) {
							head.removeChild( script );
						}

						// Dereference the script
						script = undefined;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};
				// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
				// This arises when a base node is used (#2709 and #4378).
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( 0, 1 );
				}
			}
		};
	}
});




var // #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject ? function() {
		// Abort all pending requests
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( 0, 1 );
		}
	} : false,
	xhrId = 0,
	xhrCallbacks;

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
(function( xhr ) {
	jQuery.extend( jQuery.support, {
		ajax: !!xhr,
		cors: !!xhr && ( "withCredentials" in xhr )
	});
})( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var xhr = s.xhr(),
						handle,
						i;

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( _ ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {

						var status,
							statusText,
							responseHeaders,
							responses,
							xml;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occured
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();
									responses = {};
									xml = xhr.responseXML;

									// Construct response list
									if ( xml && xml.documentElement /* #4958 */ ) {
										responses.xml = xml;
									}
									responses.text = xhr.responseText;

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					// if we're in sync mode or it's in cache
					// and has been retrieved directly (IE6 & IE7)
					// we need to manually fire the callback
					if ( !s.async || xhr.readyState === 4 ) {
						callback();
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback(0,1);
					}
				}
			};
		}
	});
}




var elemdisplay = {},
	iframe, iframeDoc,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	],
	fxNow;

jQuery.fn.extend({
	show: function( speed, easing, callback ) {
		var elem, display;

		if ( speed || speed === 0 ) {
			return this.animate( genFx("show", 3), speed, easing, callback);

		} else {
			for ( var i = 0, j = this.length; i < j; i++ ) {
				elem = this[i];

				if ( elem.style ) {
					display = elem.style.display;

					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if ( !jQuery._data(elem, "olddisplay") && display === "none" ) {
						display = elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if ( display === "" && jQuery.css( elem, "display" ) === "none" ) {
						jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				elem = this[i];

				if ( elem.style ) {
					display = elem.style.display;

					if ( display === "" || display === "none" ) {
						elem.style.display = jQuery._data(elem, "olddisplay") || "";
					}
				}
			}

			return this;
		}
	},

	hide: function( speed, easing, callback ) {
		if ( speed || speed === 0 ) {
			return this.animate( genFx("hide", 3), speed, easing, callback);

		} else {
			for ( var i = 0, j = this.length; i < j; i++ ) {
				if ( this[i].style ) {
					var display = jQuery.css( this[i], "display" );

					if ( display !== "none" && !jQuery._data( this[i], "olddisplay" ) ) {
						jQuery._data( this[i], "olddisplay", display );
					}
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				if ( this[i].style ) {
					this[i].style.display = "none";
				}
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2, callback ) {
		var bool = typeof fn === "boolean";

		if ( jQuery.isFunction(fn) && jQuery.isFunction(fn2) ) {
			this._toggle.apply( this, arguments );

		} else if ( fn == null || bool ) {
			this.each(function() {
				var state = bool ? fn : jQuery(this).is(":hidden");
				jQuery(this)[ state ? "show" : "hide" ]();
			});

		} else {
			this.animate(genFx("toggle", 3), fn, fn2, callback);
		}

		return this;
	},

	fadeTo: function( speed, to, easing, callback ) {
		return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({opacity: to}, speed, easing, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed(speed, easing, callback);

		if ( jQuery.isEmptyObject( prop ) ) {
			return this.each( optall.complete, [ false ] );
		}

		// Do not change referenced properties as per-property easing will be lost
		prop = jQuery.extend( {}, prop );

		return this[ optall.queue === false ? "each" : "queue" ](function() {
			// XXX 'this' does not always have a nodeName when running the
			// test suite

			if ( optall.queue === false ) {
				jQuery._mark( this );
			}

			var opt = jQuery.extend( {}, optall ),
				isElement = this.nodeType === 1,
				hidden = isElement && jQuery(this).is(":hidden"),
				name, val, p,
				display, e,
				parts, start, end, unit;

			// will store per property easing and be used to determine when an animation is complete
			opt.animatedProperties = {};

			for ( p in prop ) {

				// property name normalization
				name = jQuery.camelCase( p );
				if ( p !== name ) {
					prop[ name ] = prop[ p ];
					delete prop[ p ];
				}

				val = prop[ name ];

				// easing resolution: per property > opt.specialEasing > opt.easing > 'swing' (default)
				if ( jQuery.isArray( val ) ) {
					opt.animatedProperties[ name ] = val[ 1 ];
					val = prop[ name ] = val[ 0 ];
				} else {
					opt.animatedProperties[ name ] = opt.specialEasing && opt.specialEasing[ name ] || opt.easing || 'swing';
				}

				if ( val === "hide" && hidden || val === "show" && !hidden ) {
					return opt.complete.call( this );
				}

				if ( isElement && ( name === "height" || name === "width" ) ) {
					// Make sure that nothing sneaks out
					// Record all 3 overflow attributes because IE does not
					// change the overflow attribute when overflowX and
					// overflowY are set to the same value
					opt.overflow = [ this.style.overflow, this.style.overflowX, this.style.overflowY ];

					// Set display property to inline-block for height/width
					// animations on inline elements that are having width/height
					// animated
					if ( jQuery.css( this, "display" ) === "inline" &&
							jQuery.css( this, "float" ) === "none" ) {
						if ( !jQuery.support.inlineBlockNeedsLayout ) {
							this.style.display = "inline-block";

						} else {
							display = defaultDisplay( this.nodeName );

							// inline-level elements accept inline-block;
							// block-level elements need to be inline with layout
							if ( display === "inline" ) {
								this.style.display = "inline-block";

							} else {
								this.style.display = "inline";
								this.style.zoom = 1;
							}
						}
					}
				}
			}

			if ( opt.overflow != null ) {
				this.style.overflow = "hidden";
			}

			for ( p in prop ) {
				e = new jQuery.fx( this, opt, p );
				val = prop[ p ];

				if ( rfxtypes.test(val) ) {
					e[ val === "toggle" ? hidden ? "show" : "hide" : val ]();

				} else {
					parts = rfxnum.exec( val );
					start = e.cur();

					if ( parts ) {
						end = parseFloat( parts[2] );
						unit = parts[3] || ( jQuery.cssNumber[ p ] ? "" : "px" );

						// We need to compute starting value
						if ( unit !== "px" ) {
							jQuery.style( this, p, (end || 1) + unit);
							start = ((end || 1) / e.cur()) * start;
							jQuery.style( this, p, start + unit);
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] ) {
							end = ( (parts[ 1 ] === "-=" ? -1 : 1) * end ) + start;
						}

						e.custom( start, end, unit );

					} else {
						e.custom( start, val, "" );
					}
				}
			}

			// For JS strict compliance
			return true;
		});
	},

	stop: function( clearQueue, gotoEnd ) {
		if ( clearQueue ) {
			this.queue([]);
		}

		this.each(function() {
			var timers = jQuery.timers,
				i = timers.length;
			// clear marker counters if we know they won't be
			if ( !gotoEnd ) {
				jQuery._unmark( true, this );
			}
			while ( i-- ) {
				if ( timers[i].elem === this ) {
					if (gotoEnd) {
						// force the next step to be the last
						timers[i](true);
					}

					timers.splice(i, 1);
				}
			}
		});

		// start the next in the queue if the last step wasn't forced
		if ( !gotoEnd ) {
			this.dequeue();
		}

		return this;
	}

});

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout( clearFxNow, 0 );
	return ( fxNow = jQuery.now() );
}

function clearFxNow() {
	fxNow = undefined;
}

// Generate parameters to create a standard animation
function genFx( type, num ) {
	var obj = {};

	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice(0,num)), function() {
		obj[ this ] = type;
	});

	return obj;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show", 1),
	slideUp: genFx("hide", 1),
	slideToggle: genFx("toggle", 1),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.extend({
	speed: function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

		// Queueing
		opt.old = opt.complete;
		opt.complete = function( noUnmark ) {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue !== false ) {
				jQuery.dequeue( this );
			} else if ( noUnmark !== false ) {
				jQuery._unmark( this );
			}
		};

		return opt;
	},

	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ((-Math.cos(p*Math.PI)/2) + 0.5) * diff + firstNum;
		}
	},

	timers: [],

	fx: function( elem, options, prop ) {
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		options.orig = options.orig || {};
	}

});

jQuery.fx.prototype = {
	// Simple function for setting a style value
	update: function() {
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		(jQuery.fx.step[this.prop] || jQuery.fx.step._default)( this );
	},

	// Get the current size
	cur: function() {
		if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) ) {
			return this.elem[ this.prop ];
		}

		var parsed,
			r = jQuery.css( this.elem, this.prop );
		// Empty strings, null, undefined and "auto" are converted to 0,
		// complex values such as "rotate(1rad)" are returned as is,
		// simple values such as "10px" are parsed to Float.
		return isNaN( parsed = parseFloat( r ) ) ? !r || r === "auto" ? 0 : r : parsed;
	},

	// Start an animation from one number to another
	custom: function( from, to, unit ) {
		var self = this,
			fx = jQuery.fx;

		this.startTime = fxNow || createFxNow();
		this.start = from;
		this.end = to;
		this.unit = unit || this.unit || ( jQuery.cssNumber[ this.prop ] ? "" : "px" );
		this.now = this.start;
		this.pos = this.state = 0;

		function t( gotoEnd ) {
			return self.step(gotoEnd);
		}

		t.elem = this.elem;

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval( fx.tick, fx.interval );
		}
	},

	// Simple 'show' function
	show: function() {
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.style( this.elem, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any
		// flash of content
		this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());

		// Start by showing the element
		jQuery( this.elem ).show();
	},

	// Simple 'hide' function
	hide: function() {
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.style( this.elem, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom(this.cur(), 0);
	},

	// Each step of an animation
	step: function( gotoEnd ) {
		var t = fxNow || createFxNow(),
			done = true,
			elem = this.elem,
			options = this.options,
			i, n;

		if ( gotoEnd || t >= options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			options.animatedProperties[ this.prop ] = true;

			for ( i in options.animatedProperties ) {
				if ( options.animatedProperties[i] !== true ) {
					done = false;
				}
			}

			if ( done ) {
				// Reset the overflow
				if ( options.overflow != null && !jQuery.support.shrinkWrapBlocks ) {

					jQuery.each( [ "", "X", "Y" ], function (index, value) {
						elem.style[ "overflow" + value ] = options.overflow[index];
					});
				}

				// Hide the element if the "hide" operation was done
				if ( options.hide ) {
					jQuery(elem).hide();
				}

				// Reset the properties, if the item has been hidden or shown
				if ( options.hide || options.show ) {
					for ( var p in options.animatedProperties ) {
						jQuery.style( elem, p, options.orig[p] );
					}
				}

				// Execute the complete function
				options.complete.call( elem );
			}

			return false;

		} else {
			// classical easing cannot be used with an Infinity duration
			if ( options.duration == Infinity ) {
				this.now = t;
			} else {
				n = t - this.startTime;
				this.state = n / options.duration;

				// Perform the easing function, defaults to swing
				this.pos = jQuery.easing[ options.animatedProperties[ this.prop ] ]( this.state, n, 0, 1, options.duration );
				this.now = this.start + ((this.end - this.start) * this.pos);
			}
			// Perform the next step of the animation
			this.update();
		}

		return true;
	}
};

jQuery.extend( jQuery.fx, {
	tick: function() {
		for ( var timers = jQuery.timers, i = 0 ; i < timers.length ; ++i ) {
			if ( !timers[i]() ) {
				timers.splice(i--, 1);
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
	},

	interval: 13,

	stop: function() {
		clearInterval( timerId );
		timerId = null;
	},

	speeds: {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	},

	step: {
		opacity: function( fx ) {
			jQuery.style( fx.elem, "opacity", fx.now );
		},

		_default: function( fx ) {
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null ) {
				fx.elem.style[ fx.prop ] = (fx.prop === "width" || fx.prop === "height" ? Math.max(0, fx.now) : fx.now) + fx.unit;
			} else {
				fx.elem[ fx.prop ] = fx.now;
			}
		}
	}
});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}

// Try to restore the default display value of an element
function defaultDisplay( nodeName ) {

	if ( !elemdisplay[ nodeName ] ) {

		var body = document.body,
			elem = jQuery( "<" + nodeName + ">" ).appendTo( body ),
			display = elem.css( "display" );

		elem.remove();

		// If the simple way fails,
		// get element's real default display by attaching it to a temp iframe
		if ( display === "none" || display === "" ) {
			// No iframe to use yet, so create it
			if ( !iframe ) {
				iframe = document.createElement( "iframe" );
				iframe.frameBorder = iframe.width = iframe.height = 0;
			}

			body.appendChild( iframe );

			// Create a cacheable copy of the iframe document on first call.
			// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
			// document to it; WebKit & Firefox won't allow reusing the iframe document.
			if ( !iframeDoc || !iframe.createElement ) {
				iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
				iframeDoc.write( ( document.compatMode === "CSS1Compat" ? "<!doctype html>" : "" ) + "<html><body>" );
				iframeDoc.close();
			}

			elem = iframeDoc.createElement( nodeName );

			iframeDoc.body.appendChild( elem );

			display = jQuery.css( elem, "display" );

			body.removeChild( iframe );
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return elemdisplay[ nodeName ];
}




var rtable = /^t(?:able|d|h)$/i,
	rroot = /^(?:body|html)$/i;

if ( "getBoundingClientRect" in document.documentElement ) {
	jQuery.fn.offset = function( options ) {
		var elem = this[0], box;

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		try {
			box = elem.getBoundingClientRect();
		} catch(e) {}

		var doc = elem.ownerDocument,
			docElem = doc.documentElement;

		// Make sure we're not dealing with a disconnected DOM node
		if ( !box || !jQuery.contains( docElem, elem ) ) {
			return box ? { top: box.top, left: box.left } : { top: 0, left: 0 };
		}

		var body = doc.body,
			win = getWindow(doc),
			clientTop  = docElem.clientTop  || body.clientTop  || 0,
			clientLeft = docElem.clientLeft || body.clientLeft || 0,
			scrollTop  = win.pageYOffset || jQuery.support.boxModel && docElem.scrollTop  || body.scrollTop,
			scrollLeft = win.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft,
			top  = box.top  + scrollTop  - clientTop,
			left = box.left + scrollLeft - clientLeft;

		return { top: top, left: left };
	};

} else {
	jQuery.fn.offset = function( options ) {
		var elem = this[0];

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		jQuery.offset.initialize();

		var computedStyle,
			offsetParent = elem.offsetParent,
			prevOffsetParent = elem,
			doc = elem.ownerDocument,
			docElem = doc.documentElement,
			body = doc.body,
			defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle( elem, null ) : elem.currentStyle,
			top = elem.offsetTop,
			left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			if ( jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed" ) {
				break;
			}

			computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
			top  -= elem.scrollTop;
			left -= elem.scrollLeft;

			if ( elem === offsetParent ) {
				top  += elem.offsetTop;
				left += elem.offsetLeft;

				if ( jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && rtable.test(elem.nodeName)) ) {
					top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
					left += parseFloat( computedStyle.borderLeftWidth ) || 0;
				}

				prevOffsetParent = offsetParent;
				offsetParent = elem.offsetParent;
			}

			if ( jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
				top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
				left += parseFloat( computedStyle.borderLeftWidth ) || 0;
			}

			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
			top  += body.offsetTop;
			left += body.offsetLeft;
		}

		if ( jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed" ) {
			top  += Math.max( docElem.scrollTop, body.scrollTop );
			left += Math.max( docElem.scrollLeft, body.scrollLeft );
		}

		return { top: top, left: left };
	};
}

jQuery.offset = {
	initialize: function() {
		var body = document.body, container = document.createElement("div"), innerDiv, checkDiv, table, td, bodyMarginTop = parseFloat( jQuery.css(body, "marginTop") ) || 0,
			html = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";

		jQuery.extend( container.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" } );

		container.innerHTML = html;
		body.insertBefore( container, body.firstChild );
		innerDiv = container.firstChild;
		checkDiv = innerDiv.firstChild;
		td = innerDiv.nextSibling.firstChild.firstChild;

		this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
		this.doesAddBorderForTableAndCells = (td.offsetTop === 5);

		checkDiv.style.position = "fixed";
		checkDiv.style.top = "20px";

		// safari subtracts parent border width here which is 5px
		this.supportsFixedPosition = (checkDiv.offsetTop === 20 || checkDiv.offsetTop === 15);
		checkDiv.style.position = checkDiv.style.top = "";

		innerDiv.style.overflow = "hidden";
		innerDiv.style.position = "relative";

		this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);

		this.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== bodyMarginTop);

		body.removeChild( container );
		jQuery.offset.initialize = jQuery.noop;
	},

	bodyOffset: function( body ) {
		var top = body.offsetTop,
			left = body.offsetLeft;

		jQuery.offset.initialize();

		if ( jQuery.offset.doesNotIncludeMarginInBodyOffset ) {
			top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
			left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
		}

		return { top: top, left: left };
	},

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if (options.top != null) {
			props.top = (options.top - curOffset.top) + curTop;
		}
		if (options.left != null) {
			props.left = (options.left - curOffset.left) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({
	position: function() {
		if ( !this[0] ) {
			return null;
		}

		var elem = this[0],

		// Get *real* offsetParent
		offsetParent = this.offsetParent(),

		// Get correct offsets
		offset       = this.offset(),
		parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

		// Subtract element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
		offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

		// Add offsetParent borders
		parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
		parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

		// Subtract the two offsets
		return {
			top:  offset.top  - parentOffset.top,
			left: offset.left - parentOffset.left
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.body;
			while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( ["Left", "Top"], function( i, name ) {
	var method = "scroll" + name;

	jQuery.fn[ method ] = function( val ) {
		var elem, win;

		if ( val === undefined ) {
			elem = this[ 0 ];

			if ( !elem ) {
				return null;
			}

			win = getWindow( elem );

			// Return the scroll offset
			return win ? ("pageXOffset" in win) ? win[ i ? "pageYOffset" : "pageXOffset" ] :
				jQuery.support.boxModel && win.document.documentElement[ method ] ||
					win.document.body[ method ] :
				elem[ method ];
		}

		// Set the scroll offset
		return this.each(function() {
			win = getWindow( this );

			if ( win ) {
				win.scrollTo(
					!i ? val : jQuery( win ).scrollLeft(),
					 i ? val : jQuery( win ).scrollTop()
				);

			} else {
				this[ method ] = val;
			}
		});
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}




// Create width, height, innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each([ "Height", "Width" ], function( i, name ) {

	var type = name.toLowerCase();

	// innerHeight and innerWidth
	jQuery.fn[ "inner" + name ] = function() {
		var elem = this[0];
		return elem && elem.style ?
			parseFloat( jQuery.css( elem, type, "padding" ) ) :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn[ "outer" + name ] = function( margin ) {
		var elem = this[0];
		return elem && elem.style ?
			parseFloat( jQuery.css( elem, type, margin ? "margin" : "border" ) ) :
			null;
	};

	jQuery.fn[ type ] = function( size ) {
		// Get window width or height
		var elem = this[0];
		if ( !elem ) {
			return size == null ? null : this;
		}

		if ( jQuery.isFunction( size ) ) {
			return this.each(function( i ) {
				var self = jQuery( this );
				self[ type ]( size.call( this, i, self[ type ]() ) );
			});
		}

		if ( jQuery.isWindow( elem ) ) {
			// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
			// 3rd condition allows Nokia support, as it supports the docElem prop but not CSS1Compat
			var docElemProp = elem.document.documentElement[ "client" + name ],
				body = elem.document.body;
			return elem.document.compatMode === "CSS1Compat" && docElemProp ||
				body && body[ "client" + name ] || docElemProp;

		// Get document width or height
		} else if ( elem.nodeType === 9 ) {
			// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
			return Math.max(
				elem.documentElement["client" + name],
				elem.body["scroll" + name], elem.documentElement["scroll" + name],
				elem.body["offset" + name], elem.documentElement["offset" + name]
			);

		// Get or set width or height on the element
		} else if ( size === undefined ) {
			var orig = jQuery.css( elem, type ),
				ret = parseFloat( orig );

			return jQuery.isNaN( ret ) ? orig : ret;

		// Set the width or height on the element (default to pixels if value is unitless)
		} else {
			return this.css( type, typeof size === "string" ? size : size + "px" );
		}
	};

});


// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;
})(window);;
steal.loaded('jquery/jquery.js');
/*jslint evil: true */



steal('jquery/view', 'jquery/lang/string/rsplit').then(function( $ ) {
	var myEval = function( script ) {
		eval(script);
	},
		chop = function( string ) {
			return string.substr(0, string.length - 1);
		},
		rSplit = $.String.rsplit,
		extend = $.extend,
		isArray = $.isArray,
		clean = function( content ) {
			var converted = content.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"').replace(/\t/g, '\\t');
			return converted;
		},
		// from prototype  http://www.prototypejs.org/
		escapeHTML = function( content ) {
			return content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&#34;').replace(/'/g, "&#39;");
		},
		EJS = function( options ) {
			//returns a renderer function
			if ( this.constructor != EJS ) {
				var ejs = new EJS(options);
				return function( data, helpers ) {
					return ejs.render(data, helpers);
				};
			}
			//so we can set the processor
			if ( typeof options == "function" ) {
				this.template = {};
				this.template.process = options;
				return;
			}
			//set options on self
			extend(this, EJS.options, options);
			this.template = compile(this.text, this.type, this.name);
		};
	/**
	 * @class jQuery.EJS
	 * 
	 * @plugin jquery/view/ejs
	 * @parent jQuery.View
	 * @download  http://jmvcsite.heroku.com/pluginify?plugins[]=jquery/view/ejs/ejs.js
	 * @test jquery/view/ejs/qunit.html
	 * 
	 * 
	 * Ejs provides <a href="http://www.ruby-doc.org/stdlib/libdoc/erb/rdoc/">ERB</a> 
	 * style client side templates.  Use them with controllers to easily build html and inject
	 * it into the DOM.
	 * 
	 * ###  Example
	 * 
	 * The following generates a list of tasks:
	 * 
	 * @codestart html
	 * &lt;ul>
	 * &lt;% for(var i = 0; i < tasks.length; i++){ %>
	 *     &lt;li class="task &lt;%= tasks[i].identity %>">&lt;%= tasks[i].name %>&lt;/li>
	 * &lt;% } %>
	 * &lt;/ul>
	 * @codeend
	 * 
	 * For the following examples, we assume this view is in <i>'views\tasks\list.ejs'</i>.
	 * 
	 * 
	 * ## Use
	 * 
	 * ### Loading and Rendering EJS:
	 * 
	 * You should use EJS through the helper functions [jQuery.View] provides such as:
	 * 
	 *   - [jQuery.fn.after after]
	 *   - [jQuery.fn.append append]
	 *   - [jQuery.fn.before before]
	 *   - [jQuery.fn.html html], 
	 *   - [jQuery.fn.prepend prepend],
	 *   - [jQuery.fn.replaceWith replaceWith], and 
	 *   - [jQuery.fn.text text].
	 * 
	 * or [jQuery.Controller.prototype.view].
	 * 
	 * ### Syntax
	 * 
	 * EJS uses 5 types of tags:
	 * 
	 *   - <code>&lt;% CODE %&gt;</code> - Runs JS Code.
	 *     For example:
	 *     
	 *         <% alert('hello world') %>
	 *     
	 *   - <code>&lt;%= CODE %&gt;</code> - Runs JS Code and writes the _escaped_ result into the result of the template.
	 *     For example:
	 *     
	 *         <h1><%= 'hello world' %></h1>
	 *         
	 *   - <code>&lt;%== CODE %&gt;</code> - Runs JS Code and writes the _unescaped_ result into the result of the template.
	 *     For example:
	 *     
	 *         <h1><%== '<span>hello world</span>' %></h1>
	 *         
	 *   - <code>&lt;%%= CODE %&gt;</code> - Writes <%= CODE %> to the result of the template.  This is very useful for generators.
	 *     
	 *         <%%= 'hello world' %>
	 *         
	 *   - <code>&lt;%# CODE %&gt;</code> - Used for comments.  This does nothing.
	 *     
	 *         <%# 'hello world' %>
	 *        
	 * ## Hooking up controllers
	 * 
	 * After drawing some html, you often want to add other widgets and plugins inside that html.
	 * View makes this easy.  You just have to return the Contoller class you want to be hooked up.
	 * 
	 * @codestart
	 * &lt;ul &lt;%= Mxui.Tabs%>>...&lt;ul>
	 * @codeend
	 * 
	 * You can even hook up multiple controllers:
	 * 
	 * @codestart
	 * &lt;ul &lt;%= [Mxui.Tabs, Mxui.Filler]%>>...&lt;ul>
	 * @codeend
	 * 
	 * <h2>View Helpers</h2>
	 * View Helpers return html code.  View by default only comes with 
	 * [jQuery.EJS.Helpers.prototype.view view] and [jQuery.EJS.Helpers.prototype.text text].
	 * You can include more with the view/helpers plugin.  But, you can easily make your own!
	 * Learn how in the [jQuery.EJS.Helpers Helpers] page.
	 * 
	 * @constructor Creates a new view
	 * @param {Object} options A hash with the following options
	 * <table class="options">
	 *     <tbody><tr><th>Option</th><th>Default</th><th>Description</th></tr>
	 *     <tr>
	 *      <td>url</td>
	 *      <td>&nbsp;</td>
	 *      <td>loads the template from a file.  This path should be relative to <i>[jQuery.root]</i>.
	 *      </td>
	 *     </tr>
	 *     <tr>
	 *      <td>text</td>
	 *      <td>&nbsp;</td>
	 *      <td>uses the provided text as the template. Example:<br/><code>new View({text: '&lt;%=user%>'})</code>
	 *      </td>
	 *     </tr>
	 *     <tr>
	 *      <td>element</td>
	 *      <td>&nbsp;</td>
	 *      <td>loads a template from the innerHTML or value of the element.
	 *      </td>
	 *     </tr>
	 *     <tr>
	 *      <td>type</td>
	 *      <td>'<'</td>
	 *      <td>type of magic tags.  Options are '&lt;' or '['
	 *      </td>
	 *     </tr>
	 *     <tr>
	 *      <td>name</td>
	 *      <td>the element ID or url </td>
	 *      <td>an optional name that is used for caching.
	 *      </td>
	 *     </tr>
	 *     <tr>
	 *      <td>cache</td>
	 *      <td>true in production mode, false in other modes</td>
	 *      <td>true to cache template.
	 *      </td>
	 *     </tr>
	 *     
	 *    </tbody></table>
	 */
	$.EJS = EJS;
	/** 
	 * @Prototype
	 */
	EJS.prototype = {
		constructor: EJS,
		/**
		 * Renders an object with extra view helpers attached to the view.
		 * @param {Object} object data to be rendered
		 * @param {Object} extra_helpers an object with additonal view helpers
		 * @return {String} returns the result of the string
		 */
		render: function( object, extraHelpers ) {
			object = object || {};
			this._extra_helpers = extraHelpers;
			var v = new EJS.Helpers(object, extraHelpers || {});
			return this.template.process.call(object, object, v);
		}
	};
	/* @Static */


	EJS.
	/**
	 * Used to convert what's in &lt;%= %> magic tags to a string
	 * to be inserted in the rendered output.
	 * 
	 * Typically, it's a string, and the string is just inserted.  However,
	 * if it's a function or an object with a hookup method, it can potentially be 
	 * be ran on the element after it's inserted into the page.
	 * 
	 * This is a very nice way of adding functionality through the view.
	 * Usually this is done with [jQuery.EJS.Helpers.prototype.plugin]
	 * but the following fades in the div element after it has been inserted:
	 * 
	 * @codestart
	 * &lt;%= function(el){$(el).fadeIn()} %>
	 * @codeend
	 * 
	 * @param {String|Object|Function} input the value in between the
	 * write majic tags: &lt;%= %>
	 * @return {String} returns the content to be added to the rendered
	 * output.  The content is different depending on the type:
	 * 
	 *   * string - a bac
	 *   * foo - bar
	 */
	text = function( input ) {
		if ( typeof input == 'string' ) {
			return input;
		}
		if ( input === null || input === undefined ) {
			return '';
		}
		var hook = (input.hookup &&
		function( el, id ) {
			input.hookup.call(input, el, id);
		}) || (typeof input == 'function' && input) || (isArray(input) &&
		function( el, id ) {
			for ( var i = 0; i < input.length; i++ ) {
				var stub;
				stub = input[i].hookup ? input[i].hookup(el, id) : input[i](el, id);
			}
		});
		if ( hook ) {
			return "data-view-id='" + $.View.hookup(hook) + "'";
		}
		return input.toString ? input.toString() : "";
	};
	EJS.clean = function( text ) {
		//return sanatized text
		if ( typeof text == 'string' ) {
			return escapeHTML(text);
		} else if ( typeof text == 'number' ) {
			return text;
		} else {
			return EJS.text(text);
		}
	}
	//returns something you can call scan on
	var scan = function( scanner, source, block ) {
		var source_split = rSplit(source, /\n/),
			i = 0;
		for (; i < source_split.length; i++ ) {
			scanline(scanner, source_split[i], block);
		}

	},
		scanline = function( scanner, line, block ) {
			scanner.lines++;
			var line_split = rSplit(line, scanner.splitter),
				token;
			for ( var i = 0; i < line_split.length; i++ ) {
				token = line_split[i];
				if ( token !== null ) {
					block(token, scanner);
				}
			}
		},
		makeScanner = function( left, right ) {
			var scanner = {};
			extend(scanner, {
				left: left + '%',
				right: '%' + right,
				dLeft: left + '%%',
				dRight: '%%' + right,
				eeLeft: left + '%==',
				eLeft: left + '%=',
				cmnt: left + '%#',
				scan: scan,
				lines: 0
			});
			scanner.splitter = new RegExp("(" + [scanner.dLeft, scanner.dRight, scanner.eeLeft, scanner.eLeft, scanner.cmnt, scanner.left, scanner.right + '\n', scanner.right, '\n'].join(")|(").
			replace(/\[/g, "\\[").replace(/\]/g, "\\]") + ")");
			return scanner;
		},
		// compiles a template
		compile = function( source, left, name ) {
			source = source.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
			//normalize line endings
			left = left || '<';
			var put_cmd = "___v1ew.push(",
				insert_cmd = put_cmd,
				buff = new EJS.Buffer(['var ___v1ew = [];'], []),
				content = '',
				put = function( content ) {
					buff.push(put_cmd, '"', clean(content), '");');
				},
				startTag = null,
				empty = function() {
					content = ''
				};

			scan(makeScanner(left, left === '[' ? ']' : '>'), source || "", function( token, scanner ) {
				// if we don't have a start pair
				if ( startTag === null ) {
					switch ( token ) {
					case '\n':
						content = content + "\n";
						put(content);
						buff.cr();
						empty();
						break;
					case scanner.left:
					case scanner.eLeft:
					case scanner.eeLeft:
					case scanner.cmnt:
						startTag = token;
						if ( content.length > 0 ) {
							put(content);
						}
						empty();
						break;

						// replace <%% with <%
					case scanner.dLeft:
						content += scanner.left;
						break;
					default:
						content += token;
						break;
					}
				}
				else {
					switch ( token ) {
					case scanner.right:
						switch ( startTag ) {
						case scanner.left:
							if ( content[content.length - 1] == '\n' ) {
								content = chop(content);
								buff.push(content, ";");
								buff.cr();
							}
							else {
								buff.push(content, ";");
							}
							break;
						case scanner.eLeft:
							buff.push(insert_cmd, "(jQuery.EJS.clean(", content, ")));");
							break;
						case scanner.eeLeft:
							buff.push(insert_cmd, "(jQuery.EJS.text(", content, ")));");
							break;
						}
						startTag = null;
						empty();
						break;
					case scanner.dRight:
						content += scanner.right;
						break;
					default:
						content += token;
						break;
					}
				}
			})
			if ( content.length > 0 ) {
				// Should be content.dump in Ruby
				buff.push(put_cmd, '"', clean(content) + '");');
			}
			var template = buff.close(),
				out = {
					out: 'try { with(_VIEW) { with (_CONTEXT) {' + template + " return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;}"
				};
			//use eval instead of creating a function, b/c it is easier to debug
			myEval.call(out, 'this.process = (function(_CONTEXT,_VIEW){' + out.out + '});\r\n//@ sourceURL=' + name + ".js");
			return out;
		};


	// a line and script buffer
	// we use this so we know line numbers when there
	// is an error.  
	// pre and post are setup and teardown for the buffer
	EJS.Buffer = function( pre_cmd, post ) {
		this.line = [];
		this.script = [];
		this.post = post;

		// add the pre commands to the first line
		this.push.apply(this, pre_cmd);
	};
	EJS.Buffer.prototype = {
		//need to maintain your own semi-colons (for performance)
		push: function() {
			this.line.push.apply(this.line, arguments);
		},

		cr: function() {
			this.script.push(this.line.join(''), "\n");
			this.line = [];
		},
		//returns the script too
		close: function() {
			var stub;

			if ( this.line.length > 0 ) {
				this.script.push(this.line.join(''));
				this.line = [];
			}

			stub = this.post.length && this.push.apply(this, this.post);

			this.script.push(";"); //makes sure we always have an ending /
			return this.script.join("");
		}

	};


	//type, cache, folder
	/**
	 * @attribute options
	 * Sets default options for all views
	 * <table class="options">
	 * <tbody><tr><th>Option</th><th>Default</th><th>Description</th></tr>
	 * <tr>
	 * <td>type</td>
	 * <td>'<'</td>
	 * <td>type of magic tags.  Options are '&lt;' or '['
	 * </td>
	 * </tr>
	 * <tr>
	 * <td>cache</td>
	 * <td>true in production mode, false in other modes</td>
	 * <td>true to cache template.
	 * </td>
	 * </tr>
	 * </tbody></table>
	 * 
	 */
	EJS.options = {
		type: '<',
		ext: '.ejs'
	};




	/**
	 * @class jQuery.EJS.Helpers
	 * @parent jQuery.EJS
	 * By adding functions to jQuery.EJS.Helpers.prototype, those functions will be available in the 
	 * views.
	 * 
	 * The following helper converts a given string to upper case:
	 * 
	 * 	$.EJS.Helpers.prototype.toUpper = function(params)
	 * 	{
	 * 		return params.toUpperCase();
	 * 	}
	 * 
	 * Use it like this in any EJS template:
	 * 
	 * 	<%= toUpper('javascriptmvc') %>
	 * 
	 * To access the current DOM element return a function that takes the element as a parameter:
	 * 
	 * 	$.EJS.Helpers.prototype.upperHtml = function(params)
	 * 	{
	 * 		return function(el) {
	 * 			$(el).html(params.toUpperCase());
	 * 		}
	 * 	}
	 * 
	 * In your EJS view you can then call the helper on an element tag:
	 * 
	 * 	<div <%= upperHtml('javascriptmvc') %>></div>
	 * 
	 * 
	 * @constructor Creates a view helper.  This function is called internally.  You should never call it.
	 * @param {Object} data The data passed to the view.  Helpers have access to it through this._data
	 */
	EJS.Helpers = function( data, extras ) {
		this._data = data;
		this._extras = extras;
		extend(this, extras);
	};
	/* @prototype*/
	EJS.Helpers.prototype = {
		/**
		 * Hooks up a jQuery plugin on.
		 * @param {String} name the plugin name
		 */
		plugin: function( name ) {
			var args = $.makeArray(arguments),
				widget = args.shift();
			return function( el ) {
				var jq = $(el);
				jq[widget].apply(jq, args);
			};
		},
		/**
		 * Renders a partial view.  This is deprecated in favor of <code>$.View()</code>.
		 */
		view: function( url, data, helpers ) {
			helpers = helpers || this._extras;
			data = data || this._data;
			return $.View(url, data, helpers); //new EJS(options).render(data, helpers);
		}
	};


	$.View.register({
		suffix: "ejs",
		//returns a function that renders the view
		script: function( id, src ) {
			return "jQuery.EJS(function(_CONTEXT,_VIEW) { " + new EJS({
				text: src,
				name: id
			}).template.out + " })";
		},
		renderer: function( id, text ) {
			var ejs = new EJS({
				text: text,
				name: id
			});
			return function( data, helpers ) {
				return ejs.render.call(ejs, data, helpers);
			};
		}
	});
});;
steal.loaded('jquery/view/ejs/ejs.js');
steal("jquery").then(function( $ ) {

	// converts to an ok dom id
	var toId = function( src ) {
		return src.replace(/^\/\//, "").replace(/[\/\.]/g, "_");
	},
		// used for hookup ids
		id = 1;
	// this might be useful for testing if html
	// htmlTest = /^[\s\n\r\xA0]*<(.|[\r\n])*>[\s\n\r\xA0]*$/
	/**
	 * @class jQuery.View
	 * @parent jquerymx
	 * @plugin jquery/view
	 * @test jquery/view/qunit.html
	 * @download dist/jquery.view.js
	 * 
	 * View provides a uniform interface for using templates with 
	 * jQuery. When template engines [jQuery.View.register register] 
	 * themselves, you are able to:
	 * 
	 *  - Use views with jQuery extensions [jQuery.fn.after after], [jQuery.fn.append append],
	 *   [jQuery.fn.before before], [jQuery.fn.html html], [jQuery.fn.prepend prepend],
	 *   [jQuery.fn.replaceWith replaceWith], [jQuery.fn.text text].
	 *  - Template loading from html elements and external files.
	 *  - Synchronous and asynchronous template loading.
	 *  - [view.deferreds Deferred Rendering].
	 *  - Template caching.
	 *  - Bundling of processed templates in production builds.
	 *  - Hookup jquery plugins directly in the template.
	 * 
	 * The [mvc.view Get Started with jQueryMX] has a good walkthrough of $.View.
	 * 
	 * ## Use
	 * 
	 * 
	 * When using views, you're almost always wanting to insert the results 
	 * of a rendered template into the page. jQuery.View overwrites the 
	 * jQuery modifiers so using a view is as easy as: 
	 * 
	 *     $("#foo").html('mytemplate.ejs',{message: 'hello world'})
	 *
	 * This code:
	 * 
	 *  - Loads the template a 'mytemplate.ejs'. It might look like:
	 *    <pre><code>&lt;h2>&lt;%= message %>&lt;/h2></pre></code>
	 *  
	 *  - Renders it with {message: 'hello world'}, resulting in:
	 *    <pre><code>&lt;div id='foo'>"&lt;h2>hello world&lt;/h2>&lt;/div></pre></code>
	 *  
	 *  - Inserts the result into the foo element. Foo might look like:
	 *    <pre><code>&lt;div id='foo'>&lt;h2>hello world&lt;/h2>&lt;/div></pre></code>
	 * 
	 * ## jQuery Modifiers
	 * 
	 * You can use a template with the following jQuery modifiers:
	 * 
	 * <table>
	 * <tr><td>[jQuery.fn.after after]</td><td> <code>$('#bar').after('temp.jaml',{});</code></td></tr>
	 * <tr><td>[jQuery.fn.append append] </td><td>  <code>$('#bar').append('temp.jaml',{});</code></td></tr>
	 * <tr><td>[jQuery.fn.before before] </td><td> <code>$('#bar').before('temp.jaml',{});</code></td></tr>
	 * <tr><td>[jQuery.fn.html html] </td><td> <code>$('#bar').html('temp.jaml',{});</code></td></tr>
	 * <tr><td>[jQuery.fn.prepend prepend] </td><td> <code>$('#bar').prepend('temp.jaml',{});</code></td></tr>
	 * <tr><td>[jQuery.fn.replaceWith replaceWith] </td><td> <code>$('#bar').replaceWidth('temp.jaml',{});</code></td></tr>
	 * <tr><td>[jQuery.fn.text text] </td><td> <code>$('#bar').text('temp.jaml',{});</code></td></tr>
	 * </table>
	 * 
	 * You always have to pass a string and an object (or function) for the jQuery modifier 
	 * to user a template.
	 * 
	 * ## Template Locations
	 * 
	 * View can load from script tags or from files. 
	 * 
	 * ## From Script Tags
	 * 
	 * To load from a script tag, create a script tag with your template and an id like: 
	 * 
	 * <pre><code>&lt;script type='text/ejs' id='recipes'>
	 * &lt;% for(var i=0; i &lt; recipes.length; i++){ %>
	 *   &lt;li>&lt;%=recipes[i].name %>&lt;/li>
	 * &lt;%} %>
	 * &lt;/script></code></pre>
	 * 
	 * Render with this template like: 
	 * 
	 * @codestart
	 * $("#foo").html('recipes',recipeData)
	 * @codeend
	 * 
	 * Notice we passed the id of the element we want to render.
	 * 
	 * ## From File
	 * 
	 * You can pass the path of a template file location like:
	 * 
	 *     $("#foo").html('templates/recipes.ejs',recipeData)
	 * 
	 * However, you typically want to make the template work from whatever page they 
	 * are called from.  To do this, use // to look up templates from JMVC root:
	 * 
	 *     $("#foo").html('//app/views/recipes.ejs',recipeData)
	 *     
	 * Finally, the [jQuery.Controller.prototype.view controller/view] plugin can make looking
	 * up a thread (and adding helpers) even easier:
	 * 
	 *     $("#foo").html( this.view('recipes', recipeData) )
	 * 
	 * ## Packaging Templates
	 * 
	 * If you're making heavy use of templates, you want to organize 
	 * them in files so they can be reused between pages and applications.
	 * 
	 * But, this organization would come at a high price 
	 * if the browser has to 
	 * retrieve each template individually. The additional 
	 * HTTP requests would slow down your app. 
	 * 
	 * Fortunately, [steal.static.views steal.views] can build templates 
	 * into your production files. You just have to point to the view file like: 
	 * 
	 *     steal.views('path/to/the/view.ejs');
	 *
	 * ## Asynchronous
	 * 
	 * By default, retrieving requests is done synchronously. This is 
	 * fine because StealJS packages view templates with your JS download. 
	 * 
	 * However, some people might not be using StealJS or want to delay loading 
	 * templates until necessary. If you have the need, you can 
	 * provide a callback paramter like: 
	 * 
	 *     $("#foo").html('recipes',recipeData, function(result){
	 *       this.fadeIn()
	 *     });
	 * 
	 * The callback function will be called with the result of the 
	 * rendered template and 'this' will be set to the original jQuery object.
	 * 
	 * ## Deferreds (3.0.6)
	 * 
	 * If you pass deferreds to $.View or any of the jQuery 
	 * modifiers, the view will wait until all deferreds resolve before 
	 * rendering the view.  This makes it a one-liner to make a request and 
	 * use the result to render a template. 
	 * 
	 * The following makes a request for todos in parallel with the 
	 * todos.ejs template.  Once todos and template have been loaded, it with
	 * render the view with the todos.
	 * 
	 *     $('#todos').html("todos.ejs",Todo.findAll());
	 * 
	 * ## Just Render Templates
	 * 
	 * Sometimes, you just want to get the result of a rendered 
	 * template without inserting it, you can do this with $.View: 
	 * 
	 *     var out = $.View('path/to/template.jaml',{});
	 *     
	 * ## Preloading Templates
	 * 
	 * You can preload templates asynchronously like:
	 * 
	 *     $.get('path/to/template.jaml',{},function(){},'view');
	 * 
	 * ## Supported Template Engines
	 * 
	 * JavaScriptMVC comes with the following template languages:
	 * 
	 *   - EmbeddedJS
	 *     <pre><code>&lt;h2>&lt;%= message %>&lt;/h2></code></pre>
	 *     
	 *   - JAML
	 *     <pre><code>h2(data.message);</code></pre>
	 *     
	 *   - Micro
	 *     <pre><code>&lt;h2>{%= message %}&lt;/h2></code></pre>
	 *     
	 *   - jQuery.Tmpl
	 *     <pre><code>&lt;h2>${message}&lt;/h2></code></pre>
	 
	 * 
	 * The popular <a href='http://awardwinningfjords.com/2010/08/09/mustache-for-javascriptmvc-3.html'>Mustache</a> 
	 * template engine is supported in a 2nd party plugin.
	 * 
	 * ## Using other Template Engines
	 * 
	 * It's easy to integrate your favorite template into $.View and Steal.  Read 
	 * how in [jQuery.View.register].
	 * 
	 * @constructor
	 * 
	 * Looks up a template, processes it, caches it, then renders the template
	 * with data and optional helpers.
	 * 
	 * With [stealjs StealJS], views are typically bundled in the production build.
	 * This makes it ok to use views synchronously like:
	 * 
	 * @codestart
	 * $.View("//myplugin/views/init.ejs",{message: "Hello World"})
	 * @codeend
	 * 
	 * If you aren't using StealJS, it's best to use views asynchronously like:
	 * 
	 * @codestart
	 * $.View("//myplugin/views/init.ejs",
	 *        {message: "Hello World"}, function(result){
	 *   // do something with result
	 * })
	 * @codeend
	 * 
	 * @param {String} view The url or id of an element to use as the template's source.
	 * @param {Object} data The data to be passed to the view.
	 * @param {Object} [helpers] Optional helper functions the view might use. Not all
	 * templates support helpers.
	 * @param {Object} [callback] Optional callback function.  If present, the template is 
	 * retrieved asynchronously.  This is a good idea if you aren't compressing the templates
	 * into your view.
	 * @return {String} The rendered result of the view or if deferreds are passed, a deferred that will contain
	 * the rendered result of the view.
	 */

	var $view, render, checkText, get, getRenderer, isDeferred = function( obj ) {
		return obj && $.isFunction(obj.always) // check if obj is a $.Deferred
	},
		// gets an array of deferreds from an object
		// this only goes one level deep
		getDeferreds = function( data ) {
			var deferreds = [];

			// pull out deferreds
			if ( isDeferred(data) ) {
				return [data]
			} else {
				for ( var prop in data ) {
					if ( isDeferred(data[prop]) ) {
						deferreds.push(data[prop]);
					}
				}
			}
			return deferreds;
		},
		// gets the useful part of deferred
		// this is for Models and $.ajax that give arrays
		usefulPart = function( resolved ) {
			return $.isArray(resolved) && resolved.length === 3 && resolved[1] === 'success' ? resolved[0] : resolved
		};

	$view = $.View = function( view, data, helpers, callback ) {
		if ( typeof helpers === 'function' ) {
			callback = helpers;
			helpers = undefined;
		}

		// see if we got passed any deferreds
		var deferreds = getDeferreds(data);


		if ( deferreds.length ) { // does data contain any deferreds?
			// the deferred that resolves into the rendered content ...
			var deferred = $.Deferred();

			// add the view request to the list of deferreds
			deferreds.push(get(view, true))

			// wait for the view and all deferreds to finish
			$.when.apply($, deferreds).then(function( resolved ) {
				var objs = $.makeArray(arguments),
					renderer = objs.pop()[0],
					result; //get the view render function
				// make data look like the resolved deferreds
				if ( isDeferred(data) ) {
					data = usefulPart(resolved);
				}
				else {
					for ( var prop in data ) {
						if ( isDeferred(data[prop]) ) {
							data[prop] = usefulPart(objs.shift());
						}
					}
				}
				result = renderer(data, helpers);

				//resolve with the rendered view
				deferred.resolve(result); // this does not work as is...
				callback && callback(result);
			});
			// return the deferred ....
			return deferred.promise();
		}
		else {

			var response, async = typeof callback === "function",
				deferred = get(view, async);

			if ( async ) {
				response = deferred;
				deferred.done(function( renderer ) {
					callback(renderer(data, helpers))
				})
			} else {
				deferred.done(function( renderer ) {
					response = renderer(data, helpers);
				});
			}

			return response;
		}
	};
	// makes sure there's a template
	checkText = function( text, url ) {
		if (!text.match(/[^\s]/) ) {
			
			throw "$.View ERROR: There is no template or an empty template at " + url;
		}
	};
	get = function( url, async ) {
		return $.ajax({
			url: url,
			dataType: "view",
			async: async
		});
	};

	// you can request a view renderer (a function you pass data to and get html)
	$.ajaxTransport("view", function( options, orig ) {
		var view = orig.url,
			suffix = view.match(/\.[\w\d]+$/),
			type, el, id, renderer, url = view,
			jqXHR, response = function( text ) {
				var func = type.renderer(id, text);
				if ( $view.cache ) {
					$view.cached[id] = func;
				}
				return {
					view: func
				};
			};

		// if we have an inline template, derive the suffix from the 'text/???' part
		// this only supports '<script></script>' tags
		if ( el = document.getElementById(view) ) {
			suffix = el.type.match(/\/[\d\w]+$/)[0].replace(/^\//, '.');
		}

		//if there is no suffix, add one
		if (!suffix ) {
			suffix = $view.ext;
			url = url + $view.ext;
		}

		//convert to a unique and valid id
		id = toId(url);

		//if a absolute path, use steal to get it
		if ( url.match(/^\/\//) ) {
			if ( typeof steal === "undefined" ) {
				url = "/" + url.substr(2);
			}
			else {
				url = steal.root.mapJoin(url.substr(2));
			}
		}

		//get the template engine
		type = $view.types[suffix];

		return {
			send: function( headers, callback ) {
				if ( $view.cached[id] ) {
					return callback(200, "success", {
						view: $view.cached[id]
					});
				} else if ( el ) {
					callback(200, "success", response(el.innerHTML));
				} else {
					jqXHR = $.ajax({
						async: orig.async,
						url: url,
						dataType: "text",
						error: function() {
							checkText("", url);
							callback(404);
						},
						success: function( text ) {
							checkText(text, url);
							callback(200, "success", response(text))
						}
					});
				}
			},
			abort: function() {
				jqXHR && jqXHR.abort();
			}
		}
	})
	$.extend($view, {
		/**
		 * @attribute hookups
		 * @hide
		 * A list of pending 'hookups'
		 */
		hookups: {},
		/**
		 * @function hookup
		 * Registers a hookup function that can be called back after the html is 
		 * put on the page.  Typically this is handled by the template engine.  Currently
		 * only EJS supports this functionality.
		 * 
		 *     var id = $.View.hookup(function(el){
		 *            //do something with el
		 *         }),
		 *         html = "<div data-view-id='"+id+"'>"
		 *     $('.foo').html(html);
		 * 
		 * 
		 * @param {Function} cb a callback function to be called with the element
		 * @param {Number} the hookup number
		 */
		hookup: function( cb ) {
			var myid = ++id;
			$view.hookups[myid] = cb;
			return myid;
		},
		/**
		 * @attribute cached
		 * @hide
		 * Cached are put in this object
		 */
		cached: {},
		/**
		 * @attribute cache
		 * Should the views be cached or reloaded from the server. Defaults to true.
		 */
		cache: true,
		/**
		 * @function register
		 * Registers a template engine to be used with 
		 * view helpers and compression.  
		 * 
		 * ## Example
		 * 
		 * @codestart
		 * $.View.register({
		 * 	suffix : "tmpl",
		 *  plugin : "jquery/view/tmpl",
		 * 	renderer: function( id, text ) {
		 * 		return function(data){
		 * 			return jQuery.render( text, data );
		 * 		}
		 * 	},
		 * 	script: function( id, text ) {
		 * 		var tmpl = $.tmpl(text).toString();
		 * 		return "function(data){return ("+
		 * 		  	tmpl+
		 * 			").call(jQuery, jQuery, data); }";
		 * 	}
		 * })
		 * @codeend
		 * Here's what each property does:
		 * 
		 *    * plugin - the location of the plugin
		 *    * suffix - files that use this suffix will be processed by this template engine
		 *    * renderer - returns a function that will render the template provided by text
		 *    * script - returns a string form of the processed template function.
		 * 
		 * @param {Object} info a object of method and properties 
		 * 
		 * that enable template integration:
		 * <ul>
		 *   <li>plugin - the location of the plugin.  EX: 'jquery/view/ejs'</li>
		 *   <li>suffix - the view extension.  EX: 'ejs'</li>
		 *   <li>script(id, src) - a function that returns a string that when evaluated returns a function that can be 
		 *    used as the render (i.e. have func.call(data, data, helpers) called on it).</li>
		 *   <li>renderer(id, text) - a function that takes the id of the template and the text of the template and
		 *    returns a render function.</li>
		 * </ul>
		 */
		register: function( info ) {
			this.types["." + info.suffix] = info;

			if ( window.steal ) {
				steal.type(info.suffix + " view js", function( options, orig, success, error ) {
					var type = $view.types["." + options.type],
						id = toId(options.rootSrc);

					options.text = type.script(id, options.text)
					success();
				})
			}
		},
		types: {},
		/**
		 * @attribute ext
		 * The default suffix to use if none is provided in the view's url.  
		 * This is set to .ejs by default.
		 */
		ext: ".ejs",
		/**
		 * Returns the text that 
		 * @hide 
		 * @param {Object} type
		 * @param {Object} id
		 * @param {Object} src
		 */
		registerScript: function( type, id, src ) {
			return "$.View.preload('" + id + "'," + $view.types["." + type].script(id, src) + ");";
		},
		/**
		 * @hide
		 * Called by a production script to pre-load a renderer function
		 * into the view cache.
		 * @param {String} id
		 * @param {Function} renderer
		 */
		preload: function( id, renderer ) {
			$view.cached[id] = function( data, helpers ) {
				return renderer.call(data, data, helpers);
			};
		}

	});
	if ( window.steal ) {
		steal.type("view js", function( options, orig, success, error ) {
			var type = $view.types["." + options.type],
				id = toId(options.rootSrc);

			options.text = "steal('" + (type.plugin || "jquery/view/" + options.type) + "').then(function($){" + "$.View.preload('" + id + "'," + options.text + ");\n})";
			success();
		})
	}

	//---- ADD jQUERY HELPERS -----
	//converts jquery functions to use views	
	var convert, modify, isTemplate, isHTML, getCallback, hookupView, funcs;

	convert = function( func_name ) {
		var old = $.fn[func_name];

		$.fn[func_name] = function() {
			var args = $.makeArray(arguments),
				callbackNum, callback, self = this,
				result;
			if ( isDeferred(args[0]) ) {
				args[0].done(function( res ) {
					modify.call(self, [res], old);
				})
				return this;
			}
			//check if a template
			else if ( isTemplate(args) ) {

				// if we should operate async
				if ((callbackNum = getCallback(args))) {
					callback = args[callbackNum];
					args[callbackNum] = function( result ) {
						modify.call(self, [result], old);
						callback.call(self, result);
					};
					$view.apply($view, args);
					return this;
				}
				result = $view.apply($view, args);
				if (!isDeferred(result) ) {
					args = [result];
				} else {
					result.done(function( res ) {
						modify.call(self, [res], old);
					})
					return this;
				}
			}
			return modify.call(this, args, old);

		};
	};

	// modifies the html of the element
	modify = function( args, old ) {
		var res, stub, hooks;

		//check if there are new hookups
		for ( var hasHookups in $view.hookups ) {
			break;
		}

		//if there are hookups, get jQuery object
		if ( hasHookups && args[0] && isHTML(args[0]) ) {
			hooks = $view.hookups;
			$view.hookups = {};
			args[0] = $(args[0]);
		}
		res = old.apply(this, args);

		//now hookup the hookups
		if ( hooks
		/* && args.length*/
		) {
			hookupView(args[0], hooks);
		}
		return res;
	};

	// returns true or false if the args indicate a template is being used
	isTemplate = function( args ) {
		var secArgType = typeof args[1];

		return typeof args[0] == "string" && (secArgType == 'object' || secArgType == 'function') && !args[1].nodeType && !args[1].jquery;
	};

	// returns whether the argument is some sort of HTML data
	isHTML = function( arg ) {
		if ( arg.jquery || arg.nodeType === 1 ) {
			// if jQuery object or DOM node we're good
			return true;
		} else if ( typeof arg === "string" ) {
			// if string, do a quick sanity check that we're HTML
			arg = $.trim(arg);
			return arg.substr(0, 1) === "<" && arg.substr(arg.length - 1, 1) === ">" && arg.length >= 3;
		} else {
			// don't know what you are
			return false;
		}
	};

	//returns the callback if there is one (for async view use)
	getCallback = function( args ) {
		return typeof args[3] === 'function' ? 3 : typeof args[2] === 'function' && 2;
	};

	hookupView = function( els, hooks ) {
		//remove all hookups
		var hookupEls, len, i = 0,
			id, func;
		els = els.filter(function() {
			return this.nodeType != 3; //filter out text nodes
		})
		hookupEls = els.add("[data-view-id]", els);
		len = hookupEls.length;
		for (; i < len; i++ ) {
			if ( hookupEls[i].getAttribute && (id = hookupEls[i].getAttribute('data-view-id')) && (func = hooks[id]) ) {
				func(hookupEls[i], id);
				delete hooks[id];
				hookupEls[i].removeAttribute('data-view-id');
			}
		}
		//copy remaining hooks back
		$.extend($view.hookups, hooks);
	};

	/**
	 *  @add jQuery.fn
	 *  @parent jQuery.View
	 *  Called on a jQuery collection that was rendered with $.View with pending hookups.  $.View can render a 
	 *  template with hookups, but not actually perform the hookup, because it returns a string without actual DOM 
	 *  elements to hook up to.  So hookup performs the hookup and clears the pending hookups, preventing errors in 
	 *  future templates.
	 *  
	 * @codestart
	 * $($.View('//views/recipes.ejs',recipeData)).hookup()
	 * @codeend
	 */
	$.fn.hookup = function() {
		var hooks = $view.hookups;
		$view.hookups = {};
		hookupView(this, hooks);
		return this;
	};

	/**
	 *  @add jQuery.fn
	 */
	funcs = [
	/**
	 *  @function prepend
	 *  @parent jQuery.View
	 *  
	 *  Extending the original [http://api.jquery.com/prepend/ jQuery().prepend()]
	 *  to render [jQuery.View] templates inserted at the beginning of each element in the set of matched elements.
	 *  
	 *  	$('#test').prepend('path/to/template.ejs', { name : 'javascriptmvc' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or jQuery object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 */
	"prepend",
	/**
	 *  @function append
	 *  @parent jQuery.View
	 *  
	 *  Extending the original [http://api.jquery.com/append/ jQuery().append()]
	 *  to render [jQuery.View] templates inserted at the end of each element in the set of matched elements.
	 *  
	 *  	$('#test').append('path/to/template.ejs', { name : 'javascriptmvc' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or jQuery object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 */
	"append",
	/**
	 *  @function after
	 *  @parent jQuery.View
	 *  
	 *  Extending the original [http://api.jquery.com/after/ jQuery().after()]
	 *  to render [jQuery.View] templates inserted after each element in the set of matched elements.
	 *  
	 *  	$('#test').after('path/to/template.ejs', { name : 'javascriptmvc' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or jQuery object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 */
	"after",
	/**
	 *  @function before
	 *  @parent jQuery.View
	 *  
	 *  Extending the original [http://api.jquery.com/before/ jQuery().before()]
	 *  to render [jQuery.View] templates inserted before each element in the set of matched elements.
	 *  
	 *  	$('#test').before('path/to/template.ejs', { name : 'javascriptmvc' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or jQuery object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 */
	"before",
	/**
	 *  @function text
	 *  @parent jQuery.View
	 *  
	 *  Extending the original [http://api.jquery.com/text/ jQuery().text()]
	 *  to render [jQuery.View] templates as the content of each matched element.
	 *  Unlike [jQuery.fn.html] jQuery.fn.text also works with XML, escaping the provided
	 *  string as necessary.
	 *  
	 *  	$('#test').text('path/to/template.ejs', { name : 'javascriptmvc' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or jQuery object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 */
	"text",
	/**
	 *  @function html
	 *  @parent jQuery.View
	 *  
	 *  Extending the original [http://api.jquery.com/html/ jQuery().html()]
	 *  to render [jQuery.View] templates as the content of each matched element.
	 *  
	 *  	$('#test').html('path/to/template.ejs', { name : 'javascriptmvc' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or jQuery object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 */
	"html",
	/**
	 *  @function replaceWith
	 *  @parent jQuery.View
	 *  
	 *  Extending the original [http://api.jquery.com/replaceWith/ jQuery().replaceWith()]
	 *  to render [jQuery.View] templates replacing each element in the set of matched elements.
	 *  
	 *  	$('#test').replaceWith('path/to/template.ejs', { name : 'javascriptmvc' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or jQuery object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 */
	"replaceWith", "val"];

	//go through helper funcs and convert
	for ( var i = 0; i < funcs.length; i++ ) {
		convert(funcs[i]);
	}

});;
steal.loaded('jquery/view/view.js');
steal('jquery/lang/string',function( $ ) {
	/**
	 * @add jQuery.String
	 */
	$.String.
	/**
	 * Splits a string with a regex correctly cross browser
	 * 
	 *     $.String.rsplit("a.b.c.d", /\./) //-> ['a','b','c','d']
	 * 
	 * @param {String} string The string to split
	 * @param {RegExp} regex A regular expression
	 * @return {Array} An array of strings
	 */
	rsplit = function( string, regex ) {
		var result = regex.exec(string),
			retArr = [],
			first_idx, last_idx;
		while ( result !== null ) {
			first_idx = result.index;
			last_idx = regex.lastIndex;
			if ( first_idx !== 0 ) {
				retArr.push(string.substring(0, first_idx));
				string = string.slice(first_idx);
			}
			retArr.push(result[0]);
			string = string.slice(result[0].length);
			result = regex.exec(string);
		}
		if ( string !== '' ) {
			retArr.push(string);
		}
		return retArr;
	};
});;
steal.loaded('jquery/lang/string/rsplit/rsplit.js');
/**
 * @page jquerymx.lang Language Helpers
 * @parent jquerymx
 * JavaScriptMVC has several lightweight language helper plugins.
 * 
 * ## [jQuery.Object Object]
 * 
 * Methods useful for comparing Objects. For example, if two
 * objects are the same:
 * 
 *     $.Object.same({foo: "bar"}, {foo: "bar"});
 *     
 * ## [jQuery.Observe Observe]
 * 
 * Makes an Object's properties observable:
 * 
 *     var person = new $.Observe({ name: "Justin" })
 *     person.bind('change', function(){ ... })
 *     person.attr('name', "Brian");
 *     
 * ## [jQuery.String String]
 * 
 * String helpers capitalize, underscore, and perform similar manipulations
 * on strings.  They can also lookup a value in an object:
 * 
 *    $.String.getObject("foo.bar",{foo: {bar: "car"}})
 * 
 * ## [jQuery.toJSON toJSON]
 * 
 * Used to create or consume JSON strings.
 * 
 * ## [jQuery.Vector Vector]
 * 
 * Used for vector math.
 */
//string helpers
steal('jquery').then(function( $ ) {
	// Several of the methods in this plugin use code adapated from Prototype
	//  Prototype JavaScript framework, version 1.6.0.1
	//  (c) 2005-2007 Sam Stephenson
	var regs = {
		undHash: /_|-/,
		colons: /::/,
		words: /([A-Z]+)([A-Z][a-z])/g,
		lowUp: /([a-z\d])([A-Z])/g,
		dash: /([a-z\d])([A-Z])/g,
		replacer: /\{([^\}]+)\}/g,
		dot: /\./
	},
		getNext = function(current, nextPart, add){
			return current[nextPart] !== undefined ? current[nextPart] : ( add && (current[nextPart] = {}) );
		},
		isContainer = function(current){
			var type = typeof current;
			return type && (  type == 'function' || type == 'object' );
		},
		getObject = function( objectName, roots, add ) {
			
			var parts = objectName ? objectName.split(regs.dot) : [],
				length =  parts.length,
				currents = $.isArray(roots) ? roots : [roots || window],
				current,
				ret, 
				i,
				c = 0,
				type;
			
			if(length == 0){
				return currents[0];
			}
			while(current = currents[c++]){
				for (i =0; i < length - 1 && isContainer(current); i++ ) {
					current = getNext(current, parts[i], add);
				}
				if( isContainer(current) ) {
					
					ret = getNext(current, parts[i], add); 
					
					if( ret !== undefined ) {
						
						if ( add === false ) {
							delete current[parts[i]];
						}
						return ret;
						
					}
					
				}
			}
		},

		/** 
		 * @class jQuery.String
		 * @parent jquerymx.lang
		 * 
		 * A collection of useful string helpers. Available helpers are:
		 * <ul>
		 *   <li>[jQuery.String.capitalize|capitalize]: Capitalizes a string (some_string &raquo; Some_string)</li>
		 *   <li>[jQuery.String.camelize|camelize]: Capitalizes a string from something undercored 
		 *       (some_string &raquo; someString, some-string &raquo; someString)</li>
		 *   <li>[jQuery.String.classize|classize]: Like [jQuery.String.camelize|camelize], 
		 *       but the first part is also capitalized (some_string &raquo; SomeString)</li>
		 *   <li>[jQuery.String.niceName|niceName]: Like [jQuery.String.classize|classize], but a space separates each 'word' (some_string &raquo; Some String)</li>
		 *   <li>[jQuery.String.underscore|underscore]: Underscores a string (SomeString &raquo; some_string)</li>
		 *   <li>[jQuery.String.sub|sub]: Returns a string with {param} replaced values from data.
		 *       <code><pre>
		 *       $.String.sub("foo {bar}",{bar: "far"})
		 *       //-> "foo far"</pre></code>
		 *   </li>
		 * </ul>
		 * 
		 */
		str = $.String = $.extend( $.String || {} , {
			
			
			/**
			 * @function getObject
			 * Gets an object from a string.
			 * 
			 *     Foo = {Bar: {Zar: {"Ted"}}}
		 	 *     $.String.getobject("Foo.Bar.Zar") //-> "Ted"
			 * 
			 * @param {String} name the name of the object to look for
			 * @param {Array} [roots] an array of root objects to look for the 
			 *   name.  If roots is not provided, the window is used.
			 * @param {Boolean} [add] true to add missing objects to 
			 *  the path. false to remove found properties. undefined to 
			 *  not modify the root object
			 * @return {Object} The object.
			 */
			getObject : getObject,
			/**
			 * Capitalizes a string
			 * @param {String} s the string.
			 * @return {String} a string with the first character capitalized.
			 */
			capitalize: function( s, cache ) {
				return s.charAt(0).toUpperCase() + s.substr(1);
			},
			/**
			 * Capitalizes a string from something undercored. Examples:
			 * @codestart
			 * jQuery.String.camelize("one_two") //-> "oneTwo"
			 * "three-four".camelize() //-> threeFour
			 * @codeend
			 * @param {String} s
			 * @return {String} a the camelized string
			 */
			camelize: function( s ) {
				s = str.classize(s);
				return s.charAt(0).toLowerCase() + s.substr(1);
			},
			/**
			 * Like [jQuery.String.camelize|camelize], but the first part is also capitalized
			 * @param {String} s
			 * @return {String} the classized string
			 */
			classize: function( s , join) {
				var parts = s.split(regs.undHash),
					i = 0;
				for (; i < parts.length; i++ ) {
					parts[i] = str.capitalize(parts[i]);
				}

				return parts.join(join || '');
			},
			/**
			 * Like [jQuery.String.classize|classize], but a space separates each 'word'
			 * @codestart
			 * jQuery.String.niceName("one_two") //-> "One Two"
			 * @codeend
			 * @param {String} s
			 * @return {String} the niceName
			 */
			niceName: function( s ) {
				return str.classize(s,' ');
			},

			/**
			 * Underscores a string.
			 * @codestart
			 * jQuery.String.underscore("OneTwo") //-> "one_two"
			 * @codeend
			 * @param {String} s
			 * @return {String} the underscored string
			 */
			underscore: function( s ) {
				return s.replace(regs.colons, '/').replace(regs.words, '$1_$2').replace(regs.lowUp, '$1_$2').replace(regs.dash, '_').toLowerCase();
			},
			/**
			 * Returns a string with {param} replaced values from data.
			 * 
			 *     $.String.sub("foo {bar}",{bar: "far"})
			 *     //-> "foo far"
			 *     
			 * @param {String} s The string to replace
			 * @param {Object} data The data to be used to look for properties.  If it's an array, multiple
			 * objects can be used.
			 * @param {Boolean} [remove] if a match is found, remove the property from the object
			 */
			sub: function( s, data, remove ) {
				var obs = [];
				obs.push(s.replace(regs.replacer, function( whole, inside ) {
					//convert inside to type
					var ob = getObject(inside, data, typeof remove == 'boolean' ? !remove : remove),
						type = typeof ob;
					if((type === 'object' || type === 'function') && type !== null){
						obs.push(ob);
						return "";
					}else{
						return ""+ob;
					}
				}));
				return obs.length <= 1 ? obs[0] : obs;
			},
			_regs : regs
		});
});;
steal.loaded('jquery/lang/string/string.js');
/*
* jQuery Mobile Framework 1.0
* http://jquerymobile.com
*
* Copyright 2011 (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
*/
/*!
 * jQuery UI Widget @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */

(function( $, undefined ) {

// jQuery 1.4+
if ( $.cleanData ) {
	var _cleanData = $.cleanData;
	$.cleanData = function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			$( elem ).triggerHandler( "remove" );
		}
		_cleanData( elems );
	};
} else {
	var _remove = $.fn.remove;
	$.fn.remove = function( selector, keepData ) {
		return this.each(function() {
			if ( !keepData ) {
				if ( !selector || $.filter( selector, [ this ] ).length ) {
					$( "*", this ).add( [ this ] ).each(function() {
						$( this ).triggerHandler( "remove" );
					});
				}
			}
			return _remove.call( $(this), selector, keepData );
		});
	};
}

$.widget = function( name, base, prototype ) {
	var namespace = name.split( "." )[ 0 ],
		fullName;
	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName ] = function( elem ) {
		return !!$.data( elem, name );
	};

	$[ namespace ] = $[ namespace ] || {};
	$[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without initializing for simple inheritance
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	var basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
//	$.each( basePrototype, function( key, val ) {
//		if ( $.isPlainObject(val) ) {
//			basePrototype[ key ] = $.extend( {}, val );
//		}
//	});
	basePrototype.options = $.extend( true, {}, basePrototype.options );
	$[ namespace ][ name ].prototype = $.extend( true, basePrototype, {
		namespace: namespace,
		widgetName: name,
		widgetEventPrefix: $[ namespace ][ name ].prototype.widgetEventPrefix || name,
		widgetBaseClass: fullName
	}, prototype );

	$.widget.bridge( name, $[ namespace ][ name ] );
};

$.widget.bridge = function( name, object ) {
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = Array.prototype.slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.extend.apply( null, [ true, options ].concat(args) ) :
			options;

		// prevent calls to internal methods
		if ( isMethodCall && options.charAt( 0 ) === "_" ) {
			return returnValue;
		}

		if ( isMethodCall ) {
			this.each(function() {
				var instance = $.data( this, name );
				if ( !instance ) {
					throw "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'";
				}
				if ( !$.isFunction( instance[options] ) ) {
					throw "no such method '" + options + "' for " + name + " widget instance";
				}
				var methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, name );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, name, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( options, element ) {
	// allow instantiation without initializing for simple inheritance
	if ( arguments.length ) {
		this._createWidget( options, element );
	}
};

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	options: {
		disabled: false
	},
	_createWidget: function( options, element ) {
		// $.widget.bridge stores the plugin instance, but we do it anyway
		// so that it's stored even before the _create function runs
		$.data( element, this.widgetName, this );
		this.element = $( element );
		this.options = $.extend( true, {},
			this.options,
			this._getCreateOptions(),
			options );

		var self = this;
		this.element.bind( "remove." + this.widgetName, function() {
			self.destroy();
		});

		this._create();
		this._trigger( "create" );
		this._init();
	},
	_getCreateOptions: function() {
		var options = {};
		if ( $.metadata ) {
			options = $.metadata.get( element )[ this.widgetName ];
		}
		return options;
	},
	_create: function() {},
	_init: function() {},

	destroy: function() {
		this.element
			.unbind( "." + this.widgetName )
			.removeData( this.widgetName );
		this.widget()
			.unbind( "." + this.widgetName )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetBaseClass + "-disabled " +
				"ui-state-disabled" );
	},

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.extend( {}, this.options );
		}

		if  (typeof key === "string" ) {
			if ( value === undefined ) {
				return this.options[ key ];
			}
			options = {};
			options[ key ] = value;
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var self = this;
		$.each( options, function( key, value ) {
			self._setOption( key, value );
		});

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				[ value ? "addClass" : "removeClass"](
					this.widgetBaseClass + "-disabled" + " " +
					"ui-state-disabled" )
				.attr( "aria-disabled", value );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_trigger: function( type, event, data ) {
		var callback = this.options[ type ];

		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		data = data || {};

		// copy original event properties over to the new event
		// this would happen if we could call $.event.fix instead of $.Event
		// but we don't have a way to force an event to be fixed multiple times
		if ( event.originalEvent ) {
			for ( var i = $.event.props.length, prop; i; ) {
				prop = $.event.props[ --i ];
				event[ prop ] = event.originalEvent[ prop ];
			}
		}

		this.element.trigger( event, data );

		return !( $.isFunction(callback) &&
			callback.call( this.element[0], event, data ) === false ||
			event.isDefaultPrevented() );
	}
};

})( jQuery );
/*
* widget factory extentions for mobile
*/

(function( $, undefined ) {

$.widget( "mobile.widget", {
	// decorate the parent _createWidget to trigger `widgetinit` for users
	// who wish to do post post `widgetcreate` alterations/additions
	//
	// TODO create a pull request for jquery ui to trigger this event
	// in the original _createWidget
	_createWidget: function() {
		$.Widget.prototype._createWidget.apply( this, arguments );
		this._trigger( 'init' );
	},

	_getCreateOptions: function() {

		var elem = this.element,
			options = {};

		$.each( this.options, function( option ) {

			var value = elem.jqmData( option.replace( /[A-Z]/g, function( c ) {
							return "-" + c.toLowerCase();
						})
					);

			if ( value !== undefined ) {
				options[ option ] = value;
			}
		});

		return options;
	},

	enhanceWithin: function( target ) {
		// TODO remove dependency on the page widget for the keepNative.
		// Currently the keepNative value is defined on the page prototype so
		// the method is as well
		var page = $(target).closest(":jqmData(role='page')").data( "page" ),
			keepNative = (page && page.keepNativeSelector()) || "";

		$( this.options.initSelector, target ).not( keepNative )[ this.widgetName ]();
	}
});

})( jQuery );
/*
* a workaround for window.matchMedia
*/

(function( $, undefined ) {

var $window = $( window ),
	$html = $( "html" );

/* $.mobile.media method: pass a CSS media type or query and get a bool return
	note: this feature relies on actual media query support for media queries, though types will work most anywhere
	examples:
		$.mobile.media('screen') //>> tests for screen media type
		$.mobile.media('screen and (min-width: 480px)') //>> tests for screen media type with window width > 480px
		$.mobile.media('@media screen and (-webkit-min-device-pixel-ratio: 2)') //>> tests for webkit 2x pixel ratio (iPhone 4)
*/
$.mobile.media = (function() {
	// TODO: use window.matchMedia once at least one UA implements it
	var cache = {},
		testDiv = $( "<div id='jquery-mediatest'>" ),
		fakeBody = $( "<body>" ).append( testDiv );

	return function( query ) {
		if ( !( query in cache ) ) {
			var styleBlock = document.createElement( "style" ),
				cssrule = "@media " + query + " { #jquery-mediatest { position:absolute; } }";

			//must set type for IE!
			styleBlock.type = "text/css";

			if ( styleBlock.styleSheet  ){
				styleBlock.styleSheet.cssText = cssrule;
			} else {
				styleBlock.appendChild( document.createTextNode(cssrule) );
			}

			$html.prepend( fakeBody ).prepend( styleBlock );
			cache[ query ] = testDiv.css( "position" ) === "absolute";
			fakeBody.add( styleBlock ).remove();
		}
		return cache[ query ];
	};
})();

})(jQuery);
/*
* support tests
*/

(function( $, undefined ) {

var fakeBody = $( "<body>" ).prependTo( "html" ),
	fbCSS = fakeBody[ 0 ].style,
	vendors = [ "Webkit", "Moz", "O" ],
	webos = "palmGetResource" in window, //only used to rule out scrollTop
	operamini = window.operamini && ({}).toString.call( window.operamini ) === "[object OperaMini]",
	bb = window.blackberry; //only used to rule out box shadow, as it's filled opaque on BB

// thx Modernizr
function propExists( prop ) {
	var uc_prop = prop.charAt( 0 ).toUpperCase() + prop.substr( 1 ),
		props = ( prop + " " + vendors.join( uc_prop + " " ) + uc_prop ).split( " " );

	for ( var v in props ){
		if ( fbCSS[ props[ v ] ] !== undefined ) {
			return true;
		}
	}
}

// Test for dynamic-updating base tag support ( allows us to avoid href,src attr rewriting )
function baseTagTest() {
	var fauxBase = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
		base = $( "head base" ),
		fauxEle = null,
		href = "",
		link, rebase;

	if ( !base.length ) {
		base = fauxEle = $( "<base>", { "href": fauxBase }).appendTo( "head" );
	} else {
		href = base.attr( "href" );
	}

	link = $( "<a href='testurl' />" ).prependTo( fakeBody );
	rebase = link[ 0 ].href;
	base[ 0 ].href = href || location.pathname;

	if ( fauxEle ) {
		fauxEle.remove();
	}
	return rebase.indexOf( fauxBase ) === 0;
}


// non-UA-based IE version check by James Padolsey, modified by jdalton - from http://gist.github.com/527683
// allows for inclusion of IE 6+, including Windows Mobile 7
$.mobile.browser = {};
$.mobile.browser.ie = (function() {
	var v = 3,
	div = document.createElement( "div" ),
	a = div.all || [];

	while ( div.innerHTML = "<!--[if gt IE " + ( ++v ) + "]><br><![endif]-->", a[ 0 ] );

	return v > 4 ? v : !v;
})();


$.extend( $.support, {
	orientation: "orientation" in window && "onorientationchange" in window,
	touch: "ontouchend" in document,
	cssTransitions: "WebKitTransitionEvent" in window,
	pushState: "pushState" in history && "replaceState" in history,
	mediaquery: $.mobile.media( "only all" ),
	cssPseudoElement: !!propExists( "content" ),
	touchOverflow: !!propExists( "overflowScrolling" ),
	boxShadow: !!propExists( "boxShadow" ) && !bb,
	scrollTop: ( "pageXOffset" in window || "scrollTop" in document.documentElement || "scrollTop" in fakeBody[ 0 ] ) && !webos && !operamini,
	dynamicBaseTag: baseTagTest()
});

fakeBody.remove();


// $.mobile.ajaxBlacklist is used to override ajaxEnabled on platforms that have known conflicts with hash history updates (BB5, Symbian)
// or that generally work better browsing in regular http for full page refreshes (Opera Mini)
// Note: This detection below is used as a last resort.
// We recommend only using these detection methods when all other more reliable/forward-looking approaches are not possible
var nokiaLTE7_3 = (function(){

	var ua = window.navigator.userAgent;

	//The following is an attempt to match Nokia browsers that are running Symbian/s60, with webkit, version 7.3 or older
	return ua.indexOf( "Nokia" ) > -1 &&
			( ua.indexOf( "Symbian/3" ) > -1 || ua.indexOf( "Series60/5" ) > -1 ) &&
			ua.indexOf( "AppleWebKit" ) > -1 &&
			ua.match( /(BrowserNG|NokiaBrowser)\/7\.[0-3]/ );
})();

$.mobile.ajaxBlacklist =
			// BlackBerry browsers, pre-webkit
			window.blackberry && !window.WebKitPoint ||
			// Opera Mini
			operamini ||
			// Symbian webkits pre 7.3
			nokiaLTE7_3;

// Lastly, this workaround is the only way we've found so far to get pre 7.3 Symbian webkit devices
// to render the stylesheets when they're referenced before this script, as we'd recommend doing.
// This simply reappends the CSS in place, which for some reason makes it apply
if ( nokiaLTE7_3 ) {
	$(function() {
		$( "head link[rel='stylesheet']" ).attr( "rel", "alternate stylesheet" ).attr( "rel", "stylesheet" );
	});
}

// For ruling out shadows via css
if ( !$.support.boxShadow ) {
	$( "html" ).addClass( "ui-mobile-nosupport-boxshadow" );
}

})( jQuery );
/*
* "mouse" plugin
*/

// This plugin is an experiment for abstracting away the touch and mouse
// events so that developers don't have to worry about which method of input
// the device their document is loaded on supports.
//
// The idea here is to allow the developer to register listeners for the
// basic mouse events, such as mousedown, mousemove, mouseup, and click,
// and the plugin will take care of registering the correct listeners
// behind the scenes to invoke the listener at the fastest possible time
// for that device, while still retaining the order of event firing in
// the traditional mouse environment, should multiple handlers be registered
// on the same element for different events.
//
// The current version exposes the following virtual events to jQuery bind methods:
// "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"

(function( $, window, document, undefined ) {

var dataPropertyName = "virtualMouseBindings",
	touchTargetPropertyName = "virtualTouchID",
	virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split( " " ),
	touchEventProps = "clientX clientY pageX pageY screenX screenY".split( " " ),
	activeDocHandlers = {},
	resetTimerID = 0,
	startX = 0,
	startY = 0,
	didScroll = false,
	clickBlockList = [],
	blockMouseTriggers = false,
	blockTouchTriggers = false,
	eventCaptureSupported = "addEventListener" in document,
	$document = $( document ),
	nextTouchID = 1,
	lastTouchID = 0;

$.vmouse = {
	moveDistanceThreshold: 10,
	clickDistanceThreshold: 10,
	resetTimerDuration: 1500
};

function getNativeEvent( event ) {

	while ( event && typeof event.originalEvent !== "undefined" ) {
		event = event.originalEvent;
	}
	return event;
}

function createVirtualEvent( event, eventType ) {

	var t = event.type,
		oe, props, ne, prop, ct, touch, i, j;

	event = $.Event(event);
	event.type = eventType;

	oe = event.originalEvent;
	props = $.event.props;

	// copy original event properties over to the new event
	// this would happen if we could call $.event.fix instead of $.Event
	// but we don't have a way to force an event to be fixed multiple times
	if ( oe ) {
		for ( i = props.length, prop; i; ) {
			prop = props[ --i ];
			event[ prop ] = oe[ prop ];
		}
	}

	// make sure that if the mouse and click virtual events are generated
	// without a .which one is defined
	if ( t.search(/mouse(down|up)|click/) > -1 && !event.which ){
		event.which = 1;
	}

	if ( t.search(/^touch/) !== -1 ) {
		ne = getNativeEvent( oe );
		t = ne.touches;
		ct = ne.changedTouches;
		touch = ( t && t.length ) ? t[0] : ( (ct && ct.length) ? ct[ 0 ] : undefined );

		if ( touch ) {
			for ( j = 0, len = touchEventProps.length; j < len; j++){
				prop = touchEventProps[ j ];
				event[ prop ] = touch[ prop ];
			}
		}
	}

	return event;
}

function getVirtualBindingFlags( element ) {

	var flags = {},
		b, k;

	while ( element ) {

		b = $.data( element, dataPropertyName );

		for (  k in b ) {
			if ( b[ k ] ) {
				flags[ k ] = flags.hasVirtualBinding = true;
			}
		}
		element = element.parentNode;
	}
	return flags;
}

function getClosestElementWithVirtualBinding( element, eventType ) {
	var b;
	while ( element ) {

		b = $.data( element, dataPropertyName );

		if ( b && ( !eventType || b[ eventType ] ) ) {
			return element;
		}
		element = element.parentNode;
	}
	return null;
}

function enableTouchBindings() {
	blockTouchTriggers = false;
}

function disableTouchBindings() {
	blockTouchTriggers = true;
}

function enableMouseBindings() {
	lastTouchID = 0;
	clickBlockList.length = 0;
	blockMouseTriggers = false;

	// When mouse bindings are enabled, our
	// touch bindings are disabled.
	disableTouchBindings();
}

function disableMouseBindings() {
	// When mouse bindings are disabled, our
	// touch bindings are enabled.
	enableTouchBindings();
}

function startResetTimer() {
	clearResetTimer();
	resetTimerID = setTimeout(function(){
		resetTimerID = 0;
		enableMouseBindings();
	}, $.vmouse.resetTimerDuration );
}

function clearResetTimer() {
	if ( resetTimerID ){
		clearTimeout( resetTimerID );
		resetTimerID = 0;
	}
}

function triggerVirtualEvent( eventType, event, flags ) {
	var ve;

	if ( ( flags && flags[ eventType ] ) ||
				( !flags && getClosestElementWithVirtualBinding( event.target, eventType ) ) ) {

		ve = createVirtualEvent( event, eventType );

		$( event.target).trigger( ve );
	}

	return ve;
}

function mouseEventCallback( event ) {
	var touchID = $.data(event.target, touchTargetPropertyName);

	if ( !blockMouseTriggers && ( !lastTouchID || lastTouchID !== touchID ) ){
		var ve = triggerVirtualEvent( "v" + event.type, event );
		if ( ve ) {
			if ( ve.isDefaultPrevented() ) {
				event.preventDefault();
			}
			if ( ve.isPropagationStopped() ) {
				event.stopPropagation();
			}
			if ( ve.isImmediatePropagationStopped() ) {
				event.stopImmediatePropagation();
			}
		}
	}
}

function handleTouchStart( event ) {

	var touches = getNativeEvent( event ).touches,
		target, flags;

	if ( touches && touches.length === 1 ) {

		target = event.target;
		flags = getVirtualBindingFlags( target );

		if ( flags.hasVirtualBinding ) {

			lastTouchID = nextTouchID++;
			$.data( target, touchTargetPropertyName, lastTouchID );

			clearResetTimer();

			disableMouseBindings();
			didScroll = false;

			var t = getNativeEvent( event ).touches[ 0 ];
			startX = t.pageX;
			startY = t.pageY;

			triggerVirtualEvent( "vmouseover", event, flags );
			triggerVirtualEvent( "vmousedown", event, flags );
		}
	}
}

function handleScroll( event ) {
	if ( blockTouchTriggers ) {
		return;
	}

	if ( !didScroll ) {
		triggerVirtualEvent( "vmousecancel", event, getVirtualBindingFlags( event.target ) );
	}

	didScroll = true;
	startResetTimer();
}

function handleTouchMove( event ) {
	if ( blockTouchTriggers ) {
		return;
	}

	var t = getNativeEvent( event ).touches[ 0 ],
		didCancel = didScroll,
		moveThreshold = $.vmouse.moveDistanceThreshold;
		didScroll = didScroll ||
			( Math.abs(t.pageX - startX) > moveThreshold ||
				Math.abs(t.pageY - startY) > moveThreshold ),
		flags = getVirtualBindingFlags( event.target );

	if ( didScroll && !didCancel ) {
		triggerVirtualEvent( "vmousecancel", event, flags );
	}

	triggerVirtualEvent( "vmousemove", event, flags );
	startResetTimer();
}

function handleTouchEnd( event ) {
	if ( blockTouchTriggers ) {
		return;
	}

	disableTouchBindings();

	var flags = getVirtualBindingFlags( event.target ),
		t;
	triggerVirtualEvent( "vmouseup", event, flags );

	if ( !didScroll ) {
		var ve = triggerVirtualEvent( "vclick", event, flags );
		if ( ve && ve.isDefaultPrevented() ) {
			// The target of the mouse events that follow the touchend
			// event don't necessarily match the target used during the
			// touch. This means we need to rely on coordinates for blocking
			// any click that is generated.
			t = getNativeEvent( event ).changedTouches[ 0 ];
			clickBlockList.push({
				touchID: lastTouchID,
				x: t.clientX,
				y: t.clientY
			});

			// Prevent any mouse events that follow from triggering
			// virtual event notifications.
			blockMouseTriggers = true;
		}
	}
	triggerVirtualEvent( "vmouseout", event, flags);
	didScroll = false;

	startResetTimer();
}

function hasVirtualBindings( ele ) {
	var bindings = $.data( ele, dataPropertyName ),
		k;

	if ( bindings ) {
		for ( k in bindings ) {
			if ( bindings[ k ] ) {
				return true;
			}
		}
	}
	return false;
}

function dummyMouseHandler(){}

function getSpecialEventObject( eventType ) {
	var realType = eventType.substr( 1 );

	return {
		setup: function( data, namespace ) {
			// If this is the first virtual mouse binding for this element,
			// add a bindings object to its data.

			if ( !hasVirtualBindings( this ) ) {
				$.data( this, dataPropertyName, {});
			}

			// If setup is called, we know it is the first binding for this
			// eventType, so initialize the count for the eventType to zero.
			var bindings = $.data( this, dataPropertyName );
			bindings[ eventType ] = true;

			// If this is the first virtual mouse event for this type,
			// register a global handler on the document.

			activeDocHandlers[ eventType ] = ( activeDocHandlers[ eventType ] || 0 ) + 1;

			if ( activeDocHandlers[ eventType ] === 1 ) {
				$document.bind( realType, mouseEventCallback );
			}

			// Some browsers, like Opera Mini, won't dispatch mouse/click events
			// for elements unless they actually have handlers registered on them.
			// To get around this, we register dummy handlers on the elements.

			$( this ).bind( realType, dummyMouseHandler );

			// For now, if event capture is not supported, we rely on mouse handlers.
			if ( eventCaptureSupported ) {
				// If this is the first virtual mouse binding for the document,
				// register our touchstart handler on the document.

				activeDocHandlers[ "touchstart" ] = ( activeDocHandlers[ "touchstart" ] || 0) + 1;

				if (activeDocHandlers[ "touchstart" ] === 1) {
					$document.bind( "touchstart", handleTouchStart )
						.bind( "touchend", handleTouchEnd )

						// On touch platforms, touching the screen and then dragging your finger
						// causes the window content to scroll after some distance threshold is
						// exceeded. On these platforms, a scroll prevents a click event from being
						// dispatched, and on some platforms, even the touchend is suppressed. To
						// mimic the suppression of the click event, we need to watch for a scroll
						// event. Unfortunately, some platforms like iOS don't dispatch scroll
						// events until *AFTER* the user lifts their finger (touchend). This means
						// we need to watch both scroll and touchmove events to figure out whether
						// or not a scroll happenens before the touchend event is fired.

						.bind( "touchmove", handleTouchMove )
						.bind( "scroll", handleScroll );
				}
			}
		},

		teardown: function( data, namespace ) {
			// If this is the last virtual binding for this eventType,
			// remove its global handler from the document.

			--activeDocHandlers[ eventType ];

			if ( !activeDocHandlers[ eventType ] ) {
				$document.unbind( realType, mouseEventCallback );
			}

			if ( eventCaptureSupported ) {
				// If this is the last virtual mouse binding in existence,
				// remove our document touchstart listener.

				--activeDocHandlers[ "touchstart" ];

				if ( !activeDocHandlers[ "touchstart" ] ) {
					$document.unbind( "touchstart", handleTouchStart )
						.unbind( "touchmove", handleTouchMove )
						.unbind( "touchend", handleTouchEnd )
						.unbind( "scroll", handleScroll );
				}
			}

			var $this = $( this ),
				bindings = $.data( this, dataPropertyName );

			// teardown may be called when an element was
			// removed from the DOM. If this is the case,
			// jQuery core may have already stripped the element
			// of any data bindings so we need to check it before
			// using it.
			if ( bindings ) {
				bindings[ eventType ] = false;
			}

			// Unregister the dummy event handler.

			$this.unbind( realType, dummyMouseHandler );

			// If this is the last virtual mouse binding on the
			// element, remove the binding data from the element.

			if ( !hasVirtualBindings( this ) ) {
				$this.removeData( dataPropertyName );
			}
		}
	};
}

// Expose our custom events to the jQuery bind/unbind mechanism.

for ( var i = 0; i < virtualEventNames.length; i++ ){
	$.event.special[ virtualEventNames[ i ] ] = getSpecialEventObject( virtualEventNames[ i ] );
}

// Add a capture click handler to block clicks.
// Note that we require event capture support for this so if the device
// doesn't support it, we punt for now and rely solely on mouse events.
if ( eventCaptureSupported ) {
	document.addEventListener( "click", function( e ){
		var cnt = clickBlockList.length,
			target = e.target,
			x, y, ele, i, o, touchID;

		if ( cnt ) {
			x = e.clientX;
			y = e.clientY;
			threshold = $.vmouse.clickDistanceThreshold;

			// The idea here is to run through the clickBlockList to see if
			// the current click event is in the proximity of one of our
			// vclick events that had preventDefault() called on it. If we find
			// one, then we block the click.
			//
			// Why do we have to rely on proximity?
			//
			// Because the target of the touch event that triggered the vclick
			// can be different from the target of the click event synthesized
			// by the browser. The target of a mouse/click event that is syntehsized
			// from a touch event seems to be implementation specific. For example,
			// some browsers will fire mouse/click events for a link that is near
			// a touch event, even though the target of the touchstart/touchend event
			// says the user touched outside the link. Also, it seems that with most
			// browsers, the target of the mouse/click event is not calculated until the
			// time it is dispatched, so if you replace an element that you touched
			// with another element, the target of the mouse/click will be the new
			// element underneath that point.
			//
			// Aside from proximity, we also check to see if the target and any
			// of its ancestors were the ones that blocked a click. This is necessary
			// because of the strange mouse/click target calculation done in the
			// Android 2.1 browser, where if you click on an element, and there is a
			// mouse/click handler on one of its ancestors, the target will be the
			// innermost child of the touched element, even if that child is no where
			// near the point of touch.

			ele = target;

			while ( ele ) {
				for ( i = 0; i < cnt; i++ ) {
					o = clickBlockList[ i ];
					touchID = 0;

					if ( ( ele === target && Math.abs( o.x - x ) < threshold && Math.abs( o.y - y ) < threshold ) ||
								$.data( ele, touchTargetPropertyName ) === o.touchID ) {
						// XXX: We may want to consider removing matches from the block list
						//      instead of waiting for the reset timer to fire.
						e.preventDefault();
						e.stopPropagation();
						return;
					}
				}
				ele = ele.parentNode;
			}
		}
	}, true);
}
})( jQuery, window, document );
/* 
* "events" plugin - Handles events
*/

(function( $, window, undefined ) {

// add new event shortcuts
$.each( ( "touchstart touchmove touchend orientationchange throttledresize " +
					"tap taphold swipe swipeleft swiperight scrollstart scrollstop" ).split( " " ), function( i, name ) {

	$.fn[ name ] = function( fn ) {
		return fn ? this.bind( name, fn ) : this.trigger( name );
	};

	$.attrFn[ name ] = true;
});

var supportTouch = $.support.touch,
	scrollEvent = "touchmove scroll",
	touchStartEvent = supportTouch ? "touchstart" : "mousedown",
	touchStopEvent = supportTouch ? "touchend" : "mouseup",
	touchMoveEvent = supportTouch ? "touchmove" : "mousemove";

function triggerCustomEvent( obj, eventType, event ) {
	var originalType = event.type;
	event.type = eventType;
	$.event.handle.call( obj, event );
	event.type = originalType;
}

// also handles scrollstop
$.event.special.scrollstart = {

	enabled: true,

	setup: function() {

		var thisObject = this,
			$this = $( thisObject ),
			scrolling,
			timer;

		function trigger( event, state ) {
			scrolling = state;
			triggerCustomEvent( thisObject, scrolling ? "scrollstart" : "scrollstop", event );
		}

		// iPhone triggers scroll after a small delay; use touchmove instead
		$this.bind( scrollEvent, function( event ) {

			if ( !$.event.special.scrollstart.enabled ) {
				return;
			}

			if ( !scrolling ) {
				trigger( event, true );
			}

			clearTimeout( timer );
			timer = setTimeout(function() {
				trigger( event, false );
			}, 50 );
		});
	}
};

// also handles taphold
$.event.special.tap = {
	setup: function() {
		var thisObject = this,
			$this = $( thisObject );

		$this.bind( "vmousedown", function( event ) {

			if ( event.which && event.which !== 1 ) {
				return false;
			}

			var origTarget = event.target,
				origEvent = event.originalEvent,
				timer;

			function clearTapTimer() {
				clearTimeout( timer );
			}

			function clearTapHandlers() {
				clearTapTimer();

				$this.unbind( "vclick", clickHandler )
					.unbind( "vmouseup", clearTapTimer )
					.unbind( "vmousecancel", clearTapHandlers );
			}

			function clickHandler(event) {
				clearTapHandlers();

				// ONLY trigger a 'tap' event if the start target is
				// the same as the stop target.
				if ( origTarget == event.target ) {
					triggerCustomEvent( thisObject, "tap", event );
				}
			}

			$this.bind( "vmousecancel", clearTapHandlers )
				.bind( "vmouseup", clearTapTimer )
				.bind( "vclick", clickHandler );

			timer = setTimeout(function() {
					triggerCustomEvent( thisObject, "taphold", $.Event( "taphold" ) );
			}, 750 );
		});
	}
};

// also handles swipeleft, swiperight
$.event.special.swipe = {
	scrollSupressionThreshold: 10, // More than this horizontal displacement, and we will suppress scrolling.

	durationThreshold: 1000, // More time than this, and it isn't a swipe.

	horizontalDistanceThreshold: 30,  // Swipe horizontal displacement must be more than this.

	verticalDistanceThreshold: 75,  // Swipe vertical displacement must be less than this.

	setup: function() {
		var thisObject = this,
			$this = $( thisObject );

		$this.bind( touchStartEvent, function( event ) {
			var data = event.originalEvent.touches ?
								event.originalEvent.touches[ 0 ] : event,
				start = {
					time: ( new Date() ).getTime(),
					coords: [ data.pageX, data.pageY ],
					origin: $( event.target )
				},
				stop;

			function moveHandler( event ) {

				if ( !start ) {
					return;
				}

				var data = event.originalEvent.touches ?
						event.originalEvent.touches[ 0 ] : event;

				stop = {
					time: ( new Date() ).getTime(),
					coords: [ data.pageX, data.pageY ]
				};

				// prevent scrolling
				if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
					event.preventDefault();
				}
			}

			$this.bind( touchMoveEvent, moveHandler )
				.one( touchStopEvent, function( event ) {
					$this.unbind( touchMoveEvent, moveHandler );

					if ( start && stop ) {
						if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
								Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
								Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {

							start.origin.trigger( "swipe" )
								.trigger( start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight" );
						}
					}
					start = stop = undefined;
				});
		});
	}
};

(function( $, window ) {
	// "Cowboy" Ben Alman

	var win = $( window ),
		special_event,
		get_orientation,
		last_orientation;

	$.event.special.orientationchange = special_event = {
		setup: function() {
			// If the event is supported natively, return false so that jQuery
			// will bind to the event using DOM methods.
			if ( $.support.orientation && $.mobile.orientationChangeEnabled ) {
				return false;
			}

			// Get the current orientation to avoid initial double-triggering.
			last_orientation = get_orientation();

			// Because the orientationchange event doesn't exist, simulate the
			// event by testing window dimensions on resize.
			win.bind( "throttledresize", handler );
		},
		teardown: function(){
			// If the event is not supported natively, return false so that
			// jQuery will unbind the event using DOM methods.
			if ( $.support.orientation && $.mobile.orientationChangeEnabled ) {
				return false;
			}

			// Because the orientationchange event doesn't exist, unbind the
			// resize event handler.
			win.unbind( "throttledresize", handler );
		},
		add: function( handleObj ) {
			// Save a reference to the bound event handler.
			var old_handler = handleObj.handler;


			handleObj.handler = function( event ) {
				// Modify event object, adding the .orientation property.
				event.orientation = get_orientation();

				// Call the originally-bound event handler and return its result.
				return old_handler.apply( this, arguments );
			};
		}
	};

	// If the event is not supported natively, this handler will be bound to
	// the window resize event to simulate the orientationchange event.
	function handler() {
		// Get the current orientation.
		var orientation = get_orientation();

		if ( orientation !== last_orientation ) {
			// The orientation has changed, so trigger the orientationchange event.
			last_orientation = orientation;
			win.trigger( "orientationchange" );
		}
	}

	// Get the current page orientation. This method is exposed publicly, should it
	// be needed, as jQuery.event.special.orientationchange.orientation()
	$.event.special.orientationchange.orientation = get_orientation = function() {
		var isPortrait = true, elem = document.documentElement;

		// prefer window orientation to the calculation based on screensize as
		// the actual screen resize takes place before or after the orientation change event
		// has been fired depending on implementation (eg android 2.3 is before, iphone after).
		// More testing is required to determine if a more reliable method of determining the new screensize
		// is possible when orientationchange is fired. (eg, use media queries + element + opacity)
		if ( $.support.orientation ) {
			// if the window orientation registers as 0 or 180 degrees report
			// portrait, otherwise landscape
			isPortrait = window.orientation % 180 == 0;
		} else {
			isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
		}

		return isPortrait ? "portrait" : "landscape";
	};

})( jQuery, window );


// throttled resize event
(function() {

	$.event.special.throttledresize = {
		setup: function() {
			$( this ).bind( "resize", handler );
		},
		teardown: function(){
			$( this ).unbind( "resize", handler );
		}
	};

	var throttle = 250,
		handler = function() {
			curr = ( new Date() ).getTime();
			diff = curr - lastCall;

			if ( diff >= throttle ) {

				lastCall = curr;
				$( this ).trigger( "throttledresize" );

			} else {

				if ( heldCall ) {
					clearTimeout( heldCall );
				}

				// Promise a held call will still execute
				heldCall = setTimeout( handler, throttle - diff );
			}
		},
		lastCall = 0,
		heldCall,
		curr,
		diff;
})();


$.each({
	scrollstop: "scrollstart",
	taphold: "tap",
	swipeleft: "swipe",
	swiperight: "swipe"
}, function( event, sourceEvent ) {

	$.event.special[ event ] = {
		setup: function() {
			$( this ).bind( sourceEvent, $.noop );
		}
	};
});

})( jQuery, this );
// Script: jQuery hashchange event
// 
// *Version: 1.3, Last updated: 7/21/2010*
// 
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
// 
// About: Known issues
// 
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
// 
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
// 
// Also note that should a browser natively support the window.onhashchange 
// event, but not report that it does, the fallback polling loop will be used.
// 
// About: Release History
// 
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added 
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function($,window,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  // Reused string.
  var str_hashchange = 'hashchange',
    
    // Method / object references.
    doc = document,
    fake_onhashchange,
    special = $.event.special,
    
    // Does the browser support window.onhashchange? Note that IE8 running in
    // IE7 compatibility mode reports true for 'onhashchange' in window, even
    // though the event isn't supported, so also test document.documentMode.
    doc_mode = doc.documentMode,
    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );
  
  // Get location.hash (or what you'd expect location.hash to be) sans any
  // leading #. Thanks for making this necessary, Firefox!
  function get_fragment( url ) {
    url = url || location.href;
    return '#' + url.replace( /^[^#]*#?(.*)$/, '$1' );
  };
  
  // Method: jQuery.fn.hashchange
  // 
  // Bind a handler to the window.onhashchange event or trigger all bound
  // window.onhashchange event handlers. This behavior is consistent with
  // jQuery's built-in event handlers.
  // 
  // Usage:
  // 
  // > jQuery(window).hashchange( [ handler ] );
  // 
  // Arguments:
  // 
  //  handler - (Function) Optional handler to be bound to the hashchange
  //    event. This is a "shortcut" for the more verbose form:
  //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
  //    all bound window.onhashchange event handlers will be triggered. This
  //    is a shortcut for the more verbose
  //    jQuery(window).trigger( 'hashchange' ). These forms are described in
  //    the <hashchange event> section.
  // 
  // Returns:
  // 
  //  (jQuery) The initial jQuery collection of elements.
  
  // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
  // $(elem).hashchange() for triggering, like jQuery does for built-in events.
  $.fn[ str_hashchange ] = function( fn ) {
    return fn ? this.bind( str_hashchange, fn ) : this.trigger( str_hashchange );
  };
  
  // Property: jQuery.fn.hashchange.delay
  // 
  // The numeric interval (in milliseconds) at which the <hashchange event>
  // polling loop executes. Defaults to 50.
  
  // Property: jQuery.fn.hashchange.domain
  // 
  // If you're setting document.domain in your JavaScript, and you want hash
  // history to work in IE6/7, not only must this property be set, but you must
  // also set document.domain BEFORE jQuery is loaded into the page. This
  // property is only applicable if you are supporting IE6/7 (or IE8 operating
  // in "IE7 compatibility" mode).
  // 
  // In addition, the <jQuery.fn.hashchange.src> property must be set to the
  // path of the included "document-domain.html" file, which can be renamed or
  // modified if necessary (note that the document.domain specified must be the
  // same in both your main JavaScript as well as in this file).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.domain = document.domain;
  
  // Property: jQuery.fn.hashchange.src
  // 
  // If, for some reason, you need to specify an Iframe src file (for example,
  // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
  // do so using this property. Note that when using this property, history
  // won't be recorded in IE6/7 until the Iframe src file loads. This property
  // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
  // compatibility" mode).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.src = 'path/to/file.html';
  
  $.fn[ str_hashchange ].delay = 50;
  /*
  $.fn[ str_hashchange ].domain = null;
  $.fn[ str_hashchange ].src = null;
  */
  
  // Event: hashchange event
  // 
  // Fired when location.hash changes. In browsers that support it, the native
  // HTML5 window.onhashchange event is used, otherwise a polling loop is
  // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
  // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
  // compatibility" mode), a hidden Iframe is created to allow the back button
  // and hash-based history to work.
  // 
  // Usage as described in <jQuery.fn.hashchange>:
  // 
  // > // Bind an event handler.
  // > jQuery(window).hashchange( function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).hashchange();
  // 
  // A more verbose usage that allows for event namespacing:
  // 
  // > // Bind an event handler.
  // > jQuery(window).bind( 'hashchange', function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).trigger( 'hashchange' );
  // 
  // Additional Notes:
  // 
  // * The polling loop and Iframe are not created until at least one handler
  //   is actually bound to the 'hashchange' event.
  // * If you need the bound handler(s) to execute immediately, in cases where
  //   a location.hash exists on page load, via bookmark or page refresh for
  //   example, use jQuery(window).hashchange() or the more verbose 
  //   jQuery(window).trigger( 'hashchange' ).
  // * The event can be bound before DOM ready, but since it won't be usable
  //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
  //   to bind it inside a DOM ready handler.
  
  // Override existing $.event.special.hashchange methods (allowing this plugin
  // to be defined after jQuery BBQ in BBQ's source code).
  special[ str_hashchange ] = $.extend( special[ str_hashchange ], {
    
    // Called only when the first 'hashchange' event is bound to window.
    setup: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to create our own. And we don't want to call this
      // until the user binds to the event, just in case they never do, since it
      // will create a polling loop and possibly even a hidden Iframe.
      $( fake_onhashchange.start );
    },
    
    // Called only when the last 'hashchange' event is unbound from window.
    teardown: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to stop ours (if possible).
      $( fake_onhashchange.stop );
    }
    
  });
  
  // fake_onhashchange does all the work of triggering the window.onhashchange
  // event for browsers that don't natively support it, including creating a
  // polling loop to watch for hash changes and in IE 6/7 creating a hidden
  // Iframe to enable back and forward.
  fake_onhashchange = (function(){
    var self = {},
      timeout_id,
      
      // Remember the initial hash so it doesn't get triggered immediately.
      last_hash = get_fragment(),
      
      fn_retval = function(val){ return val; },
      history_set = fn_retval,
      history_get = fn_retval;
    
    // Start the polling loop.
    self.start = function() {
      timeout_id || poll();
    };
    
    // Stop the polling loop.
    self.stop = function() {
      timeout_id && clearTimeout( timeout_id );
      timeout_id = undefined;
    };
    
    // This polling loop checks every $.fn.hashchange.delay milliseconds to see
    // if location.hash has changed, and triggers the 'hashchange' event on
    // window when necessary.
    function poll() {
      var hash = get_fragment(),
        history_hash = history_get( last_hash );
      
      if ( hash !== last_hash ) {
        history_set( last_hash = hash, history_hash );
        
        $(window).trigger( str_hashchange );
        
      } else if ( history_hash !== last_hash ) {
        location.href = location.href.replace( /#.*/, '' ) + history_hash;
      }
      
      timeout_id = setTimeout( poll, $.fn[ str_hashchange ].delay );
    };
    
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    $.browser.msie && !supports_onhashchange && (function(){
      // Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
      // when running in "IE7 compatibility" mode.
      
      var iframe,
        iframe_src;
      
      // When the event is bound and polling starts in IE 6/7, create a hidden
      // Iframe for history handling.
      self.start = function(){
        if ( !iframe ) {
          iframe_src = $.fn[ str_hashchange ].src;
          iframe_src = iframe_src && iframe_src + get_fragment();
          
          // Create hidden Iframe. Attempt to make Iframe as hidden as possible
          // by using techniques from http://www.paciellogroup.com/blog/?p=604.
          iframe = $('<iframe tabindex="-1" title="empty"/>').hide()
            
            // When Iframe has completely loaded, initialize the history and
            // start polling.
            .one( 'load', function(){
              iframe_src || history_set( get_fragment() );
              poll();
            })
            
            // Load Iframe src if specified, otherwise nothing.
            .attr( 'src', iframe_src || 'javascript:0' )
            
            // Append Iframe after the end of the body to prevent unnecessary
            // initial page scrolling (yes, this works).
            .insertAfter( 'body' )[0].contentWindow;
          
          // Whenever `document.title` changes, update the Iframe's title to
          // prettify the back/next history menu entries. Since IE sometimes
          // errors with "Unspecified error" the very first time this is set
          // (yes, very useful) wrap this with a try/catch block.
          doc.onpropertychange = function(){
            try {
              if ( event.propertyName === 'title' ) {
                iframe.document.title = doc.title;
              }
            } catch(e) {}
          };
          
        }
      };
      
      // Override the "stop" method since an IE6/7 Iframe was created. Even
      // if there are no longer any bound event handlers, the polling loop
      // is still necessary for back/next to work at all!
      self.stop = fn_retval;
      
      // Get history by looking at the hidden Iframe's location.hash.
      history_get = function() {
        return get_fragment( iframe.location.href );
      };
      
      // Set a new history item by opening and then closing the Iframe
      // document, *then* setting its location.hash. If document.domain has
      // been set, update that as well.
      history_set = function( hash, history_hash ) {
        var iframe_doc = iframe.document,
          domain = $.fn[ str_hashchange ].domain;
        
        if ( hash !== history_hash ) {
          // Update Iframe with any initial `document.title` that might be set.
          iframe_doc.title = doc.title;
          
          // Opening the Iframe's document after it has been closed is what
          // actually adds a history entry.
          iframe_doc.open();
          
          // Set document.domain for the Iframe document as well, if necessary.
          domain && iframe_doc.write( '<script>document.domain="' + domain + '"</script>' );
          
          iframe_doc.close();
          
          // Update the Iframe's hash, for great justice.
          iframe.location.hash = hash;
        }
      };
      
    })();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
    return self;
  })();
  
})(jQuery,this);
/*
* "page" plugin
*/

(function( $, undefined ) {

$.widget( "mobile.page", $.mobile.widget, {
	options: {
		theme: "c",
		domCache: false,
		keepNativeDefault: ":jqmData(role='none'), :jqmData(role='nojs')"
	},

	_create: function() {

		this._trigger( "beforecreate" );

		this.element
			.attr( "tabindex", "0" )
			.addClass( "ui-page ui-body-" + this.options.theme );
	},

	keepNativeSelector: function() {
		var options = this.options,
			keepNativeDefined = options.keepNative && $.trim(options.keepNative);

		if( keepNativeDefined && options.keepNative !== options.keepNativeDefault ){
			return [options.keepNative, options.keepNativeDefault].join(", ");
		}

		return options.keepNativeDefault;
	}
});
})( jQuery );
/* 
* "core" - The base file for jQm
*/

(function( $, window, undefined ) {

	var nsNormalizeDict = {};

	// jQuery.mobile configurable options
	$.extend( $.mobile, {

		// Namespace used framework-wide for data-attrs. Default is no namespace
		ns: "",

		// Define the url parameter used for referencing widget-generated sub-pages.
		// Translates to to example.html&ui-page=subpageIdentifier
		// hash segment before &ui-page= is used to make Ajax request
		subPageUrlKey: "ui-page",

		// Class assigned to page currently in view, and during transitions
		activePageClass: "ui-page-active",

		// Class used for "active" button state, from CSS framework
		activeBtnClass: "ui-btn-active",

		// Automatically handle clicks and form submissions through Ajax, when same-domain
		ajaxEnabled: true,

		// Automatically load and show pages based on location.hash
		hashListeningEnabled: true,

		// disable to prevent jquery from bothering with links
		linkBindingEnabled: true,

		// Set default page transition - 'none' for no transitions
		defaultPageTransition: "slide",

		// Minimum scroll distance that will be remembered when returning to a page
		minScrollBack: 250,

		// Set default dialog transition - 'none' for no transitions
		defaultDialogTransition: "pop",

		// Show loading message during Ajax requests
		// if false, message will not appear, but loading classes will still be toggled on html el
		loadingMessage: "loading",

		// Error response message - appears when an Ajax page request fails
		pageLoadErrorMessage: "Error Loading Page",

		//automatically initialize the DOM when it's ready
		autoInitializePage: true,

		pushStateEnabled: true,

		// turn of binding to the native orientationchange due to android orientation behavior
		orientationChangeEnabled: true,

		// Support conditions that must be met in order to proceed
		// default enhanced qualifications are media query support OR IE 7+
		gradeA: function(){
			return $.support.mediaquery || $.mobile.browser.ie && $.mobile.browser.ie >= 7;
		},

		// TODO might be useful upstream in jquery itself ?
		keyCode: {
			ALT: 18,
			BACKSPACE: 8,
			CAPS_LOCK: 20,
			COMMA: 188,
			COMMAND: 91,
			COMMAND_LEFT: 91, // COMMAND
			COMMAND_RIGHT: 93,
			CONTROL: 17,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			INSERT: 45,
			LEFT: 37,
			MENU: 93, // COMMAND_RIGHT
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SHIFT: 16,
			SPACE: 32,
			TAB: 9,
			UP: 38,
			WINDOWS: 91 // COMMAND
		},

		// Scroll page vertically: scroll to 0 to hide iOS address bar, or pass a Y value
		silentScroll: function( ypos ) {
			if ( $.type( ypos ) !== "number" ) {
				ypos = $.mobile.defaultHomeScroll;
			}

			// prevent scrollstart and scrollstop events
			$.event.special.scrollstart.enabled = false;

			setTimeout(function() {
				window.scrollTo( 0, ypos );
				$( document ).trigger( "silentscroll", { x: 0, y: ypos });
			}, 20 );

			setTimeout(function() {
				$.event.special.scrollstart.enabled = true;
			}, 150 );
		},

		// Expose our cache for testing purposes.
		nsNormalizeDict: nsNormalizeDict,

		// Take a data attribute property, prepend the namespace
		// and then camel case the attribute string. Add the result
		// to our nsNormalizeDict so we don't have to do this again.
		nsNormalize: function( prop ) {
			if ( !prop ) {
				return;
			}

			return nsNormalizeDict[ prop ] || ( nsNormalizeDict[ prop ] = $.camelCase( $.mobile.ns + prop ) );
		},

		getInheritedTheme: function( el, defaultTheme ) {

			// Find the closest parent with a theme class on it. Note that
			// we are not using $.fn.closest() on purpose here because this
			// method gets called quite a bit and we need it to be as fast
			// as possible.

			var e = el[ 0 ],
				ltr = "",
				re = /ui-(bar|body)-([a-z])\b/,
				c, m;

			while ( e ) {
				var c = e.className || "";
				if ( ( m = re.exec( c ) ) && ( ltr = m[ 2 ] ) ) {
					// We found a parent with a theme class
					// on it so bail from this loop.
					break;
				}
				e = e.parentNode;
			}
			
			// Return the theme letter we found, if none, return the
			// specified default.

			return ltr || defaultTheme || "a";
		}
	});

	// Mobile version of data and removeData and hasData methods
	// ensures all data is set and retrieved using jQuery Mobile's data namespace
	$.fn.jqmData = function( prop, value ) {
		var result;
		if ( typeof prop != "undefined" ) {
			result = this.data( prop ? $.mobile.nsNormalize( prop ) : prop, value );
		}
		return result;
	};

	$.jqmData = function( elem, prop, value ) {
		var result;
		if ( typeof prop != "undefined" ) {
			result = $.data( elem, prop ? $.mobile.nsNormalize( prop ) : prop, value );
		}
		return result;
	};

	$.fn.jqmRemoveData = function( prop ) {
		return this.removeData( $.mobile.nsNormalize( prop ) );
	};

	$.jqmRemoveData = function( elem, prop ) {
		return $.removeData( elem, $.mobile.nsNormalize( prop ) );
	};

	$.fn.removeWithDependents = function() {
		$.removeWithDependents( this );
	};

	$.removeWithDependents = function( elem ) {
		var $elem = $( elem );

		( $elem.jqmData('dependents') || $() ).remove();
		$elem.remove();
	};

	$.fn.addDependents = function( newDependents ) {
		$.addDependents( $(this), newDependents );
	};

	$.addDependents = function( elem, newDependents ) {
		var dependents = $(elem).jqmData( 'dependents' ) || $();

		$(elem).jqmData( 'dependents', $.merge(dependents, newDependents) );
	};

	// note that this helper doesn't attempt to handle the callback
	// or setting of an html elements text, its only purpose is
	// to return the html encoded version of the text in all cases. (thus the name)
	$.fn.getEncodedText = function() {
		return $( "<div/>" ).text( $(this).text() ).html();
	};

	// Monkey-patching Sizzle to filter the :jqmData selector
	var oldFind = $.find,
		jqmDataRE = /:jqmData\(([^)]*)\)/g;

	$.find = function( selector, context, ret, extra ) {
		selector = selector.replace( jqmDataRE, "[data-" + ( $.mobile.ns || "" ) + "$1]" );

		return oldFind.call( this, selector, context, ret, extra );
	};

	$.extend( $.find, oldFind );

	$.find.matches = function( expr, set ) {
		return $.find( expr, null, null, set );
	};

	$.find.matchesSelector = function( node, expr ) {
		return $.find( expr, null, null, [ node ] ).length > 0;
	};
})( jQuery, this );

/*
* core utilities for auto ajax navigation, base tag mgmt,
*/

( function( $, undefined ) {

	//define vars for interal use
	var $window = $( window ),
		$html = $( 'html' ),
		$head = $( 'head' ),

		//url path helpers for use in relative url management
		path = {

			// This scary looking regular expression parses an absolute URL or its relative
			// variants (protocol, site, document, query, and hash), into the various
			// components (protocol, host, path, query, fragment, etc that make up the
			// URL as well as some other commonly used sub-parts. When used with RegExp.exec()
			// or String.match, it parses the URL into a results array that looks like this:
			//
			//     [0]: http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234&type=unread#msg-content
			//     [1]: http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234&type=unread
			//     [2]: http://jblas:password@mycompany.com:8080/mail/inbox
			//     [3]: http://jblas:password@mycompany.com:8080
			//     [4]: http:
			//     [5]: //
			//     [6]: jblas:password@mycompany.com:8080
			//     [7]: jblas:password
			//     [8]: jblas
			//     [9]: password
			//    [10]: mycompany.com:8080
			//    [11]: mycompany.com
			//    [12]: 8080
			//    [13]: /mail/inbox
			//    [14]: /mail/
			//    [15]: inbox
			//    [16]: ?msg=1234&type=unread
			//    [17]: #msg-content
			//
			urlParseRE: /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,

			//Parse a URL into a structure that allows easy access to
			//all of the URL components by name.
			parseUrl: function( url ) {
				// If we're passed an object, we'll assume that it is
				// a parsed url object and just return it back to the caller.
				if ( $.type( url ) === "object" ) {
					return url;
				}

				var matches = path.urlParseRE.exec( url || "" ) || [];

					// Create an object that allows the caller to access the sub-matches
					// by name. Note that IE returns an empty string instead of undefined,
					// like all other browsers do, so we normalize everything so its consistent
					// no matter what browser we're running on.
					return {
						href:         matches[  0 ] || "",
						hrefNoHash:   matches[  1 ] || "",
						hrefNoSearch: matches[  2 ] || "",
						domain:       matches[  3 ] || "",
						protocol:     matches[  4 ] || "",
						doubleSlash:  matches[  5 ] || "",
						authority:    matches[  6 ] || "",
						username:     matches[  8 ] || "",
						password:     matches[  9 ] || "",
						host:         matches[ 10 ] || "",
						hostname:     matches[ 11 ] || "",
						port:         matches[ 12 ] || "",
						pathname:     matches[ 13 ] || "",
						directory:    matches[ 14 ] || "",
						filename:     matches[ 15 ] || "",
						search:       matches[ 16 ] || "",
						hash:         matches[ 17 ] || ""
					};
			},

			//Turn relPath into an asbolute path. absPath is
			//an optional absolute path which describes what
			//relPath is relative to.
			makePathAbsolute: function( relPath, absPath ) {
				if ( relPath && relPath.charAt( 0 ) === "/" ) {
					return relPath;
				}

				relPath = relPath || "";
				absPath = absPath ? absPath.replace( /^\/|(\/[^\/]*|[^\/]+)$/g, "" ) : "";

				var absStack = absPath ? absPath.split( "/" ) : [],
					relStack = relPath.split( "/" );
				for ( var i = 0; i < relStack.length; i++ ) {
					var d = relStack[ i ];
					switch ( d ) {
						case ".":
							break;
						case "..":
							if ( absStack.length ) {
								absStack.pop();
							}
							break;
						default:
							absStack.push( d );
							break;
					}
				}
				return "/" + absStack.join( "/" );
			},

			//Returns true if both urls have the same domain.
			isSameDomain: function( absUrl1, absUrl2 ) {
				return path.parseUrl( absUrl1 ).domain === path.parseUrl( absUrl2 ).domain;
			},

			//Returns true for any relative variant.
			isRelativeUrl: function( url ) {
				// All relative Url variants have one thing in common, no protocol.
				return path.parseUrl( url ).protocol === "";
			},

			//Returns true for an absolute url.
			isAbsoluteUrl: function( url ) {
				return path.parseUrl( url ).protocol !== "";
			},

			//Turn the specified realtive URL into an absolute one. This function
			//can handle all relative variants (protocol, site, document, query, fragment).
			makeUrlAbsolute: function( relUrl, absUrl ) {
				if ( !path.isRelativeUrl( relUrl ) ) {
					return relUrl;
				}

				var relObj = path.parseUrl( relUrl ),
					absObj = path.parseUrl( absUrl ),
					protocol = relObj.protocol || absObj.protocol,
					doubleSlash = relObj.protocol ? relObj.doubleSlash : ( relObj.doubleSlash || absObj.doubleSlash ),
					authority = relObj.authority || absObj.authority,
					hasPath = relObj.pathname !== "",
					pathname = path.makePathAbsolute( relObj.pathname || absObj.filename, absObj.pathname ),
					search = relObj.search || ( !hasPath && absObj.search ) || "",
					hash = relObj.hash;

				return protocol + doubleSlash + authority + pathname + search + hash;
			},

			//Add search (aka query) params to the specified url.
			addSearchParams: function( url, params ) {
				var u = path.parseUrl( url ),
					p = ( typeof params === "object" ) ? $.param( params ) : params,
					s = u.search || "?";
				return u.hrefNoSearch + s + ( s.charAt( s.length - 1 ) !== "?" ? "&" : "" ) + p + ( u.hash || "" );
			},

			convertUrlToDataUrl: function( absUrl ) {
				var u = path.parseUrl( absUrl );
				if ( path.isEmbeddedPage( u ) ) {
				    // For embedded pages, remove the dialog hash key as in getFilePath(),
				    // otherwise the Data Url won't match the id of the embedded Page.
					return u.hash.split( dialogHashKey )[0].replace( /^#/, "" );
				} else if ( path.isSameDomain( u, documentBase ) ) {
					return u.hrefNoHash.replace( documentBase.domain, "" );
				}
				return absUrl;
			},

			//get path from current hash, or from a file path
			get: function( newPath ) {
				if( newPath === undefined ) {
					newPath = location.hash;
				}
				return path.stripHash( newPath ).replace( /[^\/]*\.[^\/*]+$/, '' );
			},

			//return the substring of a filepath before the sub-page key, for making a server request
			getFilePath: function( path ) {
				var splitkey = '&' + $.mobile.subPageUrlKey;
				return path && path.split( splitkey )[0].split( dialogHashKey )[0];
			},

			//set location hash to path
			set: function( path ) {
				location.hash = path;
			},

			//test if a given url (string) is a path
			//NOTE might be exceptionally naive
			isPath: function( url ) {
				return ( /\// ).test( url );
			},

			//return a url path with the window's location protocol/hostname/pathname removed
			clean: function( url ) {
				return url.replace( documentBase.domain, "" );
			},

			//just return the url without an initial #
			stripHash: function( url ) {
				return url.replace( /^#/, "" );
			},

			//remove the preceding hash, any query params, and dialog notations
			cleanHash: function( hash ) {
				return path.stripHash( hash.replace( /\?.*$/, "" ).replace( dialogHashKey, "" ) );
			},

			//check whether a url is referencing the same domain, or an external domain or different protocol
			//could be mailto, etc
			isExternal: function( url ) {
				var u = path.parseUrl( url );
				return u.protocol && u.domain !== documentUrl.domain ? true : false;
			},

			hasProtocol: function( url ) {
				return ( /^(:?\w+:)/ ).test( url );
			},

			//check if the specified url refers to the first page in the main application document.
			isFirstPageUrl: function( url ) {
				// We only deal with absolute paths.
				var u = path.parseUrl( path.makeUrlAbsolute( url, documentBase ) ),

					// Does the url have the same path as the document?
					samePath = u.hrefNoHash === documentUrl.hrefNoHash || ( documentBaseDiffers && u.hrefNoHash === documentBase.hrefNoHash ),

					// Get the first page element.
					fp = $.mobile.firstPage,

					// Get the id of the first page element if it has one.
					fpId = fp && fp[0] ? fp[0].id : undefined;

					// The url refers to the first page if the path matches the document and
					// it either has no hash value, or the hash is exactly equal to the id of the
					// first page element.
					return samePath && ( !u.hash || u.hash === "#" || ( fpId && u.hash.replace( /^#/, "" ) === fpId ) );
			},

			isEmbeddedPage: function( url ) {
				var u = path.parseUrl( url );

				//if the path is absolute, then we need to compare the url against
				//both the documentUrl and the documentBase. The main reason for this
				//is that links embedded within external documents will refer to the
				//application document, whereas links embedded within the application
				//document will be resolved against the document base.
				if ( u.protocol !== "" ) {
					return ( u.hash && ( u.hrefNoHash === documentUrl.hrefNoHash || ( documentBaseDiffers && u.hrefNoHash === documentBase.hrefNoHash ) ) );
				}
				return (/^#/).test( u.href );
			}
		},

		//will be defined when a link is clicked and given an active class
		$activeClickedLink = null,

		//urlHistory is purely here to make guesses at whether the back or forward button was clicked
		//and provide an appropriate transition
		urlHistory = {
			// Array of pages that are visited during a single page load.
			// Each has a url and optional transition, title, and pageUrl (which represents the file path, in cases where URL is obscured, such as dialogs)
			stack: [],

			//maintain an index number for the active page in the stack
			activeIndex: 0,

			//get active
			getActive: function() {
				return urlHistory.stack[ urlHistory.activeIndex ];
			},

			getPrev: function() {
				return urlHistory.stack[ urlHistory.activeIndex - 1 ];
			},

			getNext: function() {
				return urlHistory.stack[ urlHistory.activeIndex + 1 ];
			},

			// addNew is used whenever a new page is added
			addNew: function( url, transition, title, pageUrl, role ) {
				//if there's forward history, wipe it
				if( urlHistory.getNext() ) {
					urlHistory.clearForward();
				}

				urlHistory.stack.push( {url : url, transition: transition, title: title, pageUrl: pageUrl, role: role } );

				urlHistory.activeIndex = urlHistory.stack.length - 1;
			},

			//wipe urls ahead of active index
			clearForward: function() {
				urlHistory.stack = urlHistory.stack.slice( 0, urlHistory.activeIndex + 1 );
			},

			directHashChange: function( opts ) {
				var back , forward, newActiveIndex, prev = this.getActive();

				// check if url isp in history and if it's ahead or behind current page
				$.each( urlHistory.stack, function( i, historyEntry ) {

					//if the url is in the stack, it's a forward or a back
					if( opts.currentUrl === historyEntry.url ) {
						//define back and forward by whether url is older or newer than current page
						back = i < urlHistory.activeIndex;
						forward = !back;
						newActiveIndex = i;
					}
				});

				// save new page index, null check to prevent falsey 0 result
				this.activeIndex = newActiveIndex !== undefined ? newActiveIndex : this.activeIndex;

				if( back ) {
					( opts.either || opts.isBack )( true );
				} else if( forward ) {
					( opts.either || opts.isForward )( false );
				}
			},

			//disable hashchange event listener internally to ignore one change
			//toggled internally when location.hash is updated to match the url of a successful page load
			ignoreNextHashChange: false
		},

		//define first selector to receive focus when a page is shown
		focusable = "[tabindex],a,button:visible,select:visible,input",

		//queue to hold simultanious page transitions
		pageTransitionQueue = [],

		//indicates whether or not page is in process of transitioning
		isPageTransitioning = false,

		//nonsense hash change key for dialogs, so they create a history entry
		dialogHashKey = "&ui-state=dialog",

		//existing base tag?
		$base = $head.children( "base" ),

		//tuck away the original document URL minus any fragment.
		documentUrl = path.parseUrl( location.href ),

		//if the document has an embedded base tag, documentBase is set to its
		//initial value. If a base tag does not exist, then we default to the documentUrl.
		documentBase = $base.length ? path.parseUrl( path.makeUrlAbsolute( $base.attr( "href" ), documentUrl.href ) ) : documentUrl,

		//cache the comparison once.
		documentBaseDiffers = ( documentUrl.hrefNoHash !== documentBase.hrefNoHash );

		//base element management, defined depending on dynamic base tag support
		var base = $.support.dynamicBaseTag ? {

			//define base element, for use in routing asset urls that are referenced in Ajax-requested markup
			element: ( $base.length ? $base : $( "<base>", { href: documentBase.hrefNoHash } ).prependTo( $head ) ),

			//set the generated BASE element's href attribute to a new page's base path
			set: function( href ) {
				base.element.attr( "href", path.makeUrlAbsolute( href, documentBase ) );
			},

			//set the generated BASE element's href attribute to a new page's base path
			reset: function() {
				base.element.attr( "href", documentBase.hrefNoHash );
			}

		} : undefined;

/*
	internal utility functions
--------------------------------------*/


	//direct focus to the page title, or otherwise first focusable element
	function reFocus( page ) {
		var pageTitle = page.find( ".ui-title:eq(0)" );

		if( pageTitle.length ) {
			pageTitle.focus();
		}
		else{
			page.focus();
		}
	}

	//remove active classes after page transition or error
	function removeActiveLinkClass( forceRemoval ) {
		if( !!$activeClickedLink && ( !$activeClickedLink.closest( '.ui-page-active' ).length || forceRemoval ) ) {
			$activeClickedLink.removeClass( $.mobile.activeBtnClass );
		}
		$activeClickedLink = null;
	}

	function releasePageTransitionLock() {
		isPageTransitioning = false;
		if( pageTransitionQueue.length > 0 ) {
			$.mobile.changePage.apply( null, pageTransitionQueue.pop() );
		}
	}

	// Save the last scroll distance per page, before it is hidden
	var setLastScrollEnabled = true,
		firstScrollElem, getScrollElem, setLastScroll, delayedSetLastScroll;

	getScrollElem = function() {
		var scrollElem = $window, activePage,
			touchOverflow = $.support.touchOverflow && $.mobile.touchOverflowEnabled;

		if( touchOverflow ){
			activePage = $( ".ui-page-active" );
			scrollElem = activePage.is( ".ui-native-fixed" ) ? activePage.find( ".ui-content" ) : activePage;
		}

		return scrollElem;
	};

	setLastScroll = function( scrollElem ) {
		// this barrier prevents setting the scroll value based on the browser
		// scrolling the window based on a hashchange
		if( !setLastScrollEnabled ) {
			return;
		}

		var active = $.mobile.urlHistory.getActive();

		if( active ) {
			var lastScroll = scrollElem && scrollElem.scrollTop();

			// Set active page's lastScroll prop.
			// If the location we're scrolling to is less than minScrollBack, let it go.
			active.lastScroll = lastScroll < $.mobile.minScrollBack ? $.mobile.defaultHomeScroll : lastScroll;
		}
	};

	// bind to scrollstop to gather scroll position. The delay allows for the hashchange
	// event to fire and disable scroll recording in the case where the browser scrolls
	// to the hash targets location (sometimes the top of the page). once pagechange fires
	// getLastScroll is again permitted to operate
	delayedSetLastScroll = function() {
		setTimeout( setLastScroll, 100, $(this) );
	};

	// disable an scroll setting when a hashchange has been fired, this only works
	// because the recording of the scroll position is delayed for 100ms after
	// the browser might have changed the position because of the hashchange
	$window.bind( $.support.pushState ? "popstate" : "hashchange", function() {
	 	setLastScrollEnabled = false;
	});

	// handle initial hashchange from chrome :(
	$window.one( $.support.pushState ? "popstate" : "hashchange", function() {
		setLastScrollEnabled = true;
	});

	// wait until the mobile page container has been determined to bind to pagechange
	$window.one( "pagecontainercreate", function(){
		// once the page has changed, re-enable the scroll recording
		$.mobile.pageContainer.bind( "pagechange", function() {
			var scrollElem = getScrollElem();

	 		setLastScrollEnabled = true;

			// remove any binding that previously existed on the get scroll
			// which may or may not be different than the scroll element determined for
			// this page previously
			scrollElem.unbind( "scrollstop", delayedSetLastScroll );

			// determine and bind to the current scoll element which may be the window
			// or in the case of touch overflow the element with touch overflow
			scrollElem.bind( "scrollstop", delayedSetLastScroll );
		});
	});

	// bind to scrollstop for the first page as "pagechange" won't be fired in that case
	getScrollElem().bind( "scrollstop", delayedSetLastScroll );

	// Make the iOS clock quick-scroll work again if we're using native overflow scrolling
	/*
	if( $.support.touchOverflow ){
		if( $.mobile.touchOverflowEnabled ){
			$( window ).bind( "scrollstop", function(){
				if( $( this ).scrollTop() === 0 ){
					$.mobile.activePage.scrollTop( 0 );
				}
			});
		}
	}
	*/

	//function for transitioning between two existing pages
	function transitionPages( toPage, fromPage, transition, reverse ) {

		//get current scroll distance
		var active	= $.mobile.urlHistory.getActive(),
			touchOverflow = $.support.touchOverflow && $.mobile.touchOverflowEnabled,
			toScroll = active.lastScroll || ( touchOverflow ? 0 : $.mobile.defaultHomeScroll ),
			screenHeight = getScreenHeight();

		// Scroll to top, hide addr bar
		window.scrollTo( 0, $.mobile.defaultHomeScroll );

		if( fromPage ) {
			//trigger before show/hide events
			fromPage.data( "page" )._trigger( "beforehide", null, { nextPage: toPage } );
		}

		if( !touchOverflow){
			toPage.height( screenHeight + toScroll );
		}

		toPage.data( "page" )._trigger( "beforeshow", null, { prevPage: fromPage || $( "" ) } );

		//clear page loader
		$.mobile.hidePageLoadingMsg();

		if( touchOverflow && toScroll ){

			toPage.addClass( "ui-mobile-pre-transition" );
			// Send focus to page as it is now display: block
			reFocus( toPage );

			//set page's scrollTop to remembered distance
			if( toPage.is( ".ui-native-fixed" ) ){
				toPage.find( ".ui-content" ).scrollTop( toScroll );
			}
			else{
				toPage.scrollTop( toScroll );
			}
		}

		//find the transition handler for the specified transition. If there
		//isn't one in our transitionHandlers dictionary, use the default one.
		//call the handler immediately to kick-off the transition.
		var th = $.mobile.transitionHandlers[transition || "none"] || $.mobile.defaultTransitionHandler,
			promise = th( transition, reverse, toPage, fromPage );

		promise.done(function() {
			//reset toPage height back
			if( !touchOverflow ){
				toPage.height( "" );
				// Send focus to the newly shown page
				reFocus( toPage );
			}

			// Jump to top or prev scroll, sometimes on iOS the page has not rendered yet.
			if( !touchOverflow ){
				$.mobile.silentScroll( toScroll );
			}

			//trigger show/hide events
			if( fromPage ) {
				if( !touchOverflow ){
					fromPage.height( "" );
				}

				fromPage.data( "page" )._trigger( "hide", null, { nextPage: toPage } );
			}

			//trigger pageshow, define prevPage as either fromPage or empty jQuery obj
			toPage.data( "page" )._trigger( "show", null, { prevPage: fromPage || $( "" ) } );
		});

		return promise;
	}

	//simply set the active page's minimum height to screen height, depending on orientation
	function getScreenHeight(){
		var orientation 	= $.event.special.orientationchange.orientation(),
			port			= orientation === "portrait",
			winMin			= port ? 480 : 320,
			screenHeight	= port ? screen.availHeight : screen.availWidth,
			winHeight		= Math.max( winMin, $( window ).height() ),
			pageMin			= Math.min( screenHeight, winHeight );

		return pageMin;
	}

	$.mobile.getScreenHeight = getScreenHeight;

	//simply set the active page's minimum height to screen height, depending on orientation
	function resetActivePageHeight(){
		// Don't apply this height in touch overflow enabled mode
		if( $.support.touchOverflow && $.mobile.touchOverflowEnabled ){
			return;
		}
		$( "." + $.mobile.activePageClass ).css( "min-height", getScreenHeight() );
	}

	//shared page enhancements
	function enhancePage( $page, role ) {
		// If a role was specified, make sure the data-role attribute
		// on the page element is in sync.
		if( role ) {
			$page.attr( "data-" + $.mobile.ns + "role", role );
		}

		//run page plugin
		$page.page();
	}

/* exposed $.mobile methods	 */

	//animation complete callback
	$.fn.animationComplete = function( callback ) {
		if( $.support.cssTransitions ) {
			return $( this ).one( 'webkitAnimationEnd', callback );
		}
		else{
			// defer execution for consistency between webkit/non webkit
			setTimeout( callback, 0 );
			return $( this );
		}
	};

	//expose path object on $.mobile
	$.mobile.path = path;

	//expose base object on $.mobile
	$.mobile.base = base;

	//history stack
	$.mobile.urlHistory = urlHistory;

	$.mobile.dialogHashKey = dialogHashKey;

	//default non-animation transition handler
	$.mobile.noneTransitionHandler = function( name, reverse, $toPage, $fromPage ) {
		if ( $fromPage ) {
			$fromPage.removeClass( $.mobile.activePageClass );
		}
		$toPage.addClass( $.mobile.activePageClass );

		return $.Deferred().resolve( name, reverse, $toPage, $fromPage ).promise();
	};

	//default handler for unknown transitions
	$.mobile.defaultTransitionHandler = $.mobile.noneTransitionHandler;

	//transition handler dictionary for 3rd party transitions
	$.mobile.transitionHandlers = {
		none: $.mobile.defaultTransitionHandler
	};

	//enable cross-domain page support
	$.mobile.allowCrossDomainPages = false;

	//return the original document url
	$.mobile.getDocumentUrl = function(asParsedObject) {
		return asParsedObject ? $.extend( {}, documentUrl ) : documentUrl.href;
	};

	//return the original document base url
	$.mobile.getDocumentBase = function(asParsedObject) {
		return asParsedObject ? $.extend( {}, documentBase ) : documentBase.href;
	};

	$.mobile._bindPageRemove = function() {
		var page = $(this);

		// when dom caching is not enabled or the page is embedded bind to remove the page on hide
		if( !page.data("page").options.domCache
				&& page.is(":jqmData(external-page='true')") ) {

			page.bind( 'pagehide.remove', function() {
				var $this = $( this ),
					prEvent = new $.Event( "pageremove" );

				$this.trigger( prEvent );

				if( !prEvent.isDefaultPrevented() ){
					$this.removeWithDependents();
				}
			});
		}
	};

	// Load a page into the DOM.
	$.mobile.loadPage = function( url, options ) {
		// This function uses deferred notifications to let callers
		// know when the page is done loading, or if an error has occurred.
		var deferred = $.Deferred(),

			// The default loadPage options with overrides specified by
			// the caller.
			settings = $.extend( {}, $.mobile.loadPage.defaults, options ),

			// The DOM element for the page after it has been loaded.
			page = null,

			// If the reloadPage option is true, and the page is already
			// in the DOM, dupCachedPage will be set to the page element
			// so that it can be removed after the new version of the
			// page is loaded off the network.
			dupCachedPage = null,

			// determine the current base url
			findBaseWithDefault = function(){
				var closestBase = ( $.mobile.activePage && getClosestBaseUrl( $.mobile.activePage ) );
				return closestBase || documentBase.hrefNoHash;
			},

			// The absolute version of the URL passed into the function. This
			// version of the URL may contain dialog/subpage params in it.
			absUrl = path.makeUrlAbsolute( url, findBaseWithDefault() );


		// If the caller provided data, and we're using "get" request,
		// append the data to the URL.
		if ( settings.data && settings.type === "get" ) {
			absUrl = path.addSearchParams( absUrl, settings.data );
			settings.data = undefined;
		}

		// If the caller is using a "post" request, reloadPage must be true
		if(  settings.data && settings.type === "post" ){
			settings.reloadPage = true;
		}

			// The absolute version of the URL minus any dialog/subpage params.
			// In otherwords the real URL of the page to be loaded.
		var fileUrl = path.getFilePath( absUrl ),

			// The version of the Url actually stored in the data-url attribute of
			// the page. For embedded pages, it is just the id of the page. For pages
			// within the same domain as the document base, it is the site relative
			// path. For cross-domain pages (Phone Gap only) the entire absolute Url
			// used to load the page.
			dataUrl = path.convertUrlToDataUrl( absUrl );

		// Make sure we have a pageContainer to work with.
		settings.pageContainer = settings.pageContainer || $.mobile.pageContainer;

		// Check to see if the page already exists in the DOM.
		page = settings.pageContainer.children( ":jqmData(url='" + dataUrl + "')" );

		// If we failed to find the page, check to see if the url is a
		// reference to an embedded page. If so, it may have been dynamically
		// injected by a developer, in which case it would be lacking a data-url
		// attribute and in need of enhancement.
		if ( page.length === 0 && dataUrl && !path.isPath( dataUrl ) ) {
			page = settings.pageContainer.children( "#" + dataUrl )
				.attr( "data-" + $.mobile.ns + "url", dataUrl );
		}

		// If we failed to find a page in the DOM, check the URL to see if it
		// refers to the first page in the application. If it isn't a reference
		// to the first page and refers to non-existent embedded page, error out.
		if ( page.length === 0 ) {
			if ( $.mobile.firstPage && path.isFirstPageUrl( fileUrl ) ) {
				// Check to make sure our cached-first-page is actually
				// in the DOM. Some user deployed apps are pruning the first
				// page from the DOM for various reasons, we check for this
				// case here because we don't want a first-page with an id
				// falling through to the non-existent embedded page error
				// case. If the first-page is not in the DOM, then we let
				// things fall through to the ajax loading code below so
				// that it gets reloaded.
				if ( $.mobile.firstPage.parent().length ) {
					page = $( $.mobile.firstPage );
				}
			} else if ( path.isEmbeddedPage( fileUrl )  ) {
				deferred.reject( absUrl, options );
				return deferred.promise();
			}
		}

		// Reset base to the default document base.
		if ( base ) {
			base.reset();
		}

		// If the page we are interested in is already in the DOM,
		// and the caller did not indicate that we should force a
		// reload of the file, we are done. Otherwise, track the
		// existing page as a duplicated.
		if ( page.length ) {
			if ( !settings.reloadPage ) {
				enhancePage( page, settings.role );
				deferred.resolve( absUrl, options, page );
				return deferred.promise();
			}
			dupCachedPage = page;
		}

		var mpc = settings.pageContainer,
			pblEvent = new $.Event( "pagebeforeload" ),
			triggerData = { url: url, absUrl: absUrl, dataUrl: dataUrl, deferred: deferred, options: settings };

		// Let listeners know we're about to load a page.
		mpc.trigger( pblEvent, triggerData );

		// If the default behavior is prevented, stop here!
		if( pblEvent.isDefaultPrevented() ){
			return deferred.promise();
		}

		if ( settings.showLoadMsg ) {

			// This configurable timeout allows cached pages a brief delay to load without showing a message
			var loadMsgDelay = setTimeout(function(){
					$.mobile.showPageLoadingMsg();
				}, settings.loadMsgDelay ),

				// Shared logic for clearing timeout and removing message.
				hideMsg = function(){

					// Stop message show timer
					clearTimeout( loadMsgDelay );

					// Hide loading message
					$.mobile.hidePageLoadingMsg();
				};
		}

		if ( !( $.mobile.allowCrossDomainPages || path.isSameDomain( documentUrl, absUrl ) ) ) {
			deferred.reject( absUrl, options );
		} else {
			// Load the new page.
			$.ajax({
				url: fileUrl,
				type: settings.type,
				data: settings.data,
				dataType: "html",
				success: function( html, textStatus, xhr ) {
					//pre-parse html to check for a data-url,
					//use it as the new fileUrl, base path, etc
					var all = $( "<div></div>" ),

						//page title regexp
						newPageTitle = html.match( /<title[^>]*>([^<]*)/ ) && RegExp.$1,

						// TODO handle dialogs again
						pageElemRegex = new RegExp( "(<[^>]+\\bdata-" + $.mobile.ns + "role=[\"']?page[\"']?[^>]*>)" ),
						dataUrlRegex = new RegExp( "\\bdata-" + $.mobile.ns + "url=[\"']?([^\"'>]*)[\"']?" );


					// data-url must be provided for the base tag so resource requests can be directed to the
					// correct url. loading into a temprorary element makes these requests immediately
					if( pageElemRegex.test( html )
							&& RegExp.$1
							&& dataUrlRegex.test( RegExp.$1 )
							&& RegExp.$1 ) {
						url = fileUrl = path.getFilePath( RegExp.$1 );
					}

					if ( base ) {
						base.set( fileUrl );
					}

					//workaround to allow scripts to execute when included in page divs
					all.get( 0 ).innerHTML = html;
					page = all.find( ":jqmData(role='page'), :jqmData(role='dialog')" ).first();

					//if page elem couldn't be found, create one and insert the body element's contents
					if( !page.length ){
						page = $( "<div data-" + $.mobile.ns + "role='page'>" + html.split( /<\/?body[^>]*>/gmi )[1] + "</div>" );
					}

					if ( newPageTitle && !page.jqmData( "title" ) ) {
						if ( ~newPageTitle.indexOf( "&" ) ) {
							newPageTitle = $( "<div>" + newPageTitle + "</div>" ).text();
						}
						page.jqmData( "title", newPageTitle );
					}

					//rewrite src and href attrs to use a base url
					if( !$.support.dynamicBaseTag ) {
						var newPath = path.get( fileUrl );
						page.find( "[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]" ).each(function() {
							var thisAttr = $( this ).is( '[href]' ) ? 'href' :
									$(this).is('[src]') ? 'src' : 'action',
								thisUrl = $( this ).attr( thisAttr );

							// XXX_jblas: We need to fix this so that it removes the document
							//            base URL, and then prepends with the new page URL.
							//if full path exists and is same, chop it - helps IE out
							thisUrl = thisUrl.replace( location.protocol + '//' + location.host + location.pathname, '' );

							if( !/^(\w+:|#|\/)/.test( thisUrl ) ) {
								$( this ).attr( thisAttr, newPath + thisUrl );
							}
						});
					}

					//append to page and enhance
					// TODO taging a page with external to make sure that embedded pages aren't removed
					//      by the various page handling code is bad. Having page handling code in many
					//      places is bad. Solutions post 1.0
					page
						.attr( "data-" + $.mobile.ns + "url", path.convertUrlToDataUrl( fileUrl ) )
						.attr( "data-" + $.mobile.ns + "external-page", true )
						.appendTo( settings.pageContainer );

					// wait for page creation to leverage options defined on widget
					page.one( 'pagecreate', $.mobile._bindPageRemove );

					enhancePage( page, settings.role );

					// Enhancing the page may result in new dialogs/sub pages being inserted
					// into the DOM. If the original absUrl refers to a sub-page, that is the
					// real page we are interested in.
					if ( absUrl.indexOf( "&" + $.mobile.subPageUrlKey ) > -1 ) {
						page = settings.pageContainer.children( ":jqmData(url='" + dataUrl + "')" );
					}

					//bind pageHide to removePage after it's hidden, if the page options specify to do so

					// Remove loading message.
					if ( settings.showLoadMsg ) {
						hideMsg();
					}

					// Add the page reference and xhr to our triggerData.
					triggerData.xhr = xhr;
					triggerData.textStatus = textStatus;
					triggerData.page = page;

					// Let listeners know the page loaded successfully.
					settings.pageContainer.trigger( "pageload", triggerData );

					deferred.resolve( absUrl, options, page, dupCachedPage );
				},
				error: function( xhr, textStatus, errorThrown ) {
					//set base back to current path
					if( base ) {
						base.set( path.get() );
					}

					// Add error info to our triggerData.
					triggerData.xhr = xhr;
					triggerData.textStatus = textStatus;
					triggerData.errorThrown = errorThrown;

					var plfEvent = new $.Event( "pageloadfailed" );

					// Let listeners know the page load failed.
					settings.pageContainer.trigger( plfEvent, triggerData );

					// If the default behavior is prevented, stop here!
					// Note that it is the responsibility of the listener/handler
					// that called preventDefault(), to resolve/reject the
					// deferred object within the triggerData.
					if( plfEvent.isDefaultPrevented() ){
						return;
					}

					// Remove loading message.
					if ( settings.showLoadMsg ) {

						// Remove loading message.
						hideMsg();

						//show error message
						$( "<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>"+ $.mobile.pageLoadErrorMessage +"</h1></div>" )
							.css({ "display": "block", "opacity": 0.96, "top": $window.scrollTop() + 100 })
							.appendTo( settings.pageContainer )
							.delay( 800 )
							.fadeOut( 400, function() {
								$( this ).remove();
							});
					}

					deferred.reject( absUrl, options );
				}
			});
		}

		return deferred.promise();
	};

	$.mobile.loadPage.defaults = {
		type: "get",
		data: undefined,
		reloadPage: false,
		role: undefined, // By default we rely on the role defined by the @data-role attribute.
		showLoadMsg: false,
		pageContainer: undefined,
		loadMsgDelay: 50 // This delay allows loads that pull from browser cache to occur without showing the loading message.
	};

	// Show a specific page in the page container.
	$.mobile.changePage = function( toPage, options ) {
		// If we are in the midst of a transition, queue the current request.
		// We'll call changePage() once we're done with the current transition to
		// service the request.
		if( isPageTransitioning ) {
			pageTransitionQueue.unshift( arguments );
			return;
		}

		var settings = $.extend( {}, $.mobile.changePage.defaults, options );

		// Make sure we have a pageContainer to work with.
		settings.pageContainer = settings.pageContainer || $.mobile.pageContainer;

		// Make sure we have a fromPage.
		settings.fromPage = settings.fromPage || $.mobile.activePage;

		var mpc = settings.pageContainer,
			pbcEvent = new $.Event( "pagebeforechange" ),
			triggerData = { toPage: toPage, options: settings };

		// Let listeners know we're about to change the current page.
		mpc.trigger( pbcEvent, triggerData );

		// If the default behavior is prevented, stop here!
		if( pbcEvent.isDefaultPrevented() ){
			return;
		}

		// We allow "pagebeforechange" observers to modify the toPage in the trigger
		// data to allow for redirects. Make sure our toPage is updated.

		toPage = triggerData.toPage;

		// Set the isPageTransitioning flag to prevent any requests from
		// entering this method while we are in the midst of loading a page
		// or transitioning.

		isPageTransitioning = true;

		// If the caller passed us a url, call loadPage()
		// to make sure it is loaded into the DOM. We'll listen
		// to the promise object it returns so we know when
		// it is done loading or if an error ocurred.
		if ( typeof toPage == "string" ) {
			$.mobile.loadPage( toPage, settings )
				.done(function( url, options, newPage, dupCachedPage ) {
				    console.log(url);
					isPageTransitioning = false;
					options.duplicateCachedPage = dupCachedPage;
					$.mobile.changePage( newPage, options );
				})
				.fail(function( url, options ) {
				   console.log(url);
					isPageTransitioning = false;

					//clear out the active button state
					removeActiveLinkClass( true );

					//release transition lock so navigation is free again
					releasePageTransitionLock();
					settings.pageContainer.trigger( "pagechangefailed", triggerData );
				});
			return;
		}

		// If we are going to the first-page of the application, we need to make
		// sure settings.dataUrl is set to the application document url. This allows
		// us to avoid generating a document url with an id hash in the case where the
		// first-page of the document has an id attribute specified.
		if ( toPage[ 0 ] === $.mobile.firstPage[ 0 ] && !settings.dataUrl ) {
			settings.dataUrl = documentUrl.hrefNoHash;
		}

		// The caller passed us a real page DOM element. Update our
		// internal state and then trigger a transition to the page.
		var fromPage = settings.fromPage,
			url = ( settings.dataUrl && path.convertUrlToDataUrl( settings.dataUrl ) ) || toPage.jqmData( "url" ),
			// The pageUrl var is usually the same as url, except when url is obscured as a dialog url. pageUrl always contains the file path
			pageUrl = url,
			fileUrl = path.getFilePath( url ),
			active = urlHistory.getActive(),
			activeIsInitialPage = urlHistory.activeIndex === 0,
			historyDir = 0,
			pageTitle = document.title,
			isDialog = settings.role === "dialog" || toPage.jqmData( "role" ) === "dialog";	    

		// By default, we prevent changePage requests when the fromPage and toPage
		// are the same element, but folks that generate content manually/dynamically
		// and reuse pages want to be able to transition to the same page. To allow
		// this, they will need to change the default value of allowSamePageTransition
		// to true, *OR*, pass it in as an option when they manually call changePage().
		// It should be noted that our default transition animations assume that the
		// formPage and toPage are different elements, so they may behave unexpectedly.
		// It is up to the developer that turns on the allowSamePageTransitiona option
		// to either turn off transition animations, or make sure that an appropriate
		// animation transition is used.
		if( fromPage && fromPage[0] === toPage[0] && !settings.allowSamePageTransition ) {
			isPageTransitioning = false;
			mpc.trigger( "pagechange", triggerData );
			return;
		}

		// We need to make sure the page we are given has already been enhanced.
		enhancePage( toPage, settings.role );

		// If the changePage request was sent from a hashChange event, check to see if the
		// page is already within the urlHistory stack. If so, we'll assume the user hit
		// the forward/back button and will try to match the transition accordingly.
		if( settings.fromHashChange ) {
			urlHistory.directHashChange({
				currentUrl:	url,
				isBack:		function() { historyDir = -1; },
				isForward:	function() { historyDir = 1; }
			});
		}

		// Kill the keyboard.
		// XXX_jblas: We need to stop crawling the entire document to kill focus. Instead,
		//            we should be tracking focus with a live() handler so we already have
		//            the element in hand at this point.
		// Wrap this in a try/catch block since IE9 throw "Unspecified error" if document.activeElement
		// is undefined when we are in an IFrame.
		try {
			if(document.activeElement && document.activeElement.nodeName.toLowerCase() != 'body') {
				$(document.activeElement).blur();
			} else {
				$( "input:focus, textarea:focus, select:focus" ).blur();
			}
		} catch(e) {}

		// If we're displaying the page as a dialog, we don't want the url
		// for the dialog content to be used in the hash. Instead, we want
		// to append the dialogHashKey to the url of the current page.
		if ( isDialog && active ) {
			// on the initial page load active.url is undefined and in that case should
			// be an empty string. Moving the undefined -> empty string back into
			// urlHistory.addNew seemed imprudent given undefined better represents
			// the url state
			url = ( active.url || "" ) + dialogHashKey;
		}

		// Set the location hash.
		if( settings.changeHash !== false && url ) {
			//disable hash listening temporarily
			urlHistory.ignoreNextHashChange = true;
			//update hash and history
			path.set( url );
		}

		// if title element wasn't found, try the page div data attr too
		// If this is a deep-link or a reload ( active === undefined ) then just use pageTitle
		var newPageTitle = ( !active )? pageTitle : toPage.jqmData( "title" ) || toPage.children(":jqmData(role='header')").find(".ui-title" ).getEncodedText();
		if( !!newPageTitle && pageTitle == document.title ) {
			pageTitle = newPageTitle;
		}
		if ( !toPage.jqmData( "title" ) ) {
			toPage.jqmData( "title", pageTitle );
		}

		// Make sure we have a transition defined.
		settings.transition = settings.transition
			|| ( ( historyDir && !activeIsInitialPage ) ? active.transition : undefined )
			|| ( isDialog ? $.mobile.defaultDialogTransition : $.mobile.defaultPageTransition );

		//add page to history stack if it's not back or forward
		if( !historyDir ) {
			urlHistory.addNew( url, settings.transition, pageTitle, pageUrl, settings.role );
		}

		//set page title
		document.title = urlHistory.getActive().title;

		//set "toPage" as activePage
		$.mobile.activePage = toPage;

		// If we're navigating back in the URL history, set reverse accordingly.
		settings.reverse = settings.reverse || historyDir < 0;

		transitionPages( toPage, fromPage, settings.transition, settings.reverse )
			.done(function() {
				removeActiveLinkClass();

				//if there's a duplicateCachedPage, remove it from the DOM now that it's hidden
				if ( settings.duplicateCachedPage ) {
					settings.duplicateCachedPage.remove();
				}

				//remove initial build class (only present on first pageshow)
				$html.removeClass( "ui-mobile-rendering" );

				releasePageTransitionLock();

				// Let listeners know we're all done changing the current page.
				mpc.trigger( "pagechange", triggerData );
			});
	};

	$.mobile.changePage.defaults = {
		transition: undefined,
		reverse: false,
		changeHash: true,
		fromHashChange: false,
		role: undefined, // By default we rely on the role defined by the @data-role attribute.
		duplicateCachedPage: undefined,
		pageContainer: undefined,
		showLoadMsg: true, //loading message shows by default when pages are being fetched during changePage
		dataUrl: undefined,
		fromPage: undefined,
		allowSamePageTransition: false
	};

/* Event Bindings - hashchange, submit, and click */
	function findClosestLink( ele )
	{
		while ( ele ) {
			// Look for the closest element with a nodeName of "a".
			// Note that we are checking if we have a valid nodeName
			// before attempting to access it. This is because the
			// node we get called with could have originated from within
			// an embedded SVG document where some symbol instance elements
			// don't have nodeName defined on them, or strings are of type
			// SVGAnimatedString.
			if ( ( typeof ele.nodeName === "string" ) && ele.nodeName.toLowerCase() == "a" ) {
				break;
			}
			ele = ele.parentNode;
		}
		return ele;
	}

	// The base URL for any given element depends on the page it resides in.
	function getClosestBaseUrl( ele )
	{
		// Find the closest page and extract out its url.
		var url = $( ele ).closest( ".ui-page" ).jqmData( "url" ),
			base = documentBase.hrefNoHash;

		if ( !url || !path.isPath( url ) ) {
			url = base;
		}

		return path.makeUrlAbsolute( url, base);
	}


	//The following event bindings should be bound after mobileinit has been triggered
	//the following function is called in the init file
	$.mobile._registerInternalEvents = function(){

		//bind to form submit events, handle with Ajax
		$( "form" ).live('submit', function( event ) {
			var $this = $( this );
			if( !$.mobile.ajaxEnabled ||
				$this.is( ":jqmData(ajax='false')" ) ) {
					return;
				}

			var type = $this.attr( "method" ),
				target = $this.attr( "target" ),
				url = $this.attr( "action" );

			// If no action is specified, browsers default to using the
			// URL of the document containing the form. Since we dynamically
			// pull in pages from external documents, the form should submit
			// to the URL for the source document of the page containing
			// the form.
			if ( !url ) {
				// Get the @data-url for the page containing the form.
				url = getClosestBaseUrl( $this );
				if ( url === documentBase.hrefNoHash ) {
					// The url we got back matches the document base,
					// which means the page must be an internal/embedded page,
					// so default to using the actual document url as a browser
					// would.
					url = documentUrl.hrefNoSearch;
				}
			}

			url = path.makeUrlAbsolute(  url, getClosestBaseUrl($this) );

			//external submits use regular HTTP
			if( path.isExternal( url ) || target ) {
				return;
			}

			$.mobile.changePage(
				url,
				{
					type:		type && type.length && type.toLowerCase() || "get",
					data:		$this.serialize(),
					transition:	$this.jqmData( "transition" ),
					direction:	$this.jqmData( "direction" ),
					reloadPage:	true
				}
			);
			event.preventDefault();
		});

		//add active state on vclick
		$( document ).bind( "vclick", function( event ) {
			// if this isn't a left click we don't care. Its important to note
			// that when the virtual event is generated it will create
			if ( event.which > 1 || !$.mobile.linkBindingEnabled ){
				return;
			}

			var link = findClosestLink( event.target );
			if ( link ) {
				if ( path.parseUrl( link.getAttribute( "href" ) || "#" ).hash !== "#" ) {
					removeActiveLinkClass( true );
					$activeClickedLink = $( link ).closest( ".ui-btn" ).not( ".ui-disabled" );
					$activeClickedLink.addClass( $.mobile.activeBtnClass );
					$( "." + $.mobile.activePageClass + " .ui-btn" ).not( link ).blur();
				}
			}
		});

		// click routing - direct to HTTP or Ajax, accordingly
		$( document ).bind( "click", function( event ) {
			if( !$.mobile.linkBindingEnabled ){
				return;
			}

			var link = findClosestLink( event.target );

			// If there is no link associated with the click or its not a left
			// click we want to ignore the click
			if ( !link || event.which > 1) {
				return;
			}

			var $link = $( link ),
				//remove active link class if external (then it won't be there if you come back)
				httpCleanup = function(){
					window.setTimeout( function() { removeActiveLinkClass( true ); }, 200 );
				};

			//if there's a data-rel=back attr, go back in history
			if( $link.is( ":jqmData(rel='back')" ) ) {
				window.history.back();
				return false;
			}

			var baseUrl = getClosestBaseUrl( $link ),

				//get href, if defined, otherwise default to empty hash
				href = path.makeUrlAbsolute( $link.attr( "href" ) || "#", baseUrl );

			//if ajax is disabled, exit early
			if( !$.mobile.ajaxEnabled && !path.isEmbeddedPage( href ) ){
				httpCleanup();
				//use default click handling
				return;
			}

			// XXX_jblas: Ideally links to application pages should be specified as
			//            an url to the application document with a hash that is either
			//            the site relative path or id to the page. But some of the
			//            internal code that dynamically generates sub-pages for nested
			//            lists and select dialogs, just write a hash in the link they
			//            create. This means the actual URL path is based on whatever
			//            the current value of the base tag is at the time this code
			//            is called. For now we are just assuming that any url with a
			//            hash in it is an application page reference.
			if ( href.search( "#" ) != -1 ) {
				href = href.replace( /[^#]*#/, "" );
				if ( !href ) {
					//link was an empty hash meant purely
					//for interaction, so we ignore it.
					event.preventDefault();
					return;
				} else if ( path.isPath( href ) ) {
					//we have apath so make it the href we want to load.
					href = path.makeUrlAbsolute( href, baseUrl );
				} else {
					//we have a simple id so use the documentUrl as its base.
					href = path.makeUrlAbsolute( "#" + href, documentUrl.hrefNoHash );
				}
			}

				// Should we handle this link, or let the browser deal with it?
			var useDefaultUrlHandling = $link.is( "[rel='external']" ) || $link.is( ":jqmData(ajax='false')" ) || $link.is( "[target]" ),

				// Some embedded browsers, like the web view in Phone Gap, allow cross-domain XHR
				// requests if the document doing the request was loaded via the file:// protocol.
				// This is usually to allow the application to "phone home" and fetch app specific
				// data. We normally let the browser handle external/cross-domain urls, but if the
				// allowCrossDomainPages option is true, we will allow cross-domain http/https
				// requests to go through our page loading logic.
				isCrossDomainPageLoad = ( $.mobile.allowCrossDomainPages && documentUrl.protocol === "file:" && href.search( /^https?:/ ) != -1 ),

				//check for protocol or rel and its not an embedded page
				//TODO overlap in logic from isExternal, rel=external check should be
				//     moved into more comprehensive isExternalLink
				isExternal = useDefaultUrlHandling || ( path.isExternal( href ) && !isCrossDomainPageLoad );

			if( isExternal ) {
				httpCleanup();
				//use default click handling
				return;
			}

			//use ajax
			var transition = $link.jqmData( "transition" ),
				direction = $link.jqmData( "direction" ),
				reverse = ( direction && direction === "reverse" ) ||
							// deprecated - remove by 1.0
							$link.jqmData( "back" ),

				//this may need to be more specific as we use data-rel more
				role = $link.attr( "data-" + $.mobile.ns + "rel" ) || undefined;

			$.mobile.changePage( href, { transition: transition, reverse: reverse, role: role } );
			event.preventDefault();
		});

		//prefetch pages when anchors with data-prefetch are encountered
		$( ".ui-page" ).live( "pageshow.prefetch", function() {
			var urls = [];
			$( this ).find( "a:jqmData(prefetch)" ).each(function(){
				var $link = $(this),
					url = $link.attr( "href" );

				if ( url && $.inArray( url, urls ) === -1 ) {
					urls.push( url );

					$.mobile.loadPage( url, {role: $link.attr("data-" + $.mobile.ns + "rel")} );
				}
			});
		});

		$.mobile._handleHashChange = function( hash ) {
			//find first page via hash
			var to = path.stripHash( hash ),
				//transition is false if it's the first page, undefined otherwise (and may be overridden by default)
				transition = $.mobile.urlHistory.stack.length === 0 ? "none" : undefined,

				// default options for the changPage calls made after examining the current state
				// of the page and the hash
				changePageOptions = {
					transition: transition,
					changeHash: false,
					fromHashChange: true
				};

			//if listening is disabled (either globally or temporarily), or it's a dialog hash
			if( !$.mobile.hashListeningEnabled || urlHistory.ignoreNextHashChange ) {
				urlHistory.ignoreNextHashChange = false;
				return;
			}

			// special case for dialogs
			if( urlHistory.stack.length > 1 && to.indexOf( dialogHashKey ) > -1 ) {

				// If current active page is not a dialog skip the dialog and continue
				// in the same direction
				if(!$.mobile.activePage.is( ".ui-dialog" )) {
					//determine if we're heading forward or backward and continue accordingly past
					//the current dialog
					urlHistory.directHashChange({
						currentUrl: to,
						isBack: function() { window.history.back(); },
						isForward: function() { window.history.forward(); }
					});

					// prevent changePage()
					return;
				} else {
					// if the current active page is a dialog and we're navigating
					// to a dialog use the dialog objected saved in the stack
					urlHistory.directHashChange({
						currentUrl: to,

						// regardless of the direction of the history change
						// do the following
						either: function( isBack ) {
							var active = $.mobile.urlHistory.getActive();

							to = active.pageUrl;

							// make sure to set the role, transition and reversal
							// as most of this is lost by the domCache cleaning
							$.extend( changePageOptions, {
								role: active.role,
								transition:	 active.transition,
								reverse: isBack
							});
						}
					});
				}
			}

			//if to is defined, load it
			if ( to ) {
				// At this point, 'to' can be one of 3 things, a cached page element from
				// a history stack entry, an id, or site-relative/absolute URL. If 'to' is
				// an id, we need to resolve it against the documentBase, not the location.href,
				// since the hashchange could've been the result of a forward/backward navigation
				// that crosses from an external page/dialog to an internal page/dialog.
				to = ( typeof to === "string" && !path.isPath( to ) ) ? ( path.makeUrlAbsolute( '#' + to, documentBase ) ) : to;
				$.mobile.changePage( to, changePageOptions );
			}	else {
				//there's no hash, go to the first page in the dom
				$.mobile.changePage( $.mobile.firstPage, changePageOptions );
			}
		};

		//hashchange event handler
		$window.bind( "hashchange", function( e, triggered ) {
			$.mobile._handleHashChange( location.hash );
		});

		//set page min-heights to be device specific
		$( document ).bind( "pageshow", resetActivePageHeight );
		$( window ).bind( "throttledresize", resetActivePageHeight );

	};//_registerInternalEvents callback

})( jQuery );
/*
* history.pushState support, layered on top of hashchange
*/

( function( $, window ) {
	// For now, let's Monkeypatch this onto the end of $.mobile._registerInternalEvents
	// Scope self to pushStateHandler so we can reference it sanely within the
	// methods handed off as event handlers
	var	pushStateHandler = {},
		self = pushStateHandler,
		$win = $( window ),
		url = $.mobile.path.parseUrl( location.href );

	$.extend( pushStateHandler, {
		// TODO move to a path helper, this is rather common functionality
		initialFilePath: (function() {
			return url.pathname + url.search;
		})(),

		initialHref: url.hrefNoHash,

		// Flag for tracking if a Hashchange naturally occurs after each popstate + replace
		hashchangeFired: false,

		state: function() {
			return {
				hash: location.hash || "#" + self.initialFilePath,
				title: document.title,

				// persist across refresh
				initialHref: self.initialHref
			};
		},

		resetUIKeys: function( url ) {
			var dialog = $.mobile.dialogHashKey,
				subkey = "&" + $.mobile.subPageUrlKey,
				dialogIndex = url.indexOf( dialog );

			if( dialogIndex > -1 ) {
				url = url.slice( 0, dialogIndex ) + "#" + url.slice( dialogIndex );
			} else if( url.indexOf( subkey ) > -1 ) {
				url = url.split( subkey ).join( "#" + subkey );
			}

			return url;
		},

		// TODO sort out a single barrier to hashchange functionality
		nextHashChangePrevented: function( value ) {
			$.mobile.urlHistory.ignoreNextHashChange = value;
			self.onHashChangeDisabled = value;
		},

		// on hash change we want to clean up the url
		// NOTE this takes place *after* the vanilla navigation hash change
		// handling has taken place and set the state of the DOM
		onHashChange: function( e ) {
			// disable this hash change
			if( self.onHashChangeDisabled ){
				return;
			}
			
			var href, state,
				hash = location.hash,
				isPath = $.mobile.path.isPath( hash ),
				resolutionUrl = isPath ? location.href : $.mobile.getDocumentUrl();
			hash = isPath ? hash.replace( "#", "" ) : hash;

			// propulate the hash when its not available
			state = self.state();

			// make the hash abolute with the current href
			href = $.mobile.path.makeUrlAbsolute( hash, resolutionUrl );

			if ( isPath ) {
				href = self.resetUIKeys( href );
			}

			// replace the current url with the new href and store the state
			// Note that in some cases we might be replacing an url with the
			// same url. We do this anyways because we need to make sure that
			// all of our history entries have a state object associated with
			// them. This allows us to work around the case where window.history.back()
			// is called to transition from an external page to an embedded page.
			// In that particular case, a hashchange event is *NOT* generated by the browser.
			// Ensuring each history entry has a state object means that onPopState()
			// will always trigger our hashchange callback even when a hashchange event
			// is not fired.
			history.replaceState( state, document.title, href );
		},

		// on popstate (ie back or forward) we need to replace the hash that was there previously
		// cleaned up by the additional hash handling
		onPopState: function( e ) {
			var poppedState = e.originalEvent.state, holdnexthashchange = false;

			// if there's no state its not a popstate we care about, ie chrome's initial popstate
			// or forward popstate
			if( poppedState ) {
				// disable any hashchange triggered by the browser
				self.nextHashChangePrevented( true );

				// defer our manual hashchange until after the browser fired
				// version has come and gone
				setTimeout(function() {
					// make sure that the manual hash handling takes place
					self.nextHashChangePrevented( false );

					// change the page based on the hash
					$.mobile._handleHashChange( poppedState.hash );
				}, 100);
			}
		},

		init: function() {
			$win.bind( "hashchange", self.onHashChange );

			// Handle popstate events the occur through history changes
			$win.bind( "popstate", self.onPopState );

			// if there's no hash, we need to replacestate for returning to home
			if ( location.hash === "" ) {
				history.replaceState( self.state(), document.title, location.href );
			}
		}
	});

	$( function() {
		if( $.mobile.pushStateEnabled && $.support.pushState ){
			pushStateHandler.init();
		}
	});
})( jQuery, this );
/*
* "transitions" plugin - Page change tranistions
*/

(function( $, window, undefined ) {

function css3TransitionHandler( name, reverse, $to, $from ) {

	var deferred = new $.Deferred(),
		reverseClass = reverse ? " reverse" : "",
		viewportClass = "ui-mobile-viewport-transitioning viewport-" + name,
		doneFunc = function() {

			$to.add( $from ).removeClass( "out in reverse " + name );

			if ( $from && $from[ 0 ] !== $to[ 0 ] ) {
				$from.removeClass( $.mobile.activePageClass );
			}

			$to.parent().removeClass( viewportClass );

			deferred.resolve( name, reverse, $to, $from );
		};

	$to.animationComplete( doneFunc );

	$to.parent().addClass( viewportClass );

	if ( $from ) {
		$from.addClass( name + " out" + reverseClass );
	}
	$to.addClass( $.mobile.activePageClass + " " + name + " in" + reverseClass );

	return deferred.promise();
}

// Make our transition handler public.
$.mobile.css3TransitionHandler = css3TransitionHandler;

// If the default transition handler is the 'none' handler, replace it with our handler.
if ( $.mobile.defaultTransitionHandler === $.mobile.noneTransitionHandler ) {
	$.mobile.defaultTransitionHandler = css3TransitionHandler;
}

})( jQuery, this );
/*
* "degradeInputs" plugin - degrades inputs to another type after custom enhancements are made.
*/

(function( $, undefined ) {

$.mobile.page.prototype.options.degradeInputs = {
	color: false,
	date: false,
	datetime: false,
	"datetime-local": false,
	email: false,
	month: false,
	number: false,
	range: "number",
	search: "text",
	tel: false,
	time: false,
	url: false,
	week: false
};


//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){

	var page = $(e.target).closest(':jqmData(role="page")').data("page"), options;

	if( !page ) {
		return;
	}

	options = page.options;

	// degrade inputs to avoid poorly implemented native functionality
	$( e.target ).find( "input" ).not( page.keepNativeSelector() ).each(function() {
		var $this = $( this ),
			type = this.getAttribute( "type" ),
			optType = options.degradeInputs[ type ] || "text";

		if ( options.degradeInputs[ type ] ) {
			var html = $( "<div>" ).html( $this.clone() ).html(),
				// In IE browsers, the type sometimes doesn't exist in the cloned markup, so we replace the closing tag instead
				hasType = html.indexOf( " type=" ) > -1,
				findstr = hasType ? /\s+type=["']?\w+['"]?/ : /\/?>/,
				repstr = " type=\"" + optType + "\" data-" + $.mobile.ns + "type=\"" + type + "\"" + ( hasType ? "" : ">" );

			$this.replaceWith( html.replace( findstr, repstr ) );
		}
	});

});

})( jQuery );/*
* "dialog" plugin.
*/

(function( $, window, undefined ) {

$.widget( "mobile.dialog", $.mobile.widget, {
	options: {
		closeBtnText 	: "Close",
		overlayTheme	: "a",
		initSelector	: ":jqmData(role='dialog')"
	},
	_create: function() {
		var self = this,
			$el = this.element,
			headerCloseButton = $( "<a href='#' data-" + $.mobile.ns + "icon='delete' data-" + $.mobile.ns + "iconpos='notext'>"+ this.options.closeBtnText + "</a>" );

		$el.addClass( "ui-overlay-" + this.options.overlayTheme );

		// Class the markup for dialog styling
		// Set aria role
		$el.attr( "role", "dialog" )
			.addClass( "ui-dialog" )
			.find( ":jqmData(role='header')" )
			.addClass( "ui-corner-top ui-overlay-shadow" )
				.prepend( headerCloseButton )
			.end()
			.find( ":jqmData(role='content'),:jqmData(role='footer')" )
				.addClass( "ui-overlay-shadow" )
				.last()
				.addClass( "ui-corner-bottom" );

		// this must be an anonymous function so that select menu dialogs can replace
		// the close method. This is a change from previously just defining data-rel=back
		// on the button and letting nav handle it
		headerCloseButton.bind( "vclick", function() {
			self.close();
		});

		/* bind events
			- clicks and submits should use the closing transition that the dialog opened with
			  unless a data-transition is specified on the link/form
			- if the click was on the close button, or the link has a data-rel="back" it'll go back in history naturally
		*/
		$el.bind( "vclick submit", function( event ) {
			var $target = $( event.target ).closest( event.type === "vclick" ? "a" : "form" ),
				active;

			if ( $target.length && !$target.jqmData( "transition" ) ) {

				active = $.mobile.urlHistory.getActive() || {};

				$target.attr( "data-" + $.mobile.ns + "transition", ( active.transition || $.mobile.defaultDialogTransition ) )
					.attr( "data-" + $.mobile.ns + "direction", "reverse" );
			}
		})
		.bind( "pagehide", function() {
			$( this ).find( "." + $.mobile.activeBtnClass ).removeClass( $.mobile.activeBtnClass );
		});
	},

	// Close method goes back in history
	close: function() {
		window.history.back();
	}
});

//auto self-init widgets
$( $.mobile.dialog.prototype.options.initSelector ).live( "pagecreate", function(){
	$( this ).dialog();
});

})( jQuery, this );
/*
* This plugin handles theming and layout of headers, footers, and content areas
*/

(function( $, undefined ) {

$.mobile.page.prototype.options.backBtnText  = "Back";
$.mobile.page.prototype.options.addBackBtn   = false;
$.mobile.page.prototype.options.backBtnTheme = null;
$.mobile.page.prototype.options.headerTheme  = "a";
$.mobile.page.prototype.options.footerTheme  = "a";
$.mobile.page.prototype.options.contentTheme = null;

$( ":jqmData(role='page'), :jqmData(role='dialog')" ).live( "pagecreate", function( e ) {
	
	var $page = $( this ),
		o = $page.data( "page" ).options,
		pageRole = $page.jqmData( "role" ),
		pageTheme = o.theme;
	
	$( ":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')", this ).each(function() {
		var $this = $( this ),
			role = $this.jqmData( "role" ),
			theme = $this.jqmData( "theme" ),
			contentTheme = theme || o.contentTheme || ( pageRole === "dialog" && pageTheme ),
			$headeranchors,
			leftbtn,
			rightbtn,
			backBtn;
			
		$this.addClass( "ui-" + role );	

		//apply theming and markup modifications to page,header,content,footer
		if ( role === "header" || role === "footer" ) {
			
			var thisTheme = theme || ( role === "header" ? o.headerTheme : o.footerTheme ) || pageTheme;

			$this
				//add theme class
				.addClass( "ui-bar-" + thisTheme )
				// Add ARIA role
				.attr( "role", role === "header" ? "banner" : "contentinfo" );

			// Right,left buttons
			$headeranchors	= $this.children( "a" );
			leftbtn	= $headeranchors.hasClass( "ui-btn-left" );
			rightbtn = $headeranchors.hasClass( "ui-btn-right" );

			leftbtn = leftbtn || $headeranchors.eq( 0 ).not( ".ui-btn-right" ).addClass( "ui-btn-left" ).length;
			
			rightbtn = rightbtn || $headeranchors.eq( 1 ).addClass( "ui-btn-right" ).length;
			
			// Auto-add back btn on pages beyond first view
			if ( o.addBackBtn && 
				role === "header" &&
				$( ".ui-page" ).length > 1 &&
				$this.jqmData( "url" ) !== $.mobile.path.stripHash( location.hash ) &&
				!leftbtn ) {

				backBtn = $( "<a href='#' class='ui-btn-left' data-"+ $.mobile.ns +"rel='back' data-"+ $.mobile.ns +"icon='arrow-l'>"+ o.backBtnText +"</a>" )
					// If theme is provided, override default inheritance
					.attr( "data-"+ $.mobile.ns +"theme", o.backBtnTheme || thisTheme )
					.prependTo( $this );				
			}

			// Page title
			$this.children( "h1, h2, h3, h4, h5, h6" )
				.addClass( "ui-title" )
				// Regardless of h element number in src, it becomes h1 for the enhanced page
				.attr({
					"tabindex": "0",
					"role": "heading",
					"aria-level": "1"
				});

		} else if ( role === "content" ) {
			if ( contentTheme ) {
			    $this.addClass( "ui-body-" + ( contentTheme ) );
			}

			// Add ARIA role
			$this.attr( "role", "main" );
		}
	});
});

})( jQuery );/*
* "collapsible" plugin
*/

(function( $, undefined ) {

$.widget( "mobile.collapsible", $.mobile.widget, {
	options: {
		expandCueText: " click to expand contents",
		collapseCueText: " click to collapse contents",
		collapsed: true,
		heading: "h1,h2,h3,h4,h5,h6,legend",
		theme: null,
		contentTheme: null,
		iconTheme: "d",
		initSelector: ":jqmData(role='collapsible')"
	},
	_create: function() {

		var $el = this.element,
			o = this.options,
			collapsible = $el.addClass( "ui-collapsible" ),
			collapsibleHeading = $el.children( o.heading ).first(),
			collapsibleContent = collapsible.wrapInner( "<div class='ui-collapsible-content'></div>" ).find( ".ui-collapsible-content" ),
			collapsibleSet = $el.closest( ":jqmData(role='collapsible-set')" ).addClass( "ui-collapsible-set" ),
			collapsiblesInSet = collapsibleSet.children( ":jqmData(role='collapsible')" );

		// Replace collapsibleHeading if it's a legend
		if ( collapsibleHeading.is( "legend" ) ) {
			collapsibleHeading = $( "<div role='heading'>"+ collapsibleHeading.html() +"</div>" ).insertBefore( collapsibleHeading );
			collapsibleHeading.next().remove();
		}

		// If we are in a collapsible set
		if ( collapsibleSet.length ) {
			// Inherit the theme from collapsible-set
			if ( !o.theme ) {
				o.theme = collapsibleSet.jqmData( "theme" );
			}
			// Inherit the content-theme from collapsible-set
			if ( !o.contentTheme ) {
				o.contentTheme = collapsibleSet.jqmData( "content-theme" );
			}
		}

		collapsibleContent.addClass( ( o.contentTheme ) ? ( "ui-body-" + o.contentTheme ) : "");

		collapsibleHeading
			//drop heading in before content
			.insertBefore( collapsibleContent )
			//modify markup & attributes
			.addClass( "ui-collapsible-heading" )
			.append( "<span class='ui-collapsible-heading-status'></span>" )
			.wrapInner( "<a href='#' class='ui-collapsible-heading-toggle'></a>" )
			.find( "a" )
				.first()
				.buttonMarkup({
					shadow: false,
					corners: false,
					iconPos: "left",
					icon: "plus",
					theme: o.theme
				});

		if ( !collapsibleSet.length ) {
			collapsibleHeading
				.find( "a" ).first().add( collapsibleHeading.find( ".ui-btn-inner" ) )
					.addClass( "ui-corner-top ui-corner-bottom" );
		} else {
			// If we are in a collapsible set

			// Initialize the collapsible set if it's not already initialized
			if ( !collapsibleSet.jqmData( "collapsiblebound" ) ) {

				collapsibleSet
					.jqmData( "collapsiblebound", true )
					.bind( "expand", function( event ) {

						$( event.target )
							.closest( ".ui-collapsible" )
							.siblings( ".ui-collapsible" )
							.trigger( "collapse" );

					});
			}

			collapsiblesInSet.first()
				.find( "a" )
					.first()
					.addClass( "ui-corner-top" )
						.find( ".ui-btn-inner" )
							.addClass( "ui-corner-top" );

			collapsiblesInSet.last()
				.jqmData( "collapsible-last", true )
				.find( "a" )
					.first()
					.addClass( "ui-corner-bottom" )
						.find( ".ui-btn-inner" )
							.addClass( "ui-corner-bottom" );


			if ( collapsible.jqmData( "collapsible-last" ) ) {
				collapsibleHeading
					.find( "a" ).first().add ( collapsibleHeading.find( ".ui-btn-inner" ) )
						.addClass( "ui-corner-bottom" );
			}
		}

		//events
		collapsible
			.bind( "expand collapse", function( event ) {
				if ( !event.isDefaultPrevented() ) {

					event.preventDefault();

					var $this = $( this ),
						isCollapse = ( event.type === "collapse" ),
					    contentTheme = o.contentTheme;

					collapsibleHeading
						.toggleClass( "ui-collapsible-heading-collapsed", isCollapse)
						.find( ".ui-collapsible-heading-status" )
							.text( isCollapse ? o.expandCueText : o.collapseCueText )
						.end()
						.find( ".ui-icon" )
							.toggleClass( "ui-icon-minus", !isCollapse )
							.toggleClass( "ui-icon-plus", isCollapse );

					$this.toggleClass( "ui-collapsible-collapsed", isCollapse );
					collapsibleContent.toggleClass( "ui-collapsible-content-collapsed", isCollapse ).attr( "aria-hidden", isCollapse );

					if ( contentTheme && ( !collapsibleSet.length || collapsible.jqmData( "collapsible-last" ) ) ) {
						collapsibleHeading
							.find( "a" ).first().add( collapsibleHeading.find( ".ui-btn-inner" ) )
							.toggleClass( "ui-corner-bottom", isCollapse );
						collapsibleContent.toggleClass( "ui-corner-bottom", !isCollapse );
					}
					collapsibleContent.trigger( "updatelayout" );
				}
			})
			.trigger( o.collapsed ? "collapse" : "expand" );

		collapsibleHeading
			.bind( "click", function( event ) {

				var type = collapsibleHeading.is( ".ui-collapsible-heading-collapsed" ) ?
										"expand" : "collapse";

				collapsible.trigger( type );

				event.preventDefault();
			});
	}
});

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$( $.mobile.collapsible.prototype.options.initSelector, e.target ).collapsible();
});

})( jQuery );
/*
* "fieldcontain" plugin - simple class additions to make form row separators
*/

(function( $, undefined ) {

$.fn.fieldcontain = function( options ) {
	return this.addClass( "ui-field-contain ui-body ui-br" );
};

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$( ":jqmData(role='fieldcontain')", e.target ).fieldcontain();
});

})( jQuery );/*
* plugin for creating CSS grids
*/

(function( $, undefined ) {

$.fn.grid = function( options ) {
	return this.each(function() {

		var $this = $( this ),
			o = $.extend({
				grid: null
			},options),
			$kids = $this.children(),
			gridCols = {solo:1, a:2, b:3, c:4, d:5},
			grid = o.grid,
			iterator;

			if ( !grid ) {
				if ( $kids.length <= 5 ) {
					for ( var letter in gridCols ) {
						if ( gridCols[ letter ] === $kids.length ) {
							grid = letter;
						}
					}
				} else {
					grid = "a";
				}
			}
			iterator = gridCols[grid];

		$this.addClass( "ui-grid-" + grid );

		$kids.filter( ":nth-child(" + iterator + "n+1)" ).addClass( "ui-block-a" );

		if ( iterator > 1 ) {
			$kids.filter( ":nth-child(" + iterator + "n+2)" ).addClass( "ui-block-b" );
		}
		if ( iterator > 2 ) {
			$kids.filter( ":nth-child(3n+3)" ).addClass( "ui-block-c" );
		}
		if ( iterator > 3 ) {
			$kids.filter( ":nth-child(4n+4)" ).addClass( "ui-block-d" );
		}
		if ( iterator > 4 ) {
			$kids.filter( ":nth-child(5n+5)" ).addClass( "ui-block-e" );
		}
	});
};
})( jQuery );/*
* "navbar" plugin
*/

(function( $, undefined ) {

$.widget( "mobile.navbar", $.mobile.widget, {
	options: {
		iconpos: "top",
		grid: null,
		initSelector: ":jqmData(role='navbar')"
	},

	_create: function(){

		var $navbar = this.element,
			$navbtns = $navbar.find( "a" ),
			iconpos = $navbtns.filter( ":jqmData(icon)" ).length ?
									this.options.iconpos : undefined;

		$navbar.addClass( "ui-navbar" )
			.attr( "role","navigation" )
			.find( "ul" )
				.grid({ grid: this.options.grid });

		if ( !iconpos ) {
			$navbar.addClass( "ui-navbar-noicons" );
		}

		$navbtns.buttonMarkup({
			corners:	false,
			shadow:		false,
			iconpos:	iconpos
		});

		$navbar.delegate( "a", "vclick", function( event ) {
			$navbtns.not( ".ui-state-persist" ).removeClass( $.mobile.activeBtnClass );
			$( this ).addClass( $.mobile.activeBtnClass );
		});
	}
});

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$( $.mobile.navbar.prototype.options.initSelector, e.target ).navbar();
});

})( jQuery );
/*
* "listview" plugin
*/

(function( $, undefined ) {

//Keeps track of the number of lists per page UID
//This allows support for multiple nested list in the same page
//https://github.com/jquery/jquery-mobile/issues/1617
var listCountPerPage = {};

$.widget( "mobile.listview", $.mobile.widget, {
	options: {
		theme: null,
		countTheme: "c",
		headerTheme: "b",
		dividerTheme: "b",
		splitIcon: "arrow-r",
		splitTheme: "b",
		inset: false,
		initSelector: ":jqmData(role='listview')"
	},

	_create: function() {
		var t = this;

		// create listview markup
		t.element.addClass(function( i, orig ) {
			return orig + " ui-listview " + ( t.options.inset ? " ui-listview-inset ui-corner-all ui-shadow " : "" );
		});

		t.refresh( true );
	},

	_removeCorners: function( li, which ) {
		var top = "ui-corner-top ui-corner-tr ui-corner-tl",
			bot = "ui-corner-bottom ui-corner-br ui-corner-bl";

		li = li.add( li.find( ".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb" ) );

		if ( which === "top" ) {
			li.removeClass( top );
		} else if ( which === "bottom" ) {
			li.removeClass( bot );
		} else {
			li.removeClass( top + " " + bot );
		}
	},

	_refreshCorners: function( create ) {
		var $li,
			$visibleli,
			$topli,
			$bottomli;

		if ( this.options.inset ) {
			$li = this.element.children( "li" );
			// at create time the li are not visible yet so we need to rely on .ui-screen-hidden
			$visibleli = create?$li.not( ".ui-screen-hidden" ):$li.filter( ":visible" );

			this._removeCorners( $li );

			// Select the first visible li element
			$topli = $visibleli.first()
				.addClass( "ui-corner-top" );

			$topli.add( $topli.find( ".ui-btn-inner" )
					.not( ".ui-li-link-alt span:first-child" ) )
                                .addClass( "ui-corner-top" )
                                .end()
				.find( ".ui-li-link-alt, .ui-li-link-alt span:first-child" )
					.addClass( "ui-corner-tr" )
				.end()
				.find( ".ui-li-thumb" )
					.not(".ui-li-icon")
					.addClass( "ui-corner-tl" );

			// Select the last visible li element
			$bottomli = $visibleli.last()
				.addClass( "ui-corner-bottom" );

			$bottomli.add( $bottomli.find( ".ui-btn-inner" ) )
				.find( ".ui-li-link-alt" )
					.addClass( "ui-corner-br" )
				.end()
				.find( ".ui-li-thumb" )
					.not(".ui-li-icon")
					.addClass( "ui-corner-bl" );
		}
		if ( !create ) {
			this.element.trigger( "updatelayout" );
		}
	},

	// This is a generic utility method for finding the first
	// node with a given nodeName. It uses basic DOM traversal
	// to be fast and is meant to be a substitute for simple
	// $.fn.closest() and $.fn.children() calls on a single
	// element. Note that callers must pass both the lowerCase
	// and upperCase version of the nodeName they are looking for.
	// The main reason for this is that this function will be
	// called many times and we want to avoid having to lowercase
	// the nodeName from the element every time to ensure we have
	// a match. Note that this function lives here for now, but may
	// be moved into $.mobile if other components need a similar method.
	_findFirstElementByTagName: function( ele, nextProp, lcName, ucName )
	{
		var dict = {};
		dict[ lcName ] = dict[ ucName ] = true;
		while ( ele ) {
			if ( dict[ ele.nodeName ] ) {
				return ele;
			}
			ele = ele[ nextProp ];
		}
		return null;
	},
	_getChildrenByTagName: function( ele, lcName, ucName )
	{
		var results = [],
			dict = {};
		dict[ lcName ] = dict[ ucName ] = true;
		ele = ele.firstChild;
		while ( ele ) {
			if ( dict[ ele.nodeName ] ) {
				results.push( ele );
			}
			ele = ele.nextSibling;
		}
		return $( results );
	},

	_addThumbClasses: function( containers )
	{
		var i, img, len = containers.length;
		for ( i = 0; i < len; i++ ) {
			img = $( this._findFirstElementByTagName( containers[ i ].firstChild, "nextSibling", "img", "IMG" ) );
			if ( img.length ) {
				img.addClass( "ui-li-thumb" );
				$( this._findFirstElementByTagName( img[ 0 ].parentNode, "parentNode", "li", "LI" ) ).addClass( img.is( ".ui-li-icon" ) ? "ui-li-has-icon" : "ui-li-has-thumb" );
			}
		}
	},

	refresh: function( create ) {
		this.parentPage = this.element.closest( ".ui-page" );
		this._createSubPages();

		var o = this.options,
			$list = this.element,
			self = this,
			dividertheme = $list.jqmData( "dividertheme" ) || o.dividerTheme,
			listsplittheme = $list.jqmData( "splittheme" ),
			listspliticon = $list.jqmData( "spliticon" ),
			li = this._getChildrenByTagName( $list[ 0 ], "li", "LI" ),
			counter = $.support.cssPseudoElement || !$.nodeName( $list[ 0 ], "ol" ) ? 0 : 1,
			itemClassDict = {},
			item, itemClass, itemTheme,
			a, last, splittheme, countParent, icon, imgParents, img;

		if ( counter ) {
			$list.find( ".ui-li-dec" ).remove();
		}
		
		if ( !o.theme ) {
			o.theme = $.mobile.getInheritedTheme( this.element, "c" );
		}

		for ( var pos = 0, numli = li.length; pos < numli; pos++ ) {
			item = li.eq( pos );
			itemClass = "ui-li";

			// If we're creating the element, we update it regardless
			if ( create || !item.hasClass( "ui-li" ) ) {
				itemTheme = item.jqmData("theme") || o.theme;
				a = this._getChildrenByTagName( item[ 0 ], "a", "A" );

				if ( a.length ) {
					icon = item.jqmData("icon");

					item.buttonMarkup({
						wrapperEls: "div",
						shadow: false,
						corners: false,
						iconpos: "right",
						icon: a.length > 1 || icon === false ? false : icon || "arrow-r",
						theme: itemTheme
					});

					if ( ( icon != false ) && ( a.length == 1 ) ) {
						item.addClass( "ui-li-has-arrow" );
					}

					a.first().addClass( "ui-link-inherit" );

					if ( a.length > 1 ) {
						itemClass += " ui-li-has-alt";

						last = a.last();
						splittheme = listsplittheme || last.jqmData( "theme" ) || o.splitTheme;

						last.appendTo(item)
							.attr( "title", last.getEncodedText() )
							.addClass( "ui-li-link-alt" )
							.empty()
							.buttonMarkup({
								shadow: false,
								corners: false,
								theme: itemTheme,
								icon: false,
								iconpos: false
							})
							.find( ".ui-btn-inner" )
								.append(
									$( document.createElement( "span" ) ).buttonMarkup({
										shadow: true,
										corners: true,
										theme: splittheme,
										iconpos: "notext",
										icon: listspliticon || last.jqmData( "icon" ) || o.splitIcon
									})
								);
					}
				} else if ( item.jqmData( "role" ) === "list-divider" ) {

					itemClass += " ui-li-divider ui-btn ui-bar-" + dividertheme;
					item.attr( "role", "heading" );

					//reset counter when a divider heading is encountered
					if ( counter ) {
						counter = 1;
					}

				} else {
					itemClass += " ui-li-static ui-body-" + itemTheme;
				}
			}

			if ( counter && itemClass.indexOf( "ui-li-divider" ) < 0 ) {
				countParent = item.is( ".ui-li-static:first" ) ? item : item.find( ".ui-link-inherit" );

				countParent.addClass( "ui-li-jsnumbering" )
					.prepend( "<span class='ui-li-dec'>" + (counter++) + ". </span>" );
			}

			// Instead of setting item class directly on the list item and its
			// btn-inner at this point in time, push the item into a dictionary
			// that tells us what class to set on it so we can do this after this
			// processing loop is finished.

			if ( !itemClassDict[ itemClass ] ) {
				itemClassDict[ itemClass ] = [];
			}

			itemClassDict[ itemClass ].push( item[ 0 ] );
		}

		// Set the appropriate listview item classes on each list item
		// and their btn-inner elements. The main reason we didn't do this
		// in the for-loop above is because we can eliminate per-item function overhead
		// by calling addClass() and children() once or twice afterwards. This
		// can give us a significant boost on platforms like WP7.5.

		for ( itemClass in itemClassDict ) {
			$( itemClassDict[ itemClass ] ).addClass( itemClass ).children( ".ui-btn-inner" ).addClass( itemClass );
		}

		$list.find( "h1, h2, h3, h4, h5, h6" ).addClass( "ui-li-heading" )
			.end()

			.find( "p, dl" ).addClass( "ui-li-desc" )
			.end()

			.find( ".ui-li-aside" ).each(function() {
					var $this = $(this);
					$this.prependTo( $this.parent() ); //shift aside to front for css float
				})
			.end()

			.find( ".ui-li-count" ).each( function() {
					$( this ).closest( "li" ).addClass( "ui-li-has-count" );
				}).addClass( "ui-btn-up-" + ( $list.jqmData( "counttheme" ) || this.options.countTheme) + " ui-btn-corner-all" );

		// The idea here is to look at the first image in the list item
		// itself, and any .ui-link-inherit element it may contain, so we
		// can place the appropriate classes on the image and list item.
		// Note that we used to use something like:
		//
		//    li.find(">img:eq(0), .ui-link-inherit>img:eq(0)").each( ... );
		//
		// But executing a find() like that on Windows Phone 7.5 took a
		// really long time. Walking things manually with the code below
		// allows the 400 listview item page to load in about 3 seconds as
		// opposed to 30 seconds.

		this._addThumbClasses( li );
		this._addThumbClasses( $list.find( ".ui-link-inherit" ) );

		this._refreshCorners( create );
	},

	//create a string for ID/subpage url creation
	_idStringEscape: function( str ) {
		return str.replace(/[^a-zA-Z0-9]/g, '-');
	},

	_createSubPages: function() {
		var parentList = this.element,
			parentPage = parentList.closest( ".ui-page" ),
			parentUrl = parentPage.jqmData( "url" ),
			parentId = parentUrl || parentPage[ 0 ][ $.expando ],
			parentListId = parentList.attr( "id" ),
			o = this.options,
			dns = "data-" + $.mobile.ns,
			self = this,
			persistentFooterID = parentPage.find( ":jqmData(role='footer')" ).jqmData( "id" ),
			hasSubPages;

		if ( typeof listCountPerPage[ parentId ] === "undefined" ) {
			listCountPerPage[ parentId ] = -1;
		}

		parentListId = parentListId || ++listCountPerPage[ parentId ];

		$( parentList.find( "li>ul, li>ol" ).toArray().reverse() ).each(function( i ) {
			var self = this,
				list = $( this ),
				listId = list.attr( "id" ) || parentListId + "-" + i,
				parent = list.parent(),
				nodeEls = $( list.prevAll().toArray().reverse() ),
				nodeEls = nodeEls.length ? nodeEls : $( "<span>" + $.trim(parent.contents()[ 0 ].nodeValue) + "</span>" ),
				title = nodeEls.first().getEncodedText(),//url limits to first 30 chars of text
				id = ( parentUrl || "" ) + "&" + $.mobile.subPageUrlKey + "=" + listId,
				theme = list.jqmData( "theme" ) || o.theme,
				countTheme = list.jqmData( "counttheme" ) || parentList.jqmData( "counttheme" ) || o.countTheme,
				newPage, anchor;

			//define hasSubPages for use in later removal
			hasSubPages = true;

			newPage = list.detach()
						.wrap( "<div " + dns + "role='page' " +	dns + "url='" + id + "' " + dns + "theme='" + theme + "' " + dns + "count-theme='" + countTheme + "'><div " + dns + "role='content'></div></div>" )
						.parent()
							.before( "<div " + dns + "role='header' " + dns + "theme='" + o.headerTheme + "'><div class='ui-title'>" + title + "</div></div>" )
							.after( persistentFooterID ? $( "<div " + dns + "role='footer' " + dns + "id='"+ persistentFooterID +"'>") : "" )
							.parent()
								.appendTo( $.mobile.pageContainer );

			newPage.page();

			anchor = parent.find('a:first');

			if ( !anchor.length ) {
				anchor = $( "<a/>" ).html( nodeEls || title ).prependTo( parent.empty() );
			}

			anchor.attr( "href", "#" + id );

		}).listview();

		// on pagehide, remove any nested pages along with the parent page, as long as they aren't active
		// and aren't embedded
		if( hasSubPages &&
			parentPage.is( ":jqmData(external-page='true')" ) &&
			parentPage.data("page").options.domCache === false ) {

			var newRemove = function( e, ui ){
				var nextPage = ui.nextPage, npURL;

				if( ui.nextPage ){
					npURL = nextPage.jqmData( "url" );
					if( npURL.indexOf( parentUrl + "&" + $.mobile.subPageUrlKey ) !== 0 ){
						self.childPages().remove();
						parentPage.remove();
					}
				}
			};

			// unbind the original page remove and replace with our specialized version
			parentPage
				.unbind( "pagehide.remove" )
				.bind( "pagehide.remove", newRemove);
		}
	},

	// TODO sort out a better way to track sub pages of the listview this is brittle
	childPages: function(){
		var parentUrl = this.parentPage.jqmData( "url" );

		return $( ":jqmData(url^='"+  parentUrl + "&" + $.mobile.subPageUrlKey +"')");
	}
});

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$( $.mobile.listview.prototype.options.initSelector, e.target ).listview();
});

})( jQuery );
/*
* "listview" filter extension
*/

(function( $, undefined ) {

$.mobile.listview.prototype.options.filter = false;
$.mobile.listview.prototype.options.filterPlaceholder = "Filter items...";
$.mobile.listview.prototype.options.filterTheme = "c";
$.mobile.listview.prototype.options.filterCallback = function( text, searchValue ){
	return text.toLowerCase().indexOf( searchValue ) === -1;
};

$( ":jqmData(role='listview')" ).live( "listviewcreate", function() {

	var list = $( this ),
		listview = list.data( "listview" );

	if ( !listview.options.filter ) {
		return;
	}

	var wrapper = $( "<form>", {
			"class": "ui-listview-filter ui-bar-" + listview.options.filterTheme,
			"role": "search"
		}),
		search = $( "<input>", {
			placeholder: listview.options.filterPlaceholder
		})
		.attr( "data-" + $.mobile.ns + "type", "search" )
		.jqmData( "lastval", "" )
		.bind( "keyup change", function() {

			var $this = $(this),
				val = this.value.toLowerCase(),
				listItems = null,
				lastval = $this.jqmData( "lastval" ) + "",
				childItems = false,
				itemtext = "",
				item, change;

			// Change val as lastval for next execution
			$this.jqmData( "lastval" , val );
			change = val.substr( 0 , lastval.length - 1 ).replace( lastval , "" );

			if ( val.length < lastval.length || change.length != ( val.length - lastval.length ) ) {

				// Removed chars or pasted something totally different, check all items
				listItems = list.children();
			} else {

				// Only chars added, not removed, only use visible subset
				listItems = list.children( ":not(.ui-screen-hidden)" );
			}

			if ( val ) {

				// This handles hiding regular rows without the text we search for
				// and any list dividers without regular rows shown under it

				for ( var i = listItems.length - 1; i >= 0; i-- ) {
					item = $( listItems[ i ] );
					itemtext = item.jqmData( "filtertext" ) || item.text();

					if ( item.is( "li:jqmData(role=list-divider)" ) ) {

						item.toggleClass( "ui-filter-hidequeue" , !childItems );

						// New bucket!
						childItems = false;

					} else if ( listview.options.filterCallback( itemtext, val ) ) {

						//mark to be hidden
						item.toggleClass( "ui-filter-hidequeue" , true );
					} else {

						// There's a shown item in the bucket
						childItems = true;
					}
				}

				// Show items, not marked to be hidden
				listItems
					.filter( ":not(.ui-filter-hidequeue)" )
					.toggleClass( "ui-screen-hidden", false );

				// Hide items, marked to be hidden
				listItems
					.filter( ".ui-filter-hidequeue" )
					.toggleClass( "ui-screen-hidden", true )
					.toggleClass( "ui-filter-hidequeue", false );

			} else {

				//filtervalue is empty => show all
				listItems.toggleClass( "ui-screen-hidden", false );
			}
			listview._refreshCorners();
		})
		.appendTo( wrapper )
		.textinput();

	if ( $( this ).jqmData( "inset" ) ) {
		wrapper.addClass( "ui-listview-filter-inset" );
	}

	wrapper.bind( "submit", function() {
		return false;
	})
	.insertBefore( list );
});

})( jQuery );/*
* "nojs" plugin - class to make elements hidden to A grade browsers
*/

(function( $, undefined ) {

$( document ).bind( "pagecreate create", function( e ){
	$( ":jqmData(role='nojs')", e.target ).addClass( "ui-nojs" );
	
});

})( jQuery );/*
* "checkboxradio" plugin
*/

(function( $, undefined ) {

$.widget( "mobile.checkboxradio", $.mobile.widget, {
	options: {
		theme: null,
		initSelector: "input[type='checkbox'],input[type='radio']"
	},
	_create: function() {
		var self = this,
			input = this.element,
			// NOTE: Windows Phone could not find the label through a selector
			// filter works though.
			label = input.closest( "form,fieldset,:jqmData(role='page')" ).find( "label[for='" + input[ 0 ].id + "']"),
			inputtype = input.attr( "type" ),
			checkedState = inputtype + "-on",
			uncheckedState = inputtype + "-off",
			icon = input.parents( ":jqmData(type='horizontal')" ).length ? undefined : uncheckedState,
			activeBtn = icon ? "" : " " + $.mobile.activeBtnClass,
			checkedClass = "ui-" + checkedState + activeBtn,
			uncheckedClass = "ui-" + uncheckedState,
			checkedicon = "ui-icon-" + checkedState,
			uncheckedicon = "ui-icon-" + uncheckedState;

		if ( inputtype !== "checkbox" && inputtype !== "radio" ) {
			return;
		}

		// Expose for other methods
		$.extend( this, {
			label: label,
			inputtype: inputtype,
			checkedClass: checkedClass,
			uncheckedClass: uncheckedClass,
			checkedicon: checkedicon,
			uncheckedicon: uncheckedicon
		});

		// If there's no selected theme...
		if( !this.options.theme ) {
			this.options.theme = this.element.jqmData( "theme" );
		}

		label.buttonMarkup({
			theme: this.options.theme,
			icon: icon,
			shadow: false
		});

		// Wrap the input + label in a div
		input.add( label )
			.wrapAll( "<div class='ui-" + inputtype + "'></div>" );

		label.bind({
			vmouseover: function( event ) {
				if ( $( this ).parent().is( ".ui-disabled" ) ) {
					event.stopPropagation();
				}
			},

			vclick: function( event ) {
				if ( input.is( ":disabled" ) ) {
					event.preventDefault();
					return;
				}

				self._cacheVals();

				input.prop( "checked", inputtype === "radio" && true || !input.prop( "checked" ) );

				// trigger click handler's bound directly to the input as a substitute for
				// how label clicks behave normally in the browsers
				// TODO: it would be nice to let the browser's handle the clicks and pass them
				//       through to the associate input. we can swallow that click at the parent
				//       wrapper element level
				input.triggerHandler( 'click' );

				// Input set for common radio buttons will contain all the radio
				// buttons, but will not for checkboxes. clearing the checked status
				// of other radios ensures the active button state is applied properly
				self._getInputSet().not( input ).prop( "checked", false );

				self._updateAll();
				return false;
			}

		});

		input
			.bind({
				vmousedown: function() {
					self._cacheVals();
				},

				vclick: function() {
					var $this = $(this);

					// Adds checked attribute to checked input when keyboard is used
					if ( $this.is( ":checked" ) ) {

						$this.prop( "checked", true);
						self._getInputSet().not($this).prop( "checked", false );
					} else {

						$this.prop( "checked", false );
					}

					self._updateAll();
				},

				focus: function() {
					label.addClass( "ui-focus" );
				},

				blur: function() {
					label.removeClass( "ui-focus" );
				}
			});

		this.refresh();
	},

	_cacheVals: function() {
		this._getInputSet().each(function() {
			var $this = $(this);

			$this.jqmData( "cacheVal", $this.is( ":checked" ) );
		});
	},

	//returns either a set of radios with the same name attribute, or a single checkbox
	_getInputSet: function(){
		if(this.inputtype == "checkbox") {
			return this.element;
		}

		return this.element.closest( "form,fieldset,:jqmData(role='page')" )
			.find( "input[name='"+ this.element.attr( "name" ) +"'][type='"+ this.inputtype +"']" );
	},

	_updateAll: function() {
		var self = this;

		this._getInputSet().each(function() {
			var $this = $(this);

			if ( $this.is( ":checked" ) || self.inputtype === "checkbox" ) {
				$this.trigger( "change" );
			}
		})
		.checkboxradio( "refresh" );
	},

	refresh: function() {
		var input = this.element,
			label = this.label,
			icon = label.find( ".ui-icon" );

		// input[0].checked expando doesn't always report the proper value
		// for checked='checked'
		if ( $( input[ 0 ] ).prop( "checked" ) ) {

			label.addClass( this.checkedClass ).removeClass( this.uncheckedClass );
			icon.addClass( this.checkedicon ).removeClass( this.uncheckedicon );

		} else {

			label.removeClass( this.checkedClass ).addClass( this.uncheckedClass );
			icon.removeClass( this.checkedicon ).addClass( this.uncheckedicon );
		}

		if ( input.is( ":disabled" ) ) {
			this.disable();
		} else {
			this.enable();
		}
	},

	disable: function() {
		this.element.prop( "disabled", true ).parent().addClass( "ui-disabled" );
	},

	enable: function() {
		this.element.prop( "disabled", false ).parent().removeClass( "ui-disabled" );
	}
});

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$.mobile.checkboxradio.prototype.enhanceWithin( e.target );
});

})( jQuery );
/*
* "button" plugin - links that proxy to native input/buttons
*/

(function( $, undefined ) {

$.widget( "mobile.button", $.mobile.widget, {
	options: {
		theme: null,
		icon: null,
		iconpos: null,
		inline: null,
		corners: true,
		shadow: true,
		iconshadow: true,
		initSelector: "button, [type='button'], [type='submit'], [type='reset'], [type='image']"
	},
	_create: function() {
		var $el = this.element,
			o = this.options,
			type,
			name,
			$buttonPlaceholder;

		// Add ARIA role
		this.button = $( "<div></div>" )
			.text( $el.text() || $el.val() )
			.insertBefore( $el )
			.buttonMarkup({
				theme: o.theme,
				icon: o.icon,
				iconpos: o.iconpos,
				inline: o.inline,
				corners: o.corners,
				shadow: o.shadow,
				iconshadow: o.iconshadow
			})
			.append( $el.addClass( "ui-btn-hidden" ) );

		type = $el.attr( "type" );
		name = $el.attr( "name" );

		// Add hidden input during submit if input type="submit" has a name.
		if ( type !== "button" && type !== "reset" && name ) {
				$el.bind( "vclick", function() {
					// Add hidden input if it doesn�t already exist.
					if( $buttonPlaceholder === undefined ) {
						$buttonPlaceholder = $( "<input>", {
							type: "hidden",
							name: $el.attr( "name" ),
							value: $el.attr( "value" )
						}).insertBefore( $el );

						// Bind to doc to remove after submit handling
						$( document ).one("submit", function(){
							$buttonPlaceholder.remove();

							// reset the local var so that the hidden input
							// will be re-added on subsequent clicks
							$buttonPlaceholder = undefined;
						});
					}
				});
		}

		this.refresh();
	},

	enable: function() {
		this.element.attr( "disabled", false );
		this.button.removeClass( "ui-disabled" ).attr( "aria-disabled", false );
		return this._setOption( "disabled", false );
	},

	disable: function() {
		this.element.attr( "disabled", true );
		this.button.addClass( "ui-disabled" ).attr( "aria-disabled", true );
		return this._setOption( "disabled", true );
	},

	refresh: function() {
		var $el = this.element;

		if ( $el.prop("disabled") ) {
			this.disable();
		} else {
			this.enable();
		}

		// the textWrapper is stored as a data element on the button object
		// to prevent referencing by it's implementation details (eg 'class')
		this.button.data( 'textWrapper' ).text( $el.text() || $el.val() );
	}
});

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$.mobile.button.prototype.enhanceWithin( e.target );
});

})( jQuery );/*
* "slider" plugin
*/

( function( $, undefined ) {

$.widget( "mobile.slider", $.mobile.widget, {
	options: {
		theme: null,
		trackTheme: null,
		disabled: false,
		initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')"
	},

	_create: function() {

		// TODO: Each of these should have comments explain what they're for
		var self = this,

			control = this.element,

			parentTheme = $.mobile.getInheritedTheme( control, "c" ),

			theme = this.options.theme || parentTheme,

			trackTheme = this.options.trackTheme || parentTheme,

			cType = control[ 0 ].nodeName.toLowerCase(),

			selectClass = ( cType == "select" ) ? "ui-slider-switch" : "",

			controlID = control.attr( "id" ),

			labelID = controlID + "-label",

			label = $( "[for='"+ controlID +"']" ).attr( "id", labelID ),

			val = function() {
				return  cType == "input"  ? parseFloat( control.val() ) : control[0].selectedIndex;
			},

			min =  cType == "input" ? parseFloat( control.attr( "min" ) ) : 0,

			max =  cType == "input" ? parseFloat( control.attr( "max" ) ) : control.find( "option" ).length-1,

			step = window.parseFloat( control.attr( "step" ) || 1 ),

			slider = $( "<div class='ui-slider " + selectClass + " ui-btn-down-" + trackTheme +
									" ui-btn-corner-all' role='application'></div>" ),

			handle = $( "<a href='#' class='ui-slider-handle'></a>" )
				.appendTo( slider )
				.buttonMarkup({ corners: true, theme: theme, shadow: true })
				.attr({
					"role": "slider",
					"aria-valuemin": min,
					"aria-valuemax": max,
					"aria-valuenow": val(),
					"aria-valuetext": val(),
					"title": val(),
					"aria-labelledby": labelID
				}),
			options;

		$.extend( this, {
			slider: slider,
			handle: handle,
			dragging: false,
			beforeStart: null,
			userModified: false,
			mouseMoved: false
		});

		if ( cType == "select" ) {

			slider.wrapInner( "<div class='ui-slider-inneroffset'></div>" );
			
			// make the handle move with a smooth transition
			handle.addClass( "ui-slider-handle-snapping" );

			options = control.find( "option" );

			control.find( "option" ).each(function( i ) {

				var side = !i ? "b":"a",
					corners = !i ? "right" :"left",
					theme = !i ? " ui-btn-down-" + trackTheme :( " " + $.mobile.activeBtnClass );

				$( "<div class='ui-slider-labelbg ui-slider-labelbg-" + side + theme + " ui-btn-corner-" + corners + "'></div>" )
					.prependTo( slider );

				$( "<span class='ui-slider-label ui-slider-label-" + side + theme + " ui-btn-corner-" + corners + "' role='img'>" + $( this ).getEncodedText() + "</span>" )
					.prependTo( handle );
			});

		}

		label.addClass( "ui-slider" );

		// monitor the input for updated values
		control.addClass( cType === "input" ? "ui-slider-input" : "ui-slider-switch" )
			.change( function() {
				// if the user dragged the handle, the "change" event was triggered from inside refresh(); don't call refresh() again
				if (!self.mouseMoved) {
					self.refresh( val(), true );
				}
			})
			.keyup( function() { // necessary?
				self.refresh( val(), true, true );
			})
			.blur( function() {
				self.refresh( val(), true );
			});

		// prevent screen drag when slider activated
		$( document ).bind( "vmousemove", function( event ) {
			if ( self.dragging ) {
				// self.mouseMoved must be updated before refresh() because it will be used in the control "change" event
				self.mouseMoved = true;
				
				if ( cType === "select" ) {
					// make the handle move in sync with the mouse
					handle.removeClass( "ui-slider-handle-snapping" );
				}
				
				self.refresh( event );
				
				// only after refresh() you can calculate self.userModified
				self.userModified = self.beforeStart !== control[0].selectedIndex;
				return false;
			}
		});

		slider.bind( "vmousedown", function( event ) {
			self.dragging = true;
			self.userModified = false;
			self.mouseMoved = false;

			if ( cType === "select" ) {
				self.beforeStart = control[0].selectedIndex;
			}
			
			self.refresh( event );
			return false;
		});

		slider.add( document )
			.bind( "vmouseup", function() {
				if ( self.dragging ) {

					self.dragging = false;

					if ( cType === "select") {
					
						// make the handle move with a smooth transition
						handle.addClass( "ui-slider-handle-snapping" );
					
						if ( self.mouseMoved ) {
						
							// this is a drag, change the value only if user dragged enough
							if ( self.userModified ) {
								self.refresh( self.beforeStart == 0 ? 1 : 0 );
							}
							else {
								self.refresh( self.beforeStart );
							}
							
						}
						else {
							// this is just a click, change the value
							self.refresh( self.beforeStart == 0 ? 1 : 0 );
						}
						
					}
					
					self.mouseMoved = false;
					
					return false;
				}
			});

		slider.insertAfter( control );

		// NOTE force focus on handle
		this.handle
			.bind( "vmousedown", function() {
				$( this ).focus();
			})
			.bind( "vclick", false );

		this.handle
			.bind( "keydown", function( event ) {
				var index = val();

				if ( self.options.disabled ) {
					return;
				}

				// In all cases prevent the default and mark the handle as active
				switch ( event.keyCode ) {
				 case $.mobile.keyCode.HOME:
				 case $.mobile.keyCode.END:
				 case $.mobile.keyCode.PAGE_UP:
				 case $.mobile.keyCode.PAGE_DOWN:
				 case $.mobile.keyCode.UP:
				 case $.mobile.keyCode.RIGHT:
				 case $.mobile.keyCode.DOWN:
				 case $.mobile.keyCode.LEFT:
					event.preventDefault();

					if ( !self._keySliding ) {
						self._keySliding = true;
						$( this ).addClass( "ui-state-active" );
					}
					break;
				}

				// move the slider according to the keypress
				switch ( event.keyCode ) {
				 case $.mobile.keyCode.HOME:
					self.refresh( min );
					break;
				 case $.mobile.keyCode.END:
					self.refresh( max );
					break;
				 case $.mobile.keyCode.PAGE_UP:
				 case $.mobile.keyCode.UP:
				 case $.mobile.keyCode.RIGHT:
					self.refresh( index + step );
					break;
				 case $.mobile.keyCode.PAGE_DOWN:
				 case $.mobile.keyCode.DOWN:
				 case $.mobile.keyCode.LEFT:
					self.refresh( index - step );
					break;
				}
			}) // remove active mark
			.keyup( function( event ) {
				if ( self._keySliding ) {
					self._keySliding = false;
					$( this ).removeClass( "ui-state-active" );
				}
			});

		this.refresh(undefined, undefined, true);
	},

	refresh: function( val, isfromControl, preventInputUpdate ) {

		if ( this.options.disabled || this.element.attr('disabled')) { 
			this.disable();
		}

		var control = this.element, percent,
			cType = control[0].nodeName.toLowerCase(),
			min = cType === "input" ? parseFloat( control.attr( "min" ) ) : 0,
			max = cType === "input" ? parseFloat( control.attr( "max" ) ) : control.find( "option" ).length - 1;

		if ( typeof val === "object" ) {
			var data = val,
				// a slight tolerance helped get to the ends of the slider
				tol = 8;
			if ( !this.dragging ||
					data.pageX < this.slider.offset().left - tol ||
					data.pageX > this.slider.offset().left + this.slider.width() + tol ) {
				return;
			}
			percent = Math.round( ( ( data.pageX - this.slider.offset().left ) / this.slider.width() ) * 100 );
		} else {
			if ( val == null ) {
				val = cType === "input" ? parseFloat( control.val() ) : control[0].selectedIndex;
			}
			percent = ( parseFloat( val ) - min ) / ( max - min ) * 100;
		}

		if ( isNaN( percent ) ) {
			return;
		}

		if ( percent < 0 ) {
			percent = 0;
		}

		if ( percent > 100 ) {
			percent = 100;
		}

		var newval = Math.round( ( percent / 100 ) * ( max - min ) ) + min;

		if ( newval < min ) {
			newval = min;
		}

		if ( newval > max ) {
			newval = max;
		}

		// Flip the stack of the bg colors
		if ( percent > 60 && cType === "select" ) {
			// TODO: Dead path?
		}
		this.handle.css( "left", percent + "%" );
		this.handle.attr( {
				"aria-valuenow": cType === "input" ? newval : control.find( "option" ).eq( newval ).attr( "value" ),
				"aria-valuetext": cType === "input" ? newval : control.find( "option" ).eq( newval ).getEncodedText(),
				title: newval
			});

		// add/remove classes for flip toggle switch
		if ( cType === "select" ) {
			if ( newval === 0 ) {
				this.slider.addClass( "ui-slider-switch-a" )
					.removeClass( "ui-slider-switch-b" );
			} else {
				this.slider.addClass( "ui-slider-switch-b" )
					.removeClass( "ui-slider-switch-a" );
			}
		}

		if ( !preventInputUpdate ) {
			var valueChanged = false;

			// update control"s value
			if ( cType === "input" ) {
				valueChanged = control.val() !== newval;
				control.val( newval );
			} else {
				valueChanged = control[ 0 ].selectedIndex !== newval;
				control[ 0 ].selectedIndex = newval;
			}
			if ( !isfromControl && valueChanged ) {
				control.trigger( "change" );
			}
		}
	},

	enable: function() {
		this.element.attr( "disabled", false );
		this.slider.removeClass( "ui-disabled" ).attr( "aria-disabled", false );
		return this._setOption( "disabled", false );
	},

	disable: function() {
		this.element.attr( "disabled", true );
		this.slider.addClass( "ui-disabled" ).attr( "aria-disabled", true );
		return this._setOption( "disabled", true );
	}

});

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$.mobile.slider.prototype.enhanceWithin( e.target );
});

})( jQuery );
/*
* "textinput" plugin for text inputs, textareas
*/

(function( $, undefined ) {

$.widget( "mobile.textinput", $.mobile.widget, {
	options: {
		theme: null,
		initSelector: "input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type])"
	},

	_create: function() {

		var input = this.element,
			o = this.options,
			theme = o.theme || $.mobile.getInheritedTheme( this.element, "c" ),
			themeclass  = " ui-body-" + theme,
			focusedEl, clearbtn;

		$( "label[for='" + input.attr( "id" ) + "']" ).addClass( "ui-input-text" );

		focusedEl = input.addClass("ui-input-text ui-body-"+ theme );

		// XXX: Temporary workaround for issue 785 (Apple bug 8910589).
		//      Turn off autocorrect and autocomplete on non-iOS 5 devices
		//      since the popup they use can't be dismissed by the user. Note
		//      that we test for the presence of the feature by looking for
		//      the autocorrect property on the input element. We currently
		//      have no test for iOS 5 or newer so we're temporarily using
		//      the touchOverflow support flag for jQM 1.0. Yes, I feel dirty. - jblas
		if ( typeof input[0].autocorrect !== "undefined" && !$.support.touchOverflow ) {
			// Set the attribute instead of the property just in case there
			// is code that attempts to make modifications via HTML.
			input[0].setAttribute( "autocorrect", "off" );
			input[0].setAttribute( "autocomplete", "off" );
		}


		//"search" input widget
		if ( input.is( "[type='search'],:jqmData(type='search')" ) ) {

			focusedEl = input.wrap( "<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield" + themeclass + "'></div>" ).parent();
			clearbtn = $( "<a href='#' class='ui-input-clear' title='clear text'>clear text</a>" )
				.tap(function( event ) {
					input.val( "" ).focus();
					input.trigger( "change" );
					clearbtn.addClass( "ui-input-clear-hidden" );
					event.preventDefault();
				})
				.appendTo( focusedEl )
				.buttonMarkup({
					icon: "delete",
					iconpos: "notext",
					corners: true,
					shadow: true
				});

			function toggleClear() {
				setTimeout(function() {
					clearbtn.toggleClass( "ui-input-clear-hidden", !input.val() );
				}, 0);
			}

			toggleClear();

			input.bind('paste cut keyup focus change blur', toggleClear);

		} else {
			input.addClass( "ui-corner-all ui-shadow-inset" + themeclass );
		}

		input.focus(function() {
				focusedEl.addClass( "ui-focus" );
			})
			.blur(function(){
				focusedEl.removeClass( "ui-focus" );
			});

		// Autogrow
		if ( input.is( "textarea" ) ) {
			var extraLineHeight = 15,
				keyupTimeoutBuffer = 100,
				keyup = function() {
					var scrollHeight = input[ 0 ].scrollHeight,
						clientHeight = input[ 0 ].clientHeight;

					if ( clientHeight < scrollHeight ) {
						input.height(scrollHeight + extraLineHeight);
					}
				},
				keyupTimeout;

			input.keyup(function() {
				clearTimeout( keyupTimeout );
				keyupTimeout = setTimeout( keyup, keyupTimeoutBuffer );
			});

			// Issue 509: the browser is not providing scrollHeight properly until the styles load
			if ( $.trim( input.val() ) ) {
				// bind to the window load to make sure the height is calculated based on BOTH
				// the DOM and CSS
				$( window ).load( keyup );

				// binding to pagechange here ensures that for pages loaded via
				// ajax the height is recalculated without user input
				$( document ).one( "pagechange", keyup );
			}
		}
	},

	disable: function(){
		( this.element.attr( "disabled", true ).is( "[type='search'],:jqmData(type='search')" ) ?
			this.element.parent() : this.element ).addClass( "ui-disabled" );
	},

	enable: function(){
		( this.element.attr( "disabled", false).is( "[type='search'],:jqmData(type='search')" ) ?
			this.element.parent() : this.element ).removeClass( "ui-disabled" );
	}
});

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$.mobile.textinput.prototype.enhanceWithin( e.target );
});

})( jQuery );
/*
* custom "selectmenu" plugin
*/

(function( $, undefined ) {
	var extendSelect = function( widget ){

		var select = widget.select,
			selectID  = widget.selectID,
			label = widget.label,
			thisPage = widget.select.closest( ".ui-page" ),
			screen = $( "<div>", {"class": "ui-selectmenu-screen ui-screen-hidden"} ).appendTo( thisPage ),
			selectOptions = widget._selectOptions(),
			isMultiple = widget.isMultiple = widget.select[ 0 ].multiple,
			buttonId = selectID + "-button",
			menuId = selectID + "-menu",
			menuPage = $( "<div data-" + $.mobile.ns + "role='dialog' data-" +$.mobile.ns + "theme='"+ widget.options.theme +"' data-" +$.mobile.ns + "overlay-theme='"+ widget.options.overlayTheme +"'>" +
				"<div data-" + $.mobile.ns + "role='header'>" +
				"<div class='ui-title'>" + label.getEncodedText() + "</div>"+
				"</div>"+
				"<div data-" + $.mobile.ns + "role='content'></div>"+
				"</div>" ).appendTo( $.mobile.pageContainer ).page(),

			listbox =  $("<div>", { "class": "ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all ui-body-" + widget.options.overlayTheme + " " + $.mobile.defaultDialogTransition } ).insertAfter(screen),

			list = $( "<ul>", {
				"class": "ui-selectmenu-list",
				"id": menuId,
				"role": "listbox",
				"aria-labelledby": buttonId
			}).attr( "data-" + $.mobile.ns + "theme", widget.options.theme ).appendTo( listbox ),

			header = $( "<div>", {
				"class": "ui-header ui-bar-" + widget.options.theme
			}).prependTo( listbox ),

			headerTitle = $( "<h1>", {
				"class": "ui-title"
			}).appendTo( header ),

			headerClose = $( "<a>", {
				"text": widget.options.closeText,
				"href": "#",
				"class": "ui-btn-left"
			}).attr( "data-" + $.mobile.ns + "iconpos", "notext" ).attr( "data-" + $.mobile.ns + "icon", "delete" ).appendTo( header ).buttonMarkup(),

			menuPageContent = menuPage.find( ".ui-content" ),

			menuPageClose = menuPage.find( ".ui-header a" );


		$.extend( widget, {
			select: widget.select,
			selectID: selectID,
			buttonId: buttonId,
			menuId: menuId,
			thisPage: thisPage,
			menuPage: menuPage,
			label: label,
			screen: screen,
			selectOptions: selectOptions,
			isMultiple: isMultiple,
			theme: widget.options.theme,
			listbox: listbox,
			list: list,
			header: header,
			headerTitle: headerTitle,
			headerClose: headerClose,
			menuPageContent: menuPageContent,
			menuPageClose: menuPageClose,
			placeholder: "",

			build: function() {
				var self = this;

				// Create list from select, update state
				self.refresh();

				self.select.attr( "tabindex", "-1" ).focus(function() {
					$( this ).blur();
					self.button.focus();
				});

				// Button events
				self.button.bind( "vclick keydown" , function( event ) {
					if ( event.type == "vclick" ||
							 event.keyCode && ( event.keyCode === $.mobile.keyCode.ENTER ||
																	event.keyCode === $.mobile.keyCode.SPACE ) ) {

						self.open();
						event.preventDefault();
					}
				});

				// Events for list items
				self.list.attr( "role", "listbox" )
					.delegate( ".ui-li>a", "focusin", function() {
						$( this ).attr( "tabindex", "0" );
					})
					.delegate( ".ui-li>a", "focusout", function() {
						$( this ).attr( "tabindex", "-1" );
					})
					.delegate( "li:not(.ui-disabled, .ui-li-divider)", "click", function( event ) {

						// index of option tag to be selected
						var oldIndex = self.select[ 0 ].selectedIndex,
							newIndex = self.list.find( "li:not(.ui-li-divider)" ).index( this ),
							option = self._selectOptions().eq( newIndex )[ 0 ];

						// toggle selected status on the tag for multi selects
						option.selected = self.isMultiple ? !option.selected : true;

						// toggle checkbox class for multiple selects
						if ( self.isMultiple ) {
							$( this ).find( ".ui-icon" )
								.toggleClass( "ui-icon-checkbox-on", option.selected )
								.toggleClass( "ui-icon-checkbox-off", !option.selected );
						}

						// trigger change if value changed
						if ( self.isMultiple || oldIndex !== newIndex ) {
							self.select.trigger( "change" );
						}

						//hide custom select for single selects only
						if ( !self.isMultiple ) {
							self.close();
						}

						event.preventDefault();
					})
					.keydown(function( event ) {  //keyboard events for menu items
						var target = $( event.target ),
							li = target.closest( "li" ),
							prev, next;

						// switch logic based on which key was pressed
						switch ( event.keyCode ) {
							// up or left arrow keys
						 case 38:
							prev = li.prev();

							// if there's a previous option, focus it
							if ( prev.length ) {
								target
									.blur()
									.attr( "tabindex", "-1" );

								prev.find( "a" ).first().focus();
							}

							return false;
							break;

							// down or right arrow keys
						 case 40:
							next = li.next();

							// if there's a next option, focus it
							if ( next.length ) {
								target
									.blur()
									.attr( "tabindex", "-1" );

								next.find( "a" ).first().focus();
							}

							return false;
							break;

							// If enter or space is pressed, trigger click
						 case 13:
						 case 32:
							target.trigger( "click" );

							return false;
							break;
						}
					});

				// button refocus ensures proper height calculation
				// by removing the inline style and ensuring page inclusion
				self.menuPage.bind( "pagehide", function() {
					self.list.appendTo( self.listbox );
					self._focusButton();

					// TODO centralize page removal binding / handling in the page plugin.
					// Suggestion from @jblas to do refcounting
					//
					// TODO extremely confusing dependency on the open method where the pagehide.remove
					// bindings are stripped to prevent the parent page from disappearing. The way
					// we're keeping pages in the DOM right now sucks
					//
					// rebind the page remove that was unbound in the open function
					// to allow for the parent page removal from actions other than the use
					// of a dialog sized custom select
					//
					// doing this here provides for the back button on the custom select dialog
					$.mobile._bindPageRemove.call( self.thisPage );
				});

				// Events on "screen" overlay
				self.screen.bind( "vclick", function( event ) {
					self.close();
				});

				// Close button on small overlays
				self.headerClose.click( function() {
					if ( self.menuType == "overlay" ) {
						self.close();
						return false;
					}
				});

				// track this dependency so that when the parent page
				// is removed on pagehide it will also remove the menupage
				self.thisPage.addDependents( this.menuPage );
			},

			_isRebuildRequired: function() {
				var list = this.list.find( "li" ),
					options = this._selectOptions();

				// TODO exceedingly naive method to determine difference
				// ignores value changes etc in favor of a forcedRebuild
				// from the user in the refresh method
				return options.text() !== list.text();
			},

			refresh: function( forceRebuild , foo ){
				var self = this,
				select = this.element,
				isMultiple = this.isMultiple,
				options = this._selectOptions(),
				selected = this.selected(),
				// return an array of all selected index's
				indicies = this.selectedIndices();

				if (  forceRebuild || this._isRebuildRequired() ) {
					self._buildList();
				}

				self.setButtonText();
				self.setButtonCount();

				self.list.find( "li:not(.ui-li-divider)" )
					.removeClass( $.mobile.activeBtnClass )
					.attr( "aria-selected", false )
					.each(function( i ) {

						if ( $.inArray( i, indicies ) > -1 ) {
							var item = $( this );

							// Aria selected attr
							item.attr( "aria-selected", true );

							// Multiple selects: add the "on" checkbox state to the icon
							if ( self.isMultiple ) {
								item.find( ".ui-icon" ).removeClass( "ui-icon-checkbox-off" ).addClass( "ui-icon-checkbox-on" );
							} else {
								item.addClass( $.mobile.activeBtnClass );
							}
						}
					});
			},

			close: function() {
				if ( this.options.disabled || !this.isOpen ) {
					return;
				}

				var self = this;

				if ( self.menuType == "page" ) {
					// doesn't solve the possible issue with calling change page
					// where the objects don't define data urls which prevents dialog key
					// stripping - changePage has incoming refactor
					window.history.back();
				} else {
					self.screen.addClass( "ui-screen-hidden" );
					self.listbox.addClass( "ui-selectmenu-hidden" ).removeAttr( "style" ).removeClass( "in" );
					self.list.appendTo( self.listbox );
					self._focusButton();
				}

				// allow the dialog to be closed again
				self.isOpen = false;
			},

			open: function() {
				if ( this.options.disabled ) {
					return;
				}

				var self = this,
					menuHeight = self.list.parent().outerHeight(),
					menuWidth = self.list.parent().outerWidth(),
					activePage = $( ".ui-page-active" ),
					tOverflow = $.support.touchOverflow && $.mobile.touchOverflowEnabled,
					tScrollElem = activePage.is( ".ui-native-fixed" ) ? activePage.find( ".ui-content" ) : activePage;
					scrollTop = tOverflow ? tScrollElem.scrollTop() : $( window ).scrollTop(),
					btnOffset = self.button.offset().top,
					screenHeight = window.innerHeight,
					screenWidth = window.innerWidth;

				//add active class to button
				self.button.addClass( $.mobile.activeBtnClass );

				//remove after delay
				setTimeout( function() {
					self.button.removeClass( $.mobile.activeBtnClass );
				}, 300);

				function focusMenuItem() {
					self.list.find( $.mobile.activeBtnClass ).focus();
				}

				if ( menuHeight > screenHeight - 80 || !$.support.scrollTop ) {
					// prevent the parent page from being removed from the DOM,
					// otherwise the results of selecting a list item in the dialog
					// fall into a black hole
					self.thisPage.unbind( "pagehide.remove" );

					//for WebOS/Opera Mini (set lastscroll using button offset)
					if ( scrollTop == 0 && btnOffset > screenHeight ) {
						self.thisPage.one( "pagehide", function() {
							$( this ).jqmData( "lastScroll", btnOffset );
						});
					}

					self.menuPage.one( "pageshow", function() {
						// silentScroll() is called whenever a page is shown to restore
						// any previous scroll position the page may have had. We need to
						// wait for the "silentscroll" event before setting focus to avoid
						// the browser"s "feature" which offsets rendering to make sure
						// whatever has focus is in view.
						$( window ).one( "silentscroll", function() {
							focusMenuItem();
						});

						self.isOpen = true;
					});

					self.menuType = "page";
					self.menuPageContent.append( self.list );
					self.menuPage.find("div .ui-title").text(self.label.text());
					$.mobile.changePage( self.menuPage, {
						transition: $.mobile.defaultDialogTransition
					});
				} else {
					self.menuType = "overlay";

					self.screen.height( $(document).height() )
						.removeClass( "ui-screen-hidden" );

					// Try and center the overlay over the button
					var roomtop = btnOffset - scrollTop,
						roombot = scrollTop + screenHeight - btnOffset,
						halfheight = menuHeight / 2,
						maxwidth = parseFloat( self.list.parent().css( "max-width" ) ),
						newtop, newleft;

					if ( roomtop > menuHeight / 2 && roombot > menuHeight / 2 ) {
						newtop = btnOffset + ( self.button.outerHeight() / 2 ) - halfheight;
					} else {
						// 30px tolerance off the edges
						newtop = roomtop > roombot ? scrollTop + screenHeight - menuHeight - 30 : scrollTop + 30;
					}

					// If the menuwidth is smaller than the screen center is
					if ( menuWidth < maxwidth ) {
						newleft = ( screenWidth - menuWidth ) / 2;
					} else {

						//otherwise insure a >= 30px offset from the left
						newleft = self.button.offset().left + self.button.outerWidth() / 2 - menuWidth / 2;

						// 30px tolerance off the edges
						if ( newleft < 30 ) {
							newleft = 30;
						} else if ( (newleft + menuWidth) > screenWidth ) {
							newleft = screenWidth - menuWidth - 30;
						}
					}

					self.listbox.append( self.list )
						.removeClass( "ui-selectmenu-hidden" )
						.css({
							top: newtop,
							left: newleft
						})
						.addClass( "in" );

					focusMenuItem();

					// duplicate with value set in page show for dialog sized selects
					self.isOpen = true;
				}
			},

			_buildList: function() {
				var self = this,
					o = this.options,
					placeholder = this.placeholder,
					optgroups = [],
					lis = [],
					dataIcon = self.isMultiple ? "checkbox-off" : "false";

				self.list.empty().filter( ".ui-listview" ).listview( "destroy" );

				// Populate menu with options from select element
				self.select.find( "option" ).each( function( i ) {
					var $this = $( this ),
						$parent = $this.parent(),
						text = $this.getEncodedText(),
						anchor = "<a href='#'>"+ text +"</a>",
						classes = [],
						extraAttrs = [];

					// Are we inside an optgroup?
					if ( $parent.is( "optgroup" ) ) {
						var optLabel = $parent.attr( "label" );

						// has this optgroup already been built yet?
						if ( $.inArray( optLabel, optgroups ) === -1 ) {
							lis.push( "<li data-" + $.mobile.ns + "role='list-divider'>"+ optLabel +"</li>" );
							optgroups.push( optLabel );
						}
					}

					// Find placeholder text
					// TODO: Are you sure you want to use getAttribute? ^RW
					if ( !this.getAttribute( "value" ) || text.length == 0 || $this.jqmData( "placeholder" ) ) {
						if ( o.hidePlaceholderMenuItems ) {
							classes.push( "ui-selectmenu-placeholder" );
						}
						placeholder = self.placeholder = text;
					}

					// support disabled option tags
					if ( this.disabled ) {
						classes.push( "ui-disabled" );
						extraAttrs.push( "aria-disabled='true'" );
					}

					lis.push( "<li data-" + $.mobile.ns + "option-index='" + i + "' data-" + $.mobile.ns + "icon='"+ dataIcon +"' class='"+ classes.join(" ") + "' " + extraAttrs.join(" ") +">"+ anchor +"</li>" );
				});

				self.list.html( lis.join(" ") );

				self.list.find( "li" )
					.attr({ "role": "option", "tabindex": "-1" })
					.first().attr( "tabindex", "0" );

				// Hide header close link for single selects
				if ( !this.isMultiple ) {
					this.headerClose.hide();
				}

				// Hide header if it's not a multiselect and there's no placeholder
				if ( !this.isMultiple && !placeholder.length ) {
					this.header.hide();
				} else {
					this.headerTitle.text( this.placeholder );
				}

				// Now populated, create listview
				self.list.listview();
			},

			_button: function(){
				return $( "<a>", {
					"href": "#",
					"role": "button",
					// TODO value is undefined at creation
					"id": this.buttonId,
					"aria-haspopup": "true",

					// TODO value is undefined at creation
					"aria-owns": this.menuId
				});
			}
		});
	};

	$( "select" ).live( "selectmenubeforecreate", function(){
		var selectmenuWidget = $( this ).data( "selectmenu" );

		if( !selectmenuWidget.options.nativeMenu ){
			extendSelect( selectmenuWidget );
		}
	});
})( jQuery );
/*
* "selectmenu" plugin
*/

(function( $, undefined ) {

$.widget( "mobile.selectmenu", $.mobile.widget, {
	options: {
		theme: null,
		disabled: false,
		icon: "arrow-d",
		iconpos: "right",
		inline: null,
		corners: true,
		shadow: true,
		iconshadow: true,
		menuPageTheme: "b",
		overlayTheme: "a",
		hidePlaceholderMenuItems: true,
		closeText: "Close",
		nativeMenu: true,
		initSelector: "select:not(:jqmData(role='slider'))"
	},

	_button: function(){
		return $( "<div/>" );
	},

	_setDisabled: function( value ) {
		this.element.attr( "disabled", value );
		this.button.attr( "aria-disabled", value );
		return this._setOption( "disabled", value );
	},

	_focusButton : function() {
		var self = this;

		setTimeout( function() {
			self.button.focus();
		}, 40);
	},

  _selectOptions: function() {
    return this.select.find( "option" );
  },

	// setup items that are generally necessary for select menu extension
	_preExtension: function(){
		this.select = this.element.wrap( "<div class='ui-select'>" );
		this.selectID  = this.select.attr( "id" );
		this.label = $( "label[for='"+ this.selectID +"']" ).addClass( "ui-select" );
		this.isMultiple = this.select[ 0 ].multiple;
		if ( !this.options.theme ) {
			this.options.theme = $.mobile.getInheritedTheme( this.select, "c" );
		}
	},

	_create: function() {
		this._preExtension();

 		// Allows for extension of the native select for custom selects and other plugins
		// see select.custom for example extension
		// TODO explore plugin registration
		this._trigger( "beforeCreate" );

		this.button = this._button();

		var self = this,

			options = this.options,

			// IE throws an exception at options.item() function when
			// there is no selected item
			// select first in this case
			selectedIndex = this.select[ 0 ].selectedIndex == -1 ? 0 : this.select[ 0 ].selectedIndex,

			// TODO values buttonId and menuId are undefined here
			button = this.button
				.text( $( this.select[ 0 ].options.item( selectedIndex ) ).text() )
				.insertBefore( this.select )
				.buttonMarkup( {
					theme: options.theme,
					icon: options.icon,
					iconpos: options.iconpos,
					inline: options.inline,
					corners: options.corners,
					shadow: options.shadow,
					iconshadow: options.iconshadow
				});

		// Opera does not properly support opacity on select elements
		// In Mini, it hides the element, but not its text
		// On the desktop,it seems to do the opposite
		// for these reasons, using the nativeMenu option results in a full native select in Opera
		if ( options.nativeMenu && window.opera && window.opera.version ) {
			this.select.addClass( "ui-select-nativeonly" );
		}

		// Add counter for multi selects
		if ( this.isMultiple ) {
			this.buttonCount = $( "<span>" )
				.addClass( "ui-li-count ui-btn-up-c ui-btn-corner-all" )
				.hide()
				.appendTo( button.addClass('ui-li-has-count') );
		}

		// Disable if specified
		if ( options.disabled || this.element.attr('disabled')) {
			this.disable();
		}

		// Events on native select
		this.select.change( function() {
			self.refresh();
		});

		this.build();
	},

	build: function() {
		var self = this;

		this.select
			.appendTo( self.button )
			.bind( "vmousedown", function() {
				// Add active class to button
				self.button.addClass( $.mobile.activeBtnClass );
			})
			.bind( "focus vmouseover", function() {
				self.button.trigger( "vmouseover" );
			})
			.bind( "vmousemove", function() {
				// Remove active class on scroll/touchmove
				self.button.removeClass( $.mobile.activeBtnClass );
			})
			.bind( "change blur vmouseout", function() {
				self.button.trigger( "vmouseout" )
					.removeClass( $.mobile.activeBtnClass );
			})
			.bind( "change blur", function() {
				self.button.removeClass( "ui-btn-down-" + self.options.theme );
			});
	},

	selected: function() {
		return this._selectOptions().filter( ":selected" );
	},

	selectedIndices: function() {
		var self = this;

		return this.selected().map( function() {
			return self._selectOptions().index( this );
		}).get();
	},

	setButtonText: function() {
		var self = this, selected = this.selected();

		this.button.find( ".ui-btn-text" ).text( function() {
			if ( !self.isMultiple ) {
				return selected.text();
			}

			return selected.length ? selected.map( function() {
				return $( this ).text();
			}).get().join( ", " ) : self.placeholder;
		});
	},

	setButtonCount: function() {
		var selected = this.selected();

		// multiple count inside button
		if ( this.isMultiple ) {
			this.buttonCount[ selected.length > 1 ? "show" : "hide" ]().text( selected.length );
		}
	},

	refresh: function() {
		this.setButtonText();
		this.setButtonCount();
	},

	// open and close preserved in native selects
	// to simplify users code when looping over selects
	open: $.noop,
	close: $.noop,

	disable: function() {
		this._setDisabled( true );
		this.button.addClass( "ui-disabled" );
	},

	enable: function() {
		this._setDisabled( false );
		this.button.removeClass( "ui-disabled" );
	}
});

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$.mobile.selectmenu.prototype.enhanceWithin( e.target );
});
})( jQuery );
/*
* "buttons" plugin - for making button-like links
*/

( function( $, undefined ) {

$.fn.buttonMarkup = function( options ) {
	options = options || {};

	for ( var i = 0; i < this.length; i++ ) {
		var el = this.eq( i ),
			e = el[ 0 ],
			o = $.extend( {}, $.fn.buttonMarkup.defaults, {
				icon:       options.icon       !== undefined ? options.icon       : el.jqmData( "icon" ),
				iconpos:    options.iconpos    !== undefined ? options.iconpos    : el.jqmData( "iconpos" ),
				theme:      options.theme      !== undefined ? options.theme      : el.jqmData( "theme" ),
				inline:     options.inline     !== undefined ? options.inline     : el.jqmData( "inline" ),
				shadow:     options.shadow     !== undefined ? options.shadow     : el.jqmData( "shadow" ),
				corners:    options.corners    !== undefined ? options.corners    : el.jqmData( "corners" ),
				iconshadow: options.iconshadow !== undefined ? options.iconshadow : el.jqmData( "iconshadow" )
			}, options ),

			// Classes Defined
			innerClass = "ui-btn-inner",
			textClass = "ui-btn-text",
			buttonClass, iconClass,

			// Button inner markup
			buttonInner = document.createElement( o.wrapperEls ),
			buttonText = document.createElement( o.wrapperEls ),
			buttonIcon = o.icon ? document.createElement( "span" ) : null;

		if ( attachEvents ) {
			attachEvents();
		}

		// if not, try to find closest theme container
		if ( !o.theme ) {
			o.theme = $.mobile.getInheritedTheme( el, "c" );
		}

		buttonClass = "ui-btn ui-btn-up-" + o.theme;

		if ( o.inline ) {
			buttonClass += " ui-btn-inline";
		}

		if ( o.icon ) {
			o.icon = "ui-icon-" + o.icon;
			o.iconpos = o.iconpos || "left";

			iconClass = "ui-icon " + o.icon;

			if ( o.iconshadow ) {
				iconClass += " ui-icon-shadow";
			}
		}

		if ( o.iconpos ) {
			buttonClass += " ui-btn-icon-" + o.iconpos;

			if ( o.iconpos == "notext" && !el.attr( "title" ) ) {
				el.attr( "title", el.getEncodedText() );
			}
		}

		if ( o.corners ) {
			buttonClass += " ui-btn-corner-all";
			innerClass += " ui-btn-corner-all";
		}

		if ( o.shadow ) {
			buttonClass += " ui-shadow";
		}

		e.setAttribute( "data-" + $.mobile.ns + "theme", o.theme );
		el.addClass( buttonClass );

		buttonInner.className = innerClass;
		buttonInner.setAttribute("aria-hidden", "true");

		buttonText.className = textClass;
		buttonInner.appendChild( buttonText );

		if ( buttonIcon ) {
			buttonIcon.className = iconClass;
			buttonInner.appendChild( buttonIcon );
		}

		while ( e.firstChild ) {
			buttonText.appendChild( e.firstChild );
		}

		e.appendChild( buttonInner );
		
		// TODO obviously it would be nice to pull this element out instead of
		// retrieving it from the DOM again, but this change is much less obtrusive
		// and 1.0 draws nigh
		$.data( e, 'textWrapper', $( buttonText ) );
	}

	return this;
};

$.fn.buttonMarkup.defaults = {
	corners: true,
	shadow: true,
	iconshadow: true,
	inline: false,
	wrapperEls: "span"
};

function closestEnabledButton( element ) {
    var cname;

    while ( element ) {
		// Note that we check for typeof className below because the element we
		// handed could be in an SVG DOM where className on SVG elements is defined to
		// be of a different type (SVGAnimatedString). We only operate on HTML DOM
		// elements, so we look for plain "string".

        cname = ( typeof element.className === 'string' ) && element.className.split(' ');

        if ( cname && $.inArray( "ui-btn", cname ) > -1 && $.inArray( "ui-disabled", cname ) < 0 ) {
            break;
        }
        element = element.parentNode;
    }

    return element;
}

var attachEvents = function() {
	$( document ).bind( {
		"vmousedown": function( event ) {
			var btn = closestEnabledButton( event.target ),
				$btn, theme;

			if ( btn ) {
				$btn = $( btn );
				theme = $btn.attr( "data-" + $.mobile.ns + "theme" );
				$btn.removeClass( "ui-btn-up-" + theme ).addClass( "ui-btn-down-" + theme );
			}
		},
		"vmousecancel vmouseup": function( event ) {
			var btn = closestEnabledButton( event.target ),
				$btn, theme;

			if ( btn ) {
				$btn = $( btn );
				theme = $btn.attr( "data-" + $.mobile.ns + "theme" );
				$btn.removeClass( "ui-btn-down-" + theme ).addClass( "ui-btn-up-" + theme );
			}
		},
		"vmouseover focus": function( event ) {
			var btn = closestEnabledButton( event.target ),
				$btn, theme;

			if ( btn ) {
				$btn = $( btn );
				theme = $btn.attr( "data-" + $.mobile.ns + "theme" );
				$btn.removeClass( "ui-btn-up-" + theme ).addClass( "ui-btn-hover-" + theme );
			}
		},
		"vmouseout blur": function( event ) {
			var btn = closestEnabledButton( event.target ),
				$btn, theme;

			if ( btn ) {
				$btn = $( btn );
				theme = $btn.attr( "data-" + $.mobile.ns + "theme" );
				$btn.removeClass( "ui-btn-hover-" + theme  + " ui-btn-down-" + theme ).addClass( "ui-btn-up-" + theme );
			}
		}
	});

	attachEvents = null;
};

//links in bars, or those with  data-role become buttons
//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){

	$( ":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a", e.target )
		.not( ".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')" )
		.buttonMarkup();
});

})( jQuery );
/* 
* "controlgroup" plugin - corner-rounding for groups of buttons, checks, radios, etc
*/

(function( $, undefined ) {

$.fn.controlgroup = function( options ) {

	return this.each(function() {

		var $el = $( this ),
			o = $.extend({
						direction: $el.jqmData( "type" ) || "vertical",
						shadow: false,
						excludeInvisible: true
					}, options ),
			groupheading = $el.children( "legend" ),
			flCorners = o.direction == "horizontal" ? [ "ui-corner-left", "ui-corner-right" ] : [ "ui-corner-top", "ui-corner-bottom" ],
			type = $el.find( "input" ).first().attr( "type" );

		// Replace legend with more stylable replacement div
		if ( groupheading.length ) {
			$el.wrapInner( "<div class='ui-controlgroup-controls'></div>" );
			$( "<div role='heading' class='ui-controlgroup-label'>" + groupheading.html() + "</div>" ).insertBefore( $el.children(0) );
			groupheading.remove();
		}

		$el.addClass( "ui-corner-all ui-controlgroup ui-controlgroup-" + o.direction );

		// TODO: This should be moved out to the closure
		// otherwise it is redefined each time controlgroup() is called
		function flipClasses( els ) {
			els.removeClass( "ui-btn-corner-all ui-shadow" )
				.eq( 0 ).addClass( flCorners[ 0 ] )
				.end()
				.last().addClass( flCorners[ 1 ] ).addClass( "ui-controlgroup-last" );
		}

		flipClasses( $el.find( ".ui-btn" + ( o.excludeInvisible ? ":visible" : "" ) ) );
		flipClasses( $el.find( ".ui-btn-inner" ) );

		if ( o.shadow ) {
			$el.addClass( "ui-shadow" );
		}
	});
};

//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$( ":jqmData(role='controlgroup')", e.target ).controlgroup({ excludeInvisible: false });
});

})(jQuery);/*
* "links" plugin - simple class additions for links
*/

(function( $, undefined ) {

$( document ).bind( "pagecreate create", function( e ){
	
	//links within content areas
	$( e.target )
		.find( "a" )
		.not( ".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')" )
		.addClass( "ui-link" );

});

})( jQuery );/*
* "fixHeaderFooter" plugin - on-demand positioning for headers,footers
*/

(function( $, undefined ) {

var slideDownClass = "ui-header-fixed ui-fixed-inline fade",
	slideUpClass = "ui-footer-fixed ui-fixed-inline fade",

	slideDownSelector = ".ui-header:jqmData(position='fixed')",
	slideUpSelector = ".ui-footer:jqmData(position='fixed')";

$.fn.fixHeaderFooter = function( options ) {

	if ( !$.support.scrollTop || ( $.support.touchOverflow && $.mobile.touchOverflowEnabled ) ) {
		return this;
	}

	return this.each(function() {
		var $this = $( this );

		if ( $this.jqmData( "fullscreen" ) ) {
			$this.addClass( "ui-page-fullscreen" );
		}

		// Should be slidedown
		$this.find( slideDownSelector ).addClass( slideDownClass );

		// Should be slideup
		$this.find( slideUpSelector ).addClass( slideUpClass );
	});
};

// single controller for all showing,hiding,toggling
$.mobile.fixedToolbars = (function() {

	if ( !$.support.scrollTop || ( $.support.touchOverflow && $.mobile.touchOverflowEnabled ) ) {
		return;
	}

	var stickyFooter, delayTimer,
		currentstate = "inline",
		autoHideMode = false,
		showDelay = 100,
		ignoreTargets = "a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed",
		toolbarSelector = ".ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last",
		// for storing quick references to duplicate footers
		supportTouch = $.support.touch,
		touchStartEvent = supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = supportTouch ? "touchend" : "mouseup",
		stateBefore = null,
		scrollTriggered = false,
		touchToggleEnabled = true;

	function showEventCallback( event ) {
		// An event that affects the dimensions of the visual viewport has
		// been triggered. If the header and/or footer for the current page are in overlay
		// mode, we want to hide them, and then fire off a timer to show them at a later
		// point. Events like a resize can be triggered continuously during a scroll, on
		// some platforms, so the timer is used to delay the actual positioning until the
		// flood of events have subsided.
		//
		// If we are in autoHideMode, we don't do anything because we know the scroll
		// callbacks for the plugin will fire off a show when the scrolling has stopped.
		if ( !autoHideMode && currentstate === "overlay" ) {
			if ( !delayTimer ) {
				$.mobile.fixedToolbars.hide( true );
			}

			$.mobile.fixedToolbars.startShowTimer();
		}
	}

	$(function() {
		var $document = $( document ),
			$window = $( window );

		$document
			.bind( "vmousedown", function( event ) {
				if ( touchToggleEnabled ) {
					stateBefore = currentstate;
				}
			})
			.bind( "vclick", function( event ) {
				if ( touchToggleEnabled ) {

					if ( $(event.target).closest( ignoreTargets ).length ) {
						return;
					}

					if ( !scrollTriggered ) {
						$.mobile.fixedToolbars.toggle( stateBefore );
						stateBefore = null;
					}
				}
			})
			.bind( "silentscroll", showEventCallback );


		// The below checks first for a $(document).scrollTop() value, and if zero, binds scroll events to $(window) instead.
		// If the scrollTop value is actually zero, both will return zero anyway.
		//
		// Works with $(document), not $(window) : Opera Mobile (WinMO phone; kinda broken anyway)
		// Works with $(window), not $(document) : IE 7/8
		// Works with either $(window) or $(document) : Chrome, FF 3.6/4, Android 1.6/2.1, iOS
		// Needs work either way : BB5, Opera Mobile (iOS)

		( ( $document.scrollTop() === 0 ) ? $window : $document )
			.bind( "scrollstart", function( event ) {

				scrollTriggered = true;

				if ( stateBefore === null ) {
					stateBefore = currentstate;
				}

				// We only enter autoHideMode if the headers/footers are in
				// an overlay state or the show timer was started. If the
				// show timer is set, clear it so the headers/footers don't
				// show up until after we're done scrolling.
				var isOverlayState = stateBefore == "overlay";

				autoHideMode = isOverlayState || !!delayTimer;

				if ( autoHideMode ) {
					$.mobile.fixedToolbars.clearShowTimer();

					if ( isOverlayState ) {
						$.mobile.fixedToolbars.hide( true );
					}
				}
			})
			.bind( "scrollstop", function( event ) {

				if ( $( event.target ).closest( ignoreTargets ).length ) {
					return;
				}

				scrollTriggered = false;

				if ( autoHideMode ) {
					$.mobile.fixedToolbars.startShowTimer();
					autoHideMode = false;
				}
				stateBefore = null;
			});

			$window.bind( "resize updatelayout", showEventCallback );
	});

	// 1. Before page is shown, check for duplicate footer
	// 2. After page is shown, append footer to new page
	$( ".ui-page" )
		.live( "pagebeforeshow", function( event, ui ) {

			var page = $( event.target ),
				footer = page.find( ":jqmData(role='footer')" ),
				id = footer.data( "id" ),
				prevPage = ui.prevPage,
				prevFooter = prevPage && prevPage.find( ":jqmData(role='footer')" ),
				prevFooterMatches = prevFooter.length && prevFooter.jqmData( "id" ) === id;

			if ( id && prevFooterMatches ) {
				stickyFooter = footer;
				setTop( stickyFooter.removeClass( "fade in out" ).appendTo( $.mobile.pageContainer ) );
			}
		})
		.live( "pageshow", function( event, ui ) {

			var $this = $( this );

			if ( stickyFooter && stickyFooter.length ) {

				setTimeout(function() {
					setTop( stickyFooter.appendTo( $this ).addClass( "fade" ) );
					stickyFooter = null;
				}, 500);
			}

			$.mobile.fixedToolbars.show( true, this );
		});

	// When a collapsiable is hidden or shown we need to trigger the fixed toolbar to reposition itself (#1635)
	$( ".ui-collapsible-contain" ).live( "collapse expand", showEventCallback );

	// element.getBoundingClientRect() is broken in iOS 3.2.1 on the iPad. The
	// coordinates inside of the rect it returns don't have the page scroll position
	// factored out of it like the other platforms do. To get around this,
	// we'll just calculate the top offset the old fashioned way until core has
	// a chance to figure out how to handle this situation.
	//
	// TODO: We'll need to get rid of getOffsetTop() once a fix gets folded into core.

	function getOffsetTop( ele ) {
		var top = 0,
			op, body;

		if ( ele ) {
			body = document.body;
			op = ele.offsetParent;
			top = ele.offsetTop;

			while ( ele && ele != body ) {
				top += ele.scrollTop || 0;

				if ( ele == op ) {
					top += op.offsetTop;
					op = ele.offsetParent;
				}

				ele = ele.parentNode;
			}
		}
		return top;
	}

	function setTop( el ) {
		var fromTop = $(window).scrollTop(),
			thisTop = getOffsetTop( el[ 0 ] ), // el.offset().top returns the wrong value on iPad iOS 3.2.1, call our workaround instead.
			thisCSStop = el.css( "top" ) == "auto" ? 0 : parseFloat(el.css( "top" )),
			screenHeight = window.innerHeight,
			thisHeight = el.outerHeight(),
			useRelative = el.parents( ".ui-page:not(.ui-page-fullscreen)" ).length,
			relval;

		if ( el.is( ".ui-header-fixed" ) ) {

			relval = fromTop - thisTop + thisCSStop;

			if ( relval < thisTop ) {
				relval = 0;
			}

			return el.css( "top", useRelative ? relval : fromTop );
		} else {
			// relval = -1 * (thisTop - (fromTop + screenHeight) + thisCSStop + thisHeight);
			// if ( relval > thisTop ) { relval = 0; }
			relval = fromTop + screenHeight - thisHeight - (thisTop - thisCSStop );

			return el.css( "top", useRelative ? relval : fromTop + screenHeight - thisHeight );
		}
	}

	// Exposed methods
	return {

		show: function( immediately, page ) {

			$.mobile.fixedToolbars.clearShowTimer();

			currentstate = "overlay";

			var $ap = page ? $( page ) :
					( $.mobile.activePage ? $.mobile.activePage :
						$( ".ui-page-active" ) );

			return $ap.children( toolbarSelector ).each(function() {

				var el = $( this ),
					fromTop = $( window ).scrollTop(),
					// el.offset().top returns the wrong value on iPad iOS 3.2.1, call our workaround instead.
					thisTop = getOffsetTop( el[ 0 ] ),
					screenHeight = window.innerHeight,
					thisHeight = el.outerHeight(),
					alreadyVisible = ( el.is( ".ui-header-fixed" ) && fromTop <= thisTop + thisHeight ) ||
														( el.is( ".ui-footer-fixed" ) && thisTop <= fromTop + screenHeight );

				// Add state class
				el.addClass( "ui-fixed-overlay" ).removeClass( "ui-fixed-inline" );

				if ( !alreadyVisible && !immediately ) {
					el.animationComplete(function() {
						el.removeClass( "in" );
					}).addClass( "in" );
				}
				setTop(el);
			});
		},

		hide: function( immediately ) {

			currentstate = "inline";

			var $ap = $.mobile.activePage ? $.mobile.activePage :
									$( ".ui-page-active" );

			return $ap.children( toolbarSelector ).each(function() {

				var el = $(this),
					thisCSStop = el.css( "top" ),
					classes;

				thisCSStop = thisCSStop == "auto" ? 0 :
											parseFloat(thisCSStop);

				// Add state class
				el.addClass( "ui-fixed-inline" ).removeClass( "ui-fixed-overlay" );

				if ( thisCSStop < 0 || ( el.is( ".ui-header-fixed" ) && thisCSStop !== 0 ) ) {

					if ( immediately ) {
						el.css( "top", 0);
					} else {

						if ( el.css( "top" ) !== "auto" && parseFloat( el.css( "top" ) ) !== 0 ) {

							classes = "out reverse";

							el.animationComplete(function() {
								el.removeClass( classes ).css( "top", 0 );
							}).addClass( classes );
						}
					}
				}
			});
		},

		startShowTimer: function() {

			$.mobile.fixedToolbars.clearShowTimer();

			var args = [].slice.call( arguments );

			delayTimer = setTimeout(function() {
				delayTimer = undefined;
				$.mobile.fixedToolbars.show.apply( null, args );
			}, showDelay);
		},

		clearShowTimer: function() {
			if ( delayTimer ) {
				clearTimeout( delayTimer );
			}
			delayTimer = undefined;
		},

		toggle: function( from ) {
			if ( from ) {
				currentstate = from;
			}
			return ( currentstate === "overlay" ) ? $.mobile.fixedToolbars.hide() :
								$.mobile.fixedToolbars.show();
		},

		setTouchToggleEnabled: function( enabled ) {
			touchToggleEnabled = enabled;
		}
	};
})();

//auto self-init widgets
$( document ).bind( "pagecreate create", function( event ) {

	if ( $( ":jqmData(position='fixed')", event.target ).length ) {

		$( event.target ).each(function() {

			if ( !$.support.scrollTop || ( $.support.touchOverflow && $.mobile.touchOverflowEnabled ) ) {
				return this;
			}

			var $this = $( this );

			if ( $this.jqmData( "fullscreen" ) ) {
				$this.addClass( "ui-page-fullscreen" );
			}

			// Should be slidedown
			$this.find( slideDownSelector ).addClass( slideDownClass );

			// Should be slideup
			$this.find( slideUpSelector ).addClass( slideUpClass );

		})

	}
});

})( jQuery );
/*
* "fixHeaderFooter" native plugin - Behavior for "fixed" headers,footers, and scrolling inner content
*/

(function( $, undefined ) {

// Enable touch overflow scrolling when it's natively supported
$.mobile.touchOverflowEnabled = false;

// Enabled zoom when touch overflow is enabled. Can cause usability issues, unfortunately
$.mobile.touchOverflowZoomEnabled = false;

$( document ).bind( "pagecreate", function( event ) {
	if( $.support.touchOverflow && $.mobile.touchOverflowEnabled ){
		
		var $target = $( event.target ),
			scrollStartY = 0;
			
		if( $target.is( ":jqmData(role='page')" ) ){
			
			$target.each(function() {
				var $page = $( this ),
					$fixies = $page.find( ":jqmData(role='header'), :jqmData(role='footer')" ).filter( ":jqmData(position='fixed')" ),
					fullScreen = $page.jqmData( "fullscreen" ),
					$scrollElem = $fixies.length ? $page.find( ".ui-content" ) : $page;
				
				$page.addClass( "ui-mobile-touch-overflow" );
				
				$scrollElem.bind( "scrollstop", function(){
					if( $scrollElem.scrollTop() > 0 ){
						window.scrollTo( 0, $.mobile.defaultHomeScroll );
					}
				});	
				
				if( $fixies.length ){
					
					$page.addClass( "ui-native-fixed" );
					
					if( fullScreen ){

						$page.addClass( "ui-native-fullscreen" );

						$fixies.addClass( "fade in" );

						$( document ).bind( "vclick", function(){
							$fixies
								.removeClass( "ui-native-bars-hidden" )
								.toggleClass( "in out" )
								.animationComplete(function(){
									$(this).not( ".in" ).addClass( "ui-native-bars-hidden" );
								});
						});
					}
				}
			});
		}
	}
});

})( jQuery );
/*
* "init" - Initialize the framework
*/

(function( $, window, undefined ) {
	var	$html = $( "html" ),
			$head = $( "head" ),
			$window = $( window );

 	// trigger mobileinit event - useful hook for configuring $.mobile settings before they're used
	$( window.document ).trigger( "mobileinit" );

	// support conditions
	// if device support condition(s) aren't met, leave things as they are -> a basic, usable experience,
	// otherwise, proceed with the enhancements
	if ( !$.mobile.gradeA() ) {
		return;
	}

	// override ajaxEnabled on platforms that have known conflicts with hash history updates
	// or generally work better browsing in regular http for full page refreshes (BB5, Opera Mini)
	if ( $.mobile.ajaxBlacklist ) {
		$.mobile.ajaxEnabled = false;
	}

	// add mobile, initial load "rendering" classes to docEl
	$html.addClass( "ui-mobile ui-mobile-rendering" );

	// loading div which appears during Ajax requests
	// will not appear if $.mobile.loadingMessage is false
	var $loader = $( "<div class='ui-loader ui-body-a ui-corner-all'><span class='ui-icon ui-icon-loading spin'></span><h1></h1></div>" );

	$.extend($.mobile, {
		// turn on/off page loading message.
		showPageLoadingMsg: function() {
			if ( $.mobile.loadingMessage ) {
				var activeBtn = $( "." + $.mobile.activeBtnClass ).first();

				$loader
					.find( "h1" )
						.text( $.mobile.loadingMessage )
						.end()
					.appendTo( $.mobile.pageContainer )
					// position at y center (if scrollTop supported), above the activeBtn (if defined), or just 100px from top
					.css({
						top: $.support.scrollTop && $window.scrollTop() + $window.height() / 2 ||
						activeBtn.length && activeBtn.offset().top || 100
					});
			}

			$html.addClass( "ui-loading" );
		},

		hidePageLoadingMsg: function() {
			$html.removeClass( "ui-loading" );
		},

		// find and enhance the pages in the dom and transition to the first page.
		initializePage: function() {
			// find present pages
			var $pages = $( ":jqmData(role='page')" );

			// if no pages are found, create one with body's inner html
			if ( !$pages.length ) {
				$pages = $( "body" ).wrapInner( "<div data-" + $.mobile.ns + "role='page'></div>" ).children( 0 );
			}

			// add dialogs, set data-url attrs
			$pages.add( ":jqmData(role='dialog')" ).each(function() {
				var $this = $(this);

				// unless the data url is already set set it to the pathname
				if ( !$this.jqmData("url") ) {
					$this.attr( "data-" + $.mobile.ns + "url", $this.attr( "id" ) || location.pathname + location.search );
				}
			});

			// define first page in dom case one backs out to the directory root (not always the first page visited, but defined as fallback)
			$.mobile.firstPage = $pages.first();

			// define page container
			$.mobile.pageContainer = $pages.first().parent().addClass( "ui-mobile-viewport" );

			// alert listeners that the pagecontainer has been determined for binding
			// to events triggered on it
			$window.trigger( "pagecontainercreate" );

			// cue page loading message
			$.mobile.showPageLoadingMsg();

			// if hashchange listening is disabled or there's no hash deeplink, change to the first page in the DOM
			if ( !$.mobile.hashListeningEnabled || !$.mobile.path.stripHash( location.hash ) ) {
				$.mobile.changePage( $.mobile.firstPage, { transition: "none", reverse: true, changeHash: false, fromHashChange: true } );
			}
			// otherwise, trigger a hashchange to load a deeplink
			else {
				$window.trigger( "hashchange", [ true ] );
			}
		}
	});
	
	// This function injects a meta viewport tag to prevent scaling. Off by default, on by default when touchOverflow scrolling is enabled
	function disableZoom() {
		var cont = "user-scalable=no",
			meta = $( "meta[name='viewport']" );
			
		if( meta.length ){
			meta.attr( "content", meta.attr( "content" ) + ", " + cont );
		}
		else{
			$( "head" ).prepend( "<meta>", { "name": "viewport", "content": cont } );
		}
	}
	
	// if touch-overflow is enabled, disable user scaling, as it creates usability issues
	if( $.support.touchOverflow && $.mobile.touchOverflowEnabled && !$.mobile.touchOverflowZoomEnabled ){
		disableZoom();
	}

	// initialize events now, after mobileinit has occurred
	$.mobile._registerInternalEvents();

	// check which scrollTop value should be used by scrolling to 1 immediately at domready
	// then check what the scroll top is. Android will report 0... others 1
	// note that this initial scroll won't hide the address bar. It's just for the check.
	$(function() {
		window.scrollTo( 0, 1 );

		// if defaultHomeScroll hasn't been set yet, see if scrollTop is 1
		// it should be 1 in most browsers, but android treats 1 as 0 (for hiding addr bar)
		// so if it's 1, use 0 from now on
		$.mobile.defaultHomeScroll = ( !$.support.scrollTop || $(window).scrollTop() === 1 ) ? 0 : 1;

		//dom-ready inits
		if( $.mobile.autoInitializePage ){
			$.mobile.initializePage();
		}

		// window load event
		// hide iOS browser chrome on load
		$window.load( $.mobile.silentScroll );
	});
})( jQuery, this );
;
steal.loaded('risk/lib/jQueryMobile/jquery.mobile-1.0.js');
steal('jquery/model', function () {

    $.Model('Risk.Models.WebSqlModel',
    {
        create: function (newobj, success, error) {
            // check model has a table name set
            this.checkTableName(error);

            // build sql string from object
            var sql = "INSERT into " + this.tableName + " (";
            var placeholders = "";
            var values = [];

            // loop object getting property names
            var keys = $.grep(Object.keys(newobj), function (n, i) {
                return n != "id" && n != "insertId" && n != "rows" && n != "rowsAffected";
            });
            $.each(keys, function (index, value) {
                sql += value;
                if (index < keys.length - 1) sql += ", ";

                // check for dates and convert to milliseconds
                if (newobj[value] instanceof Date) {
                    newobj[value] = newobj[value].getTime();
                }
                    
                values.push(newobj[value]);

                placeholders += "?";
                if (index < keys.length - 1) placeholders += ", ";
            });

            sql += ") VALUES(" + placeholders + ")";

            return localStorageDB.executeSql(sql, values, success, error);
        },

        update: function (id, obj, success, error) {
            // check model has a table name set
            this.checkTableName(error);

            // build sql string from object
            var sql = "UPDATE " + this.tableName + " SET ";

            // loop object getting property names
            var keys = $.grep(Object.keys(obj), function (n, i) {
                return n != "id" && n != "insertId" && n != "rows" && n != "rowsAffected";
            });

            var values = [];
            $.each(keys, function (index, value) {
                sql += value + " = ?";
                if (index < keys.length - 1) sql += ", ";

                // check for dates and convert to milliseconds
                if (obj[value] instanceof Date) {
                    obj[value] = obj[value].getTime();
                }
                values.push(obj[value]);
            });

            sql += " WHERE id=" + id;

            return localStorageDB.executeSql(sql, values, success, error);
        },

        destroy: function (id, success, error) {
            // check model has a table name set
            this.checkTableName(error);

            // build sql string from object
            var sql = "DELETE FROM " + this.tableName + " WHERE id=" + id;

            return localStorageDB.executeSql(sql, success, error);
        },

        checkTableName: function (error) {
            if (this.tableName.length < 1) {
                error("no table name set");
            }
        },

        tableName: ""
    },
  {});
});
steal.loaded('risk/models/websqlmodel.js');
/*global OpenAjax: true */

steal('jquery/class', 'jquery/lang/string', function() {
	
	//helper stuff for later.  Eventually, might not need jQuery.
	var underscore = $.String.underscore,
		classize = $.String.classize,
		isArray = $.isArray,
		makeArray = $.makeArray,
		extend = $.extend,
		each = $.each,
		reqType = /GET|POST|PUT|DELETE/i,
		ajax = function(ajaxOb, attrs, success, error, fixture, type, dataType){
			var dataType = dataType || "json",
				src = "",
				tmp;
			if(typeof ajaxOb == "string"){
				var sp = ajaxOb.indexOf(" ")
				if( sp > 2 && sp <7){
					tmp = ajaxOb.substr(0,sp);
					if(reqType.test(tmp)){
						type = tmp;
					}else{
						dataType = tmp;
					}
					src = ajaxOb.substr(sp+1)
				}else{
					src = ajaxOb;
				}
			}
			typeof attrs == "object" && (!isArray(attrs)) && (attrs =  extend({},attrs))
			
			var url = $.String.sub(src, attrs, true)
			return $.ajax({
				url : url,
				data : attrs,
				success : success,
				error: error,
				type : type || "post",
				dataType : dataType,
				fixture: fixture
			});
		},
		//guesses at a fixture name
		fixture = function(extra, or){
			var u = underscore( this.shortName ),
				f = "-"+u+(extra||"");
			return $.fixture && $.fixture[f] ? f : or ||
				"//"+underscore( this.fullName )
						.replace(/\.models\..*/,"")
						.replace(/\./g,"/")+"/fixtures/"+u+
						(extra || "")+".json";
		},
		addId = function(attrs, id){
			attrs = attrs || {};
			var identity = this.id;
			if(attrs[identity] && attrs[identity] !== id){
				attrs["new"+$.String.capitalize(id)] = attrs[identity];
				delete attrs[identity];
			}
			attrs[identity] = id;
			return attrs;
		},
		getList = function(type){
			var listType = type || $.Model.List || Array;
			return new listType();
		},
		getId = function(inst){
			return inst[inst.constructor.id]
		},
		unique = function(items){
	        var collect = [];
	        for(var i=0; i < items.length; i++){
	            if(!items[i]["__u Nique"]){
	                collect.push(items[i]);
	                items[i]["__u Nique"] = true;
	            }
	        }
	        for(i=0; i< collect.length; i++){
	            delete collect[i]["__u Nique"];
	        }
	        return collect;
	    },
		// makes a deferred request
		makeRequest = function(self, type, success, error, method){
			var deferred = $.Deferred(),
				resolve = function(data){
					self[method || type+"d"](data);
					deferred.resolveWith(self,[self, data, type]);
				},
				reject = function(data){
					deferred.rejectWith(self, [data])
				},
				args = [self.serialize(), resolve, reject],
				constructor = self.constructor;
				
			if(type == 'destroy'){
				args.shift();
			}	
				
			if(type !== 'create' ){
				args.unshift(getId(self))
			} 
			
			deferred.then(success);
			deferred.fail(error);
			
			constructor[type].apply(constructor, args);
				
			return deferred.promise();
		},
		// a quick way to tell if it's an object and not some string
		isObject = function(obj){
			return typeof obj === 'object' && obj !== null && obj;
		},
		$method = function(name){
			return function( eventType, handler ) {
				$.fn[name].apply($([this]), arguments);
				return this;
			}
		},
		bind = $method('bind'),
		unbind = $method('unbind'),
		STR_CONSTRUCTOR = 'constructor';
	/**
	 * @class jQuery.Model
	 * @parent jquerymx
	 * @download  http://jmvcsite.heroku.com/pluginify?plugins[]=jquery/model/model.js
	 * @test jquery/model/qunit.html
	 * @plugin jquery/model
	 * 
	 * Models super-charge an application's
	 * data layer, making it easy to:
	 * 
	 *  - Get and modify data from the server
	 *  - Listen to changes in data
	 *  - Setting and retrieving models on elements
	 *  - Deal with lists of data
	 *  - Do other good stuff
	 * 
	 * Model inherits from [jQuery.Class $.Class] and make use
	 * of REST services and [http://api.jquery.com/category/deferred-object/ deferreds]
	 * so these concepts are worth exploring.  Also, 
	 * the [mvc.model Get Started with jQueryMX] has a good walkthrough of $.Model.
	 * 
	 * 
	 * ## Get and modify data from the server
	 * 
	 * $.Model makes connecting to a JSON REST service 
	 * really easy.  The following models <code>todos</code> by
	 * describing the services that can create, retrieve,
	 * update, and delete todos. 
	 * 
	 *     $.Model('Todo',{
	 *       findAll: 'GET /todos.json',
	 *       findOne: 'GET /todos/{id}.json',
	 *       create:  'POST /todos.json',
	 *       update:  'PUT /todos/{id}.json',
	 *       destroy: 'DELETE /todos/{id}.json' 
	 *     },{});
	 * 
	 * This lets you create, retrieve, update, and delete
	 * todos programatically:
	 * 
	 * __Create__
	 * 
	 * Create a todo instance and 
	 * call [jQuery.Model.prototype.save save]<code>( success, error )</code>
	 * to create the todo on the server.
	 *     
	 *     // create a todo instance
	 *     var todo = new Todo({name: "do the dishes"})
	 *     
	 *     // save it on the server
	 *     todo.save();
	 * 
	 * __Retrieve__
	 * 
	 * Retrieve a list of todos from the server with
	 * <code>findAll( params, callback( items ) )</code>: 
	 *     
	 *     Todo.findAll({}, function( todos ){
	 *     
	 *       // print out the todo names
	 *       $.each(todos, function(i, todo){
	 *         console.log( todo.name );
	 *       });
	 *     });
	 * 
	 * Retrieve a single todo from the server with
	 * <code>findOne( params, callback( item ) )</code>:
	 * 
	 *     Todo.findOne({id: 5}, function( todo ){
	 *     
	 *       // print out the todo name
	 *       console.log( todo.name );
	 *     });
	 * 
	 * __Update__
	 * 
	 * Once an item has been created on the server,
	 * you can change its properties and call
	 * <code>save</code> to update it on the server.
	 * 
	 *     // update the todos' name
	 *     todo.attr('name','Take out the trash')
	 *       
	 *     // update it on the server
	 *     todo.save()
	 *       
	 * 
	 * __Destroy__
	 * 
	 * Call [jQuery.Model.prototype.destroy destroy]<code>( success, error )</code>
	 * to delete an item on the server.
	 * 
	 *     todo.destroy()
	 * 
	 * ## Listen to changes in data
	 * 
	 * Listening to changes in data is a critical part of 
	 * the [http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller Model-View-Controller]
	 * architecture.  $.Model lets you listen to when an item is created, updated, destroyed
	 * and its properties are changed by creating [jquery.model.events events]
	 * on the Model and on instances of the model.
	 * 
	 * __Create__
	 * 
	 *     // listen for when any todo is created
	 *     Todo.bind('created', function( ev, todo ) {...})
	 *     
	 *     // listen for when a specific todo is created
	 *     var todo = new Todo({name: 'do dishes'})
	 *     todo.bind('created', function( ev ) {...})
	 *   
	 * __Update__
	 * 
	 *     // listen for when any todo is updated
	 *     Todo.bind('updated', function( ev, todo ) {...})
	 *     
	 *     // listen for when a specific todo is created
	 *     Todo.findOne({id: 6}, function( todo ) {
	 *       todo.bind('updated', function( ev ) {...})
	 *     })
	 *   
	 * __Destroy__
	 * 
	 *     // listen for when any todo is destroyed
	 *     Todo.bind('destroyed', function( ev, todo ) {...})
	 *    
	 *     // listen for when a specific todo is destroyed
	 *     todo.bind('destroyed', function( ev ) {...})
	 * 
	 * __Property Changes__
	 * 
	 *     // listen for when the name property changes
	 *     todo.bind('name', function(ev){  })
	 * 
	 * __Listening with Controller__
	 * 
	 * You should be using controller to listen to model changes like:
	 * 
	 *     $.Controller('Todos',{
	 *       "{Todo} updated" : function(Todo, ev, todo) {...}
	 *     })
	 * 
	 * 
	 * ## Setting and retrieving data on elements
	 * 
	 * Almost always, we use HTMLElements to represent
	 * data to the user.  When that data changes, we update those
	 * elements to reflect the new data.
	 * 
	 * $.Model has helper methods that make this easy.  They
	 * let you "add" a model to an element and also find
	 * all elements that have had a model "added" to them.
	 * 
	 * Consider a todo list widget
	 * that lists each todo in the page and when a todo is
	 * deleted, removes it.  
	 * 
	 * [jQuery.fn.model $.fn.model]<code>( item )</code> lets you set or read a model 
	 * instance from an element:
	 * 
	 *     Todo.findAll({}, function( todos ) {
	 *       
	 *       $.each(todos, function(todo) {
	 *         $('<li>').model(todo)
	 *                  .text(todo.name)
	 *                  .appendTo('#todos')
	 *       });
	 *     });
	 * 
	 * When a todo is deleted, get its element with
	 * <code>item.</code>[jQuery.Model.prototype.elements elements]<code>( context )</code>
	 * and remove it from the page.
	 * 
	 *     Todo.bind('destroyed', function( ev, todo ) { 
	 *       todo.elements( $('#todos') ).remove()
	 *     })
	 * 
	 * __Using EJS and $.Controller__
	 * 
	 * [jQuery.View $.View] and [jQuery.EJS EJS] makes adding model data 
	 * to elements easy.  We can implement the todos widget like the following:
	 * 
	 *     $.Controller('Todos',{
	 *       init: function(){
	 *         this.element.html('//todos/views/todos.ejs', Todo.findAll({}) ); 
	 *       },
	 *       "{Todo} destroyed": function(Todo, ev, todo) {
	 *         todo.elements( this.element ).remove()
	 *       }
	 *     })
	 * 
	 * In todos.ejs
	 * 
	 * @codestart html
	 * &lt;% for(var i =0; i &lt; todos.length; i++){ %>
	 *   &lt;li &lt;%= todos[i] %>>&lt;%= todos[i].name %>&lt;/li>
	 * &lt;% } %>
	 * @codeend
	 * 
	 * Notice how you can add a model to an element with <code>&lt;%= model %&gt;</code>
	 * 
	 * ## Lists
	 * 
	 * [jQuery.Model.List $.Model.List] lets you handle multiple model instances
	 * with ease.  A List acts just like an <code>Array</code>, but you can add special properties 
	 * to it and listen to events on it.  
	 * 
	 * <code>$.Model.List</code> has become its own plugin, read about it
	 * [jQuery.Model.List here].
	 * 
	 * ## Other Good Stuff
	 * 
	 * Model can make a lot of other common tasks much easier.
	 * 
	 * ### Type Conversion
	 * 
	 * Data from the server often needs massaging to make it more useful 
	 * for JavaScript.  A typical example is date data which is 
	 * commonly passed as
	 * a number representing the Julian date like:
	 * 
	 *     { name: 'take out trash', 
	 *       id: 1,
	 *       dueDate: 1303173531164 }
	 * 
	 * But instead, you want a JavaScript date object:
	 * 
	 *     date.attr('dueDate') //-> new Date(1303173531164)
	 *     
	 * By defining property-type pairs in [jQuery.Model.static.attributes attributes],
	 * you can have model auto-convert values from the server into more useful types:
	 * 
	 *     $.Model('Todo',{
	 *       attributes : {
	 *         dueDate: 'date'
	 *       }
	 *     },{})
	 * 
	 * ### Associations
	 * 
	 * The [jQuery.Model.static.attributes attributes] property also 
	 * supports associations. For example, todo data might come back with
	 * User data as an owner property like:
	 * 
	 *     { name: 'take out trash', 
	 *       id: 1, 
	 *       owner: { name: 'Justin', id: 3} }
	 * 
	 * To convert owner into a User model, set the owner type as the User's
	 * [jQuery.Model.static.model model]<code>( data )</code> method:
	 * 
	 *     $.Model('Todo',{
	 *       attributes : {
	 *         owner: 'User.model'
	 *       }
	 *     },{})
	 * 
	 * ### Helper Functions
	 * 
	 * Often, you need to perform repeated calculations 
	 * with a model's data.  You can create methods in the model's 
	 * prototype and they will be available on 
	 * all model instances.  
	 * 
	 * The following creates a <code>timeRemaining</code> method that
	 * returns the number of seconds left to complete the todo:
	 * 
	 *     $.Model('Todo',{
	 *     },{
	 *        timeRemaining : function(){
	 *          return new Date() - new Date(this.dueDate)
	 *        }
	 *     })
	 *     
	 *     // create a todo
	 *     var todo = new Todo({dueDate: new Date()});
	 *     
	 *     // show off timeRemaining
	 *     todo.timeRemaining() //-> Number
	 * 
	 * ### Deferreds
	 * 
	 * Model methods that make requests to the server such as:
	 * [jQuery.Model.static.findAll findAll], [jQuery.Model.static.findOne findOne], 
	 * [jQuery.Model.prototype.save save], and [jQuery.Model.prototype.destroy destroy] return a
	 * [jquery.model.deferreds deferred] that resolves to the item(s)
	 * being retrieved or modified.  
	 * 
	 * Deferreds can make a lot of asynchronous code much easier.  For example, the following
	 * waits for all users and tasks before continuing :
	 * 
	 *     $.when(Task.findAll(), User.findAll())
	 *       .then(function( tasksRes, usersRes ){ ... })
	 * 
	 * ### Validations
	 * 
	 * [jquery.model.validations Validate] your model's attributes.
	 * 
	 *     $.Model("Contact",{
	 *     init : function(){
	 *         this.validate("birthday",function(){
	 *             if(this.birthday > new Date){
	 *                 return "your birthday needs to be in the past"
	 *             }
	 *         })
	 *     }
	 *     ,{});
	 * 
	 *     
	 */
		// methods that we'll weave into model if provided
		ajaxMethods = 
		/** 
	     * @Static
	     */
		{
		create: function(str  ) {
			/**
			 * @function create
			 * Create is used to create a model instance on the server.  By implementing 
			 * create along with the rest of the [jquery.model.services service api], your models provide an abstract
			 * API for services.  
			 * 
			 * Create is called by save to create a new instance.  If you want to be able to call save on an instance
			 * you have to implement create.
			 * 
			 * The easiest way to implement create is to just give it the url to post data to:
			 * 
			 *     $.Model("Recipe",{
			 *       create: "/recipes"
			 *     },{})
			 *     
			 * This lets you create a recipe like:
			 *  
			 *     new Recipe({name: "hot dog"}).save(function(){
			 *       this.name //this is the new recipe
			 *     }).save(callback)
			 *  
			 * You can also implement create by yourself.  You just need to call success back with
			 * an object that contains the id of the new instance and any other properties that should be
			 * set on the instance.
			 *  
			 * For example, the following code makes a request 
			 * to '/recipes.json?name=hot+dog' and gets back
			 * something that looks like:
			 *  
			 *     { 
			 *       id: 5,
			 *       createdAt: 2234234329
			 *     }
			 * 
			 * The code looks like:
			 * 
			 *     $.Model("Recipe", {
			 *       create : function(attrs, success, error){
			 *         $.post("/recipes.json",attrs, success,"json");
			 *       }
			 *     },{})
			 * 
			 * 
			 * @param {Object} attrs Attributes on the model instance
			 * @param {Function} success(attrs) the callback function, it must be called with an object 
			 * that has the id of the new instance and any other attributes the service needs to add.
			 * @param {Function} error a function to callback if something goes wrong.  
			 */
			return function(attrs, success, error){
				return ajax(str, attrs, success, error, fixture.call(this,"Create", "-restCreate"))
			};
		},
		update: function( str ) {
			/**
			 * @function update
			 * Update is used to update a model instance on the server.  By implementing 
			 * update along with the rest of the [jquery.model.services service api], your models provide an abstract
			 * API for services.  
			 * 
			 * Update is called by [jQuery.Model.prototype.save] or [jQuery.Model.prototype.update] 
			 * on an existing model instance.  
			 * 
			 * The easist way to implement update is to just give it the url to put data to:
			 * 
			 *     $.Model("Recipe",{
			 *       update: "/recipes/{id}"
			 *     },{})
			 *     
			 * This lets you update a recipe like:
			 *  
			 *     // PUT /recipes/5 {name: "Hot Dog"}
			 *     Recipe.update(5, {name: "Hot Dog"},
			 *       function(){
			 *         this.name //this is the updated recipe
			 *       })
			 *  
			 * If your server doesn't use PUT, you can change it to post like:
			 * 
			 *     $.Model("Recipe",{
			 *       update: "POST /recipes/{id}"
			 *     },{})
			 * 
			 * Your server should send back an object with any new attributes the model 
			 * should have.  For example if your server udpates the "updatedAt" property, it
			 * should send back something like:
			 * 
			 *     // PUT /recipes/4 {name: "Food"} ->
			 *     {
			 *       updatedAt : "10-20-2011"
			 *     }
			 * 
			 * You can also implement create by yourself.  You just need to call success back with
			 * an object that contains any properties that should be
			 * set on the instance.
			 *  
			 * For example, the following code makes a request 
			 * to '/recipes/5.json?name=hot+dog' and gets back
			 * something that looks like:
			 *  
			 *     { 
			 *       updatedAt: "10-20-2011"
			 *     }
			 * 
			 * The code looks like:
			 * 
			 *     $.Model("Recipe", {
			 *       update : function(id, attrs, success, error){
			 *         $.post("/recipes/"+id+".json",attrs, success,"json");
			 *       }
			 *     },{})
			 * 
			 * 
			 * @param {String} id the id of the model instance
			 * @param {Object} attrs Attributes on the model instance
			 * @param {Function} success(attrs) the callback function.  It optionally accepts 
			 * an object of attribute / value pairs of property changes the client doesn't already 
			 * know about. For example, when you update a name property, the server might 
			 * update other properties as well (such as updatedAt). The server should send 
			 * these properties as the response to updates.  Passing them to success will 
			 * update the model instance with these properties.
			 * 
			 * @param {Function} error a function to callback if something goes wrong.  
			 */
			return function(id, attrs, success, error){
				return ajax(str, addId.call(this,attrs, id), success, error, fixture.call(this,"Update", "-restUpdate"),"put")
			}
		},
		destroy: function( str ) {
			/**
			 * @function destroy
			 * Destroy is used to remove a model instance from the server. By implementing 
			 * destroy along with the rest of the [jquery.model.services service api], your models provide an abstract
			 * service API.
			 * 
			 * You can implement destroy with a string like:
			 * 
			 *     $.Model("Thing",{
			 *       destroy : "POST /thing/destroy/{id}"
			 *     })
			 * 
			 * Or you can implement destroy manually like:
			 * 
			 *     $.Model("Thing",{
			 *       destroy : function(id, success, error){
			 *         $.post("/thing/destroy/"+id,{}, success);
			 *       }
			 *     })
			 * 
			 * You just have to call success if the destroy was successful.
			 * 
			 * @param {String|Number} id the id of the instance you want destroyed
			 * @param {Function} success the callback function, it must be called with an object 
			 * that has the id of the new instance and any other attributes the service needs to add.
			 * @param {Function} error a function to callback if something goes wrong.  
			 */
			return function( id, success, error ) {
				var attrs = {};
				attrs[this.id] = id;
				return ajax(str, attrs, success, error, fixture.call(this,"Destroy", "-restDestroy") ,"delete")
			}
		},
		
		findAll: function( str ) {
			/**
			 * @function findAll
			 * FindAll is used to retrive a model instances from the server. By implementing 
			 * findAll along with the rest of the [jquery.model.services service api], your models provide an abstract
			 * service API.
			 * findAll returns a deferred ($.Deferred)
			 * 
			 * You can implement findAll with a string:
			 * 
			 *     $.Model("Thing",{
			 *       findAll : "/things.json"
			 *     },{})
			 * 
			 * Or you can implement it yourself.  The 'dataType' attribute is used to convert a JSON array of attributes
			 * to an array of instances.  For example:
			 * 
			 *     $.Model("Thing",{
			 *       findAll : function(params, success, error){
			 *         return $.ajax({
			 *         	 url: '/things.json',
			 *           type: 'get',
			 *           dataType: 'json thing.models',
			 *           data: params,
			 *           success: success,
			 *           error: error})
			 *       }
			 *     },{})
			 * 
			 * 
			 * @param {Object} params data to refine the results.  An example might be passing {limit : 20} to
			 * limit the number of items retrieved.
			 * @param {Function} success(items) called with an array (or Model.List) of model instances.
			 * @param {Function} error
			 */
			return function(params, success, error){
				return ajax(str || this.shortName+"s.json", 
					params, 
					success, 
					error, 
					fixture.call(this,"s"),
					"get",
					"json "+this._shortName+".models");
			};
		},
		findOne: function( str ) {
			/**
			 * @function findOne
			 * FindOne is used to retrive a model instances from the server. By implementing 
			 * findOne along with the rest of the [jquery.model.services service api], your models provide an abstract
			 * service API.
			 * 
			 * You can implement findOne with a string:
			 * 
			 *     $.Model("Thing",{
			 *       findOne : "/things/{id}.json"
			 *     },{})
			 * 
			 * Or you can implement it yourself. 
			 * 
			 *     $.Model("Thing",{
			 *       findOne : function(params, success, error){
			 *         var self = this,
			 *             id = params.id;
			 *         delete params.id;
			 *         return $.get("/things/"+id+".json",
			 *           params,
			 *           success,
			 *           "json thing.model")
			 *       }
			 *     },{})
			 * 
			 * 
			 * @param {Object} params data to refine the results. This is often something like {id: 5}.
			 * @param {Function} success(item) called with a model instance
			 * @param {Function} error
			 */
			return function(params, success, error){
				return ajax(str,
					params, 
					success,
					error, 
					fixture.call(this),
					"get",
					"json "+this._shortName+".model");
			};
		}
	};





	jQuery.Class("jQuery.Model",	{
		setup: function( superClass , stat, proto) {
			//we do not inherit attributes (or associations)
			var self=this;
			each(["attributes","associations","validations"],function(i,name){
				if (!self[name] || superClass[name] === self[name] ) {
					self[name] = {};
				}
			})

			//add missing converters and serializes
			each(["convert","serialize"],function( i, name ) {
				if ( superClass[name] != self[name] ) {
					self[name] = extend({}, superClass[name], self[name] );
				}
			});

			this._fullName = underscore(this.fullName.replace(/\./g, "_"));
			this._shortName = underscore(this.shortName);

			if ( this.fullName.substr(0, 7) == "jQuery." ) {
				return;
			}

			//add this to the collection of models
			//jQuery.Model.models[this._fullName] = this;

			if ( this.listType ) {
				this.list = new this.listType([]);
			}
			
			for(var name in ajaxMethods){
				if(typeof this[name] !== 'function'){
					this[name] = ajaxMethods[name](this[name]);
				}
			}
			
			//add ajax converters
			var converters = {},
				convertName = "* "+this._shortName+".model";
				
			converters[convertName+"s"] = this.proxy('models');
			converters[convertName] = this.proxy('model');	
			
			$.ajaxSetup({
				converters : converters
			});				
		},
		/**
		 * @attribute attributes
		 * Attributes contains a map of attribute names/types.  
		 * You can use this in conjunction with 
		 * [jQuery.Model.static.convert] to provide automatic 
		 * [jquery.model.typeconversion type conversion] (including
		 * associations).  
		 * 
		 * The following converts dueDates to JavaScript dates:
		 * 
		 * 
		 *     $.Model("Contact",{
		 *       attributes : { 
		 *         birthday : 'date'
		 *       },
		 *       convert : {
		 *         date : function(raw){
		 *           if(typeof raw == 'string'){
		 *             var matches = raw.match(/(\d+)-(\d+)-(\d+)/)
		 *             return new Date( matches[1], 
		 *                      (+matches[2])-1, 
		 *                     matches[3] )
		 *           }else if(raw instanceof Date){
		 *               return raw;
		 *           }
		 *         }
		 *       }
		 *     },{})
		 * 
		 * ## Associations
		 * 
		 * Attribute type values can also represent the name of a 
		 * function.  The most common case this is used is for
		 * associated data. 
		 * 
		 * For example, a Deliverable might have many tasks and 
		 * an owner (which is a Person).  The attributes property might
		 * look like:
		 * 
		 *     attributes : {
		 *       tasks : "App.Models.Task.models"
		 *       owner: "App.Models.Person.model"
		 *     }
		 * 
		 * This points tasks and owner properties to use 
		 * <code>Task.models</code> and <code>Person.model</code>
		 * to convert the raw data into an array of Tasks and a Person.
		 * 
		 * @demo jquery/model/pages/associations.html
		 * 
		 */
		attributes: {},
		/**
		 * $.Model.model is used as a [http://api.jquery.com/extending-ajax/#Converters Ajax converter] 
		 * to convert the response of a [jQuery.Model.static.findOne] request 
		 * into a model instance.  
		 * 
		 * You will never call this method directly.  Instead, you tell $.ajax about it in findOne:
		 * 
		 *     $.Model('Recipe',{
		 *       findOne : function(params, success, error ){
		 *         return $.ajax({
		 *           url: '/services/recipes/'+params.id+'.json',
		 *           type: 'get',
		 *           
		 *           dataType : 'json recipe.model' //LOOK HERE!
		 *         });
		 *       }
		 *     },{})
		 * 
		 * This makes the result of findOne a [http://api.jquery.com/category/deferred-object/ $.Deferred]
		 * that resolves to a model instance:
		 * 
		 *     var deferredRecipe = Recipe.findOne({id: 6});
		 *     
		 *     deferredRecipe.then(function(recipe){
		 *       console.log('I am '+recipes.description+'.');
		 *     })
		 * 
		 * ## Non-standard Services
		 * 
		 * $.jQuery.model expects data to be name-value pairs like:
		 * 
		 *     {id: 1, name : "justin"}
		 *     
		 * It can also take an object with attributes in a data, attributes, or
		 * 'shortName' property.  For a App.Models.Person model the following will  all work:
		 * 
		 *     { data : {id: 1, name : "justin"} }
		 *     
		 *     { attributes : {id: 1, name : "justin"} }
		 *     
		 *     { person : {id: 1, name : "justin"} }
		 * 
		 * 
		 * ### Overwriting Model
		 * 
		 * If your service returns data like:
		 * 
		 *     {id : 1, name: "justin", data: {foo : "bar"} }
		 *     
		 * This will confuse $.Model.model.  You will want to overwrite it to create 
		 * an instance manually:
		 * 
		 *     $.Model('Person',{
		 *       model : function(data){
		 *         return new this(data);
		 *       }
		 *     },{})
		 *     
		 * 
		 * @param {Object} attributes An object of name-value pairs or an object that has a 
		 *  data, attributes, or 'shortName' property that maps to an object of name-value pairs.
		 * @return {Model} an instance of the model
		 */
		model: function( attributes ) {
			if (!attributes ) {
				return null;
			}
			if( attributes instanceof this){
				attributes = attributes.serialize();
			}
			return new this(
				// checks for properties in an object (like rails 2.0 gives);
				isObject(attributes[this._shortName]) ||
				isObject(attributes.data) || 
				isObject(attributes.attributes) || 
				attributes);
		},
		/**
		 * $.Model.models is used as a [http://api.jquery.com/extending-ajax/#Converters Ajax converter] 
		 * to convert the response of a [jQuery.Model.static.findAll] request 
		 * into an array (or [jQuery.Model.List $.Model.List]) of model instances.  
		 * 
		 * You will never call this method directly.  Instead, you tell $.ajax about it in findAll:
		 * 
		 *     $.Model('Recipe',{
		 *       findAll : function(params, success, error ){
		 *         return $.ajax({
		 *           url: '/services/recipes.json',
		 *           type: 'get',
		 *           data: params
		 *           
		 *           dataType : 'json recipe.models' //LOOK HERE!
		 *         });
		 *       }
		 *     },{})
		 * 
		 * This makes the result of findAll a [http://api.jquery.com/category/deferred-object/ $.Deferred]
		 * that resolves to a list of model instances:
		 * 
		 *     var deferredRecipes = Recipe.findAll({});
		 *     
		 *     deferredRecipes.then(function(recipes){
		 *       console.log('I have '+recipes.length+'recipes.');
		 *     })
		 * 
		 * ## Non-standard Services
		 * 
		 * $.jQuery.models expects data to be an array of name-value pairs like:
		 * 
		 *     [{id: 1, name : "justin"},{id:2, name: "brian"}, ...]
		 *     
		 * It can also take an object with additional data about the array like:
		 * 
		 *     {
		 *       count: 15000 //how many total items there might be
		 *       data: [{id: 1, name : "justin"},{id:2, name: "brian"}, ...]
		 *     }
		 * 
		 * In this case, models will return an array of instances found in 
		 * data, but with additional properties as expandos on the array:
		 * 
		 *     var people = Person.models({
		 *       count : 1500,
		 *       data : [{id: 1, name: 'justin'}, ...]
		 *     })
		 *     people[0].name // -> justin
		 *     people.count // -> 1500
		 * 
		 * ### Overwriting Models
		 * 
		 * If your service returns data like:
		 * 
		 *     {ballers: [{name: "justin", id: 5}]}
		 * 
		 * You will want to overwrite models to pass the base models what it expects like:
		 * 
		 *     $.Model('Person',{
		 *       models : function(data){
		 *         this._super(data.ballers);
		 *       }
		 *     },{})
		 * 
		 * @param {Array} instancesRawData an array of raw name - value pairs.
		 * @return {Array} a JavaScript array of instances or a [jQuery.Model.List list] of instances
		 *  if the model list plugin has been included.
		 */
		models: function( instancesRawData ) {
			if (!instancesRawData ) {
				return null;
			}
			var res = getList(this.List),
				arr = isArray(instancesRawData),
				ml = ($.Model.List && instancesRawData instanceof $.Model.List),
				raw = arr ? instancesRawData : (ml ? instancesRawData.serialize() : instancesRawData.data),
				length = raw.length,
				i = 0;
			
			res._use_call = true; //so we don't call next function with all of these
			for (; i < length; i++ ) {
				res.push(this.model(raw[i]));
			}
			if (!arr ) { //push other stuff onto array
				for ( var prop in instancesRawData ) {
					if ( prop !== 'data' ) {
						res[prop] = instancesRawData[prop];
					}

				}
			}
			return res;
		},
		/**
		 * The name of the id field.  Defaults to 'id'. Change this if it is something different.
		 * 
		 * For example, it's common in .NET to use Id.  Your model might look like:
		 * 
		 * @codestart
		 * $.Model("Friends",{
		 *   id: "Id"
		 * },{});
		 * @codeend
		 */
		id: 'id',
		//if null, maybe treat as an array?
		/**
		 * Adds an attribute to the list of attributes for this class.
		 * @hide
		 * @param {String} property
		 * @param {String} type
		 */
		addAttr: function( property, type ) {
			var stub;

			if ( this.associations[property] ) {
				return;
			}
			
			stub = this.attributes[property] || (this.attributes[property] = type);
			return type;
		},
		// a collection of all models
		_models: {},
		/**
		 * If OpenAjax is available,
		 * publishes to OpenAjax.hub.  Always adds the shortName.event.
		 * 
		 * @codestart
		 * // publishes contact.completed
		 * Namespace.Contact.publish("completed",contact);
		 * @codeend
		 * 
		 * @param {String} event The event name to publish
		 * @param {Object} data The data to publish
		 */
		publish: function( event, data ) {
			
			if ( window.OpenAjax ) {
				OpenAjax.hub.publish(this._shortName + "." + event, data);
			}

		},
		guessType : function(){
			return "string"
		},
		/**
		 * @attribute convert
		 * @type Object
		 * An object of name-function pairs that are used to convert attributes.
		 * Check out [jQuery.Model.static.attributes] or 
		 * [jquery.model.typeconversion type conversion]
		 * for examples.
		 */
		convert: {
			"date": function( str ) {
				var type = typeof str;
				if( type === "string" ) {
					return isNaN(Date.parse(str)) ? null : Date.parse(str)
				} else if ( type === 'number') {
					return new Date(str)
				} else {
					return str
				}
			},
			"number": function( val ) {
				return parseFloat(val);
			},
			"boolean": function( val ) {
				return Boolean(val);
			},
			"default" : function(val, error, type){
				var construct = $.String.getObject(type), 
					context = window, realType;
				if(type.indexOf(".") >= 0){
					realType = type.substring(0, type.lastIndexOf("."));
					context = $.String.getObject(realType);
				}
				return typeof construct == "function" ? 
					construct.call(context, val) : val;
			}
		},
		serialize : {
			"default" : function( val, type ){
				return isObject(val) && val.serialize ? val.serialize() : val;
			}
		},
		bind: bind,
		unbind: unbind,
		_ajax: ajax
	},
	/**
	 * @Prototype
	 */
	{
		/**
		 * Setup is called when a new model instance is created.
		 * It adds default attributes, then whatever attributes
		 * are passed to the class.
		 * Setup should never be called directly.
		 * 
		 * @codestart
		 * $.Model("Recipe")
		 * var recipe = new Recipe({foo: "bar"});
		 * recipe.foo //-> "bar"
		 * recipe.attr("foo") //-> "bar"
		 * @codeend
		 * 
		 * @param {Object} attributes a hash of attributes
		 */
		setup: function( attributes ) {
			// so we know not to fire events
			this._init = true;
			this.attrs(extend({},this.constructor.defaults,attributes));
			delete this._init;
		},
		/**
		 * Sets the attributes on this instance and calls save.
		 * The instance needs to have an id.  It will use
		 * the instance class's [jQuery.Model.static.update update]
		 * method.
		 * 
		 * @codestart
		 * recipe.update({name: "chicken"}, success, error);
		 * @codeend
		 * 
		 * The model will also publish a _updated_ event with [jquery.model.events Model Events].
		 * 
		 * @param {Object} attrs the model's attributes
		 * @param {Function} success called if a successful update
		 * @param {Function} error called if there's an error
		 */
		update: function( attrs, success, error ) {
			this.attrs(attrs);
			return this.save(success, error); //on success, we should 
		},
		/**
		 * Runs the validations on this model.  You can
		 * also pass it an array of attributes to run only those attributes.
		 * It returns nothing if there are no errors, or an object
		 * of errors by attribute.
		 * 
		 * To use validations, it's suggested you use the 
		 * model/validations plugin.
		 * 
		 * @codestart
		 * $.Model("Task",{
		 *   init : function(){
		 *     this.validatePresenceOf("dueDate")
		 *   }
		 * },{});
		 * 
		 * var task = new Task(),
		 *     errors = task.errors()
		 * 
		 * errors.dueDate[0] //-> "can't be empty"
		 * @codeend
		 */
		errors: function( attrs ) {
			if ( attrs ) {
				attrs = isArray(attrs) ? attrs : makeArray(arguments);
			}
			var errors = {},
				self = this,
				addErrors = function( attr, funcs ) {
					each(funcs, function( i, func ) {
						var res = func.call(self);
						if ( res ) {
							if (!errors.hasOwnProperty(attr) ) {
								errors[attr] = [];
							}

							errors[attr].push(res);
						}

					});
				},
				validations = this.constructor.validations;

			each(attrs || validations || {}, function( attr, funcs ) {
				if ( typeof attr == 'number' ) {
					attr = funcs;
					funcs = validations[attr];
				}
				addErrors(attr, funcs || []);
			});

			for ( var attr in errors ) {
				if ( errors.hasOwnProperty(attr) ) {
					return errors;
				}
			}
			return null;
		},
		/**
		 * Gets or sets an attribute on the model using setters and 
		 * getters if available.
		 * 
		 * @codestart
		 * $.Model("Recipe")
		 * var recipe = new Recipe();
		 * recipe.attr("foo","bar")
		 * recipe.foo //-> "bar"
		 * recipe.attr("foo") //-> "bar"
		 * @codeend
		 * 
		 * ## Setters
		 * 
		 * If you add a set<i>AttributeName</i> method on your model,
		 * it will be used to set the value.  The set method is called
		 * with the value and is expected to return the converted value.
		 * 
		 * @codestart
		 * $.Model("Recipe",{
		 *   setCreatedAt : function(raw){
		 *     return Date.parse(raw)
		 *   }
		 * })
		 * var recipe = new Recipe();
		 * recipe.attr("createdAt","Dec 25, 1995")
		 * recipe.createAt //-> Date
		 * @codeend
		 * 
		 * ## Asynchronous Setters
		 * 
		 * Sometimes, you want to perform an ajax request when 
		 * you set a property.  You can do this with setters too.
		 * 
		 * To do this, your setter should return undefined and
		 * call success with the converted value.  For example:
		 * 
		 * @codestart
		 * $.Model("Recipe",{
		 *   setTitle : function(title, success, error){
		 *     $.post(
		 *       "recipe/update/"+this.id+"/title",
		 *       title,
		 *       function(){
		 *         success(title);
		 *       },
		 *       "json")
		 *   }
		 * })
		 * 
		 * recipe.attr("title","fish")
		 * @codeend
		 * 
		 * ## Events
		 * 
		 * When you use attr, it can also trigger events.  This is
		 * covered in [jQuery.Model.prototype.bind].
		 * 
		 * @param {String} attribute the attribute you want to set or get
		 * @param {String|Number|Boolean} [value] value the value you want to set.
		 * @param {Function} [success] an optional success callback.  
		 *    This gets called if the attribute was successful.
		 * @param {Function} [error] an optional success callback.  
		 *    The error function is called with validation errors.
		 */
		attr: function( attribute, value, success, error ) {
			var cap = classize(attribute),
				get = "get" + cap;
				
			if ( value !== undefined ) {
				this._setProperty(attribute, value, success, error, cap);
				return this;
			}
			return this[get] ? this[get]() : this[attribute];
		},
		
		/**
		 * Binds to events on this model instance.  Typically 
		 * you'll bind to an attribute name.  Handler will be called
		 * every time the attribute value changes.  For example:
		 * 
		 * @codestart
		 * $.Model("School")
		 * var school = new School();
		 * school.bind("address", function(ev, address){
		 *   alert('address changed to '+address);
		 * })
		 * school.attr("address","1124 Park St");
		 * @codeend
		 * 
		 * You can also bind to attribute errors.
		 * 
		 * @codestart
		 * $.Model("School",{
		 *   setName : function(name, success, error){
		 *     if(!name){
		 *        error("no name");
		 *     }
		 *     return error;
		 *   }
		 * })
		 * var school = new School();
		 * school.bind("error.name", function(ev, mess){
		 *    mess // -> "no name";
		 * })
		 * school.attr("name","");
		 * @codeend
		 * 
		 * You can also bind to created, updated, and destroyed events.
		 * 
		 * @param {String} eventType the name of the event.
		 * @param {Function} handler a function to call back when an event happens on this model.
		 * @return {model} the model instance for chaining
		 */
		bind: bind,
		/**
		 * Unbinds an event handler from this instance.
		 * Read [jQuery.Model.prototype.bind] for 
		 * more information.
		 * @param {String} eventType
		 * @param {Function} handler
		 */
		unbind: unbind,
		/**
		 * Checks if there is a set_<i>property</i> value.  If it returns true, lets it handle; otherwise
		 * saves it.
		 * @hide
		 * @param {Object} property
		 * @param {Object} value
		 */
		_setProperty: function( property, value, success, error, capitalized ) {
			// the potential setter name
			var setName = "set" + capitalized,
				//the old value
				old = this[property],
				self = this,
				errorCallback = function( errors ) {
					var stub;
					stub = error && error.call(self, errors);
					$(self).triggerHandler("error." + property, errors);
				};

			// provides getter / setters
			// 
			if ( this[setName] && 
				(value = this[setName](value, this.proxy('_updateProperty', property, value, old, success, errorCallback), errorCallback)) === undefined ) {
				return;
			}
			this._updateProperty(property, value, old, success, errorCallback);
		},
		/**
		 * Triggers events when a property has been updated
		 * @hide
		 * @param {Object} property
		 * @param {Object} value
		 * @param {Object} old
		 * @param {Object} success
		 */
		_updateProperty: function( property, value, old, success, errorCallback ) {
			var Class = this.constructor,
				val, type = Class.attributes[property] || Class.addAttr(property, Class.guessType(value)),
				//the converter
				converter = Class.convert[type] || Class.convert['default'],
				errors = null,
				prefix = "",
				global = "updated.",
				args,
				globalArgs,
				callback = success,
				list = Class.list;

			val = this[property] = (value === null ? //if the value is null or undefined
			null : // it should be null
			converter.call(Class, value, function(){}, type)  //convert it to something useful
			); //just return it
			//validate (only if not initializing, this is for performance)
			if (!this._init ) {
				errors = this.errors(property);
			}
			args = [val];
			globalArgs = [property,val, old];
			if(errors){
				prefix = global ="error.";
				callback = errorCallback;
				globalArgs.splice(1,0, errors);
				args.unshift(errors)
			}
			if (old !== val && !this._init) {
				!errors && $(this).triggerHandler(prefix + property, args);
				$(this).triggerHandler(global + "attr", globalArgs);
			}
			callback && callback.apply(this, args);

			//if this class has a global list, add / remove from the list.
			if ( property === Class.id && val !== null && list ) {
				// if we didn't have an old id, add ourselves
				if (!old ) {
					list.push(this);
				} else if ( old != val ) {
					// if our id has changed ... well this should be ok
					list.remove(old);
					list.push(this);
				}
			}

		},
		
		/**
		 * Removes an attribute from the list existing of attributes. 
		 * Each attribute is set with [jQuery.Model.prototype.attr attr].
		 * 
		 * @codestart
		 * recipe.removeAttr('name')
		 * @codeend
		 * 
		 * @param {Object} [attribute]  the attribute to remove
		 */
		removeAttr: function(attr){
			var old = this[attr],
				deleted = false,
				attrs = this.constructor.attributes;
			
			//- pop it off the object
			if(this[attr]){
				delete this[attr];
			}
			
			//- pop it off the Class attributes collection
			if(attrs[attr]){
				delete attrs[attr];
				deleted = true;
			}
			
			//- trigger the update
			if (!this._init && deleted && old) {
				$(this).triggerHandler("updated.attr", [attr, null, old]);
			}
		},
		
		/**
		 * Gets or sets a list of attributes. 
		 * Each attribute is set with [jQuery.Model.prototype.attr attr].
		 * 
		 * @codestart
		 * recipe.attrs({
		 *   name: "ice water",
		 *   instructions : "put water in a glass"
		 * })
		 * @codeend
		 * 
		 * This can be used nicely with [jquery.model.events].
		 * 
		 * @param {Object} [attributes]  if present, the list of attributes to send
		 * @return {Object} the current attributes of the model
		 */
		attrs: function( attributes ) {
			var key,
				constructor  = this.constructor,
				attrs = constructor.attributes;
			if (!attributes ) {
				attributes = {};
				for ( key in attrs ) {
					if ( attrs.hasOwnProperty(key) ) {
						attributes[key] = this.attr(key);
					}
				}
			} else {
				var idName = constructor.id;
				//always set the id last
				for ( key in attributes ) {
					if ( key != idName ) {
						this.attr(key, attributes[key]);
					}
				}
				if ( idName in attributes ) {
					this.attr(idName, attributes[idName]);
				}

			}
			return attributes;
		},
		serialize : function(){
			var Class = this.constructor,
				attrs = Class.attributes,
				type,
				converter,
				data = {},
				attr;

				attributes = {};
				
			for ( attr in attrs ) {
				if ( attrs.hasOwnProperty(attr) ) {
					type = attrs[attr];
					converter = Class.serialize[type] || Class.serialize['default'];
					data[attr] = converter( this[attr] , type );
				}
			}
			return data;
		},
		/**
		 * Returns if the instance is a new object.  This is essentially if the
		 * id is null or undefined.
		 * 
		 *     new Recipe({id: 1}).isNew() //-> false
		 * @return {Boolean} false if an id is set, true if otherwise.
		 */
		isNew: function() {
			var id = getId(this);
			return (id === undefined || id === null); //if null or undefined
		},
		/**
		 * Saves the instance if there are no errors.  
		 * If the instance is new, [jQuery.Model.static.create] is
		 * called; otherwise, [jQuery.Model.static.update] is
		 * called.
		 * 
		 * @codestart
		 * recipe.save(success, error);
		 * @codeend
		 * 
		 * If OpenAjax.hub is available, after a successful create or update, 
		 * "<i>modelName</i>.created" or "<i>modelName</i>.updated" is published.
		 * 
		 * @param {Function} [success] called if a successful save.
		 * @param {Function} [error] called if the save was not successful.
		 */
		save: function( success, error ) {
			return makeRequest(this, this.isNew()  ? 'create' : 'update' , success, error);
		},

		/**
		 * Destroys the instance by calling 
		 * [jQuery.Model.static.destroy] with the id of the instance.
		 * 
		 * @codestart
		 * recipe.destroy(success, error);
		 * @codeend
		 * 
		 * If OpenAjax.hub is available, after a successful
		 * destroy "<i>modelName</i>.destroyed" is published
		 * with the model instance.
		 * 
		 * @param {Function} [success] called if a successful destroy
		 * @param {Function} [error] called if an unsuccessful destroy
		 */
		destroy: function( success, error ) {
			return makeRequest(this, 'destroy' , success, error , 'destroyed');
		},
		

		/**
		 * Returns a unique identifier for the model instance.  For example:
		 * @codestart
		 * new Todo({id: 5}).identity() //-> 'todo_5'
		 * @codeend
		 * Typically this is used in an element's shortName property so you can find all elements
		 * for a model with [jQuery.Model.prototype.elements elements].
		 * @return {String}
		 */
		identity: function() {
			var id = getId(this), 
				constructor = this.constructor;
			return (constructor._fullName + '_' + (constructor.escapeIdentity ? encodeURIComponent(id) : id)).replace(/ /g, '_');
		},
		/**
		 * Returns elements that represent this model instance.  For this to work, your element's should
		 * us the [jQuery.Model.prototype.identity identity] function in their class name.  Example:
		 * 
		 *     <div class='todo <%= todo.identity() %>'> ... </div>
		 * 
		 * This also works if you hooked up the model:
		 * 
		 *     <div <%= todo %>> ... </div>
		 *     
		 * Typically, you'll use this as a response to a Model Event:
		 * 
		 *     "{Todo} destroyed": function(Todo, event, todo){
		 *       todo.elements(this.element).remove();
		 *     }
		 * 
		 * 
		 * @param {String|jQuery|element} context If provided, only elements inside this element
		 * that represent this model will be returned.
		 * 
		 * @return {jQuery} Returns a jQuery wrapped nodelist of elements that have this model instances
		 *  identity in their class name.
		 */
		elements: function( context ) {
			return $("." + this.identity(), context);
		},
		/**
		 * @hide
		 * Publishes to OpenAjax.hub
		 * 
		 *     $.Model('Task', {
		 *       complete : function(cb){
		 *         var self = this;
		 *         $.post('/task/'+this.id,
		 *           {complete : true},
		 *           function(){
		 *             self.attr('completed', true);
		 *             self.publish('completed');
		 *           })
		 *       }
		 *     })
		 *     
		 *     
		 * @param {String} event The event type.  The model's short name will be automatically prefixed.
		 * @param {Object} [data] if missing, uses the instance in {data: this}
		 */
		publish: function( event, data ) {
			this.constructor.publish(event, data || this);
		},
		hookup: function( el ) {
			var shortName = this.constructor._shortName,
				models = $.data(el, "models") || $.data(el, "models", {});
			$(el).addClass(shortName + " " + this.identity());
			models[shortName] = this;
		}
	});
	

	each([
	/**
	 * @function created
	 * @hide
	 * Called by save after a new instance is created.  Publishes 'created'.
	 * @param {Object} attrs
	 */
	"created",
	/**
	 * @function updated
	 * @hide
	 * Called by save after an instance is updated.  Publishes 'updated'.
	 * @param {Object} attrs
	 */
	"updated",
	/**
	 * @function destroyed
	 * @hide
	 * Called after an instance is destroyed.  
	 *   - Publishes "shortName.destroyed".
	 *   - Triggers a "destroyed" event on this model.
	 *   - Removes the model from the global list if its used.
	 * 
	 */
	"destroyed"], function( i, funcName ) {
		$.Model.prototype[funcName] = function( attrs ) {
			var stub,
				constructor = this.constructor;
			
			// remove from the list if instance is destroyed
			if ( funcName === 'destroyed' && constructor.list ) {
				constructor.list.remove(getId(this));
			}
			
			// update attributes if attributes have been passed
			stub = attrs && typeof attrs == 'object' && this.attrs(attrs.attrs ? attrs.attrs() : attrs);
			
			// call event on the instance
			$(this).triggerHandler(funcName);
			this.publish(funcName, this);
			
			// call event on the instance's Class
			$([constructor]).triggerHandler(funcName, this);
			return [this].concat(makeArray(arguments)); // return like this for this.proxy chains
		};
	});

	/**
	 *  @add jQuery.fn
	 */
	// break
	/**
	 * @function models
	 * Returns a list of models.  If the models are of the same
	 * type, and have a [jQuery.Model.List], it will return 
	 * the models wrapped with the list.
	 * 
	 * @codestart
	 * $(".recipes").models() //-> [recipe, ...]
	 * @codeend
	 * 
	 * @param {jQuery.Class} [type] if present only returns models of the provided type.
	 * @return {Array|jQuery.Model.List} returns an array of model instances that are represented by the contained elements.
	 */
	$.fn.models = function( type ) {
		//get it from the data
		var collection = [],
			kind, ret, retType;
		this.each(function() {
			each($.data(this, "models") || {}, function( name, instance ) {
				//either null or the list type shared by all classes
				kind = kind === undefined ? 
					instance.constructor.List || null : 
					(instance.constructor.List === kind ? kind : null);
				collection.push(instance);
			});
		});

		ret = getList(kind);

		ret.push.apply(ret, unique(collection));
		return ret;
	};
	/**
	 * @function model
	 * 
	 * Returns the first model instance found from [jQuery.fn.models] or
	 * sets the model instance on an element.
	 * 
	 *     //gets an instance
	 *     ".edit click" : function(el) {
	 *       el.closest('.todo').model().destroy()
	 *     },
	 *     // sets an instance
	 *     list : function(items){
	 *        var el = this.element;
	 *        $.each(item, function(item){
	 *          $('<div/>').model(item)
	 *            .appendTo(el)
	 *        })
	 *     }
	 * 
	 * @param {Object} [type] The type of model to return.  If a model instance is provided
	 * it will add the model to the element.
	 */
	$.fn.model = function( type ) {
		if ( type && type instanceof $.Model ) {
			type.hookup(this[0]);
			return this;
		} else {
			return this.models.apply(this, arguments)[0];
		}

	};
	/**
	 * @page jquery.model.services Service APIs
	 * @parent jQuery.Model
	 * 
	 * Models provide an abstract API for connecting to your Services.  
	 * By implementing static:
	 * 
	 *  - [jQuery.Model.static.findAll] 
	 *  - [jQuery.Model.static.findOne] 
	 *  - [jQuery.Model.static.create] 
	 *  - [jQuery.Model.static.update] 
	 *  - [jQuery.Model.static.destroy]
	 *  
	 * You can find more details on how to implement each method.
	 * Typically, you can just use templated service urls. But if you need to
	 * implement these methods yourself, the following
	 * is a useful quick reference:
	 * 
	 * ### create(attrs, success([attrs]), error()) -> deferred
	 *  
	 *  - <code>attrs</code> - an Object of attribute / value pairs
	 *  - <code>success([attrs])</code> - Create calls success when the request has completed 
	 *    successfully.  Success can be called back with an object that represents
	 *    additional properties that will be set on the instance. For example, the server might 
	 *    send back an updatedAt date.
	 *  - <code>error</code> - Create should callback error if an error happens during the request
	 *  - <code>deferred</code> - A deferred that gets resolved to any additional attrs
	 *    that might need to be set on the model instance.
	 * 
	 * 
	 * ### findAll( params, success(items), error) -> deferred
	 * 
	 * 
	 *  - <code>params</code> - an Object that filters the items returned
	 *  - <code>success(items)</code> - success should be called with an Array of Model instances.
	 *  - <code>error</code> - called if an error happens during the request
	 *  - <code>deferred</code> - A deferred that gets resolved to the list of items
	 *          
	 * ### findOne(params, success(items), error) -> deferred
	 *          
	 *  - <code>params</code> - an Object that filters the item returned
	 *  - <code>success(item)</code> - success should be called with a model instance.
	 *  - <code>error</code> - called if an error happens during the request
	 *  - <code>deferred</code> - A deferred that gets resolved to a model instance
	 *        
	 * ### update(id, attrs, success([attrs]), error()) -> deferred
	 *  
	 *  - <code>id</code> - the id of the instance you are updating
	 *  - <code>attrs</code> - an Object of attribute / value pairs
	 *  - <code>success([attrs])</code> - Call success when the request has completed 
	 *    successfully.  Success can be called back with an object that represents
	 *    additional properties that will be set on the instance. For example, the server might 
	 *    send back an updatedAt date.
	 *  - <code>error</code> - Callback error if an error happens during the request
	 *  - <code>deferred</code> - A deferred that gets resolved to any additional attrs
	 *      that might need to be set on the model instance.
	 *     
	 * ### destroy(id, success([attrs]), error()) -> deferred
	 *  
	 *  - <code>id</code> - the id of the instance you are destroying
	 *  - <code>success([attrs])</code> - Calls success when the request has completed 
	 *      successfully.  Success can be called back with an object that represents
	 *      additional properties that will be set on the instance. 
	 *  - <code>error</code> - Create should callback error if an error happens during the request
	 *  - <code>deferred</code> - A deferred that gets resolved to any additional attrs
	 *      that might need to be set on the model instance.
	 */
});
;
steal.loaded('jquery/model/model.js');
//jQuery.Class 
// This is a modified version of John Resig's class
// http://ejohn.org/blog/simple-javascript-inheritance/
// It provides class level inheritance and callbacks.
//@steal-clean
steal("jquery","jquery/lang/string",function( $ ) {

	// =============== HELPERS =================

	    // if we are initializing a new class
	var initializing = false,
		makeArray = $.makeArray,
		isFunction = $.isFunction,
		isArray = $.isArray,
		extend = $.extend,
		getObject = $.String.getObject,
		concatArgs = function(arr, args){
			return arr.concat(makeArray(args));
		},
		
		// tests if we can get super in .toString()
		fnTest = /xyz/.test(function() {
			xyz;
		}) ? /\b_super\b/ : /.*/,
		
		// overwrites an object with methods, sets up _super
		//   newProps - new properties
		//   oldProps - where the old properties might be
		//   addTo - what we are adding to
		inheritProps = function( newProps, oldProps, addTo ) {
			addTo = addTo || newProps
			for ( var name in newProps ) {
				// Check if we're overwriting an existing function
				addTo[name] = isFunction(newProps[name]) && 
							  isFunction(oldProps[name]) && 
							  fnTest.test(newProps[name]) ? (function( name, fn ) {
					return function() {
						var tmp = this._super,
							ret;

						// Add a new ._super() method that is the same method
						// but on the super-class
						this._super = oldProps[name];

						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						ret = fn.apply(this, arguments);
						this._super = tmp;
						return ret;
					};
				})(name, newProps[name]) : newProps[name];
			}
		},
		STR_PROTOTYPE = 'prototype'

	/**
	 * @class jQuery.Class
	 * @plugin jquery/class
	 * @parent jquerymx
	 * @download dist/jquery/jquery.class.js
	 * @test jquery/class/qunit.html
	 * 
	 * Class provides simulated inheritance in JavaScript. Use clss to bridge the gap between
	 * jQuery's functional programming style and Object Oriented Programming. It 
	 * is based off John Resig's [http://ejohn.org/blog/simple-javascript-inheritance/|Simple Class]
	 * Inheritance library.  Besides prototypal inheritance, it includes a few important features:
	 * 
	 *   - Static inheritance
	 *   - Introspection
	 *   - Namespaces
	 *   - Setup and initialization methods
	 *   - Easy callback function creation
	 * 
	 * 
	 * The [mvc.class Get Started with jQueryMX] has a good walkthrough of $.Class.
	 * 
	 * ## Static v. Prototype
	 * 
	 * Before learning about Class, it's important to
	 * understand the difference between
	 * a class's __static__ and __prototype__ properties.
	 * 
	 *     //STATIC
	 *     MyClass.staticProperty  //shared property
	 *     
	 *     //PROTOTYPE
	 *     myclass = new MyClass()
	 *     myclass.prototypeMethod() //instance method
	 * 
	 * A static (or class) property is on the Class constructor
	 * function itself
	 * and can be thought of being shared by all instances of the 
	 * Class. Prototype propertes are available only on instances of the Class.
	 * 
	 * ## A Basic Class
	 * 
	 * The following creates a Monster class with a
	 * name (for introspection), static, and prototype members.
	 * Every time a monster instance is created, the static
	 * count is incremented.
	 *
	 * @codestart
	 * $.Class('Monster',
	 * /* @static *|
	 * {
	 *   count: 0
	 * },
	 * /* @prototype *|
	 * {
	 *   init: function( name ) {
	 *
	 *     // saves name on the monster instance
	 *     this.name = name;
	 *
	 *     // sets the health
	 *     this.health = 10;
	 *
	 *     // increments count
	 *     this.constructor.count++;
	 *   },
	 *   eat: function( smallChildren ){
	 *     this.health += smallChildren;
	 *   },
	 *   fight: function() {
	 *     this.health -= 2;
	 *   }
	 * });
	 *
	 * hydra = new Monster('hydra');
	 *
	 * dragon = new Monster('dragon');
	 *
	 * hydra.name        // -> hydra
	 * Monster.count     // -> 2
	 * Monster.shortName // -> 'Monster'
	 *
	 * hydra.eat(2);     // health = 12
	 *
	 * dragon.fight();   // health = 8
	 *
	 * @codeend
	 *
	 * 
	 * Notice that the prototype <b>init</b> function is called when a new instance of Monster is created.
	 * 
	 * 
	 * ## Inheritance
	 * 
	 * When a class is extended, all static and prototype properties are available on the new class.
	 * If you overwrite a function, you can call the base class's function by calling
	 * <code>this._super</code>.  Lets create a SeaMonster class.  SeaMonsters are less
	 * efficient at eating small children, but more powerful fighters.
	 * 
	 * 
	 *     Monster("SeaMonster",{
	 *       eat: function( smallChildren ) {
	 *         this._super(smallChildren / 2);
	 *       },
	 *       fight: function() {
	 *         this.health -= 1;
	 *       }
	 *     });
	 *     
	 *     lockNess = new SeaMonster('Lock Ness');
	 *     lockNess.eat(4);   //health = 12
	 *     lockNess.fight();  //health = 11
	 * 
	 * ### Static property inheritance
	 * 
	 * You can also inherit static properties in the same way:
	 * 
	 *     $.Class("First",
	 *     {
	 *         staticMethod: function() { return 1;}
	 *     },{})
	 *
	 *     First("Second",{
	 *         staticMethod: function() { return this._super()+1;}
	 *     },{})
	 *
	 *     Second.staticMethod() // -> 2
	 * 
	 * ## Namespaces
	 * 
	 * Namespaces are a good idea! We encourage you to namespace all of your code.
	 * It makes it possible to drop your code into another app without problems.
	 * Making a namespaced class is easy:
	 * 
	 * 
	 *     $.Class("MyNamespace.MyClass",{},{});
	 *
	 *     new MyNamespace.MyClass()
	 * 
	 * 
	 * <h2 id='introspection'>Introspection</h2>
	 * 
	 * Often, it's nice to create classes whose name helps determine functionality.  Ruby on
	 * Rails's [http://api.rubyonrails.org/classes/ActiveRecord/Base.html|ActiveRecord] ORM class
	 * is a great example of this.  Unfortunately, JavaScript doesn't have a way of determining
	 * an object's name, so the developer must provide a name.  Class fixes this by taking a String name for the class.
	 * 
	 *     $.Class("MyOrg.MyClass",{},{})
	 *     MyOrg.MyClass.shortName //-> 'MyClass'
	 *     MyOrg.MyClass.fullName //->  'MyOrg.MyClass'
	 * 
	 * The fullName (with namespaces) and the shortName (without namespaces) are added to the Class's
	 * static properties.
	 *
	 *
	 * ## Setup and initialization methods
	 * 
	 * <p>
	 * Class provides static and prototype initialization functions.
	 * These come in two flavors - setup and init.
	 * Setup is called before init and
	 * can be used to 'normalize' init's arguments.
	 * </p>
	 * <div class='whisper'>PRO TIP: Typically, you don't need setup methods in your classes. Use Init instead.
	 * Reserve setup methods for when you need to do complex pre-processing of your class before init is called.
	 *
	 * </div>
	 * @codestart
	 * $.Class("MyClass",
	 * {
	 *   setup: function() {} //static setup
	 *   init: function() {} //static constructor
	 * },
	 * {
	 *   setup: function() {} //prototype setup
	 *   init: function() {} //prototype constructor
	 * })
	 * @codeend
	 *
	 * ### Setup
	 * 
	 * Setup functions are called before init functions.  Static setup functions are passed
	 * the base class followed by arguments passed to the extend function.
	 * Prototype static functions are passed the Class constructor 
	 * function arguments.
	 * 
	 * If a setup function returns an array, that array will be used as the arguments
	 * for the following init method.  This provides setup functions the ability to normalize
	 * arguments passed to the init constructors.  They are also excellent places
	 * to put setup code you want to almost always run.
	 * 
	 * 
	 * The following is similar to how [jQuery.Controller.prototype.setup]
	 * makes sure init is always called with a jQuery element and merged options
	 * even if it is passed a raw
	 * HTMLElement and no second parameter.
	 * 
	 *     $.Class("jQuery.Controller",{
	 *       ...
	 *     },{
	 *       setup: function( el, options ) {
	 *         ...
	 *         return [$(el),
	 *                 $.extend(true,
	 *                    this.Class.defaults,
	 *                    options || {} ) ]
	 *       }
	 *     })
	 * 
	 * Typically, you won't need to make or overwrite setup functions.
	 * 
	 * ### Init
	 *
	 * Init functions are called after setup functions.
	 * Typically, they receive the same arguments
	 * as their preceding setup function.  The Foo class's <code>init</code> method
	 * gets called in the following example:
	 * 
	 *     $.Class("Foo", {
	 *       init: function( arg1, arg2, arg3 ) {
	 *         this.sum = arg1+arg2+arg3;
	 *       }
	 *     })
	 *     var foo = new Foo(1,2,3);
	 *     foo.sum //-> 6
	 * 
	 * ## Proxies
	 * 
	 * Similar to jQuery's proxy method, Class provides a
	 * [jQuery.Class.static.proxy proxy]
	 * function that returns a callback to a method that will always
	 * have
	 * <code>this</code> set to the class or instance of the class.
	 * 
	 * 
	 * The following example uses this.proxy to make sure
	 * <code>this.name</code> is available in <code>show</code>.
	 * 
	 *     $.Class("Todo",{
	 *       init: function( name ) { 
	 *       	this.name = name 
	 *       },
	 *       get: function() {
	 *         $.get("/stuff",this.proxy('show'))
	 *       },
	 *       show: function( txt ) {
	 *         alert(this.name+txt)
	 *       }
	 *     })
	 *     new Todo("Trash").get()
	 * 
	 * Callback is available as a static and prototype method.
	 * 
	 * ##  Demo
	 * 
	 * @demo jquery/class/class.html
	 * 
	 * 
	 * @constructor
	 * 
	 * To create a Class call:
	 * 
	 *     $.Class( [NAME , STATIC,] PROTOTYPE ) -> Class
	 * 
	 * <div class='params'>
	 *   <div class='param'><label>NAME</label><code>{optional:String}</code>
	 *   <p>If provided, this sets the shortName and fullName of the 
	 *      class and adds it and any necessary namespaces to the 
	 *      window object.</p>
	 *   </div>
	 *   <div class='param'><label>STATIC</label><code>{optional:Object}</code>
	 *   <p>If provided, this creates static properties and methods
	 *   on the class.</p>
	 *   </div>
	 *   <div class='param'><label>PROTOTYPE</label><code>{Object}</code>
	 *   <p>Creates prototype methods on the class.</p>
	 *   </div>
	 * </div>
	 * 
	 * When a Class is created, the static [jQuery.Class.static.setup setup] 
	 * and [jQuery.Class.static.init init]  methods are called.
	 * 
	 * To create an instance of a Class, call:
	 * 
	 *     new Class([args ... ]) -> instance
	 * 
	 * The created instance will have all the 
	 * prototype properties and methods defined by the PROTOTYPE object.
	 * 
	 * When an instance is created, the prototype [jQuery.Class.prototype.setup setup] 
	 * and [jQuery.Class.prototype.init init]  methods 
	 * are called.
	 */

	clss = $.Class = function() {
		if (arguments.length) {
			clss.extend.apply(clss, arguments);
		}
	};

	/* @Static*/
	extend(clss, {
		/**
		 * @function proxy
		 * Returns a callback function for a function on this Class.
		 * Proxy ensures that 'this' is set appropriately.  
		 * @codestart
		 * $.Class("MyClass",{
		 *     getData: function() {
		 *         this.showing = null;
		 *         $.get("data.json",this.proxy('gotData'),'json')
		 *     },
		 *     gotData: function( data ) {
		 *         this.showing = data;
		 *     }
		 * },{});
		 * MyClass.showData();
		 * @codeend
		 * <h2>Currying Arguments</h2>
		 * Additional arguments to proxy will fill in arguments on the returning function.
		 * @codestart
		 * $.Class("MyClass",{
		 *    getData: function( <b>callback</b> ) {
		 *      $.get("data.json",this.proxy('process',<b>callback</b>),'json');
		 *    },
		 *    process: function( <b>callback</b>, jsonData ) { //callback is added as first argument
		 *        jsonData.processed = true;
		 *        callback(jsonData);
		 *    }
		 * },{});
		 * MyClass.getData(showDataFunc)
		 * @codeend
		 * <h2>Nesting Functions</h2>
		 * Proxy can take an array of functions to call as 
		 * the first argument.  When the returned callback function
		 * is called each function in the array is passed the return value of the prior function.  This is often used
		 * to eliminate currying initial arguments.
		 * @codestart
		 * $.Class("MyClass",{
		 *    getData: function( callback ) {
		 *      //calls process, then callback with value from process
		 *      $.get("data.json",this.proxy(['process2',callback]),'json') 
		 *    },
		 *    process2: function( type,jsonData ) {
		 *        jsonData.processed = true;
		 *        return [jsonData];
		 *    }
		 * },{});
		 * MyClass.getData(showDataFunc);
		 * @codeend
		 * @param {String|Array} fname If a string, it represents the function to be called.  
		 * If it is an array, it will call each function in order and pass the return value of the prior function to the
		 * next function.
		 * @return {Function} the callback function.
		 */
		proxy: function( funcs ) {

			//args that should be curried
			var args = makeArray(arguments),
				self;

			// get the functions to callback
			funcs = args.shift();

			// if there is only one function, make funcs into an array
			if (!isArray(funcs) ) {
				funcs = [funcs];
			}
			
			// keep a reference to us in self
			self = this;
			
			
			return function class_cb() {
				// add the arguments after the curried args
				var cur = concatArgs(args, arguments),
					isString, 
					length = funcs.length,
					f = 0,
					func;
				
				// go through each function to call back
				for (; f < length; f++ ) {
					func = funcs[f];
					if (!func ) {
						continue;
					}
					
					// set called with the name of the function on self (this is how this.view works)
					isString = typeof func == "string";
					if ( isString && self._set_called ) {
						self.called = func;
					}
					
					// call the function
					cur = (isString ? self[func] : func).apply(self, cur || []);
					
					// pass the result to the next function (if there is a next function)
					if ( f < length - 1 ) {
						cur = !isArray(cur) || cur._use_call ? [cur] : cur
					}
				}
				return cur;
			}
		},
		/**
		 * @function newInstance
		 * Creates a new instance of the class.  This method is useful for creating new instances
		 * with arbitrary parameters.
		 * <h3>Example</h3>
		 * @codestart
		 * $.Class("MyClass",{},{})
		 * var mc = MyClass.newInstance.apply(null, new Array(parseInt(Math.random()*10,10))
		 * @codeend
		 * @return {class} instance of the class
		 */
		newInstance: function() {
			// get a raw instance objet (init is not called)
			var inst = this.rawInstance(),
				args;
				
			// call setup if there is a setup
			if ( inst.setup ) {
				args = inst.setup.apply(inst, arguments);
			}
			// call init if there is an init, if setup returned args, use those as the arguments
			if ( inst.init ) {
				inst.init.apply(inst, isArray(args) ? args : arguments);
			}
			return inst;
		},
		/**
		 * Setup gets called on the inherting class with the base class followed by the
		 * inheriting class's raw properties.
		 * 
		 * Setup will deeply extend a static defaults property on the base class with 
		 * properties on the base class.  For example:
		 * 
		 *     $.Class("MyBase",{
		 *       defaults : {
		 *         foo: 'bar'
		 *       }
		 *     },{})
		 * 
		 *     MyBase("Inheriting",{
		 *       defaults : {
		 *         newProp : 'newVal'
		 *       }
		 *     },{}
		 *     
		 *     Inheriting.defaults -> {foo: 'bar', 'newProp': 'newVal'}
		 * 
		 * @param {Object} baseClass the base class that is being inherited from
		 * @param {String} fullName the name of the new class
		 * @param {Object} staticProps the static properties of the new class
		 * @param {Object} protoProps the prototype properties of the new class
		 */
		setup: function( baseClass, fullName ) {
			// set defaults as the merger of the parent defaults and this object's defaults
			this.defaults = extend(true, {}, baseClass.defaults, this.defaults);
			return arguments;
		},
		rawInstance: function() {
			// prevent running init
			initializing = true;
			var inst = new this();
			initializing = false;
			// allow running init
			return inst;
		},
		/**
		 * Extends a class with new static and prototype functions.  There are a variety of ways
		 * to use extend:
		 * 
		 *     // with className, static and prototype functions
		 *     $.Class('Task',{ STATIC },{ PROTOTYPE })
		 *     // with just classname and prototype functions
		 *     $.Class('Task',{ PROTOTYPE })
		 *     // with just a className
		 *     $.Class('Task')
		 * 
		 * You no longer have to use <code>.extend</code>.  Instead, you can pass those options directly to
		 * $.Class (and any inheriting classes):
		 * 
		 *     // with className, static and prototype functions
		 *     $.Class('Task',{ STATIC },{ PROTOTYPE })
		 *     // with just classname and prototype functions
		 *     $.Class('Task',{ PROTOTYPE })
		 *     // with just a className
		 *     $.Class('Task')
		 * 
		 * @param {String} [fullName]  the classes name (used for classes w/ introspection)
		 * @param {Object} [klass]  the new classes static/class functions
		 * @param {Object} [proto]  the new classes prototype functions
		 * 
		 * @return {jQuery.Class} returns the new class
		 */
		extend: function( fullName, klass, proto ) {
			// figure out what was passed and normalize it
			if ( typeof fullName != 'string' ) {
				proto = klass;
				klass = fullName;
				fullName = null;
			}
			if (!proto ) {
				proto = klass;
				klass = null;
			}

			proto = proto || {};
			var _super_class = this,
				_super = this[STR_PROTOTYPE],
				name, shortName, namespace, prototype;

			// Instantiate a base class (but only create the instance,
			// don't run the init constructor)
			initializing = true;
			prototype = new this();
			initializing = false;
			
			// Copy the properties over onto the new prototype
			inheritProps(proto, _super, prototype);

			// The dummy class constructor
			function Class() {
				// All construction is actually done in the init method
				if ( initializing ) return;

				// we are being called w/o new, we are extending
				if ( this.constructor !== Class && arguments.length ) { 
					return arguments.callee.extend.apply(arguments.callee, arguments)
				} else { //we are being called w/ new
					return this.Class.newInstance.apply(this.Class, arguments)
				}
			}
			// Copy old stuff onto class
			for ( name in this ) {
				if ( this.hasOwnProperty(name) ) {
					Class[name] = this[name];
				}
			}

			// copy new static props on class
			inheritProps(klass, this, Class);

			// do namespace stuff
			if ( fullName ) {

				var parts = fullName.split(/\./),
					shortName = parts.pop(),
					current = getObject(parts.join('.'), window, true),
					namespace = current;

				
				current[shortName] = Class;
			}

			// set things that can't be overwritten
			extend(Class, {
				prototype: prototype,
				/**
				 * @attribute namespace 
				 * The namespaces object
				 * 
				 *     $.Class("MyOrg.MyClass",{},{})
				 *     MyOrg.MyClass.namespace //-> MyOrg
				 * 
				 */
				namespace: namespace,
				/**
				 * @attribute shortName 
				 * The name of the class without its namespace, provided for introspection purposes.
				 * 
				 *     $.Class("MyOrg.MyClass",{},{})
				 *     MyOrg.MyClass.shortName //-> 'MyClass'
				 *     MyOrg.MyClass.fullName //->  'MyOrg.MyClass'
				 * 
				 */
				shortName: shortName,
				constructor: Class,
				/**
				 * @attribute fullName 
				 * The full name of the class, including namespace, provided for introspection purposes.
				 * 
				 *     $.Class("MyOrg.MyClass",{},{})
				 *     MyOrg.MyClass.shortName //-> 'MyClass'
				 *     MyOrg.MyClass.fullName //->  'MyOrg.MyClass'
				 * 
				 */
				fullName: fullName
			});

			//make sure our prototype looks nice
			Class[STR_PROTOTYPE].Class = Class[STR_PROTOTYPE].constructor = Class;

			

			// call the class setup
			var args = Class.setup.apply(Class, concatArgs([_super_class],arguments));
			
			// call the class init
			if ( Class.init ) {
				Class.init.apply(Class, args || []);
			}

			/* @Prototype*/
			return Class;
			/** 
			 * @function setup
			 * If a setup method is provided, it is called when a new 
			 * instances is created.  It gets passed the same arguments that
			 * were given to the Class constructor function (<code> new Class( arguments ... )</code>).
			 * 
			 *     $.Class("MyClass",
			 *     {
			 *        setup: function( val ) {
			 *           this.val = val;
			 *         }
			 *     })
			 *     var mc = new MyClass("Check Check")
			 *     mc.val //-> 'Check Check'
			 * 
			 * Setup is called before [jQuery.Class.prototype.init init].  If setup 
			 * return an array, those arguments will be used for init. 
			 * 
			 *     $.Class("jQuery.Controller",{
			 *       setup : function(htmlElement, rawOptions){
			 *         return [$(htmlElement), 
			 *                   $.extend({}, this.Class.defaults, rawOptions )] 
			 *       }
			 *     })
			 * 
			 * <div class='whisper'>PRO TIP: 
			 * Setup functions are used to normalize constructor arguments and provide a place for
			 * setup code that extending classes don't have to remember to call _super to
			 * run.
			 * </div>
			 * 
			 * Setup is not defined on $.Class itself, so calling super in inherting classes
			 * will break.  Don't do the following:
			 * 
			 *     $.Class("Thing",{
			 *       setup : function(){
			 *         this._super(); // breaks!
			 *       }
			 *     })
			 * 
			 * @return {Array|undefined} If an array is return, [jQuery.Class.prototype.init] is 
			 * called with those arguments; otherwise, the original arguments are used.
			 */
			//break up
			/** 
			 * @function init
			 * If an <code>init</code> method is provided, it gets called when a new instance
			 * is created.  Init gets called after [jQuery.Class.prototype.setup setup], typically with the 
			 * same arguments passed to the Class 
			 * constructor: (<code> new Class( arguments ... )</code>).  
			 * 
			 *     $.Class("MyClass",
			 *     {
			 *        init: function( val ) {
			 *           this.val = val;
			 *        }
			 *     })
			 *     var mc = new MyClass(1)
			 *     mc.val //-> 1
			 * 
			 * [jQuery.Class.prototype.setup Setup] is able to modify the arguments passed to init.  Read
			 * about it there.
			 * 
			 */
			//Breaks up code
			/**
			 * @attribute constructor
			 * 
			 * A reference to the Class (or constructor function).  This allows you to access 
			 * a class's static properties from an instance.
			 * 
			 * ### Quick Example
			 * 
			 *     // a class with a static property
			 *     $.Class("MyClass", {staticProperty : true}, {});
			 *     
			 *     // a new instance of myClass
			 *     var mc1 = new MyClass();
			 * 
			 *     // read the static property from the instance:
			 *     mc1.constructor.staticProperty //-> true
			 *     
			 * Getting static properties with the constructor property, like
			 * [jQuery.Class.static.fullName fullName], is very common.
			 * 
			 */
		}

	})





	clss.callback = clss[STR_PROTOTYPE].callback = clss[STR_PROTOTYPE].
	/**
	 * @function proxy
	 * Returns a method that sets 'this' to the current instance.  This does the same thing as 
	 * and is described better in [jQuery.Class.static.proxy].
	 * The only difference is this proxy works
	 * on a instance instead of a class.
	 * @param {String|Array} fname If a string, it represents the function to be called.  
	 * If it is an array, it will call each function in order and pass the return value of the prior function to the
	 * next function.
	 * @return {Function} the callback function
	 */
	proxy = clss.proxy;


})();;
steal.loaded('jquery/class/class.js');
var localStorageDB = (function () {
    var db = null,
    loadedCallback = null;

    function initDb(callback) {
        loadedCallback = callback;

        try {
            if (window.openDatabase) {
                db = openDb();
                // check if first run and we need to initialise tables
                initTables();
                
            } else {
                ;
            }
        } catch (e) {
            ;
        }
    }

    function goDropTables() {
        ;
        var tables = ['sqlite_sequence','Hazards','Whos','Hows','Assessments','AssessmentWhos','AssessmentHows','Tasks','AssessmentControls','Controls'];

        $.each(tables, function (index, value) {
            db.transaction(function (tx) {
                ;
                tx.executeSql('DROP TABLE ' + tables[index]);
            });
        });
    }

    function executeSql(sql, params, success, error) {
        db = openDb();
        var deferred = $.Deferred();
        db.transaction(function (tx) {
            tx.executeSql(sql, params,
                function (tx1, result) {
                    ;
                    ;
                    var id = 0;
                    try {
                        id = result.insertId;
                    }
                    catch (err) {
                        //ignore
                    }

                    if (result && id > 0) {
                        deferred.resolve(result.insertId);
                    }
                    else {
                        deferred.resolve();
                    }
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(error);
                }
            );
        });
        if (success) deferred.then(success);
        if (error) deferred.fail(error);
        return deferred.promise();
    }

    function getRows(sql, context, success, error) {
        db = openDb();
        var deferred = $.Deferred();
        db.transaction(function (tx) {
            tx.executeSql(sql, [],
                function (tx1, result) {
                    ;
                    ;

                    // rows come back as SQLResultSet so turn them into a real array of the objects instead
                    if (context && context.models) {
                        // create REAL models from the data
                        deferred.resolve(context.models(ArrayFromSQLResultSet(result.rows)));
                    }
                    else {
                        deferred.resolve(ArrayFromSQLResultSet(result.rows));
                    }
                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(error);
                }
        );
        });
        if (success) deferred.then(success);
        if (error) deferred.fail(error);
        return deferred.promise();
    }

    function getSingleRow(sql, context, success, error) {
        db = openDb();
        var deferred = $.Deferred();
        db.transaction(function (tx) {
            tx.executeSql(sql, [],
                function (tx1, result) {
                    ;
                    ;
                    if (result.rows.length > 0) {
                        if (context && context.model) {
                            // create REAL models from the data
                            deferred.resolve(context.model(result.rows.item(0)));
                        }
                        else {
                            deferred.resolve(result.rows.item(0));
                        }
                    }
                    else {
                        deferred.resolve();
                    }

                },
                function (tx1, error) {
                    logError(error, sql);
                    deferred.reject(error);
                }
        );
        });
        if (success) deferred.then(success);
        if (error) deferred.fail(error);
        return deferred.promise();
    }

    function openDb() {
        return openDatabase("riskDB", "1.0", "Risk Assessment App", 200000);
    }

    function ArrayFromSQLResultSet(rs) {
        var res = [];
        $.each(rs, function (index, value) {
            res.push(rs.item(index));
        });
        return res;
    }

    function logError(error, sql) {
        ;
    }

    function initTables() {
        ;

        checkTableExists("Tasks", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Tasks (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, Sent BIT, DateStarted INTEGER, DateFinished INTEGER, AssessorName, AssessorEmail, ManagerName, ManagerEmail)');
        });
        
        checkTableExists("Assessments", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Assessments (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, TaskId INTEGER, HazardId INTEGER, Likelihood INTEGER, Severity INTEGER)');
        });

        checkTableExists("AssessmentHows", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentHows (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, HowId INTEGER)');
        });

        checkTableExists("AssessmentWhos", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentWhos (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, WhoId INTEGER)');
        });
        
            checkTableExists("AssessmentControls", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS AssessmentControls (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, AssessmentId INTEGER, ControlId INTEGER)');
        });
        
        checkTableExists("Whos", function(tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Whos (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name)', [], function(tx, result) {
                // populate
                tx.executeSql('INSERT INTO Whos (Name) VALUES ("All")');
                tx.executeSql('INSERT INTO Whos (Name) VALUES ("Working Party")');
                tx.executeSql('INSERT INTO Whos (Name) VALUES ("Others affected by hazard")');
                tx.executeSql('INSERT INTO Whos (Name) VALUES ("Lone worker")');
            });
        });
        
        checkTableExists("Hazards", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Hazards (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Slip/Trip/Fall")'); //id 1
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Falling Object")'); //id 2
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Flying Object (ejected)")'); //id 3
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Moving Machinery")'); //id 4
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Sharp Edge")'); //id 5
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Hot Surface")'); //id 6
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Vehicle (Mobile Work Equipment)")'); //id 7
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Working at Height")'); //id 8
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Fumes/Gases/Vapours")'); //id 9
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Chemical")'); //id 10
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Confined Space")'); //id 11
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Biological Hazard")'); //id 12
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Radiation")'); //id 13
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Equipment")'); //id 14
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Hand Tool")'); //id 15
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Electricity")'); //id 16
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Striking against staionary object")'); //id 17
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Lifting Object")'); //id 18
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Explosion")'); //id 19
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Weather")'); //id 20
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Lighting")'); //id 21
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Fire")'); //id 22
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Manual Handling")'); //id 23
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Noise")'); //id 24
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Vibration")'); //id 25
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Temperature")'); //id 26
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Violence")'); //id 27
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("Fibres/Dust (Asbestos MMF)")'); //id 28
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Gases/Fumes/Vapours")'); //id 29
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Chemical")'); //id 30
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Bio Hazard")'); //id 31
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Radiation")'); //id 32
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Explosion")'); //id 33
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV Weather")'); //id 34
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Lighting")'); //id 35
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Temperature")'); //id 36
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Noise & Vibration")'); //id 37
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Oil")'); //id 38
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Resource Use")'); //id 39
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Waste")'); //id 40
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Odour")'); //id 41
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Fire")'); //id 42
		        tx.executeSql('INSERT INTO Hazards (Name) VALUES ("ENV-Dust")'); //id 43
            });
        });

        checkTableExists("Hows", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Hows (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, HazardId)', [], function (tx, result) {
                // populate
                tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Changes in floor levels",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling into any opening",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poorly maintained floor surfaces",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping in icy conditions",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping on liquids",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping on other materials",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping on stairs",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slipping on wet floor",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping on stairs",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tipping over debris on walkways",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over fixed installations",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over floor plates",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over grating",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over maintenance debris",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over pipework",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over removed items of plant",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over tools",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over trailing hoses",1)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tripping over trailing leads",1)');
		
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Dropping of items of equipment being removed",2)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling objects creating additional hazards",2)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Objects falling from above Working Party",2)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Objects falling on personnel on lower levels",2)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Dust or debris blown into eyes",3)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Dust or debris blown into respiratory system",3)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ejected objects striking body",3)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Objects discharged by stored energy",3)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Amputation",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Compressed air",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Crushing",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cutting",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Drawing in",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ejection",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Entanglement",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Fluid injection",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Friction and abrasion",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Impact",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Shear",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Stabbing and puncture",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Stored energy",4)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Trapping",4)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cladding",5)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Handheld knives",5)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Plant components",5)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Raised edge on equipment/fixings",5)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Tools and equipment",5)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unprotected edges",5)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn during Hot Works",6)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn from contact with pipework",6)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn from contact with plant installation",6)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn from hot materials",6)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn or scald from hot liquid",6)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Being struck by other MWE",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of mobile work equipment (MWE)",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of pedestrian/vehicle interface arrangements",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling into water",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Loss of load",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Overturning",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Pedestrian being struck",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poor lighting",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Restricted vision",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Reversing movements",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Trapping of persons",7)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsecure load",7)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of fall arrest equipment",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of fall arrest equipment",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from height",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from mobile working platforms",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from scaffold",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from unsuitable working platforms",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling from working platform",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling into holes and excavations",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling into water",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling objects",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling through fragile surface",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling through opening",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Falling through skylights",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Harness trauma",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable rescue arrangements",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Body Heat loss through emersion in water",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Carried by water current",8)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Entanglement with under water object",8)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Eye irritation",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Fire/explosion",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation of Hot Work fumes",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Noise from venting",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Occupational asthma",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poisoning",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Respiratory sensitisation",9)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Scalding from steam",9)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Absorption",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Asphyxiation",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Biomass",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cryptosporidium causing gastroenteritis",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn or scald from hot liquid",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Chemical burn",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Corrosion",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Explosion",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to carcinogens",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to fumes",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to oils and lubricants",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to solvents absorption",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to solvents inhalation",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to toxins",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Flammable",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ingestion",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Injection",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Irritation",10)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Long term exposure occupational dermatitis",10)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Asphyxiation",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Diving operations",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Drowning",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Entrapment",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of emergency arrangements",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Fire and explosions",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Free flowing liquids and solids",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Hot conditions",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient air",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Lack of oxygen",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poisonous gas, fume or vapour",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Pulverised fuel dust",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Residue e.g. Vanadium",11)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Restricted access and conditions",11)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Absorption",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Bacterial or fungal",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("E-coli",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to carcinogens",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to pathogens",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Infection",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Injection",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ingestion",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Legionella",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Leptospirosis known as Weils disease from contaminated water",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Psittacosis from pigeon waste",12)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Zoonosis from animals",12)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Contamination, in the form of gases liquid",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to source",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to sunlight",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorporation,  the uptake of materials by body cells",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Irradiation,  occurs when all or part of body is exposed",13)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Lasers",13)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Abrasion",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Amputation",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Being struck",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Crushing",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cutting",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ejection",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Electrocution",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Entanglement",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure/lack of or position of emergency stop/s",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of equipment",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Fire/explosion",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Impact",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient guarding",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient maintenance",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Noise",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non ATEX rated",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non intrinsically safe",14)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Puncture",14)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Abrasion",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Amputation",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Crushing",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Cutting",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ejection",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Electrocution",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Impact",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Noise",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non ATEX rated",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non intrinsically safe",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Puncture",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Trapping",15)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Vibration",15)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Arcing/overheating",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burn",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Electrocution",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to damaged electrical apparatus",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to incorrectly installed",16)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to live conductors",16)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Impact",17)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inadequate lighting",17)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of equipment/accessories",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Heavy load",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect lifting equipment/accessories",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect lifting techniques",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient lifting plan",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Overhead loads",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Uncertified equipment/accessories",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsecure load",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unstable load",18)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",18)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Build up of an explosive atmosphere",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Electrical explosion through the use of the non insulated tools",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Gas cylinder flashback",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition of flammable atmosphere",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inadequate ventilation",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Lack of DSEAR arrangements",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non ATEX rated equipment",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Non intrinsically safe equipment",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poorly installed and or maintained gas equipment",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Storage of explosives",19)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Use of explosives",19)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Heavy rain",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("High winds",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Hot/cold",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Humid",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Icy conditions",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poor visibility",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Snow/sleet/hail",20)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Sunburn",20)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Excessive",21)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of emergency lighting",21)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Glare",21)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient",21)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Sudden changes in levels",21)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from storage of flammable substances/materials",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from faulty electrical equipment",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from electrical overload of equipment/circuits",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from cooking equipment",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from Hot Working",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from heating",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from friction of mechanical equipment",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from chemical reaction",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from explosion",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Ignition from arson",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of vegetation",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of combustible materials",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of flammable gases/vapours",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of combustible waste materials",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of walls & ceilings",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of office furniture and carpet",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Burning of aerosol containers",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Smoke spread from lack of structural compartmentation",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Smoke spread from abuse of compartmentation",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Smoke spread from lack of fire protected separation between floors",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Evacuation impacted by escape route not able to cope with the number of persons",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Evacuation impacted by escape route not illuminated on electrical supply failure",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Evacuation impacted by escape route not having means of alerting other people to the presence of fire",22)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Evacuation impacted by insufficient fire fighting arrangements",22)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Available and effective grip of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Bulky/unwielding load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Changes in floor level including steps and stairs",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Flexibility/rigidity of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Frequency of operations",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Hot or cold load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Hot/cold/humid conditions",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect lifting techniques",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Insufficient rest or recovery time",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poor lighting",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poor ventilation",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Poorly maintained floor surfaces and other slip or trip hazards",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Restricted working space",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Restrictions caused by PPE",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Sharp edges or splinters on load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Shifting/moving weight of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Slippery surfaces of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Stability of load",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Strenuous pushing or pulling",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Twisting/stooping/reaching",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Weather conditions",23)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Weight of load",23)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Created by tools and equipment",24)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Generated by plant operation",24)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Created by tools and equipment",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exceeding trigger time",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Generated by plant operation",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inadequate maintenance of equipment",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect attachments",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect use of equipment",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Low temperature leading to poor circulation",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitability of equipment",25)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",25)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure of limbs, hands, feet and face",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Exposure to extremes",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of emergency arrangements",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Failure of PPE",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inadequate PPE",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Incorrect work/rest regime",26)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unsuitable physical attributes/capabilities",26)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Effects of drugs and alcohol",27)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Mental abuse",27)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Physical harm",27)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Unpredictable behaviour",27)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Verbal abuse",27)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Inhalation",28)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Irritation",28)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Release due to disturbance",28)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Uncontrolled release",28)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",29)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",29)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",29)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",30)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",30)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",30)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",31)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",31)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",31)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",32)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",32)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",32)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",33)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",33)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",33)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",34)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",34)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",34)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",35)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",35)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",35)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",36)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",36)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",36)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",37)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",37)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",37)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",38)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",38)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",38)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",39)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",39)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",39)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",40)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",40)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",40)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",41)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",41)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",41)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",42)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",42)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",42)');

		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Air",43)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Water",43)');
		        tx.executeSql('INSERT INTO Hows (Name,HazardId) VALUES ("Land",43)');
                
            });
        });

        checkTableExists("Controls", function (tx) {
            // create table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Controls (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name, HazardId)', [], function (tx, result) {
                tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean floor before work commences",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean work area before work commences",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Defined routes",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Designated storage/laydown areas",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Equipment and materials safely secured",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Gritting in icy conditions",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hose and cable management",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install portable lighting",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Anti-slip paint on stairs",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Openings barriered off",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety footwear to be worn (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety shoes to be worn (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety boots issued (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety wellingtons to be worn (Standard BS EN 345, steel toe cap to 200 joule, oil and penetration resistant sole)",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Removal of redundant equipment",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Restricted handling of material on stairs",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and maintenance",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Specific hazard marking",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Suitable lighting in work area",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tools and materials safely stored in containers",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of drip trays in work area",1)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",1)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Close gap after items of plant are removed",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Close gap after lagging and cladding removal",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Equipment and materials safely secured",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lifting plan in place",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance of access routes",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Areas below openings barriered off",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Netting",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Openings barriered off",2)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety helmet to be worn (Standard BS EN 397)",2)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Controlled release of stored energy",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dust in work area cleared",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency eye wash bottles to be carried",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Plant washed down to control the build up of dust and debris",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Eye protection to be worn (Standard BS EN 166)",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety glasses to be worn (Standard BS EN 166, 1F grade)",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety goggles to be worn (Standard BS EN 166, 1B grade)",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety visor to be worn (Standard BS EN 166, 1B grade)",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Robustness of guarding confirmed",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and maintenance",3)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",3)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",4)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Free rapping rods mechanism before inspection",4)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Guards in place and effective",4)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation of machinery",4)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Controlled release of stored energy",4)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Springs to be fully discharged before starting task",4)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of sprag",4)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",4)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",4)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",5)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Equipment and materials safely secured",5)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Deburr edges before work commences",5)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",5)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Mechanical protection gloves to be worn (Standard BS EN 388, mechanical protection to at least 3,3,3,3)",5)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Protect edges",5)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of enclosed moving edge blade",5)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",5)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",6)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",6)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance of lagging and cladding",6)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",6)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 407)",6)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Thermal hazard gloves to be worn (Standard BS EN 407, thermal protection to at least 4,3,4,2,1,1)",6)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Welding gauntlets to be worn (Standard BS EN 407, thermal protection to at least 3,1,2,1,3,1.  Standard BS EN 388, mechanical protection to at least 3,1,3,3)",6)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Screens/blankets",6)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",6)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Banksman in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Blind spot management",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Defined routes",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance routines",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Life jacket to be worn (Standard BS EN 396)",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use checks and inspection",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregation of vehicles and pedestrians",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Speed limits in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Traffic management arrangements in place",7)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",7)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Access to scaffold controlled",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Banksman in place",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Work at Height Risk Assessment",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Equipment and materials safely secured",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fall rescue plans in place",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fragile surface identification",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Gates installed in openings",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Handrails or barriers in place",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Openings barriered off",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Fall arrest equipment to be used (Standard BS EN 365, general requirements)",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Fall arrest lanyards to be used (Standard BS EN 354, lanyards.  BS EN 355, energy absorbers)",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Fall restraint equipment to be used (Standard BS EN 358, fall restraint lanyard)",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Relief step to be used with safety harness",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Work positioning equipment to be used (Standard BS EN 358, work positioning lanyard)",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use checks and inspection",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregate fragile surface",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of Duck board/Youngman board",8)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",8)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health surveillance",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Limits on exposure",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hearing protection to be worn (Standard BS EN 352)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Respiratory protective equipment to be worn",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP2 disposable face mask to be worn (Standard BS EN 149)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP3 disposable face mask to be worn (Standard BS EN 149)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Half face mask to be worn (Standard BS EN 140)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Full face mask to be worn (Standard BS EN 136)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Eye protection to be worn (Standard BS EN 166)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety glasses to be worn (Standard BS EN 166, 1F grade)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety goggles to be worn (Standard BS EN 166, 1B grade)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety visor to be worn (Standard BS EN 166, 1B grade)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Leather apron to be worn (Standard BS EN 467)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - PVC apron to be worn (Standard BS EN 467)",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",9)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Ventilation of work area",9)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("All chemicals COSHH assessed",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean tools after use with COSHH assessed cleaning chemicals",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean tools after use with water",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health surveillance",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Instruction on personnel hygiene controls",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Chemical resistant overalls to be worn (Standard BS EN 465)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - PVC apron to be worn (Standard BS EN 467)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Eye protection to be worn (Standard BS EN 166)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety glasses to be worn (Standard BS EN 166, 1F grade)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety goggles to be worn (Standard BS EN 166, 1B grade)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety visor to be worn (Standard BS EN 166, 1B grade)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Respiratory protective equipment to be worn",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP2 disposable face mask to be worn (Standard BS EN 149)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP3 disposable face mask to be worn (Standard BS EN 149)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Half face mask to be worn (Standard BS EN 140)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Full face mask to be worn (Standard BS EN 136)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Forearm length rubber latex gloves to be worn (Standard BS EN 374)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Forearm length nitrile gloves to be worn (Standard BS EN 374)",10)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",10)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("ATEX rated safe lighting in work area",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean contaminated work area",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Communication between working party members",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Communication with personnel outside the work area",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Control access to culverts and cable tunnels",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hot environment arrangements in place",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Means of safe entry and exit",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Portable lighting 25V max",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE-disposable coveralls to be worn (Standard EN 340)",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Purging and venting",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Safety person in place",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of atmospheric monitors",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work in accordance with Diving Operations GMI",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work in accordance with Selected Persons Report",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Respiratory protective equipment to be worn",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP2 disposable face mask to be worn (Standard BS EN 149)",11)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP3 disposable face mask to be worn (Standard BS EN 149)",11)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean tools after use using COSHH assessed cleaning chemicals",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health surveillance",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Instruction on food hygiene controls",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Instruction on personnel hygiene controls",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation of Aeration Cone",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clean contaminated work area",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pest control",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Chemical resistant overalls to be worn (Standard BS EN 465)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Coveralls changed after task (standard EN 340 )",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Eye protection to be worn (standard EN 166, grade S)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Needle proof gloves (standard EN ??)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - FFP2 disposable face mask to be worn (Standard BS EN 149)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Rubber elbow length gloves to be worn ( Standard EN 388)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety wellingtons to be worn (Standard BS EN 345, steel toe cap to 200 joule, oil and penetration resistant sole)",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",12)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",12)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("E.ON UK Safety Rules (Radiological)",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health surveillance",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation of source",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Limits on exposure",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",13)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning lights in place",13)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency stop within operating area",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flashback arrestors in place",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hose and cable management",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Insulation of electrical supply",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Portable appliance testing of equipment",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hearing protection to be worn (Standard BS EN 352)",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use inspection",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Robustness of guarding confirmed",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and maintenance",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use in accordance with manufacturer\'s instructions",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of ATEX rated equipment",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Vibration assessment",14)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",14)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hold to operate switch or trigger",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Insulation of electrical supply",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Portable appliance testing of equipment",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hearing protection to be worn (Standard BS EN 352)",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use inspection",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and maintenance",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use in accordance with manufacturer\'s instructions",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of ATEX rated equipment",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",15)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Vibration assessment",15)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Check condition of equipment",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Earths applied before work commences",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Electrical equipment checked for dead before work commences",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Insulation of electrical supply",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintain safe distance",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Portable appliance testing of equipment",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Electrical Gloves (standard EN 60903)",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Switching clothing (Standard EN ??)",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of ATEX rated equipment",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of insulated tools",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",16)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work in accordance with Brush Gear Maintenance GMI",16)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Defined routes",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Designated storage/laydown areas",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install portable lighting",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - bump cap to be worn (standard EN 812)",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Removal of redundant equipment",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Specific hazard marking",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Suitable lighting in work area",17)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",17)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lifting plan in place",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use checks and inspection on all equipment and accessories",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Sound klaxon",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Statutory Inspections valid",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",18)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of correct/tested lifting points and accessories",18)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Access to area restricted",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Area ventilated to prevent build up of explosive atmosphere",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Atmosphere monitored",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Explosion Prevention Document",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dust in work area cleared",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flashback arrestors in place",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Implement and maintain Explosion Prevention Document (EPD)",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintain area below Lower Explosive Limit (LEL)",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance routines",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Plant washed down to control the build up of dust and debris",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevent build up of combustible material",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Restricted access to cell room",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Routine inspection and cleaning",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Safe storage of explosive materials/cylinders",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Selection of cylinder gases",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of ATEX rated equipment",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of insulated tools",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of intrinsically safe tools and equipment",19)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work in accordance with Selected Persons Report",19)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Gritting in snowy/icy conditions",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Health Surveillance",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install cool down area",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Limitations on work in extreme conditions",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (cold weather)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (gloves EN 388) (Thermal)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety footwear to be worn (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (sun visors)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (Wellingtons EN 345, S2)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (wet weather)",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Provide liquid refreshment",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Provide sun protection",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secure loose equipment and materials",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Snow clearance",20)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Speed limits in place",20)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install blinds or screens",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install portable lighting",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lighting to be in place prior to task (150 lux)",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lux level audit",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE issued (amber eye protection EN 166, F)",21)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Preventative maintenance",21)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by use of permit system for isolation",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by removal of the source of ignition",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by preventative maintenance on equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by removal of combustible material",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by the PAT testing of portable electrical equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by the ventilation of the building to prevent the build of flammable atmosphere",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by fire awareness training",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by maintenance of fire suppression systems",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by control of hot work",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by training individuals on fire hazards and controls",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by segregation of flammable liquids",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by Reduction of  volumes held of flammable substances",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by segregation of reactive chemicals",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by the use of intrincically safe tools and equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by the use of ATEX rated equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevention by Design of building",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through the activation of automatic fire suppression systems (e.g. sprinkler systems)",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through compartmentalisation of the area",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through activation of smoke exhaust systems",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through activation of fire doors",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through the activation of fire detection and alarm systems",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through by the evacuation of individuals from the area",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through the maintenance of emergency escape routes",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through the maintenance of emergency lighting on escape routes",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through training on evacuation drills",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through training on fire fighting equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment through signed exit routes to place of safety",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reaction, evacuate area",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reaction, use of fire fighting equipment",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reaction, implement emergency plan",22)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reaction, implement runoff containment measures of pollutants",22)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Competent persons trained in Manual Handling techniques",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Manual Handling Risk Assessment",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance routines",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Cold weather thermal (standard EN ??)",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Teamworking",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use mechanical aid",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of manual lifting aids",23)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of temporary lighting",23)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Noise Risk Assessment",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install noise barrier",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation from noise",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Isolation of noise source",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hearing protection to be worn (standard EN 352-3)",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reference noise map",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Time limits on exposure",24)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",24)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pre-use inspection",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Protect against cold environment",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Time limits on exposure",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",25)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use in accordance with manufacturer\'s instructions",25)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hot environment arrangements in place",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Install cool down area",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Cold weather thermal (standard EN ??)",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Cold weather thermal gloves (standard EN 388 and EN ??)",26)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Provide liquid refreshment",26)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Lone working arrangements in place",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Security",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Supervision",27)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Whistle blowing ",27)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Asbestos register checked before commencing",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Damping down of material",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Demarcation of work area",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Disturbed or damaged material appearing to be MMMF or asbestos checked before commencing",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency arrangements in place",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Encapsulate exposed areas",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Enclosure of area",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Safety footwear to be worn (Standard BS EN 345, steel toe cap to 200 joule, heat resistant sole to 200C)",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Disposable coveralls (Standard EN 340)",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Hand protection to be worn (Standard BS EN 388)",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PPE - Respiratory protective equipment (Standard EN 140, FFP3)",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Refer to HSE guide \'Asbestos Essentials\'",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use licensed asbestos removal contractors",28)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Warning signage in place",28)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emission monitoring (e.g. CEMS)",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Stack height",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("In stack heaters",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Electrostatic precipitators",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Low nox burners",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Selective catalytic reduction",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flue gas desulphurisation",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("SO3 injection",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Ventilation of work area",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emission limits",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Venting of storage vessels",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Incineration",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Absorption",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Adsorption",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Condensers",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Settlement chambers",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Centrifugal separators",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Wet scrubbers",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Filtration",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dry scrubbers",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Operating regime",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("BAT",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fortnightly helicopter flyover",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Zoned Areas - Smoking/phone policy",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Metering to check levels",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flame arresters",29)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Notification of digging",29)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Reference REACH list",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Suitable primary storage",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Double skinned tanks",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secondary containment bund",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Temporary bunding",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Drip tray",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Spill kit",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Colour coded drains",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Locked chemical stores",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Clear labelling of chemicals",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Covered storage area",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Emergency response contract",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Smaller storage containers",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregation of incompatible substances",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("PM schedules",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Operating procedures",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Trained/competent staff",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Neutralisation",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Shut off valves",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Effluent monitoring",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pumping equipment",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Water treatment",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dilution",30)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",30)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference COSHH",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregation of materials (e.g. biocides/pesticides/herbicides)",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Temperature control",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Hygiene control",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fuel sampling",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Shut off valves",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secure storage",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Effluent monitoring",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Habitat control (e.g. knotweed control, ragwort pulling)",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Water treatment",31)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dilution",31)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",32)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Segregation of source",32)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment of source",32)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment of work area",32)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",32)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Ventilation to prevent build up of explosive atmosphere",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Atmosphere monitored",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Conditions monitored for changes in the nature of the environment",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Implement and maintain Explosion Prevention Document (EPD)",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintain area below Lower Explosive Limit (LEL)",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Access to areas restricted",33)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance routines",33)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Weather warning",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Flood defence systems around site",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference site Emergency Plan (flooding)",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Cross reference Business Contingency Plan, reference drawing water in drought situation",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Monitor bund levels",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Containment of contaminant for treatment prior to discharge",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secure material to prevent being carried in high wind",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Secure equipment used for environmental control",34)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",34)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Set direction of lighting",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Change lighting type for less intrusive lighting",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Work during daylight hours",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Set up screening to prevent light going beyond site boundary",35)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",35)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",36)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Monitor discharge temperature",36)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Prevent water going outside the temperature limits",36)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",36)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Preventative maintenance of equipment",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Screening using natural barriers",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Installation of baffle mounds",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Installation of acoustic fencing",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Monitor noise at the site boundary",37)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",37)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Bunding of oil storage areas",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Installation of interceptor pits",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Maintenance of equipment",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Spill kits located locally",38)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",38)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Zero to land fill",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Monitor raw materials used",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Review alternative raw materials available",39)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Resource use kept to a minimum",39)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Waste disposed using licensed contractor",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Waste prevention",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Re-use of waste",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Recycling of waste",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Recovery of waste",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Waste collection points",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Training of people on waste segregation",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Colour coded waste collection bins",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Licensed contractor audited",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Waste stored securely",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Correct use of EWC codes",40)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Archived waste transfer notes and quarterly returns",40)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",41)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Use of air fresheners",41)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Tolerable Risk - No further controls required",41)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Process/waste/materials/sewage causing odour investigated",41)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Process/waste/materials/sewage causing odour monitored",41)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Site drains covered ",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Effluent pit manually operated to contain run-off",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Pumping equipment",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Shut off valves",42)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Fire Brigade called to site to manage fire and prevent spread",42)');

		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Medium Risk - Ensure existing controls are maintained and monitored",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Material/equipment prone to dust stored indoors",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Activities that create dust carried out indoors",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Dust contained preventing escape",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Stack emissions monitored",43)');
		        tx.executeSql('INSERT INTO Controls (Name,HazardId) VALUES ("Vehicle use monitored",43)');
            });
        });
    }

    // checks if a table exists in the database and if not calls the callback
    function checkTableExists(tablename, doesntexistcallback) {
        if (db) {
            db.transaction(function (tx) {
                tx.executeSql('select DISTINCT tbl_name from sqlite_master where tbl_name = "' + tablename + '"', [], function (tx, result) {
                    if (!result.rows.length) {
                        doesntexistcallback(tx);
                    }
                });
            });
        }
    }

    return {
        init: initDb,
        getRows: getRows,
        getSingleRow: getSingleRow,
        executeSql: executeSql,
        dropTables: goDropTables
    };
})();
;
steal.loaded('risk/lib/WebSQL/db.js');
// steal model files
steal("jquery/model");
steal.loaded('risk/models/models.js');
steal(  
        './index_controller.js',
        './taskadd_controller.js',
        './hazards_controller.js',
        './whos_controller.js',
        './myassessments_controller.js',
        './delete_controller.js',
        './deletetask_controller.js',
        './controls_controller.js',
        './details_controller.js',
        './inprogress_controller.js',
        './newhazard_controller.js',
        './deletehazard_controller.js',
        './emailreport_controller.js'
     )
;
steal.loaded('risk/controllers/controllers.js');
/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 J�rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr('novalidate', 'novalidate');

		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator);

		if ( validator.settings.onsubmit ) {

			var inputsAndButtons = this.find("input, button");

			// allow suppresing validation by adding a cancel class to the submit button
			inputsAndButtons.filter(".cancel").click(function () {
				validator.cancelSubmit = true;
			});

			// when a submitHandler is used, capture the submitting button
			if (validator.settings.submitHandler) {
				inputsAndButtons.filter(":submit").click(function () {
					validator.submitButton = this;
				});
			}

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug )
					// prevent form submit to be able to see console output
					event.preventDefault();

				function handle() {
					if ( validator.settings.submitHandler ) {
						if (validator.submitButton) {
							// insert a hidden input as a replacement for the missing submit button
							var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm );
						if (validator.submitButton) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
				valid &= validator.element(this);
            });
            return valid;
        }
    },
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];

		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages)
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function(source, params) {
	if ( arguments.length == 1 )
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	if ( arguments.length > 2 && params.constructor != Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor != Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function(element, event) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function(element, event) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element, event) {
			if ( element.name in this.submitted || element == this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element, event) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted )
				this.element(element);
			// or option elements, check parent select in that case
			else if (element.parentNode.name in this.submitted)
				this.element(element.parentNode);
		},
		highlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				validator.settings[eventType] && validator.settings[eventType].call(validator, this[0], event);
			}
			$(this.currentForm)
			       .validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, " +
						"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
						"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
						"[type='week'], [type='time'], [type='datetime-local'], " +
						"[type='range'], [type='color'] ",
						"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

			if (this.settings.invalidHandler)
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid())
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element );
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			this.settings.showErrors
				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
				: this.defaultShowErrors();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm )
				$( this.currentForm ).resetForm();
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj )
				count++;
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() == 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name == lastActive.name;
			}).length == 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
					return false;

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[0];
		},

		errors: function() {
			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $(element).rules();
			var dependencyMismatch = false;
			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result == "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result == "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method", e);
					throw e;
				}
			}
			if (dependencyMismatch)
				return;
			if ( this.objectLength(rules) )
				this.successList.push(element);
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata)
				return;

			var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();

			return meta && meta.messages && meta.messages[method];
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor == String
				? m
				: m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined)
					return arguments[i];
			}
			return undefined;
		},

		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message == "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function(toToggle) {
			if ( this.settings.wrapper )
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			return toToggle;
		},

		defaultShowErrors: function() {
			for ( var i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( var i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// check if we have a generated label, replace the message then
				label.attr("generated") && label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length )
					this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element) )
						: label.insertAfter(element);
			}
			if ( !message && this.settings.success ) {
				label.text("");
				typeof this.settings.success == "string"
					? label.addClass( this.settings.success )
					: this.settings.success( label );
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function(element) {
			var name = this.idOrName(element);
    		return this.errors().filter(function() {
				return $(this).attr('for') == name;
			});
		},

		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		validationTargetFor: function(element) {
			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}
			return element;
		},

		checkable: function( element ) {
			return /radio|checkbox/i.test(element.type);
		},

		findByName: function( name ) {
			// select by name and filter by form for performance over form.find("[name=...]")
			var form = this.currentForm;
			return $(document.getElementsByName(name)).map(function(index, element) {
				return element.form == form && element.name == name && element  || null;
			});
		},

		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) )
					return this.findByName(element.name).filter(':checked').length;
			}
			return value.length;
		},

		depend: function(param, element) {
			return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
		},

		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},

		optional: function(element) {
			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
		},

		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if (this.pendingRequest < 0)
				this.pendingRequest = 0;
			delete this.pending[element.name];
			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		dateDE: {dateDE: true},
		number: {number: true},
		numberDE: {numberDE: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function(className, rules) {
		className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
	},

	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		classes && $.each(classes.split(' '), function() {
			if (this in $.validator.classRuleSettings) {
				$.extend(rules, $.validator.classRuleSettings[this]);
			}
		});
		return rules;
	},

	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);

		for (var method in $.validator.methods) {
			var value;
			// If .prop exists (jQuery >= 1.6), use it to get true/false for required
			if (method === 'required' && typeof $.fn.prop === 'function') {
				value = $element.prop(method);
			} else {
				value = $element.attr(method);
			}
			if (value) {
				rules[method] = value;
			} else if ($element[0].getAttribute("type") === method) {
				rules[method] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}

		return rules;
	},

	metadataRules: function(element) {
		if (!$.metadata) return {};

		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},

	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});

		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages;
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data == "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) )
				return "dependency-mismatch";
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			case 'input':
				if ( this.checkable(element) )
					return this.getLength(value, element) > 0;
			default:
				return $.trim(value).length > 0;
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) )
				return "dependency-mismatch";

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] )
				this.settings.messages[element.name] = {};
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param == "string" && {url:param} || param;

			if ( this.pending[element.name] ) {
				return "pending";
			}
			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function(response) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true;
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			// accept only spaces, digits and dashes
			if (/[^0-9 -]+/.test(value))
				return false;
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				var nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9)
						nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) == 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/accept
		accept: function(value, element, param) {
			param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
				$(element).valid();
			});
			return value == target.val();
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
;(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function(settings, _, xhr) {
			var port = settings.port;
			if (settings.mode == "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function(settings) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if (mode == "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				return (pendingRequests[port] = ajax.apply(this, arguments));
			}
			return ajax.apply(this, arguments);
		};
	}
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
;(function($) {
	// only implement if not provided by jQuery core (since 1.4)
	// TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
	if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
		$.each({
			focus: 'focusin',
			blur: 'focusout'
		}, function( original, fix ){
			$.event.special[fix] = {
				setup:function() {
					this.addEventListener( original, handler, true );
				},
				teardown:function() {
					this.removeEventListener( original, handler, true );
				},
				handler: function(e) {
					arguments[0] = $.event.fix(e);
					arguments[0].type = fix;
					return $.event.handle.apply(this, arguments);
				}
			};
			function handler(e) {
				e = $.event.fix(e);
				e.type = fix;
				return $.event.handle.call(this, e);
			}
		});
	};
	$.extend($.fn, {
		validateDelegate: function(delegate, type, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
})(jQuery);
;
steal.loaded('risk/lib/jQueryValidation/jquery.validate.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../views/index/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Index', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();

            localStorage.editAssessmentId = "";
            localStorage.deleteAssessmentId = "";
            localStorage.assessmentId = "";
            localStorage.hazardId = "";
            localStorage.addToExisting = "";
            localStorage.likelihoodRating = "";
            localStorage.severityRating = "";
            localStorage.taskId = "";

            var view = $.View("//risk/views/index/init.ejs");
            $('#indexContent').html(view);
            $('#header').html("Risk Assessment App");
            $.mobile.hidePageLoadingMsg();
        }
    });
    });;
steal.loaded('risk/controllers/index_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../lib/WebSQL/db.js',
    '../views/task_add/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Task', {
        },
    {
        init: function () {
            this.loadData();
        },

        loadData: function () {

            var view = $.View('//risk/views/task_add/init.ejs');
            $('#NewTaskForm').html(view).trigger('create');
        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#NewTaskForm').valid()) {

                var params = el.formParams();

                var task = { Name: params.Name, DateStarted: new Date().getTime(), DateFinished: "", Sent: 0 };

                new Risk.Models.Task(task).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }
            return false;
        },
        onInsertSuccess: function (obj, newid) {
            
            localStorage.taskId = newid;
            $.mobile.changePage('hazards.htm', 'pop', false, true);
        },

        onInsertFail: function () {
            //$.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
    });;
steal.loaded('risk/controllers/taskadd_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/task.js',
    '../lib/WebSQL/db.js',
    '../views/hazards/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Hazards', {
    },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var listDef = Risk.Models.Hazards.findAll();
            var view;
            $.when(listDef).done(function (listRes) {
                view = $.View('//risk/views/hazards/init.ejs', listRes);
                $('#HazardsContent').html(view);
                $('#HazardsList').listview();
            });
        },
        '.hazard-item click': function (el) {
            localStorage.hazardId = $(el).attr('id');
            $.mobile.changePage("whos.htm");
        },
        '#newHazard click': function () {
            $.mobile.changePage("dialog/newhazard.htm");
        },
        '.delete click': function (el) {
            var id = $(el).attr("id");
            localStorage.deleteHazardId = id;
        },
        '#backToTaskAdd click': function () {
            if (localStorage.addToExisting == "true") {
                localStorage.addToExisting = "";
                $.mobile.changePage("myassessments.htm", { reverse: true });
            }
            else {
                var taskDef = Risk.Models.Task.deleteOne(localStorage.taskId);
                $.mobile.changePage("taskadd.htm", { reverse: true });
            }
        }
    });
});;
steal.loaded('risk/controllers/hazards_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/whos.js',
    '../models/hows.js',
    '../models/assessmentsB.js',
    '../models/assessmenthows.js',
    '../models/assessmentwhos.js',
    '../lib/WebSQL/db.js',
    '../views/whos/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Whos', {
        },
            {
                init: function () {
                    this.loadData();
                },
                severity: 0,
                likelihood: 0,
                risk: 0,
                nextStepHref: "",
                loadData: function () {
                    var hazardsDef = Risk.Models.Hazards.findOne(localStorage.hazardId);
                    var whosDef = Risk.Models.Whos.findAll();
                    var howsDef = Risk.Models.Hows.findAll(localStorage.hazardId);
                    var view;
                    $.when(hazardsDef, whosDef, howsDef).done(function (hazardsRes, whosRes, howsRes) {
                        $('#header').text(hazardsRes.Name);
                        var viewModel = { whos: whosRes, hows: howsRes };
                        view = $.View('//risk/views/whos/init.ejs', viewModel);
                        $('#WhosContent').html(view);
                        $('#WhosList').selectmenu();
                        $('#HowsList').selectmenu();
                        $('#SeverityList').selectmenu();
                        $('#LikelihoodList').selectmenu();

                        if (localStorage.editAssessmentId) {

                            //get assessment severity likelihood whos and hows back from db
                            var asWhosDef = new Risk.Models.AssessmentWhos.findAllById(localStorage.editAssessmentId);
                            var asHowsDef = new Risk.Models.AssessmentHows.findAllById(localStorage.editAssessmentId);
                            var asDef = new Risk.Models.Assessments.findOne(localStorage.editAssessmentId);

                            $.when(asDef, asWhosDef, asHowsDef).done(function (asRes, asWhosRes, asHowsRes) {

                                var whosValArray = [];
                                $(asWhosRes).each(function (i) {
                                    whosValArray.push(this.WhoId.toString());
                                });

                                var howsValArray = [];
                                $(asHowsRes).each(function (i) {
                                    howsValArray.push(this.HowId.toString());
                                });

                                $('#WhosList').val(whosValArray);
                                $('#HowsList').val(howsValArray);
                                $('#SeverityList').val(asRes.Severity);
                                $('#LikelihoodList').val(asRes.Likelihood);

                                $('#WhosList').selectmenu('refresh');
                                $('#HowsList').selectmenu('refresh');
                                $('#SeverityList').selectmenu('refresh');
                                $('#LikelihoodList').selectmenu('refresh');
                            });
                        }
                    });
                },
                '#WhosList change': function () {
                    this.validation();
                },

                '#HowsList change': function () {
                    this.validation();
                },

                '#SeverityList change': function () {
                    this.validation();
                },

                '#LikelihoodList change': function () {
                    this.validation();
                },
                passesValidation: function () {
                    if ($('#WhosList').val() != null && $('#HowsList').val() != null && $('#SeverityList').val() != 'Choose Rating' && $('#LikelihoodList').val() != 'Choose Rating') {
                        return true;
                    }
                    return false;
                },

                calculateScore: function () {
                    this.severity = $('#SeverityList').val();
                    this.likelihood = $('#LikelihoodList').val();
                    this.risk = this.severity * this.likelihood;
                    return this.risk;
                },

                validation: function () {
                    if (this.passesValidation()) {
                        $('#WhosPage #submit').button();
                        var score = this.calculateScore();
                        $('#trafficLight div').removeClass("on");
                        if (score < 13) {
                            if (score < 6) {
                                 $('#trafficLight #green').addClass("on");
                             }
                            else {
                                $('#trafficLight #amber').addClass("on");
                            }
                            this.nextStepHref = "myassessments.htm";
                            $('#WhosPage #submit').text(localStorage.editAssessmentId ? "Save assessment" : "Finish assessment");
                            $('#WhosPage #submit').fadeIn().button('refresh');
                        }
                        else {
                            this.nextStepHref = "controls.htm";
                            $('#WhosPage #submit').text("Add further controls");
                            $('#WhosPage #submit').fadeIn().button('refresh');
                            $('#trafficLight #red').addClass("on");
                        }
                    }
                },
                '#submit click': function () {
                    $.mobile.showPageLoadingMsg();
                    localStorage.severityRating = $('#SeverityList').val();
                    localStorage.likelihoodRating = $('#LikelihoodList').val();

                    var assessment;
                    if (localStorage.editAssessmentId) {
                        assessment = { id: localStorage.editAssessmentId, TaskId: localStorage.taskId, HazardId: localStorage.hazardId, Likelihood: localStorage.likelihoodRating, Severity: localStorage.severityRating };
                    }
                    else {
                        assessment = { TaskId: localStorage.taskId, HazardId: localStorage.hazardId, Likelihood: localStorage.likelihoodRating, Severity: localStorage.severityRating };
                    }
                    new Risk.Models.AssessmentsB(assessment).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
                },
                onInsertSuccess: function (obj, newid) {
                    localStorage.assessmentId = newid ? newid : obj.id;
                    var asWhosDef = Risk.Models.AssessmentWhos.deleteMany(localStorage.assessmentId);
                    var asHowsDef = Risk.Models.AssessmentHows.deleteMany(localStorage.assessmentId);
                    var self = this;
                    $.when(asWhosDef, asHowsDef).done(function () {
                        var whos = $.makeArray($('#WhosList').val());
                        $(whos).each(function (i) {
                            var assessmentwhos = { AssessmentId: localStorage.assessmentId, WhoId: this.toString() };
                            new Risk.Models.AssessmentWhos(assessmentwhos).save(function () {
                                if (i == $('#WhosList').val().length - 1) {
                                    var hows = $.makeArray($('#HowsList').val());
                                    $(hows).each(function (index) {
                                        var assessmenthows = { AssessmentId: localStorage.assessmentId, HowId: this.toString() };
                                        new Risk.Models.AssessmentHows(assessmenthows).save(function () {

                                            if (index == $('#HowsList').val().length - 1) {
                                                $.mobile.changePage(self.nextStepHref);
                                            }

                                        }, function () { });
                                    });
                                }
                            });
                        });
                    });
                },
                onInsertFail: function () {
                    //todo popup
                },
                '#backToHazards click': function () {
                    if (localStorage.editAssessmentId) {
                        localStorage.editAssessmentId = "";
                        $.mobile.changePage("myassessments.htm", { reverse: true });
                    }
                    else {
                        $.mobile.changePage("hazards.htm", { reverse: true });
                    }
                }
            });
    });;
steal.loaded('risk/controllers/whos_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../models/hazards.js',
    '../models/assessments.js',
    '../models/assessmentwhos.js',
    '../models/assessmenthows.js',
    '../lib/WebSQL/db.js',
    '../views/myassessments/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.MyAssessments', {
        },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var assessmentsDef = Risk.Models.Assessments.findAll(localStorage.taskId);
            var taskDef = Risk.Models.Task.findOne(localStorage.taskId);
            var view;
            $.when(assessmentsDef, taskDef).done(function (assessmentsRes, taskRes) {
                view = $.View('//risk/views/myassessments/init.ejs', assessmentsRes);
                $('#MyAssessmentsContent').html(view);
                $('#MyAssessmentsList').listview();
                var divider = $('#divider');
                divider.text("Risks assessments for task: " + taskRes.Name);
                $('.task').text("'" + taskRes.Name + "'");

                $('#MyAssessmentsPage').trigger("create");
            });
        },
        '.assessment-item click': function (el) {
            var id = $(el).attr("id");
            var assessmentDef = Risk.Models.Assessments.findOne(id);
            $.when(assessmentDef).done(function (assessmentRes) {
                localStorage.hazardId = assessmentRes.HazardId;
                localStorage.editAssessmentId = id;
                $.mobile.changePage("dialog/choose.htm");
            });
        },
        '.delete click': function (el) {
            var id = $(el).attr("id");
            localStorage.deleteAssessmentId = id;
        },
        '.addToExisting click': function () {
            localStorage.addToExisting = "true";
            localStorage.editAssessmentId = "";
        },
        '.emailReport click': function () {
            if (this.hasInternetConnection()) {
                $.mobile.changePage("emailReport.htm");
            }
            else {
                $.mobile.changePage("dialog/notconnected.htm");
            }
        },
        hasInternetConnection: function () {
            if (navigator.network) {
                var networkState = navigator.network.connection.type;

                if (networkState == Connection.NONE || networkState == Connection.UNKNOWN) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }
    });
    });;
steal.loaded('risk/controllers/myassessments_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/assessments.js',
    '../models/assessmentwhos.js',
    '../models/assessmenthows.js',
    '../models/assessmentcontrols.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Risk.Controllers.Delete', {
    },
    {
        init: function () {

        },
        '.no click': function (el) {
            $.mobile.changePage("../myassessments.htm",{ transition: "none"});
        },
        '.yes click': function (el) {
            var self = this;
            var id = localStorage.deleteAssessmentId;
            var assessmentsDef = Risk.Models.Assessments.deleteOne(id);
            new Risk.Models.AssessmentWhos.deleteMany(id);
            new Risk.Models.AssessmentControls.deleteMany(id);
            new Risk.Models.AssessmentHows.deleteMany(id);
            $.when(assessmentsDef).done(function (assessmentsRes) {
                $.mobile.changePage("../myassessments.htm",{ transition: "none"});
            });
        }
    });
});;
steal.loaded('risk/controllers/delete_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../models/assessments.js',
    '../models/assessmentwhos.js',
    '../models/assessmenthows.js',
    '../models/assessmentcontrols.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Risk.Controllers.DeleteTask', {
        },
    {
        init: function () {

        },
        '.no click': function (el) {
            $.mobile.changePage("../inprogress.htm", { transition: "none" });
        },
        '.yes click': function (el) {
            var id = localStorage.deleteTaskId; 
            Risk.Models.Task.deleteOne(id);
           
            var assIdsDef = Risk.Models.Assessments.findAllIds(id); 
            $.when(assIdsDef).done(function (assIdsRes) {
                $(assIdsRes).each(function () {
                    Risk.Models.Assessments.deleteOne(this.id);
                    Risk.Models.AssessmentWhos.deleteMany(this.id);
                    var def = Risk.Models.AssessmentHows.deleteMany(this.id);
                    Risk.Models.AssessmentControls.deleteMany(this.id); 
                });
            });
            $.mobile.changePage("../inprogress.htm", { transition: "none" }); 
        }
    });
    });;
steal.loaded('risk/controllers/deletetask_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/controls.js',
    '../models/hazards.js',
    '../models/assessmentcontrols.js',
    '../models/assessments.js',
    '../models/assessmentsB.js',
    '../lib/WebSQL/db.js',
    '../views/controls/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Controls', {
        },
            {
                init: function () {
                    this.loadData();
                },
                nextStepHref: "",
                severity: 0,
                likelihood: 0,
                risk: 0,
                loadData: function () {
                    var self = this;
                    var controlsDef = Risk.Models.Controls.findAll(localStorage.hazardId);
                    var hazardDef = Risk.Models.Hazards.findOne(localStorage.hazardId);
                    var view;
                    $.when(controlsDef, hazardDef).done(function (controlsRes, hazardRes) {
                        $('#header').text("Controls for: " + hazardRes.Name);
                        var viewModel = { controls: controlsRes };
                        ;
                        view = $.View('//risk/views/controls/init.ejs', viewModel);
                        $('#ControlsContent').html(view);
                        $('#SeverityList').val(localStorage.severityRating);
                        $('#LikelihoodList').val(localStorage.likelihoodRating);
                        $('#SeverityList').selectmenu();
                        $('#LikelihoodList').selectmenu();
                        $('#ControlsList').selectmenu();
                        $('#button-container').hide(); 
                        $('#trafficLight #red').addClass("on");

                        if (localStorage.editAssessmentId) {
                            //get assessment severity likelihood and controls back from db
                            var asControlsDef = Risk.Models.AssessmentControls.findAllById(localStorage.editAssessmentId);
                            var asDef = Risk.Models.Assessments.findOne(localStorage.editAssessmentId);

                            $.when(asDef, asControlsDef).done(function (asRes, asControlsRes) {
                                var controlsValArray = [];
                                $(asControlsRes).each(function (i) {
                                    controlsValArray.push(this.ControlId.toString());
                                });
                                $('#ControlsList').val(controlsValArray);
                                $('#SeverityList').val(asRes.Severity);
                                $('#LikelihoodList').val(asRes.Likelihood);
                                $('#ControlsList').selectmenu('refresh');
                                $('#SeverityList').selectmenu('refresh');
                                $('#LikelihoodList').selectmenu('refresh');
                            });
                        }
                    });
                },
                '#ControlsList change': function () {
                    this.validation();
                },
                '#SeverityList change': function () {
                    this.validation();
                },

                '#LikelihoodList change': function () {
                    this.validation();
                },
                passesValidation: function () {
                    if ($('#ControlsList').val() != null) {
                        return true;
                    }
                    return false;
                },

                calculateScore: function () {
                    this.severity = $('#SeverityList').val();
                    this.likelihood = $('#LikelihoodList').val();
                    this.risk = this.severity * this.likelihood;
                    return this.risk;
                },

                validation: function () {
                    if (this.passesValidation()) {
                        var score = this.calculateScore();
                        $('#trafficLight div').removeClass("on");
                        if (score < 13) {
                            if (score < 6) {
                                $('#trafficLight #green').addClass("on");
                            }
                            else {
                                $('#trafficLight #amber').addClass("on");
                            }
                            this.nextStepHref = "myassessments.htm";
                            $('#button-container').show();
                            $('#submit').button();
                        }
                        else {
                            $('#button-container').hide();
                            $('#trafficLight #red').addClass("on");
                        }
                    }
                },
                '#submit click': function () {
                    $.mobile.showPageLoadingMsg();
                    var self = this;

                    var assessmentDef = Risk.Models.Assessments.findOne(localStorage.assessmentId);
                    $.when(assessmentDef).done(function (assessmentRes) {
                        new Risk.Models.AssessmentsB({ id: assessmentRes.id, TaskId: assessmentRes.TaskId, HazardId: assessmentRes.HazardId, Likelihood: $('#LikelihoodList').val(), Severity: $('#SeverityList').val() }).save();
                    });

                    var asControlsDef = Risk.Models.AssessmentControls.deleteMany(localStorage.assessmentId);
                    $.when(asControlsDef).done(function () {
                        var controls = $.makeArray($('#ControlsList').val());
                        $(controls).each(function (i) {
                            var assessmentcontrols = { AssessmentId: localStorage.assessmentId, ControlId: this.toString() };
                            new Risk.Models.AssessmentControls(assessmentcontrols).save(function () {
                                if (i == $('#ControlsList').val().length - 1) {
                                    $.mobile.changePage(self.nextStepHref);
                                }
                            });
                        });
                    });
                },

                '#backToWhos click': function () {
                    var assessmentDef = Risk.Models.Assessments.deleteOne(localStorage.assessmentId);
                }

            });
    });;
steal.loaded('risk/controllers/controls_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/assessments.js',
    '../models/assessmentdetailwhos.js',
    '../models/assessmentdetailhows.js',
    '../models/assessmentdetailcontrols.js',
    '../lib/WebSQL/db.js',
    '../views/details/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Details', {
        },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var assessmentDef = new Risk.Models.Assessments.findOne(localStorage.editAssessmentId);
            var assessmentDetailWhosDef = new Risk.Models.AssessmentDetailWhos.findAllById(localStorage.editAssessmentId);
            var assessmentDetailHowsDef = new Risk.Models.AssessmentDetailHows.findAllById(localStorage.editAssessmentId);
            var assessmentDetailControlsDef = new Risk.Models.AssessmentDetailControls.findAllById(localStorage.editAssessmentId);
            var hazardDef = new Risk.Models.Hazards.findOne(localStorage.hazardId);
            var view;

            $.when(assessmentDef, hazardDef, assessmentDetailWhosDef, assessmentDetailHowsDef, assessmentDetailControlsDef).done(function (assessmentRes, hazardRes, assessmentWhosRes, assessmentHowsRes, assessmentControlsRes) {
                var assessmentRating = assessmentRes.Severity * assessmentRes.Likelihood;
                view = $.View('//risk/views/details/init.ejs', { assessmentRating: assessmentRating, severityRating: assessmentRes.Severity, likelihoodRating: assessmentRes.Likelihood, hazardName: hazardRes.Name, whos: assessmentWhosRes, hows: assessmentHowsRes, controls: assessmentControlsRes });
                $('#DetailsContent').html(view);
                $('#DetailsList').listview();
                $('#DetailsPage').trigger("create");
            });
        }
    });
    });;
steal.loaded('risk/controllers/details_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../lib/WebSQL/db.js',
    '../views/inprogress/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.InProgress', {
    },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var self = this;
            var tasksDef = Risk.Models.Task.findAllInProgress();
            var view;
            $.when(tasksDef).done(function (tasksRes) {
                tasksRes = self.convertToDates(tasksRes);
                view = $.View('//risk/views/inprogress/init.ejs', tasksRes);
                $('#InProgressContent').html(view);
                $('#InProgressList').listview();
                $('#InProgressPage').trigger("create");
            });
        },
        '.task-item click': function (el) {
            var id = $(el).attr("id");
            localStorage.taskId = id;
        },
        '.delete click': function (el) {
            var id = $(el).attr("id");
            localStorage.deleteTaskId = id;
        },
        convertToDates: function (list) {
            for (var i = 0; i < list.length; i++) {
                list[i].DateStarted = new Date(list[i].DateStarted);
            }
            return list;
        }
    });
});;
steal.loaded('risk/controllers/inprogress_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/hows.js',
    '../models/controls.js',
    '../lib/WebSQL/db.js',
    '../views/newhazard/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Hazard', {
    },
    {
        init: function () {
            var view = $.View('//risk/views/newhazard/init.ejs');
            $('#NewHazardForm').html(view).trigger('create');
        },
        '.cancel click': function (el) {
            $.mobile.changePage("../hazards.htm", { transition: "none" });
        },
         submit: function (el, ev) {
            ev.preventDefault();
            if ($('#NewHazardForm').valid()) {
                var self = this;
                var hazard = { Name: $('#hazard').val()};
                new Risk.Models.Hazards(hazard).save(function (obj, newid) {
                    localStorage.hazardId = newid;
                    var count = 0;
                    var targetCount = $('.hows input[value!=""]').length + $('.controls input[value!=""]').length;
                    $('.hows input').each(function(){
                        if($(this).val().length > 0){
                            var how = {Name : $(this).val(), HazardId : newid};
                            new Risk.Models.Hows(how).save(function(){
                                count++;
                                if(count == targetCount){
                                $.mobile.changePage("../whos.htm");}
                            });
                        }
                    });
                    $('.controls input').each(function(){
                        if($(this).val().length > 0){
                            var control = {Name : $(this).val(), HazardId : newid};
                            new Risk.Models.Controls(control).save(function(){
                                count++;
                                if(count == targetCount){
                                    $.mobile.changePage("../whos.htm");
                                }
                            });
                        }  
                    });
                });
            }
            return false;
        },
    });
});;
steal.loaded('risk/controllers/newhazard_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/controls.js',
    '../models/hows.js',
    '../models/assessmenthows.js',
    '../models/assessmentwhos.js',
    '../models/assessmentcontrols.js',
    '../models/assessments.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Risk.Controllers.DeleteHazard', {
    },
    {
        init: function () {

        },
        '.no click': function (el) {
            $.mobile.changePage("../hazards.htm", { transition: "none" });
        },
        '.yes click': function (el) {
            var id = localStorage.deleteHazardId;
            var def = new Risk.Models.Hazards.deleteOne(id);
            new Risk.Models.Hows.deleteMany(id);
            new Risk.Models.Controls.deleteMany(id);

            $.when(def).done(function () {
                var assIdsDef = Risk.Models.Assessments.findAllHazardIds(id);
                $.when(assIdsDef).done(function (assIdsRes) {
                    $(assIdsRes).each(function () {
                        Risk.Models.Assessments.deleteManyByHazardId(id);
                        Risk.Models.AssessmentWhos.deleteMany(this.id);
                        Risk.Models.AssessmentHows.deleteMany(this.id);
                        Risk.Models.AssessmentControls.deleteMany(this.id);
                    });
                    $.mobile.changePage("../hazards.htm", { transition: "none" });
                });
            });
        }
    });
});;
steal.loaded('risk/controllers/deletehazard_controller.js');
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/WebSQL/db.js',
    '../models/task.js',
    '../models/email.js',
    '../views/email/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.EmailReport', {
        },
    {
        init: function () {
            this.loadData();
        },

        task: null,

        loadData: function () {
            var self = this;
            var taskDef = Risk.Models.Task.findOne(localStorage.taskId);
            $.when(taskDef).done(function (taskRes) {
                self.task = taskRes;
                var emailDetails = { FirstName: localStorage.emailDetailsFn, LastName: localStorage.emailDetailsLn, EmailAddress: localStorage.emailDetailsEmail, ManagerFirstName: localStorage.emailDetailsMfn, ManagerLastName: localStorage.emailDetailsMln, ManagerEmailAddress: localStorage.emailDetailsMemail };
                var view = $.View('//risk/views/email/init.ejs', emailDetails);
                $('#EmailReportForm').html(view).trigger('create');
                $('h1#EmailTitle').append(": " + taskRes.Name);
            });
        },

        submit: function (el, ev) {
            $.mobile.showPageLoadingMsg();
            var self = this;
            ev.preventDefault();
            if ($('#EmailReportForm').valid()) {
                var params = el.formParams();
                var emailDetails = { FirstName: params.FirstName, LastName: params.LastName, EmailAddress: params.EmailAddress, ManagerFirstName: params.ManagerFirstName, ManagerLastName: params.ManagerLastName, ManagerEmailAddress: params.ManagerEmailAddress };
                localStorage.emailDetailsFn = emailDetails.FirstName;
                localStorage.emailDetailsLn = emailDetails.LastName;
                localStorage.emailDetailsEmail = emailDetails.EmailAddress;
                localStorage.emailDetailsMfn = emailDetails.ManagerFirstName;
                localStorage.emailDetailsMln = emailDetails.ManagerLastName;
                localStorage.emailDetailsMemail = emailDetails.ManagerEmailAddress;
                //todo
                $.ajax({
                    url: 'http://twitter.com/status/user_timeline/padraicb.json?count=10',
                    dataType: 'jsonp',
                    success: function (data) {
                        var sentTask = {
                            id: self.task.id,
                            Name: self.task.Name,
                            DateStarted: self.task.DateStarted,
                            DateFinished: new Date().getTime(),
                            Sent: 1,
                            AssessorName: params.FirstName + " " + params.LastName,
                            AssessorEmail: params.EmailAddress,
                            ManagerName: params.ManagerFirstName + " " + params.ManagerLastName,
                            ManagerEmail: params.ManagerEmailAddress
                        };
                        new Risk.Models.Task(sentTask).save(function () {
                            $.mobile.changePage("dialog/emailSent.htm");
                        });
                    },
                    error: function () {
                        $.mobile.changePage("dialog/emailNotSent.htm");
                    }
                });
            }
            return false;
        }
    });
    });;
steal.loaded('risk/controllers/emailreport_controller.js');
steal('jquery/class', 'jquery/lang/string', 'jquery/event/destroyed', function( $ ) {
	// ------- HELPER FUNCTIONS  ------
	
	// Binds an element, returns a function that unbinds
	var bind = function( el, ev, callback ) {
		var wrappedCallback,
			binder = el.bind && el.unbind ? el : $(isFunction(el) ? [el] : el);
		//this is for events like >click.
		if ( ev.indexOf(">") === 0 ) {
			ev = ev.substr(1);
			wrappedCallback = function( event ) {
				if ( event.target === el ) {
					callback.apply(this, arguments);
				} 
			};
		}
		binder.bind(ev, wrappedCallback || callback);
		// if ev name has >, change the name and bind
		// in the wrapped callback, check that the element matches the actual element
		return function() {
			binder.unbind(ev, wrappedCallback || callback);
			el = ev = callback = wrappedCallback = null;
		};
	},
		makeArray = $.makeArray,
		isArray = $.isArray,
		isFunction = $.isFunction,
		extend = $.extend,
		Str = $.String,
		each = $.each,
		
		STR_PROTOTYPE = 'prototype',
		STR_CONSTRUCTOR = 'constructor',
		slice = Array[STR_PROTOTYPE].slice,
		
		// Binds an element, returns a function that unbinds
		delegate = function( el, selector, ev, callback ) {
			var binder = el.delegate && el.undelegate ? el : $(isFunction(el) ? [el] : el)
			binder.delegate(selector, ev, callback);
			return function() {
				binder.undelegate(selector, ev, callback);
				binder = el = ev = callback = selector = null;
			};
		},
		
		// calls bind or unbind depending if there is a selector
		binder = function( el, ev, callback, selector ) {
			return selector ? delegate(el, selector, ev, callback) : bind(el, ev, callback);
		},
		
		// moves 'this' to the first argument, wraps it with jQuery if it's an element
		shifter = function shifter(context, name) {
			var method = typeof name == "string" ? context[name] : name;
			return function() {
				context.called = name;
    			return method.apply(context, [this.nodeName ? $(this) : this].concat( slice.call(arguments, 0) ) );
			};
		},
		// matches dots
		dotsReg = /\./g,
		// matches controller
		controllersReg = /_?controllers?/ig,
		//used to remove the controller from the name
		underscoreAndRemoveController = function( className ) {
			return Str.underscore(className.replace("jQuery.", "").replace(dotsReg, '_').replace(controllersReg, ""));
		},
		// checks if it looks like an action
		actionMatcher = /[^\w]/,
		// handles parameterized action names
		parameterReplacer = /\{([^\}]+)\}/g,
		breaker = /^(?:(.*?)\s)?([\w\.\:>]+)$/,
		basicProcessor,
		data = function(el, data){
			return $.data(el, "controllers", data)
		};
	/**
	 * @class jQuery.Controller
	 * @parent jquerymx
	 * @plugin jquery/controller
	 * @download  http://jmvcsite.heroku.com/pluginify?plugins[]=jquery/controller/controller.js
	 * @test jquery/controller/qunit.html
	 * @inherits jQuery.Class
	 * 
	 * jQuery.Controller helps create organized, memory-leak free, rapidly performing
	 * jQuery widgets.  Its extreme flexibility allows it to serve as both
	 * a traditional View and a traditional Controller.  
	 * 
	 * This means it is used to
	 * create things like tabs, grids, and contextmenus as well as 
	 * organizing them into higher-order business rules.
	 * 
	 * Controllers make your code deterministic, reusable, organized and can tear themselves 
	 * down auto-magically. Read about [http://jupiterjs.com/news/writing-the-perfect-jquery-plugin 
	 * the theory behind controller] and 
	 * a [http://jupiterjs.com/news/organize-jquery-widgets-with-jquery-controller walkthrough of its features]
	 * on Jupiter's blog. [mvc.controller Get Started with jQueryMX] also has a great walkthrough.
	 * 
	 * Controller inherits from [jQuery.Class $.Class] and makes heavy use of 
	 * [http://api.jquery.com/delegate/ event delegation]. Make sure 
	 * you understand these concepts before using it.
	 * 
	 * ## Basic Example
	 * 
	 * Instead of
	 * 
	 * 
	 *     $(function(){
	 *       $('#tabs').click(someCallbackFunction1)
	 *       $('#tabs .tab').click(someCallbackFunction2)
	 *       $('#tabs .delete click').click(someCallbackFunction3)
	 *     });
	 * 
	 * do this
	 * 
	 *     $.Controller('Tabs',{
	 *       click: function() {...},
	 *       '.tab click' : function() {...},
	 *       '.delete click' : function() {...}
	 *     })
	 *     $('#tabs').tabs();
	 * 
	 * 
	 * ## Tabs Example
	 * 
	 * @demo jquery/controller/controller.html
	 * 
	 * ## Using Controller
	 * 
	 * Controller helps you build and organize jQuery plugins.  It can be used
	 * to build simple widgets, like a slider, or organize multiple
	 * widgets into something greater.
	 * 
	 * To understand how to use Controller, you need to understand 
	 * the typical lifecycle of a jQuery widget and how that maps to
	 * controller's functionality:
	 * 
	 * ### A controller class is created.
	 *       
	 *     $.Controller("MyWidget",
	 *     {
	 *       defaults :  {
	 *         message : "Remove Me"
	 *       }
	 *     },
	 *     {
	 *       init : function(rawEl, rawOptions){ 
	 *         this.element.append(
	 *            "<div>"+this.options.message+"</div>"
	 *           );
	 *       },
	 *       "div click" : function(div, ev){ 
	 *         div.remove();
	 *       }  
	 *     }) 
	 *     
	 * This creates a <code>$.fn.my_widget</code> jQuery helper function
	 * that can be used to create a new controller instance on an element. Find
	 * more information [jquery.controller.plugin  here] about the plugin gets created 
	 * and the rules around its name.
	 *       
	 * ### An instance of controller is created on an element
	 * 
	 *     $('.thing').my_widget(options) // calls new MyWidget(el, options)
	 * 
	 * This calls <code>new MyWidget(el, options)</code> on 
	 * each <code>'.thing'</code> element.  
	 *     
	 * When a new [jQuery.Class Class] instance is created, it calls the class's
	 * prototype setup and init methods. Controller's [jQuery.Controller.prototype.setup setup]
	 * method:
	 *     
	 *  - Sets [jQuery.Controller.prototype.element this.element] and adds the controller's name to element's className.
	 *  - Merges passed in options with defaults object and sets it as [jQuery.Controller.prototype.options this.options]
	 *  - Saves a reference to the controller in <code>$.data</code>.
	 *  - [jquery.controller.listening Binds all event handler methods].
	 *   
	 * 
	 * ### The controller responds to events
	 * 
	 * Typically, Controller event handlers are automatically bound.  However, there are
	 * multiple ways to [jquery.controller.listening listen to events] with a controller.
	 * 
	 * Once an event does happen, the callback function is always called with 'this' 
	 * referencing the controller instance.  This makes it easy to use helper functions and
	 * save state on the controller.
	 * 
	 * 
	 * ### The widget is destroyed
	 * 
	 * If the element is removed from the page, the 
	 * controller's [jQuery.Controller.prototype.destroy] method is called.
	 * This is a great place to put any additional teardown functionality.
	 * 
	 * You can also teardown a controller programatically like:
	 * 
	 *     $('.thing').my_widget('destroy');
	 * 
	 * ## Todos Example
	 * 
	 * Lets look at a very basic example - 
	 * a list of todos and a button you want to click to create a new todo.
	 * Your HTML might look like:
	 * 
	 * @codestart html
	 * &lt;div id='todos'>
	 *  &lt;ol>
	 *    &lt;li class="todo">Laundry&lt;/li>
	 *    &lt;li class="todo">Dishes&lt;/li>
	 *    &lt;li class="todo">Walk Dog&lt;/li>
	 *  &lt;/ol>
	 *  &lt;a class="create">Create&lt;/a>
	 * &lt;/div>
	 * @codeend
	 * 
	 * To add a mousover effect and create todos, your controller might look like:
	 * 
	 *     $.Controller('Todos',{
	 *       ".todo mouseover" : function( el, ev ) {
	 *         el.css("backgroundColor","red")
	 *       },
	 *       ".todo mouseout" : function( el, ev ) {
	 *         el.css("backgroundColor","")
	 *       },
	 *       ".create click" : function() {
	 *         this.find("ol").append("&lt;li class='todo'>New Todo&lt;/li>"); 
	 *       }
	 *     })
	 * 
	 * Now that you've created the controller class, you've must attach the event handlers on the '#todos' div by
	 * creating [jQuery.Controller.prototype.setup|a new controller instance].  There are 2 ways of doing this.
	 * 
	 * @codestart
	 * //1. Create a new controller directly:
	 * new Todos($('#todos'));
	 * //2. Use jQuery function
	 * $('#todos').todos();
	 * @codeend
	 * 
	 * ## Controller Initialization
	 * 
	 * It can be extremely useful to add an init method with 
	 * setup functionality for your widget.
	 * 
	 * In the following example, I create a controller that when created, will put a message as the content of the element:
	 * 
	 *     $.Controller("SpecialController",
	 *     {
	 *       init: function( el, message ) {
	 *         this.element.html(message)
	 *       }
	 *     })
	 *     $(".special").special("Hello World")
	 * 
	 * ## Removing Controllers
	 * 
	 * Controller removal is built into jQuery.  So to remove a controller, you just have to remove its element:
	 * 
	 * @codestart
	 * $(".special_controller").remove()
	 * $("#containsControllers").html("")
	 * @codeend
	 * 
	 * It's important to note that if you use raw DOM methods (<code>innerHTML, removeChild</code>), the controllers won't be destroyed.
	 * 
	 * If you just want to remove controller functionality, call destroy on the controller instance:
	 * 
	 * @codestart
	 * $(".special_controller").controller().destroy()
	 * @codeend
	 * 
	 * ## Accessing Controllers
	 * 
	 * Often you need to get a reference to a controller, there are a few ways of doing that.  For the 
	 * following example, we assume there are 2 elements with <code>className="special"</code>.
	 * 
	 * @codestart
	 * //creates 2 foo controllers
	 * $(".special").foo()
	 * 
	 * //creates 2 bar controllers
	 * $(".special").bar()
	 * 
	 * //gets all controllers on all elements:
	 * $(".special").controllers() //-> [foo, bar, foo, bar]
	 * 
	 * //gets only foo controllers
	 * $(".special").controllers(FooController) //-> [foo, foo]
	 * 
	 * //gets all bar controllers
	 * $(".special").controllers(BarController) //-> [bar, bar]
	 * 
	 * //gets first controller
	 * $(".special").controller() //-> foo
	 * 
	 * //gets foo controller via data
	 * $(".special").data("controllers")["FooController"] //-> foo
	 * @codeend
	 * 
	 * ## Calling methods on Controllers
	 * 
	 * Once you have a reference to an element, you can call methods on it.  However, Controller has
	 * a few shortcuts:
	 * 
	 * @codestart
	 * //creates foo controller
	 * $(".special").foo({name: "value"})
	 * 
	 * //calls FooController.prototype.update
	 * $(".special").foo({name: "value2"})
	 * 
	 * //calls FooController.prototype.bar
	 * $(".special").foo("bar","something I want to pass")
	 * @codeend
	 * 
	 * These methods let you call one controller from another controller.
	 * 
	 */
	$.Class("jQuery.Controller",
	/** 
	 * @Static
	 */
	{
		/**
		 * Does 2 things:
		 * 
		 *   - Creates a jQuery helper for this controller.</li>
		 *   - Calculates and caches which functions listen for events.</li>
		 *    
		 * ### jQuery Helper Naming Examples
		 * 
		 * 
		 *     "TaskController" -> $().task_controller()
		 *     "Controllers.Task" -> $().controllers_task()
		 * 
		 */
		setup: function() {
			// Allow contollers to inherit "defaults" from superclasses as it done in $.Class
			this._super.apply(this, arguments);

			// if you didn't provide a name, or are controller, don't do anything
			if (!this.shortName || this.fullName == "jQuery.Controller" ) {
				return;
			}
			// cache the underscored names
			this._fullName = underscoreAndRemoveController(this.fullName);
			this._shortName = underscoreAndRemoveController(this.shortName);

			var controller = this,
				/**
				 * @attribute pluginName
				 * Setting the <code>pluginName</code> property allows you
				 * to change the jQuery plugin helper name from its 
				 * default value.
				 * 
				 *     $.Controller("Mxui.Layout.Fill",{
				 *       pluginName: "fillWith"
				 *     },{});
				 *     
				 *     $("#foo").fillWith();
				 */
				pluginname = this.pluginName || this._fullName,
				funcName, forLint;

			// create jQuery plugin
			if (!$.fn[pluginname] ) {
				$.fn[pluginname] = function( options ) {

					var args = makeArray(arguments),
						//if the arg is a method on this controller
						isMethod = typeof options == "string" && isFunction(controller[STR_PROTOTYPE][options]),
						meth = args[0];
					return this.each(function() {
						//check if created
						var controllers = data(this),
							//plugin is actually the controller instance
							plugin = controllers && controllers[pluginname];

						if ( plugin ) {
							if ( isMethod ) {
								// call a method on the controller with the remaining args
								plugin[meth].apply(plugin, args.slice(1));
							} else {
								// call the plugin's update method
								plugin.update.apply(plugin, args);
							}

						} else {
							//create a new controller instance
							controller.newInstance.apply(controller, [this].concat(args));
						}
					});
				};
			}

			// make sure listensTo is an array
			
			// calculate and cache actions
			this.actions = {};

			for ( funcName in this[STR_PROTOTYPE] ) {
				if (funcName == 'constructor' || !isFunction(this[STR_PROTOTYPE][funcName]) ) {
					continue;
				}
				if ( this._isAction(funcName) ) {
					this.actions[funcName] = this._action(funcName);
				}
			}
		},
		hookup: function( el ) {
			return new this(el);
		},

		/**
		 * @hide
		 * @param {String} methodName a prototype function
		 * @return {Boolean} truthy if an action or not
		 */
		_isAction: function( methodName ) {
			if ( actionMatcher.test(methodName) ) {
				return true;
			} else {
				return $.inArray(methodName, this.listensTo) > -1 || $.event.special[methodName] || processors[methodName];
			}

		},
		/**
		 * @hide
		 * This takes a method name and the options passed to a controller
		 * and tries to return the data necessary to pass to a processor
		 * (something that binds things).
		 * 
		 * For performance reasons, this called twice.  First, it is called when 
		 * the Controller class is created.  If the methodName is templated
		 * like : "{window} foo", it returns null.  If it is not templated
		 * it returns event binding data.
		 * 
		 * The resulting data is added to this.actions.
		 * 
		 * When a controller instance is created, _action is called again, but only
		 * on templated actions.  
		 * 
		 * @param {Object} methodName the method that will be bound
		 * @param {Object} [options] first param merged with class default options
		 * @return {Object} null or the processor and pre-split parts.  
		 * The processor is what does the binding/subscribing.
		 */
		_action: function( methodName, options ) {
			// reset the test index
			parameterReplacer.lastIndex = 0;
			
			//if we don't have options (a controller instance), we'll run this later
			if (!options && parameterReplacer.test(methodName) ) {
				return null;
			}
			// If we have options, run sub to replace templates "{}" with a value from the options
			// or the window
			var convertedName = options ? Str.sub(methodName, [options, window]) : methodName,
				
				// If a "{}" resolves to an object, convertedName will be an array
				arr = isArray(convertedName),
				
				// get the parts of the function = [convertedName, delegatePart, eventPart]
				parts = (arr ? convertedName[1] : convertedName).match(breaker),
				event = parts[2],
				processor = processors[event] || basicProcessor;
			return {
				processor: processor,
				parts: parts,
				delegate : arr ? convertedName[0] : undefined
			};
		},
		/**
		 * @attribute processors
		 * An object of {eventName : function} pairs that Controller uses to hook up events
		 * auto-magically.  A processor function looks like:
		 * 
		 *     jQuery.Controller.processors.
		 *       myprocessor = function( el, event, selector, cb, controller ) {
		 *          //el - the controller's element
		 *          //event - the event (myprocessor)
		 *          //selector - the left of the selector
		 *          //cb - the function to call
		 *          //controller - the binding controller
		 *       };
		 * 
		 * This would bind anything like: "foo~3242 myprocessor".
		 * 
		 * The processor must return a function that when called, 
		 * unbinds the event handler.
		 * 
		 * Controller already has processors for the following events:
		 * 
		 *   - change 
		 *   - click 
		 *   - contextmenu 
		 *   - dblclick 
		 *   - focusin
		 *   - focusout
		 *   - keydown 
		 *   - keyup 
		 *   - keypress 
		 *   - mousedown 
		 *   - mouseenter
		 *   - mouseleave
		 *   - mousemove 
		 *   - mouseout 
		 *   - mouseover 
		 *   - mouseup 
		 *   - reset 
		 *   - resize 
		 *   - scroll 
		 *   - select 
		 *   - submit  
		 * 
		 * Listen to events on the document or window 
		 * with templated event handlers:
		 * 
		 *
		 *     $.Controller('Sized',{
		 *       "{window} resize" : function(){
		 *         this.element.width(this.element.parent().width() / 2);
		 *       }
		 *     });
		 *     
		 *     $('.foo').sized();
		 */
		processors: {},
		/**
		 * @attribute listensTo
		 * An array of special events this controller 
		 * listens too.  You only need to add event names that
		 * are whole words (ie have no special characters).
		 * 
		 *     $.Controller('TabPanel',{
		 *       listensTo : ['show']
		 *     },{
		 *       'show' : function(){
		 *         this.element.show();
		 *       }
		 *     })
		 *     
		 *     $('.foo').tab_panel().trigger("show");
		 * 
		 */
		listensTo: [],
		/**
		 * @attribute defaults
		 * A object of name-value pairs that act as default values for a controller's 
		 * [jQuery.Controller.prototype.options options].
		 * 
		 *     $.Controller("Message",
		 *     {
		 *       defaults : {
		 *         message : "Hello World"
		 *       }
		 *     },{
		 *       init : function(){
		 *         this.element.text(this.options.message);
		 *       }
		 *     })
		 *     
		 *     $("#el1").message(); //writes "Hello World"
		 *     $("#el12").message({message: "hi"}); //writes hi
		 *     
		 * In [jQuery.Controller.prototype.setup setup] the options passed to the controller
		 * are merged with defaults.  This is not a deep merge.
		 */
		defaults: {}
	},
	/** 
	 * @Prototype
	 */
	{
		/**
		 * Setup is where most of controller's magic happens.  It does the following:
		 * 
		 * ### 1. Sets this.element
		 * 
		 * The first parameter passed to new Controller(el, options) is expected to be 
		 * an element.  This gets converted to a jQuery wrapped element and set as
		 * [jQuery.Controller.prototype.element this.element].
		 * 
		 * ### 2. Adds the controller's name to the element's className.
		 * 
		 * Controller adds it's plugin name to the element's className for easier 
		 * debugging.  For example, if your Controller is named "Foo.Bar", it adds
		 * "foo_bar" to the className.
		 * 
		 * ### 3. Saves the controller in $.data
		 * 
		 * A reference to the controller instance is saved in $.data.  You can find 
		 * instances of "Foo.Bar" like: 
		 * 
		 *     $("#el").data("controllers")['foo_bar'].
		 * 
		 * ### Binds event handlers
		 * 
		 * Setup does the event binding described in [jquery.controller.listening Listening To Events].
		 * 
		 * @param {HTMLElement} element the element this instance operates on.
		 * @param {Object} [options] option values for the controller.  These get added to
		 * this.options and merged with [jQuery.Controller.static.defaults defaults].
		 * @return {Array} return an array if you wan to change what init is called with. By
		 * default it is called with the element and options passed to the controller.
		 */
		setup: function( element, options ) {
			var funcName, ready, cls = this[STR_CONSTRUCTOR];

			//want the raw element here
			element = element.jquery ? element[0] : element;

			//set element and className on element
			var pluginname = cls.pluginName || cls._fullName;

			//set element and className on element
			this.element = $(element).addClass(pluginname);

			//set in data
			(data(element) || data(element, {}))[pluginname] = this;

			
			/**
			 * @attribute options
			 * 
			 * Options are used to configure an controller.  They are
			 * the 2nd argument
			 * passed to a controller (or the first argument passed to the 
			 * [jquery.controller.plugin controller's jQuery plugin]).
			 * 
			 * For example:
			 * 
			 *     $.Controller('Hello')
			 *     
			 *     var h1 = new Hello($('#content1'), {message: 'World'} );
			 *     equal( h1.options.message , "World" )
			 *     
			 *     var h2 = $('#content2').hello({message: 'There'})
			 *                            .controller();
			 *     equal( h2.options.message , "There" )
			 * 
			 * Options are merged with [jQuery.Controller.static.defaults defaults] in
			 * [jQuery.Controller.prototype.setup setup].
			 * 
			 * For example:
			 * 
			 *     $.Controller("Tabs", 
			 *     {
			 *        defaults : {
			 *          activeClass: "ui-active-state"
			 *        }
			 *     },
			 *     {
			 *        init : function(){
			 *          this.element.addClass(this.options.activeClass);
			 *        }
			 *     })
			 *     
			 *     $("#tabs1").tabs()                         // adds 'ui-active-state'
			 *     $("#tabs2").tabs({activeClass : 'active'}) // adds 'active'
			 *     
			 * Options are typically updated by calling 
			 * [jQuery.Controller.prototype.update update];
			 *
			 */
			this.options = extend( extend(true, {}, cls.defaults), options);

			

			/**
			 * @attribute called
			 * String name of current function being called on controller instance.  This is 
			 * used for picking the right view in render.
			 * @hide
			 */
			this.called = "init";

			// bind all event handlers
			this.bind();

			/**
			 * @attribute element
			 * The controller instance's delegated element. This 
			 * is set by [jQuery.Controller.prototype.setup setup]. It 
			 * is a jQuery wrapped element.
			 * 
			 * For example, if I add MyWidget to a '#myelement' element like:
			 * 
			 *     $.Controller("MyWidget",{
			 *       init : function(){
			 *         this.element.css("color","red")
			 *       }
			 *     })
			 *     
			 *     $("#myelement").my_widget()
			 * 
			 * MyWidget will turn #myelement's font color red.
			 * 
			 * ## Using a different element.
			 * 
			 * Sometimes, you want a different element to be this.element.  A
			 * very common example is making progressively enhanced form widgets.
			 * 
			 * To change this.element, overwrite Controller's setup method like:
			 * 
			 *     $.Controller("Combobox",{
			 *       setup : function(el, options){
			 *          this.oldElement = $(el);
			 *          var newEl = $('<div/>');
			 *          this.oldElement.wrap(newEl);
			 *          this._super(newEl, options);
			 *       },
			 *       init : function(){
			 *          this.element //-> the div
			 *       },
			 *       ".option click" : function(){
			 *         // event handler bound on the div
			 *       },
			 *       destroy : function(){
			 *          var div = this.element; //save reference
			 *          this._super();
			 *          div.replaceWith(this.oldElement);
			 *       }
			 *     }
			 */
			return this.element;
		},
		/**
		 * Bind attaches event handlers that will be 
		 * removed when the controller is removed.  
		 * 
		 * This used to be a good way to listen to events outside the controller's
		 * [jQuery.Controller.prototype.element element].  However,
		 * using templated event listeners is now the prefered way of doing this.
		 * 
		 * ### Example:
		 * 
		 *     init: function() {
		 *        // calls somethingClicked(el,ev)
		 *        this.bind('click','somethingClicked') 
		 *     
		 *        // calls function when the window is clicked
		 *        this.bind(window, 'click', function(ev){
		 *          //do something
		 *        })
		 *     },
		 *     somethingClicked: function( el, ev ) {
		 *       
		 *     }
		 * 
		 * @param {HTMLElement|jQuery.fn|Object} [el=this.element] 
		 * The element to be bound.  If an eventName is provided,
		 * the controller's element is used instead.
		 * 
		 * @param {String} eventName The event to listen for.
		 * @param {Function|String} func A callback function or the String name of a controller function.  If a controller
		 * function name is given, the controller function is called back with the bound element and event as the first
		 * and second parameter.  Otherwise the function is called back like a normal bind.
		 * @return {Integer} The id of the binding in this._bindings
		 */
		bind: function( el, eventName, func ) {
			if( el === undefined ) {
				//adds bindings
				this._bindings = [];
				//go through the cached list of actions and use the processor to bind
				
				var cls = this[STR_CONSTRUCTOR],
					bindings = this._bindings,
					actions = cls.actions,
					element = this.element;
					
				for ( funcName in actions ) {
					if ( actions.hasOwnProperty(funcName) ) {
						ready = actions[funcName] || cls._action(funcName, this.options);
						bindings.push(
							ready.processor(ready.delegate || element, 
							                ready.parts[2], 
											ready.parts[1], 
											funcName, 
											this));
					}
				}
	
	
				//setup to be destroyed ... don't bind b/c we don't want to remove it
				var destroyCB = shifter(this,"destroy");
				element.bind("destroyed", destroyCB);
				bindings.push(function( el ) {
					$(el).unbind("destroyed", destroyCB);
				});
				return bindings.length;
			}
			if ( typeof el == 'string' ) {
				func = eventName;
				eventName = el;
				el = this.element;
			}
			return this._binder(el, eventName, func);
		},
		_binder: function( el, eventName, func, selector ) {
			if ( typeof func == 'string' ) {
				func = shifter(this,func);
			}
			this._bindings.push(binder(el, eventName, func, selector));
			return this._bindings.length;
		},
		_unbind : function(){
			var el = this.element[0];
			each(this._bindings, function( key, value ) {
				value(el);
			});
			//adds bindings
			this._bindings = [];
		},
		/**
		 * Delegate will delegate on an elememt and will be undelegated when the controller is removed.
		 * This is a good way to delegate on elements not in a controller's element.<br/>
		 * <h3>Example:</h3>
		 * @codestart
		 * // calls function when the any 'a.foo' is clicked.
		 * this.delegate(document.documentElement,'a.foo', 'click', function(ev){
		 *   //do something
		 * })
		 * @codeend
		 * @param {HTMLElement|jQuery.fn} [element=this.element] the element to delegate from
		 * @param {String} selector the css selector
		 * @param {String} eventName the event to bind to
		 * @param {Function|String} func A callback function or the String name of a controller function.  If a controller
		 * function name is given, the controller function is called back with the bound element and event as the first
		 * and second parameter.  Otherwise the function is called back like a normal bind.
		 * @return {Integer} The id of the binding in this._bindings
		 */
		delegate: function( element, selector, eventName, func ) {
			if ( typeof element == 'string' ) {
				func = eventName;
				eventName = selector;
				selector = element;
				element = this.element;
			}
			return this._binder(element, eventName, func, selector);
		},
		/**
		 * Update extends [jQuery.Controller.prototype.options this.options] 
		 * with the `options` argument and rebinds all events.  It basically
		 * re-configures the controller.
		 * 
		 * For example, the following controller wraps a recipe form. When the form
		 * is submitted, it creates the recipe on the server.  When the recipe
		 * is `created`, it resets the form with a new instance.
		 * 
		 *     $.Controller('Creator',{
		 *       "{recipe} created" : function(){
		 *         this.update({recipe : new Recipe()});
		 *         this.element[0].reset();
		 *         this.find("[type=submit]").val("Create Recipe")
		 *       },
		 *       "submit" : function(el, ev){
		 *         ev.preventDefault();
		 *         var recipe = this.options.recipe;
		 *         recipe.attrs( this.element.formParams() );
		 *         this.find("[type=submit]").val("Saving...")
		 *         recipe.save();
		 *       }
		 *     });
		 *     $('#createRecipes').creator({recipe : new Recipe()})
		 * 
		 * 
		 * @demo jquery/controller/demo-update.html
		 * 
		 * Update is called if a controller's [jquery.controller.plugin jQuery helper] is 
		 * called on an element that already has a controller instance
		 * of the same type. 
		 * 
		 * For example, a widget that listens for model updates
		 * and updates it's html would look like.  
		 * 
		 *     $.Controller('Updater',{
		 *       // when the controller is created, update the html
		 *       init : function(){
		 *         this.updateView();
		 *       },
		 *       
		 *       // update the html with a template
		 *       updateView : function(){
		 *         this.element.html( "content.ejs",
		 *                            this.options.model ); 
		 *       },
		 *       
		 *       // if the model is updated
		 *       "{model} updated" : function(){
		 *         this.updateView();
		 *       },
		 *       update : function(options){
		 *         // make sure you call super
		 *         this._super(options);
		 *          
		 *         this.updateView();
		 *       }
		 *     })
		 * 
		 *     // create the controller
		 *     // this calls init
		 *     $('#item').updater({model: recipe1});
		 *     
		 *     // later, update that model
		 *     // this calls "{model} updated"
		 *     recipe1.update({name: "something new"});
		 *     
		 *     // later, update the controller with a new recipe
		 *     // this calls update
		 *     $('#item').updater({model: recipe2});
		 *     
		 *     // later, update the new model
		 *     // this calls "{model} updated"
		 *     recipe2.update({name: "something newer"});
		 * 
		 * _NOTE:_ If you overwrite `update`, you probably need to call
		 * this._super.
		 * 
		 * ### Example
		 * 
		 *     $.Controller("Thing",{
		 *       init: function( el, options ) {
		 *         alert( 'init:'+this.options.prop )
		 *       },
		 *       update: function( options ) {
		 *         this._super(options);
		 *         alert('update:'+this.options.prop)
		 *       }
		 *     });
		 *     $('#myel').thing({prop : 'val1'}); // alerts init:val1
		 *     $('#myel').thing({prop : 'val2'}); // alerts update:val2
		 * 
		 * @param {Object} options A list of options to merge with 
		 * [jQuery.Controller.prototype.options this.options].  Often, this method
		 * is called by the [jquery.controller.plugin jQuery helper function].
		 */
		update: function( options ) {
			extend(this.options, options);
			this._unbind();
			this.bind();
		},
		/**
		 * Destroy unbinds and undelegates all event handlers on this controller, 
		 * and prevents memory leaks.  This is called automatically
		 * if the element is removed.  You can overwrite it to add your own
		 * teardown functionality:
		 * 
		 *     $.Controller("ChangeText",{
		 *       init : function(){
		 *         this.oldText = this.element.text();
		 *         this.element.text("Changed!!!")
		 *       },
		 *       destroy : function(){
		 *         this.element.text(this.oldText);
		 *         this._super(); //Always call this!
		 *     })
		 * 
		 * Make sure you always call <code>_super</code> when overwriting
		 * controller's destroy event.  The base destroy functionality unbinds
		 * all event handlers the controller has created.
		 * 
		 * You could call destroy manually on an element with ChangeText
		 * added like:
		 * 
		 *     $("#changed").change_text("destroy");
		 * 
		 */
		destroy: function() {
			if ( this._destroyed ) {
				throw this[STR_CONSTRUCTOR].shortName + " controller already deleted";
			}
			var self = this,
				fname = this[STR_CONSTRUCTOR].pluginName || this[STR_CONSTRUCTOR]._fullName,
				controllers;
			
			// mark as destroyed
			this._destroyed = true;
			
			// remove the className
			this.element.removeClass(fname);

			// unbind bindings
			this._unbind();
			// clean up
			delete this._actions;

			delete this.element.data("controllers")[fname];
			
			$(this).triggerHandler("destroyed"); //in case we want to know if the controller is removed
			
			this.element = null;
		},
		/**
		 * Queries from the controller's element.
		 * @codestart
		 * ".destroy_all click" : function() {
		 *    this.find(".todos").remove();
		 * }
		 * @codeend
		 * @param {String} selector selection string
		 * @return {jQuery.fn} returns the matched elements
		 */
		find: function( selector ) {
			return this.element.find(selector);
		},
		//tells callback to set called on this.  I hate this.
		_set_called: true
	});

	var processors = $.Controller.processors,

	//------------- PROCESSSORS -----------------------------
	//processors do the binding.  They return a function that
	//unbinds when called.
	//the basic processor that binds events
	basicProcessor = function( el, event, selector, methodName, controller ) {
		return binder(el, event, shifter(controller, methodName), selector);
	};




	//set commong events to be processed as a basicProcessor
	each("change click contextmenu dblclick keydown keyup keypress mousedown mousemove mouseout mouseover mouseup reset resize scroll select submit focusin focusout mouseenter mouseleave".split(" "), function( i, v ) {
		processors[v] = basicProcessor;
	});
	/**
	 *  @add jQuery.fn
	 */

	//used to determine if a controller instance is one of controllers
	//controllers can be strings or classes
	var i, isAControllerOf = function( instance, controllers ) {
		for ( i = 0; i < controllers.length; i++ ) {
			if ( typeof controllers[i] == 'string' ? instance[STR_CONSTRUCTOR]._shortName == controllers[i] : instance instanceof controllers[i] ) {
				return true;
			}
		}
		return false;
	};
	$.fn.extend({
		/**
		 * @function controllers
		 * Gets all controllers in the jQuery element.
		 * @return {Array} an array of controller instances.
		 */
		controllers: function() {
			var controllerNames = makeArray(arguments),
				instances = [],
				controllers, c, cname;
			//check if arguments
			this.each(function() {
	
				controllers = $.data(this, "controllers");
				for ( cname in controllers ) {
					if ( controllers.hasOwnProperty(cname) ) {
						c = controllers[cname];
						if (!controllerNames.length || isAControllerOf(c, controllerNames) ) {
							instances.push(c);
						}
					}
				}
			});
			return instances;
		},
		/**
		 * @function controller
		 * Gets a controller in the jQuery element.  With no arguments, returns the first one found.
		 * @param {Object} controller (optional) if exists, the first controller instance with this class type will be returned.
		 * @return {jQuery.Controller} the first controller.
		 */
		controller: function( controller ) {
			return this.controllers.apply(this, arguments)[0];
		}
	});
	

});;
steal.loaded('jquery/controller/controller.js');
/**
 *  @add jQuery.fn
 */
steal("jquery/dom").then(function( $ ) {
	var radioCheck = /radio|checkbox/i,
		keyBreaker = /[^\[\]]+/g,
		numberMatcher = /^[\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?$/;

	var isNumber = function( value ) {
		if ( typeof value == 'number' ) {
			return true;
		}

		if ( typeof value != 'string' ) {
			return false;
		}

		return value.match(numberMatcher);
	};

	$.fn.extend({
		/**
		 * @parent dom
		 * @download http://jmvcsite.heroku.com/pluginify?plugins[]=jquery/dom/form_params/form_params.js
		 * @plugin jquery/dom/form_params
		 * @test jquery/dom/form_params/qunit.html
		 * 
		 * Returns an object of name-value pairs that represents values in a form.  
		 * It is able to nest values whose element's name has square brackets.
		 * 
		 * Example html:
		 * @codestart html
		 * &lt;form>
		 *   &lt;input name="foo[bar]" value='2'/>
		 *   &lt;input name="foo[ced]" value='4'/>
		 * &lt;form/>
		 * @codeend
		 * Example code:
		 * 
		 *     $('form').formParams() //-> { foo:{bar:'2', ced: '4'} }
		 * 
		 * 
		 * @demo jquery/dom/form_params/form_params.html
		 * 
		 * @param {Boolean} [convert=false] True if strings that look like numbers and booleans should be converted.  Defaults to true.
		 * @return {Object} An object of name-value pairs.
		 */
		formParams: function( convert ) {
			if ( this[0].nodeName.toLowerCase() == 'form' && this[0].elements ) {

				return jQuery(jQuery.makeArray(this[0].elements)).getParams(convert);
			}
			return jQuery("input[name], textarea[name], select[name]", this[0]).getParams(convert);
		},
		getParams: function( convert ) {
			var data = {},
				current;

			convert = convert === undefined ? false : convert;

			this.each(function() {
				var el = this,
					type = el.type && el.type.toLowerCase();
				//if we are submit, ignore
				if ((type == 'submit') || !el.name || el.name.indexOf("_") == 0) {
					return;
				}

				var key = el.name,
					value = $.data(el, "value") || $.fn.val.call([el]),
					isRadioCheck = radioCheck.test(el.type),
					parts = key.match(keyBreaker),
					write = !isRadioCheck || !! el.checked,
					//make an array of values
					lastPart;

				if ( convert ) {
					if ( isNumber(value) ) {
						value = parseFloat(value);
					} else if ( value === 'true') {
						value = true;
					} else if ( value === 'false' ) {
						value = false;
					}
					if(value === '') {
						value = undefined;
					}
				}

				// go through and create nested objects
				current = data;
				for ( var i = 0; i < parts.length - 1; i++ ) {
					if (!current[parts[i]] ) {
						current[parts[i]] = {};
					}
					current = current[parts[i]];
				}
				lastPart = parts[parts.length - 1];

				//now we are on the last part, set the value
				if ( lastPart in current && type === "checkbox" ) {
					if (!$.isArray(current[lastPart]) ) {
						current[lastPart] = current[lastPart] === undefined ? [] : [current[lastPart]];
					}
					if ( write ) {
						current[lastPart].push(value);
					}
				} else if ( write || !current[lastPart] ) {
					current[lastPart] = write ? value : undefined;
				}

			});
			return data;
		}
	});

});;
steal.loaded('jquery/dom/form_params/form_params.js');
steal('jquery/controller', 'jquery/view').then(function( $ ) {
	jQuery.Controller.getFolder = function() {
		return jQuery.String.underscore(this.fullName.replace(/\./g, "/")).replace("/Controllers", "");
	};

	jQuery.Controller._calculatePosition = function( Class, view, action_name ) {
		
		var classParts = Class.fullName.split('.'),
			classPartsWithoutPrefix = classParts.slice(0);
			classPartsWithoutPrefix.splice(0, 2); // Remove prefix (usually 2 elements)

		var classPartsWithoutPrefixSlashes = classPartsWithoutPrefix.join('/'),
			hasControllers = (classParts.length > 2) && classParts[1] == 'Controllers',
			path = hasControllers? jQuery.String.underscore(classParts[0]): jQuery.String.underscore(classParts.join("/")),
			controller_name = jQuery.String.underscore(classPartsWithoutPrefix.join('/')).toLowerCase(),
			suffix = (typeof view == "string" && /\.[\w\d]+$/.test(view)) ? "" : jQuery.View.ext;
			
		//calculate view
		if ( typeof view == "string" ) {
			if ( view.substr(0, 2) == "//" ) { //leave where it is
			} else {
				view = "//" + new steal.File('views/' + (view.indexOf('/') !== -1 ? view : (hasControllers ? controller_name + '/' : "") + view)).joinFrom(path) + suffix;
			}
		} else if (!view ) {
			view = "//" + new steal.File('views/' + (hasControllers ? controller_name + '/' : "") + action_name.replace(/\.|#/g, '').replace(/ /g, '_')).joinFrom(path) + suffix;
		}
		return view;
	};
	var calculateHelpers = function( myhelpers ) {
		var helpers = {};
		if ( myhelpers ) {
			if ( jQuery.isArray(myhelpers) ) {
				for ( var h = 0; h < myhelpers.length; h++ ) {
					jQuery.extend(helpers, myhelpers[h]);
				}
			}
			else {
				jQuery.extend(helpers, myhelpers);
			}
		} else {
			if ( this._default_helpers ) {
				helpers = this._default_helpers;
			}
			//load from name
			var current = window;
			var parts = this.constructor.fullName.split(/\./);
			for ( var i = 0; i < parts.length; i++ ) {
				if ( typeof current.Helpers == 'object' ) {
					jQuery.extend(helpers, current.Helpers);
				}
				current = current[parts[i]];
			}
			if ( typeof current.Helpers == 'object' ) {
				jQuery.extend(helpers, current.Helpers);
			}
			this._default_helpers = helpers;
		}
		return helpers;
	};

	/**
	 * @add jQuery.Controller.prototype
	 */

	jQuery.Controller.prototype.
	/**
	 * @tag view
	 * Renders a View template with the controller instance. If the first argument
	 * is not supplied, 
	 * it looks for a view in /views/controller_name/action_name.ejs.
	 * If data is not provided, it uses the controller instance as data.
	 * @codestart
	 * TasksController = $.Controller.extend('TasksController',{
	 *   click: function( el ) {
	 *     // renders with views/tasks/click.ejs
	 *     el.html( this.view() ) 
	 *     // renders with views/tasks/under.ejs
	 *     el.after( this.view("under", [1,2]) );
	 *     // renders with views/tasks/under.micro 
	 *     el.after( this.view("under.micro", [1,2]) );
	 *     // renders with views/shared/top.ejs
	 *     el.before( this.view("shared/top", {phrase: "hi"}) );
	 *   }
	 * })
	 * @codeend
	 * @plugin jquery/controller/view
	 * @return {String} the rendered result of the view.
	 * @param {String} [view]  The view you are going to render.  If a view isn't explicity given
	 * this function will try to guess at the correct view as show in the example code above.
	 * @param {Object} [data]  data to be provided to the view.  If not present, the controller instance 
	 * is used.
	 * @param {Object} [myhelpers] an object of helpers that will be available in the view.  If not present
	 * this controller class's "Helpers" property will be used.
	 *
	 */
	view = function( view, data, myhelpers ) {
		//shift args if no view is provided
		if ( typeof view != "string" && !myhelpers ) {
			myhelpers = data;
			data = view;
			view = null;
		}
		//guess from controller name
		view = jQuery.Controller._calculatePosition(this.Class, view, this.called);

		//calculate data
		data = data || this;

		//calculate helpers
		var helpers = calculateHelpers.call(this, myhelpers);


		return jQuery.View(view, data, helpers); //what about controllers in other folders?
	};


});;
steal.loaded('jquery/controller/view/view.js');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_index_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<a data-icon=\"plus\" data-role=\"button\" href=\"risk/pages/newtask.htm\">New work task</a>\n");
___v1ew.push("\n");
___v1ew.push("<a data-icon=\"grid\" data-role=\"button\" href=\"risk/pages/inprogress.htm\">In progress tasks</a>\n");
___v1ew.push("\n");
___v1ew.push("<a data-icon=\"check\" data-role=\"button\" href=\"risk/pages/completed.htm\">Completed assessments</a>\n");
___v1ew.push("\n");
___v1ew.push("<a data-icon=\"info\" data-role=\"button\" href=\"risk/pages/instructions.htm\">Instructions</a>");; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/index/init.ejs');
/**
 * @add jQuery.event.special
 */
steal('jquery/event').then(function( $ ) {
	/**
	 * @attribute destroyed
	 * @parent specialevents
	 * @download  http://jmvcsite.heroku.com/pluginify?plugins[]=jquery/dom/destroyed/destroyed.js
	 * @test jquery/event/destroyed/qunit.html
	 * Provides a destroyed event on an element.
	 * <p>
	 * The destroyed event is called when the element
	 * is removed as a result of jQuery DOM manipulators like remove, html,
	 * replaceWith, etc. Destroyed events do not bubble, so make sure you don't use live or delegate with destroyed
	 * events.
	 * </p>
	 * <h2>Quick Example</h2>
	 * @codestart
	 * $(".foo").bind("destroyed", function(){
	 *    //clean up code
	 * })
	 * @codeend
	 * <h2>Quick Demo</h2>
	 * @demo jquery/event/destroyed/destroyed.html 
	 * <h2>More Involved Demo</h2>
	 * @demo jquery/event/destroyed/destroyed_menu.html 
	 */

	var oldClean = jQuery.cleanData;

	$.cleanData = function( elems ) {
		for ( var i = 0, elem;
		(elem = elems[i]) !== undefined; i++ ) {
			$(elem).triggerHandler("destroyed");
			//$.event.remove( elem, 'destroyed' );
		}
		oldClean(elems);
	};

});;
steal.loaded('jquery/event/destroyed/destroyed.js');
/**
 * @page specialevents Special Events
 * @parent jquerymx
 * JavaScriptMVC provides a bunch of useful special events.  Find out more info on the left.  The following is a 
 * brief summary:
 * 
 * ## [jQuery.event.special.default Default Events]
 * 
 * Lets you supply default behavior for an event that is preventable 
 * with event.preventDefault().  This is extremely useful for providing DOM-like api's for your widgets.
 * 
 *     $("#tabs").delegate(".panel","default.open", function(){
 *       $(this).show()
 *     })
 *     
 * ## [jQuery.event.special.destroyed Destroyed Events]
 * 
 * Know if an element has been removed from the page.
 * 
 *     $("#contextMenu").bind("destroyed", function(){
 *       // cleanup
 *       $(document.body).unbind("click.contextMenu");
 *     })
 *     
 * ## [jQuery.Drag Drag] and [jQuery.Drop Drop] Events
 * 
 * Listen to drag-drop events with event delegation.
 * 
 *     $(".item").live("dragover", function(ev, drag){
 *       // let user know that the item can be dropped
 *       $(this).addClass("canDrop");
 *     }).live("dropover", function(ev, drop, drag){
 *       // let user know that the item can be dropped on
 *       $(this).addClass('drop-able')
 *     })
 * 
 * ## 
 * 
 */
steal('jquery');;
steal.loaded('jquery/event/event.js');
/**
@page dom DOM Helpers
@parent jquerymx
JavaScriptMVC adds a bunch of useful 
jQuery extensions for the dom.  Check them out on the left. 

## [dimensions Dimensions]

Set and animate the inner and outer height and width of elements.

    $('#foo').outerWidth(100);
    $('#bar').animate({innerWidth: 500});

This is great when you want to include padding and margin in
setting the dimensions of elements.

## [jQuery.cookie Cookie]

Set and get cookie values:

    $.cookie('cookie','value');
    
## [jQuery.fixture Fixture]

Simulate Ajax responses.

    $.fixture("/services/tasks.php','fixtures/tasks.json');
    
Works with jQuery's Ajax converters!

## [jQuery.fn.compare Compare]

Compare the location of two elements rapidly.

    $('#foo').compare($('#bar')) & 2 // true if #bar is before #foo
    
## [jQuery.fn.curStyles CurStyles]

Get multiple css properties quickly.

    $('#foo').curStyles('left','top') //-> {left:'20px',top:'10px'}

## [jQuery.fn.formParams FormParams]

Serializes a form into a JSON-like object:

    $('form').formParams() //-> {name: 'Justin', favs: ['JS','Ruby']}
    
## [jQuery.fn.selection Selection]

Gets or sets the current text selection.

    // gets selection info
    $('pre').selection() //-> {start: 22, end: 57, range: range}
    
    // sets the selection
    $('div').selection(20,22)

## [jQuery.fn.within Within]

Returns elements that have a point within their boundaries.

    $('.drop').within(200,200) //-> drops that touch 200,200
    
## [jQuery.Range Range]

Text range utilities.

    $('#copy').range() //-> text range that has copy selected
    
## [jQuery.route]

Hash routes mapped to an [jQuery.Observe $.Observe].

	$.route(':type',{type: 'videos'})
    $.route.delegate('type','set', function(){ ... })
    $.route.attr('type','images');

*/
steal('jquery');;
steal.loaded('jquery/dom/dom.js');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Task',
  {
      findAllInProgress: function () {
          return localStorageDB.getRows('SELECT * FROM Tasks WHERE Sent = 0 ORDER BY DateStarted DESC', this);
      },

      findAllFinished: function () {
          return localStorageDB.getRows('SELECT * FROM Tasks WHERE Sent = 1', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Tasks WHERE id =' + id, this);
          ;
          ;
          return result;
      },
      
      deleteOne: function (id) {
          var result = localStorageDB.getSingleRow('DELETE FROM Tasks WHERE id =' + id, this);
          return result;
      },
      
      tableName: "Tasks"
   },
  {
  });
});
steal.loaded('risk/models/task.js');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_task_add_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<label data-inline=\"true\"><strong>Task name</strong> e.g 'Scaffolding':</label>\n");
___v1ew.push("<input type=\"text\" name=\"Name\" id=\"Name\"  class=\"textinput required\" value=\"\" />\n");
___v1ew.push("<input type=\"submit\" id=\"newtaskbutton\" data-icon=\"check\" value=\"Next Step\" />");; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/task_add/init.ejs');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Hazards',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM Hazards', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Hazards WHERE id =' + id, this);
          ;
          ;
          return result;
      },

      deleteOne: function (id) {
          var result = localStorageDB.getSingleRow('DELETE FROM Hazards WHERE id =' + id, this);
          return result;
      },

      tableName: "Hazards"
   },
  {
  });
});
steal.loaded('risk/models/hazards.js');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_hazards_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<ul id=\"HazardsList\" data-filter=\"true\" data-split-icon=\"delete\" data-filter-placeholder=\"Search for a hazard\" data-role=\"listview\">\n");
___v1ew.push("  ");for(var i = 0; i < this.length; i++){ ;___v1ew.push("\n");
___v1ew.push("  <li>\n");
___v1ew.push("    <a class=\"hazard-item\" id=\"");___v1ew.push((jQuery.EJS.clean(this[i].id)));___v1ew.push("\">\n");
___v1ew.push("      ");___v1ew.push((jQuery.EJS.clean(this[i].Name)));___v1ew.push("\n");
___v1ew.push("    </a>\n");
___v1ew.push("    <a href=\"dialog/deleteHazardConfirm.htm\" data-rel=\"dialog\" id=\"");___v1ew.push((jQuery.EJS.clean(this[i].id)));___v1ew.push("\" class=\"delete\">\n");
___v1ew.push("    </a>\n");
___v1ew.push("  </li>\n");
___v1ew.push("  ");};___v1ew.push("\n");
___v1ew.push("  </ul>\n");
; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/hazards/init.ejs');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Whos',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM Whos', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Whos WHERE id =' + id, this);
          ;
          ;
          return result;
      },
      tableName: "Whos"
   },
  {
  });
});
steal.loaded('risk/models/whos.js');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Hows',
  {
      findAll: function (id) {
          return localStorageDB.getRows('SELECT * FROM Hows WHERE HazardId =' + id, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Hows WHERE id =' + id, this);
          ;
          ;
          return result;
      },

      deleteMany: function (id) {
          var result = localStorageDB.getRows('DELETE FROM Hows WHERE HazardId =' + id, this);
          return result;
      },

      tableName: "Hows"
   },
  {
  });
});
steal.loaded('risk/models/hows.js');
steal('jquery/model', function () {

    Risk.Models.WebSqlModel('Risk.Models.AssessmentsB',
  {
      findAll: function (taskId) {
          //"SELECT ap.id, ap.StartDateTime, ap.TypeId, apt.Name as TypeName, hcp.Title as HcpTitle, hcp.FirstName as HcpFirstName, hcp.Surname as HcpSurname, hcl.Name as LocationName FROM Appointments as ap left outer join AppointmentTypes as apt on ap.TypeId = apt.id left join HealthcareProfessionals as hcp on ap.HcpId=hcp.id left outer join Practices as hcl on ap.HealthcareLocationId = hcl.id WHERE ap.StartDateTime > ' + past.getTime() + ' ORDER BY ap.StartDateTime'";
          return localStorageDB.getRows('SELECT ass.id, hz.Name as Hazard FROM Assessments as ass left outer join Hazards as hz on ass.HazardId = hz.Id WHERE ass.TaskId = '+taskId, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Assessments WHERE id =' + id, this);
          ;
          ;
          return result;
      },
      tableName: "Assessments"
  },
  {
  });
});
steal.loaded('risk/models/assessmentsB.js');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentHows',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM AssessmentHows', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM AssessmentHows WHERE id =' + id, this);
          ;
          ;
          return result;
      },

      findAllById: function (id) {
          var result = localStorageDB.getRows('SELECT * FROM AssessmentHows WHERE AssessmentId =' + id, this);
          ;
          ;
          return result;
      },
      deleteMany: function (id) {
          var result = localStorageDB.getRows('DELETE FROM AssessmentHows WHERE AssessmentId =' + id, this);
          return result;
      },
      
      tableName: "AssessmentHows"
   },
  {
  });
});
steal.loaded('risk/models/assessmenthows.js');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentWhos',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM AssessmentWhos', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM AssessmentWhos WHERE id =' + id, this);
          ;
          ;
          return result;
      },
      findAllById: function (id) {
          var result = localStorageDB.getRows('SELECT * FROM AssessmentWhos WHERE AssessmentId =' + id, this);
          ;
          ;
          return result;
      },
      deleteMany: function (id) {
          var result = localStorageDB.getRows('DELETE FROM AssessmentWhos WHERE AssessmentId =' + id, this);
          return result;
      },
      
      tableName: "AssessmentWhos"
   },
  {
  });
});
steal.loaded('risk/models/assessmentwhos.js');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_whos_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<div data-role=\"fieldcontain\">\n");
___v1ew.push("  <label for=\"WhosList\" class=\"select\"><strong>Who</strong> is at risk?</label>\n");
___v1ew.push("  <select name=\"WhosList\" id=\"WhosList\" multiple=\"multiple\" data-native-menu=\"false\">\n");
___v1ew.push("    <option>Choose options</option>\n");
___v1ew.push("    ");for(var i = "0"; i < this.whos.length; i++){ ;___v1ew.push("\n");
___v1ew.push("    <option value=\"");___v1ew.push((jQuery.EJS.clean(this.whos[i].id)));___v1ew.push("\">\n");
___v1ew.push("        ");___v1ew.push((jQuery.EJS.clean(this.whos[i].Name)));___v1ew.push("\n");
___v1ew.push("    </option>\n");
___v1ew.push("    ");};___v1ew.push("\n");
___v1ew.push("  </select>\n");
___v1ew.push("\n");
___v1ew.push("  <label for=\"HowsList\" class=\"select\"><strong>How</strong> are they at risk?</label>\n");
___v1ew.push("  <select name=\"HowsList\" id=\"HowsList\" multiple=\"multiple\" data-native-menu=\"false\">\n");
___v1ew.push("    <option>Choose options</option>\n");
___v1ew.push("    ");for(var i = "0"; i < this.hows.length; i++){ ;___v1ew.push("\n");
___v1ew.push("      <option value=\"");___v1ew.push((jQuery.EJS.clean(this.hows[i].id)));___v1ew.push("\">\n");
___v1ew.push("        ");___v1ew.push((jQuery.EJS.clean(this.hows[i].Name)));___v1ew.push("\n");
___v1ew.push("      </option>\n");
___v1ew.push("    ");};___v1ew.push("\n");
___v1ew.push("  </select>\n");
___v1ew.push("  \n");
___v1ew.push("  <label for=\"SeverityList\" class=\"select\">\n");
___v1ew.push("    <strong>Severity</strong> Rating\n");
___v1ew.push("  </label>\n");
___v1ew.push("  <select name=\"SeverityList\" id=\"SeverityList\" data-native-menu=\"false\">\n");
___v1ew.push("    <option>Choose Rating</option>\n");
___v1ew.push("    <option value=\"1\">\n");
___v1ew.push("      1 - Not severe\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"2\">\n");
___v1ew.push("      2\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"3\">\n");
___v1ew.push("      3\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"4\">\n");
___v1ew.push("      4\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"5\">\n");
___v1ew.push("      5 - Extremely severe\n");
___v1ew.push("    </option>\n");
___v1ew.push("  </select>\n");
___v1ew.push("\n");
___v1ew.push("  <label for=\"LikelihoodList\" class=\"select\">\n");
___v1ew.push("    <strong>Likelihood</strong> Rating\n");
___v1ew.push("  </label>\n");
___v1ew.push("  <select name=\"LikelihoodList\" id=\"LikelihoodList\" data-native-menu=\"false\">\n");
___v1ew.push("    <option>Choose Rating</option>\n");
___v1ew.push("    <option value=\"1\">\n");
___v1ew.push("      1 - Not likely\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"2\">\n");
___v1ew.push("      2\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"3\">\n");
___v1ew.push("      3\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"4\">\n");
___v1ew.push("      4\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"5\">\n");
___v1ew.push("      5 - Extremely likely\n");
___v1ew.push("    </option>\n");
___v1ew.push("  </select>\n");
___v1ew.push("    <div id=\"trafficLight\">\n");
___v1ew.push("      <div id=\"red\">\n");
___v1ew.push("        <div class=\"text\">High risk level - Add further controls to reduce risk</div>\n");
___v1ew.push("      </div>\n");
___v1ew.push("      <div id=\"amber\">\n");
___v1ew.push("        <div class=\"text\">Satisfactory risk level - Safe to proceed with work task</div>\n");
___v1ew.push("      </div>\n");
___v1ew.push("      <div id=\"green\">\n");
___v1ew.push("        <div class=\"text\">Low risk level - Safe to proceed with work task</div>\n");
___v1ew.push("      </div>\n");
___v1ew.push("    </div>\n");
___v1ew.push("  <div data-role=\"fieldcontain\">\n");
___v1ew.push("    <p>\n");
___v1ew.push("      <a data-role=\"button\" data-icon=\"check\" id=\"submit\"></a>\n");
___v1ew.push("    </p>\n");
___v1ew.push("  </div>\n");
___v1ew.push("    \n");
___v1ew.push("</div>\n");
; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/whos/init.ejs');
steal('jquery/model', function () {

    Risk.Models.WebSqlModel('Risk.Models.Assessments',
  {
      findAll: function (taskId) {
          //"SELECT ap.id, ap.StartDateTime, ap.TypeId, apt.Name as TypeName, hcp.Title as HcpTitle, hcp.FirstName as HcpFirstName, hcp.Surname as HcpSurname, hcl.Name as LocationName FROM Appointments as ap left outer join AppointmentTypes as apt on ap.TypeId = apt.id left join HealthcareProfessionals as hcp on ap.HcpId=hcp.id left outer join Practices as hcl on ap.HealthcareLocationId = hcl.id WHERE ap.StartDateTime > ' + past.getTime() + ' ORDER BY ap.StartDateTime'";
          return localStorageDB.getRows('SELECT ass.id, hz.Name as Hazard FROM Assessments as ass left outer join Hazards as hz on ass.HazardId = hz.Id WHERE ass.TaskId = ' + taskId, this);
      },
      
      findAllIds: function (taskId) {
          return localStorageDB.getRows('SELECT ass.id FROM Assessments as ass WHERE ass.TaskId = ' + taskId, this);
      },
      
      findAllHazardIds: function (hazardId) {
          return localStorageDB.getRows('SELECT ass.id FROM Assessments as ass WHERE ass.HazardId = ' + hazardId, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Assessments WHERE id =' + id, this);
          ;
          ;
          return result;
      },

      deleteOne: function (id) {
          var result = localStorageDB.getSingleRow('DELETE FROM Assessments WHERE id =' + id, this);
          return result;
      },

      deleteManyByHazardId: function (id) {
          var result = localStorageDB.getRows('DELETE FROM Assessments WHERE HazardId =' + id, this);
          return result;
      },

      tableName: "Assessments"
  },
  {
});
});
steal.loaded('risk/models/assessments.js');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_myassessments_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<ul id=\"MyAssessmentsList\" data-filter=\"true\" data-split-icon=\"delete\" data-filter-placeholder=\"Search for an assessment\" data-role=\"listview\">\n");
___v1ew.push("  ");if(this.length < 1){ ;___v1ew.push("\n");
___v1ew.push("  \n");
___v1ew.push("  <li data-role=\"list-divider\">\n");
___v1ew.push("    There are currently no risk assessments recorded for <span class=\"task\"></span>\n");
___v1ew.push("  </li>\n");
___v1ew.push("    \n");
___v1ew.push("  ");}else{ ;___v1ew.push("\n");
___v1ew.push("\n");
___v1ew.push("  <li id=\"divider\" data-role=\"list-divider\">\n");
___v1ew.push("  </li> \n");
___v1ew.push("    \n");
___v1ew.push("  ");for(var i = 0; i < this.length; i++){ ;___v1ew.push("\n");
___v1ew.push("  <li>\n");
___v1ew.push("    <a class=\"assessment-item\" id=\"");___v1ew.push((jQuery.EJS.clean(this[i].id)));___v1ew.push("\">\n");
___v1ew.push("      <h3>\n");
___v1ew.push("        ");___v1ew.push((jQuery.EJS.clean(this[i].Hazard)));___v1ew.push("\n");
___v1ew.push("      </h3>\n");
___v1ew.push("      <p>\n");
___v1ew.push("        <i class=\"small\">Touch for more options</i>\n");
___v1ew.push("      </p>\n");
___v1ew.push("    </a>\n");
___v1ew.push("    <a href=\"dialog/deleteConfirm.htm\" data-rel=\"dialog\" id=\"");___v1ew.push((jQuery.EJS.clean(this[i].id)));___v1ew.push("\" class=\"delete\"> \n");
___v1ew.push("    </a>\n");
___v1ew.push("  </li>\n");
___v1ew.push("  ");}};___v1ew.push("\n");
___v1ew.push("</ul>\n");
___v1ew.push("<br/>\n");
___v1ew.push("<p>\n");
___v1ew.push("  <a data-role=\"button\" data-icon=\"plus\" class=\"addToExisting\" href=\"hazards.htm\">Add another assessment</a>\n");
___v1ew.push("  <a data-role=\"button\" data-icon=\"forward\" class=\"emailReport\">Email report for <span class=\"task\"></span></a>\n");
___v1ew.push("</p> \n");
___v1ew.push(" \n");
; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/myassessments/init.ejs');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentControls',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM AssessmentControls', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM AssessmentControls WHERE id =' + id, this);
          ;
          ;
          return result;
      },
      deleteMany: function (id) {
          var result = localStorageDB.getRows('DELETE FROM AssessmentControls WHERE AssessmentId =' + id, this);
          return result;
      },
      findAllById: function (id) {
          var result = localStorageDB.getRows('SELECT * FROM AssessmentControls WHERE AssessmentId =' + id, this);
          ;
          ;
          return result;
      },
      
      tableName: "AssessmentControls"
   },
  {
  });
});
steal.loaded('risk/models/assessmentcontrols.js');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Controls',
  {
      findAll: function (id) {
          return localStorageDB.getRows('SELECT * FROM Controls WHERE HazardId =' + id, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Controls WHERE id =' + id, this);
          ;
          ;
          return result;
      },

      deleteMany: function (id) {
          var result = localStorageDB.getRows('DELETE FROM Controls WHERE HazardId =' + id, this);
          return result;
      },

      tableName: "Controls"
   },
  {
  });
});
steal.loaded('risk/models/controls.js');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_controls_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<div data-role=\"fieldcontain\">\n");
___v1ew.push("  <label for=\"ControlsList\" class=\"select\"><strong>Add further controls</strong></label>\n");
___v1ew.push("  <select name=\"ControlsList\" id=\"ControlsList\" multiple=\"multiple\" data-native-menu=\"false\">\n");
___v1ew.push("    <option>Choose options</option>\n");
___v1ew.push("    ");for(var i = "0"; i < this.controls.length; i++){ ;___v1ew.push("\n");
___v1ew.push("    <option value=\"");___v1ew.push((jQuery.EJS.clean(this.controls[i].id)));___v1ew.push("\">\n");
___v1ew.push("        ");___v1ew.push((jQuery.EJS.clean(this.controls[i].Name)));___v1ew.push("\n");
___v1ew.push("    </option>\n");
___v1ew.push("    ");};___v1ew.push("\n");
___v1ew.push("  </select>\n");
___v1ew.push("\n");
___v1ew.push("  <label for=\"SeverityList\" class=\"select\">\n");
___v1ew.push("    Adjust <strong>Severity</strong> Rating\n");
___v1ew.push("  </label>\n");
___v1ew.push("  <select name=\"SeverityList\" id=\"SeverityList\" data-native-menu=\"false\">\n");
___v1ew.push("    <option value=\"1\">\n");
___v1ew.push("      1 - Not severe\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"2\">\n");
___v1ew.push("      2\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"3\">\n");
___v1ew.push("      3\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"4\">\n");
___v1ew.push("      4\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"5\">\n");
___v1ew.push("      5 - Extremely severe\n");
___v1ew.push("    </option>\n");
___v1ew.push("  </select>\n");
___v1ew.push("  \n");
___v1ew.push("  <label for=\"LikelihoodList\" class=\"select\">\n");
___v1ew.push("    Adjust <strong>Likelihood</strong> Rating\n");
___v1ew.push("  </label>\n");
___v1ew.push("  <select name=\"LikelihoodList\" id=\"LikelihoodList\" data-native-menu=\"false\">\n");
___v1ew.push("    <option value=\"1\">\n");
___v1ew.push("      1 - Not likely\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"2\">\n");
___v1ew.push("      2\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"3\">\n");
___v1ew.push("      3\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"4\">\n");
___v1ew.push("      4\n");
___v1ew.push("    </option>\n");
___v1ew.push("    <option value=\"5\">\n");
___v1ew.push("      5 - Extremely likely\n");
___v1ew.push("    </option>\n");
___v1ew.push("  </select>\n");
___v1ew.push("\n");
___v1ew.push("  <div id=\"trafficLight\">\n");
___v1ew.push("    <div id=\"red\">\n");
___v1ew.push("      <div class=\"text\">High risk level - Add further controls to reduce risk</div>\n");
___v1ew.push("    </div>\n");
___v1ew.push("    <div id=\"amber\">\n");
___v1ew.push("      <div class=\"text\">Satisfactory risk level - Safe to proceed with work task</div>\n");
___v1ew.push("    </div>\n");
___v1ew.push("    <div id=\"green\">\n");
___v1ew.push("      <div class=\"text\">Low risk level - Safe to proceed with work task</div>\n");
___v1ew.push("    </div>\n");
___v1ew.push("  </div>\n");
___v1ew.push("  \n");
___v1ew.push("  <div data-role=\"fieldcontain\">\n");
___v1ew.push("    <p id=\"button-container\">\n");
___v1ew.push("      <a data-role=\"button\" data-icon=\"check\" id=\"submit\">Finish assessment</a>\n");
___v1ew.push("    </p>\n");
___v1ew.push("  </div>\n");
___v1ew.push("</div>\n");
; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/controls/init.ejs');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentDetailWhos',
  {
      findAllById: function (id) {
          return localStorageDB.getRows('SELECT Whos.Name as Name FROM AssessmentWhos inner join Whos ON AssessmentWhos.WhoId = Whos.id WHERE AssessmentWhos.AssessmentId = ' + id, this);
      },
      
      tableName: "AssessmentWhos"
   },
  {
  });
});
steal.loaded('risk/models/assessmentdetailwhos.js');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentDetailHows',
  {
      findAllById: function (id) {
          return localStorageDB.getRows('SELECT Hows.Name as Name FROM AssessmentHows inner join Hows ON AssessmentHows.HowId = Hows.id WHERE AssessmentHows.AssessmentId = ' + id, this);
      },
      
      tableName: "AssessmentHows"
   },
  {
  });
});
steal.loaded('risk/models/assessmentdetailhows.js');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentDetailControls',
  {
      findAllById: function (id) {
          return localStorageDB.getRows('SELECT Controls.Name as Name FROM AssessmentControls inner join Controls ON AssessmentControls.ControlId = Controls.id WHERE AssessmentControls.AssessmentId = ' + id, this);
      },

      tableName: "AssessmentControls"
   },
  {
  });
});
steal.loaded('risk/models/assessmentdetailcontrols.js');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_details_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<ul id=\"DetailsList\" data-role=\"listview\">\n");
___v1ew.push("\n");
___v1ew.push("  "); if(this.whos.length > 0){ ;___v1ew.push("\n");
___v1ew.push("  \n");
___v1ew.push("  <li data-role=\"list-divider\">\n");
___v1ew.push("    'Whos' identified for hazard: ");___v1ew.push((jQuery.EJS.clean( this.hazardName )));___v1ew.push("\n");
___v1ew.push("  </li>\n");
___v1ew.push("\n");
___v1ew.push("  ");for(var i = 0; i < this.whos.length; i++){ ;___v1ew.push("\n");
___v1ew.push("\n");
___v1ew.push("  <li>");___v1ew.push((jQuery.EJS.clean( this.whos[i].Name )));___v1ew.push("</li>\n");
___v1ew.push("    \n");
___v1ew.push("  ");}};___v1ew.push("\n");
___v1ew.push("    \n");
___v1ew.push("   "); if(this.hows.length > 0){ ;___v1ew.push("\n");
___v1ew.push("    \n");
___v1ew.push("  <li data-role=\"list-divider\">\n");
___v1ew.push("    'Hows' identified for hazard: ");___v1ew.push((jQuery.EJS.clean( this.hazardName )));___v1ew.push("\n");
___v1ew.push("  </li>\n");
___v1ew.push("\n");
___v1ew.push("  ");for(var j = 0; j < this.hows.length; j++){ ;___v1ew.push("\n");
___v1ew.push("\n");
___v1ew.push("  <li>\n");
___v1ew.push("    ");___v1ew.push((jQuery.EJS.clean( this.hows[j].Name )));___v1ew.push("\n");
___v1ew.push("  </li>\n");
___v1ew.push("\n");
___v1ew.push("  ");}};___v1ew.push("\n");
___v1ew.push("    \n");
___v1ew.push("  "); if(this.controls.length > 0){ ;___v1ew.push("\n");
___v1ew.push("    \n");
___v1ew.push("  <li data-role=\"list-divider\">\n");
___v1ew.push("    'Further Controls' identified for hazard: ");___v1ew.push((jQuery.EJS.clean( this.hazardName )));___v1ew.push("\n");
___v1ew.push("  </li>\n");
___v1ew.push("\n");
___v1ew.push("  ");for(var k = 0; k < this.controls.length; k++){ ;___v1ew.push("\n");
___v1ew.push("\n");
___v1ew.push("  <li>\n");
___v1ew.push("    ");___v1ew.push((jQuery.EJS.clean( this.controls[k].Name )));___v1ew.push("\n");
___v1ew.push("  </li>\n");
___v1ew.push("\n");
___v1ew.push("  ");}};___v1ew.push("\n");
___v1ew.push("    \n");
___v1ew.push("    <li data-role=\"list-divider\">\n");
___v1ew.push("      Severity: ");___v1ew.push((jQuery.EJS.clean( this.severityRating )));___v1ew.push(" Likelihood: ");___v1ew.push((jQuery.EJS.clean( this.likelihoodRating )));___v1ew.push(" Overall Rating: ");___v1ew.push((jQuery.EJS.clean( this.assessmentRating )));___v1ew.push("\n");
___v1ew.push("    </li>\n");
___v1ew.push("\n");
___v1ew.push("  </ul>\n");
___v1ew.push("<br/>\n");
___v1ew.push("<p>\n");
___v1ew.push("  <a data-role=\"button\" data-icon=\"gear\" href=\"whos.htm\">Re-do this assessment</a>\n");
___v1ew.push("  <a data-role=\"button\" data-icon=\"grid\" href=\"myassessments.htm\">Back to my assessments</a>\n");
___v1ew.push("</p> \n");
___v1ew.push(" \n");
; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/details/init.ejs');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_inprogress_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<ul id=\"InProgressList\" data-filter=\"true\" data-split-icon=\"delete\" data-filter-placeholder=\"Search for a task\" data-role=\"listview\">\n");
___v1ew.push("  ");if(this.length < 1){ ;___v1ew.push("\n");
___v1ew.push("  \n");
___v1ew.push("  <li data-role=\"list-divider\">\n");
___v1ew.push("    You currently have no tasks in progress\n");
___v1ew.push("  </li>\n");
___v1ew.push("    \n");
___v1ew.push("  ");}else{ ;___v1ew.push("\n");
___v1ew.push("  \n");
___v1ew.push("  "); var dateStr = ""; ;___v1ew.push("  \n");
___v1ew.push("  ");for(var i = 0; i < this.length; i++){ ;___v1ew.push("\n");
___v1ew.push("  \n");
___v1ew.push("  ");if(dateStr !=  this[i].DateStarted.toDateString()){;___v1ew.push("\n");
___v1ew.push("    <li data-role=\"list-divider\">\n");
___v1ew.push("      ");___v1ew.push((jQuery.EJS.clean( this[i].DateStarted.toDateString() )));___v1ew.push("\n");
___v1ew.push("    </li>\n");
___v1ew.push("  ");} dateStr = this[i].DateStarted.toDateString(); ;___v1ew.push("\n");
___v1ew.push("\n");
___v1ew.push("    <li>\n");
___v1ew.push("    <a class=\"task-item\" href=\"myassessments.htm\" id=\"");___v1ew.push((jQuery.EJS.clean(this[i].id)));___v1ew.push("\">\n");
___v1ew.push("      <h3>\n");
___v1ew.push("        ");___v1ew.push((jQuery.EJS.clean(this[i].Name)));___v1ew.push("\n");
___v1ew.push("      </h3>\n");
___v1ew.push("      <p>\n");
___v1ew.push("        <i class=\"small\">Touch to see details</i>\n");
___v1ew.push("      </p>\n");
___v1ew.push("    </a>\n");
___v1ew.push("    <a href=\"dialog/deleteTaskConfirm.htm\" data-rel=\"dialog\" id=\"");___v1ew.push((jQuery.EJS.clean(this[i].id)));___v1ew.push("\" class=\"delete\"> \n");
___v1ew.push("    </a>\n");
___v1ew.push("  </li>\n");
___v1ew.push("  ");}};___v1ew.push("\n");
___v1ew.push("</ul>\n");
___v1ew.push("<br/>\n");
___v1ew.push("<p>\n");
___v1ew.push("  <a data-role=\"button\" data-icon=\"plus\" href=\"newtask.htm\">Start new task</a>\n");
___v1ew.push("</p> \n");
___v1ew.push(" \n");
; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/inprogress/init.ejs');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_newhazard_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<p>\n");
___v1ew.push("  <label>Hazard Name</label>\n");
___v1ew.push("  <input type=\"text\" placeholder=\"Compulsory\" class=\"required\" id=\"hazard\"/>\n");
___v1ew.push("</p>\n");
___v1ew.push("<p class=\"hows\">\n");
___v1ew.push("  <label>Hows</label>\n");
___v1ew.push("  <input type=\"text\" class=\"required\" placeholder=\"Compulsory\" id=\"how1\" name=\"how1\"/>\n");
___v1ew.push("  <input type=\"text\" placeholder=\"Optional\" id=\"how2\" name=\"how2\"/>\n");
___v1ew.push("  <input type=\"text\" placeholder=\"Optional\" id=\"how3\" name=\"how3\"/>\n");
___v1ew.push("  <input type=\"text\" placeholder=\"Optional\" id=\"how4\" name=\"how4\"/>\n");
___v1ew.push("  <input type=\"text\" placeholder=\"Optional\" id=\"how5\" name=\"how5\"/>\n");
___v1ew.push("</p>\n");
___v1ew.push("<p class=\"controls\">\n");
___v1ew.push("  <label>Further Controls</label>\n");
___v1ew.push("  <input type=\"text\" class=\"required\" placeholder=\"Compulsory\" id=\"control1\" name=\"control1\"/>\n");
___v1ew.push("  <input type=\"text\" placeholder=\"Optional\" id=\"control2\" name=\"control2\"/>\n");
___v1ew.push("  <input type=\"text\" placeholder=\"Optional\" id=\"control3\" name=\"control3\"/>\n");
___v1ew.push("  <input type=\"text\" placeholder=\"Optional\" id=\"control4\" name=\"control4\"/>\n");
___v1ew.push("  <input type=\"text\" placeholder=\"Optional\" id=\"control5\" name=\"control5\"/>\n");
___v1ew.push("</p>\n");
___v1ew.push("<p>\n");
___v1ew.push("  <button class=\"ok\" type=\"submit\" data-icon=\"check\" data-role=\"submit\">Save</button>\n");
___v1ew.push("</p>\n");
; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/newhazard/init.ejs');
steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Email',
  {
      getQueryString: function (taskId) {
          return localStorageDB.getRows('SELECT * FROM Tasks WHERE id ='+taskId, this);
      },
      
      tableName: "Tasks"
   },
  {
  });
});
steal.loaded('risk/models/email.js');
steal('jquery/view/ejs').then(function($){$.View.preload('risk_views_email_init_ejs',jQuery.EJS(function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];___v1ew.push("<label data-inline=\"true\">First name:</label>\n");
___v1ew.push("<input type=\"text\" name=\"FirstName\" id=\"FirstName\"  class=\"textinput required\" value=\"");___v1ew.push((jQuery.EJS.clean(this.FirstName)));___v1ew.push("\" placeholder=\"Compulsory\" />\n");
___v1ew.push("\n");
___v1ew.push("<label data-inline=\"true\">Last name:</label> \n");
___v1ew.push("<input type=\"text\" name=\"LastName\" id=\"LastName\"  class=\"textinput required\" value=\"");___v1ew.push((jQuery.EJS.clean(this.LastName)));___v1ew.push("\" placeholder=\"Compulsory\" />\n");
___v1ew.push("\n");
___v1ew.push("<label data-inline=\"true\">Email address:</label>\n");
___v1ew.push("<input type=\"text\" name=\"EmailAddress\" id=\"EmailAddress\"  class=\"required email\" value=\"");___v1ew.push((jQuery.EJS.clean(this.EmailAddress)));___v1ew.push("\" placeholder=\"Compulsory\" />\n");
___v1ew.push("\n");
___v1ew.push("<label data-inline=\"true\">Manager's first name:</label>\n");
___v1ew.push("<input type=\"text\" name=\"ManagerFirstName\" id=\"ManagerFirstName\" value=\"");___v1ew.push((jQuery.EJS.clean(this.ManagerFirstName)));___v1ew.push("\" placeholder=\"Optional\" />\n");
___v1ew.push("\n");
___v1ew.push("<label data-inline=\"true\">Manager's last name:</label>\n");
___v1ew.push("<input type=\"text\" name=\"ManagerLastName\" id=\"ManagerLastName\" value=\"");___v1ew.push((jQuery.EJS.clean(this.ManagerLastName)));___v1ew.push("\" placeholder=\"Optional\"/>\n");
___v1ew.push("\n");
___v1ew.push("<label data-inline=\"true\">Manager's email address:</label>\n");
___v1ew.push("<input type=\"text\"  name=\"ManagerEmailAddress\" id=\"ManagerEmailAddress\" class=\"email\" value=\"");___v1ew.push((jQuery.EJS.clean(this.ManagerEmailAddress)));___v1ew.push("\" placeholder=\"Optional\"/>\n");
___v1ew.push("\n");
___v1ew.push("<input type=\"submit\" id=\"sendemail\" data-icon=\"check\" value=\"Email report(s)\" />");; return ___v1ew.join('');}}}catch(e){e.lineNumber=null;throw e;} }));
});
steal.loaded('risk/views/email/init.ejs');