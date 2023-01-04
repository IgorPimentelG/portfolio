import React from 'react'
import { Theme, GlobalStyle } from '@theme'
import { Home } from '@pages'

const App: React.FC = () => {
  return (
    <Theme>
			<GlobalStyle />
			<Home />
		</Theme>
  )
}

export { App }
