const CommonOptions = [
    {
        icon: 'save',
    },
    {
        icon: 'cut',
    },
    {
        icon: 'copy',
    },
    {
        icon: 'paste',
    },
];

const LayerOptions = [
    {
        icon: 'layer-group',
    },
    {
        icon: 'eye-slash',
    },
    {
        icon: 'eye',
    },
    {
        icon: 'clone'
    }
];

const UnlessOptions = [
    {
        icon: 'crosshairs',
    },
    {
        icon: 'splotch',
    },
    {
        icon: 'tint-slash',
    },
    {
        icon: 'fill-drip',
    },
    {
        icon: 'vector-square',
    },
]

const ObjectOptions = [
    {
        icon: 'object-ungroup',
    },
    {
        icon: 'object-group',
    },
    {
        icon: 'crop-alt',
    },
    {
        icon: 'crop',
    },
];

const DrawOptions = [
    {
        icon: 'tape',
    },
    {
        icon: 'ruler',
        children: [
            {
                icon: 'ruler-vertical',
            },
            {
                icon: 'ruler-horizontal',
            },
            {
                icon: 'ruler-combined',
            },
        ]
    },
    {
        icon: 'pen',
        children: [
            {
                icon: 'pencil-ruler',
            },
            {
                icon: 'pencil-alt',
            },
            {
                icon: 'pen-nib',
            },
            {
                icon: 'pen-fancy',
            },
            {
                icon: 'pen-alt',
            },
        ]
    },
    {
        icon: 'highlighter',
    },
    {
        icon: 'marker',
    },
    {
        icon: 'eraser',
    },
    {
        icon: 'drafting-compass'
    },
    {
        icon: 'swatchbook',
    },
    {
        icon: 'spray-can',
    },
    {
        icon: 'palette',
    },
    {
        icon: 'paint-brush',
    },
    {
        icon: 'magic',
    },
    {
        icon: 'fill',
    },
    {
        icon: 'stamp',
    },
    {
        icon: 'paint-roller',
    },
    {
        icon: 'brush',
    },
    {
        icon: 'adjust',
    },
    {
        icon: 'tint',
    },
    {
        icon: 'eye-dropper',
    },
];


function Icon(icon) {
    return `fas fa-${icon}`;
}

export {
    DrawOptions,
    Icon
}