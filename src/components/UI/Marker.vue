<template>
  <div style="display: none">
    <!-- slot for custom marker -->
    <slot name="marker"/>
    <!-- slot for popup -->
    <slot />
  </div>
</template>

<script>
  import baseMixin from '../../lib/mixin'

  export default {
    name: 'MapMarker',
    mixins: [baseMixin],
    props: {
      // mapbox marker options
      offset: {
        type: [Object, Array],
        default: () => [0, 0]
      },
      coordinates: {
        type: Array,
        required: true
      },
      color: {
        type: String
      },
      anchor: {
        type: String,
        default: 'center'
      },
      draggable: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        initial: true,
        marker: undefined
      }
    },

    watch: {
      coordinates(lngLat) {
        if (this.initial) return
        this.marker.setLngLat(lngLat)
      },
      draggable(next, prev) {
        if (this.initial) return
        this.marker.setDraggable(next)
      }
    },

    mounted() {
      this.$_checkMapTree()
    },

    beforeDestroy() {
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove()
      }
    },

    methods: {
      $_deferredMount(payload) {
        if (!this.marker) {
          const markerOptions = {
            ...this._props
          }
          if (this.$slots.marker) {
            markerOptions.element = this.$slots.marker[0].elm
          }
          this.marker = new this.mapbox.Marker(markerOptions)
        }

        this.map = payload.map
        this.$_addMarker()
        this.initial = false
        payload.component.$off('load', this.$_deferredMount)
      },
      $_addMarker() {
        this.marker
          .setLngLat(this.coordinates)
          .addTo(this.map)

        this.$_emitMapEvent('added', { marker: this.marker })
      },

      remove() {
        this.$_emitMapEvent('removed', { marker: this.marker })
        return this.marker.remove()
      },

      togglePopup() {
        return this.marker.togglePopup()
      }
    }
  }
</script>
