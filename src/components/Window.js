export default {
  name: 'PhotonkitWindow',
  render (h) {
    return h('div', { staticClass: 'window' }, this.$slots.default)
  },
  template: `<div class="window"><slot></slot></div>`
}
