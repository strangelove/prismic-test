import { NextContext } from 'next'
import Link from 'next/link'
import React from 'react'

export default class Error extends React.Component<{ statusCode: number }> {
  public static getInitialProps({ res, err }: NextContext) {
    const statusCode = res ? res.statusCode : err ? err.stack : null
    return { statusCode }
  }

  public render404() {
    return (
      <section className='container'>
        <h1>Oh no!</h1>
        <h3>We can't seem to find the page you're looking for.</h3>
        <h3><Link href='/'><a>Back to the homepage</a></Link></h3>
      </section>
    )
  }

  public render500() {
    return (
      <section className='container'>
        <h1>Oh no!</h1>
        <h3>Something went wrong. Please contact the support.</h3>
      </section>
    )
  }

  public renderDefault() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }

  public render() {
    if (this.props.statusCode == 404) { return this.render404() }
    else if (this.props.statusCode >= 500 && this.props.statusCode <= 599) { return this.render500() }
    else { return this.renderDefault() }
  }
}
