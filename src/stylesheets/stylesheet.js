const ToolStyleSheet = {
    minWidth: '36px',
    minHeight: '120px',
    background: 'rgb(37, 37, 38)',
    'border-top-right-radius': '5px',
    'border-bottom-right-radius': '5px',
}

const ToolItemStyleSheet = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: '36px',

    color: "#ffffff",

    background: 'transparent',
}

const CanvasStyleSheet = {
    width: '640px',
    height: '480px',

    boxShadow: '0px 0px 10px 0px rgb(30, 30, 30)',
}

const MonitorStyleSheet = {
    position: 'fixed',
    bottom: '0em',
    right: '2em',
    background: 'rgb(30, 30, 30)',

    padding: '10px 30px',
    'border-top-left-radius': '5px',
    'border-top-right-radius': '5px',
}

const LayerStyleSheet = {
    minWidth: '72px',
    minHeight: '360px',
    background: 'rgb(37, 37, 38)',
}

export {
    ToolStyleSheet,
    ToolItemStyleSheet,
    CanvasStyleSheet,
    MonitorStyleSheet,
    LayerStyleSheet
}