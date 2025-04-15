var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.00922295963255948,
        "pitch": 0.0075520039580077025,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.8486461740538083,
          "pitch": 0.40997557158454256,
          "rotation": 6.283185307179586,
          "target": "1-living-room"
        },
        {
          "yaw": -0.13521006522695345,
          "pitch": 0.2747617423606954,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1273342672806521,
          "pitch": 0.06641407571834534,
          "title": "Boiler and System Room",
          "text": "Sustainable, energy-efficient electric heating and water systems with improved energy control via a smart meter."
        },
        {
          "yaw": 1.9351434810507637,
          "pitch": 0.11182735646383435,
          "title": "Laundry and Storage",
          "text": "Practical and functional space created from an inefficient corner"
        }
      ]
    },
    {
      "id": "1-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04058933896729755,
        "pitch": 0.004187561655511374,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.21469043254856857,
          "pitch": 0.44491707115220436,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": -2.284469711690992,
          "pitch": 0.08271994840222163,
          "rotation": 0,
          "target": "5-wc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.604477474572235,
          "pitch": -0.005996111910322455,
          "title": "Utilities Panel",
          "text": "Sustainable electric panel and water shut-off switch for efficient energy use and easy maintenance access"
        }
      ]
    },
    {
      "id": "2-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.43098946834966156,
        "pitch": 0.027533227755519363,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.3344481278719513,
          "pitch": 0.3511446091955932,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": 1.0564748585834582,
          "pitch": 0.40761177966958506,
          "rotation": 0,
          "target": "3-dressing-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dressing-area",
      "name": "Dressing Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.1777254403481674,
          "pitch": 0.37751044815743384,
          "rotation": 6.283185307179586,
          "target": "2-bedroom"
        },
        {
          "yaw": -2.8370337002873764,
          "pitch": 0.4181180060802081,
          "rotation": 0,
          "target": "4-en-suite-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-en-suite-bathroom",
      "name": "En suite bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.2028785232976702,
          "pitch": 0.5244624003543716,
          "rotation": 6.283185307179586,
          "target": "3-dressing-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wc",
      "name": "Wc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.01603089898838661,
        "pitch": 0.07258760044637214,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.0449902897273837,
          "pitch": 0.5150549299541431,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Tooting Residence Home Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
