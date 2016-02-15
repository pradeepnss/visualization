

// If you're adding a number of markers, you may want to drop them on the map
// consecutively rather than all at once. This example shows how to use
// window.setTimeout() to space your markers' animation.



var markers = [];
var map;

function initMap() {
var styles=[
{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#ffffff"
        },
        {
            "weight": "0.20"
        },
        {
            "lightness": "28"
        },
        {
            "saturation": "23"
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "color": "#494949"
        },
        {
            "lightness": 13
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#000000"
        }
    ]
},
{
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#144b53"
        },
        {
            "lightness": 14
        },
        {
            "weight": 1.4
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
        {
            "color": "#08304b"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#0c4152"
        },
        {
            "lightness": 5
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#000000"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#0b434f"
        },
        {
            "lightness": 25
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#000000"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "color": "#0b3d51"
        },
        {
            "lightness": 16
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#000000"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
        {
            "color": "#146474"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        {
            "color": "#021019"
        }
    ]
}
];
map = new google.maps.Map(document.getElementById('map'), {
zoom: 5,
center: {lat: 37.09024, lng: -95.712891}
});
map.setOptions({styles: styles});
}

function drop() {
var bookings = [
{lat: 42.370567, lng: -71.026964},
{lat:39.6335556,	lng: -86.8138056},
{lat:41.9929342,	lng: -86.1280125},
{lat:39.9750278,	lng: -81.5775833},
{lat:44.8436667,	lng:-87.4215556},
{lat:39.7948244,	lng: -76.6471914},
{lat:45.695,	lng: -118.841389},
{lat:61.076667,	lng: -151.138056},
{lat:43.064167,	lng: -108.459722},
{lat:38.509794,	lng: -107.894242},
{lat:41.6959744,	lng:-88.1292306},
{lat:42.5956944,	lng:-87.9278056},
{lat:36.2106944,	lng:-115.1944444},
{lat:38.8819456,	lng:-83.8827367},
{lat:42.6149167,	lng:-88.3895833},
{lat:41.9338342,	lng:-88.7056864},
{lat:40.4123056,	lng:-86.9368889},
{lat:39.5022607,	lng:-84.7843814},
{lat:40.2424722,	lng:-85.39575},
{lat:48.9797222,	lng:-123.0788889},
{lat:40.5200833,	lng:-90.6523889},
{lat:44.9262845,	lng:-89.6270018},
{lat:43.5603136,	lng:-89.4828607},
{lat:46.5274747,	lng:-90.1313967},
{lat:45.8649344,	lng:-84.637344},
{lat:47.8383333,	lng:-90.3829444},
{lat:41.4539722,	lng:-87.0070833},
{lat:37.812545,	lng:-107.662994},
{lat:61.4370608,	lng:-142.9030737},
{lat:60.1269383,	lng:-149.4188122},
{lat:41.7033,	lng:-86.8211},
{lat:48.443965,	lng:-113.218556},
{lat:66.5519,	lng:-152.6222},
{lat:59.3012,	lng:-139.3937},
{lat:46.353611,	lng:-87.395278},
{lat:45.8183611,	lng:-88.1145556},
{lat:45.722778,	lng:-87.093611},
{lat:37.7549569,	lng:-89.0110936},
{lat:70.133989,	lng:-143.581867},
{lat:70.613378,	lng:-159.86035},
{lat:68.875133,	lng:-166.110022},
{lat:69.732875,	lng:-163.005342},
{lat:19.721375,	lng:-155.048469},
{lat:28.545464,	lng:-81.332936},
{lat:66.913944,	lng:-151.529056},
{lat:64.301203,	lng:-149.120144},
{lat:65.992794,	lng:-153.704289},
{lat:66.571492,	lng:-145.250417},
{lat:61.097369,	lng:-155.574228},
{lat:61.266381,	lng:-149.653119},
{lat:62.894369,	lng:-155.976525},
{lat:61.780297,	lng:-166.038747},
{lat:42.469953,	lng:-71.289031},
{lat:57.167333,	lng:-170.220444},
{lat:58.646428,	lng:-162.062778},
{lat:56.578344,	lng:-169.661611},
{lat:59.754356,	lng:-154.910961},
{lat:59.011356,	lng:-161.819664},
{lat:59.361247,	lng:-155.258822},
{lat:44.451558,	lng:-83.394053},
{lat:36.681878,	lng:-121.762347},
{lat:38.553897,	lng:-121.297592},
{lat:35.280531,	lng:-116.630031},
{lat:34.296161,	lng:-116.162203},
{lat:35.336583, lng:-94.367444},
{lat:61.213544,	lng:-149.844447},
{lat:35.167286,	lng:-107.901989},
{lat:36.731958,	lng:-97.099781},
{lat:32.01,	lng:-81.145683},
{lat:47.949256,	lng:-97.176111},
{lat:34.173142,	lng:-91.935597},
{lat:30.724167,	lng:-87.021944},
{lat:20.795636,	lng:-156.014439},
{lat:34.654472,	lng:-112.419583},
{lat:40.276692,	lng:-74.813469},
{lat:42.364347,	lng:-71.005181},
{lat:38.262692,	lng:-121.927464},
{lat:43.2338,	lng:-75.407033},
{lat:40.718694,	lng:-114.030889},
{lat:30.626783,	lng:-88.068092},
{lat:37.721278,	lng:-122.220722},
{lat:41.303167,	lng:-95.894069},
{lat:48.141481,	lng:-123.414075},
{lat:20.89865,	lng:-156.430458},
{lat:37.649944,	lng:-97.433056},
{lat:39.297606,	lng:-94.713905},
{lat:43.139858,	lng:-89.337514},
{lat:59.044667,	lng:-158.5055},
{lat:36.261519,	lng:-93.154728},
{lat:33.434278,	lng:-112.011583},
{lat:44.807444,	lng:-68.828139},
{lat:26.197281,	lng:-80.170706},
{lat:32.384014,	lng:-94.711486},
{lat:34.494583,	lng:-82.709389},
{lat:47.619861,	lng:-117.533833},
{lat:26.001222,	lng:-80.240722},
{lat:37.618972,	lng:-122.374889},
{lat:48.608353,	lng:-112.376144},
{lat:30.037758,	lng:-91.883896},
{lat:29.690056,	lng:-82.271778},
{lat:35.042417,	lng:-89.976667},
{lat:31.469028,	lng:-109.603667},
{lat:63.994547,	lng:-145.721642},
{lat:31.637831,	lng:-97.074139},
{lat:55.042436,	lng:-131.572233},
{lat:46.8715,	lng:-68.017917},
{lat:34.916944,	lng:-92.149722},
{lat:34.678653,	lng:-86.684781},
{lat:35.170883,	lng:-79.014472},
{lat:36.022586,	lng:-102.547278},
{lat:29.359486,	lng:-100.777975},
{lat:33.942536,	lng:-118.408075},
{lat:33.588167,	lng:-85.858111},
{lat:41.411689,	lng:-81.849794},
{lat:39.129539,	lng:-75.465958},
{lat:39.048836,	lng:-84.667822},
{lat:39.085386,	lng:-76.759414},
{lat:35.685422,	lng:-117.692039},
{lat:44.3852,	lng:-98.228542},
{lat:58.354972,	lng:-134.576278},
{lat:30.205278,	lng:-91.987611},
{lat:40.6925,	lng:-74.168667},
{lat:43.564361,	lng:-116.222861},
{lat:36.587183,	lng:-115.673353},
{lat:37.927528,	lng:-100.724417},
{lat:48.259378,	lng:-101.280333},
{lat:21.4835,	lng:-158.039667},
{lat:32.382944,	lng:-86.365778},
{lat:34.850089,	lng:-92.300153},
{lat:32.847111,	lng:-96.851778},
{lat:38.678394,	lng:-104.756581},
{lat:46.606806,	lng:-111.98275},
{lat:32.867694,	lng:-117.14175},
{lat:33.535,	lng:-112.38306},
{lat:30.427803,	lng:-86.689278},
{lat:33.922839,	lng:-118.335186},
{lat:46.123083,	lng:-67.792056},
{lat:36.339167,	lng:-97.9165},
{lat:34.120285,	lng:-119.12094},
{lat:34.905417,	lng:-117.883739},
{lat:30.126112,	lng:-93.223335},
{lat:19.738767,	lng:-156.045631},
{lat:33.67975,	lng:-78.928333},
{lat:36.333012,	lng:-119.95208},
{lat:41.253053,	lng:-70.060181},
{lat:37.1325,	lng:-76.608841},
{lat:36.668567,	lng:-87.496183},
{lat:38.852083,	lng:-77.037722},
{lat:38.285981,	lng:-76.411781},
{lat:28.727508,	lng:-96.250958},
{lat:35.964347,	lng:-89.943956},
{lat:39.457583,	lng:-74.577167},
{lat:35.414739,	lng:-97.386633},
{lat:36.260581,	lng:-76.174572},
{lat:38.289085,	lng:-104.496572},
{lat:46.688958,	lng:-68.044797},
{lat:35.040222,	lng:-106.609194},
{lat:47.079217,	lng:-122.580783},
{lat:57.749967,	lng:-152.493856},
{lat:20.265256, lng:-155.859989},
{lat:26.072583,	lng:-80.15275},
{lat:35.656489,	lng:-95.366656},
{lat:48.566186,	lng:-93.403067},
{lat:40.788389,	lng:-111.977772},
{lat:34.433781,	lng:-100.287992},
{lat:30.410425,	lng:-88.924433},
{lat:32.337322,	lng:-84.991283},
{lat:27.507223,	lng:-97.809723},
{lat:39.055275,	lng:-96.764453},
{lat:40.193494,	lng:-76.763403},
{lat:40.850971,	lng:-96.75925},
{lat:42.7787,	lng:-84.587357},
{lat:20.001328,	lng:-155.668108},
{lat:44.935833,	lng:-74.845547},
{lat:35.741147,	lng:-81.38955},
{lat:27.765111,	lng:-82.626972},
{lat:26.586611,	lng:-81.86325},
{lat:29.984433, lng:-95.341442},
{lat:45.647836,	lng:-68.685561},
{lat:38.810806,	lng:-76.867028},
{lat:36.133722,	lng:-80.222},
{lat:34.597453,	lng:-117.382997},
{lat:30.778833,	lng:-86.522111},
{lat:44.055619,	lng:-75.719458},
{lat:42.910957,	lng:-82.528862},
{lat:35.433598,	lng:-119.05677},
{lat:31.80725,	lng:-106.377583},
{lat:26.2285,	lng:-97.654389},
{lat:33.938833,	lng:-81.119528},
{lat:32.166467,	lng:-110.883144},
{lat:30.352656,	lng:-87.318647},
{lat:30.473425,	lng:-87.186611},
{lat:47.961098,	lng:-97.401194},
{lat:29.645419,	lng:-95.278889},
{lat:39.701668,	lng:-104.75166},
{lat:62.961334,	lng:-141.929136},
{lat:61.594914,	lng:-149.088711},
{lat:40.491467,	lng:-80.232872},
{lat:71.285446,	lng:-156.766003},
{lat:29.607333,	lng:-95.15875},
{lat:48.351803,	lng:-122.655906},
{lat:27.740889,	lng:-98.026944},
{lat:30.967833,	lng:-83.193},
{lat:25.79325,	lng:-80.290556},
{lat:47.449,	lng:-122.309306},
{lat:35.035278,	lng:-85.203808},
{lat:41.163472,	lng:-73.126167},
{lat:32.311167,	lng:-90.075889},
{lat:29.265322,	lng:-94.860406},
{lat:33.817722,	lng:-118.151611},
{lat:21.579475,	lng:-158.197281},
{lat:41.241836,	lng:-76.921094},
{lat:39.717331,	lng:-86.294383},
{lat:38.730306,	lng:-93.547864},
{lat:41.0375,	lng:-81.466917},
{lat:33.494328,	lng:-90.084706},
{lat:41.066959,	lng:-73.707575},
{lat:40.843656,	lng:-72.631789},
{lat:35.831708,	lng:-90.646417},
{lat:37.798836,	lng:-116.78075},
{lat:26.593,	lng:-80.085056},
{lat:32.699219,	lng:-117.21531},
{lat:31.849528,	lng:-106.380039},
{lat:32.656578,	lng:-114.60598},
{lat:32.337472,	lng:-104.263278},
{lat:46.842091,	lng:-92.193649},
{lat:60.779778,	lng:-161.838},
{lat:38.228,	lng:-85.663722},
{lat:31.588472,	lng:-110.344389},
];

var i;
for (i = 0; i < bookings.length; i++) {
addMarkerWithTimeout(bookings[i], i * 10);
}

}

function addMarkerWithTimeout(position, timeout) {

window.setTimeout(function() {
// clearMarkers();
var image = 'dotblueb.gif';
markers.push(new google.maps.Marker({
position: position,
  map: map,
 icon: image,
 optimized: false,
 }));
}, timeout);

}

function clearMarkers() {
for (var i = 0; i < markers.length; i++) {
markers[i].setMap(null);
}
markers = [];
}
