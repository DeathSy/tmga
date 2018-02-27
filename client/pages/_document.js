import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <html lang='en' dir='ltr'>
        <Head>
          <title>TMGA</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content={
              'user-scalable=0, initial-scale=1, ' +
                'minimum-scale=1, width=device-width, height=device-height'
            }
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
