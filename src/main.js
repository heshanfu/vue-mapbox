// exports.MglMap = require('./components/GlMap.vue');
// exports.MglNavigationControl = require('./components/controls/MglNavigationControl.vue');

import GlMap from './components/GlMap.vue';
import NavigationControl from './components/UI/NavigationControl.vue';
import GeolocateControl from './components/UI/GeolocateControl.vue';
import FullscreenControl from './components/UI/FullscreenControl.vue';
import AttributionControl from './components/UI/AttributionControl.vue';
import ScaleControl from './components/UI/ScaleControl.vue';
import Marker from './components/UI/Marker.vue';
import Popup from './components/UI/Popup.vue';

import GeojsonLayer from './components/GeojsonLayer.vue'

export const MglMap = GlMap;

export const MglNavigationControl = NavigationControl;
export const MglGeolocateControl = GeolocateControl;
export const MglFullscreenControl = FullscreenControl;
export const MglAttributionControl = AttributionControl;
export const MglScaleControl = ScaleControl;

export const MglGeojsonLayer = GeojsonLayer;

export const MglMarker = Marker;
export const MglPopup = Popup;



// export default {
//   MglMap,
//   MglNavigationControl
// };
