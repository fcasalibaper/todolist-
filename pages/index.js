import React from 'react';
import Title from './../components/title';
import List from './../components/list';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Title />
        <List />
      </div>
    )
  }
}
