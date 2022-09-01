import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  componentDidMount() {
    const index = localStorage.getItem(LS_KEY);
    if (index !== null) {
      this.setState({
        publicationIndex: Number(index),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.publicationIndex !== this.state.publicationIndex) {
      localStorage.setItem(LS_KEY, this.state.publicationIndex);
    }
  }
  chengeIndex = value => {
    this.setState(state => ({
      publicationIndex: state.publicationIndex + value,
    }));
  };

  //   goForvward = () => {
  //     this.setState(state => ({
  //       publicationIndex: state.publicationIndex + 1,
  //     }));
  //   };
  //   onClick={this.goForvward}

  //   goBack = () => {
  //     this.setState(state => ({
  //       publicationIndex: state.publicationIndex - 1,
  //     }));
  //   };
  //   onClick={this.goBack}

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const numberOfItems = items.length;
    const currentItem = items[publicationIndex];
    const isFirstItem = publicationIndex === 0;
    const isLastItem = publicationIndex === numberOfItems - 1;

    return (
      <div>
        <Controls
          onForward={() => this.chengeIndex(1)}
          onBack={() => this.chengeIndex(-1)}
          prevDisablet={isFirstItem}
          nextDisablet={isLastItem}
        />
        <Progress current={publicationIndex + 1} total={numberOfItems} />
        <Publication item={currentItem} />
      </div>
    );
  }
}

/* -2- <Publication item={currentItem} /> */

/* -3- <Publication title={currentItem.title} text={currentItem.text} /> */
