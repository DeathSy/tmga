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
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css' />
          <link rel='stylesheet' href='/static/react-tagsinput.css' />
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
