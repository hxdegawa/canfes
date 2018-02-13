$(function(){
  setTimeout(function(){
    $(".logo").addClass("visible");
    $(".logo-border").removeClass("visible");
    
    setTimeout(function(){
      $("header").addClass("mini");
      setTimeout(function(){
        $(".title-text").addClass("visible");
        $(".down").addClass("visible");
      }, 1000);
    }, 1000);
  }, 3000);
  
  $(window).scroll(function(){
    $("main").addClass("visible");
  });
  
//  google.maps.event.addDomListener(window, 'load', init);
//        
//  function init() {    
//      var markerOptions = {
//        position: google.maps.LatLng(35.68608302,139.69829398),
//        map: new google.maps.LatLng(35.68608302,139.69829398)
//      }
//      // Basic options for a simple Google Map
//      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//      var mapOptions = {
//          // How zoomed in you want the map to start at (always required)
//          zoom: 16,
//          
//          // The latitude and longitude to center the map (always required)
//          center: new google.maps.LatLng(35.68608302,139.69829398), // Yoyogi Tower
//
//          // How you would like to style the map. 
//          // This is where you would paste any style found on Snazzy Maps.
//          styles: [
//                    {
//                        "featureType": "administrative",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "saturation": "8"
//                            },
//                            {
//                                "visibility": "off"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "administrative.country",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "visibility": "on"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "administrative.province",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "visibility": "off"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "administrative.province",
//                        "elementType": "labels",
//                        "stylers": [
//                            {
//                                "visibility": "simplified"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "administrative.land_parcel",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "visibility": "off"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "landscape",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "saturation": -100
//                            },
//                            {
//                                "lightness": 65
//                            },
//                            {
//                                "visibility": "on"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "landscape",
//                        "elementType": "labels.icon",
//                        "stylers": [
//                            {
//                                "saturation": "83"
//                            },
//                            {
//                                "gamma": "0.00"
//                            },
//                            {
//                                "lightness": "97"
//                            },
//                            {
//                                "visibility": "off"
//                            },
//                            {
//                                "weight": "7.23"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "poi",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "saturation": -100
//                            },
//                            {
//                                "lightness": "50"
//                            },
//                            {
//                                "visibility": "simplified"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "poi",
//                        "elementType": "geometry",
//                        "stylers": [
//                            {
//                                "visibility": "off"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "poi",
//                        "elementType": "geometry.stroke",
//                        "stylers": [
//                            {
//                                "visibility": "off"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "poi",
//                        "elementType": "labels",
//                        "stylers": [
//                            {
//                                "visibility": "off"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "poi",
//                        "elementType": "labels.text.fill",
//                        "stylers": [
//                            {
//                                "visibility": "off"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "poi",
//                        "elementType": "labels.text.stroke",
//                        "stylers": [
//                            {
//                                "visibility": "off"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "poi",
//                        "elementType": "labels.icon",
//                        "stylers": [
//                            {
//                                "visibility": "off"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "road",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "saturation": "-100"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "road.highway",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "visibility": "simplified"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "road.arterial",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "lightness": "30"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "road.local",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "lightness": "40"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "transit",
//                        "elementType": "all",
//                        "stylers": [
//                            {
//                                "saturation": -100
//                            },
//                            {
//                                "visibility": "simplified"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "water",
//                        "elementType": "geometry",
//                        "stylers": [
//                            {
//                                "hue": "#ffff00"
//                            },
//                            {
//                                "lightness": -25
//                            },
//                            {
//                                "saturation": -97
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "water",
//                        "elementType": "labels",
//                        "stylers": [
//                            {
//                                "lightness": -25
//                            },
//                            {
//                                "saturation": -100
//                            }
//                        ]
//                    }
//                ]
//      };
//
//      // Get the HTML DOM element that will contain your map 
//      // We are using a div with id="map" seen below in the <body>
//      var mapElement = document.getElementById('map');
//
//      // Create the Google Map using our element and options defined above
//      var map = new google.maps.Map(mapElement, mapOptions);
//
//      // Let's also add a marker while we're at it
//      var marker = new google.maps.Marker({
//          position: new google.maps.LatLng(40.6700, -73.9400),
//          map: map,
//          title: 'Snazzy!'
//      });
//  }
  
});