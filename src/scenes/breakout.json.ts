export default <any>{
    "id": "3820d28b-c2df-4a81-8669-6243566f5a49",
    "transform": {
        "localPosition": [
            0,
            0
        ],
        "localRotation": 0,
        "localScale": [
            1,
            1
        ],
        "pivot": [
            0,
            0
        ]
    },
    "components": {},
    "children": [
        {
            "id": "e1e9e414-13c7-4406-a033-38e96673d7b9",
            "transform": {
                "localPosition": [
                    0,
                    0
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "script": {
                    "scriptName": "scene-switcher"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "245b028b-a15b-42fa-9779-a1ad361fe759",
            "transform": {
                "localPosition": [
                    400,
                    450
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "circlecollider": {
                    "radius": 5
                },
                "ridgedbody": {
                    "type": 1,
                    "velocity": [
                        300,
                        300
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "ball"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "c6c63f08-ef0f-4fef-8acd-429888a47715",
            "transform": {
                "localPosition": [
                    400,
                    550
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "polygoncollider": {
                    "position": [
                        0,
                        0
                    ],
                    "points": [
                        [
                            0,
                            0
                        ],
                        [
                            20,
                            -20
                        ],
                        [
                            180,
                            -20
                        ],
                        [
                            200,
                            0
                        ],
                        [
                            200,
                            20
                        ],
                        [
                            0,
                            20
                        ]
                    ]
                },
                "ridgedbody": {
                    "type": 3,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "paddle"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "309f953a-a9d7-4287-9d55-7478d3e00e22",
            "transform": {
                "localPosition": [
                    0,
                    0
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 20,
                    "height": 549
                },
                "ridgedbody": {
                    "type": 1,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "643f9ab8-f979-413e-ba45-e24ba21680d5",
            "transform": {
                "localPosition": [
                    980,
                    0
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 20,
                    "height": 549
                },
                "ridgedbody": {
                    "type": 1,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "06f36299-19f6-46a0-baf4-6bcea5f02692",
            "transform": {
                "localPosition": [
                    0,
                    0
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 1000,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 1,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "54ebde49-5e70-4598-9895-987094e5663e",
            "transform": {
                "localPosition": [
                    95,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "eadf7ce3-13a8-4bad-9128-47a3ef0abe63",
            "transform": {
                "localPosition": [
                    150,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "f23295df-f48f-422a-992c-5bbae52e9b92",
            "transform": {
                "localPosition": [
                    205,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "bc491699-8679-4d92-8af3-876d0d87d1d2",
            "transform": {
                "localPosition": [
                    260,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "69e04a00-54eb-40d6-9376-357664b14c4e",
            "transform": {
                "localPosition": [
                    315,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "07027378-2172-4e7e-8742-00cdaeafb629",
            "transform": {
                "localPosition": [
                    370,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "a9a629cc-76c4-4227-9b6b-f06b8b923adb",
            "transform": {
                "localPosition": [
                    425,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "d483cf2e-f657-4ca4-85a3-285eee5de595",
            "transform": {
                "localPosition": [
                    480,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "35134a9a-287a-4c2a-815f-0d73c55d0d1e",
            "transform": {
                "localPosition": [
                    535,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "2a1aa2af-24c1-4825-81fd-4a13b9afefe5",
            "transform": {
                "localPosition": [
                    590,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "ee8922b0-cff6-49db-a966-a97ac8574d9f",
            "transform": {
                "localPosition": [
                    645,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "942ec5db-f6c1-4de6-ab55-afb5efa34f70",
            "transform": {
                "localPosition": [
                    700,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "beeb1d0e-1c5b-486c-a164-75050aab946c",
            "transform": {
                "localPosition": [
                    755,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "e87efa59-9b23-4795-8611-2e93975e91ac",
            "transform": {
                "localPosition": [
                    810,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "02172427-bc09-4435-9f15-fc278eeba104",
            "transform": {
                "localPosition": [
                    865,
                    100
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "e8be233e-2f60-421f-890f-0283a783976e",
            "transform": {
                "localPosition": [
                    95,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "67f60408-c035-47f4-895d-2d67ddce385f",
            "transform": {
                "localPosition": [
                    150,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "c96a49e3-0a12-4376-971c-aa5fdff73e2f",
            "transform": {
                "localPosition": [
                    205,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "273f9b86-f345-4682-ba39-3ea95dfe50e5",
            "transform": {
                "localPosition": [
                    260,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "cfdd4aa4-a472-45d8-8f96-edefc7b4f4b9",
            "transform": {
                "localPosition": [
                    315,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "2fba302b-3c6d-4a1d-a721-40a8443112b2",
            "transform": {
                "localPosition": [
                    370,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "1fc2ea5a-ba25-4053-8e97-2c6a3feacb88",
            "transform": {
                "localPosition": [
                    425,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "72a4300b-3b9a-4390-ac86-ef7154333bf5",
            "transform": {
                "localPosition": [
                    480,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "f038bc5e-b756-4a83-9f75-4c98284f971c",
            "transform": {
                "localPosition": [
                    535,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "c0ea1193-b168-4cf8-9d99-1ea8e06ad968",
            "transform": {
                "localPosition": [
                    590,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "cb814464-0959-4c37-a129-4330bbceb065",
            "transform": {
                "localPosition": [
                    645,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "2237e345-dec3-47e3-b183-83c400773071",
            "transform": {
                "localPosition": [
                    700,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "be607f8c-69d5-495f-acdc-63f976578334",
            "transform": {
                "localPosition": [
                    755,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "177e24bb-0046-4760-8b15-37c32e6b6c24",
            "transform": {
                "localPosition": [
                    810,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "c0e13f39-2a1e-4900-bf1d-0327f8ed6768",
            "transform": {
                "localPosition": [
                    865,
                    121
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "fa631a91-2719-4812-bde9-0a7feaf97ed3",
            "transform": {
                "localPosition": [
                    95,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "1898161d-1b9a-4541-9671-d1f7d5f0355d",
            "transform": {
                "localPosition": [
                    150,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "599c354c-2090-4989-bcab-8937f2a743ba",
            "transform": {
                "localPosition": [
                    205,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "56cea1e5-f0ae-412e-b23a-154d9f81313a",
            "transform": {
                "localPosition": [
                    260,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "1ab7dce3-6459-4658-a8e4-fb127d3f610b",
            "transform": {
                "localPosition": [
                    315,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "f609d4ee-8c28-4b25-9f58-e0b350e307f6",
            "transform": {
                "localPosition": [
                    370,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "ac147b85-e263-42a2-8585-dbaa9b9c44dd",
            "transform": {
                "localPosition": [
                    425,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "aca7605a-ec2b-4f5d-9e4e-08f1218d917c",
            "transform": {
                "localPosition": [
                    480,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "6cefcc4a-1d76-4fff-8e5a-39773f190785",
            "transform": {
                "localPosition": [
                    535,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "0f60e142-7e38-46df-ab82-400948585cd0",
            "transform": {
                "localPosition": [
                    590,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "ab0db960-a40b-44b9-8990-dfdb42b607db",
            "transform": {
                "localPosition": [
                    645,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "54fc1bdb-cb3a-4c3a-bcf3-1e0ee5741cb3",
            "transform": {
                "localPosition": [
                    700,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "200ee89f-f21a-47d9-a0d6-d83b2e6e940b",
            "transform": {
                "localPosition": [
                    755,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "c2b27d61-7120-4e7a-845d-fff5bad6c5a6",
            "transform": {
                "localPosition": [
                    810,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "54d8b3c1-2cad-4002-9fd9-f19122f5c9f3",
            "transform": {
                "localPosition": [
                    865,
                    142
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "8d0fa749-6fcd-4e04-bbe5-e53c6d847a15",
            "transform": {
                "localPosition": [
                    95,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "551fe19e-61aa-47b6-8267-6133fdd19661",
            "transform": {
                "localPosition": [
                    150,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "c869f534-85c0-4ac5-a9d8-ad6630abe676",
            "transform": {
                "localPosition": [
                    205,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "23edb3f9-84e1-4d4b-a7e9-7ad92e85f5a8",
            "transform": {
                "localPosition": [
                    260,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "8ec7b0fa-a71a-4195-af54-70d7e2bb3f9d",
            "transform": {
                "localPosition": [
                    315,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "d8d44372-8329-4642-8ab6-321ac510e3b4",
            "transform": {
                "localPosition": [
                    370,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "b36e4236-7ffe-4c09-86ff-825c50afe568",
            "transform": {
                "localPosition": [
                    425,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "f86d970d-6bcb-4a8c-bb65-266dc29fa31b",
            "transform": {
                "localPosition": [
                    480,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "b7409816-ab74-497c-a06e-4f44c68195f6",
            "transform": {
                "localPosition": [
                    535,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "5f9db0a6-2b14-4701-a79d-7d4b47eb6343",
            "transform": {
                "localPosition": [
                    590,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "5ad6053f-82a3-4372-a0fb-98f5bfa58ef7",
            "transform": {
                "localPosition": [
                    645,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "5071ca48-d1f1-4b7b-bb56-5a2a7468dfb3",
            "transform": {
                "localPosition": [
                    700,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "9c7458dc-96ee-4153-b098-f58f04165eb8",
            "transform": {
                "localPosition": [
                    755,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "f2afa4fe-383f-4193-8bd0-8e6e44559690",
            "transform": {
                "localPosition": [
                    810,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "78ff1773-ce63-4ac6-b056-ae0358809970",
            "transform": {
                "localPosition": [
                    865,
                    163
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "47b869f0-50fa-4750-a549-cdbf1ddaead2",
            "transform": {
                "localPosition": [
                    95,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "cac53dbc-9ea7-483c-a839-66241854409f",
            "transform": {
                "localPosition": [
                    150,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "dfd35ac9-144e-4427-ad53-619343f8f207",
            "transform": {
                "localPosition": [
                    205,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "83a60fb8-0f7e-4188-9ec4-64bde38e9506",
            "transform": {
                "localPosition": [
                    260,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "6eacbe3c-5774-439a-bfdd-fca03f0edcf4",
            "transform": {
                "localPosition": [
                    315,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "db62f1c2-57bc-4169-bff6-1ebe325c43ef",
            "transform": {
                "localPosition": [
                    370,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "9b6cbb92-3778-43bf-a237-3bf798611b0d",
            "transform": {
                "localPosition": [
                    425,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "556463b2-e493-4945-8ceb-dbe640d7ad25",
            "transform": {
                "localPosition": [
                    480,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "ca18e9ec-053f-47cc-a90f-79fff15eca30",
            "transform": {
                "localPosition": [
                    535,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "19857892-1b53-4e44-ae4e-1930407597ca",
            "transform": {
                "localPosition": [
                    590,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "3210ab48-e7b1-4393-a1b0-05e47d99c20b",
            "transform": {
                "localPosition": [
                    645,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "a8ac5382-0049-45db-aaa4-b912c843a6bf",
            "transform": {
                "localPosition": [
                    700,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "1df5449b-aacf-4c5e-9077-3151e77529b8",
            "transform": {
                "localPosition": [
                    755,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "269704a2-d927-4141-aded-8dda1d53acea",
            "transform": {
                "localPosition": [
                    810,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "219917f1-9640-4311-8dd6-38274b664b87",
            "transform": {
                "localPosition": [
                    865,
                    184
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "566e71e6-2a9f-46cd-9fd5-48ebb4a58d02",
            "transform": {
                "localPosition": [
                    95,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "33c977c7-55e6-4b01-9eb6-67d8be0e31b3",
            "transform": {
                "localPosition": [
                    150,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "85a44c60-8573-4f28-a79e-8e6e61289f82",
            "transform": {
                "localPosition": [
                    205,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "bd754a07-604a-4cfc-bba5-6c32e6cc328d",
            "transform": {
                "localPosition": [
                    260,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "5cb81942-dd87-4633-b46a-06fb3dcda67d",
            "transform": {
                "localPosition": [
                    315,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "2080188f-b02d-41da-8b1b-1502f726c89a",
            "transform": {
                "localPosition": [
                    370,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "397dbddc-9a78-4990-8119-293d56dd4eee",
            "transform": {
                "localPosition": [
                    425,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "4bfaf896-0af0-42b3-86eb-484ace3a1c39",
            "transform": {
                "localPosition": [
                    480,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "ccd854e0-2990-4427-abb8-64c6be1530c9",
            "transform": {
                "localPosition": [
                    535,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "22ffdae9-a27f-441f-9b37-b362a0df5515",
            "transform": {
                "localPosition": [
                    590,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "89578b4e-ab03-4b92-a79a-b56ff21bc176",
            "transform": {
                "localPosition": [
                    645,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "99264fbd-173a-4312-887a-b926324dc381",
            "transform": {
                "localPosition": [
                    700,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "d3ae1a77-f698-46b6-95d6-360c8c74f07e",
            "transform": {
                "localPosition": [
                    755,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "9c61138c-e9c7-41b8-8476-05b172997013",
            "transform": {
                "localPosition": [
                    810,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "7b4428b1-c2da-4fe5-9d43-ef1d23b95d24",
            "transform": {
                "localPosition": [
                    865,
                    205
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "6791ad10-ecd3-40f8-800f-faecd54da2a5",
            "transform": {
                "localPosition": [
                    95,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "37108519-10b0-458a-ad52-f7ba5052dd7d",
            "transform": {
                "localPosition": [
                    150,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "a2ff1548-e4c4-46fd-8846-1bd255215b78",
            "transform": {
                "localPosition": [
                    205,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "332813b4-5a7c-462b-9f8c-24e82633af86",
            "transform": {
                "localPosition": [
                    260,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "86aacf74-ccf8-44fe-a995-f269fff5fb54",
            "transform": {
                "localPosition": [
                    315,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "8f743531-a079-473b-bf7b-4ee617861d98",
            "transform": {
                "localPosition": [
                    370,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "291cfd0c-642a-4994-8a56-c5ce2700e09d",
            "transform": {
                "localPosition": [
                    425,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "62fcbebb-648f-441d-9bcb-19a198f12f7a",
            "transform": {
                "localPosition": [
                    480,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "aa9b6230-be0a-4524-892e-7cd3e2dd5d3d",
            "transform": {
                "localPosition": [
                    535,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "47a2ca9f-9cea-4537-9979-6c96ed914f14",
            "transform": {
                "localPosition": [
                    590,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "f54f0696-ed70-4a88-bb33-f45e1c5712e1",
            "transform": {
                "localPosition": [
                    645,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "43ffb726-6240-4ddd-8190-67cb193bfef5",
            "transform": {
                "localPosition": [
                    700,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "7e7f4b1d-899f-414d-8278-1be689ef66b7",
            "transform": {
                "localPosition": [
                    755,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "4157ff6b-9282-48f5-969e-b42e12a8ae9f",
            "transform": {
                "localPosition": [
                    810,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "7b3d6cff-60b9-40ef-92e4-42efb6fe34ab",
            "transform": {
                "localPosition": [
                    865,
                    226
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "1fd27ebe-70a4-4044-81a1-84a47d992f74",
            "transform": {
                "localPosition": [
                    95,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "28a3ca3c-2d0f-4574-99dc-5c05eb1423b8",
            "transform": {
                "localPosition": [
                    150,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "e69372b6-514c-430f-bdd9-e5c8039c6ec7",
            "transform": {
                "localPosition": [
                    205,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "8405d3d4-550d-4b49-96ce-51bf3e97667f",
            "transform": {
                "localPosition": [
                    260,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "61191d32-fb7e-4541-8361-b6c44032572c",
            "transform": {
                "localPosition": [
                    315,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "836d1f15-030f-40ea-b507-6d08c83bbd64",
            "transform": {
                "localPosition": [
                    370,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "7552660e-f373-4c8a-b95e-aae6d2e2ca03",
            "transform": {
                "localPosition": [
                    425,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "f8965e21-7695-4c1c-a5ed-c00e09ba366a",
            "transform": {
                "localPosition": [
                    480,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "8cf81ef5-7754-42d9-a11d-ba174621e436",
            "transform": {
                "localPosition": [
                    535,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "28e6e1f6-7443-41cc-be92-874dd1ddee07",
            "transform": {
                "localPosition": [
                    590,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "0636a287-f446-4d43-a6b3-0ac0d6571331",
            "transform": {
                "localPosition": [
                    645,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "8d83a94e-f662-4ed4-832f-8b9a3df333d8",
            "transform": {
                "localPosition": [
                    700,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "e9065017-4bb8-49fc-9321-bc3ef40c9f96",
            "transform": {
                "localPosition": [
                    755,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "435f42d5-f98f-45a5-9ac3-580e454c33ba",
            "transform": {
                "localPosition": [
                    810,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        },
        {
            "id": "cd890f10-40e2-425a-af92-ba1b207e8375",
            "transform": {
                "localPosition": [
                    865,
                    247
                ],
                "localRotation": 0,
                "localScale": [
                    1,
                    1
                ],
                "pivot": [
                    0,
                    0
                ]
            },
            "components": {
                "boxcollider": {
                    "width": 54,
                    "height": 20
                },
                "ridgedbody": {
                    "type": 2,
                    "velocity": [
                        0,
                        0
                    ],
                    "restitution": 1
                },
                "script": {
                    "scriptName": "brick"
                }
            },
            "children": [],
            "orderInLayer": 0,
            "renderLayer": "default"
        }
    ],
    "orderInLayer": 0,
    "renderLayer": "default"
}