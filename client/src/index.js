import { render } from "react-dom"
import { ApolloProvider } from "@apollo/client"

import "./index.scss"
import AuthProvider from "./context/AuthProvider"
import client from "./apollo-config"
import App from "./App"

render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById("root")
)