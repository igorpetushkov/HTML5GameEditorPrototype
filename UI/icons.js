import {
    ChevronLeft,
    ChevronRight,
    ViewColumn,
    ViewCarousel,
    ViewStream,
    ViewList,
    FirstPage,
    LastPage,
    Tune,
    Functions,
    VideogameAsset,
    DeveloperBoard,
    FormatSize,
    Close,
    Check,
    MoreHoriz,
    KeyboardArrowDown,
    KeyboardArrowUp,
    Lock,
    LockOpen,
    LockOutline,
    ClearAll,
    ContentCopy,
    FilterList,
    Add,
    Remove,
    Cached,
    OpenWith,
    SettingsEthernet,
    RotateLeft,
    RotateRight,
    Rotate90DegreesCcw,
    SkipNext,
    SkipPrevious,
    PlayArrow,
    Pause,
    Stop,
    Layers,
    Style,
    SettingsBackupRestore,
} from 'material-ui-icons';

const _icons = {
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
    'view-column': ViewColumn,
    'view-carousel': ViewCarousel,
    'view-stream': ViewStream,
    'view-list': ViewList,
    'first-page': FirstPage,
    'last-page': LastPage,
    'tune': Tune,
    'functions': Functions,
    'videogame-asset': VideogameAsset,
    'developer-board': DeveloperBoard,
    'format-size': FormatSize,
    'close': Close,
    'check': Check,
    'more-horiz': MoreHoriz,
    'keyboard-arrow-down': KeyboardArrowDown,
    'keyboard-arrow-up': KeyboardArrowUp,
    'lock': Lock,
    'lock-open': LockOpen,
    'lock-outline': LockOutline,
    'clear-all': ClearAll,
    'content-copy': ContentCopy,
    'filter-list': FilterList,
    'add': Add,
    'remove': Remove,
    'cached': Cached,
    'open-with': OpenWith,
    'settings-ethernet': SettingsEthernet,
    'rotate-left': RotateLeft,
    'rotate-right': RotateRight,
    'rotate-90-degrees-ccw': Rotate90DegreesCcw,
    'skip-next': SkipNext,
    'skip-previous': SkipPrevious,
    'play-arrow': PlayArrow,
    'pause': Pause,
    'stop': Stop,
    'layers': Layers,
    'style': Style,
    'settings-backup-restore': SettingsBackupRestore,
};

export default name => name && _icons[name.toLowerCase()];