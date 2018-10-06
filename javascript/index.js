console.log('Yet another Hello world');

var map = null;
var markers = [];

placesOfInterest = [
    { name: 'Charme da paulista', lat: -23.562172, lng: -46.655794 },
    { name: 'The Blue Pub', lat: -23.563112, lng: -46.650338 },
    { name: 'Veloso', lat: -23.585107, lng: -46.635219 },
    { name: 'Let\'s Beer', lat: -23.586508, lng: -46.641739 },
    { name: 'O\'Malley\'s', lat: -23.558296, lng: -46.665923 },
    { name: 'Finnegan\'s', lat: -23.559547, lng: -46.676794 },
    { name: 'Partisans', lat: -23.561049, lng: -46.682555 },
    { name: 'Morrison', lat: -23.555106, lng: -46.690883 },
    { name: 'Cão Véio', lat: -23.558130, lng: -46.679508 },
    { name: 'Cervejaria Nacional', lat: -23.564740, lng: -46.690641 },
    { name: 'Brewdog', lat: -23.561309, lng: -46.693935 },
    { name: 'Rei das Batidas', lat: -23.570613, lng: -46.705977 }
];

const customIcon = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#F7B217',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};

const customIconWhite = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#FFFFFF',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};

function addMarker(marker) {
    var conteudoJanela = '<span style="font-weight:bold">' + marker.name + "</span>";
    var infoWindowModelo = new google.maps.InfoWindow({
        content: conteudoJanela
    }); 
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marker.lat, marker.lng),
        infowindow : infoWindowModelo,
        icon: customIcon,
        title: marker.name
    });
    google.maps.event.addListener(marker, 'click', function() {
        escondeMarkers(map);
        marker.infowindow.open(map, marker);
        marker.setIcon(customIconWhite);
    });
    google.maps.event.addListener(marker.infowindow, 'closeclick', function() {
        escondeMarkers(map);
    });
    markers.push(marker);
}

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.562172, -46.655794),
        gestureHandling: 'greedy',
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }  
    };
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    placesOfInterest.forEach(places => {
        addMarker(places);
    });
    addBotaoHome(map);
}

function escondeMarkers(map){
    markers.forEach(function(marker) {
        marker.infowindow.close(map, marker);
        marker.setIcon(customIcon);
    });    
}

function chamaHome()
{
    infoWindowHome = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindowHome, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindowHome, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Erro: O serviço falhou, verifique se seu navegador está com a opção geográfica habilitada e tente novamente.' :
                          'Erro: Seu navegador não suporta este serviço.');
    infoWindow.open(map);
}

function addBotaoHome(map)
{
    var controlDiv = document.createElement('div');
    var botao = document.createElement('button');
    var icone = document.createElement('div');

    botao.style.backgroundColor = '#FFFFFF';
    botao.style.border = 'none';
    botao.style.outline = 'none';
    botao.style.width = '40px';
    botao.style.height = '40px';
    botao.style.borderRadius = '2px';
    botao.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
    botao.style.cursor = 'pointer';
    botao.style.marginRight = '10px';
    botao.style.padding = '0px';
    botao.title = 'Clique aqui para ir à sua localização.';
    botao.setAttribute("onclick","chamaHome()");

    icone.style.marginLeft = '10px';
    icone.style.width = '18px';
    icone.style.height = '18px';
    icone.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
    icone.style.backgroundSize = '180px 18px';
    icone.style.backgroundPosition = '0px 0px';
    icone.style.backgroundRepeat = 'no-repeat';

    controlDiv.appendChild(botao);
    botao.appendChild(icone);
    
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}