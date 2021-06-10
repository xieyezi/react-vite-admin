import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Router from './router'

const queryClient = new QueryClient()
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	)
}

export default App
