export default DEBUG_LAYERS = [
  {
    "id": "background",
    "type": "background",
    "paint": {
      "background-color": "black"
    }
  },
  {
    "id": "natural",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "natural",
    "paint": {
      "fill-color": "#19A974",
      "fill-opacity": 0.5
    }
  },
  {
    "id": "landuse",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "paint": {
      "fill-color": "white",
      "fill-opacity": 0.25
    }
  },
  {
    "id": "water",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "water",
    "paint": {
      "fill-color": "#268bd2",
      "fill-opacity": 0.5
    }
  },
  {
    "id": "physical",
    "type": "line",
    "source": "protomaps",
    "source-layer": "physical",
    "paint": {
      "line-color": "#357EDD",
      "line-opacity": 0.5
    }
  },
  {
    "id": "buildings",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "buildings",
    "paint": {
      "fill-color": "#6c71c4",
      "fill-opacity": 0.8
    }
  },
  {
    "id": "roads",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "paint": {
      "line-color": "white",
      "line-opacity": 0.5
    }
  },
  {
    "id": "boundaries",
    "type": "line",
    "source": "protomaps",
    "source-layer": "boundaries",
    "paint": {
      "line-color": "#5E2CA5",
      "line-opacity": 0.5
    }
  },
  {
    "id": "transit",
    "type": "line",
    "source": "protomaps",
    "source-layer": "transit",
    "paint": {
      "line-color": "#dc322f",
      "line-opacity": 0.5
    }
  },
  {
    "id": "pois",
    "type": "circle",
    "source": "protomaps",
    "source-layer": "pois",
    "paint": {
      "circle-radius":2,
      "circle-color":"#268bd2",
      "circle-opacity":0.9
    }
  },
  {
    "id": "places",
    "type": "circle",
    "source": "protomaps",
    "source-layer": "places",
    "paint": {
      "circle-radius":5,
      "circle-color":"#b58900",
      "circle-opacity":0.9
    }
  },
  {
    "id": "mask",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "mask",
    "paint": {
      "fill-color":"#000000",
      "fill-opacity":0.5
    }
  }
]
