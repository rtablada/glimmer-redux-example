import Component, { tracked } from "@glimmer/component";
import createStore from '../../../data/store';

export default class ReduxExample extends Component {
  store: any;

  @tracked
  state: any;

  constructor(options: object) {
    super(options);

    this.store = createStore();
    this.store.subscribe(() => {
      this.state = this.store.getState();
    });
  }
}
