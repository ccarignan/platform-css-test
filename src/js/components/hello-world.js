function plugin(UIkit) {

  if (plugin.installed) {
    return;
  }

  var {addClass, pointerDown} = UIkit.util;

  UIkit.component('hello-world', {

    init() {
      console.log('init!', this);
      addClass(this.$el, 'aq-hello-world');
    },

    methods: {

      shout() {
        alert('this is dev hi world');
      }

    },

    events: {

      [`${pointerDown}`](e) {
        this.shout();
      }

    }

  });

}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
  window.UIkit.use(plugin);
}

export default plugin;
