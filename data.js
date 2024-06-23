var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 2.563213665634498,
        "pitch": 0.022547637822761146,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.098872231889098,
          "pitch": 0.06894489168240092,
          "rotation": 0,
          "target": "1-bedroom"
        },
        {
          "yaw": -1.0578366654548468,
          "pitch": 0.022152865440808966,
          "rotation": 0,
          "target": "2-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
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
        }
      ],
      "faceSize": 980,
      "initialViewParameters": {
        "yaw": 2.342246214622378,
        "pitch": 0.13764678961091903,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.5806303802089872,
          "pitch": 0.10556605833311927,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom",
      "name": "Bathroom",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -0.7732042405720048,
        "pitch": 0.5279181093365093,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.103534497278492,
          "pitch": 0.18196833398038592,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360 Viewer",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
