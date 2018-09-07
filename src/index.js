
import Test from './components/test/index.js';

const components = [
	Test
]

const install = function(Vue, opts = {}) {
  components.map(component => {
  	console.log(component)
    Vue.component(component.name, component);
  })
}

export default {
  	install,
	Test
}

