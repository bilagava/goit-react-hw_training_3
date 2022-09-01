import { Component } from 'react';
// import { cssTransition } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import PokemonForm from './components/PokemonForm';
// import PokemonInfo from './components/PokemonInfo';
// import { Forms } from './components/Forms';
// import * as API from './services/api';
import { Reader } from './components/Reader';
import items from './publications.json';
export class App extends Component {
  // state = {
  //   materials: [],
  //   isLoading: false,
  //   pokemonName: '',
  // };

  // handleFormSubmit = pokemonName => {
  //   this.setState({ pokemonName });
  // };

  // addMaterial = async values => {
  //   try {
  //     this.setState({ isLoading: true });
  //     const material = await API.addMaterial(values);
  //     this.setState(state => ({
  //       materials: [...state.materials, material],
  //       isLoading: false,
  //     }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    // const { isLoading } = this.state;
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {/* <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} /> */}
        {/* {isLoading && <div>LOADING</div>}
        <Forms onSubmit={this.addMaterial} isSubmitting={isLoading} /> */}
        <Reader items={items} />
      </div>
    );
  }
}
