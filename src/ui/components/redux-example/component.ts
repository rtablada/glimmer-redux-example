import Component, { tracked } from "@glimmer/component";
import createStore from '../../../data/store';

export default class ReduxExample extends Component {
  store: any;

  @tracked
  state: number = 0;

  constructor(options: object) {
    super(options);

    this.store = createStore();
    this.store.subscribe(() => {
      this.state = this.store.getState();
    });
  }

  update() {
    this.store.dispatch({
      type: 'ADD',
    });
  }
}
