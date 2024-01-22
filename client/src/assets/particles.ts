import {
  CollisionMode,
  DestroyType,
  DivType,
  EasingType,
  InteractivityDetect,
  MoveDirection,
  OutMode,
  RotateDirection,
  StartValueType
} from "@tsparticles/engine";
import {IParticlesProps} from "@tsparticles/angular";


//let iRandom: {enable: boolean, minimumValue: number} = undefined;
export const particlesOpt:IParticlesProps = {
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#000"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 30,
  "interactivity": {
    "detectsOn": InteractivityDetect.window,
    "events": {
      "onClick": {
        "enable": false,
        "mode": []
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": DivType.circle
      },
      "onHover": {
        "enable": true,
        "mode": "trail",
        "parallax": {
          "enable": true,
          "force": 1,
          "smooth": 95
        }
      },
      "resize": {
        "enable": true,
        delay: 0
      }
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": EasingType.easeOutQuad,
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 200,
        "duration": 0.4,
        "mix": false
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 100,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": EasingType.easeOutQuad
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "trail": {
        "delay": 0.005,
        "pauseOnStop": true,
        "quantity": 5,
        "particles": {
          "color": {
            "value": "#ff0000",
            "animation": {
              "enable": true,
              "speed": 400,
              "sync": true
            }
          },
          "collisions": {
            "enable": false,
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.0
                }
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.0
                }
              }
            },
            "overlap": {}
          },
          "links": {
            "enable": false,
            "shadow": {},
            "triangles": {}
          },
          "move": {
            "outModes": {
              "default": OutMode.destroy
            },
            "speed": 2,
            "angle": {
              offset: 0,
              value: 0
            },
            "attract": {
              "rotate": {}
            },
            "distance": {},
            "gravity": {},
            "path": {
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.0
                }
              }
            },
            "trail": {}
          },
          "size": {
            "value": 5,
            "animation": {
              "enable": true,
              "speed": 5,
              "minimumValue": 1,
              "sync": true,
              "startValue": StartValueType.min,
              "destroy": DestroyType.max
            },
            "random": {
              "enable": false,
              "minimumValue": 0
            }
          },
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.0
              }
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.0
              }
            }
          },
          "destroy": {
            "split": {
              "factor": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.0
                }
              },
              "rate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.0
                }
              }
            }
          },
          "life": {
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0.0
              }
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0
              }
            }
          },
          "number": {
            "density": {}
          },
          "opacity": {
            "animation": {},
            "random": {
              "enable": false,
              "minimumValue": 0.0
            }
          },
          "roll": {
            "darken": {},
            "enlighten": {}
          },
          "rotate": {
            "animation": {}
          },
          "shadow": {
            "offset": {}
          },
          "shape": {},
          "stroke": {
            "color": {
              "value": "",
              "animation": {
                "count": 0,
                "enable": false,
                "offset": {
                  "max": 0,
                  "min": 0
                },
                "speed": 0,
                "sync": false
              }
            }
          },
          "tilt": {
            "animation": {}
          },
          "twinkle": {
            "lines": {},
            "particles": {}
          },
          "wobble": {}
        }
      }
    }
  },
  "manualParticles": [],
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  },
  "particles": {
    "bounce": {
      "horizontal": {
        "value": 1
      },
      "vertical": {
        "value": 1
      }
    },
    "collisions": {
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "enable": true,
      "mode": CollisionMode.bounce,
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#f00",
      "animation": {
        "h": {
          "count": 0,
          "enable": true,
          "offset": 0,
          "speed": 50,
          "sync": false
        },
        "s": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "sync": true
        },
        "l": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "sync": true
        }
      }
    },
    "destroy": {
      "mode": DestroyType.none,
      "split": {
        "count": 1,
        "factor": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 3
        },
        "rate": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true
      }
    },
    "gradient": [],
    "groups": {},
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "links": {
      "blink": false,
      "color": {
        "value": "random"
      },
      "consent": false,
      "distance": 100,
      "enable": true,
      "frequency": 1,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#00ff00"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "decay": 0,
      "distance": {},
      "direction": MoveDirection.none,
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 0.01,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": OutMode.out,
        "bottom": OutMode.out,
        "left": OutMode.out,
        "right": OutMode.out,
        "top": OutMode.out
      },
      "random": false,
      "size": false,
      "speed": 2,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {
          "color": "#000000"
        }
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "height": 1200,
        "width": 1000
      },
      "limit": {
        mode: "wait",
        value: 0,
      },
      "value": 200
    },
    "opacity": {
      "value": {
        "min": 0.3,
        "max": 0.8
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 0.5,
        "sync": false,
        "destroy": DestroyType.none,
        "startValue": StartValueType.random,
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "reduceDuplicates": false,
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "rotate": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": RotateDirection.clockwise,
      "path": false
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "options": {},
      "type": "circle"
    },
    "size": {
      "value": {
        "min": 1,
        "max": 3
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 3,
        "sync": false,
        "destroy": DestroyType.none,
        "startValue": StartValueType.random,
      }
    },
    "stroke": {
      "width": 0,
      "color": {
        "value": "",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 0,
            "sync": false
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          }
        }
      }
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": 50
    },
    "zIndex": {
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "themes": [],
  "zLayers": 100
};
