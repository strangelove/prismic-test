import React, { Component } from 'react'
import { NextContext } from 'next';
import { Client } from '../helpers';
import Prismic from 'prismic-javascript'

export default class Header extends Component {
  public static async getInitialProps({ req }: NextContext) {
    try {
      const menu = await Client({ req }).query(Prismic.Predicates.at('document.type', 'menu'), {})
      console.log(menu)
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
