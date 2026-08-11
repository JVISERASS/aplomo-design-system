/* @ds-bundle: {"format":4,"namespace":"AplomoDesignSystem_c0efc3","components":[{"name":"AssistantTrace","sourcePath":"components/assistant/AssistantTrace.jsx"},{"name":"Citation","sourcePath":"components/assistant/Citation.jsx"},{"name":"Composer","sourcePath":"components/assistant/Composer.jsx"},{"name":"Message","sourcePath":"components/assistant/Message.jsx"},{"name":"BarSeries","sourcePath":"components/charts/BarSeries.jsx"},{"name":"ShareBar","sourcePath":"components/charts/ShareBar.jsx"},{"name":"Sparkline","sourcePath":"components/charts/Sparkline.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"CopyValue","sourcePath":"components/core/CopyValue.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Spinner","sourcePath":"components/core/Spinner.jsx"},{"name":"AsciiDiagram","sourcePath":"components/data/AsciiDiagram.jsx"},{"name":"AsciiMeter","sourcePath":"components/data/AsciiMeter.jsx"},{"name":"AuditTimeline","sourcePath":"components/data/AuditTimeline.jsx"},{"name":"BulkActionBar","sourcePath":"components/data/BulkActionBar.jsx"},{"name":"ColumnManager","sourcePath":"components/data/ColumnManager.jsx"},{"name":"ConfigDiff","sourcePath":"components/data/ConfigDiff.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DataValue","sourcePath":"components/data/DataValue.jsx"},{"name":"KeyValue","sourcePath":"components/data/KeyValue.jsx"},{"name":"List","sourcePath":"components/data/List.jsx"},{"name":"LogStream","sourcePath":"components/data/LogStream.jsx"},{"name":"Matrix","sourcePath":"components/data/Matrix.jsx"},{"name":"MetricTile","sourcePath":"components/data/MetricTile.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Quota","sourcePath":"components/data/Quota.jsx"},{"name":"Skeleton","sourcePath":"components/data/Skeleton.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ErrorState","sourcePath":"components/feedback/ErrorState.jsx"},{"name":"FileDrop","sourcePath":"components/feedback/FileDrop.jsx"},{"name":"FrozenState","sourcePath":"components/feedback/FrozenState.jsx"},{"name":"InlineAlert","sourcePath":"components/feedback/InlineAlert.jsx"},{"name":"Menu","sourcePath":"components/feedback/Menu.jsx"},{"name":"OperationLog","sourcePath":"components/feedback/OperationLog.jsx"},{"name":"PageError","sourcePath":"components/feedback/PageError.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Steps","sourcePath":"components/feedback/Steps.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"DateRange","sourcePath":"components/forms/DateRange.jsx"},{"name":"DurationInput","sourcePath":"components/forms/DurationInput.jsx"},{"name":"FormActions","sourcePath":"components/forms/FormActions.jsx"},{"name":"FormSection","sourcePath":"components/forms/FormSection.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"OtpInput","sourcePath":"components/forms/OtpInput.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"UnitInput","sourcePath":"components/forms/UnitInput.jsx"},{"name":"AppShell","sourcePath":"components/layout/AppShell.jsx"},{"name":"CenteredPage","sourcePath":"components/layout/CenteredPage.jsx"},{"name":"Columns","sourcePath":"components/layout/Columns.jsx"},{"name":"DetailPanel","sourcePath":"components/layout/DetailPanel.jsx"},{"name":"PageHeader","sourcePath":"components/layout/PageHeader.jsx"},{"name":"Panel","sourcePath":"components/layout/Panel.jsx"},{"name":"Prose","sourcePath":"components/layout/Prose.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"Split","sourcePath":"components/layout/Split.jsx"},{"name":"Stack","sourcePath":"components/layout/Stack.jsx"},{"name":"Toolbar","sourcePath":"components/layout/Toolbar.jsx"},{"name":"TopBar","sourcePath":"components/layout/TopBar.jsx"},{"name":"SharedValue","sourcePath":"components/motion/SharedValue.jsx"},{"name":"Stagger","sourcePath":"components/motion/Stagger.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"CommandPalette","sourcePath":"components/navigation/CommandPalette.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}]} */
var AplomoDesignSystem_c0efc3 = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    Accordion: () => Accordion,
    AppShell: () => AppShell,
    AsciiDiagram: () => AsciiDiagram,
    AsciiMeter: () => AsciiMeter,
    AssistantTrace: () => AssistantTrace,
    AuditTimeline: () => AuditTimeline,
    Avatar: () => Avatar,
    Badge: () => Badge,
    BarSeries: () => BarSeries,
    Breadcrumb: () => Breadcrumb,
    BulkActionBar: () => BulkActionBar,
    Button: () => Button,
    CenteredPage: () => CenteredPage,
    Checkbox: () => Checkbox,
    Chip: () => Chip,
    Citation: () => Citation,
    ColumnManager: () => ColumnManager,
    Columns: () => Columns,
    CommandPalette: () => CommandPalette,
    Composer: () => Composer,
    ConfigDiff: () => ConfigDiff,
    CopyValue: () => CopyValue,
    DataTable: () => DataTable,
    DataValue: () => DataValue,
    DateRange: () => DateRange,
    DetailPanel: () => DetailPanel,
    Dialog: () => Dialog,
    Divider: () => Divider,
    DurationInput: () => DurationInput,
    EmptyState: () => EmptyState,
    ErrorState: () => ErrorState,
    FileDrop: () => FileDrop,
    FormActions: () => FormActions,
    FormSection: () => FormSection,
    FrozenState: () => FrozenState,
    Icon: () => Icon,
    IconButton: () => IconButton,
    InlineAlert: () => InlineAlert,
    Input: () => Input,
    KeyValue: () => KeyValue,
    List: () => List,
    LogStream: () => LogStream,
    Matrix: () => Matrix,
    Menu: () => Menu,
    Message: () => Message,
    MetricTile: () => MetricTile,
    OperationLog: () => OperationLog,
    OtpInput: () => OtpInput,
    PageError: () => PageError,
    PageHeader: () => PageHeader,
    Pagination: () => Pagination,
    Panel: () => Panel,
    ProgressBar: () => ProgressBar,
    Prose: () => Prose,
    Quota: () => Quota,
    Radio: () => Radio,
    SearchField: () => SearchField,
    SectionHeader: () => SectionHeader,
    SegmentedControl: () => SegmentedControl,
    Select: () => Select,
    ShareBar: () => ShareBar,
    SharedValue: () => SharedValue,
    SideNav: () => SideNav,
    Skeleton: () => Skeleton,
    Sparkline: () => Sparkline,
    Spinner: () => Spinner,
    Split: () => Split,
    Stack: () => Stack,
    Stagger: () => Stagger,
    Steps: () => Steps,
    Switch: () => Switch,
    Tabs: () => Tabs,
    Textarea: () => Textarea,
    Toast: () => Toast,
    Toolbar: () => Toolbar,
    Tooltip: () => Tooltip,
    TopBar: () => TopBar,
    UnitInput: () => UnitInput,
    apIconNames: () => apIconNames,
    registerApIcons: () => registerApIcons
  });

  // ../../../../../../var/folders/0p/362tnwkd20d2_h3qmwfxynt00000gn/T/aplomo-umd-Ifq6xs/react-global.js
  var React = globalThis.React;
  if (!React) throw new Error("[Aplomo] _ds_bundle.js necesita que React este cargado antes.");
  var react_global_default = React;
  var {
    createElement,
    Fragment,
    Children,
    cloneElement,
    isValidElement,
    createContext,
    forwardRef,
    memo,
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useMemo,
    useCallback,
    useContext,
    useReducer,
    useId
  } = React;

  // components/core/icon-data.js
  var AP_ICONS = {
    "activity": [["path", { "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" }]],
    "alert-circle": [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }], ["line", { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }]],
    "alert-triangle": [["path", { "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }], ["path", { "d": "M12 9v4" }], ["path", { "d": "M12 17h.01" }]],
    "bell": [["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" }]],
    "calendar": [["path", { "d": "M8 2v3" }], ["path", { "d": "M16 2v3" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }], ["path", { "d": "M3 9h18" }]],
    "check": [["path", { "d": "M20 6 9 17l-5-5" }]],
    "check-circle-2": [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m9 12 2 2 4-4" }]],
    "chevron-down": [["path", { "d": "m6 9 6 6 6-6" }]],
    "chevron-left": [["path", { "d": "m15 18-6-6 6-6" }]],
    "chevron-right": [["path", { "d": "m9 18 6-6-6-6" }]],
    "circle-check": [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m9 12 2 2 4-4" }]],
    "circle-dashed": [["path", { "d": "M10.1 2.182a10 10 0 0 1 3.8 0" }], ["path", { "d": "M13.9 21.818a10 10 0 0 1-3.8 0" }], ["path", { "d": "M17.609 3.721a10 10 0 0 1 2.69 2.7" }], ["path", { "d": "M2.182 13.9a10 10 0 0 1 0-3.8" }], ["path", { "d": "M20.279 17.609a10 10 0 0 1-2.7 2.69" }], ["path", { "d": "M21.818 10.1a10 10 0 0 1 0 3.8" }], ["path", { "d": "M3.721 6.391a10 10 0 0 1 2.7-2.69" }], ["path", { "d": "M6.391 20.279a10 10 0 0 1-2.69-2.7" }]],
    "circle-x": [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m15 9-6 6" }], ["path", { "d": "m9 9 6 6" }]],
    "clipboard-paste": [["path", { "d": "M11 14h10" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v1.344" }], ["path", { "d": "m17 18 4-4-4-4" }], ["path", { "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" }], ["rect", { "x": "8", "y": "2", "width": "8", "height": "4", "rx": "1" }]],
    "columns-3": [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M9 3v18" }], ["path", { "d": "M15 3v18" }]],
    "copy": [["rect", { "width": "14", "height": "14", "x": "8", "y": "8", "rx": "2", "ry": "2" }], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]],
    "cpu": [["path", { "d": "M12 20v2" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M17 20v2" }], ["path", { "d": "M17 2v2" }], ["path", { "d": "M2 12h2" }], ["path", { "d": "M2 17h2" }], ["path", { "d": "M2 7h2" }], ["path", { "d": "M20 12h2" }], ["path", { "d": "M20 17h2" }], ["path", { "d": "M20 7h2" }], ["path", { "d": "M7 20v2" }], ["path", { "d": "M7 2v2" }], ["rect", { "x": "4", "y": "4", "width": "16", "height": "16", "rx": "2" }], ["rect", { "x": "8", "y": "8", "width": "8", "height": "8", "rx": "1" }]],
    "database": [["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }], ["path", { "d": "M3 5V19A9 3 0 0 0 21 19V5" }], ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]],
    "download": [["path", { "d": "M12 15V3" }], ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["path", { "d": "m7 10 5 5 5-5" }]],
    "edit-2": [["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }]],
    "file": [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }]],
    "file-text": [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M10 9H8" }], ["path", { "d": "M16 13H8" }], ["path", { "d": "M16 17H8" }]],
    "filter": [["path", { "d": "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" }]],
    "git-commit-horizontal": [["circle", { "cx": "12", "cy": "12", "r": "3" }], ["line", { "x1": "3", "x2": "9", "y1": "12", "y2": "12" }], ["line", { "x1": "15", "x2": "21", "y1": "12", "y2": "12" }]],
    "heart": [["path", { "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" }]],
    "history": [["path", { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { "d": "M3 3v5h5" }], ["path", { "d": "M12 7v5l4 2" }]],
    "info": [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 16v-4" }], ["path", { "d": "M12 8h.01" }]],
    "link": [["path", { "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }], ["path", { "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]],
    "lock": [["rect", { "width": "18", "height": "11", "x": "3", "y": "11", "rx": "2", "ry": "2" }], ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]],
    "log-out": [["path", { "d": "m16 17 5-5-5-5" }], ["path", { "d": "M21 12H9" }], ["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]],
    "mail": [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }]],
    "menu": [["path", { "d": "M4 5h16" }], ["path", { "d": "M4 12h16" }], ["path", { "d": "M4 19h16" }]],
    "minus": [["path", { "d": "M5 12h14" }]],
    "more-horizontal": [["circle", { "cx": "12", "cy": "12", "r": "1" }], ["circle", { "cx": "19", "cy": "12", "r": "1" }], ["circle", { "cx": "5", "cy": "12", "r": "1" }]],
    "octagon-alert": [["path", { "d": "M12 16h.01" }], ["path", { "d": "M12 8v4" }], ["path", { "d": "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" }]],
    "package": [["path", { "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" }], ["path", { "d": "M12 22V12" }], ["polyline", { "points": "3.29 7 12 12 20.71 7" }], ["path", { "d": "m7.5 4.27 9 5.15" }]],
    "paperclip": [["path", { "d": "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" }]],
    "pause": [["rect", { "x": "14", "y": "3", "width": "5", "height": "18", "rx": "1" }], ["rect", { "x": "5", "y": "3", "width": "5", "height": "18", "rx": "1" }]],
    "plus": [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]],
    "refresh-cw": [["path", { "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }], ["path", { "d": "M21 3v5h-5" }], ["path", { "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }], ["path", { "d": "M8 16H3v5" }]],
    "save": [["path", { "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }], ["path", { "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }], ["path", { "d": "M7 3v4a1 1 0 0 0 1 1h7" }]],
    "scissors": [["circle", { "cx": "6", "cy": "6", "r": "3" }], ["path", { "d": "M8.12 8.12 12 12" }], ["path", { "d": "M20 4 8.12 15.88" }], ["circle", { "cx": "6", "cy": "18", "r": "3" }], ["path", { "d": "M14.8 14.8 20 20" }]],
    "search": [["path", { "d": "m21 21-4.34-4.34" }], ["circle", { "cx": "11", "cy": "11", "r": "8" }]],
    "server": [["rect", { "width": "20", "height": "8", "x": "2", "y": "2", "rx": "2", "ry": "2" }], ["rect", { "width": "20", "height": "8", "x": "2", "y": "14", "rx": "2", "ry": "2" }], ["line", { "x1": "6", "x2": "6.01", "y1": "6", "y2": "6" }], ["line", { "x1": "6", "x2": "6.01", "y1": "18", "y2": "18" }]],
    "settings": [["path", { "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]],
    "shield": [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }]],
    "terminal": [["path", { "d": "M12 19h8" }], ["path", { "d": "m4 17 6-6-6-6" }]],
    "trash-2": [["path", { "d": "M10 11v6" }], ["path", { "d": "M14 11v6" }], ["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }], ["path", { "d": "M3 6h18" }], ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]],
    "trending-up": [["path", { "d": "M16 7h6v6" }], ["path", { "d": "m22 7-8.5 8.5-5-5L2 17" }]],
    "upload": [["path", { "d": "M12 3v12" }], ["path", { "d": "m17 8-5-5-5 5" }], ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]],
    "users": [["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["path", { "d": "M16 3.128a4 4 0 0 1 0 7.744" }], ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }]],
    "x": [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]]
  };

  // components/core/Icon.jsx
  var registro = new Map(Object.entries(AP_ICONS));
  function registerApIcons(iconos) {
    for (const [nombre, nodo] of Object.entries(iconos)) registro.set(nombre, nodo);
  }
  function apIconNames() {
    return [...registro.keys()].sort();
  }
  function Icon({ name, size = 16, strokeWidth = 1.5, style, ...rest }) {
    const node = registro.get(name);
    const box = { display: "inline-flex", width: size, height: size, flex: "0 0 auto", ...style };
    if (!node) return /* @__PURE__ */ react_global_default.createElement("span", { "aria-hidden": "true", style: box, ...rest });
    return /* @__PURE__ */ react_global_default.createElement("span", { "aria-hidden": "true", style: box, ...rest }, /* @__PURE__ */ react_global_default.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: { display: "block" }
      },
      node.map(([tag, attrs], i) => react_global_default.createElement(tag, { key: i, ...attrs }))
    ));
  }

  // components/data/DataValue.jsx
  function DataValue({ value, loading = false, size, weight, tone, placeholder = "0000", style, ...rest }) {
    const [settled, setSettled] = react_global_default.useState(!loading);
    const prev = react_global_default.useRef(value);
    react_global_default.useEffect(() => {
      if (loading) {
        setSettled(false);
        return;
      }
      if (prev.current !== value || !settled) {
        setSettled(false);
        const id = requestAnimationFrame(() => requestAnimationFrame(() => setSettled(true)));
        prev.current = value;
        return () => cancelAnimationFrame(id);
      }
    }, [value, loading]);
    const on = settled && !loading;
    return /* @__PURE__ */ react_global_default.createElement("span", { style: { fontVariationSettings: on ? "var(--ap-vf-data)" : "var(--ap-vf-prose)", fontVariantNumeric: "tabular-nums", fontSize: size, fontWeight: weight, color: tone === "muted" ? "var(--ap-text-secondary)" : tone === "ok" ? "var(--ap-ok)" : tone === "warn" ? "var(--ap-warn)" : tone === "error" ? "var(--ap-error)" : void 0, opacity: loading ? 0.35 : 1, transition: "font-variation-settings var(--ap-dur-state) var(--ap-ease),opacity var(--ap-dur-state) var(--ap-ease)", ...style }, ...rest }, loading ? placeholder : value);
  }

  // components/assistant/AssistantTrace.jsx
  function AssistantTrace({ steps = [], running = false, defaultOpen = false, style, ...rest }) {
    const [open, setOpen] = react_global_default.useState(defaultOpen);
    const done = steps.filter((s) => s.status !== "running").length;
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { border: "1px solid var(--ap-border)", borderRadius: "var(--ap-radius-control)", background: "var(--ap-surface-sunken)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setOpen(!open),
        "aria-expanded": open,
        style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", width: "100%", height: "var(--ap-control-h)", padding: "0 var(--ap-space-3)", border: 0, background: "transparent", cursor: "pointer", textAlign: "left" }
      },
      /* @__PURE__ */ react_global_default.createElement(Icon, { name: open ? "chevron-down" : "chevron-right", size: 13, style: { color: "var(--ap-text-muted)" } }),
      /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)", color: "var(--ap-text-secondary)" } }, running ? "Consultando" : "Consultado"),
      /* @__PURE__ */ react_global_default.createElement(DataValue, { value: done + "/" + steps.length, size: "var(--ap-size-11)", tone: "muted" })
    ), open && /* @__PURE__ */ react_global_default.createElement("div", { style: { borderTop: "1px solid var(--ap-border)", padding: "var(--ap-space-2) var(--ap-space-3)" } }, steps.map((s, i) => /* @__PURE__ */ react_global_default.createElement("div", { key: i, style: { display: "grid", gridTemplateColumns: "14px 1fr auto", gap: "var(--ap-space-2)", alignItems: "center", padding: "3px 0" } }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: s.status === "running" ? "circle-dashed" : s.status === "error" ? "circle-x" : "circle-check", size: 12, style: { color: s.status === "error" ? "var(--ap-error)" : s.status === "running" ? "var(--ap-text-muted)" : "var(--ap-ok)" } }), /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, s.label), s.ms !== void 0 && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: s.ms + " ms", size: "var(--ap-size-11)", tone: "muted" })))));
  }

  // components/assistant/Citation.jsx
  function Citation({ label, hint, icon = "server", onClick, style, ...rest }) {
    const [hover, setHover] = react_global_default.useState(false);
    return /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        type: "button",
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: { display: "inline-flex", alignItems: "center", gap: 6, height: 24, padding: "0 8px", border: "1px solid " + (hover ? "var(--ap-gray-300)" : "var(--ap-border-strong)"), borderRadius: "var(--ap-radius-chip)", background: hover ? "var(--ap-surface-hover)" : "var(--ap-surface)", cursor: "pointer", transition: "background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease)", ...style },
        ...rest
      },
      /* @__PURE__ */ react_global_default.createElement(Icon, { name: icon, size: 12, style: { color: "var(--ap-text-muted)" } }),
      /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums" } }, label),
      hint && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-micro)", color: "var(--ap-text-muted)" } }, hint)
    );
  }

  // components/core/Button.jsx
  var base = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--ap-space-2)", borderRadius: "var(--ap-radius-control)", border: "1px solid transparent", fontFamily: "var(--ap-font-core)", fontWeight: "var(--ap-weight-medium)", fontVariationSettings: "var(--ap-vf-prose)", letterSpacing: "-0.005em", cursor: "pointer", whiteSpace: "nowrap", userSelect: "none", transition: "background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)" };
  var sizes = {
    sm: { height: "var(--ap-control-h-sm)", padding: "0 10px", fontSize: "var(--ap-size-13)" },
    md: { height: "var(--ap-control-h)", padding: "0 14px", fontSize: "var(--ap-size-14)" },
    lg: { height: "var(--ap-control-h-lg)", padding: "0 18px", fontSize: "var(--ap-size-14)" }
  };
  var looks = {
    primary: { rest: { background: "var(--ap-accent)", color: "var(--ap-text-inverse)" }, hover: { background: "var(--ap-accent-hover)" }, active: { background: "#14279E" } },
    secondary: { rest: { background: "var(--ap-surface)", color: "var(--ap-text)", borderColor: "var(--ap-border-strong)" }, hover: { background: "var(--ap-surface-sunken)", borderColor: "var(--ap-gray-300)" }, active: { background: "var(--ap-surface-active)", borderColor: "var(--ap-gray-300)" } },
    ghost: { rest: { background: "transparent", color: "var(--ap-text-secondary)" }, hover: { background: "var(--ap-surface-hover)", color: "var(--ap-text)" }, active: { background: "var(--ap-surface-active)", color: "var(--ap-text)" } },
    danger: { rest: { background: "var(--ap-surface)", color: "var(--ap-error)", borderColor: "color-mix(in srgb,var(--ap-error) 30%,transparent)" }, hover: { background: "var(--ap-error-tint)", borderColor: "color-mix(in srgb,var(--ap-error) 45%,transparent)" }, active: { background: "var(--ap-error-tint)", borderColor: "var(--ap-error)" } }
  };
  var dangerSolid = { rest: { background: "var(--ap-error)", color: "var(--ap-text-inverse)", borderColor: "transparent" }, hover: { background: "#8C271C" }, active: { background: "#79211A" } };
  function Button({ variant = "secondary", size = "md", solid = false, disabled = false, type = "button", onClick, style, children, ...rest }) {
    const [hover, setHover] = react_global_default.useState(false);
    const [down, setDown] = react_global_default.useState(false);
    const look = variant === "danger" && solid ? dangerSolid : looks[variant] || looks.secondary;
    return /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        type,
        disabled,
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setDown(false);
        },
        onMouseDown: () => setDown(true),
        onMouseUp: () => setDown(false),
        style: { ...base, ...sizes[size], ...look.rest, ...hover && !disabled ? look.hover : null, ...down && !disabled ? look.active : null, ...disabled ? { opacity: 0.4, cursor: "not-allowed" } : null, ...style },
        ...rest
      },
      children
    );
  }

  // components/assistant/Composer.jsx
  function Composer({ value = "", onChange, onSend, onAttach, placeholder = "Pregunta por un servicio, una region o un despliegue", disabled, busy = false, hint, style, ...rest }) {
    const [focus, setFocus] = react_global_default.useState(false);
    const ref = react_global_default.useRef(null);
    react_global_default.useEffect(() => {
      const el = ref.current;
      if (el) {
        el.style.height = "auto";
        el.style.height = Math.min(el.scrollHeight, 160) + "px";
      }
    }, [value]);
    const keys = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (value.trim() && !busy) onSend && onSend(value);
      }
    };
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-2)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: "var(--ap-space-2)", padding: "var(--ap-space-2)", background: "var(--ap-surface)", border: "1px solid " + (focus ? "var(--ap-accent)" : "var(--ap-border-input)"), borderRadius: "var(--ap-radius-panel)", transition: "border-color var(--ap-dur-micro) var(--ap-ease)" } }, onAttach && /* @__PURE__ */ react_global_default.createElement("button", { type: "button", onClick: onAttach, "aria-label": "Adjuntar", style: { width: 32, height: 32, display: "inline-flex", alignItems: "center", justifyContent: "center", border: 0, borderRadius: "var(--ap-radius-control)", background: "transparent", color: "var(--ap-text-muted)", cursor: "pointer" } }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: "paperclip", size: 15 })), /* @__PURE__ */ react_global_default.createElement(
      "textarea",
      {
        ref,
        rows: 1,
        value,
        disabled,
        placeholder,
        onChange: (e) => onChange && onChange(e.target.value),
        onKeyDown: keys,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: { flex: 1, minWidth: 0, resize: "none", border: 0, outline: "none", background: "transparent", padding: "6px 0", font: "var(--ap-weight-body) var(--ap-size-14)/var(--ap-leading-ui) var(--ap-font-core)", fontVariationSettings: "var(--ap-vf-prose)", maxHeight: 160 }
      }
    ), /* @__PURE__ */ react_global_default.createElement(Button, { variant: "primary", onClick: () => value.trim() && onSend && onSend(value), disabled: disabled || busy || !value.trim() }, busy ? "Trabajando" : "Enviar")), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", gap: "var(--ap-space-4)", font: "var(--ap-text-micro)", color: "var(--ap-text-muted)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { fontVariationSettings: "var(--ap-vf-data)" } }, "\u21B5 enviar"), /* @__PURE__ */ react_global_default.createElement("span", { style: { fontVariationSettings: "var(--ap-vf-data)" } }, "\u21E7\u21B5 salto de linea"), hint && /* @__PURE__ */ react_global_default.createElement("span", null, hint)));
  }

  // components/core/Avatar.jsx
  function Avatar({ name = "", size = 24, style, ...rest }) {
    const initials = String(name).trim().split(/\s+/).slice(0, 2).map((w) => w.charAt(0).toUpperCase()).join("");
    return /* @__PURE__ */ react_global_default.createElement("span", { title: name, style: { width: size, height: size, flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--ap-radius-chip)", background: "var(--ap-gray-100)", color: "var(--ap-gray-600)", font: "var(--ap-weight-medium) " + Math.round(size * 0.42) + "px/1 var(--ap-font-core)", fontVariationSettings: "var(--ap-vf-prose)", letterSpacing: "0.02em", ...style }, ...rest }, initials);
  }

  // components/assistant/Message.jsx
  function Message({ role = "assistant", author, at, children, footer, style, ...rest }) {
    const mine = role === "user";
    return /* @__PURE__ */ react_global_default.createElement("article", { style: { display: "grid", gridTemplateColumns: "24px 1fr", gap: "var(--ap-space-3)", padding: "var(--ap-space-4) 0", borderBottom: "1px solid var(--ap-border)", ...style }, ...rest }, mine ? /* @__PURE__ */ react_global_default.createElement(Avatar, { name: author || "Tu" }) : /* @__PURE__ */ react_global_default.createElement("span", { "aria-hidden": "true", style: { width: 24, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--ap-radius-chip)", border: "1px solid var(--ap-border-strong)", background: "var(--ap-surface)", font: "var(--ap-weight-medium) 11px/1 var(--ap-font-core)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-secondary)" } }, "AP"), /* @__PURE__ */ react_global_default.createElement("div", { style: { minWidth: 0, display: "grid", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)" } }, author || (mine ? "Tu" : "Asistente")), at && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-muted)" } }, at)), /* @__PURE__ */ react_global_default.createElement("div", { style: { font: "var(--ap-weight-body) var(--ap-size-15)/var(--ap-leading-prose) var(--ap-font-core)", fontVariationSettings: "var(--ap-vf-prose)", maxWidth: "var(--ap-measure-prose)", textWrap: "pretty", background: mine ? "var(--ap-surface-subtle)" : "transparent", border: mine ? "1px solid var(--ap-border)" : 0, borderRadius: mine ? "var(--ap-radius-panel)" : 0, padding: mine ? "var(--ap-space-3)" : 0 } }, children), footer && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", flexWrap: "wrap" } }, footer)));
  }

  // components/charts/BarSeries.jsx
  function BarSeries({ data = [], height = 64, gap = 3, labels, threshold, tone = "default", loading = false, style, ...rest }) {
    const max = Math.max(...data, 1);
    const color = tone === "error" ? "var(--ap-error)" : tone === "warn" ? "var(--ap-warn)" : "var(--ap-gray-200)";
    return /* @__PURE__ */ react_global_default.createElement("div", { style, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { position: "relative", display: "flex", alignItems: "flex-end", gap, height, borderBottom: "1px solid var(--ap-border-strong)" } }, threshold !== void 0 && /* @__PURE__ */ react_global_default.createElement("div", { style: { position: "absolute", left: 0, right: 0, bottom: threshold / max * height, borderTop: "1px dashed var(--ap-gray-300)" } }), data.map((v, i) => /* @__PURE__ */ react_global_default.createElement("div", { key: i, title: String(v), style: { flex: 1, minWidth: 2, height: loading ? "4%" : v / max * 100 + "%", background: i === data.length - 1 ? "var(--ap-gray-700)" : color, borderRadius: 1, transition: "height var(--ap-dur-state) var(--ap-ease)", transitionDelay: Math.min(i, 20) * 12 + "ms" } }))), labels && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 6, font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)" } }, labels.map((l) => /* @__PURE__ */ react_global_default.createElement("span", { key: l }, l))));
  }

  // components/charts/ShareBar.jsx
  function ShareBar({ segments = [], height = 8, showLegend = true, loading = false, style, ...rest }) {
    const total = segments.reduce((a, s) => a + s.value, 0) || 1;
    const shades = ["var(--ap-gray-700)", "var(--ap-gray-500)", "var(--ap-gray-300)", "var(--ap-gray-200)", "var(--ap-gray-100)"];
    return /* @__PURE__ */ react_global_default.createElement("div", { style, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", height, borderRadius: 2, overflow: "hidden", background: "var(--ap-gray-50)" } }, segments.map((s, i) => /* @__PURE__ */ react_global_default.createElement("div", { key: s.label, title: s.label, style: { width: (loading ? 0 : s.value / total * 100) + "%", background: s.tone === "error" ? "var(--ap-error)" : shades[i % shades.length], transition: "width var(--ap-dur-state) var(--ap-ease)", transitionDelay: i * 60 + "ms" } }))), showLegend && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--ap-space-4)", marginTop: "var(--ap-space-3)" } }, segments.map((s, i) => /* @__PURE__ */ react_global_default.createElement("div", { key: s.label, style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { width: 8, height: 8, borderRadius: 2, background: s.tone === "error" ? "var(--ap-error)" : shades[i % shades.length] } }), /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, s.label), /* @__PURE__ */ react_global_default.createElement(DataValue, { value: Math.round(s.value / total * 100) + "%", loading, size: "var(--ap-size-13)" })))));
  }

  // components/charts/Sparkline.jsx
  function Sparkline({ data = [], width = 120, height = 28, tone = "default", showLast = true, style, ...rest }) {
    const n = data.length;
    if (!n) return /* @__PURE__ */ react_global_default.createElement("svg", { width, height, style, ...rest });
    const max = Math.max(...data), min = Math.min(...data), span = max - min || 1;
    const x = (i) => i / (n - 1 || 1) * (width - 2) + 1;
    const y = (v) => height - 1 - (v - min) / span * (height - 2);
    const d = data.map((v, i) => (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1)).join(" ");
    const color = tone === "error" ? "var(--ap-error)" : tone === "warn" ? "var(--ap-warn)" : tone === "ok" ? "var(--ap-ok)" : "var(--ap-gray-500)";
    return /* @__PURE__ */ react_global_default.createElement("svg", { width, height, viewBox: "0 0 " + width + " " + height, role: "img", style: { display: "block", overflow: "visible", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("path", { d, fill: "none", stroke: color, strokeWidth: "1.25", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke" }), showLast && /* @__PURE__ */ react_global_default.createElement("rect", { x: x(n - 1) - 1.5, y: y(data[n - 1]) - 1.5, width: "3", height: "3", fill: color }));
  }

  // components/core/Badge.jsx
  var tones = {
    neutral: { bg: "var(--ap-gray-50)", fg: "var(--ap-gray-600)", bd: "var(--ap-gray-100)" },
    ok: { bg: "var(--ap-ok-tint)", fg: "var(--ap-ok)", bd: "color-mix(in srgb,var(--ap-ok) 18%,transparent)" },
    warn: { bg: "var(--ap-warn-tint)", fg: "var(--ap-warn)", bd: "color-mix(in srgb,var(--ap-warn) 18%,transparent)" },
    error: { bg: "var(--ap-error-tint)", fg: "var(--ap-error)", bd: "color-mix(in srgb,var(--ap-error) 18%,transparent)" },
    accent: { bg: "var(--ap-accent-tint)", fg: "var(--ap-accent)", bd: "color-mix(in srgb,var(--ap-accent) 18%,transparent)" }
  };
  function Badge({ tone = "neutral", children, style, ...rest }) {
    const t = tones[tone] || tones.neutral;
    return /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "inline-flex", alignItems: "center", height: 20, padding: "0 6px", borderRadius: "var(--ap-radius-chip)", background: t.bg, color: t.fg, border: "1px solid " + t.bd, font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", letterSpacing: "0.02em", textTransform: "uppercase", ...style }, ...rest }, children);
  }

  // components/core/Chip.jsx
  function Chip({ children, onRemove, data = false, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, height: 24, padding: onRemove ? "0 4px 0 8px" : "0 8px", borderRadius: "var(--ap-radius-chip)", border: "1px solid var(--ap-border-strong)", background: "var(--ap-surface)", color: "var(--ap-text)", font: "var(--ap-text-label)", fontVariationSettings: data ? "var(--ap-vf-data)" : "var(--ap-vf-prose)", fontVariantNumeric: data ? "tabular-nums" : "normal", ...style }, ...rest }, children, onRemove && /* @__PURE__ */ react_global_default.createElement("button", { type: "button", onClick: onRemove, "aria-label": "Quitar filtro", style: { width: 16, height: 16, display: "inline-flex", alignItems: "center", justifyContent: "center", border: 0, background: "transparent", color: "var(--ap-text-muted)", cursor: "pointer", borderRadius: 2 } }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: "x", size: 12 })));
  }

  // components/core/CopyValue.jsx
  function CopyValue({ value, size = "var(--ap-size-13)", weight, label = "Copiar", style, ...rest }) {
    const [done, setDone] = react_global_default.useState(false);
    const copy = () => {
      const t = String(value);
      if (navigator.clipboard) navigator.clipboard.writeText(t).catch(() => {
      });
      setDone(true);
      setTimeout(() => setDone(false), 1200);
    };
    return /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        type: "button",
        onClick: copy,
        title: label,
        style: { display: "inline-flex", alignItems: "center", gap: 6, height: "var(--ap-control-h-sm)", padding: "0 6px 0 4px", margin: "0 -4px", border: "1px solid transparent", borderRadius: "var(--ap-radius-control)", background: "transparent", color: "inherit", cursor: "pointer", transition: "background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease)", ...style },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = "var(--ap-surface-hover)";
          e.currentTarget.style.borderColor = "var(--ap-border)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "transparent";
        },
        ...rest
      },
      /* @__PURE__ */ react_global_default.createElement("span", { style: { fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums", fontSize: size, fontWeight: weight } }, value),
      /* @__PURE__ */ react_global_default.createElement(Icon, { name: done ? "check" : "copy", size: 12, style: { color: done ? "var(--ap-ok)" : "var(--ap-text-muted)", transition: "color var(--ap-dur-micro) var(--ap-ease)" } })
    );
  }

  // components/core/Divider.jsx
  function Divider({ label, direction = "horizontal", spacing = "var(--ap-space-4)", style, ...rest }) {
    if (direction === "vertical") return /* @__PURE__ */ react_global_default.createElement("span", { "aria-hidden": "true", style: { width: 1, alignSelf: "stretch", background: "var(--ap-border)", margin: "0 " + spacing, ...style }, ...rest });
    if (!label) return /* @__PURE__ */ react_global_default.createElement("hr", { style: { border: 0, height: 1, background: "var(--ap-border)", margin: spacing + " 0", ...style }, ...rest });
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-3)", margin: spacing + " 0", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", whiteSpace: "nowrap" } }, label), /* @__PURE__ */ react_global_default.createElement("span", { style: { flex: 1, height: 1, background: "var(--ap-border)" } }));
  }

  // components/core/IconButton.jsx
  function IconButton({ icon, label, size = "md", selected = false, disabled = false, onClick, style, ...rest }) {
    const [hover, setHover] = react_global_default.useState(false);
    const d = size === "sm" ? 24 : size === "lg" ? 40 : 32;
    return /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        type: "button",
        "aria-label": label,
        title: label,
        disabled,
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: { width: d, height: d, display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid transparent", borderRadius: "var(--ap-radius-control)", background: selected ? "var(--ap-surface-active)" : hover ? "var(--ap-surface-hover)" : "transparent", color: selected ? "var(--ap-text)" : hover ? "var(--ap-text)" : "var(--ap-text-secondary)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, transition: "background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)", ...style },
        ...rest
      },
      /* @__PURE__ */ react_global_default.createElement(Icon, { name: icon, size: size === "sm" ? 14 : 16 })
    );
  }

  // components/core/Spinner.jsx
  function Spinner({ size = 14, label, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("span", { role: "status", "aria-label": label || "Cargando", style: { display: "inline-flex", alignItems: "center", gap: "var(--ap-space-2)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("span", { style: { width: size, height: size, borderRadius: "50%", border: "1.5px solid var(--ap-gray-200)", borderTopColor: "var(--ap-gray-600)", animation: "ap-spin 700ms linear infinite" } }), label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, label));
  }

  // components/data/AsciiDiagram.jsx
  function AsciiDiagram({ children, size = "var(--ap-size-12)", tone = "default", label, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("figure", { style: { margin: 0, ...style }, ...rest }, label && /* @__PURE__ */ react_global_default.createElement("figcaption", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", marginBottom: "var(--ap-space-2)" } }, label), /* @__PURE__ */ react_global_default.createElement("pre", { style: { margin: 0, fontFamily: "var(--ap-font-ascii)", fontVariantNumeric: "tabular-nums", fontSize: size, lineHeight: 1.5, letterSpacing: 0, color: tone === "muted" ? "var(--ap-text-secondary)" : "var(--ap-text)", whiteSpace: "pre", overflowX: "auto" } }, children));
  }

  // components/data/AsciiMeter.jsx
  function AsciiMeter({ value = 0, cells = 10, showValue = true, tone = "default", style, ...rest }) {
    const pct = Math.max(0, Math.min(100, value));
    const on = Math.round(pct / 100 * cells);
    const bar = "\u2588".repeat(on) + "\u2591".repeat(cells - on);
    const color = tone === "error" ? "var(--ap-error)" : tone === "warn" ? "var(--ap-warn)" : tone === "ok" ? "var(--ap-ok)" : "var(--ap-text-secondary)";
    return /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "inline-flex", gap: "var(--ap-space-2)", alignItems: "baseline", fontFamily: "var(--ap-font-ascii)", fontVariantNumeric: "tabular-nums", fontSize: "var(--ap-size-12)", color, ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("span", { "aria-hidden": "true" }, bar), showValue && /* @__PURE__ */ react_global_default.createElement("span", null, pct, "%"));
  }

  // components/data/AuditTimeline.jsx
  function AuditTimeline({ entries = [], loading = false, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("ol", { style: { listStyle: "none", margin: 0, padding: 0, ...style }, ...rest }, entries.map((e, i) => /* @__PURE__ */ react_global_default.createElement("li", { key: e.id || i, style: { display: "grid", gridTemplateColumns: "132px 1fr", gap: "var(--ap-space-4)", padding: "var(--ap-space-3) 0", borderBottom: i === entries.length - 1 ? 0 : "1px solid var(--ap-border)" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: 2 } }, /* @__PURE__ */ react_global_default.createElement(DataValue, { value: e.at, loading, placeholder: "0000-00-00 00:00", size: "var(--ap-size-11)", tone: "muted" }), e.actor && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, e.actor)), /* @__PURE__ */ react_global_default.createElement("div", { style: { minWidth: 0, display: "grid", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", flexWrap: "wrap" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-ui-medium)" } }, e.title), e.tag && /* @__PURE__ */ react_global_default.createElement(Badge, { tone: e.tone || "neutral" }, e.tag)), e.note && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)", textWrap: "pretty" } }, e.note), e.children))));
  }

  // components/data/BulkActionBar.jsx
  function BulkActionBar({ count = 0, onClear, actions = [], style, ...rest }) {
    const on = count > 0;
    return /* @__PURE__ */ react_global_default.createElement("div", { "aria-hidden": !on, style: { position: "sticky", bottom: "var(--ap-space-4)", display: "flex", justifyContent: "center", pointerEvents: "none", zIndex: 20, ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-3)", padding: "var(--ap-space-2) var(--ap-space-2) var(--ap-space-2) var(--ap-space-4)", background: "var(--ap-surface-inverse)", color: "var(--ap-text-inverse)", border: "1px solid var(--ap-gray-800)", borderRadius: "var(--ap-radius-panel)", boxShadow: "var(--ap-shadow-2)", pointerEvents: on ? "auto" : "none", opacity: on ? 1 : 0, transform: on ? "none" : "translateY(8px)", transition: "opacity var(--ap-dur-state) var(--ap-ease),transform var(--ap-dur-state) var(--ap-ease)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-gray-200)" } }, /* @__PURE__ */ react_global_default.createElement(DataValue, { value: count, style: { color: "var(--ap-text-inverse)", fontWeight: 500 } }), " seleccionados"), /* @__PURE__ */ react_global_default.createElement("span", { style: { width: 1, height: 20, background: "var(--ap-gray-700)" } }), actions.map((a) => /* @__PURE__ */ react_global_default.createElement("button", { key: a.label, onClick: a.onClick, style: { height: "var(--ap-control-h-sm)", padding: "0 10px", border: 0, borderRadius: "var(--ap-radius-control)", background: "transparent", color: a.tone === "danger" ? "#E9A79E" : "var(--ap-gray-100)", font: "var(--ap-text-ui-medium)", cursor: "pointer" } }, a.label)), /* @__PURE__ */ react_global_default.createElement(IconButton, { icon: "x", label: "Quitar seleccion", size: "sm", onClick: onClear, style: { color: "var(--ap-gray-300)" } })));
  }

  // components/forms/Checkbox.jsx
  function Checkbox({ checked, defaultChecked = false, indeterminate = false, onChange, label, disabled, style, ...rest }) {
    const controlled = checked !== void 0;
    const [inner, setInner] = react_global_default.useState(defaultChecked);
    const value = controlled ? checked : inner;
    const handle = (e) => {
      if (!controlled) setInner(e.target.checked);
      onChange && onChange(e);
    };
    const on = value || indeterminate;
    return /* @__PURE__ */ react_global_default.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: "var(--ap-space-2)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("input", { type: "checkbox", checked: value, onChange: handle, disabled, style: { position: "absolute", opacity: 0, width: 0, height: 0 } }), /* @__PURE__ */ react_global_default.createElement("span", { style: { width: 16, height: 16, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 3, border: "1px solid " + (on ? "var(--ap-accent)" : "var(--ap-border-strong)"), background: on ? "var(--ap-accent)" : "var(--ap-surface)", color: "var(--ap-text-inverse)", transition: "background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease)" } }, on && /* @__PURE__ */ react_global_default.createElement(Icon, { name: indeterminate ? "minus" : "check", size: 12, strokeWidth: 2.25 })), label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-ui)" } }, label));
  }

  // components/data/ColumnManager.jsx
  function ColumnManager({ open = false, onClose, columns = [], hidden = [], onToggle, anchor = "right", style, ...rest }) {
    if (!open) return null;
    return /* @__PURE__ */ react_global_default.createElement(react_global_default.Fragment, null, /* @__PURE__ */ react_global_default.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 40 } }), /* @__PURE__ */ react_global_default.createElement("div", { style: { position: "absolute", top: "calc(100% + 4px)", [anchor]: 0, zIndex: 41, width: 220, padding: "var(--ap-space-2)", background: "var(--ap-surface)", border: "1px solid var(--ap-border-strong)", borderRadius: "var(--ap-radius-panel)", boxShadow: "var(--ap-shadow-2)", animation: "ap-rise var(--ap-dur-state) var(--ap-ease) both", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", padding: "var(--ap-space-1) var(--ap-space-1) var(--ap-space-2)" } }, "Columnas"), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-2)", padding: "0 var(--ap-space-1) var(--ap-space-1)" } }, columns.map((c) => /* @__PURE__ */ react_global_default.createElement(Checkbox, { key: c.key, checked: !hidden.includes(c.key), onChange: () => onToggle && onToggle(c.key), label: c.label, disabled: c.locked })))));
  }

  // components/data/ConfigDiff.jsx
  function ConfigDiff({ changes = [], style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { border: "1px solid var(--ap-border)", borderRadius: "var(--ap-radius-control)", overflow: "hidden", ...style }, ...rest }, changes.map((c, i) => /* @__PURE__ */ react_global_default.createElement("div", { key: c.key, style: { display: "grid", gridTemplateColumns: "minmax(120px,1fr) 1fr 12px 1fr", gap: "var(--ap-space-2)", alignItems: "center", padding: "6px var(--ap-space-3)", borderTop: i ? "1px solid var(--ap-border)" : 0, background: "var(--ap-surface)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, c.key), /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums", color: "var(--ap-text-muted)", textDecoration: "line-through", background: "var(--ap-error-tint)", padding: "0 4px", borderRadius: 2 } }, c.from), /* @__PURE__ */ react_global_default.createElement("span", { "aria-hidden": "true", style: { font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-gray-300)", textAlign: "center" } }, "\u2192"), /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums", color: "var(--ap-ok)", background: "var(--ap-ok-tint)", padding: "0 4px", borderRadius: 2 } }, c.to))));
  }

  // components/data/DataTable.jsx
  function DataTable({ columns = [], rows = [], selectedId, onSelectRow, selectable = false, checked = [], onCheck, rowRef, sort, onSort, keyboard = true, onEscape, style, ...rest }) {
    const [hover, setHover] = react_global_default.useState(null);
    const [cursor, setCursor] = react_global_default.useState(-1);
    const cells = react_global_default.useRef({});
    const grid = (selectable ? "36px " : "") + columns.map((c) => c.width || "1fr").join(" ");
    const onKey = (e) => {
      if (!keyboard || !rows.length) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((v) => Math.min((v < 0 ? -1 : v) + 1, rows.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((v) => Math.max((v < 0 ? rows.length : v) - 1, 0));
      } else if (e.key === "Enter" && cursor >= 0) {
        e.preventDefault();
        const r = rows[cursor];
        if (r && onSelectRow) onSelectRow(r, cells.current[r.id]);
      } else if (e.key === "Escape") {
        onEscape && onEscape();
      }
    };
    const sortIcon = (c) => {
      if (!c.sortable) return null;
      const active = sort && sort.key === c.key;
      return /* @__PURE__ */ react_global_default.createElement("span", { style: { marginLeft: 4, opacity: active ? 1 : 0.35, fontVariationSettings: "var(--ap-vf-data)" } }, active && sort.dir === "desc" ? "\u25BC" : "\u25B2");
    };
    return /* @__PURE__ */ react_global_default.createElement("div", { role: "table", tabIndex: keyboard ? 0 : void 0, onKeyDown: onKey, style: { width: "100%", outline: "none", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { role: "row", style: { display: "grid", gridTemplateColumns: grid, alignItems: "center", height: 32, padding: "0 var(--ap-space-4)", borderBottom: "1px solid var(--ap-border-strong)", background: "var(--ap-surface-sunken)", position: "sticky", top: 0, zIndex: 1 } }, selectable && /* @__PURE__ */ react_global_default.createElement("span", { onClick: (e) => e.stopPropagation(), style: { display: "inline-flex" } }, /* @__PURE__ */ react_global_default.createElement(Checkbox, { checked: checked.length > 0 && checked.length === rows.length, indeterminate: checked.length > 0 && checked.length < rows.length, onChange: () => onCheck && onCheck("all") })), columns.map((c) => /* @__PURE__ */ react_global_default.createElement(
      "span",
      {
        key: c.key,
        onClick: () => c.sortable && onSort && onSort(c.key),
        style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: sort && sort.key === c.key ? "var(--ap-text)" : "var(--ap-text-muted)", textAlign: c.align || "left", paddingRight: "var(--ap-space-3)", cursor: c.sortable ? "pointer" : "default", userSelect: "none", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }
      },
      c.label,
      sortIcon(c)
    ))), rows.map((r, i) => {
      const sel = selectedId === r.id, cur = cursor === i;
      return /* @__PURE__ */ react_global_default.createElement(
        "div",
        {
          role: "row",
          key: r.id,
          onClick: () => onSelectRow && onSelectRow(r, cells.current[r.id]),
          onMouseEnter: () => setHover(r.id),
          onMouseLeave: () => setHover(null),
          className: "ap-rise",
          style: { "--ap-delay": Math.min(i, 7) * 60 + "ms", display: "grid", gridTemplateColumns: grid, alignItems: "center", height: "var(--ap-row-h)", padding: "0 var(--ap-space-4)", borderBottom: "1px solid var(--ap-border)", background: sel ? "var(--ap-accent-tint)" : cur || hover === r.id ? "var(--ap-surface-hover)" : "transparent", boxShadow: sel ? "inset 2px 0 0 var(--ap-accent)" : cur ? "inset 2px 0 0 var(--ap-gray-400)" : "none", cursor: "pointer", transition: "background-color var(--ap-dur-micro) var(--ap-ease)" }
        },
        selectable && /* @__PURE__ */ react_global_default.createElement("span", { onClick: (e) => e.stopPropagation(), style: { display: "inline-flex" } }, /* @__PURE__ */ react_global_default.createElement(Checkbox, { checked: checked.includes(r.id), onChange: () => onCheck && onCheck(r.id) })),
        columns.map((c) => /* @__PURE__ */ react_global_default.createElement(
          "span",
          {
            key: c.key,
            ref: c.shared ? (el) => {
              cells.current[r.id] = el;
              rowRef && rowRef(r.id, el);
            } : void 0,
            style: { minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: c.align || "left", paddingRight: "var(--ap-space-3)", font: "var(--ap-text-ui)", color: c.tone === "muted" ? "var(--ap-text-secondary)" : "var(--ap-text)", fontVariationSettings: c.data ? "var(--ap-vf-data)" : "var(--ap-vf-prose)", fontVariantNumeric: c.data ? "tabular-nums" : "normal" }
          },
          c.render ? c.render(r) : r[c.key]
        ))
      );
    }));
  }

  // components/data/KeyValue.jsx
  function KeyValue({ label, value, data = true, loading = false, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gridTemplateColumns: "128px 1fr", gap: "var(--ap-space-3)", alignItems: "baseline", padding: "var(--ap-space-2) 0", borderBottom: "1px solid var(--ap-border)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, label), data ? /* @__PURE__ */ react_global_default.createElement(DataValue, { value, loading, size: "var(--ap-size-13)" }) : /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)" } }, value));
  }

  // components/data/List.jsx
  function List({ items = [], selectedId, onSelect, style, ...rest }) {
    const [hover, setHover] = react_global_default.useState(null);
    const stripe = (t) => t === "ok" ? "var(--ap-ok)" : t === "warn" ? "var(--ap-warn)" : t === "error" ? "var(--ap-error)" : "var(--ap-gray-200)";
    return /* @__PURE__ */ react_global_default.createElement("ul", { style: { listStyle: "none", margin: 0, padding: 0, ...style }, ...rest }, items.map((it, i) => {
      const sel = selectedId === it.id;
      return /* @__PURE__ */ react_global_default.createElement("li", { key: it.id || i }, /* @__PURE__ */ react_global_default.createElement(
        "button",
        {
          type: "button",
          onClick: () => onSelect && onSelect(it),
          onMouseEnter: () => setHover(it.id),
          onMouseLeave: () => setHover(null),
          className: "ap-rise",
          style: { "--ap-delay": Math.min(i, 7) * 60 + "ms", display: "grid", gridTemplateColumns: "2px 1fr auto", gap: "var(--ap-space-3)", alignItems: "center", width: "100%", padding: "var(--ap-space-2) var(--ap-space-3) var(--ap-space-2) 0", border: 0, borderBottom: "1px solid var(--ap-border)", background: sel ? "var(--ap-accent-tint)" : hover === it.id ? "var(--ap-surface-hover)" : "transparent", cursor: onSelect ? "pointer" : "default", textAlign: "left", transition: "background-color var(--ap-dur-micro) var(--ap-ease)" }
        },
        /* @__PURE__ */ react_global_default.createElement("span", { style: { alignSelf: "stretch", background: stripe(it.tone), borderRadius: 1 } }),
        /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "grid", gap: 2, minWidth: 0 } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "flex", alignItems: "baseline", gap: "var(--ap-space-2)", minWidth: 0 } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-ui-medium)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, it.title), it.ref && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: it.ref, size: "var(--ap-size-12)", tone: "muted" })), it.subtitle && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, it.subtitle)),
        it.meta && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: it.meta, size: "var(--ap-size-12)", tone: "muted" })
      ));
    }));
  }

  // components/data/LogStream.jsx
  var toneOf = (l) => l === "ERROR" ? "var(--ap-error)" : l === "WARN" ? "var(--ap-warn)" : l === "OK" ? "var(--ap-ok)" : "var(--ap-text-secondary)";
  function LogStream({ lines = [], height = 200, follow = true, style, ...rest }) {
    const ref = react_global_default.useRef(null);
    react_global_default.useEffect(() => {
      if (follow && ref.current) ref.current.scrollTop = ref.current.scrollHeight;
    }, [lines, follow]);
    return /* @__PURE__ */ react_global_default.createElement("div", { ref, style: { height, overflow: "auto", background: "var(--ap-surface-sunken)", border: "1px solid var(--ap-border)", borderRadius: "var(--ap-radius-control)", padding: "var(--ap-space-2)", fontFamily: "var(--ap-font-ascii)", fontSize: "var(--ap-size-12)", lineHeight: 1.5, ...style }, ...rest }, lines.map((l, i) => /* @__PURE__ */ react_global_default.createElement("div", { key: i, style: { display: "grid", gridTemplateColumns: "64px 52px 1fr", gap: "var(--ap-space-2)", padding: "1px 0" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { color: "var(--ap-text-muted)" } }, l.at), /* @__PURE__ */ react_global_default.createElement("span", { style: { color: toneOf(l.level) } }, l.level), /* @__PURE__ */ react_global_default.createElement("span", { style: { color: "var(--ap-text)", whiteSpace: "pre-wrap", wordBreak: "break-word" } }, l.text))));
  }

  // components/data/Matrix.jsx
  function Matrix({ rows = [], columns = [], values = {}, legend = true, unit, loading = false, style, ...rest }) {
    const shades = ["var(--ap-gray-50)", "var(--ap-gray-100)", "var(--ap-gray-200)", "var(--ap-gray-400)", "var(--ap-gray-600)"];
    const nums = Object.values(values).filter((v) => typeof v === "number");
    const max = Math.max(1, ...nums);
    const shade = (v) => typeof v !== "number" ? "var(--ap-surface)" : shades[Math.min(4, Math.floor(v / max * 5))];
    return /* @__PURE__ */ react_global_default.createElement("div", { style, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gridTemplateColumns: "120px repeat(" + columns.length + ",minmax(28px,1fr))", gap: 2, alignItems: "center" } }, /* @__PURE__ */ react_global_default.createElement("span", null), columns.map((c) => /* @__PURE__ */ react_global_default.createElement("span", { key: c, style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", textAlign: "center", overflow: "hidden", textOverflow: "ellipsis" } }, c)), rows.map((r) => /* @__PURE__ */ react_global_default.createElement(react_global_default.Fragment, { key: r }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingRight: "var(--ap-space-2)" } }, r), columns.map((c) => {
      const v = values[r + "|" + c];
      return /* @__PURE__ */ react_global_default.createElement("span", { key: c, title: r + " \xB7 " + c + ": " + (v === void 0 ? "\u2014" : v), style: { height: 24, background: loading ? "var(--ap-gray-50)" : shade(v), border: "1px solid var(--ap-surface)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums", color: typeof v === "number" && v / max > 0.6 ? "var(--ap-text-inverse)" : "var(--ap-text-secondary)", transition: "background-color var(--ap-dur-state) var(--ap-ease)" } }, loading || v === void 0 ? "" : v);
    })))), legend && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", marginTop: "var(--ap-space-3)" } }, /* @__PURE__ */ react_global_default.createElement(DataValue, { value: "0" + (unit ? " " + unit : ""), size: "var(--ap-size-11)", tone: "muted" }), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "flex", gap: 2 } }, shades.map((s) => /* @__PURE__ */ react_global_default.createElement("span", { key: s, style: { width: 18, height: 8, background: s, borderRadius: 1 } }))), /* @__PURE__ */ react_global_default.createElement(DataValue, { value: max + (unit ? " " + unit : ""), size: "var(--ap-size-11)", tone: "muted" })));
  }

  // components/data/MetricTile.jsx
  function MetricTile({ label, value, unit, delta, deltaTone = "muted", loading = false, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "var(--ap-space-1)", padding: "var(--ap-space-4)", borderRight: "1px solid var(--ap-border)", minWidth: 0, ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)" } }, label), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "flex", alignItems: "baseline", gap: 6 } }, /* @__PURE__ */ react_global_default.createElement(DataValue, { value, loading, size: "var(--ap-size-29)", weight: 500, style: { letterSpacing: "-0.02em", lineHeight: 1.1 } }), unit && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)", fontVariationSettings: "var(--ap-vf-data)" } }, unit)), delta && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: delta, loading, placeholder: "\u2014", size: "var(--ap-size-12)", tone: deltaTone }));
  }

  // components/forms/Select.jsx
  function Select({ label, options = [], value, onChange, disabled, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("label", { style: { display: "flex", flexDirection: "column", gap: "var(--ap-space-1)", ...style } }, label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)", color: "var(--ap-text-secondary)" } }, label), /* @__PURE__ */ react_global_default.createElement("span", { style: { position: "relative", display: "flex", alignItems: "center" } }, /* @__PURE__ */ react_global_default.createElement(
      "select",
      {
        value,
        onChange,
        disabled,
        style: { appearance: "none", width: "100%", height: "var(--ap-control-h)", padding: "0 28px 0 var(--ap-space-2)", background: disabled ? "var(--ap-surface-subtle)" : "var(--ap-surface)", border: "1px solid var(--ap-border-input)", borderRadius: "var(--ap-radius-control)", font: "var(--ap-text-ui)", fontVariationSettings: "var(--ap-vf-prose)", cursor: "pointer" },
        ...rest
      },
      options.map((o) => {
        const v = typeof o === "string" ? o : o.value, l = typeof o === "string" ? o : o.label;
        return /* @__PURE__ */ react_global_default.createElement("option", { key: v, value: v }, l);
      })
    ), /* @__PURE__ */ react_global_default.createElement(Icon, { name: "chevron-down", size: 14, style: { position: "absolute", right: 8, color: "var(--ap-text-muted)", pointerEvents: "none" } })));
  }

  // components/data/Pagination.jsx
  function Pagination({ from = 1, to = 40, total = 0, pageSize = 40, onPageSize, onPrev, onNext, loading = false, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--ap-space-3)", height: "var(--ap-header-h)", padding: "0 var(--ap-space-4)", borderTop: "1px solid var(--ap-border)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, /* @__PURE__ */ react_global_default.createElement(DataValue, { value: from + "\u2013" + to, loading, placeholder: "0\u201300" }), " de ", /* @__PURE__ */ react_global_default.createElement(DataValue, { value: total, loading, placeholder: "000" })), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-3)" } }, /* @__PURE__ */ react_global_default.createElement(Select, { value: String(pageSize), onChange: (e) => onPageSize && onPageSize(Number(e.target.value)), options: [{ value: "40", label: "40 por pagina" }, { value: "80", label: "80 por pagina" }, { value: "200", label: "200 por pagina" }], style: { width: 150 } }), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", gap: "var(--ap-space-1)" } }, /* @__PURE__ */ react_global_default.createElement(IconButton, { icon: "chevron-left", label: "Pagina anterior", onClick: onPrev, disabled: from <= 1 }), /* @__PURE__ */ react_global_default.createElement(IconButton, { icon: "chevron-right", label: "Pagina siguiente", onClick: onNext, disabled: to >= total }))));
  }

  // components/data/Quota.jsx
  function Quota({ used = 0, total = 100, label, unit, cells = 20, style, ...rest }) {
    const pct = total ? Math.max(0, Math.min(100, used / total * 100)) : 0;
    const on = Math.round(pct / 100 * cells);
    const tone = pct >= 90 ? "var(--ap-error)" : pct >= 75 ? "var(--ap-warn)" : "var(--ap-gray-600)";
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-2)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--ap-space-2)" } }, label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, label), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "flex", alignItems: "baseline", gap: 4 } }, /* @__PURE__ */ react_global_default.createElement(DataValue, { value: used, size: "var(--ap-size-13)", weight: 500 }), /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)", fontVariationSettings: "var(--ap-vf-data)" } }, "/ ", total, unit ? " " + unit : ""))), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", gap: 2 } }, Array.from({ length: cells }).map((_, i) => /* @__PURE__ */ react_global_default.createElement("span", { key: i, style: { flex: 1, height: 8, borderRadius: 1, background: i < on ? tone : "var(--ap-gray-100)", transition: "background-color var(--ap-dur-state) var(--ap-ease)", transitionDelay: i * 8 + "ms" } }))));
  }

  // components/data/Skeleton.jsx
  function Skeleton({ width = 64, height = 12, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "inline-block", width, height, borderRadius: 2, background: "var(--ap-gray-100)", ...style }, ...rest });
  }

  // components/feedback/Accordion.jsx
  function Accordion({ items = [], defaultOpen = [], style, ...rest }) {
    const [open, setOpen] = react_global_default.useState(defaultOpen);
    const toggle = (id) => setOpen((o) => o.includes(id) ? o.filter((x) => x !== id) : [...o, id]);
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { border: "1px solid var(--ap-border)", borderRadius: "var(--ap-radius-panel)", overflow: "hidden", ...style }, ...rest }, items.map((it, i) => {
      const id = it.id || it.title, on = open.includes(id);
      return /* @__PURE__ */ react_global_default.createElement("div", { key: id, style: { borderTop: i ? "1px solid var(--ap-border)" : 0 } }, /* @__PURE__ */ react_global_default.createElement(
        "button",
        {
          type: "button",
          onClick: () => toggle(id),
          "aria-expanded": on,
          style: { display: "flex", alignItems: "center", gap: "var(--ap-space-3)", width: "100%", height: "var(--ap-row-h)", padding: "0 var(--ap-space-4)", border: 0, background: on ? "var(--ap-surface-subtle)" : "transparent", cursor: "pointer", textAlign: "left" }
        },
        /* @__PURE__ */ react_global_default.createElement(Icon, { name: on ? "chevron-down" : "chevron-right", size: 14, style: { color: "var(--ap-text-muted)" } }),
        /* @__PURE__ */ react_global_default.createElement("span", { style: { flex: 1, font: "var(--ap-text-ui-medium)" } }, it.title),
        it.meta && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums" } }, it.meta)
      ), on && /* @__PURE__ */ react_global_default.createElement("div", { style: { padding: "var(--ap-space-4)", borderTop: "1px solid var(--ap-border)" } }, it.children));
    }));
  }

  // components/feedback/Dialog.jsx
  function Dialog({ open = false, title, description, footer, onClose, width = 440, children, style, ...rest }) {
    if (!open) return null;
    return /* @__PURE__ */ react_global_default.createElement("div", { role: "presentation", onClick: onClose, style: { position: "fixed", inset: 0, background: "rgb(20 19 17 / 0.32)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, animation: "ap-rise var(--ap-dur-layer) var(--ap-ease) both" } }, /* @__PURE__ */ react_global_default.createElement(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        onClick: (e) => e.stopPropagation(),
        style: { width, maxWidth: "calc(100vw - 32px)", background: "var(--ap-surface)", border: "1px solid var(--ap-border-strong)", borderRadius: "var(--ap-radius-panel)", boxShadow: "var(--ap-shadow-2)", ...style },
        ...rest
      },
      /* @__PURE__ */ react_global_default.createElement("div", { style: { padding: "var(--ap-space-5) var(--ap-space-5) var(--ap-space-4)" } }, title && /* @__PURE__ */ react_global_default.createElement("h2", { style: { margin: 0, font: "var(--ap-text-subtitle)" } }, title), description && /* @__PURE__ */ react_global_default.createElement("p", { style: { margin: "var(--ap-space-2) 0 0", font: "var(--ap-text-small)", color: "var(--ap-text-secondary)", maxWidth: "56ch", textWrap: "pretty" } }, description), children && /* @__PURE__ */ react_global_default.createElement("div", { style: { marginTop: "var(--ap-space-4)" } }, children)),
      footer && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: "var(--ap-space-2)", padding: "var(--ap-space-3) var(--ap-space-5)", borderTop: "1px solid var(--ap-border)" } }, footer)
    ));
  }

  // components/feedback/EmptyState.jsx
  function EmptyState({ title, description, action, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--ap-space-2)", padding: "var(--ap-space-10) var(--ap-space-6)", borderTop: "1px solid var(--ap-border)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { font: "var(--ap-text-subtitle)" } }, title), description && /* @__PURE__ */ react_global_default.createElement("p", { style: { margin: 0, font: "var(--ap-text-small)", color: "var(--ap-text-secondary)", maxWidth: "52ch", textWrap: "pretty" } }, description), action && /* @__PURE__ */ react_global_default.createElement("div", { style: { marginTop: "var(--ap-space-2)" } }, action));
  }

  // components/feedback/ErrorState.jsx
  function ErrorState({ title = "No se han podido cargar los datos", code, detail, onRetry, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-3)", justifyItems: "start", padding: "var(--ap-space-8) var(--ap-space-6)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-subtitle)", color: "var(--ap-error)" } }, title), code && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: code, size: "var(--ap-size-12)", tone: "error" })), detail && /* @__PURE__ */ react_global_default.createElement("p", { style: { margin: 0, font: "var(--ap-text-small)", color: "var(--ap-text-secondary)", maxWidth: "56ch", textWrap: "pretty" } }, detail), onRetry && /* @__PURE__ */ react_global_default.createElement(Button, { size: "sm", onClick: onRetry }, "Reintentar"));
  }

  // components/feedback/FileDrop.jsx
  function FileDrop({ label = "Arrastra un archivo o pulsa para elegir", hint, accept, files = [], onFiles, onRemove, style, ...rest }) {
    const [over, setOver] = react_global_default.useState(false);
    const input = react_global_default.useRef(null);
    const take = (list) => onFiles && onFiles(Array.from(list || []));
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-2)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        type: "button",
        onClick: () => input.current && input.current.click(),
        onDragOver: (e) => {
          e.preventDefault();
          setOver(true);
        },
        onDragLeave: () => setOver(false),
        onDrop: (e) => {
          e.preventDefault();
          setOver(false);
          take(e.dataTransfer.files);
        },
        style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--ap-space-2)", padding: "var(--ap-space-6)", border: "1px dashed " + (over ? "var(--ap-accent)" : "var(--ap-border-strong)"), borderRadius: "var(--ap-radius-panel)", background: over ? "var(--ap-accent-tint)" : "var(--ap-surface-sunken)", cursor: "pointer", transition: "background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease)" }
      },
      /* @__PURE__ */ react_global_default.createElement(Icon, { name: "upload", size: 15, style: { color: "var(--ap-text-muted)" } }),
      /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, label)
    ), /* @__PURE__ */ react_global_default.createElement("input", { ref: input, type: "file", accept, multiple: true, onChange: (e) => take(e.target.files), style: { display: "none" } }), hint && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, hint), files.length > 0 && /* @__PURE__ */ react_global_default.createElement("div", { style: { border: "1px solid var(--ap-border)", borderRadius: "var(--ap-radius-control)" } }, files.map((file, i) => /* @__PURE__ */ react_global_default.createElement("div", { key: file.name + i, style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", height: "var(--ap-row-h)", padding: "0 var(--ap-space-3)", borderTop: i ? "1px solid var(--ap-border)" : 0 } }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: "file", size: 14, style: { color: "var(--ap-text-muted)" } }), /* @__PURE__ */ react_global_default.createElement("span", { style: { flex: 1, font: "var(--ap-text-small)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, file.name), /* @__PURE__ */ react_global_default.createElement(DataValue, { value: file.size, size: "var(--ap-size-11)", tone: "muted" }), onRemove && /* @__PURE__ */ react_global_default.createElement("button", { type: "button", onClick: () => onRemove(file), "aria-label": "Quitar", style: { border: 0, background: "transparent", cursor: "pointer", color: "var(--ap-text-muted)", padding: 0, display: "inline-flex" } }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: "x", size: 12 }))))));
  }

  // components/feedback/FrozenState.jsx
  function FrozenState({ frozen = false, since, reason = "Datos congelados", onResume, children, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { position: "relative", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { opacity: frozen ? 0.45 : 1, filter: frozen ? "saturate(0)" : "none", pointerEvents: frozen ? "none" : "auto", transition: "opacity var(--ap-dur-state) var(--ap-ease)" } }, children), frozen && /* @__PURE__ */ react_global_default.createElement("div", { style: { position: "absolute", top: "var(--ap-space-3)", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "var(--ap-space-2)", padding: "var(--ap-space-2) var(--ap-space-3)", background: "var(--ap-surface)", border: "1px solid var(--ap-border-strong)", borderRadius: "var(--ap-radius-control)", boxShadow: "var(--ap-shadow-1)" } }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: "pause", size: 13, style: { color: "var(--ap-warn)" } }), /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)" } }, reason), since && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: since, size: "var(--ap-size-11)", tone: "muted" }), onResume && /* @__PURE__ */ react_global_default.createElement("button", { type: "button", onClick: onResume, style: { border: 0, background: "transparent", padding: 0, marginLeft: "var(--ap-space-2)", color: "var(--ap-accent)", font: "var(--ap-text-label)", cursor: "pointer" } }, "Reanudar")));
  }

  // components/feedback/InlineAlert.jsx
  var tones2 = {
    ok: { bg: "var(--ap-ok-tint)", fg: "var(--ap-ok)", icon: "check-circle-2" },
    warn: { bg: "var(--ap-warn-tint)", fg: "var(--ap-warn)", icon: "alert-triangle" },
    error: { bg: "var(--ap-error-tint)", fg: "var(--ap-error)", icon: "octagon-alert" },
    info: { bg: "var(--ap-gray-50)", fg: "var(--ap-gray-600)", icon: "info" }
  };
  function InlineAlert({ tone = "info", title, children, style, ...rest }) {
    const t = tones2[tone] || tones2.info;
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", gap: "var(--ap-space-2)", padding: "var(--ap-space-3)", background: t.bg, border: "1px solid color-mix(in srgb," + t.fg + " 16%,transparent)", borderRadius: "var(--ap-radius-control)", color: t.fg, ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: t.icon, size: 15, style: { marginTop: 2 } }), /* @__PURE__ */ react_global_default.createElement("div", { style: { minWidth: 0 } }, title && /* @__PURE__ */ react_global_default.createElement("div", { style: { font: "var(--ap-text-ui-medium)" } }, title), children && /* @__PURE__ */ react_global_default.createElement("div", { style: { font: "var(--ap-text-small)", color: "var(--ap-gray-600)", textWrap: "pretty" } }, children)));
  }

  // components/feedback/Menu.jsx
  function Menu({ open = false, items = [], onSelect, onClose, anchor = "right", style, ...rest }) {
    const [hover, setHover] = react_global_default.useState(null);
    if (!open) return null;
    return /* @__PURE__ */ react_global_default.createElement(react_global_default.Fragment, null, /* @__PURE__ */ react_global_default.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 40 } }), /* @__PURE__ */ react_global_default.createElement("div", { role: "menu", style: { position: "absolute", top: "calc(100% + 4px)", [anchor]: 0, zIndex: 41, minWidth: 200, padding: "var(--ap-space-1)", background: "var(--ap-surface)", border: "1px solid var(--ap-border-strong)", borderRadius: "var(--ap-radius-panel)", boxShadow: "var(--ap-shadow-2)", animation: "ap-rise var(--ap-dur-state) var(--ap-ease) both", ...style }, ...rest }, items.map(
      (it, i) => it.divider ? /* @__PURE__ */ react_global_default.createElement("div", { key: "d" + i, style: { height: 1, background: "var(--ap-border)", margin: "var(--ap-space-1) 0" } }) : /* @__PURE__ */ react_global_default.createElement(
        "button",
        {
          key: it.value,
          role: "menuitem",
          onClick: () => {
            onSelect && onSelect(it.value);
            onClose && onClose();
          },
          onMouseEnter: () => setHover(it.value),
          onMouseLeave: () => setHover(null),
          style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", width: "100%", height: "var(--ap-control-h)", padding: "0 var(--ap-space-2)", border: 0, borderRadius: "var(--ap-radius-control)", background: hover === it.value ? "var(--ap-surface-hover)" : "transparent", color: it.tone === "danger" ? "var(--ap-error)" : "var(--ap-text)", font: "var(--ap-text-ui)", cursor: "pointer", textAlign: "left", transition: "background-color var(--ap-dur-micro) var(--ap-ease)" }
        },
        it.icon && /* @__PURE__ */ react_global_default.createElement(Icon, { name: it.icon, size: 15, style: { color: "var(--ap-text-muted)" } }),
        /* @__PURE__ */ react_global_default.createElement("span", { style: { flex: 1 } }, it.label),
        it.shortcut && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-micro)", color: "var(--ap-text-muted)", fontVariationSettings: "var(--ap-vf-data)" } }, it.shortcut)
      )
    )));
  }

  // components/feedback/OperationLog.jsx
  var toneOf2 = (s) => s === "error" ? "var(--ap-error)" : s === "ok" ? "var(--ap-ok)" : "var(--ap-text-secondary)";
  function OperationLog({ operations = [], onDismiss, style, ...rest }) {
    if (!operations.length) return null;
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { position: "fixed", right: "var(--ap-space-4)", bottom: "var(--ap-space-4)", width: 320, display: "grid", gap: "var(--ap-space-2)", zIndex: 45, ...style }, ...rest }, operations.map((op) => /* @__PURE__ */ react_global_default.createElement("div", { key: op.id, style: { background: "var(--ap-surface)", border: "1px solid var(--ap-border-strong)", borderRadius: "var(--ap-radius-panel)", boxShadow: "var(--ap-shadow-2)", padding: "var(--ap-space-3)", animation: "ap-rise var(--ap-dur-state) var(--ap-ease) both" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-ui-medium)" } }, op.title), op.status !== "running" && /* @__PURE__ */ react_global_default.createElement("button", { onClick: () => onDismiss && onDismiss(op.id), style: { border: 0, background: "transparent", cursor: "pointer", color: "var(--ap-text-muted)", padding: 0, lineHeight: 1 } }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: "x", size: 12 }))), /* @__PURE__ */ react_global_default.createElement("div", { style: { marginTop: 6, display: "flex", alignItems: "center", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { flex: 1, height: 3, background: "var(--ap-gray-100)", borderRadius: 2, overflow: "hidden" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { width: (op.progress || 0) + "%", height: "100%", background: op.status === "error" ? "var(--ap-error)" : op.status === "ok" ? "var(--ap-ok)" : "var(--ap-gray-600)", transition: "width var(--ap-dur-state) var(--ap-ease)" } })), /* @__PURE__ */ react_global_default.createElement(DataValue, { value: (op.progress || 0) + "%", size: "var(--ap-size-11)", style: { color: toneOf2(op.status) } })), op.detail && /* @__PURE__ */ react_global_default.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ react_global_default.createElement(DataValue, { value: op.detail, size: "var(--ap-size-11)", tone: "muted" })))));
  }

  // components/feedback/PageError.jsx
  var COPY = {
    "404": { title: "Esta ruta no existe", detail: "Comprueba la referencia o vuelve al listado. Si has llegado desde un enlace guardado, el recurso puede haberse retirado." },
    "403": { title: "No tienes acceso a este recurso", detail: "Tu rol no incluye esta region. Pide acceso a la persona responsable del servicio." },
    "500": { title: "Algo ha fallado en el servidor", detail: "El fallo esta registrado con el identificador de abajo. Si persiste, adjuntalo al abrir la incidencia." },
    "503": { title: "Servicio en mantenimiento", detail: "Ventana programada de mantenimiento. La consola vuelve a estar disponible al terminar." }
  };
  function PageError({ code = "404", title, detail, requestId, eta, actions, style, ...rest }) {
    const c = COPY[String(code)] || {};
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-4)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement(DataValue, { value: code, size: "var(--ap-size-48)", weight: 500, style: { letterSpacing: "-0.03em", lineHeight: 1, color: String(code) === "500" ? "var(--ap-error)" : "var(--ap-text)" } }), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ react_global_default.createElement("h1", { style: { margin: 0, font: "var(--ap-weight-bold) var(--ap-size-23)/1.25 var(--ap-font-display)", letterSpacing: "-0.02em" } }, title || c.title), /* @__PURE__ */ react_global_default.createElement("p", { style: { margin: 0, font: "var(--ap-text-prose)", fontSize: "var(--ap-size-14)", color: "var(--ap-text-secondary)", maxWidth: "56ch", textWrap: "pretty" } }, detail || c.detail)), (requestId || eta) && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-1)", padding: "var(--ap-space-3)", background: "var(--ap-surface-subtle)", border: "1px solid var(--ap-border)", borderRadius: "var(--ap-radius-control)" } }, requestId && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: "var(--ap-space-3)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Identificador"), /* @__PURE__ */ react_global_default.createElement(DataValue, { value: requestId, size: "var(--ap-size-12)" })), eta && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: "var(--ap-space-3)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Fin previsto"), /* @__PURE__ */ react_global_default.createElement(DataValue, { value: eta, size: "var(--ap-size-12)" }))), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", gap: "var(--ap-space-2)", flexWrap: "wrap" } }, actions || /* @__PURE__ */ react_global_default.createElement(Button, { variant: "primary" }, "Volver al listado")));
  }

  // components/feedback/ProgressBar.jsx
  function ProgressBar({ value = 0, label, showValue = true, tone = "default", height = 4, style, ...rest }) {
    const pct = Math.max(0, Math.min(100, value));
    const color = tone === "error" ? "var(--ap-error)" : tone === "ok" ? "var(--ap-ok)" : "var(--ap-gray-600)";
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-1)", ...style }, ...rest }, (label || showValue) && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--ap-space-2)" } }, label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, label), showValue && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: pct + "%", size: "var(--ap-size-12)", style: { color } })), /* @__PURE__ */ react_global_default.createElement("div", { role: "progressbar", "aria-valuenow": pct, style: { height, background: "var(--ap-gray-100)", borderRadius: 2, overflow: "hidden" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { width: pct + "%", height: "100%", background: color, transition: "width var(--ap-dur-state) var(--ap-ease)" } })));
  }

  // components/feedback/Steps.jsx
  function Steps({ steps = [], current = 0, direction = "row", style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("ol", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: direction === "row" ? "row" : "column", gap: direction === "row" ? 0 : "var(--ap-space-3)", ...style }, ...rest }, steps.map((s, i) => {
      const label = s.label || s, meta = s.meta, done = i < current, active = i === current;
      return /* @__PURE__ */ react_global_default.createElement("li", { key: label, style: { display: "flex", alignItems: direction === "row" ? "center" : "flex-start", gap: "var(--ap-space-2)", flex: direction === "row" ? 1 : "none", minWidth: 0 } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { width: 18, height: 18, flex: "0 0 auto", borderRadius: "50%", border: "1px solid " + (done ? "var(--ap-gray-900)" : active ? "var(--ap-gray-900)" : "var(--ap-border-strong)"), background: done ? "var(--ap-gray-900)" : "var(--ap-surface)", color: "var(--ap-text-inverse)", display: "inline-flex", alignItems: "center", justifyContent: "center" } }, done ? /* @__PURE__ */ react_global_default.createElement(Icon, { name: "check", size: 11, strokeWidth: 2.5 }) : /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", color: active ? "var(--ap-text)" : "var(--ap-text-muted)" } }, i + 1)), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "grid", gap: 1, minWidth: 0 } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: active ? "var(--ap-text-ui-medium)" : "var(--ap-text-ui)", color: done || active ? "var(--ap-text)" : "var(--ap-text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, label), meta && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: meta, size: "var(--ap-size-11)", tone: "muted" })), direction === "row" && i < steps.length - 1 && /* @__PURE__ */ react_global_default.createElement("span", { style: { flex: 1, height: 1, background: done ? "var(--ap-gray-900)" : "var(--ap-border)", margin: "0 var(--ap-space-2)" } }));
    }));
  }

  // components/feedback/Toast.jsx
  function Toast({ toasts = [], onDismiss, onAction, style, ...rest }) {
    if (!toasts.length) return null;
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { position: "fixed", left: "50%", bottom: "var(--ap-space-6)", transform: "translateX(-50%)", display: "grid", gap: "var(--ap-space-2)", zIndex: 55, ...style }, ...rest }, toasts.map((t) => /* @__PURE__ */ react_global_default.createElement("div", { key: t.id, style: { display: "flex", alignItems: "center", gap: "var(--ap-space-3)", padding: "var(--ap-space-2) var(--ap-space-2) var(--ap-space-2) var(--ap-space-4)", background: "var(--ap-surface-inverse)", color: "var(--ap-text-inverse)", borderRadius: "var(--ap-radius-panel)", boxShadow: "var(--ap-shadow-2)", animation: "ap-rise var(--ap-dur-state) var(--ap-ease) both" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-ui)" } }, t.message), t.action && /* @__PURE__ */ react_global_default.createElement("button", { type: "button", onClick: () => onAction && onAction(t), style: { height: "var(--ap-control-h-sm)", padding: "0 10px", border: 0, borderRadius: "var(--ap-radius-control)", background: "var(--ap-gray-800)", color: "var(--ap-gray-100)", font: "var(--ap-text-ui-medium)", cursor: "pointer" } }, t.action), /* @__PURE__ */ react_global_default.createElement("button", { type: "button", onClick: () => onDismiss && onDismiss(t.id), "aria-label": "Cerrar", style: { border: 0, background: "transparent", cursor: "pointer", color: "var(--ap-gray-400)", display: "inline-flex", padding: 4 } }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: "x", size: 12 })))));
  }

  // components/feedback/Tooltip.jsx
  function Tooltip({ label, children, style, ...rest }) {
    const [on, setOn] = react_global_default.useState(false);
    return /* @__PURE__ */ react_global_default.createElement("span", { style: { position: "relative", display: "inline-flex" }, onMouseEnter: () => setOn(true), onMouseLeave: () => setOn(false), ...rest }, children, /* @__PURE__ */ react_global_default.createElement("span", { role: "tooltip", style: { position: "absolute", bottom: "calc(100% + 6px)", left: "50%", transform: on ? "translate(-50%,0)" : "translate(-50%,4px)", opacity: on ? 1 : 0, pointerEvents: "none", whiteSpace: "nowrap", padding: "4px 8px", borderRadius: "var(--ap-radius-chip)", background: "var(--ap-surface-inverse)", color: "var(--ap-text-inverse)", font: "var(--ap-text-micro)", boxShadow: "var(--ap-shadow-1)", transition: "opacity var(--ap-dur-micro) var(--ap-ease),transform var(--ap-dur-micro) var(--ap-ease)", zIndex: 30, ...style } }, label));
  }

  // components/forms/DateRange.jsx
  var PRESETS = [{ id: "1h", label: "1 h" }, { id: "24h", label: "24 h" }, { id: "7d", label: "7 d" }, { id: "30d", label: "30 d" }];
  function DateRange({ value = "24h", onChange, absolute, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "inline-flex", alignItems: "stretch", height: "var(--ap-control-h)", border: "1px solid var(--ap-border-input)", borderRadius: "var(--ap-radius-control)", overflow: "hidden", background: "var(--ap-surface)", ...style }, ...rest }, PRESETS.map((p) => /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        key: p.id,
        type: "button",
        onClick: () => onChange && onChange(p.id),
        style: { padding: "0 10px", border: 0, borderRight: "1px solid var(--ap-border)", background: value === p.id ? "var(--ap-surface-active)" : "transparent", color: value === p.id ? "var(--ap-text)" : "var(--ap-text-secondary)", font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)", cursor: "pointer", transition: "background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)" }
      },
      p.label
    )), /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        type: "button",
        onClick: () => onChange && onChange("custom"),
        style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "0 10px", border: 0, background: value === "custom" ? "var(--ap-surface-active)" : "transparent", color: value === "custom" ? "var(--ap-text)" : "var(--ap-text-secondary)", cursor: "pointer" }
      },
      /* @__PURE__ */ react_global_default.createElement(Icon, { name: "calendar", size: 13 }),
      /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)" } }, absolute || "personalizado")
    ));
  }

  // components/forms/DurationInput.jsx
  var UNITS = ["s", "min", "h", "d"];
  function DurationInput({ label, value = 0, unit = "min", onChange, hint, width = 176, disabled, style }) {
    const [focus, setFocus] = react_global_default.useState(false);
    const set = (v, u) => onChange && onChange({ value: v, unit: u });
    return /* @__PURE__ */ react_global_default.createElement("label", { style: { display: "flex", flexDirection: "column", gap: "var(--ap-space-1)", width, ...style } }, label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)", color: "var(--ap-text-secondary)" } }, label), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "flex", alignItems: "stretch", height: "var(--ap-control-h)", background: disabled ? "var(--ap-surface-subtle)" : "var(--ap-surface)", border: "1px solid " + (focus ? "var(--ap-accent)" : "var(--ap-border-input)"), borderRadius: "var(--ap-radius-control)", overflow: "hidden" } }, /* @__PURE__ */ react_global_default.createElement(
      "input",
      {
        value,
        disabled,
        inputMode: "numeric",
        onChange: (e) => set(e.target.value, unit),
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: { flex: 1, minWidth: 0, border: 0, outline: "none", background: "transparent", padding: "0 var(--ap-space-2)", textAlign: "right", font: "var(--ap-text-ui)", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums" }
      }
    ), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "flex", borderLeft: "1px solid var(--ap-border)" } }, UNITS.map((u) => /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        key: u,
        type: "button",
        disabled,
        onClick: () => set(value, u),
        style: { width: 32, border: 0, borderRight: u === "d" ? 0 : "1px solid var(--ap-border)", background: u === unit ? "var(--ap-surface-active)" : "var(--ap-surface-sunken)", color: u === unit ? "var(--ap-text)" : "var(--ap-text-muted)", font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", cursor: disabled ? "not-allowed" : "pointer", transition: "background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)" }
      },
      u
    )))), hint && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, hint));
  }

  // components/forms/FormActions.jsx
  function FormActions({ dirty = false, count, onSave, onDiscard, saving = false, saveLabel = "Guardar cambios", style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { position: "sticky", bottom: 0, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--ap-space-3)", padding: "var(--ap-space-3) var(--ap-space-4)", background: "var(--ap-surface)", borderTop: "1px solid var(--ap-border-strong)", boxShadow: dirty ? "var(--ap-shadow-2)" : "none", transform: dirty ? "none" : "translateY(100%)", opacity: dirty ? 1 : 0, pointerEvents: dirty ? "auto" : "none", transition: "transform var(--ap-dur-state) var(--ap-ease),opacity var(--ap-dur-state) var(--ap-ease)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, count !== void 0 ? /* @__PURE__ */ react_global_default.createElement(react_global_default.Fragment, null, /* @__PURE__ */ react_global_default.createElement(DataValue, { value: count }), " cambios sin guardar") : "Cambios sin guardar"), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ react_global_default.createElement(Button, { onClick: onDiscard, disabled: saving }, "Descartar"), /* @__PURE__ */ react_global_default.createElement(Button, { variant: "primary", onClick: onSave, disabled: saving }, saving ? "Guardando" : saveLabel)));
  }

  // components/forms/FormSection.jsx
  function FormSection({ title, description, children, columns = 2, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("section", { style: { display: "grid", gridTemplateColumns: "minmax(180px,240px) minmax(0,1fr)", gap: "var(--ap-space-6)", padding: "var(--ap-space-5) 0", borderBottom: "1px solid var(--ap-border)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-1)", alignContent: "start" } }, /* @__PURE__ */ react_global_default.createElement("h3", { style: { margin: 0, font: "var(--ap-text-subtitle)" } }, title), description && /* @__PURE__ */ react_global_default.createElement("p", { style: { margin: 0, font: "var(--ap-text-small)", color: "var(--ap-text-secondary)", textWrap: "pretty" } }, description)), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + columns + ",minmax(0,1fr))", gap: "var(--ap-space-4)", alignItems: "start" } }, children));
  }

  // components/forms/Input.jsx
  function Input({ label, hint, error, icon, data = false, value, onChange, placeholder, disabled, type = "text", style, ...rest }) {
    const [focus, setFocus] = react_global_default.useState(false);
    return /* @__PURE__ */ react_global_default.createElement("label", { style: { display: "flex", flexDirection: "column", gap: "var(--ap-space-1)", ...style } }, label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)", color: "var(--ap-text-secondary)" } }, label), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", height: "var(--ap-control-h)", padding: "0 var(--ap-space-2)", background: disabled ? "var(--ap-surface-subtle)" : "var(--ap-surface)", border: "1px solid " + (error ? "var(--ap-error)" : focus ? "var(--ap-accent)" : "var(--ap-border-input)"), borderRadius: "var(--ap-radius-control)", transition: "border-color var(--ap-dur-micro) var(--ap-ease)" } }, icon && /* @__PURE__ */ react_global_default.createElement(Icon, { name: icon, size: 14, style: { color: "var(--ap-text-muted)" } }), /* @__PURE__ */ react_global_default.createElement(
      "input",
      {
        type,
        value,
        onChange,
        placeholder,
        disabled,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: { flex: 1, minWidth: 0, border: 0, outline: "none", background: "transparent", font: "var(--ap-text-ui)", fontVariationSettings: data ? "var(--ap-vf-data)" : "var(--ap-vf-prose)", fontVariantNumeric: data ? "tabular-nums" : "normal" },
        ...rest
      }
    )), (error || hint) && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: error ? "var(--ap-error)" : "var(--ap-text-muted)" } }, error || hint));
  }

  // components/forms/OtpInput.jsx
  function OtpInput({ length = 6, value = "", onChange, label, error, disabled, style, ...rest }) {
    const refs = react_global_default.useRef([]);
    const chars = String(value).slice(0, length).split("");
    const set = (i, ch) => {
      const next = chars.slice();
      next[i] = ch.replace(/\D/g, "").slice(-1) || "";
      const joined = next.join("").slice(0, length);
      onChange && onChange(joined);
      if (next[i] && refs.current[i + 1]) refs.current[i + 1].focus();
    };
    const onKey = (i, e) => {
      if (e.key === "Backspace" && !chars[i] && refs.current[i - 1]) refs.current[i - 1].focus();
      if (e.key === "ArrowLeft" && refs.current[i - 1]) refs.current[i - 1].focus();
      if (e.key === "ArrowRight" && refs.current[i + 1]) refs.current[i + 1].focus();
    };
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: "var(--ap-space-1)", ...style }, ...rest }, label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)", color: "var(--ap-text-secondary)" } }, label), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", gap: "var(--ap-space-2)" } }, Array.from({ length }).map((_, i) => /* @__PURE__ */ react_global_default.createElement(
      "input",
      {
        key: i,
        ref: (el) => {
          refs.current[i] = el;
        },
        value: chars[i] || "",
        disabled,
        inputMode: "numeric",
        maxLength: 1,
        "aria-label": "Digito " + (i + 1),
        onChange: (e) => set(i, e.target.value),
        onKeyDown: (e) => onKey(i, e),
        onPaste: (e) => {
          const t = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, length);
          if (t) {
            e.preventDefault();
            onChange && onChange(t);
          }
        },
        style: { width: 40, height: "var(--ap-control-h-lg)", textAlign: "center", background: disabled ? "var(--ap-surface-subtle)" : "var(--ap-surface)", border: "1px solid " + (error ? "var(--ap-error)" : "var(--ap-border-input)"), borderRadius: "var(--ap-radius-control)", outline: "none", font: "var(--ap-weight-medium) var(--ap-size-19)/1 var(--ap-font-core)", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums" }
      }
    ))), error && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-error)" } }, error));
  }

  // components/forms/Radio.jsx
  function Radio({ options = [], value, onChange, name, direction = "column", disabled, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { role: "radiogroup", style: { display: "flex", flexDirection: direction, gap: direction === "row" ? "var(--ap-space-4)" : "var(--ap-space-2)", ...style }, ...rest }, options.map((o) => {
      const v = typeof o === "string" ? o : o.value, l = typeof o === "string" ? o : o.label, hint = typeof o === "string" ? null : o.hint;
      const on = value === v;
      return /* @__PURE__ */ react_global_default.createElement("label", { key: v, style: { display: "flex", alignItems: "flex-start", gap: "var(--ap-space-2)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1 } }, /* @__PURE__ */ react_global_default.createElement("input", { type: "radio", name, checked: on, onChange: () => onChange && onChange(v), disabled, style: { position: "absolute", opacity: 0, width: 0, height: 0 } }), /* @__PURE__ */ react_global_default.createElement("span", { style: { width: 16, height: 16, marginTop: 1, borderRadius: "50%", border: "1px solid " + (on ? "var(--ap-accent)" : "var(--ap-border-strong)"), background: "var(--ap-surface)", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "border-color var(--ap-dur-micro) var(--ap-ease)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: on ? "var(--ap-accent)" : "transparent", transform: on ? "none" : "scale(.4)", transition: "transform var(--ap-dur-micro) var(--ap-ease),background-color var(--ap-dur-micro) var(--ap-ease)" } })), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "grid", gap: 2 } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-ui)" } }, l), hint && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, hint)));
    }));
  }

  // components/forms/SearchField.jsx
  function SearchField({ value, onChange, placeholder = "Buscar", style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement(Input, { icon: "search", value, onChange, placeholder, style: { width: 260, ...style }, ...rest });
  }

  // components/forms/SegmentedControl.jsx
  function SegmentedControl({ options = [], value, onChange, size = "md", data = false, style, ...rest }) {
    const h = size === "sm" ? "var(--ap-control-h-sm)" : "var(--ap-control-h)";
    return /* @__PURE__ */ react_global_default.createElement("div", { role: "tablist", style: { display: "inline-flex", height: h, border: "1px solid var(--ap-border-input)", borderRadius: "var(--ap-radius-control)", overflow: "hidden", background: "var(--ap-surface)", ...style }, ...rest }, options.map((o, i) => {
      const v = typeof o === "string" ? o : o.value, l = typeof o === "string" ? o : o.label;
      const on = value === v;
      return /* @__PURE__ */ react_global_default.createElement(
        "button",
        {
          key: v,
          type: "button",
          role: "tab",
          "aria-selected": on,
          onClick: () => onChange && onChange(v),
          style: { padding: "0 12px", border: 0, borderLeft: i ? "1px solid var(--ap-border)" : 0, background: on ? "var(--ap-surface-active)" : "transparent", color: on ? "var(--ap-text)" : "var(--ap-text-secondary)", font: on ? "var(--ap-text-ui-medium)" : "var(--ap-text-ui)", fontSize: size === "sm" ? "var(--ap-size-13)" : "var(--ap-size-14)", fontVariationSettings: data ? "var(--ap-vf-data)" : "var(--ap-vf-prose)", cursor: "pointer", whiteSpace: "nowrap", transition: "background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)" }
        },
        l
      );
    }));
  }

  // components/forms/Switch.jsx
  function Switch({ checked, defaultChecked = false, onChange, label, disabled, style, ...rest }) {
    const controlled = checked !== void 0;
    const [inner, setInner] = react_global_default.useState(defaultChecked);
    const value = controlled ? checked : inner;
    const handle = (e) => {
      if (!controlled) setInner(e.target.checked);
      onChange && onChange(e);
    };
    return /* @__PURE__ */ react_global_default.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: "var(--ap-space-2)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("input", { type: "checkbox", checked: value, onChange: handle, disabled, style: { position: "absolute", opacity: 0, width: 0, height: 0 } }), /* @__PURE__ */ react_global_default.createElement("span", { style: { width: 30, height: 18, padding: 2, borderRadius: 9, background: value ? "var(--ap-gray-700)" : "var(--ap-gray-200)", transition: "background-color var(--ap-dur-state) var(--ap-ease)", display: "inline-flex" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { width: 14, height: 14, borderRadius: 7, background: "var(--ap-gray-0)", transform: value ? "translateX(12px)" : "none", transition: "transform var(--ap-dur-state) var(--ap-ease)" } })), label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-ui)" } }, label));
  }

  // components/forms/Textarea.jsx
  function Textarea({ label, hint, error, rows = 4, value, onChange, placeholder, disabled, style, ...rest }) {
    const [focus, setFocus] = react_global_default.useState(false);
    return /* @__PURE__ */ react_global_default.createElement("label", { style: { display: "flex", flexDirection: "column", gap: "var(--ap-space-1)", ...style } }, label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)", color: "var(--ap-text-secondary)" } }, label), /* @__PURE__ */ react_global_default.createElement(
      "textarea",
      {
        rows,
        value,
        onChange,
        placeholder,
        disabled,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: { resize: "vertical", padding: "var(--ap-space-2)", background: disabled ? "var(--ap-surface-subtle)" : "var(--ap-surface)", border: "1px solid " + (error ? "var(--ap-error)" : focus ? "var(--ap-accent)" : "var(--ap-border-input)"), borderRadius: "var(--ap-radius-control)", outline: "none", font: "var(--ap-weight-body) var(--ap-size-14)/var(--ap-leading-prose) var(--ap-font-core)", fontVariationSettings: "var(--ap-vf-prose)", transition: "border-color var(--ap-dur-micro) var(--ap-ease)" },
        ...rest
      }
    ), (error || hint) && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: error ? "var(--ap-error)" : "var(--ap-text-muted)" } }, error || hint));
  }

  // components/forms/UnitInput.jsx
  function UnitInput({ label, unit, hint, error, value, onChange, width = 140, disabled, style, ...rest }) {
    const [focus, setFocus] = react_global_default.useState(false);
    return /* @__PURE__ */ react_global_default.createElement("label", { style: { display: "flex", flexDirection: "column", gap: "var(--ap-space-1)", width, ...style } }, label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-label)", color: "var(--ap-text-secondary)" } }, label), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "flex", alignItems: "stretch", height: "var(--ap-control-h)", background: disabled ? "var(--ap-surface-subtle)" : "var(--ap-surface)", border: "1px solid " + (error ? "var(--ap-error)" : focus ? "var(--ap-accent)" : "var(--ap-border-input)"), borderRadius: "var(--ap-radius-control)", overflow: "hidden", transition: "border-color var(--ap-dur-micro) var(--ap-ease)" } }, /* @__PURE__ */ react_global_default.createElement(
      "input",
      {
        value,
        onChange,
        disabled,
        inputMode: "decimal",
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: { flex: 1, minWidth: 0, border: 0, outline: "none", background: "transparent", padding: "0 var(--ap-space-2)", textAlign: "right", font: "var(--ap-text-ui)", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums" },
        ...rest
      }
    ), /* @__PURE__ */ react_global_default.createElement("span", { style: { display: "flex", alignItems: "center", padding: "0 var(--ap-space-2)", borderLeft: "1px solid var(--ap-border)", background: "var(--ap-surface-sunken)", font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-secondary)" } }, unit)), (error || hint) && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: error ? "var(--ap-error)" : "var(--ap-text-muted)" } }, error || hint));
  }

  // components/layout/AppShell.jsx
  function AppShell({ topbar, nav, aside, children, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden", background: "var(--ap-surface)", ...style }, ...rest }, topbar, /* @__PURE__ */ react_global_default.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, nav, /* @__PURE__ */ react_global_default.createElement("main", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" } }, children), aside));
  }

  // components/layout/CenteredPage.jsx
  function CenteredPage({ brand, width = 380, footer, children, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { minHeight: "100vh", display: "grid", gridTemplateRows: "var(--ap-header-h) 1fr auto", background: "var(--ap-surface-sunken)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", padding: "0 var(--ap-space-6)", borderBottom: "1px solid var(--ap-border)", background: "var(--ap-surface)" } }, brand), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--ap-space-8) var(--ap-space-6)" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { width, maxWidth: "100%" } }, children)), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", justifyContent: "center", gap: "var(--ap-space-4)", padding: "var(--ap-space-4)", borderTop: "1px solid var(--ap-border)", font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, footer));
  }

  // components/layout/Columns.jsx
  function Columns({ children, count = 2, even = false, min = 200, gap = "var(--ap-space-4)", align = "start", style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gridTemplateColumns: even ? "repeat(" + count + ",minmax(0,1fr))" : "repeat(auto-fit,minmax(" + min + "px,1fr))", gap, alignItems: align, ...style }, ...rest }, children);
  }

  // components/layout/DetailPanel.jsx
  function DetailPanel({ open = false, onClose, header, footer, width = "var(--ap-detail-w)", children, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("aside", { "aria-hidden": !open, style: { width, flex: "0 0 auto", marginRight: open ? 0 : "calc(-1 * " + width + ")", background: "var(--ap-surface)", borderLeft: "1px solid var(--ap-border-strong)", boxShadow: "var(--ap-shadow-2)", display: "flex", flexDirection: "column", transform: open ? "none" : "translateX(100%)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "transform var(--ap-dur-layer) var(--ap-ease),opacity var(--ap-dur-layer) var(--ap-ease),margin-right var(--ap-dur-layer) var(--ap-ease)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--ap-space-3)", padding: "var(--ap-space-4)", borderBottom: "1px solid var(--ap-border)" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { minWidth: 0 } }, header), /* @__PURE__ */ react_global_default.createElement(IconButton, { icon: "x", label: "Cerrar panel", onClick: onClose })), /* @__PURE__ */ react_global_default.createElement("div", { style: { flex: 1, overflow: "auto", padding: "var(--ap-space-4)" } }, children), footer && /* @__PURE__ */ react_global_default.createElement("div", { style: { padding: "var(--ap-space-3) var(--ap-space-4)", borderTop: "1px solid var(--ap-border)", display: "flex", gap: "var(--ap-space-2)", justifyContent: "flex-end" } }, footer));
  }

  // components/layout/PageHeader.jsx
  function PageHeader({ eyebrow, title, meta, actions, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("header", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--ap-space-4)", padding: "var(--ap-space-6) var(--ap-space-6) var(--ap-space-4)", background: "var(--ap-surface)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { minWidth: 0 } }, eyebrow && /* @__PURE__ */ react_global_default.createElement("div", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", marginBottom: 6 } }, eyebrow), /* @__PURE__ */ react_global_default.createElement("h1", { style: { margin: 0, font: "var(--ap-weight-bold) var(--ap-size-29)/var(--ap-leading-display) var(--ap-font-display)", letterSpacing: "var(--ap-tracking-display)" } }, title), meta && /* @__PURE__ */ react_global_default.createElement("div", { style: { marginTop: "var(--ap-space-2)", display: "flex", alignItems: "center", gap: "var(--ap-space-3)", font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, meta)), actions && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)" } }, actions));
  }

  // components/layout/Panel.jsx
  function Panel({ title, actions, padded = false, children, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("section", { style: { background: "var(--ap-surface)", border: "1px solid var(--ap-border)", borderRadius: "var(--ap-radius-panel)", overflow: "hidden", ...style }, ...rest }, (title || actions) && /* @__PURE__ */ react_global_default.createElement("header", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--ap-space-3)", height: "var(--ap-header-h)", padding: "0 var(--ap-space-4)", borderBottom: "1px solid var(--ap-border)" } }, /* @__PURE__ */ react_global_default.createElement("h2", { style: { margin: 0, font: "var(--ap-text-subtitle)", letterSpacing: "-0.01em" } }, title), actions && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)" } }, actions)), /* @__PURE__ */ react_global_default.createElement("div", { style: padded ? { padding: "var(--ap-space-4)" } : void 0 }, children));
  }

  // components/layout/Prose.jsx
  function Prose({ children, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { font: "var(--ap-weight-body) var(--ap-size-15)/var(--ap-leading-prose) var(--ap-font-core)", fontVariationSettings: "var(--ap-vf-prose)", maxWidth: "var(--ap-measure-prose)", textWrap: "pretty", color: "var(--ap-text)", ...style }, ...rest }, children);
  }

  // components/layout/SectionHeader.jsx
  function SectionHeader({ label, title, meta, actions, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--ap-space-3)", paddingBottom: "var(--ap-space-2)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "var(--ap-space-3)", minWidth: 0 } }, label && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)" } }, label), title && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-subtitle)" } }, title), meta && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-secondary)", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums" } }, meta)), actions && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)" } }, actions));
  }

  // components/layout/Split.jsx
  function Split({ left, right, rightWidth = "var(--ap-detail-w)", collapsed = false, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", flex: 1, minWidth: 0, minHeight: 0, overflow: "hidden", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" } }, left), /* @__PURE__ */ react_global_default.createElement("div", { style: { width: rightWidth, flex: "0 0 auto", marginRight: collapsed ? "calc(-1 * " + rightWidth + ")" : 0, borderLeft: "1px solid var(--ap-border-strong)", display: "flex", flexDirection: "column", overflow: "hidden", opacity: collapsed ? 0 : 1, transition: "margin-right var(--ap-dur-layer) var(--ap-ease),opacity var(--ap-dur-layer) var(--ap-ease)" } }, right));
  }

  // components/layout/Stack.jsx
  function Stack({ children, direction = "column", gap = "var(--ap-space-3)", align, justify, wrap = false, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", flexDirection: direction, gap, alignItems: align, justifyContent: justify, flexWrap: wrap ? "wrap" : "nowrap", minWidth: 0, ...style }, ...rest }, children);
  }

  // components/layout/Toolbar.jsx
  function Toolbar({ left, right, children, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--ap-space-3)", height: "var(--ap-header-h)", padding: "0 var(--ap-space-4)", borderBottom: "1px solid var(--ap-border)", background: "var(--ap-surface)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", minWidth: 0 } }, left || children), right && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)" } }, right));
  }

  // components/layout/TopBar.jsx
  function TopBar({ brand, center, right, user, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("header", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-4)", height: "var(--ap-header-h)", padding: "0 var(--ap-space-4)", borderBottom: "1px solid var(--ap-border)", background: "var(--ap-surface)", ...style }, ...rest }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-3)", minWidth: 0 } }, brand), /* @__PURE__ */ react_global_default.createElement("div", { style: { flex: 1, display: "flex", justifyContent: "center", minWidth: 0 } }, center), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-3)" } }, right, user && /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", paddingLeft: "var(--ap-space-3)", borderLeft: "1px solid var(--ap-border)" } }, /* @__PURE__ */ react_global_default.createElement(Avatar, { name: user.name }), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "grid", gap: 1 } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", lineHeight: 1.2 } }, user.name), user.meta && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: user.meta, size: "var(--ap-size-11)", tone: "muted" })))));
  }

  // components/motion/SharedValue.jsx
  var origins = /* @__PURE__ */ new Map();
  function SharedValue({ sharedKey, children, style, ...rest }) {
    const ref = react_global_default.useRef(null);
    react_global_default.useEffect(() => {
      const el = ref.current, from = origins.get(sharedKey);
      if (!el || !from || Date.now() - from.t > 800) return;
      const to = el.getBoundingClientRect();
      if (!to.width) return;
      const dx = from.rect.left - to.left, dy = from.rect.top + from.rect.height / 2 - (to.top + to.height / 2), s = from.size / parseFloat(getComputedStyle(el).fontSize);
      el.animate([
        { transform: `translate(${dx}px,${dy}px) scale(${s})`, transformOrigin: "left center", opacity: 0.6 },
        { transform: "none", transformOrigin: "left center", opacity: 1 }
      ], { duration: 400, easing: "cubic-bezier(0.2,0,0,1)" });
      origins.delete(sharedKey);
    }, [sharedKey]);
    return /* @__PURE__ */ react_global_default.createElement("span", { ref, style: { display: "inline-block", fontVariationSettings: "var(--ap-vf-data)", fontVariantNumeric: "tabular-nums", ...style }, ...rest }, children);
  }
  SharedValue.capture = function(key, el) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    origins.set(key, { rect, size: parseFloat(getComputedStyle(el).fontSize), t: Date.now() });
  };

  // components/motion/Stagger.jsx
  function Stagger({ children, step = 60, max = 8, as = "div", style, ...rest }) {
    const items = react_global_default.Children.toArray(children);
    return react_global_default.createElement(as, { style, ...rest }, items.map((child, i) => /* @__PURE__ */ react_global_default.createElement("div", { key: i, className: "ap-rise", style: { "--ap-delay": Math.min(i, max - 1) * step + "ms" } }, child)));
  }

  // components/navigation/Breadcrumb.jsx
  function Breadcrumb({ items = [], style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("nav", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", font: "var(--ap-text-small)", color: "var(--ap-text-muted)", ...style }, ...rest }, items.map((it, i) => {
      const label = it.label || it, last = i === items.length - 1;
      return /* @__PURE__ */ react_global_default.createElement(react_global_default.Fragment, { key: label }, /* @__PURE__ */ react_global_default.createElement("span", { style: { color: last ? "var(--ap-text)" : "var(--ap-text-secondary)", fontVariationSettings: it.data ? "var(--ap-vf-data)" : "var(--ap-vf-prose)" } }, label), !last && /* @__PURE__ */ react_global_default.createElement("span", { "aria-hidden": "true", style: { color: "var(--ap-gray-300)" } }, "/"));
    }));
  }

  // components/navigation/CommandPalette.jsx
  function CommandPalette({ open = false, onClose, items = [], onSelect, placeholder = "Referencia, region o accion" }) {
    const [q, setQ] = react_global_default.useState("");
    const [i, setI] = react_global_default.useState(0);
    const inputRef = react_global_default.useRef(null);
    const hits = items.filter((it) => (it.label + " " + (it.hint || "")).toLowerCase().includes(q.toLowerCase())).slice(0, 8);
    react_global_default.useEffect(() => {
      if (open) {
        setQ("");
        setI(0);
        setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
      }
    }, [open]);
    react_global_default.useEffect(() => {
      if (!open) return;
      const onKey = (e) => {
        if (e.key === "Escape") onClose && onClose();
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setI((v) => Math.min(v + 1, hits.length - 1));
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setI((v) => Math.max(v - 1, 0));
        }
        if (e.key === "Enter" && hits[i]) {
          e.preventDefault();
          onSelect && onSelect(hits[i]);
          onClose && onClose();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [open, hits, i, onClose, onSelect]);
    if (!open) return null;
    return /* @__PURE__ */ react_global_default.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, background: "rgb(20 19 17 / 0.32)", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "12vh", zIndex: 60 } }, /* @__PURE__ */ react_global_default.createElement("div", { onClick: (e) => e.stopPropagation(), style: { width: 560, maxWidth: "calc(100vw - 32px)", background: "var(--ap-surface)", border: "1px solid var(--ap-border-strong)", borderRadius: "var(--ap-radius-panel)", boxShadow: "var(--ap-shadow-2)", overflow: "hidden", animation: "ap-rise var(--ap-dur-layer) var(--ap-ease) both" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", padding: "0 var(--ap-space-4)", height: 48, borderBottom: "1px solid var(--ap-border)" } }, /* @__PURE__ */ react_global_default.createElement(Icon, { name: "search", size: 16, style: { color: "var(--ap-text-muted)" } }), /* @__PURE__ */ react_global_default.createElement(
      "input",
      {
        ref: inputRef,
        value: q,
        onChange: (e) => {
          setQ(e.target.value);
          setI(0);
        },
        placeholder,
        style: { flex: 1, border: 0, outline: "none", background: "transparent", font: "var(--ap-text-ui)", fontVariationSettings: "var(--ap-vf-prose)" }
      }
    ), /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-muted)" } }, "ESC")), /* @__PURE__ */ react_global_default.createElement("div", { style: { maxHeight: 320, overflow: "auto", padding: "var(--ap-space-1)" } }, hits.length ? hits.map((it, idx) => /* @__PURE__ */ react_global_default.createElement(
      "button",
      {
        key: it.id || it.label,
        onMouseEnter: () => setI(idx),
        onClick: () => {
          onSelect && onSelect(it);
          onClose && onClose();
        },
        style: { display: "flex", alignItems: "center", gap: "var(--ap-space-3)", width: "100%", height: "var(--ap-row-h)", padding: "0 var(--ap-space-3)", border: 0, borderRadius: "var(--ap-radius-control)", background: idx === i ? "var(--ap-surface-hover)" : "transparent", cursor: "pointer", textAlign: "left" }
      },
      it.icon && /* @__PURE__ */ react_global_default.createElement(Icon, { name: it.icon, size: 15, style: { color: "var(--ap-text-muted)" } }),
      /* @__PURE__ */ react_global_default.createElement("span", { style: { flex: 1, font: "var(--ap-text-ui)", fontVariationSettings: it.data ? "var(--ap-vf-data)" : "var(--ap-vf-prose)" } }, it.label),
      it.hint && /* @__PURE__ */ react_global_default.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)", fontVariationSettings: "var(--ap-vf-data)" } }, it.hint)
    )) : /* @__PURE__ */ react_global_default.createElement("div", { style: { padding: "var(--ap-space-4) var(--ap-space-3)", font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Sin coincidencias")), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", gap: "var(--ap-space-4)", padding: "var(--ap-space-2) var(--ap-space-4)", borderTop: "1px solid var(--ap-border)", font: "var(--ap-text-micro)", color: "var(--ap-text-muted)" } }, /* @__PURE__ */ react_global_default.createElement("span", { style: { fontVariationSettings: "var(--ap-vf-data)" } }, "\u2191\u2193 mover"), /* @__PURE__ */ react_global_default.createElement("span", { style: { fontVariationSettings: "var(--ap-vf-data)" } }, "\u21B5 abrir"), /* @__PURE__ */ react_global_default.createElement("span", { style: { fontVariationSettings: "var(--ap-vf-data)" } }, "\u2318K cerrar"))));
  }

  // components/navigation/SideNav.jsx
  function SideNav({ brand, groups = [], value, onChange, footer, style, ...rest }) {
    const [hover, setHover] = react_global_default.useState(null);
    return /* @__PURE__ */ react_global_default.createElement("nav", { style: { width: "var(--ap-sidebar-w)", flex: "0 0 auto", background: "var(--ap-surface-sunken)", borderRight: "1px solid var(--ap-border)", display: "flex", flexDirection: "column", ...style }, ...rest }, brand && /* @__PURE__ */ react_global_default.createElement("div", { style: { height: "var(--ap-header-h)", display: "flex", alignItems: "center", padding: "0 var(--ap-space-4)", borderBottom: "1px solid var(--ap-border)" } }, brand), /* @__PURE__ */ react_global_default.createElement("div", { style: { flex: 1, overflow: "auto", padding: "var(--ap-space-3) var(--ap-space-2)" } }, groups.map((g) => /* @__PURE__ */ react_global_default.createElement("div", { key: g.label, style: { marginBottom: "var(--ap-space-4)" } }, /* @__PURE__ */ react_global_default.createElement("div", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", padding: "0 var(--ap-space-2) var(--ap-space-2)" } }, g.label), /* @__PURE__ */ react_global_default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } }, g.items.map((it) => {
      const on = value === it.value;
      return /* @__PURE__ */ react_global_default.createElement(
        "button",
        {
          key: it.value,
          onClick: () => onChange && onChange(it.value),
          onMouseEnter: () => setHover(it.value),
          onMouseLeave: () => setHover(null),
          style: { display: "flex", alignItems: "center", gap: "var(--ap-space-2)", height: "var(--ap-control-h)", padding: "0 var(--ap-space-2)", border: 0, borderRadius: "var(--ap-radius-control)", background: on ? "var(--ap-gray-100)" : hover === it.value ? "var(--ap-gray-50)" : "transparent", color: on ? "var(--ap-text)" : "var(--ap-text-secondary)", font: on ? "var(--ap-text-ui-medium)" : "var(--ap-text-ui)", cursor: "pointer", textAlign: "left", transition: "background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)" }
        },
        it.icon && /* @__PURE__ */ react_global_default.createElement(Icon, { name: it.icon, size: 15 }),
        /* @__PURE__ */ react_global_default.createElement("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, it.label),
        it.count !== void 0 && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: it.count, size: "var(--ap-size-12)", tone: "muted" })
      );
    }))))), footer && /* @__PURE__ */ react_global_default.createElement("div", { style: { padding: "var(--ap-space-3)", borderTop: "1px solid var(--ap-border)" } }, footer));
  }

  // components/navigation/Tabs.jsx
  function Tabs({ tabs = [], value, onChange, style, ...rest }) {
    return /* @__PURE__ */ react_global_default.createElement("div", { role: "tablist", style: { display: "flex", alignItems: "stretch", gap: "var(--ap-space-4)", borderBottom: "1px solid var(--ap-border)", padding: "0 var(--ap-space-4)", background: "var(--ap-surface)", ...style }, ...rest }, tabs.map((t) => {
      const id = t.value || t, label = t.label || t, on = value === id;
      return /* @__PURE__ */ react_global_default.createElement(
        "button",
        {
          key: id,
          role: "tab",
          "aria-selected": on,
          onClick: () => onChange && onChange(id),
          style: { display: "inline-flex", alignItems: "center", gap: 6, height: 40, padding: 0, border: 0, background: "transparent", font: on ? "var(--ap-text-ui-medium)" : "var(--ap-text-ui)", color: on ? "var(--ap-text)" : "var(--ap-text-secondary)", cursor: "pointer", boxShadow: on ? "inset 0 -2px 0 var(--ap-gray-900)" : "none", transition: "color var(--ap-dur-micro) var(--ap-ease),box-shadow var(--ap-dur-state) var(--ap-ease)" }
        },
        label,
        t.count !== void 0 && /* @__PURE__ */ react_global_default.createElement(DataValue, { value: t.count, size: "var(--ap-size-12)", tone: "muted" })
      );
    }));
  }
  return __toCommonJS(index_exports);
})();
