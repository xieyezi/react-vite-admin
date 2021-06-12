import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import RenderRouter from './router'

const queryClient = new QueryClient()
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<RenderRouter />
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
